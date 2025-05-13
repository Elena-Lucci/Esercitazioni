/* # 📚 Esercizi di Riepilogo JS - Variabili, Controlli, Loop, Funzioni

## 🎲 Esercizio 1 - Versione Randomizzata Base

**Consegna:**

- Genera un numero casuale da 1 a 10. */

let numeroCasuale = Math.floor(Math.random() * 10) + 1;
console.log(numeroCasuale);

/* - Usa `if/else` per controllare se il numero è pari o dispari.*/

if (numeroCasuale % 2 === 0) {
  console.log("Il numero generato è pari");
} else {
  console.log("Il numero generato è dispari");
}

/*- Usa `switch` per stampare un messaggio diverso se il numero è 1, 5 o 10, oppure "Numero intermedio" per gli altri. */

switch (numeroCasuale) {
  case 1:
    console.log("Il numero è 1");
    break;
  case 5:
    console.log("Il numero è 5");
    break;
  case 10:
    console.log("Il numero è 10");
    break;
    default:
    console.log("Il numero è intermedio");
}

/* - Usa un `for` per contare da 1 fino al numero.*/

for(let i=1; i<=numeroCasuale; i++) {console.log(i)}

/*- Usa un `while` per contare all'indietro dal numero fino a 1.*/

while (numeroCasuale>=1) {
    console.log(numeroCasuale);
    numeroCasuale--;
}

/*- Usa un `do...while` per contare dal numero fino a 0.*/
do {
    console.log(numeroCasuale);
    numeroCasuale--;
} while (numeroCasuale>=0);

/*- Crea una funzione **espressa, cioè dichiarata** chiamata `isEven` che ritorna `true` se il numero è pari, `false` se dispari.*/

function isEven() {
    if(numeroCasuale%2===0) {
        return true;
    }
    else {
        return false;
    }
}
/* oppure */
function isEven() {
    return numeroCasuale%2===0;
}

