/* ============================================================
   situationen.js
   Die Teil-3-Situationen ("Gemeinsam etwas planen") - eine pro
   Handlungsfeld, analog zu den zwölf Handlungsfeldern aus dem
   Rahmencurriculum, die auch themen.js (Teil 2) abdeckt.

   Format "DTZ_B1_TEIL3" entspricht Sprechen Teil 3 des Deutsch-Tests
   für Zuwanderer (DTZ) - "Gemeinsam etwas planen". Anders als Teil 2
   gibt es hier kein Bildpaar für zwei Teilnehmer:innen, sondern eine
   gemeinsame Situation mit einem Foto und einem Klebezettel mit
   Stichpunkten (wird von index.html/app.js als Grafik gebaut, kein
   Scan/Foto einer Prüfungsvorlage).

   Neue Situation ergänzen: einfach ein weiteres Objekt unten anfügen
   und ein passendes Bild unter images/<imageFile> ablegen. imageFile
   ist optional - fehlt das Bild, zeigt die App nur Situation, Aufgabe
   und Klebezettel ohne Foto.
   ============================================================ */

const SITUATIONEN = [
  {
    id: "dtz-b1-teil3-aemter-ummeldung",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Ämter und Behörden",
    situation: "Ummeldung organisieren",
    imageFile: "images/dtz-b1-teil3-ummeldung.jpg",
    situationText: "Ihre Freundin/Ihr Freund ist gerade umgezogen und muss sich noch beim Bürgeramt ummelden. Sie begleiten sie/ihn.",
    aufgabeText: "Organisieren Sie gemeinsam den Termin.",
    stichpunkte: [
      "Wann Termin (online buchen)?",
      "Welche Unterlagen mitbringen?",
      "Wie hinkommen?",
      "Wer wartet mit?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-arbeit-betriebsausflug",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Arbeit",
    situation: "Betriebsausflug planen",
    imageFile: "images/dtz-b1-teil3-betriebsausflug.jpg",
    situationText: "Sie und ein/e Kolleg*in sollen für das Team einen gemeinsamen Betriebsausflug organisieren.",
    aufgabeText: "Planen Sie den Betriebsausflug.",
    stichpunkte: [
      "Wann?",
      "Wohin?",
      "Wie kommen alle hin?",
      "Essen und Trinken?",
      "Wie viel darf es kosten?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-arbeitssuche-berufswahl",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Arbeitssuche",
    situation: "Berufswahl",
    imageFile: "images/dtz-b1-teil3-berufswahl.jpg",
    situationText: "Ihre Freundin/Ihr Freund weiß nicht, welchen Beruf sie/er wählen soll, zum Beispiel Krankenschwester/Krankenpfleger oder Erzieherin/Erzieher.",
    aufgabeText: "Besprechen Sie gemeinsam die Berufswahl.",
    stichpunkte: [
      "Welche Berufe kommen infrage?",
      "Wie lange dauert die Ausbildung?",
      "Vor- und Nachteile?",
      "Wo informiert man sich?",
      "Wer kann helfen?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-weiterbildung-ausbildung",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Aus- und Weiterbildung",
    situation: "Ausbildung machen",
    imageFile: "images/dtz-b1-teil3-ausbildung.jpg",
    situationText: "Sie und ein/e Freund*in überlegen beide, eine Ausbildung zu beginnen.",
    aufgabeText: "Besprechen Sie gemeinsam, wie Sie vorgehen.",
    stichpunkte: [
      "Welche Ausbildung?",
      "Wo informieren/bewerben?",
      "Voraussetzungen?",
      "Wie lange dauert es?",
      "Wie finanziert man das?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-banken-geschenk",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Banken und Versicherungen",
    situation: "Geburtstagsgeschenk",
    imageFile: "images/dtz-b1-teil3-geburtstagsgeschenk.jpg",
    situationText: "Ein gemeinsamer Freund/Eine gemeinsame Freundin hat bald Geburtstag. Sie möchten zusammen mit anderen Geld sammeln und ein Geschenk kaufen.",
    aufgabeText: "Organisieren Sie das Geburtstagsgeschenk.",
    stichpunkte: [
      "Was schenken?",
      "Wie viel Geld sammeln?",
      "Wer sammelt das Geld ein?",
      "Wo kaufen?",
      "Wer besorgt es?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-kinder-kindergeburtstag",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Betreuung und Ausbildung der Kinder",
    situation: "Kindergeburtstag",
    imageFile: "images/dtz-b1-teil3-kindergeburtstag.jpg",
    situationText: "Sie und Ihr/e Gesprächspartner*in haben Kinder, die am gleichen Tag Geburtstag haben. Sie wollen gemeinsam feiern.",
    aufgabeText: "Organisieren Sie den Kindergeburtstag.",
    stichpunkte: [
      "Wann?",
      "Wo?",
      "Programm?",
      "Essen und Trinken?",
      "Wie viele Gäste?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-einkaufen-flohmarkt",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Einkaufen",
    situation: "Flohmarktstand",
    imageFile: "images/dtz-b1-teil3-flohmarkt.jpg",
    situationText: "Sie und ein/e Freund*in möchten gemeinsam einen Stand auf dem Flohmarkt haben.",
    aufgabeText: "Organisieren Sie den Flohmarktstand.",
    stichpunkte: [
      "Was verkaufen?",
      "Wann und wo ist der Flohmarkt?",
      "Wer bringt was mit (Tisch, Preisschilder)?",
      "Wie kommen die Sachen dorthin?",
      "Wer bleibt wie lange am Stand?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-gesundheit-krankenhaus",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Gesundheit",
    situation: "Gemeinsamer Freund im Krankenhaus",
    imageFile: "images/dtz-b1-teil3-krankenhaus.jpg",
    situationText: "Ein gemeinsamer Freund/Eine gemeinsame Freundin liegt im Krankenhaus. Sie möchten ihn/sie zusammen besuchen.",
    aufgabeText: "Organisieren Sie den Krankenhausbesuch.",
    stichpunkte: [
      "Wann besuchen (Besuchszeiten)?",
      "Wie hinkommen?",
      "Was mitbringen?",
      "Wie lange bleiben?",
      "Wer sagt noch Bescheid?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-medien-filmabend",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Mediennutzung",
    situation: "Filmabend organisieren",
    imageFile: "images/dtz-b1-teil3-filmabend.jpg",
    situationText: "Sie und ein/e Freund*in möchten gemeinsam einen Filmabend machen.",
    aufgabeText: "Organisieren Sie den Filmabend.",
    stichpunkte: [
      "Welcher Film/welche Serie?",
      "Wo (bei wem)?",
      "Wann?",
      "Was essen und trinken?",
      "Wer kommt noch mit?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-mobilitaet-ausflug-natur",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Mobilität",
    situation: "Ausflug in die Natur",
    imageFile: "images/dtz-b1-teil3-ausflug-natur.jpg",
    situationText: "Sie und ein/e Freund*in möchten am Wochenende einen Ausflug in die Natur machen.",
    aufgabeText: "Planen Sie den Ausflug.",
    stichpunkte: [
      "Wohin?",
      "Wann treffen?",
      "Wie hinkommen (Verkehrsmittel)?",
      "Was mitnehmen?",
      "Picknick oder Einkehr?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-unterricht-pruefung-lernen",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Unterricht",
    situation: "Für Prüfung lernen",
    imageFile: "images/dtz-b1-teil3-lernen.jpg",
    situationText: "Sie und ein/e Kurskolleg*in möchten sich gemeinsam auf die nächste Prüfung vorbereiten.",
    aufgabeText: "Organisieren Sie das gemeinsame Lernen.",
    stichpunkte: [
      "Wann und wo lernen?",
      "Welche Themen zuerst?",
      "Wie oft treffen?",
      "Wer bringt Material mit?",
      "Wie lange lernen?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  },
  {
    id: "dtz-b1-teil3-wohnen-muellsammelaktion",
    format: "DTZ_B1_TEIL3",
    formatLabel: "DTZ, Sprechen Teil 3 – Gemeinsam planen",
    handlungsfeld: "Wohnen",
    situation: "Müllsammelaktion im Schulpark",
    imageFile: "images/dtz-b1-teil3-muellsammelaktion.jpg",
    situationText: "Der Park an der Schule ist oft voller Müll. Sie und andere Eltern möchten das ändern.",
    aufgabeText: "Organisieren Sie eine Müllsammel-Aktion mit anderen Eltern.",
    stichpunkte: [
      "Wann?",
      "Wer hilft mit?",
      "Was wird gebraucht (Handschuhe, Müllsäcke)?",
      "Wie informieren wir die anderen Eltern?",
      "Treffpunkt?",
      "...?"
    ],
    zielRedezeitSekunden: 180
  }
];
