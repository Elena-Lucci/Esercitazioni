// === TEAM 2 ===
// 🏢 HR CONSOLE – GESTIONE DIPENDENTI
// Obiettivo: simulare in console la gestione di uno staff aziendale.

//
// ✅ CONSEGNA:
//

// 1. Crea un array vuoto chiamato `dipendenti` e una variabile `idDip` che parte da 1.
const dipendenti = [];
let idDip = 1;

// 2. Crea una funzione `aggiungiDipendente(nome, ruolo, stipendio, callback)` che:
//    - crea un oggetto dipendente con `id`, `nome`, `ruolo`, `stipendio`
//    - lo aggiunge all’array `dipendenti`
//    - stampa un messaggio in console
//    - esegue la `callback` passando il nuovo dipendente

function aggiungiDipendente(nome, ruolo, stipendio, callback) {
  const dipendente = {
    id: idDip++,
    name: nome,
    role: ruolo,
    salary: stipendio,
  };
  dipendenti.push(dipendente);
  callback(dipendente);
}
/*aggiungiDipendente("Carlo", "Impiegato", 1450);
aggiungiDipendente("Francesca", "Studente", 450);*/

// 3. Crea una funzione `promuovi(id, nuovoRuolo, aumento, callback)` che:
//    - cerca il dipendente con l’ID specificato
//    - aggiorna il suo ruolo e stipendio (+ aumento)
//    - stampa in console i dati aggiornati
//    - esegue la `callback` passando il dipendente aggiornato

function promuovi(id, nuovoRuolo, aumento, callback) {
  const nuovoDipendente = dipendenti.find((x) => x.id === id);
  nuovoDipendente.role = nuovoRuolo;
  nuovoDipendente.salary += aumento;
  callback(nuovoDipendente);
}
//promuovi(2, "Capo", 500);

// 4. Crea una funzione `mostraStaff()` che:
//    - stampa in console l’elenco completo dei dipendenti con ID, nome, ruolo, stipendio
function mostraStaff() {
  return dipendenti.forEach((x) => {
    console.log(x);
  });
}
// 5. Crea una funzione `calcolaMediaStipendi()` che:
//    - calcola e stampa la media degli stipendi dei dipendenti attuali
function calcolaMediaStipendi() {
  let media =
    dipendenti.reduce((acc, curr) => acc + curr.salary, 0) / dipendenti.length;
  console.log("Media degli stipendi: " + media);
}

// 6. Usa le funzioni per simulare:
//    - due assunzioni
//    - una promozione
//    - la stampa dello staff
//    - il calcolo della media stipendi
aggiungiDipendente("Elena", "Web Designer", 1750, () => {
  aggiungiDipendente("Christian", "Junior Full stack Developer", 1450, () => {
    promuovi(1, "Capo", 1000, () => {
      mostraStaff();
      calcolaMediaStipendi();
    });
  });
});
