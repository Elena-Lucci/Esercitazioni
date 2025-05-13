/*Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma. */

function somma(...argomenti) {
return argomenti.reduce((acc, cur) => acc + cur, 0);
}

console.log(somma(1, 2, 3, 4));


/*Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti. Prova ad usare l'operatore modulo per ottenere i numeri pari.*/

function filterOutOdds(...qualsiasi) {
    return qualsiasi.filter((x) => x % 2 === 0);
}

console.log(filterOutOdds(3, 5, 0, 7, 2));

/*Dati due array, arr1 e arr2, crea un nuovo array chiamato mergedArray utilizzando l'operatore spread che combina gli elementi di entrambi gli array.*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

/*Dati due oggetti, obj1 e obj2, crea un nuovo oggetto chiamato mergedObject utilizzando l'operatore spread che combina le proprietà di entrambi gli oggetti. Se sono presenti proprietà sovrapposte, i valori di obj2 dovrebbero sovrascrivere i valori di obj1.*/

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = {...obj1, ...obj2};

console.log(mergedObject);

/*Dato un array originalArray, crea un nuovo array chiamato cloneArray che sia una copia superficiale di originalArray utilizzando l'operatore spread.*/

const originalArray = [1, 2, 3, 4, 5];
const cloneArray = [...originalArray];

console.log(cloneArray);
