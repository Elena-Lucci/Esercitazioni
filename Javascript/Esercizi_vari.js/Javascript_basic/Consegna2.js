/*## 🧹 Esercizio 2 - "Il Gioco dei Multipli"

**Consegna:**

- Genera un numero casuale da 0 a 19. */

let numCas = Math.floor(Math.random()*19);
console.log(numCas);

/*- Crea una funzione espressa `isMultipleOf(num, divisor)` che ritorna `true` se `num` è divisibile per `divisor`.*/

function isMultipleOf(num, divisor) {
    return num%divisor === 0;
}
console.log(isMultipleOf(10, 2));

/*- Se il numero è multiplo di 2:
  - Stampa tutti i numeri pari da 2 fino al numero usando un `for`.
- Se il numero è multiplo di 3:
  - Stampa tutti i numeri dispari da quel numero all'indietro fino a 1 usando un `while`.
- Se non è multiplo né di 2 né di 3:
  - Usa un `do...while` per stampare il numero, decrementando di 2 ogni volta, fino a 0.*/

if (isMultipleOf(numCas,2)) {
    for (let i=2; i<=numCas; i+=2) {
        console.log(i);
    }
}

else if (isMultipleOf(numCas,3)) {
let j = numCas;
while (j>=1) {

    /*if (j%2!==0) {
        console.log(j);
    }
    j--; */

    console.log(j);
    j-=2;
}
}

else {
    let k = numCas;
    do {
        console.log(k);
        k-=2;
    }
    while (k>=0);
}


