/* Le variabili di partenza memorizzano il progresso di avanzamento di uno studente in un percorso universitario. A partire da tali variabili stampa a schermo il risultato di 6 comparazioni considerando i seguenti punti:

Per ognuna delle 6 comparazioni, la variabile usata come operando di sinistra deve essere diversa da quella usata come operando di destra.
Usa ognuno dei seguenti operatori ==, !=, <=, >, <, ===
Fai in modo che 3 comparazioni stampino a schermo true e le rimanenti false
const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1; */

const firstName = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

age == average;
average != examsCompleted;
firstYearCompleted === firstName;
examsCompleted > yearsCompleted;
average <= examsCompleted;
firstName > lastname; //M ha valore unicode più basso di R, quindi Mario viene prima di Rossi in ordine alfabetico, per cui non è maggiore e dà false.

console.log("M".charCodeAt(0)); // 77
console.log("R".charCodeAt(0)); // 82


console.log(age == average,
    average != examsCompleted,
    firstYearCompleted === firstName,
    examsCompleted > yearsCompleted,
    average <= examsCompleted,
    firstName > lastname);