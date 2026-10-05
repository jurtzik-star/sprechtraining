/* ============================================================
   telc-b1.js
   Sprechaufgaben für den B1-Abendkurs ("B1 Oberndorf") im Format der
   Prüfung telc Deutsch B1 (Zertifikat Deutsch). Der Abendkurs ist kein
   Integrationskurs und schließt deshalb mit telc B1 ab, nicht mit dem DTZ
   (seit 05.10.2026).
     Teil 1 – Einander kennenlernen   (format "TELC_B1_TEIL1")
     Teil 2 – Über ein Thema sprechen  (format "TELC_B1_TEIL2")
     Teil 3 – Gemeinsam etwas planen   (format "TELC_B1_TEIL3")
   In der echten Prüfung sprechen zwei Teilnehmende miteinander - hier
   übernimmt die KI die Rolle der zweiten Person.
   Teil 2: Die lernende Person sieht nur IHRE Meinung (meinungA), die KI
   kennt die zweite Meinung (meinungB) und berichtet selbst darüber.
   Freischaltung kapitelweise über "aktiv". Alle Texte sind eigene
   Formulierungen zu den Kapitelthemen von „Das Leben B1“.
   ============================================================ */

const TELC_B1_KURS = ["B1 Oberndorf (KL T. Jurtzik)"];
const TELC_B1_LABEL1 = "telc Deutsch B1 – Sprechen Teil 1: Einander kennenlernen";
const TELC_B1_LABEL2 = "telc Deutsch B1 – Sprechen Teil 2: Über ein Thema sprechen";
const TELC_B1_LABEL3 = "telc Deutsch B1 – Sprechen Teil 3: Gemeinsam etwas planen";

const TELC_B1_REDEMITTEL_TEIL2 = [
  "In meinem Text geht es um … / Die Person meint, dass …",
  "Sie/Er findet es gut/schlecht, dass …",
  "Ich bin der Meinung, dass … / Meiner Meinung nach …",
  "Da stimme ich zu. / Das sehe ich anders, weil …",
  "Ich habe selbst erlebt, dass … / Bei mir war es so: …",
  "Wie ist das bei dir/Ihnen? Was denkst du/denken Sie?"
];
const TELC_B1_REDEMITTEL_TEIL3 = [
  "Wie wäre es, wenn wir …? / Ich schlage vor, dass …",
  "Was hältst du von …? / Hast du eine Idee, wer …?",
  "Gute Idee! / Einverstanden. / Das machen wir so.",
  "Das finde ich nicht so gut, weil … Lieber …",
  "Dann übernehme ich … und du kümmerst dich um …",
  "Also: Wir … Habe ich das richtig verstanden?"
];

const TELC_B1_SPRECHEN = [
  // ---------------- Teil 1 (kapitelunabhängig, ab Kapitel 1) ----------------
  {
    id: "telcb1-t1-kennenlernen",
    aktiv: true,
    kapitel: 1,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL1",
    formatLabel: TELC_B1_LABEL1,
    title: "Einander kennenlernen",
    leitfrage: "Unterhalten Sie sich mit Ihrer Gesprächspartnerin. Stellen Sie Fragen, beantworten Sie ihre Fragen und erzählen Sie etwas über sich.",
    hilfen: ["Name", "Woher? / Wohnort", "Familie", "Beruf / Ausbildung", "Sprachen", "Warum Deutsch?", "Hobbys / Freizeit", "Pläne für die Zukunft"],
    moeglicheNachfragen: [
      "Und warum lernen Sie Deutsch?",
      "Was machen Sie gern in Ihrer Freizeit?",
      "Was möchten Sie in der Zukunft machen?",
      "Wie gefällt es Ihnen in Oberndorf?"
    ],
    eroeffnung: "Hallo, ich bin Sandra. Schön, dass wir zusammen sprechen! Erzählen Sie doch mal: Wie heißen Sie und woher kommen Sie?",
    zielRedezeitSekunden: 90
  },

  // ---------------- Kapitel 1: Bildung (er)leben ----------------
  {
    id: "telcb1-k1-t2-ausland",
    aktiv: true,
    kapitel: 1,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Ein Semester im Ausland?",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Ein Semester im Ausland“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Lukas Brenner, 23 Jahre, Student", text: "Mein Semester in Lissabon war die beste Zeit meines Lebens. Ich habe Portugiesisch gelernt, Freunde aus ganz Europa gefunden und bin viel selbstständiger geworden. Jeder junge Mensch sollte so eine Erfahrung machen." },
    meinungB: { person: "Nadine Koch, 26 Jahre, Bankkauffrau", text: "Ich bin lieber zu Hause geblieben. Ein Auslandssemester kostet viel Geld, und oft verliert man Zeit im Studium. Neue Erfahrungen kann man auch in der eigenen Stadt machen, zum Beispiel mit einem Nebenjob oder einem Ehrenamt." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k1-t3-abschied",
    aktiv: true,
    kapitel: 1,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Abschiedsfeier für eine Kursteilnehmerin",
    situationText: "Eine Teilnehmerin aus Ihrem Deutschkurs geht für ein Jahr ins Ausland, um dort zu studieren. Sie möchten mit Ihrer Gesprächspartnerin eine kleine Abschiedsfeier für sie organisieren.",
    aufgabeText: "Planen Sie die Feier zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Abschiedsfeier",
    stichpunkte: ["Wann?", "Wo?", "Essen und Getränke", "Geschenk", "Wer kümmert sich um was?"],
    eroeffnung: "Hallo! Schade, dass Mariam bald nach Spanien geht, oder? Wollen wir zusammen eine kleine Abschiedsfeier für sie planen? Wann würde es dir denn passen?",
    partnerInfo: "Du hast am Freitagabend schon einen Termin (Geburtstag deiner Mutter), am Samstag ab 15 Uhr hast du Zeit. Du schlägst zuerst ein Restaurant vor, findest aber auch eine Feier im Kursraum oder bei jemandem zu Hause gut, wenn die Person gute Gründe nennt. Als Geschenk hast du die Idee: ein Fotobuch mit Bildern aus dem Kurs.",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  },

  // ---------------- Kapitel 2: Vorhang auf! ----------------
  {
    id: "telcb1-k2-t2-theater",
    aktiv: true,
    kapitel: 2,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Theater oder Streaming?",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Theater oder Streaming?“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Helga Sommer, 61 Jahre, Lehrerin", text: "Ich gehe mindestens einmal im Monat ins Theater. Die Atmosphäre im Saal, die Schauspieler live auf der Bühne – das kann kein Bildschirm ersetzen. Nach der Vorstellung spreche ich gern mit Freunden über das Stück." },
    meinungB: { person: "Kevin Arslan, 29 Jahre, Mechatroniker", text: "Theaterkarten sind mir zu teuer, und man muss sich schick anziehen. Ich schaue lieber Serien und Filme zu Hause. Da kann ich selbst entscheiden, wann ich etwas sehe, und kann jederzeit eine Pause machen." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k2-t3-theaterbesuch",
    aktiv: true,
    kapitel: 2,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Theaterbesuch mit dem Deutschkurs",
    situationText: "Ihr Deutschkurs möchte zusammen ins Theater gehen. Sie und Ihre Gesprächspartnerin sollen den Abend organisieren.",
    aufgabeText: "Planen Sie den Theaterbesuch zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Theaterbesuch",
    stichpunkte: ["Welches Stück? Welcher Tag?", "Karten (Gruppenpreis?)", "Anfahrt", "Treffpunkt", "Nach der Vorstellung?"],
    eroeffnung: "Hallo! Ich finde die Idee super, dass wir mit dem Kurs ins Theater gehen. Hast du schon eine Idee, welches Stück wir sehen könnten?",
    partnerInfo: "Du möchtest am liebsten eine Komödie sehen, weil sie leichter zu verstehen ist. Dienstags habt ihr Kurs, deshalb schlägst du einen Freitag oder Samstag vor. Du kennst das Stadttheater Rottweil; die Gruppenkarten (ab 10 Personen günstiger) müsste jemand vorher anrufen und bestellen. Nach der Vorstellung möchtest du gern noch zusammen etwas trinken gehen.",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  },

  // ---------------- Kapitel 3: Miteinander – Füreinander ----------------
  {
    id: "telcb1-k3-t2-ehrenamt",
    aktiv: false,
    kapitel: 3,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Ehrenamt – für alle?",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Ehrenamt“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Jonas Weber, 34 Jahre, Krankenpfleger", text: "Ich trainiere seit fünf Jahren eine Kinder-Fußballmannschaft – ohne Geld. Die Kinder freuen sich so sehr, das ist für mich der schönste Lohn. Ich finde, jeder sollte ein paar Stunden im Monat für andere da sein." },
    meinungB: { person: "Petra Ludwig, 45 Jahre, Verkäuferin", text: "Ich arbeite Vollzeit und habe zwei Kinder. Für ein Ehrenamt habe ich einfach keine Zeit. Außerdem finde ich: Viele wichtige Aufgaben, zum Beispiel in der Pflege, sollten richtig bezahlt werden und nicht von Freiwilligen gemacht werden." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k3-t3-flohmarkt",
    aktiv: false,
    kapitel: 3,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Flohmarkt für einen guten Zweck",
    situationText: "In Ihrer Nachbarschaft möchten Sie einen Flohmarkt organisieren. Das Geld soll an das Tierheim in Ihrer Stadt gehen.",
    aufgabeText: "Planen Sie den Flohmarkt zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Flohmarkt",
    stichpunkte: ["Wann und wo?", "Werbung / Einladung", "Was wird verkauft?", "Essen und Getränke", "Wer macht was?"],
    eroeffnung: "Hallo! Ich finde deine Idee mit dem Flohmarkt für das Tierheim toll. Wo könnten wir ihn denn machen?",
    partnerInfo: "Du schlägst zuerst den Schulhof der Grundschule vor (dafür müsste man aber den Hausmeister fragen). Am ersten Samstag im Monat hast du keine Zeit. Du kannst gut Plakate gestalten und möchtest gern Kuchen verkaufen. Gegen Werbung nur im Internet bist du skeptisch, weil viele ältere Nachbarn kein Internet nutzen.",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  },

  // ---------------- Kapitel 4: Natur erleben ----------------
  {
    id: "telcb1-k4-t2-urlaub",
    aktiv: false,
    kapitel: 4,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Urlaub in der Natur oder in der Stadt?",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Urlaub“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Martina Graf, 38 Jahre, Ärztin", text: "Im Urlaub will ich vor allem Ruhe. Ich wandere am liebsten in den Bergen oder zelte an einem See. Da höre ich keine Autos, sehe keine Werbung und kann richtig abschalten." },
    meinungB: { person: "Ali Demir, 31 Jahre, IT-Berater", text: "Mir wird es in der Natur schnell langweilig. Ich fahre lieber in eine große Stadt wie Barcelona oder Wien. Dort gibt es Museen, Konzerte, gutes Essen und immer etwas Neues zu entdecken." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k4-t3-ausflug",
    aktiv: false,
    kapitel: 4,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Wanderausflug am Wochenende",
    situationText: "Sie möchten mit einigen Leuten aus Ihrem Deutschkurs am Wochenende einen Ausflug in den Schwarzwald machen.",
    aufgabeText: "Planen Sie den Ausflug zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Ausflug",
    stichpunkte: ["Wohin? Welche Strecke?", "Anreise (Zug, Auto?)", "Essen unterwegs", "Was mitnehmen?", "Was machen wir bei Regen?"],
    eroeffnung: "Hallo! Ich freue mich schon auf unseren Ausflug in den Schwarzwald. Wohin wollen wir denn wandern? Hast du eine Idee?",
    partnerInfo: "Du möchtest nicht zu weit wandern (höchstens 10 Kilometer), weil nicht alle sportlich sind. Du bist für den Zug, weil das umweltfreundlich ist und alle zusammen fahren können. Picknick findest du schöner als ein Restaurant. Bei Regen schlägst du ein Museum oder ein Café vor.",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  },

  // ---------------- Kapitel 5: Hin und weg! ----------------
  {
    id: "telcb1-k5-t2-ausland-leben",
    aktiv: false,
    kapitel: 5,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Leben im Ausland – für immer?",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Leben im Ausland“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Elena Popescu, 42 Jahre, Köchin", text: "Ich lebe seit zwölf Jahren in Deutschland und fühle mich hier zu Hause. Meine Kinder sind hier aufgewachsen, ich habe eine gute Arbeit. Zurück in meine Heimat möchte ich nur im Urlaub." },
    meinungB: { person: "Thomas Kerner, 55 Jahre, Ingenieur", text: "Ich habe acht Jahre in Kanada gearbeitet. Das war spannend, aber ich habe meine Familie und meine Freunde sehr vermisst. Für ein paar Jahre ist das Ausland super – aber alt werden möchte ich in meiner Heimat." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k5-t3-besuch",
    aktiv: false,
    kapitel: 5,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Besuch aus dem Ausland",
    situationText: "Eine gemeinsame Freundin aus Ihrem Heimatland kommt für ein Wochenende zu Besuch. Sie war noch nie in Deutschland.",
    aufgabeText: "Planen Sie das Wochenende zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Besuch",
    stichpunkte: ["Abholen (Bahnhof/Flughafen)", "Wo schläft sie?", "Programm am Samstag", "Typisch deutsches Essen", "Wer macht was?"],
    eroeffnung: "Hallo! Toll, dass Leyla uns bald besucht! Sie kommt am Freitagabend um 21 Uhr am Flughafen Stuttgart an. Wer kann sie denn abholen?",
    partnerInfo: "Du hast kein Auto und arbeitest am Freitag bis 20 Uhr. In deiner Wohnung ist wenig Platz (nur ein kleines Sofa). Am Samstag möchtest du ihr gern die Altstadt zeigen und abends zusammen kochen. Du schlägst Maultaschen oder Käsespätzle als typisches Essen vor.",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  },

  // ---------------- Kapitel 6: Weihnachten ----------------
  {
    id: "telcb1-k6-t2-geschenke",
    aktiv: false,
    kapitel: 6,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL2",
    formatLabel: TELC_B1_LABEL2,
    title: "Weihnachtsgeschenke",
    kontext: "Sie haben in einer Zeitschrift etwas zum Thema „Weihnachtsgeschenke“ gelesen. Berichten Sie Ihrer Gesprächspartnerin darüber. Sie hat eine andere Meinung gelesen und berichtet Ihnen auch davon. Unterhalten Sie sich dann über das Thema: Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.",
    meinungA: { person: "Sabine Wolf, 47 Jahre, Erzieherin", text: "Ich mache meine Geschenke am liebsten selbst: Ich backe Plätzchen, stricke Schals oder mache ein Fotoalbum. Das kostet wenig Geld, aber viel Zeit – und genau das zeigt, dass mir die Person wichtig ist." },
    meinungB: { person: "Marco Rossi, 36 Jahre, Verkäufer", text: "Ich frage meine Familie einfach, was sie sich wünscht, und kaufe es dann im Internet. So bekommt jeder etwas, das er wirklich braucht. Selbstgemachte Geschenke landen doch oft im Schrank." },
    hilfen: TELC_B1_REDEMITTEL_TEIL2,
    zielRedezeitSekunden: 180
  },
  {
    id: "telcb1-k6-t3-kursfeier",
    aktiv: false,
    kapitel: 6,
    kurse: TELC_B1_KURS,
    format: "TELC_B1_TEIL3",
    formatLabel: TELC_B1_LABEL3,
    situation: "Weihnachtsfeier im Deutschkurs",
    situationText: "Am letzten Kursabend vor den Ferien möchte Ihr Deutschkurs eine kleine Weihnachtsfeier machen. Sie und Ihre Gesprächspartnerin organisieren sie.",
    aufgabeText: "Planen Sie die Feier zusammen. Überlegen Sie, was zu tun ist und wer welche Aufgabe übernimmt.",
    stichpunkteTitel: "Weihnachtsfeier",
    stichpunkte: ["Essen und Getränke", "Dekoration", "Musik / Programm", "Geschenke (Wichteln?)", "Wer macht was?"],
    eroeffnung: "Hallo! Ich freue mich schon auf unsere Weihnachtsfeier im Kurs. Sollen alle etwas zu essen mitbringen? Was meinst du?",
    partnerInfo: "Du möchtest, dass jede Person etwas typisches aus ihrem Land mitbringt. Glühwein findest du schwierig, weil im Rathaus kein Alkohol erlaubt ist - du schlägst Kinderpunsch vor. Für Wichteln bist du, aber nur mit einer Grenze von 5 Euro. Du kannst Musik mitbringen (Lautsprecher).",
    hilfen: TELC_B1_REDEMITTEL_TEIL3,
    zielRedezeitSekunden: 180
  }
];
