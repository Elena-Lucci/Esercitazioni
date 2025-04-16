/* Esegui il casting delle variabili seguendo i suggerimenti e stampa il risultato dell'operazione.
Spiega il casting della variabile hello */

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string 

let helloToNumber = Number(hello);
let ageToBoolean = Boolean(age);
let isGraduatedToString = String(isGraduated);

console.log(helloToNumber, ageToBoolean, isGraduatedToString);

/* Il casting di hello in tipo number non va a buon fine, perché Number converte una stringa in numero solo se la stringa contiene numeri. In tal caso contiene solo lettere, quindi stampa NaN (Not A Number) */