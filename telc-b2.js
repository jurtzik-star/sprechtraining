/* ============================================================
   telc-b2.js
   Sprechthemen im Format "telc Zertifikat Beruf B2" (Sprechen), für die
   Kurse BSK-B1+ und BSK-B2 - beide haben hier ihren eigenen Themenpool
   (Feld "kurse"), getrennt vom DTZ-B1-Format aus themen.js/situationen.js,
   das nur noch für B1 gilt (Feld "kapitel" ist die jeweils eigene
   Kapitelnummer des Kurses, keine kursübergreifende Zählung). Ziel für
   BSK-B1+: eine progressive Steigerung passend zu dessen Kapiteln, die
   nahtlos in die spätere telc-B2-Sprechen-Praxis von BSK-B2 übergeht.

   Drei Prüfungsteile, jeweils als eigenes Array (analog zu Teil 2/Teil 3
   in themen.js/situationen.js) und in app.js/worker.js als eigene
   "Kind" behandelt:

   - TELC_TEIL1 (Format "TELC_B2_TEIL1"): "Über ein Thema sprechen"
     (telc Sprechen Teil 1A/B/C in einem Durchgang). Kein Partner nötig,
     die KI spielt die Prüferin: kurzer Monolog zur Leitfrage, danach
     ein bis zwei Anschlussfragen/Vertiefungsfragen der Prüferin - genau
     wie im echten Prüfungsteil.

   - TELC_TEIL2 (Format "TELC_B2_TEIL2"): "Mit Kolleginnen und Kollegen
     sprechen" (Rollenspiel, informelles kurzes Gespräch). Die KI spielt
     KEINE Prüferin, sondern eine Kollegin/einen Kollegen und eröffnet
     das Gespräch mit einer kurzen Frage/Aussage; danach ein zweites,
     unabhängiges kurzes Gesprächsthema.

   - TELC_TEIL3 (Format "TELC_B2_TEIL3"): "Lösungswege diskutieren"
     (Rolleninspiel, gemeinsame Problemlösung). Die KI spielt ebenfalls
     eine Kollegin/einen Kollegen, verhandelt mit und macht eigene
     Vorschläge - strukturell wie SITUATIONEN (DTZ Teil 3), aber mit
     Arbeitsplatz-Problemen statt privaten Planungssituationen.

   Jedes Thema hat ein Feld "kapitel" (BSK-B1+-Kapitelnummer, zu der es
   inhaltlich passt) und "kurse" (aktuell nur BSK-B1+, da dieses Format
   speziell für den Brückenkurs gedacht ist). Jedes Kapitel bekommt eine
   eigene, kapitelpassende Übung zu ALLEN DREI Prüfungsteilen (Teil 1,
   Teil 2, Teil 3) - keine Progression, bei der einzelne Prüfungsteile erst
   in späteren Kapiteln dazukommen. Die "progressive Steigerung" liegt im
   Inhalt/Thema je Kapitel, nicht im Prüfungsteil. Nur Kapitel 1-3 sind
   bisher ausgearbeitet, weil die BSK-B1+-App bisher nur diese drei Kapitel
   hat (siehe [[wortschatz-apps]] in Thomas' Notizen) - Kapitel 4-7 folgen,
   sobald diese Kapitel in der Wortschatz-App gebaut werden.

   Kapitel-Freischaltung (Feld "aktiv"): nur das jeweils aktuelle Kapitel
   der BSK-B1+ (CURRENT_CHAPTER in der Wortschatz-App) sollte "aktiv: true"
   haben, alle späteren Kapitel "aktiv: false" - Thomas schaltet sie frei,
   sobald der Kurs dort angekommen ist.

   Alle Inhalte sind komplett neu verfasst (keine Lehrwerkstexte kopiert),
   orientiert an der offiziellen Prüfungsstruktur.
   ============================================================ */

const TELC_KURS_BSKB1PLUS = ["BSK-B1+ Rottweil (KL T. Jurtzik)"];
const TELC_KURS_BSKB2 = ["BSK-B2 Rottweil (KL T. Jurtzik)"];

/* ---------------- Teil 1: Über ein Thema sprechen ---------------- */
const TELC_TEIL1 = [
  {
    id: "telc-b2-berufswahl-erfahrungen",
    aktiv: true, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 1,
    title: "Meine Berufswahl",
    imageFile: "images/telc-b2-berufswahl.jpg",
    leitfrage: "Beschreiben Sie die Erfahrungen und Ereignisse, die Ihre Berufswahl beeinflusst haben.",
    hilfen: [
      "Welchen Beruf haben Sie gewählt (oder möchten Sie wählen)? Warum?",
      "Gab es wichtige Personen oder Erlebnisse, die Ihre Entscheidung beeinflusst haben?",
      "Welche Beratung oder Informationen haben Ihnen dabei geholfen?"
    ],
    moeglicheNachfragen: [
      "Was war für Sie der wichtigste Moment bei dieser Entscheidung?",
      "Hätten Sie sich rückblickend auch anders entscheiden können?",
      "Was würden Sie jemandem raten, der vor derselben Entscheidung steht?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-berufliches-vorbild",
    aktiv: true,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 1,
    title: "Ein berufliches Vorbild",
    imageFile: "images/telc-b2-vorbild.jpg",
    leitfrage: "Beschreiben Sie eine Person aus Ihrem Umfeld, die für Sie ein berufliches Vorbild ist.",
    hilfen: [
      "Wer ist diese Person, und woher kennen Sie sie?",
      "Welche Eigenschaften bewundern Sie an dieser Person?",
      "Wie hat diese Person Sie beeinflusst?"
    ],
    moeglicheNachfragen: [
      "Was genau macht diese Person beruflich?",
      "Haben Sie schon einmal mit dieser Person über Ihren eigenen Berufsweg gesprochen?",
      "Möchten Sie in Zukunft etwas Ähnliches erreichen wie diese Person?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-arbeitssuche-vorgehen",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 2,
    title: "Vorgehen bei der Arbeitssuche",
    imageFile: "images/telc-b2-vorgehen-arbeitssuche.jpg",
    leitfrage: "Beschreiben Sie, wie Sie bei der Suche nach einer Arbeitsstelle vorgehen oder vorgegangen sind.",
    hilfen: [
      "Wo haben Sie nach Stellenangeboten gesucht (z. B. Internet, Jobcenter, Zeitung)?",
      "Wie haben Sie den ersten Kontakt zu einer Firma hergestellt?",
      "Welche Bewerbungsunterlagen haben Sie gebraucht?"
    ],
    moeglicheNachfragen: [
      "Was war für Sie bei der Arbeitssuche am schwierigsten?",
      "Hat Ihnen jemand bei der Arbeitssuche geholfen?",
      "Wie ist die Arbeitssuche in Ihrem Heimatland organisiert, im Vergleich zu Deutschland?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bewerbungsgespraech",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 2,
    title: "Ein Bewerbungsgespräch",
    imageFile: "images/telc-b2-bewerbungsgespraech.jpg",
    leitfrage: "Beschreiben Sie, worauf es bei einem Bewerbungsgespräch ankommt.",
    hilfen: [
      "Wie bereitet man sich am besten auf ein Bewerbungsgespräch vor?",
      "Welche Kleidung und welches Verhalten sind angemessen?",
      "Mit welchen typischen Fragen muss man rechnen?"
    ],
    moeglicheNachfragen: [
      "Hatten Sie selbst schon einmal ein Bewerbungsgespräch? Wie war das?",
      "Welche Frage würde Sie in einem Bewerbungsgespräch am meisten nervös machen?",
      "Was möchten Sie selbst im Bewerbungsgespräch über die Firma erfahren?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-arbeitgeber-beschreiben",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 3,
    title: "Einen Arbeitgeber beschreiben",
    imageFile: "images/telc-b2-arbeitgeber-beschreiben.jpg",
    leitfrage: "Beschreiben Sie einen Arbeitgeber, für den Sie gearbeitet haben oder gerne arbeiten möchten.",
    hilfen: [
      "In welcher Branche ist die Firma tätig, und welche Produkte oder Dienstleistungen bietet sie an?",
      "Welche Abteilungen gibt es, und welche Aufgaben haben sie?",
      "Was ist an dieser Firma besonders?"
    ],
    moeglicheNachfragen: [
      "Wie sind Sie zu dieser Firma gekommen?",
      "Was gefällt Ihnen an dieser Firma besonders gut?",
      "Gibt es auch etwas, das Sie an dieser Firma verändern würden?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-gutes-arbeitsumfeld",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 3,
    title: "Ein gutes Arbeitsumfeld",
    imageFile: "images/telc-b2-gutes-arbeitsumfeld.jpg",
    leitfrage: "Beschreiben Sie, wie Sie sich ein gutes Arbeitsumfeld vorstellen.",
    hilfen: [
      "Was ist Ihnen wichtiger: ein sicherer Arbeitsplatz, ein gutes Gehalt oder Karrieremöglichkeiten?",
      "Wie wichtig ist Ihnen die Kommunikation mit Kolleg:innen und Vorgesetzten?",
      "Haben Sie schon einmal ein besonders gutes (oder schlechtes) Arbeitsklima erlebt?"
    ],
    moeglicheNachfragen: [
      "Was würden Sie tun, wenn das Arbeitsklima in einer Firma schlecht wäre?",
      "Ist Ihnen ein hohes Gehalt oder ein nettes Team wichtiger? Warum?",
      "Was macht für Sie persönlich Spaß an der Arbeit?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 1 (Berufsorientierung) ---- */
  {
    id: "telc-b2-bskb2-beruflicher-einstieg",
    aktiv: true,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 1,
    title: "Mein beruflicher Einstieg",
    imageFile: "images/telc-b2-bskb2-beruflicher-einstieg.jpg",
    leitfrage: "Beschreiben Sie Ihren Einstieg in einen neuen Beruf oder eine neue Stelle.",
    hilfen: [
      "Wie war Ihr erster Arbeitstag oder Ihre erste Zeit in der neuen Stelle?",
      "Wer hat Ihnen beim Einstieg geholfen, zum Beispiel Kolleg:innen oder eine Einarbeitung?",
      "Was war am Anfang besonders neu oder ungewohnt für Sie?"
    ],
    moeglicheNachfragen: [
      "Was hätten Sie sich am Anfang mehr gewünscht?",
      "Wie lange hat es gedauert, bis Sie sich richtig eingearbeitet gefühlt haben?",
      "Was würden Sie jemandem raten, der gerade neu in einem Betrieb anfängt?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-beratung-geholfen",
    aktiv: true,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 1,
    title: "Eine Beratung, die mir geholfen hat",
    imageFile: "images/telc-b2-bskb2-beratung-geholfen.jpg",
    leitfrage: "Beschreiben Sie eine Beratung, die Ihnen beruflich weitergeholfen hat.",
    hilfen: [
      "Um welche Art von Beratung ging es, zum Beispiel Berufsberatung oder ein Gespräch mit einer Kollegin/einem Kollegen?",
      "Wer hat Sie beraten, und wie ist das Gespräch abgelaufen?",
      "Was haben Sie aus der Beratung konkret mitgenommen?"
    ],
    moeglicheNachfragen: [
      "Was hat Ihnen an dieser Beratung besonders geholfen?",
      "Haben Sie die Ratschläge auch wirklich umgesetzt?",
      "Würden Sie diese Beratungsstelle oder Person auch anderen empfehlen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 2 (Arbeitsorte und -welten) ---- */
  {
    id: "telc-b2-bskb2-meine-branche",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 2,
    title: "Meine Branche",
    imageFile: "images/telc-b2-bskb2-meine-branche.jpg",
    leitfrage: "Beschreiben Sie Ihre Branche oder ein Berufsfeld, das Sie gut kennen.",
    hilfen: [
      "In welcher Branche arbeiten Sie, oder welches Berufsfeld kennen Sie gut?",
      "Welche typischen Aufgaben und Tätigkeiten gibt es in dieser Branche?",
      "Wie hat sich diese Branche in den letzten Jahren verändert?"
    ],
    moeglicheNachfragen: [
      "Was gefällt Ihnen an dieser Branche besonders?",
      "Welche Herausforderungen gibt es in dieser Branche?",
      "Würden Sie jemandem raten, in dieser Branche zu arbeiten? Warum?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-zufrieden-leben",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 2,
    title: "Zufrieden leben in Deutschland",
    imageFile: "images/telc-b2-bskb2-zufrieden-leben.jpg",
    leitfrage: "Beschreiben Sie, wie zufrieden Sie mit Ihrem Leben in Deutschland sind.",
    hilfen: [
      "Was gefällt Ihnen an Ihrem Leben in Deutschland besonders gut?",
      "Gibt es auch Dinge, die Ihnen schwerfallen oder die Sie vermissen?",
      "Wie hat sich Ihr Leben seit der Ankunft in Deutschland verändert?"
    ],
    moeglicheNachfragen: [
      "Was würde Ihre Zufriedenheit noch verbessern?",
      "Was vermissen Sie am meisten aus Ihrem Heimatland?",
      "Was würden Sie jemandem raten, der neu nach Deutschland kommt?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 3 (Im Bewerbungsprozess) ---- */
  {
    id: "telc-b2-bskb2-stelle-gesucht",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 3,
    title: "Wie ich eine Stelle gesucht habe",
    imageFile: "images/telc-b2-bskb2-stelle-gesucht.jpg",
    leitfrage: "Berichten Sie, wie Sie selbst schon einmal eine Arbeitsstelle gesucht haben.",
    hilfen: [
      "Wo haben Sie nach der Stelle gesucht, zum Beispiel im Internet oder über Bekannte?",
      "Wie haben Sie sich beworben, und welche Unterlagen haben Sie gebraucht?",
      "Wie lange hat die Suche gedauert?"
    ],
    moeglicheNachfragen: [
      "Was war bei dieser Suche besonders schwierig?",
      "Hat Ihnen jemand bei der Suche geholfen?",
      "Was würden Sie beim nächsten Mal anders machen?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-lebenslauf",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 3,
    title: "Mein Lebenslauf",
    imageFile: "images/telc-b2-bskb2-lebenslauf.jpg",
    leitfrage: "Beschreiben Sie Ihren beruflichen Werdegang, wie er in Ihrem Lebenslauf steht.",
    hilfen: [
      "Welche Ausbildung oder welches Studium haben Sie abgeschlossen?",
      "Welche beruflichen Stationen sind für Sie besonders wichtig?",
      "Wie halten Sie Ihren Lebenslauf aktuell?"
    ],
    moeglicheNachfragen: [
      "Worauf sind Sie in Ihrem Werdegang besonders stolz?",
      "Gibt es eine Lücke oder einen Wechsel, den Sie gerne erklären?",
      "Was würden Sie in Ihrem Lebenslauf gerne noch ergänzen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 4 (Eine neue Arbeit) ---- */
  {
    id: "telc-b2-bskb2-mein-vorstellungsgespraech",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 4,
    title: "Mein Vorstellungsgespräch",
    imageFile: "images/telc-b2-bskb2-mein-vorstellungsgespraech.jpg",
    leitfrage: "Berichten Sie von einem Vorstellungsgespräch, das Sie selbst geführt haben.",
    hilfen: [
      "Wie haben Sie sich auf das Gespräch vorbereitet?",
      "Welche Fragen wurden Ihnen gestellt?",
      "Wie ist das Gespräch für Sie gelaufen?"
    ],
    moeglicheNachfragen: [
      "Was hat Sie an diesem Gespräch überrascht?",
      "Was würden Sie beim nächsten Mal anders machen?",
      "Welche Frage hat Sie am meisten nervös gemacht?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-naehe-distanz",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 4,
    title: "Nähe und Distanz am Arbeitsplatz",
    imageFile: "images/telc-b2-bskb2-naehe-distanz.jpg",
    leitfrage: "Beschreiben Sie, wie viel Nähe und Distanz zu Kolleg:innen für Sie richtig ist.",
    hilfen: [
      "Wie eng ist der Kontakt zu Ihren Kolleg:innen normalerweise?",
      "Was ist Ihnen im Umgang mit Kolleg:innen wichtig?",
      "Gibt es für Sie einen Unterschied zwischen privatem und beruflichem Umgang miteinander?"
    ],
    moeglicheNachfragen: [
      "Wie zeigt sich für Sie zu viel Nähe oder zu viel Distanz?",
      "War das in Ihrem Heimatland anders? Wie?",
      "Wie gehen Sie damit um, wenn jemand Ihnen zu nahekommt?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 5 (Im Arbeitsalltag) ---- */
  {
    id: "telc-b2-bskb2-freizeitbeschaeftigungen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 5,
    title: "Meine Freizeitbeschäftigungen",
    imageFile: "images/telc-b2-bskb2-freizeitbeschaeftigungen.jpg",
    leitfrage: "Beschreiben Sie, wie Sie Ihre arbeitsfreie Zeit verbringen.",
    hilfen: [
      "Welche Hobbys oder Freizeitbeschäftigungen haben Sie?",
      "Wie wichtig ist Ihnen der Ausgleich zur Arbeit?",
      "Mit wem verbringen Sie Ihre Freizeit meistens?"
    ],
    moeglicheNachfragen: [
      "Wie viel Freizeit bleibt Ihnen normalerweise neben der Arbeit?",
      "Hat sich Ihre Freizeitgestaltung in Deutschland verändert?",
      "Was würden Sie gerne öfter in Ihrer Freizeit machen?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-wichtiges-gespraech",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 5,
    title: "Ein Gespräch im Beruf, das mir wichtig war",
    imageFile: "images/telc-b2-bskb2-wichtiges-gespraech.jpg",
    leitfrage: "Berichten Sie von einer beruflichen Besprechung, die Ihnen in Erinnerung geblieben ist.",
    hilfen: [
      "Worum ging es in diesem Gespräch?",
      "Wer hat an diesem Gespräch teilgenommen?",
      "Warum ist Ihnen dieses Gespräch besonders in Erinnerung geblieben?"
    ],
    moeglicheNachfragen: [
      "Was hat sich durch dieses Gespräch verändert?",
      "Wie haben Sie sich während des Gesprächs gefühlt?",
      "Was haben Sie aus diesem Gespräch gelernt?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 6 (Arbeitsabläufe) ---- */
  {
    id: "telc-b2-bskb2-mobilitaet-zukunft",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 6,
    title: "Die Mobilität der Zukunft",
    imageFile: "images/telc-b2-bskb2-mobilitaet-zukunft.jpg",
    leitfrage: "Beschreiben Sie, wie wir uns Ihrer Meinung nach in Zukunft fortbewegen werden.",
    hilfen: [
      "Welche Verkehrsmittel nutzen Sie heute am meisten?",
      "Welche neuen Entwicklungen bei der Mobilität kennen Sie, zum Beispiel E-Autos oder E-Bikes?",
      "Was wünschen Sie sich für die Mobilität der Zukunft?"
    ],
    moeglicheNachfragen: [
      "Was spricht für, was gegen Elektromobilität?",
      "Wie wichtig ist Ihnen Umweltschutz bei der Wahl des Verkehrsmittels?",
      "Wie kommen Sie selbst zur Arbeit?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-erfahrung-kundenservice",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 6,
    title: "Meine Erfahrung im Kundenservice",
    imageFile: "images/telc-b2-bskb2-erfahrung-kundenservice.jpg",
    leitfrage: "Berichten Sie von einer Erfahrung im Umgang mit Kund:innen.",
    hilfen: [
      "In welcher Situation hatten Sie Kontakt mit Kund:innen?",
      "Wie ist diese Situation verlaufen?",
      "Was ist Ihnen im Umgang mit Kund:innen wichtig?"
    ],
    moeglicheNachfragen: [
      "Wie gehen Sie mit schwierigen Kund:innen um?",
      "Was war die herausforderndste Situation im Kundenkontakt für Sie?",
      "Was macht guten Kundenservice für Sie aus?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 7 (Qualitätssicherung) ---- */
  {
    id: "telc-b2-bskb2-mitarbeitergespraech",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 7,
    title: "Ein Mitarbeitergespräch, an das ich mich erinnere",
    imageFile: "images/telc-b2-bskb2-mitarbeitergespraech.jpg",
    leitfrage: "Berichten Sie von einem Feedback- oder Mitarbeitergespräch, an das Sie sich gut erinnern.",
    hilfen: [
      "Worum ging es in diesem Gespräch?",
      "Wer hat das Gespräch mit Ihnen geführt?",
      "Wie haben Sie sich während des Gesprächs gefühlt?"
    ],
    moeglicheNachfragen: [
      "Was haben Sie aus diesem Gespräch mitgenommen?",
      "Hat sich durch das Gespräch etwas an Ihrer Arbeit verändert?",
      "Wie sollte Ihrer Meinung nach ein gutes Mitarbeitergespräch ablaufen?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-kritik-umgehen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 7,
    title: "Wie ich mit Kritik umgehe",
    imageFile: "images/telc-b2-bskb2-kritik-umgehen.jpg",
    leitfrage: "Beschreiben Sie, wie Sie normalerweise reagieren, wenn Sie Kritik bekommen.",
    hilfen: [
      "Wie fühlen Sie sich, wenn Sie kritisiert werden?",
      "Wie reagieren Sie in so einer Situation meistens?",
      "Gibt es für Sie einen Unterschied zwischen berechtigter und unberechtigter Kritik?"
    ],
    moeglicheNachfragen: [
      "Ist es Ihnen schon einmal schwergefallen, Kritik anzunehmen?",
      "Wie geben Sie selbst am liebsten Kritik?",
      "Was hilft Ihnen, mit Kritik gut umzugehen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 8 (Auftragsabwicklung) ---- */
  {
    id: "telc-b2-bskb2-puenktlichkeit",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 8,
    title: "Pünktlichkeit im Berufsleben",
    imageFile: "images/telc-b2-bskb2-puenktlichkeit.jpg",
    leitfrage: "Beschreiben Sie, wie wichtig Pünktlichkeit im Berufsleben für Sie ist.",
    hilfen: [
      "Wie wichtig ist Pünktlichkeit für Sie persönlich?",
      "Was tun Sie, wenn Sie einmal zu spät kommen?",
      "Wie wird mit Unpünktlichkeit an Ihrem Arbeitsplatz umgegangen?"
    ],
    moeglicheNachfragen: [
      "War Pünktlichkeit in Ihrem Heimatland genauso wichtig wie in Deutschland?",
      "Was tun Sie, um pünktlich zu sein?",
      "Wie reagieren Sie, wenn andere unpünktlich sind?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-materialien-beschaffen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 8,
    title: "Materialien beschaffen",
    imageFile: "images/telc-b2-bskb2-materialien-beschaffen.jpg",
    leitfrage: "Berichten Sie, wie Sie einmal etwas für die Arbeit organisieren oder beschaffen mussten.",
    hilfen: [
      "Um was für ein Material oder welche Sache ging es?",
      "Wie sind Sie bei der Beschaffung vorgegangen?",
      "Gab es dabei Schwierigkeiten?"
    ],
    moeglicheNachfragen: [
      "Wie lange hat die Beschaffung gedauert?",
      "Was würden Sie beim nächsten Mal anders machen?",
      "Wer hat Ihnen dabei geholfen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 9 (Beschwerdemanagement) ---- */
  {
    id: "telc-b2-bskb2-meckerei-reklamation",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 9,
    title: "Meckerei oder Reklamation?",
    imageFile: "images/telc-b2-bskb2-meckerei-reklamation.jpg",
    leitfrage: "Beschreiben Sie, wann eine Beschwerde Ihrer Meinung nach berechtigt ist.",
    hilfen: [
      "Was unterscheidet für Sie eine berechtigte Reklamation von bloßer Meckerei?",
      "Wie sollte eine Kundin/ein Kunde eine Beschwerde am besten vorbringen?",
      "Wie reagieren Sie selbst, wenn sich jemand bei Ihnen beschwert?"
    ],
    moeglicheNachfragen: [
      "Haben Sie selbst schon einmal eine unberechtigte Beschwerde erlebt?",
      "Wie wichtig ist Ihnen ein höflicher Ton bei einer Reklamation?",
      "Was würden Sie einer Kollegin/einem Kollegen raten, die/der sich über eine Beschwerde ärgert?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-reklamation-erfahrung",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 9,
    title: "Eine Reklamation, die ich einmal gemacht habe",
    imageFile: "images/telc-b2-bskb2-reklamation-erfahrung.jpg",
    leitfrage: "Berichten Sie von einer eigenen Erfahrung mit einer fehlerhaften Ware oder Lieferung.",
    hilfen: [
      "Um welche Ware oder Lieferung ging es, und was war das Problem?",
      "Wie haben Sie reklamiert, zum Beispiel telefonisch, schriftlich oder persönlich?",
      "Wie hat die Firma auf Ihre Reklamation reagiert?"
    ],
    moeglicheNachfragen: [
      "Waren Sie mit der Lösung zufrieden?",
      "Was würden Sie beim nächsten Mal anders machen?",
      "Was ist Ihnen bei einer Reklamation besonders wichtig?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 10 (Auf einer Messe) ---- */
  {
    id: "telc-b2-bskb2-guter-small-talk",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 10,
    title: "Was einen guten Small Talk ausmacht",
    imageFile: "images/telc-b2-bskb2-guter-small-talk.jpg",
    leitfrage: "Beschreiben Sie, worauf es Ihrer Meinung nach bei einem guten Small Talk ankommt.",
    hilfen: [
      "Über welche Themen spricht man beim Small Talk üblicherweise, und welche vermeidet man besser?",
      "Wie beginnt man ein Gespräch mit einer fremden Person, zum Beispiel auf einer Messe?",
      "Was macht für Sie einen angenehmen Small Talk aus?"
    ],
    moeglicheNachfragen: [
      "Fällt Ihnen Small Talk mit fremden Menschen leicht oder eher schwer?",
      "War Small Talk in Ihrem Heimatland anders als in Deutschland?",
      "Was würden Sie jemandem raten, dem Small Talk schwerfällt?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-idee-selbststaendigkeit",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL1",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 1 – über ein Thema sprechen",
    kapitel: 10,
    title: "Meine Idee für die Selbstständigkeit",
    imageFile: "images/telc-b2-bskb2-idee-selbststaendigkeit.jpg",
    leitfrage: "Beschreiben Sie eine Geschäftsidee, die Sie interessant finden.",
    hilfen: [
      "Um welche Geschäftsidee geht es, und was wäre das Besondere daran?",
      "Wer wären die Kundinnen und Kunden für diese Idee?",
      "Was würde man für die Umsetzung brauchen, zum Beispiel Startkapital oder bestimmte Kenntnisse?"
    ],
    moeglicheNachfragen: [
      "Könnten Sie sich vorstellen, diese Idee selbst umzusetzen?",
      "Was wäre das größte Risiko bei dieser Idee?",
      "Wer könnte Ihnen bei der Umsetzung helfen?"
    ],
    zielRedezeitSekunden: 90
  }
];

/* ---------------- Teil 2: Mit Kolleginnen und Kollegen sprechen ---------------- */
const TELC_TEIL2 = [
  {
    id: "telc-b2-teil2-weiterbildung-im-gespraech",
    aktiv: true,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 1,
    title: "Weiterbildung im Gespräch",
    imageFile: "images/telc-b2-weiterbildung-gespraech.jpg",
    frage1: "Ich überlege, eine Weiterbildung zu machen. Hast du da Erfahrung?",
    frage2: "Wärst du auch mal an einer Weiterbildung zusammen mit mir interessiert?",
    hilfen: [
      "Ja, das sehe ich auch so. / Nein, das finde ich nicht.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-teil2-erfahrungen-arbeitssuche",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 2,
    title: "Erfahrungen mit der Arbeitssuche",
    imageFile: "images/telc-b2-erfahrungen-arbeitssuche.jpg",
    frage1: "Ich habe gehört, du hast mal über eine Zeitarbeitsfirma gearbeitet. Wie war das?",
    frage2: "Hast du einen Tipp, wo man gute Stellenanzeigen findet?",
    hilfen: [
      "Ja, das stimmt. / Nein, das war bei mir anders.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-teil2-erster-arbeitstag",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 3,
    title: "Der erste Arbeitstag",
    imageFile: "images/telc-b2-erster-arbeitstag.jpg",
    frage1: "Ich bin heute ganz neu hier im Team. Kannst du mir kurz sagen, wie hier alles läuft?",
    frage2: "Was machen die Kolleginnen und Kollegen hier eigentlich in der Mittagspause?",
    hilfen: [
      "Ja, das sehe ich auch so. / Nein, das finde ich nicht.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 1 (Berufsorientierung) ---- */
  {
    id: "telc-b2-bskb2-du-oder-sie",
    aktiv: true,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 1,
    title: "Du oder Sie?",
    imageFile: "images/telc-b2-bskb2-du-oder-sie.jpg",
    frage1: "Bei uns im Team duzen sich eigentlich alle. Ist das für dich auch okay, oder redest du lieber im Sie?",
    frage2: "Wie ist das eigentlich bei euch im Kurs oder in deinem letzten Job – duzt man sich da normalerweise?",
    hilfen: [
      "Ja, das ist für mich in Ordnung. / Nein, ich bevorzuge eigentlich ...",
      "Ich würde sagen ... / In meiner Erfahrung ...",
      "Was denkst du? / Wie handhabt ihr das?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 2-8 ---- */
  {
    id: "telc-b2-bskb2-sicherheitshinweis",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 2,
    title: "Ein Sicherheitshinweis",
    imageFile: "images/telc-b2-bskb2-sicherheitshinweis.jpg",
    frage1: "Entschuldige, aber hier bei uns muss man in diesem Bereich immer eine Schutzbrille tragen - wusstest du das nicht?",
    frage2: "Kennst du eigentlich schon alle anderen Sicherheitsregeln hier im Betrieb?",
    hilfen: [
      "Ja, das wusste ich noch nicht. / Nein, das war mir schon bekannt.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-tipps-vorstellungsgespraech",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 3,
    title: "Tipps vor dem Vorstellungsgespräch",
    imageFile: "images/telc-b2-bskb2-tipps-vorstellungsgespraech.jpg",
    frage1: "Ich habe nächste Woche mein erstes Vorstellungsgespräch. Hast du Tipps für mich?",
    frage2: "Was ziehe ich am besten an, und worauf muss ich sonst noch achten?",
    hilfen: [
      "Ja, das würde ich empfehlen. / Nein, das würde ich nicht machen.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie war das bei dir?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-erster-arbeitstag",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 4,
    title: "Der erste Arbeitstag",
    imageFile: "images/telc-b2-bskb2-erster-arbeitstag.jpg",
    frage1: "Ich fange nächste Woche einen neuen Job an. Kannst du mir sagen, worauf ich am ersten Tag achten sollte?",
    frage2: "Wie war eigentlich dein eigener erster Arbeitstag hier?",
    hilfen: [
      "Ja, das würde ich auf jeden Fall tun. / Nein, das ist eigentlich nicht nötig.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie war das bei dir?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-teambesprechung-ankuendigen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 5,
    title: "Eine Teambesprechung ankündigen",
    imageFile: "images/telc-b2-bskb2-teambesprechung-ankuendigen.jpg",
    frage1: "Sag mal, weißt du schon, dass wir morgen um zehn Uhr eine Teambesprechung haben?",
    frage2: "Weißt du auch, worum es dabei gehen soll?",
    hilfen: [
      "Ja, das wusste ich schon. / Nein, das war mir noch nicht bekannt.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-geraet-bedienen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 6,
    title: "Wie bedient man dieses Gerät?",
    imageFile: "images/telc-b2-bskb2-geraet-bedienen.jpg",
    frage1: "Entschuldige, kannst du mir kurz zeigen, wie diese Maschine funktioniert? Ich benutze sie zum ersten Mal.",
    frage2: "Muss ich dabei etwas Besonderes beachten, zum Beispiel bei der Sicherheit?",
    hilfen: [
      "Ja, das zeige ich dir gerne. / Nein, damit kenne ich mich leider auch nicht aus.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-konstruktive-kritik",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 7,
    title: "Konstruktive Kritik äußern",
    imageFile: "images/telc-b2-bskb2-konstruktive-kritik.jpg",
    frage1: "Kann ich kurz etwas ansprechen? Mir ist aufgefallen, dass bei der letzten Bestellung ein kleiner Fehler passiert ist.",
    frage2: "Wie können wir das beim nächsten Mal besser machen?",
    hilfen: [
      "Ja, das stimmt, das ist mir auch aufgefallen. / Nein, das sehe ich anders.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie können wir das lösen?"
    ],
    zielRedezeitSekunden: 90
  },
  {
    id: "telc-b2-bskb2-anfrage-klaeren",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 8,
    title: "Eine Anfrage klären",
    imageFile: "images/telc-b2-bskb2-anfrage-klaeren.jpg",
    frage1: "Sag mal, weißt du schon, wie es mit dem Angebot für den Kunden von letzter Woche aussieht?",
    frage2: "Sollen wir da noch einmal nachfragen, oder wartest du noch auf eine Antwort?",
    hilfen: [
      "Ja, das ist schon geklärt. / Nein, das weiß ich auch noch nicht.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie sollen wir vorgehen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 9 (Beschwerdemanagement) ---- */
  {
    id: "telc-b2-bskb2-termin-neu-vereinbaren",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 9,
    title: "Einen Termin neu vereinbaren",
    imageFile: "images/telc-b2-bskb2-termin-neu-vereinbaren.jpg",
    frage1: "Entschuldige, ich muss dir leider sagen, dass sich unsere Lieferung an den Kunden um ein paar Tage verzögert. Können wir den Termin gemeinsam verschieben?",
    frage2: "Welchen neuen Termin würdest du dem Kunden vorschlagen?",
    hilfen: [
      "Ja, das lässt sich einrichten. / Nein, das wird schwierig.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie sollen wir vorgehen?"
    ],
    zielRedezeitSekunden: 90
  },

  /* ---- BSK-B2, Kapitel 10 (Auf einer Messe) ---- */
  {
    id: "telc-b2-bskb2-small-talk-messe",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 10,
    title: "Small Talk auf einer Messe",
    imageFile: "images/telc-b2-bskb2-small-talk-messe.jpg",
    frage1: "Guten Tag, ich habe gesehen, dass Sie sich unseren Stand schon eine Weile anschauen - darf ich Ihnen kurz etwas dazu erzählen?",
    frage2: "Und was machen Sie beruflich, wenn ich fragen darf?",
    hilfen: [
      "Ja, gerne. / Nein danke, ich schaue mich erst mal nur um.",
      "Ich arbeite als ... / Ich bin bei der Firma ... im Bereich ... tätig.",
      "Was denkst du? / Darf ich Ihnen dazu noch etwas zeigen?"
    ],
    zielRedezeitSekunden: 90
  }
];

/* ---------------- Teil 3: Lösungswege diskutieren ---------------- */
const TELC_TEIL3 = [
  {
    id: "telc-b2-teil3-weiterbildung-planen",
    aktiv: true,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 1,
    situation: "Weiterbildung planen",
    imageFile: "images/telc-b2-weiterbildung-planen.jpg",
    situationText: "Eine Kollegin/ein Kollege möchte sich beruflich weiterentwickeln und eine Weiterbildung machen, weiß aber noch nicht genau, welche Weiterbildung passt und wie sie neben der Arbeit zu organisieren wäre.",
    aufgabeText: "Überlegen Sie gemeinsam, wie die Kollegin/der Kollege am besten vorgehen sollte.",
    stichpunkte: [
      "Welche Weiterbildung passt am besten?",
      "Wie findet man passende Angebote?",
      "Wie lässt sich die Weiterbildung neben der Arbeit organisieren (Zeit, Kosten)?",
      "Wer kann noch beraten?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "telc-b2-teil3-bewerbungen-ohne-erfolg",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 2,
    situation: "Bewerbungen ohne Erfolg",
    imageFile: "images/telc-b2-bewerbungen-ohne-erfolg.jpg",
    situationText: "Eine Kollegin/ein Kollege hat sich schon auf viele Stellen beworben, aber bisher keine einzige Rückmeldung bekommen. Sie/er ist frustriert und weiß nicht, woran es liegen könnte.",
    aufgabeText: "Überlegen Sie gemeinsam, was die Kollegin/der Kollege ändern könnte.",
    stichpunkte: [
      "Was könnte an den Bewerbungsunterlagen verbessert werden?",
      "Welche anderen Wege der Arbeitssuche gibt es noch?",
      "Wer kann bei der Arbeitssuche zusätzlich helfen (Arbeitsagentur, Zeitarbeit)?",
      "Wie bleibt man motiviert?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "telc-b2-teil3-neuer-kollege-einarbeitung",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 3,
    situation: "Ein neuer Kollege braucht Hilfe",
    imageFile: "images/telc-b2-neuer-kollege-hilfe.jpg",
    situationText: "Seit einer Woche arbeitet ein neuer Kollege in eurem Team. Alle sind sehr beschäftigt, deshalb hat bisher niemand richtig Zeit gehabt, ihm alles genau zu zeigen. Der neue Kollege macht deshalb öfter kleine Fehler und wirkt unsicher.",
    aufgabeText: "Überlegen Sie zusammen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner, wie Sie in dieser Situation angemessen reagieren.",
    stichpunkte: [
      "Wer kümmert sich in Zukunft um die Einarbeitung?",
      "Was braucht der neue Kollege im Moment am meisten?",
      "Wie oft sollte es feste Zeit für Fragen geben?",
      "Was könnt ihr allgemein besser machen, damit neue Kolleg:innen sich schneller zurechtfinden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 1 (Berufsorientierung) ---- */
  {
    id: "telc-b2-bskb2-unternehmensbesichtigung",
    aktiv: true,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 1,
    situation: "Eine Unternehmensbesichtigung vorbereiten",
    imageFile: "images/telc-b2-bskb2-unternehmensbesichtigung.jpg",
    situationText: "Ihr Team darf in zwei Wochen eine andere Abteilung des Unternehmens besichtigen, zum Beispiel die Produktion oder das Lager. Es ist noch nicht klar, was genau gezeigt werden soll und wer die Besichtigung organisiert.",
    aufgabeText: "Überlegen Sie gemeinsam, wie die Unternehmensbesichtigung vorbereitet werden sollte.",
    stichpunkte: [
      "Was sollte auf jeden Fall gezeigt werden?",
      "Wer kümmert sich um Anmeldung und Organisation?",
      "Welche Fragen könnten während der Besichtigung gestellt werden?",
      "Wie lange sollte die Besichtigung dauern?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 2 (Arbeitsorte und -welten) ---- */
  {
    id: "telc-b2-bskb2-nach-arbeitsunfall",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 2,
    situation: "Nach einem Arbeitsunfall",
    imageFile: "images/telc-b2-bskb2-nach-arbeitsunfall.jpg",
    situationText: "Bei der Arbeit ist ein kleiner Unfall passiert - eine Kollegin/ein Kollege hat sich leicht verletzt, weil eine Sicherheitsregel nicht beachtet wurde. Zum Glück ist nicht viel passiert, aber alle sind etwas erschrocken.",
    aufgabeText: "Überlegen Sie gemeinsam, wie der Unfall hätte vermieden werden können und was jetzt zu tun ist.",
    stichpunkte: [
      "Was genau ist passiert?",
      "Wie hätte man den Unfall vermeiden können?",
      "Muss der Unfall gemeldet werden, und wenn ja, wem?",
      "Was sollte künftig anders gemacht werden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 3 (Im Bewerbungsprozess) ---- */
  {
    id: "telc-b2-bskb2-wohnung-finden",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 3,
    situation: "Eine passende Wohnung finden",
    imageFile: "images/telc-b2-bskb2-wohnung-finden.jpg",
    situationText: "Ein Kollege/eine Kollegin zieht bald wegen der neuen Stelle in Ihre Stadt und sucht dringend eine passende Wohnung, kennt sich hier aber noch nicht aus.",
    aufgabeText: "Überlegen Sie gemeinsam, wie die Wohnungssuche am besten gelingt.",
    stichpunkte: [
      "Wo sucht man am besten nach Wohnungen?",
      "Welche Unterlagen braucht man für eine Bewerbung um eine Wohnung?",
      "Welche Stadtteile könnten passen?",
      "Wer kann sonst noch bei der Suche helfen?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 4 (Eine neue Arbeit) ---- */
  {
    id: "telc-b2-bskb2-willkommensmappe",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 4,
    situation: "Die Willkommensmappe verstehen",
    imageFile: "images/telc-b2-bskb2-willkommensmappe.jpg",
    situationText: "Ein neuer Kollege/eine neue Kollegin hat am ersten Tag eine Willkommensmappe bekommen, versteht aber eine Regelung darin nicht genau, zum Beispiel zu Pausenzeiten oder zur Kleidung.",
    aufgabeText: "Klären Sie gemeinsam die unklare Regelung aus der Willkommensmappe.",
    stichpunkte: [
      "Welche Regelung ist unklar?",
      "Wie wird das in der Praxis normalerweise gehandhabt?",
      "Wen kann man sonst noch fragen?",
      "Was sollte in Zukunft klarer erklärt werden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 5 (Im Arbeitsalltag) ---- */
  {
    id: "telc-b2-bskb2-konflikt-loesen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 5,
    situation: "Einen Konflikt am Arbeitsplatz lösen",
    imageFile: "images/telc-b2-bskb2-konflikt-loesen.jpg",
    situationText: "Zwischen zwei Kolleg:innen gibt es seit einiger Zeit Spannungen, weil sich beide bei einer gemeinsamen Aufgabe nicht einig waren, wer welchen Teil übernimmt.",
    aufgabeText: "Überlegen Sie gemeinsam, wie der Konflikt zwischen den beiden Kolleg:innen gelöst werden könnte.",
    stichpunkte: [
      "Worum geht es bei dem Konflikt genau?",
      "Wie könnte man die Aufgaben klarer aufteilen?",
      "Wer könnte vermitteln?",
      "Wie lässt sich das für die Zukunft vermeiden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 6 (Arbeitsabläufe) ---- */
  {
    id: "telc-b2-bskb2-neuanschaffung-diskutieren",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 6,
    situation: "Eine betriebliche Neuanschaffung diskutieren",
    imageFile: "images/telc-b2-bskb2-neuanschaffung-diskutieren.jpg",
    situationText: "Für die Werkstatt/das Büro soll ein neues Gerät angeschafft werden. Es gibt zwei mögliche Modelle - eines ist günstiger, das andere hat mehr Funktionen.",
    aufgabeText: "Wägen Sie gemeinsam die Vor- und Nachteile beider Geräte ab und einigen Sie sich auf einen Vorschlag.",
    stichpunkte: [
      "Welche Vor- und Nachteile hat das günstigere Gerät?",
      "Welche Vor- und Nachteile hat das teurere Gerät?",
      "Was ist für die tägliche Arbeit wichtiger - Preis oder Funktionen?",
      "Wer sollte die endgültige Entscheidung treffen?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 7 (Qualitätssicherung) ---- */
  {
    id: "telc-b2-bskb2-qualitaetsproblem-loesen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 7,
    situation: "Ein Qualitätsproblem lösen",
    imageFile: "images/telc-b2-bskb2-qualitaetsproblem-loesen.jpg",
    situationText: "In der Produktion/bei der Arbeit ist in letzter Zeit immer wieder derselbe kleine Fehler aufgetreten. Es ist noch nicht klar, woran das genau liegt.",
    aufgabeText: "Überlegen Sie gemeinsam, was die Ursache sein könnte und wie sich der Fehler in Zukunft vermeiden lässt.",
    stichpunkte: [
      "Wann und wie oft tritt der Fehler auf?",
      "Was könnte die Ursache sein?",
      "Welche Lösung schlagen Sie vor?",
      "Wer sollte über die Lösung informiert werden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 8 (Auftragsabwicklung) ---- */
  {
    id: "telc-b2-bskb2-lieferverzoegerung-loesen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 8,
    situation: "Eine Lieferverzögerung lösen",
    imageFile: "images/telc-b2-bskb2-lieferverzoegerung-loesen.jpg",
    situationText: "Eine Lieferung an einen Kunden wird sich um einige Tage verzögern, weil ein wichtiges Teil beim Zulieferer später eingetroffen ist als geplant.",
    aufgabeText: "Überlegen Sie gemeinsam, wie Sie dem Kunden die Verspätung erklären und einen neuen Termin finden.",
    stichpunkte: [
      "Wie erklärt man dem Kunden die Verzögerung am besten?",
      "Welcher neue Termin ist realistisch?",
      "Sollte der Kunde eine Entschädigung oder ein Entgegenkommen bekommen?",
      "Wer informiert den Kunden, und wie schnell?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 9 (Beschwerdemanagement) ---- */
  {
    id: "telc-b2-bskb2-kundenbeschwerde-umgehen",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 9,
    situation: "Mit einer Kundenbeschwerde umgehen",
    imageFile: "images/telc-b2-bskb2-kundenbeschwerde-umgehen.jpg",
    situationText: "Ein Kunde hat sich schriftlich beschwert, weil eine Lieferung beschädigt bei ihm angekommen ist. Die Beschwerde scheint berechtigt, aber es ist noch nicht klar, wie am besten reagiert werden soll.",
    aufgabeText: "Überlegen Sie gemeinsam, wie Sie auf die Beschwerde des Kunden reagieren.",
    stichpunkte: [
      "Wie entschuldigt man sich am besten bei dem Kunden?",
      "Wird die Ware ersetzt oder repariert?",
      "Sollte der Kunde eine Entschädigung bekommen?",
      "Wie lässt sich so ein Fehler künftig vermeiden?"
    ],
    zielRedezeitSekunden: 180
  },

  /* ---- BSK-B2, Kapitel 10 (Auf einer Messe) ---- */
  {
    id: "telc-b2-bskb2-businessplan-entwickeln",
    aktiv: false,
    kurse: TELC_KURS_BSKB2,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 10,
    situation: "Einen Businessplan entwickeln",
    imageFile: "images/telc-b2-bskb2-businessplan-entwickeln.jpg",
    situationText: "Ein Kollege/eine Kollegin möchte sich nebenberuflich selbstständig machen und braucht dafür einen einfachen Businessplan, weiß aber noch nicht genau, was alles hineingehört.",
    aufgabeText: "Sammeln Sie gemeinsam Ideen für einen einfachen Businessplan.",
    stichpunkte: [
      "Welche Geschäftsidee soll umgesetzt werden?",
      "Wer sind die Kundinnen und Kunden, und was ist die Konkurrenz?",
      "Welche Kosten und welches Startkapital sind nötig?",
      "Welche ersten Schritte sind sinnvoll?"
    ],
    zielRedezeitSekunden: 180
  }
];
