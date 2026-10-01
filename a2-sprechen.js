/* ============================================================
   a2-sprechen.js
   Sprechaufgaben für den A2-Kurs ("A2 Oberndorf") im Format der
   A2-Prüfung, die an der Schule als Probetest verwendet wird:
     Teil 1 – Sich vorstellen          (format "A2_TEIL1")
     Teil 2 – Ein Alltagsgespräch führen (format "A2_TEIL2")
     Teil 3 – Etwas aushandeln         (format "A2_TEIL3")
   Freischaltung kapitelweise über "aktiv" (wie bei den anderen Kursen).
   Alle Aufgaben sind eigene Formulierungen.
   ============================================================ */

const A2_KURS = ["A2 Oberndorf"];

const A2_SPRECHEN = [
  // ---------------- Kapitel 1: Unser neuer Kurs ----------------
  {
    id: "a2-k1-t1-vorstellen",
    aktiv: true,
    kapitel: 1,
    kurse: A2_KURS,
    format: "A2_TEIL1",
    formatLabel: "A2 – Sprechen Teil 1: Sich vorstellen",
    title: "Sich im neuen Kurs vorstellen",
    imageFile: "Bilder/A2/k1-erster-kurstag.jpg",
    leitfrage: "Herzlich willkommen! Stellen Sie sich bitte kurz vor. Die Stichwörter helfen Ihnen.",
    hilfen: ["Name?", "Alter?", "Land?", "Wohnort?", "Sprachen?", "Beruf?", "Hobby?"],
    moeglicheNachfragen: [
      "Wie schreibt man Ihren Namen? Buchstabieren Sie bitte.",
      "Seit wann wohnen Sie hier?",
      "Was ist Ihre Erstsprache?",
      "Was machen Sie gern am Wochenende?"
    ],
    zielRedezeitSekunden: 60
  },
  {
    id: "a2-k1-t2-erster-tag",
    aktiv: true,
    kapitel: 1,
    kurse: A2_KURS,
    format: "A2_TEIL2",
    formatLabel: "A2 – Sprechen Teil 2: Ein Alltagsgespräch führen",
    title: "Thema: Ein erster Tag",
    imageFile: "Bilder/A2/k1-erster-arbeitstag.jpg",
    frage1: "Erzählen Sie mal: Wie war Ihr erster Tag hier im Deutschkurs?",
    frage2: "Und Ihr erster Tag in Deutschland – was haben Sie da gemacht?",
    hilfen: ["Fragekarte: Wann …?", "Fragekarte: Wie …?", "Fragekarte: Mit wem …?", "Fragekarte: Was …?", "Am Anfang war ich …", "Ich habe … / Ich bin … gefahren."],
    zielRedezeitSekunden: 120
  },
  {
    id: "a2-k1-t2-gefuehle",
    aktiv: true,
    kapitel: 1,
    kurse: A2_KURS,
    format: "A2_TEIL2",
    formatLabel: "A2 – Sprechen Teil 2: Ein Alltagsgespräch führen",
    title: "Thema: Gefühle",
    imageFile: "Bilder/A2/k1-gefuehle.jpg",
    frage1: "Wann waren Sie zuletzt richtig nervös?",
    frage2: "Und was macht Sie glücklich?",
    hilfen: ["Fragekarte: Wann …?", "Fragekarte: Warum …?", "Fragekarte: Wo …?", "nervös · aufgeregt · überrascht · froh · glücklich · genervt", "Ich war nervös, weil …"],
    zielRedezeitSekunden: 120
  },
  {
    id: "a2-k1-t2-regeln",
    aktiv: true,
    kapitel: 1,
    kurse: A2_KURS,
    format: "A2_TEIL2",
    formatLabel: "A2 – Sprechen Teil 2: Ein Alltagsgespräch führen",
    title: "Thema: Regeln im Haus und im Kurs",
    imageFile: "Bilder/A2/k1-regeln.jpg",
    frage1: "Welche Regeln gibt es in Ihrem Haus?",
    frage2: "Welche Regel finden Sie im Deutschkurs wichtig?",
    hilfen: ["Fragekarte: Was …?", "Fragekarte: Wann …?", "Fragekarte: Warum …?", "Fragekarte: Wer …?", "Man darf (nicht) …", "Man muss …"],
    zielRedezeitSekunden: 120
  },
  {
    id: "a2-k1-t3-lerntreffen",
    aktiv: true,
    kapitel: 1,
    kurse: A2_KURS,
    format: "A2_TEIL3",
    formatLabel: "A2 – Sprechen Teil 3: Etwas aushandeln",
    situation: "Ein Lerntreffen am Wochenende planen",
    handlungsfeld: "Unterricht",
    imageFile: "Bilder/A2/k1-begegnungscafe.jpg",
    situationText: "Sie möchten mit einer Person aus Ihrem Kurs am Wochenende zusammen für den Kapiteltest lernen. Sie haben beide nicht viel Zeit.",
    aufgabeText: "Finden Sie zusammen einen Termin. Hier ist Ihr Kalender:",
    stichpunkteTitel: "Mein Kalender",
    stichpunkte: [
      "Freitag: 8–16 Uhr Arbeit · 18 Uhr Deutschkurs",
      "Samstag: 9–12 Uhr Einkaufen mit der Familie · 15 Uhr Fußball mit meinem Sohn",
      "Sonntag: 10 Uhr Frühstück bei Freunden · ab 14 Uhr frei"
    ],
    eroeffnung: "Hallo! Wollen wir am Wochenende zusammen für den Kapiteltest lernen? Wann hast du Zeit?",
    partnerInfo: "Freitag: 17–20 Uhr Arbeit. Samstag: bis 13 Uhr frei, ab 14 Uhr Geburtstag bei deiner Schwester (den ganzen Nachmittag und Abend). Sonntag: bis 15 Uhr Besuch bei deinen Eltern, ab 15 Uhr frei. Als Treffpunkt schlägst du zuerst das Café im Stadtteilzentrum Sonnenhof vor - das ist aber sonntags geschlossen; wenn die Person das sagt, findet ihr einen anderen Ort (z. B. bei einer von euch zu Hause oder im Park).",
    zielRedezeitSekunden: 150
  }
];
