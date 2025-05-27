// === TEAM 1 ===
// 📦 GESTIONE ORDINI FAST FOOD
// Obiettivo: simulare in console la gestione ordini di un fast food.

//
// ✅ CONSEGNA:
//

// 1. Crea un array vuoto chiamato `ordini` e una variabile `idCorrente` che parte da 1.
const ordini = [];
let idCorrente = 1;

// 2. Crea una funzione `creaOrdine(nomeCliente, prodotti, callback)` che:
//    - calcola il totale dell’ordine (somma dei prezzi)
//    - crea un oggetto ordine con: `id`, `cliente`, `prodotti`, `totale`, `stato: "in preparazione"`
//    - aggiunge l’ordine all’array `ordini`
//    - stampa un messaggio in console
//    - esegue la `callback` passando l’ordine appena creato

function creaOrdine(nomeCliente, prodotti, callback) {
const totale = prodotti.reduce((acc, cur) => acc + cur.prezzo, 0);
const ordine = {
    id: idCorrente++,
    cliente: nomeCliente,
    prodotti,
    totale: totale,
    stato: "in preparazione",
}

ordini.push(ordine);

console.log(`Ordine in corso`);

callback(ordine);
}

//Prova

// creaOrdine(
//     "Anna",
//     [
//         {nome: "Hamburger", prezzo: 10},
//         {nome: "Cocacola", prezzo: 3},
//         {nome: "Patatine", prezzo: 2.5},
//     ],
// )
// console.log(ordini);

// 3. Crea una funzione `aggiornaStatoOrdine(id, nuovoStato, callback)` che:
//    - cerca l’ordine con l’ID specificato
//    - aggiorna il suo stato
//    - stampa in console l’aggiornamento
//    - esegue la `callback` passando l’ordine aggiornato

function aggiornaStatoOrdine(id, nuovoStato, callback) {
    const ordine = ordini.find((x) => x.id = id);
    ordine.stato = nuovoStato;
    console.log(nuovoStato);
    callback(ordine);
}

// 4. Crea una funzione `mostraOrdini()` che:
//    - stampa in console l’elenco completo di tutti gli ordini con ID, cliente, totale, stato

function mostraOrdini() {
    console.log(`L’elenco completo di tutti gli ordini è:`);
    ordini.forEach((x) => console.log(x));
}

// 5. Usa le funzioni per simulare:
//    - un ordine per un cliente a tua scelta
//    - un cambio di stato a “pronto”
//    - la stampa finale di tutti gli ordini

creaOrdine("Anna",
    [
        {nome: "Hamburger", prezzo: 10},
        {nome: "Cocacola", prezzo: 3},
        {nome: "Patatine", prezzo: 2.5},
    ],
    
    (x) => aggiornaStatoOrdine(x.id, "pronto", () => mostraOrdini())
)

console.log(ordini);