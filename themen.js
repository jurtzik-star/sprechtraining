/* ============================================================
   themen.js
   Die Sprechthemen (Bild + Leitfragen + mögliche Prüfungsfragen).
   Format "DTZ_B1" entspricht Sprechen Teil 2 des Deutsch-Tests für
   Zuwanderer (DTZ) - "über Erfahrungen sprechen" - genau wie im
   bisherigen Padlet ("DTZ, sprechen, Teil 2 A").

   Neues Thema ergänzen: einfach ein weiteres Objekt unten anfügen und
   ein passendes Bild unter images/<imageFile> ablegen. imageFile ist
   optional - fehlt das Bild (Datei nicht vorhanden), zeigt die App nur
   den Titel und die Leitfragen ohne Foto.
   ============================================================ */

const THEMEN = [
  {
    id: "dtz-b1-arztbesuch-1",
    aktiv: false, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Ein Arztbesuch",
    bildLabel: "Bild 1",
    imageFile: "images/dtz-b1-arztbesuch-1.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Erfahrungen haben Sie damit?",
      "Wie kann man einen Termin beim Arzt machen?",
      "Wo findet man die Adressen und was muss man tun?",
      "Wie kann man sich gesund ernähren?",
      "Was tun Sie für Ihre Gesundheit?",
      "In Deutschland gibt es ein Krankenkassen-System. Wie bezahlt man den Arzt in Ihrem Heimatland?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-arztbesuch-2",
    aktiv: false, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Ein Arztbesuch",
    bildLabel: "Bild 2",
    imageFile: "images/dtz-b1-arztbesuch-2.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Erfahrungen haben Sie damit?",
      "Wie kann man einen Termin beim Arzt machen?",
      "Wo findet man die Adressen und was muss man tun?",
      "Wie kann man sich gesund ernähren?",
      "Was tun Sie für Ihre Gesundheit?",
      "In Deutschland gibt es ein Krankenkassen-System. Wie bezahlt man den Arzt in Ihrem Heimatland?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-familie-1",
    aktiv: false, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Die Familie",
    bildLabel: "Bild 3",
    imageFile: "images/dtz-b1-familie-1.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Feiertage feiern Sie gemeinsam mit Ihrer Familie?",
      "Haben Sie oft Besuch von Ihrer Familie?",
      "Wie sind die Beziehungen in Ihrer Familie? Haben Sie viel Kontakt und verstehen Sie sich gut?",
      "Machen Sie manchmal Familienurlaube?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-familie-2",
    aktiv: false, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Die Familie",
    bildLabel: "Bild 4",
    imageFile: "images/dtz-b1-familie-2.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Feiertage feiern Sie gemeinsam mit Ihrer Familie?",
      "Haben Sie oft Besuch von Ihrer Familie?",
      "Wie sind die Beziehungen in Ihrer Familie? Haben Sie viel Kontakt und verstehen Sie sich gut?",
      "Machen Sie manchmal Familienurlaube?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-amt-wartebereich-1",
    aktiv: true, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Im Wartebereich eines Amts",
    bildLabel: "Bild 1",
    imageFile: "images/dtz-b1-amt-1.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Wie funktioniert das Warten bei einem Amt - zieht man eine Wartemarke oder muss man einen Termin vereinbaren?",
      "Wie lange haben Sie schon einmal bei einem Amt gewartet?",
      "Was machen Sie, während Sie warten?",
      "Welche Ämter kennen Sie in Deutschland, zum Beispiel Bürgeramt, Ausländerbehörde oder Jobcenter?",
      "Wie ist das in Ihrem Heimatland - muss man dort auch oft warten?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-amt-wartebereich-2",
    aktiv: true, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Im Wartebereich eines Amts",
    bildLabel: "Bild 2",
    imageFile: "images/dtz-b1-amt-2.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Wie funktioniert das Warten bei einem Amt - zieht man eine Wartemarke oder muss man einen Termin vereinbaren?",
      "Wie lange haben Sie schon einmal bei einem Amt gewartet?",
      "Was machen Sie, während Sie warten?",
      "Welche Ämter kennen Sie in Deutschland, zum Beispiel Bürgeramt, Ausländerbehörde oder Jobcenter?",
      "Wie ist das in Ihrem Heimatland - muss man dort auch oft warten?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-amt-schalter-1",
    aktiv: true, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Am Schalter / Beratungstisch",
    bildLabel: "Bild 1",
    imageFile: "images/dtz-b1-amt-3.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Unterlagen muss man zu einem Amt mitbringen?",
      "Haben Sie schon einmal ein Formular bei einem Amt ausgefüllt? Wie war das?",
      "Was machen Sie, wenn Sie eine Frage nicht verstehen oder ein Formular nicht ausfüllen können?",
      "Wer kann Ihnen bei Behördengängen helfen?",
      "Waren Sie schon einmal bei einer Ummeldung, zum Beispiel nach einem Umzug? Wie war das?"
    ],
    zielRedezeitSekunden: 120
  },
  {
    id: "dtz-b1-amt-schalter-2",
    aktiv: true, // true = für TN sichtbar, false = noch ausgeblendet (Kapitel-Freischaltung)
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"], // welche Kurse sehen dieses Thema (fehlt das Feld: alle Kurse)
    format: "DTZ_B1",
    formatLabel: "DTZ, Sprechen Teil 2 – über Erfahrungen sprechen",
    title: "Am Schalter / Beratungstisch",
    bildLabel: "Bild 2",
    imageFile: "images/dtz-b1-amt-4.jpg",
    bildFragen: ["Was sehen Sie auf dem Bild?", "Was für eine Situation zeigt dieses Bild?"],
    erfahrungsFragen: [
      "Welche Unterlagen muss man zu einem Amt mitbringen?",
      "Haben Sie schon einmal ein Formular bei einem Amt ausgefüllt? Wie war das?",
      "Was machen Sie, wenn Sie eine Frage nicht verstehen oder ein Formular nicht ausfüllen können?",
      "Wer kann Ihnen bei Behördengängen helfen?",
      "Waren Sie schon einmal bei einer Ummeldung, zum Beispiel nach einem Umzug? Wie war das?"
    ],
    zielRedezeitSekunden: 120
  }
];
