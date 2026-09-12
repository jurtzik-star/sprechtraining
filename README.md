# Sprechtraining – Einrichtung

Neue App, die denselben Cloudflare Worker wie Schreibtraining nutzt
(`schreibtraining-bewertung`), aber mit eigenen Modi für ein
Chat-Gespräch statt einer einmaligen Text-Bewertung. Die KTN tippen ihre
Antworten (z. B. per Diktierfunktion des Handys), "sprechen" die Antwort
also laut, ohne dass eine eigene Audio-Aufnahme-Technik nötig ist.

Die App deckt jetzt **beide Sprechteile des DTZ (g.a.s.t.)** ab:

- **Teil 2 – Über Erfahrungen sprechen (Bildbeschreibung):** ein Foto +
  feste Leitfragen (Stufe A2/B1), wie bisher.
- **Teil 3 – Gemeinsam etwas planen:** eine Situation + Aufgabe, dargestellt
  durch einen selbst gebauten "Klebezettel" (Stichpunkte) **plus** ein
  passendes Foto - deine eigene Ergänzung zum offiziellen Format, da ein
  Bild den Prüflingen laut deiner Erfahrung als Prüfer die Aufgabe besser
  einprägt. Die KI übernimmt hier die Rolle der Gesprächspartnerin/des
  Gesprächspartners (nicht der Prüferin) und macht selbst Vorschläge/
  Gegenvorschläge, statt nur Fragen zu stellen.

Teil 3 enthält 12 Situationen, eine pro Handlungsfeld des
Rahmencurriculums (siehe `situationen.js`) - genau wie bei Teil 2 sind
zwei davon (Berufswahl, Müllsammelaktion im Schulpark) direkt aus deiner
eigenen Prüfungserfahrung übernommen.

## Was du jetzt tun musst

1. **worker.js neu deployen.** Die Datei `worker.js` in diesem Ordner ist
   identisch mit der aktualisierten `worker.js` im Schreibtraining-Ordner
   - beide enthalten jetzt zusätzlich zur bestehenden Aufsatz-Bewertung und
   dem Notiz-Modus vier weitere Modi: `sprechen_chat`/`sprechen_feedback`
   für Teil 2 **und** dieselben zwei Modi jetzt auch mit Teil-3-Logik
   (intern über `thema.format` unterschieden, kein neuer `mode`-Wert
   nötig). Im Cloudflare Dashboard beim bestehenden Worker
   `schreibtraining-bewertung` einfach den Code durch diese neue Version
   ersetzen und erneut deployen. Es wird **kein zweiter Worker**
   gebraucht. Alle bisherigen Modi (Aufsatz-Bewertung, Notiz-Faktencheck,
   Teil-2-Sprechen) wurden nach dieser Änderung erneut getestet und
   funktionieren unverändert.

2. **ALLOWED_ORIGIN ergänzen.** Im selben Worker unter den
   Umgebungsvariablen die bestehende `ALLOWED_ORIGIN` um die Adresse
   dieser neuen App ergänzen (kommagetrennt), z. B.:
   `https://jurtzik-star.github.io/schreibtraining,https://sprechtraining.jurtzik-lernapps.de`
   (die genaue Adresse hängt davon ab, wie du die App hostest/welche
   Subdomain du dafür anlegst).

3. **Neue Datei `situationen.js` mit hochladen.** Für Teil 3 gibt es eine
   zusätzliche Daten-Datei `situationen.js` (analog zu `themen.js` für
   Teil 2). Sie muss zusammen mit den aktualisierten `index.html`,
   `app.js` und `style.css` in dein Repo/Hosting - sonst fehlt der
   Teil-3-Abschnitt in der App.

4. **Bilder ergänzen.** In `themen.js` sind die vier bestehenden
   Teil-2-Bilder vorbereitet (Arztbesuch, Familie). Für Teil 3 kommen 12
   weitere Bilder dazu (eines pro Situation), Dateinamen laut
   `situationen.js`:
   `images/dtz-b1-teil3-ummeldung.jpg`,
   `images/dtz-b1-teil3-betriebsausflug.jpg`,
   `images/dtz-b1-teil3-berufswahl.jpg`,
   `images/dtz-b1-teil3-ausbildung.jpg`,
   `images/dtz-b1-teil3-geburtstagsgeschenk.jpg`,
   `images/dtz-b1-teil3-kindergeburtstag.jpg`,
   `images/dtz-b1-teil3-flohmarkt.jpg`,
   `images/dtz-b1-teil3-krankenhaus.jpg`,
   `images/dtz-b1-teil3-filmabend.jpg`,
   `images/dtz-b1-teil3-ausflug-natur.jpg`,
   `images/dtz-b1-teil3-lernen.jpg`,
   `images/dtz-b1-teil3-muellsammelaktion.jpg`.
   Die passende Einkaufsliste (inkl. Suchbegriffen) steht im
   Fotocheckliste-Artefakt, Abschnitt "Teil 3". Fehlt eine Datei, zeigt
   die App einfach nur Situation/Aufgabe/Klebezettel ohne Foto - nichts
   bricht dadurch.

5. **Optional: Google Formular.** Genau wie bei Schreibtraining kannst du
   ein Formular anlegen (Felder: Name, Kurs, Thema, Transkript,
   Gesamteinschätzung, Bewertungsdetails) und die `entry.XXXXXXXXX`-IDs
   sowie die "Formular-Antworten senden"-URL in `config.js` eintragen.
   Solange dort der Platzhalter `DEINE-FORM-ID` steht, funktioniert die
   App normal, es wird nur nichts an eine Lehrkraft übermittelt. Teil-3-
   Gespräche werden über dasselbe Formular übermittelt wie Teil-2.

6. **Hosting/Domain.** Wie bei den anderen Apps: eigenes GitHub-Repo
   (z. B. "sprechtraining"), GitHub Pages aktivieren, bei Bedarf eigene
   Subdomain mit Cloudflare Access davor.

## Weitere Themen ergänzen

Einfach ein weiteres Objekt in `themen.js` anfügen (Titel, Bildfragen,
mögliche Prüfungsfragen, Bilddatei) - kein Code-Änderung nötig. Für das
telc-B2-Sprechen-Format (Kontaktaufnahme / Erfahrungen / gemeinsam etwas
planen, andere Struktur als DTZ) können später eigene Themen mit einem
neuen `format`-Wert ergänzt werden.

## Kapitel-Freischaltung & Vorschau-Modus

Jedes Thema/jede Situation hat ein Feld `aktiv: true/false` in
themen.js/situationen.js/telc-b2.js. Nur `aktiv: true`-Einträge erscheinen
normalerweise im Themen-Dropdown der App - TN sehen so immer nur die im
Unterricht bereits behandelten Kapitel, nicht den kompletten Themenpool.
Du schaltest ein Kapitel frei, indem du die betroffenen Einträge auf
`aktiv: true` setzt (z. B. direkt auf GitHub).

Um dir selbst vorab den kompletten Stand anzusehen - auch die noch nicht
freigeschalteten Themen - ruf die App mit dem zusätzlichen Adress-Parameter
`?vorschau=1` auf, z. B.:

`https://sprechtraining.jurtzik-lernapps.de/?vorschau=1`

Im Vorschau-Modus siehst du ALLE Themen/Situationen im Dropdown, noch
nicht freigeschaltete sind zusätzlich mit "🔒 Vorschau (noch nicht
freigeschaltet)" markiert, und oben erscheint ein gut sichtbarer
gelber Hinweisbalken. Ohne diesen Parameter in der Adresse sehen TN
(und du selbst im Alltag) weiterhin nur das normal Freigeschaltete - der
Modus ist rein additiv und ändert nichts an den aktiv-Feldern.

## Deep-Link aus den Kurs-Apps (nächster möglicher Schritt)

Noch nicht eingebaut: eine "🗣️ Sprechen"-Kachel in B1/BSK-B1+/BSK-B2, die
per Deep-Link (`?name=...&kurs=...&themaId=...`) hierher verlinkt - genau
wie es die bestehende "✍️ Schreiben"-Kachel für Schreibtraining schon tut.
Die App unterstützt diese Parameter bereits (siehe `app.js`), es fehlt nur
noch das Verlinken/die Kachel in den drei Kurs-Apps selbst.

## Was getestet wurde

Playwright-Test (Teil 2) deckt ab: Logo/Header, dynamische Fußzeile
(Basis / Kurs / Thema), Themenauswahl mit Vorschau der Leitfragen,
komplettes Gespräch (3 Antworten, Chat-Verlauf korrekt), Freischaltung
des "Auswerten"-Buttons erst ab 3 Antworten, Auswertung inkl. aller vier
Kriterien, Zurücksetzen beim Themenwechsel.

Zusätzlicher Playwright-Test (Teil 3) deckt den kompletten neuen Ablauf
ab: Auswahl einer Situation aus der neuen Themengruppe im Dropdown,
korrekte Anzeige von Situation/Aufgabe/Klebezettel-Stichpunkten, Wechsel
zur Gesprächsansicht mit angepasster Überschrift
("Gesprächspartnerin/-partner" statt "Prüferin"), automatische
Eröffnungsnachricht aus der Aufgabe, drei Antworten senden, Freischaltung
von "Auswerten", Auswertung mit dem für Teil 3 angepassten Kriterium
"Eigene Vorschläge / Verhandeln" - keine JS-Fehler in der Konsole.

worker.js zusätzlich isoliert getestet (mit simulierten Modell-Antworten,
kein echter Anthropic-API-Zugriff nötig): Teil-3-Chat (200), Teil-3-
Feedback (200), Teil-3 mit unvollständigem Thema (erwarteter 400-Fehler),
Teil-2-Chat als Regressionstest (weiterhin 200), Standard-Aufsatz-
Bewertung als Regressionstest (weiterhin 200), sowie separat der Notiz-
Faktencheck-Modus der BSK-B2-Grammatik-App, die denselben Worker
mitbenutzt (ebenfalls weiterhin 200, keine Störung durch die Teil-3-
Änderungen).

Der echte Cloudflare-Worker mit deinem echten API-Key konnte von hier aus
nicht angesprochen werden (kein Zugriff auf dein Cloudflare-Konto) - bitte
nach dem Deploy einmal live durchklicken, auch für Teil 3.
