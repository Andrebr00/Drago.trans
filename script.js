// script.js

// 1️⃣ Creiamo l'oggetto XMLHttpRequest
const xhr = new XMLHttpRequest();

// 2️⃣ Impostiamo il tipo di richiesta (GET) e il percorso del file JSON
xhr.open("GET", "persone.json", true);

// 3️⃣ Definiamo cosa fare quando la risposta è pronta
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse del file JSON in un array di oggetti
    const persone = JSON.parse(xhr.responseText);

    // Riferimento al corpo della tabella
    const tbody = document.querySelector("#tabella-persone tbody");

    // Riempimento tabella
    persone.forEach(persona => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${persona.nome}</td>
        <td>${persona.cognome}</td>
        <td>${persona.indirizzo}</td>
        <td>${persona.citta}</td>
        <td>${persona.cap}</td>
      `;

      tbody.appendChild(tr);
    });
  } else {
    console.error("Errore nel caricamento del file JSON:", xhr.status);
  }
};

// 4️⃣ Invio della richiesta
xhr.send();
