/* ## 🧠 Esercizio 3 - "Il Test dei Numeri Fortunati"

**Consegna:**

- Genera **3 numeri casuali** tra 1 e 10.
- Per ciascun numero:
  - Se il numero è pari e maggiore di 5, stampa "Numero fortunato!".
  - Se il numero è dispari o minore o uguale a 5, stampa "Ritenta, sarai più fortunato".
- Usa una funzione espressa `checkLuckyNumber(num)` che ritorna `true` se il numero è pari e maggiore di 5, `false` altrimenti.
- Dopo aver valutato i 3 numeri, stampa quante volte è uscito un "Numero fortunato". */

function checkLuckyNumber(num) {
    return (num%2===0 && num>5);
    }

    let countWin = 0;
for (let i=0; i<3; i++) {
let numCas = Math.floor(Math.random()*10)+1;
console.log(numCas);

if (checkLuckyNumber(numCas)) {
    console.log ("Numero fortunato!");
    countWin++;
}

else {
    console.log ("Ritenta, sarai più fortunato");
}

}

console.log("Numero delle tue vittorie: " + countWin);



