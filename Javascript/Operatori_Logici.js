/* Completa l'espressione dentro il console.log(), inserendo il corretto operatore logico al posto dei puntini
console.log("testing" == "testing" ... "Mario" == "Cool Guy") //il risultato deve essere true*/

console.log("testing" == "testing" || "Mario" == "Cool Guy")

/* Completa l'espressione dentro il console.log(), inserendo il corretto operatore logico al posto dei puntini
console.log("testing" == "testing" ... "Mario" == "Cool Guy") //il risultato deve essere false */

console.log("testing" == "testing" && "Mario" == "Cool Guy")

/*A partire dalle variabili definite sotto, stampa a schermo il risultato di 6 operazioni logiche.

Fai in modo che le prime tre operazioni restituiscano come risultato true e le rimanenti false
Per ogni operazione, utilizza due operandi diversi tra loro
Ricorda che gli operatori logici da usare sono soltanto AND (&&), OR (||) e NOT (!)
Non confondere gli operatori logici con quelli di comparazione*/

const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

console.log(isAutumn||!itIsRaining);
console.log(isSunnyDay&&isSummer);
console.log(isSunnyDay||isAutumn);
console.log(!isSummer&&isSunnyDay);
console.log(!itIsRaining&&!isSummer);
console.log(!isSunnyDay||itIsRaining);