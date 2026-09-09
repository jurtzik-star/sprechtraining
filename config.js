/* ============================================================
   config.js
   HIER TRÄGST DU DEINE PERSÖNLICHEN EINSTELLUNGEN EIN.

   Sprechtraining nutzt bewusst denselben Cloudflare Worker wie
   Schreibtraining (schreibtraining-bewertung) - er bekommt dafür einen
   dritten/vierten Modus ("sprechen_chat"/"sprechen_feedback") dazu,
   siehe worker.js. Deshalb sind WORKER_URL und APP_SECRET hier absichtlich
   identisch mit der Schreibtraining-config.js.

   WICHTIG nach dem Hochladen dieser App: im Cloudflare Dashboard beim
   Worker schreibtraining-bewertung die Umgebungsvariable ALLOWED_ORIGIN
   um die Adresse DIESER App ergänzen (kommagetrennt), sonst blockiert
   der Worker die Anfragen von hier aus. Siehe Hinweis in worker.js.
   ============================================================ */

const CONFIG = {
  // Derselbe Worker wie Schreibtraining (siehe Hinweis oben).
  WORKER_URL: "https://schreibtraining-bewertung.jurtzik.workers.dev",
  // Muss exakt mit dem APP_SECRET im Cloudflare Worker übereinstimmen -
  // identisch mit Schreibtraining, da es derselbe Worker ist.
  APP_SECRET: "Z3SKGkgo2qkvCbqQTg06D86RcKlrCB174vyn4BRgdbo",

  // Optional: "Formular-Antworten senden"-URL eines Google Formulars, an
  // das Name, Kurs, Thema und die Bewertung übermittelt werden (wie bei
  // Schreibtraining). Solange hier "DEINE-FORM-ID" steht, wird nichts
  // übermittelt - die App funktioniert trotzdem normal, nur ohne
  // Übermittlung an die Lehrkraft.
  GOOGLE_FORM_ACTION_URL: "https://docs.google.com/forms/d/e/DEINE-FORM-ID/formResponse",
  GOOGLE_FORM_ACTION_URL_BY_KURS: {
    // z. B. "B1 Oberndorf (KL T. Jurtzik)": "https://docs.google.com/forms/d/e/.../formResponse"
  },
  GOOGLE_FORM_ENTRY_IDS: {
    name: "entry.XXXXXXXXX",
    kurs: "entry.XXXXXXXXX",
    thema: "entry.XXXXXXXXX",
    transkript: "entry.XXXXXXXXX",
    gesamteinschaetzung: "entry.XXXXXXXXX",
    bewertungDetails: "entry.XXXXXXXXX"
  },

  // Auswahlliste der Kurse/Gruppen im Dropdown - gleiche Liste wie bei
  // Schreibtraining, damit Deep-Links aus den Kurs-Apps funktionieren.
  KURSE: ["B1 Oberndorf (KL T. Jurtzik)", "BSK-B1+ Rottweil (KL T. Jurtzik)", "BSK-B2 Rottweil (KL T. Jurtzik)"]
};
