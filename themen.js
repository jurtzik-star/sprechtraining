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
  }
];
