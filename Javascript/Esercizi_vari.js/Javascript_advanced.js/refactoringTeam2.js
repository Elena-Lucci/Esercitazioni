const dipendenti = [];
let idDip = 1;

function aggiungiDipendente(nome, ruolo, stipendio) {
  return new Promise((resolve, reject) => {
    const dipendente = {
      id: idDip++,
      name: nome,
      role: ruolo,
      salary: stipendio,
    };
    dipendenti.push(dipendente);
    resolve(dipendente);
  });
}
function promuovi(id, nuovoRuolo, aumento) {
  return new Promise((resolve, reject) => {
    const nuovoDipendente = dipendenti.find((x) => x.id === id);
    if (!nuovoDipendente) {
      reject("Utente non esiste!");
    } else {
      nuovoDipendente.role = nuovoRuolo;
      nuovoDipendente.salary += aumento;
      resolve(nuovoDipendente);
    }
  });
}
function mostraStaff() {
  return dipendenti.forEach((x) => {
    console.log(x);
  });
}
function calcolaMediaStipendi() {
  let media =
    dipendenti.reduce((acc, curr) => acc + curr.salary, 0) / dipendenti.length;
  console.log("Media degli stipendi: " + media);
}
aggiungiDipendente("Elena", "Web Designer", 1750)
  .then(() => {
    aggiungiDipendente("Christian", "Junior Full stack Developer", 1450);
  })
  .then(() => promuovi(1, "Capo", 1000))
  .then(() => {
    mostraStaff();
    calcolaMediaStipendi();
  })
  .catch((error) => {
    console.error(error);
  });
