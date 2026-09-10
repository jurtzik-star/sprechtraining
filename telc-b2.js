/* ============================================================
   telc-b2.js
   Sprechthemen für den Brückenkurs BSK-B1+, ausgerichtet am Format
   "telc Zertifikat Beruf B2" (Sprechen), nicht am DTZ-B1-Format aus
   themen.js/situationen.js - das passt inhaltlich/sprachlich nicht mehr
   zum Kursniveau. Ziel: eine progressive Steigerung passend zu den
   BSK-B1+-Kapiteln, die nahtlos in die spätere telc-B2-Sprechen-Praxis
   von BSK-B2 übergeht.

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
   speziell für den Brückenkurs gedacht ist). Nur Kapitel 1-3 sind bisher
   ausgearbeitet, weil die BSK-B1+-App bisher nur diese drei Kapitel hat
   (siehe [[wortschatz-apps]] in Thomas' Notizen) - Kapitel 4-7 folgen,
   sobald diese Kapitel in der Wortschatz-App gebaut werden.

   Alle Inhalte sind komplett neu verfasst (keine Lehrwerkstexte kopiert),
   orientiert an der offiziellen Prüfungsstruktur.
   ============================================================ */

const TELC_KURS_BSKB1PLUS = ["BSK-B1+ Rottweil (KL T. Jurtzik)"];

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
  }
];

/* ---------------- Teil 2: Mit Kolleginnen und Kollegen sprechen ---------------- */
const TELC_TEIL2 = [
  {
    id: "telc-b2-teil2-erster-arbeitstag",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL2",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 2 – mit Kolleginnen und Kollegen sprechen",
    kapitel: 3,
    title: "Der erste Arbeitstag",
    frage1: "Ich bin heute ganz neu hier im Team. Kannst du mir kurz sagen, wie hier alles läuft?",
    frage2: "Was machen die Kolleginnen und Kollegen hier eigentlich in der Mittagspause?",
    hilfen: [
      "Ja, das sehe ich auch so. / Nein, das finde ich nicht.",
      "Ich würde sagen ... / Meiner Erfahrung nach ...",
      "Was denkst du? / Wie ist das bei euch?"
    ],
    zielRedezeitSekunden: 90
  }
];

/* ---------------- Teil 3: Lösungswege diskutieren ---------------- */
const TELC_TEIL3 = [
  {
    id: "telc-b2-teil3-neuer-kollege-einarbeitung",
    aktiv: false,
    kurse: TELC_KURS_BSKB1PLUS,
    format: "TELC_B2_TEIL3",
    formatLabel: "telc Zertifikat Beruf B2, Sprechen Teil 3 – Lösungswege diskutieren",
    kapitel: 3,
    situation: "Ein neuer Kollege braucht Hilfe",
    situationText: "Seit einer Woche arbeitet ein neuer Kollege in eurem Team. Alle sind sehr beschäftigt, deshalb hat bisher niemand richtig Zeit gehabt, ihm alles genau zu zeigen. Der neue Kollege macht deshalb öfter kleine Fehler und wirkt unsicher.",
    aufgabeText: "Überlegen Sie zusammen mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner, wie Sie in dieser Situation angemessen reagieren.",
    stichpunkte: [
      "Wer kümmert sich in Zukunft um die Einarbeitung?",
      "Was braucht der neue Kollege im Moment am meisten?",
      "Wie oft sollte es feste Zeit für Fragen geben?",
      "Was könnt ihr allgemein besser machen, damit neue Kolleg:innen sich schneller zurechtfinden?"
    ],
    zielRedezeitSekunden: 180
  }
];
