/*Scrivi una funzione che prende un array di numeri come parametro e restituisce un nuovo array contenente solo i numeri primi dell'array originale.
Stampa il nuovo array. Utilizza un ciclo for per iterare nell'array e un ciclo for nidificato per verificare se ogni numero è divisibile per qualunque numero diverso da 1 e se stesso. */
/*
function primiSearch(numeri) {
    let primi = [];
    let flagPrimo = true; 
    for (let i=0; i < numeri.length; i++) {
        for (let j=2; j < numeri[i]; j++) {
            if (numeri[i] % j === 0) {
                flagPrimo = false;
                break;              
            }
        }
        if (flagPrimo) {
            primi.push(numeri[i]);
        }
        flagPrimo = true;
    }
    return primi;
}

const numeri = [12, 5, 9, 13, 11]; 
console.log(primiSearch(numeri));*/

//Posso alternativamente usare il metodo filter. Restituisce un array, con solo alcuni elementi dell'array originale su cui è applicato, che soddisfano una certa condizione.

function primiSearch(numeri) {
    const primi = numeri.filter((x)=> { 
        let flagPrimo = true;
        for (let j=2; j < x; j++) {
            if (x % j === 0) {
                flagPrimo = false;
                break;              
            }}
            return flagPrimo;
        });
    return primi;
}

const numeri = [12, 5, 9, 13, 11]; 
console.log(primiSearch(numeri));