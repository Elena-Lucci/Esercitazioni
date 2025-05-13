/*Scrivere due funzioni, la prima funzione si chiamerà sayHelloName, questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome printName. La nostra funzione printName dovrà semplicemente fare un console.log() del nostro nome (ricordiamoci che sarà la funzione di callback). La funzione sayHelloName, prende come parametro una callback, e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.

Indicazioni utili:

Il risultato finale sarà "Hello" "Nome", stampato sul vostro terminale */

function printName(nome) {
  console.log(nome);
}

function sayHelloName(nome, printName) {
  console.log("Hello");
  printName(nome);
}

sayHelloName("Elena", printName);

/*Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". Per fare questo, andremo ad utilizzare la funzione di JavaScript setTimeout(), questa come avete visto nel video, prende due parametri: il primo parametro è una funzione, il secondo sono i millesimi di secondo di delay. Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".

Non dobbiamo modificare la funzione di callback
Entrambe le stringhe "Hello" e "Name" devono essere stampate dopo 1 secondo
Il risultato finale sarà uguale a l'esercizio precedente ma con un delay di 1 secondo*/

function printName(nome) {
  console.log(nome);
}

function sayHelloName(nome, printName) {
  console.log("Hello");
  printName(nome);
}

function avvio() {
    sayHelloName("Elena", printName);
}
setTimeout(avvio, 1000);


/*Trasformate la funzione sum in un arrow function.
function sum() {
  return 5 + 5;
}

console.log(sum()); */

/*function sum() {
    return 5 + 5;
  }
  
  console.log(sum()); */

  const summ = () => 5+5;
  console.log(summ());

/*Partendo dall'esercizio precedente, questa volta i numeri da sommare dovranno essere passati come parametro alla funzione*/

const sum = (a,b) => a+b;
  console.log(sum(5,5));

/*Sistemare la funzione in modo tale che non prendiamo errori in console.
Inoltre, spiegare brevemente come mai al momento la funzione è sbagliata.*/

/*function canPlay() {
  let sport = " Football"; 
  let personName = "Cosimo";

  console.log(personName + sport);
}
canPlay();

// La funzione inizialmente non era corretta, in quanto personName era definita dentro l'if, pertanto non era accessibile all'infuori di esso.


/* Partendo dal codice, vogliamo che la variabile sport sia una variabile 'globale'. Quale definizione possiamo adottare?*/

let sport = " Football";
function canPlay() {
    let personName = "Cosimo";
    
  console.log(personName + sport);
}

canPlay();