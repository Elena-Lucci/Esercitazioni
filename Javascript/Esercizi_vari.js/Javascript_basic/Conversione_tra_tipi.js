/*Crea una variabile e assegnale come valore true;
Stampa il suo valore in console e il tipo di dato;
Esegui il casting a number e stampa nuovamente il valore e il tipo.
Esegui il casting a string e stampa nuovamente il valore e il tipo.
Infine esegui il casting a boolean e stampa nuovamente il valore e il tipo. */

const francescoIsFrancesco = true;
console.log(francescoIsFrancesco, typeof francescoIsFrancesco);

const francescoIsFrancescoToNumber = Number(francescoIsFrancesco);
console.log(francescoIsFrancescoToNumber, typeof francescoIsFrancescoToNumber);

const francescoIsFrancescoToString = String(francescoIsFrancescoToNumber);
console.log(francescoIsFrancescoToString, typeof francescoIsFrancescoToString);

const francescoIsFrancescoToBoolean = Boolean(francescoIsFrancescoToString);
console.log(francescoIsFrancescoToBoolean, typeof francescoIsFrancescoToBoolean);