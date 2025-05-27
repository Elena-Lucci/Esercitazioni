const ordini = [];
let idCorrente = 1;

function creaOrdine(nomeCliente, prodotti) {
  return new Promise((resolve, reject) => {
    const totale = prodotti.reduce((acc, cur) => acc + cur.prezzo, 0);
    const ordine = {
      id: idCorrente++,
      cliente: nomeCliente,
      prodotti,
      totale: totale,
      stato: "in preparazione",
    };

    ordini.push(ordine);

    resolve(ordine);
  });
}

function aggiornaStatoOrdine(id, nuovoStato) {
    return new Promise ((resolve, reject) => {
        const ordine = ordini.find((x) => x.id = id);
        if(!ordine) {
           reject("Ordine non trovato");
        } else {
            ordine.stato = nuovoStato;
            resolve(ordine);
        }
    })
}

function mostraOrdini() {
    console.log(`L’elenco completo di tutti gli ordini è:`);
    ordini.forEach((x) => console.log(x));
}

creaOrdine(
    "Anna",
    [
        {nome: "Hamburger", prezzo: 10},
        {nome: "Cocacola", prezzo: 3},
        {nome: "Patatine", prezzo: 2.5},
    ],
)

.then((ordine) => {aggiornaStatoOrdine(ordine.id, "Pronto")})
.then(() => mostraOrdini())
.catch((error) => console.error(error))