/* Istanzia una variabile age e assegnale un valore numerico.
Usando l'operatore ternario, stampa in console la stringa You can drive a car se la variabile ha un valore maggiore o uguale a 18, in caso contrario stampa la stringa You are too young to drive. */

let age = 5;
let stato = age >= 18 ? "You can drive a car" : "You are too young to drive";
console.log(stato);

/*Trasforma il costrutto if-else in un operatore ternario
let number = 7;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
} */

  let number = 7;
  number > 0 ? console.log("The number is positive") : console.log("The number is negative");

  /* Dichiara le variabili booleane isSunnyDay e isHomeworkCompleted e assegna loro un valore.
Tramite l'operatore ternario stampa in console la stringa Jesse can go out to play se entrambe le variabili sono true, in caso contrario stampa Jesse stays at home */

let isSunnyDay = false;
let isHomeworkCompleted = false;

isSunnyDay && isHomeworkCompleted ? console.log("Jesse can go out to play") : console.log("Jesse stays at home");