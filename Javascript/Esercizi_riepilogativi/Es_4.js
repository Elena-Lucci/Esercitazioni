/*Scrivi una funzione che prende un oggetto come parametro e restituisce un nuovo array con tutti i nomi delle proprietà dell'oggetto che hanno un valore stringa più lungo di 5 caratteri.
Stampa il nuovo array. */

const object = {
    peso: 50,
    altezza: 60,
    larghezza: 30,
    tipologia: "scatola",
    utilizzo: "vestiario",
};

/*function proprieta (obj) {
    const elencoNomi = []; //filter agisce su un array, e quindi dall'oggetto object creo un novo array elencoNomi, inizialmente vuoto.
    for (const b in obj) { //per ogni proprietà b dell'oggetto obj, mi mette il suo nome aggiungendolo alla fine dell'array elencoNomi.
        elencoNomi.push(b);
    }

    return elencoNomi.filter ((b) => typeof obj[b] === "string" && obj[b].length > 5); //mi restituisce un nuovo array, derivante da elencoNomi filtrato, in modo tale che se il valore corrispondente alla proprietà b è di tipo stringa ed è lungo più di 5 caratteri, allora lo aggiunge come elemento, altrimenti no.
}
console.log(proprieta(object)); //invoco la funzione che accetta come parametro l'oggetto in questione.



/* Usare in alternativa il metodo Object.values : prende i valori di un oggetto e li converte in elementi di un array. Con filter prendo solo i dati di tipo stringa, la cui lunghezza è maggiore di 5. */

function proprieta (obj) {
return Object.values(obj).filter ((b) => typeof b === "string" && b.length > 5);
}

console.log(proprieta(object));