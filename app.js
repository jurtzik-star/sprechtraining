/* ============================================================
   app.js
   Steuert den Ablauf der App: Themenauswahl → Gespräch (Text-Chat mit
   einer KI-Prüferin, Antworten werden getippt oder per Diktierfunktion
   des Handys eingesprochen) → Auswertung über den Cloudflare Worker →
   Anzeige des Feedbacks → Übermittlung von Transkript + Bewertung an
   das Google Formular (für die Lehrkraft).

   Nutzt denselben Cloudflare Worker wie die Schreibtraining-App
   (schreibtraining-bewertung), über zwei neue Modi "sprechen_chat" und
   "sprechen_feedback" (siehe worker.js).
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY_PROFILE = "sprechtraining_profile";
  const MIN_ANTWORTEN_FUER_AUSWERTUNG = 3;

  // Deep-Linking: erlaubt anderen Apps (z. B. den Kurs-Lern-Apps), per
  // Link direkt auf ein bestimmtes Thema zu verweisen und den Namen
  // mitzugeben, z. B. sprechtraining.jurtzik-lernapps.de/?name=Anna+Muster&themaId=dtz-b1-arztbesuch-1
  const urlParams = new URLSearchParams(window.location.search);
  const deepLink = {
    name: urlParams.get("name") || "",
    kurs: urlParams.get("kurs") || "",
    themaId: urlParams.get("themaId") || ""
  };

  const state = {
    name: "",
    kurs: "",
    thema: null,
    history: [], // [{role: "assistant"|"user", content: "..."}]
    userTurns: 0
  };

  // ---------- Aufgaben: Teil 2 (Bildbeschreibung) + Teil 3 (Gemeinsam planen) ----------
  // Beide Listen werden zu einer einzigen Auswahl zusammengeführt (mit
  // optgroups getrennt) und anhand von aufgabe.format unterschiedlich
  // dargestellt/behandelt.
  const ALLE_AUFGABEN = THEMEN.concat(typeof SITUATIONEN !== "undefined" ? SITUATIONEN : []);
  function istTeil3(aufgabe) {
    return !!aufgabe && aufgabe.format === "DTZ_B1_TEIL3";
  }
  function aufgabeLabel(aufgabe) {
    return istTeil3(aufgabe) ? aufgabe.situation : aufgabe.title + " (" + aufgabe.bildLabel + ")";
  }

  // ---------- Dynamische Fußzeile ----------
  // Basis: "Lern-App Sprechtraining, erstellt von Thomas Jurtzik"
  // Mit Kurs: "..., Kurs: <Kurs>. erstellt von Thomas Jurtzik"
  // Mit Thema: "..., Kurs: <Kurs>, <Thema>. erstellt von Thomas Jurtzik"
  const FOOTER_APP_NAME = "Sprechtraining";
  function updateFooterText() {
    const footerEl = document.getElementById("appFooter");
    if (!footerEl) return;
    if (!state.kurs) {
      footerEl.textContent = "Lern-App " + FOOTER_APP_NAME + ", erstellt von Thomas Jurtzik";
      return;
    }
    let text = "Lern-App " + FOOTER_APP_NAME + ", Kurs: " + state.kurs;
    if (state.thema) text += ", " + aufgabeLabel(state.thema);
    text += ". erstellt von Thomas Jurtzik";
    footerEl.textContent = text;
  }

  // ---------- Elemente ----------
  const el = {
    stepIntro: document.getElementById("step-intro"),
    stepSelect: document.getElementById("step-select"),
    stepGespraech: document.getElementById("step-gespraech"),
    stepLoading: document.getElementById("step-loading"),
    stepFeedback: document.getElementById("step-feedback"),
    stepError: document.getElementById("step-error"),

    inputName: document.getElementById("input-name"),
    inputKurs: document.getElementById("input-kurs"),
    btnStart: document.getElementById("btn-start"),

    selectThema: document.getElementById("select-thema"),
    themaDetails: document.getElementById("thema-details"),
    btnToGespraech: document.getElementById("btn-to-gespraech"),

    gespraechHeading: document.getElementById("gespraech-heading"),
    gespraechHint: document.getElementById("gespraech-hint"),
    gespraechThemaSummary: document.getElementById("gespraech-thema-summary"),
    chatLog: document.getElementById("chat-log"),
    inputAntwort: document.getElementById("input-antwort"),
    btnSenden: document.getElementById("btn-senden"),
    btnBackSelect: document.getElementById("btn-back-select"),
    btnAuswerten: document.getElementById("btn-auswerten"),
    auswertenHinweis: document.getElementById("auswerten-hinweis"),

    loadingTitle: document.getElementById("loading-title"),
    loadingText: document.getElementById("loading-text"),

    feedbackContent: document.getElementById("feedback-content"),
    btnNewThema: document.getElementById("btn-new-thema"),

    errorMessage: document.getElementById("error-message"),
    btnRetry: document.getElementById("btn-retry")
  };

  function showStep(step) {
    [el.stepIntro, el.stepSelect, el.stepGespraech, el.stepLoading, el.stepFeedback, el.stepError].forEach((s) =>
      s.classList.add("hidden")
    );
    step.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  // ---------- Initiales Setup ----------
  function initIntro() {
    const saved = JSON.parse(localStorage.getItem(LS_KEY_PROFILE) || "{}");
    if (saved.name) el.inputName.value = saved.name;

    el.inputKurs.innerHTML = "";
    (CONFIG.KURSE || []).forEach((k) => {
      const opt = document.createElement("option");
      opt.value = k;
      opt.textContent = k;
      el.inputKurs.appendChild(opt);
    });
    if (saved.kurs) el.inputKurs.value = saved.kurs;

    if (deepLink.name) el.inputName.value = deepLink.name;
    if (deepLink.kurs && (CONFIG.KURSE || []).includes(deepLink.kurs)) {
      el.inputKurs.value = deepLink.kurs;
    }
  }

  function istFreigeschaltet(aufgabe) {
    // aktiv fehlt (älterer Eintrag ohne das Feld) -> als freigeschaltet behandeln.
    return aufgabe.aktiv !== false;
  }

  function initThemaOptions() {
    el.selectThema.innerHTML = "";

    const themenAktiv = THEMEN.filter(istFreigeschaltet);
    if (themenAktiv.length) {
      const groupTeil2 = document.createElement("optgroup");
      groupTeil2.label = "Teil 2 – Bildbeschreibung";
      themenAktiv.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = aufgabeLabel(t);
        groupTeil2.appendChild(opt);
      });
      el.selectThema.appendChild(groupTeil2);
    }

    const situationenAktiv = (typeof SITUATIONEN !== "undefined" ? SITUATIONEN : []).filter(istFreigeschaltet);
    if (situationenAktiv.length) {
      const groupTeil3 = document.createElement("optgroup");
      groupTeil3.label = "Teil 3 – Gemeinsam planen";
      situationenAktiv.forEach((s) => {
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = aufgabeLabel(s) + " (" + s.handlungsfeld + ")";
        groupTeil3.appendChild(opt);
      });
      el.selectThema.appendChild(groupTeil3);
    }

    renderThemaDetails();
  }

  function themaDetailsHtml(thema) {
    const imgTag = thema.imageFile
      ? `<img src="${thema.imageFile}" alt="${escapeHtml(thema.bildLabel)}" onerror="this.remove()">`
      : "";
    return `
      ${imgTag}
      <h3>${escapeHtml(thema.title)} (${escapeHtml(thema.bildLabel)})</h3>
      <p><em>${escapeHtml(thema.formatLabel)}</em></p>
      <p><strong>Bitte berichten Sie kurz:</strong></p>
      <ul>${thema.bildFragen.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
      <p><strong>Mögliche Prüfungsfragen (erzählen Sie auch):</strong></p>
      <ul>${thema.erfahrungsFragen.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
    `;
  }

  function situationDetailsHtml(situation) {
    const imgTag = situation.imageFile
      ? `<img class="situation-foto" src="${situation.imageFile}" alt="${escapeHtml(situation.situation)}" onerror="this.remove()">`
      : "";
    return `
      ${imgTag}
      <h3>${escapeHtml(situation.situation)} <span style="font-weight:400; color:var(--color-muted);">(${escapeHtml(situation.handlungsfeld)})</span></h3>
      <p><em>${escapeHtml(situation.formatLabel)}</em></p>
      <p class="situation-text"><strong>Situation:</strong> ${escapeHtml(situation.situationText)}</p>
      <p class="situation-text"><strong>Aufgabe:</strong> ${escapeHtml(situation.aufgabeText)}</p>
      <div class="klebezettel-wrap">
        <div class="klebezettel">
          <div class="klebezettel-pin"></div>
          <ul>${situation.stichpunkte.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  function detailsHtml(aufgabe) {
    return istTeil3(aufgabe) ? situationDetailsHtml(aufgabe) : themaDetailsHtml(aufgabe);
  }

  function renderThemaDetails() {
    const thema = ALLE_AUFGABEN.find((t) => t.id === el.selectThema.value);
    if (!thema) {
      el.themaDetails.innerHTML = "";
      return;
    }
    el.themaDetails.innerHTML = detailsHtml(thema);
  }

  el.selectThema.addEventListener("change", renderThemaDetails);

  // ---------- Chat-Rendering ----------
  function appendBubble(role, text) {
    const div = document.createElement("div");
    div.className = "chat-bubble " + role;
    div.textContent = text;
    el.chatLog.appendChild(div);
    el.chatLog.scrollTop = el.chatLog.scrollHeight;
    return div;
  }

  function showTypingBubble() {
    const div = document.createElement("div");
    div.className = "chat-bubble assistant typing";
    div.textContent = "…";
    div.id = "typing-bubble";
    el.chatLog.appendChild(div);
    el.chatLog.scrollTop = el.chatLog.scrollHeight;
  }

  function removeTypingBubble() {
    const el2 = document.getElementById("typing-bubble");
    if (el2) el2.remove();
  }

  function setChatInputEnabled(enabled) {
    el.inputAntwort.disabled = !enabled;
    el.btnSenden.disabled = !enabled;
  }

  function updateAuswertenButton() {
    const genug = state.userTurns >= MIN_ANTWORTEN_FUER_AUSWERTUNG;
    el.btnAuswerten.disabled = !genug;
    el.auswertenHinweis.style.display = genug ? "none" : "block";
  }

  // ---------- Direkt zu einem Thema springen (Auswahl -> Gespräch) ----------
  function goToGespraech(thema) {
    if (!thema) return;
    state.thema = thema;
    state.history = [];
    state.userTurns = 0;
    el.chatLog.innerHTML = "";
    el.inputAntwort.value = "";
    updateAuswertenButton();
    updateFooterText();

    el.gespraechThemaSummary.innerHTML = detailsHtml(thema);

    if (istTeil3(thema)) {
      el.gespraechHeading.textContent = "3. Gespräch mit deiner Gesprächspartnerin";
      el.gespraechHint.textContent =
        "Antworte einfach in eigenen Worten. Ihr plant gemeinsam: Mach ruhig eigene Vorschläge, nicht nur Antworten auf Fragen.";
    } else {
      el.gespraechHeading.textContent = "3. Gespräch mit der Prüferin";
      el.gespraechHint.textContent =
        "Antworte einfach in eigenen Worten. Die Prüferin stellt dir nach und nach die Fragen, die auch in der echten Prüfung vorkommen können.";
    }

    const eroeffnung = istTeil3(thema)
      ? thema.aufgabeText + " Fangen wir mit der ersten Frage an: " + thema.stichpunkte[0]
      : thema.bildFragen.join(" ");
    appendBubble("assistant", eroeffnung);
    state.history.push({ role: "assistant", content: eroeffnung });

    showStep(el.stepGespraech);
  }

  // ---------- Event Listener ----------
  function startFlow() {
    state.name = el.inputName.value.trim();
    state.kurs = el.inputKurs.value;
    if (!state.name) {
      alert("Bitte gib deinen Namen ein.");
      return;
    }
    localStorage.setItem(LS_KEY_PROFILE, JSON.stringify({ name: state.name, kurs: state.kurs }));
    updateFooterText();
    initThemaOptions();

    const linkedThema = deepLink.themaId ? ALLE_AUFGABEN.find((t) => t.id === deepLink.themaId) : null;
    if (linkedThema) {
      el.selectThema.value = linkedThema.id;
      renderThemaDetails();
      goToGespraech(linkedThema);
    } else {
      if (deepLink.themaId) {
        console.warn(`Deep-Link: Thema "${deepLink.themaId}" wurde nicht gefunden.`);
      }
      showStep(el.stepSelect);
    }
  }

  el.btnStart.addEventListener("click", startFlow);

  el.btnToGespraech.addEventListener("click", () => {
    const thema = ALLE_AUFGABEN.find((t) => t.id === el.selectThema.value);
    goToGespraech(thema);
  });

  el.btnBackSelect.addEventListener("click", () => {
    state.thema = null;
    updateFooterText();
    showStep(el.stepSelect);
  });

  el.btnNewThema.addEventListener("click", () => {
    state.thema = null;
    updateFooterText();
    showStep(el.stepSelect);
  });

  el.btnRetry.addEventListener("click", () => showStep(el.stepGespraech));

  // ---------- Nachricht senden (ein Gesprächsschritt) ----------
  async function sendAntwort() {
    const text = el.inputAntwort.value.trim();
    if (!text) return;

    appendBubble("user", text);
    state.history.push({ role: "user", content: text });
    state.userTurns += 1;
    updateAuswertenButton();
    el.inputAntwort.value = "";

    setChatInputEnabled(false);
    showTypingBubble();
    try {
      const nachricht = await requestChatTurn(state.thema, state.history);
      removeTypingBubble();
      appendBubble("assistant", nachricht);
      state.history.push({ role: "assistant", content: nachricht });
    } catch (err) {
      removeTypingBubble();
      console.error(err);
      appendBubble(
        "assistant",
        "(Die Prüferin konnte gerade nicht antworten. Du kannst trotzdem weiterschreiben oder das Gespräch auswerten lassen.)"
      );
    } finally {
      setChatInputEnabled(true);
      el.inputAntwort.focus();
    }
  }

  el.btnSenden.addEventListener("click", sendAntwort);
  el.inputAntwort.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendAntwort();
    }
  });

  el.btnAuswerten.addEventListener("click", async () => {
    if (state.userTurns < MIN_ANTWORTEN_FUER_AUSWERTUNG) return;
    el.loadingTitle.textContent = "Deine Bewertung wird erstellt…";
    el.loadingText.textContent = "Das kann ein paar Sekunden dauern.";
    showStep(el.stepLoading);
    try {
      const feedback = await requestFeedback(state.thema, state.history);
      renderFeedback(feedback);
      showStep(el.stepFeedback);
      submitToGoogleForm(feedback).catch((e) => console.warn("Google-Formular-Übermittlung fehlgeschlagen:", e));
    } catch (err) {
      console.error(err);
      el.errorMessage.textContent =
        "Die Bewertung konnte nicht erstellt werden. Bitte prüfe deine Internetverbindung und versuche es erneut. (" +
        (err && err.message ? err.message : "Unbekannter Fehler") +
        ")";
      showStep(el.stepError);
    }
  });

  // ---------- Worker-Aufrufe ----------
  async function callWorker(payload) {
    const response = await fetch(CONFIG.WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-Secret": CONFIG.APP_SECRET
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      throw new Error(`Server antwortete mit Status ${response.status}. ${errBody}`);
    }
    return response.json();
  }

  function themaForWorker(thema) {
    if (istTeil3(thema)) {
      return {
        format: thema.format,
        formatLabel: thema.formatLabel,
        handlungsfeld: thema.handlungsfeld,
        situation: thema.situation,
        situationText: thema.situationText,
        aufgabeText: thema.aufgabeText,
        stichpunkte: thema.stichpunkte,
        zielRedezeitSekunden: thema.zielRedezeitSekunden
      };
    }
    return {
      format: thema.format,
      title: thema.title,
      bildLabel: thema.bildLabel,
      formatLabel: thema.formatLabel,
      bildFragen: thema.bildFragen,
      erfahrungsFragen: thema.erfahrungsFragen,
      zielRedezeitSekunden: thema.zielRedezeitSekunden
    };
  }

  async function requestChatTurn(thema, history) {
    const data = await callWorker({
      mode: "sprechen_chat",
      thema: themaForWorker(thema),
      history
    });
    if (!data.message) throw new Error("Antwort enthielt keine Nachricht.");
    return data.message;
  }

  async function requestFeedback(thema, history) {
    const data = await callWorker({
      mode: "sprechen_feedback",
      thema: themaForWorker(thema),
      history
    });
    if (!data.feedback) throw new Error("Antwort enthielt kein Feedback.");
    return data.feedback;
  }

  // ---------- Feedback rendern ----------
  function renderFeedback(feedback) {
    let html = "";

    html += `<div class="feedback-block gesamt"><h3>Gesamteinschätzung</h3><p>${escapeHtml(
      feedback.gesamteinschätzung || ""
    )}</p></div>`;

    if (Array.isArray(feedback.stärken) && feedback.stärken.length) {
      html += `<div class="feedback-block"><h3>💪 Das ist dir schon gut gelungen</h3><ul>${feedback.stärken
        .map((s) => `<li>${escapeHtml(s)}</li>`)
        .join("")}</ul></div>`;
    }

    if (Array.isArray(feedback.verbesserungstipps) && feedback.verbesserungstipps.length) {
      html += `<div class="feedback-block tipps"><h3>🎯 Konkrete Tipps zur Verbesserung</h3><ul>${feedback.verbesserungstipps
        .map((s) => `<li>${escapeHtml(s)}</li>`)
        .join("")}</ul></div>`;
    }

    if (feedback.kriterien) {
      const labels = {
        vollstaendigkeit: "Vollständigkeit (alle Punkte behandelt)",
        verstaendlichkeit: "Verständlichkeit / Sprachrichtigkeit",
        interaktion: istTeil3(state.thema) ? "Eigene Vorschläge / Verhandeln" : "Reaktion auf Rückfragen",
        umfang: "Umfang / Ausführlichkeit"
      };
      html += `<div class="feedback-block"><h3>Bewertung nach Kriterien</h3>`;
      Object.keys(feedback.kriterien).forEach((key) => {
        const kf = feedback.kriterien[key];
        if (!kf) return;
        html += `<div class="kriterium">
          <span class="kriterium-label">${escapeHtml(labels[key] || key)}</span>
          <span class="kriterium-einschaetzung">${escapeHtml(kf.einschätzung || "")}</span>
          <p>${escapeHtml(kf.kommentar || "")}</p>
        </div>`;
      });
      html += `</div>`;
    }

    if (feedback.umfang_hinweis) {
      html += `<div class="feedback-block"><p><em>${escapeHtml(feedback.umfang_hinweis)}</em></p></div>`;
    }

    el.feedbackContent.innerHTML = html;
  }

  // ---------- Transkript als lesbaren Klartext aufbereiten ----------
  function formatTranskript(history) {
    return history
      .map((m) => (m.role === "assistant" ? "Prüferin: " : state.name + ": ") + m.content)
      .join("\n");
  }

  function formatBewertungDetails(feedback) {
    const lines = [];
    if (Array.isArray(feedback.stärken) && feedback.stärken.length) {
      lines.push("Stärken:");
      feedback.stärken.forEach((s) => lines.push(`- ${s}`));
      lines.push("");
    }
    if (Array.isArray(feedback.verbesserungstipps) && feedback.verbesserungstipps.length) {
      lines.push("Verbesserungstipps:");
      feedback.verbesserungstipps.forEach((s) => lines.push(`- ${s}`));
      lines.push("");
    }
    if (feedback.kriterien) {
      lines.push("Bewertung nach Kriterien:");
      Object.keys(feedback.kriterien).forEach((key) => {
        const kf = feedback.kriterien[key];
        if (!kf) return;
        lines.push(`${key}: ${kf.einschätzung || ""}`);
        if (kf.kommentar) lines.push(`  ${kf.kommentar}`);
      });
      lines.push("");
    }
    if (feedback.umfang_hinweis) {
      lines.push(`Umfang-Hinweis: ${feedback.umfang_hinweis}`);
    }
    return lines.join("\n").trim();
  }

  // ---------- Übermittlung an Google Formular ----------
  async function submitToGoogleForm(feedback) {
    if (!CONFIG.GOOGLE_FORM_ACTION_URL || CONFIG.GOOGLE_FORM_ACTION_URL.includes("DEINE-FORM-ID")) {
      console.warn("Google-Formular ist noch nicht konfiguriert (config.js).");
      return;
    }
    const ids = CONFIG.GOOGLE_FORM_ENTRY_IDS;
    const bewertungDetails = formatBewertungDetails(feedback);

    const formData = new URLSearchParams();
    formData.append(ids.name, state.name);
    formData.append(ids.kurs, state.kurs);
    formData.append(ids.thema, `[${state.thema.formatLabel}] ${aufgabeLabel(state.thema)}`);
    formData.append(ids.transkript, formatTranskript(state.history));
    formData.append(ids.gesamteinschaetzung, feedback.gesamteinschätzung || "");
    formData.append(ids.bewertungDetails, bewertungDetails);

    const actionUrl =
      (CONFIG.GOOGLE_FORM_ACTION_URL_BY_KURS && CONFIG.GOOGLE_FORM_ACTION_URL_BY_KURS[state.kurs]) ||
      CONFIG.GOOGLE_FORM_ACTION_URL;

    await fetch(actionUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    });
  }

  // ---------- Start ----------
  initIntro();
  updateFooterText();

  if (deepLink.name) {
    startFlow();
  }
})();
