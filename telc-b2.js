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
  }
];
