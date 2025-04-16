/*Spiega la differenza tra:
const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted */

const firstYearCompleted = true;
const yearsCompleted = 1;

// firstYearCompleted è una variabile di tipo booleano, yearsCompleted è di tipo number,

yearsCompleted == firstYearCompleted;
console.log(yearsCompleted == firstYearCompleted);

yearsCompleted === firstYearCompleted;
console.log(yearsCompleted === firstYearCompleted);

// yearsCompleted == firstYearCompleted restituisce come valore true perché è un'uguaglianza tra un number 1 e un boolean true.

// yearsCompleted === firstYearCompleted restituisce come valore false perché è un'uguaglianza stretta tra un number 1 e un boolean true, quindi sebbene abbiano lo stesso valore, non hanno lo stesso tipo.


