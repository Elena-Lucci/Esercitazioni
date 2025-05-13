/* Scrivi una funzione di nome printName che semplicemente stampi il tuo nome.

Indicazioni utili:

per stampa intendiamo il console.log()
la funzione non deve restituire nulla
la funzione non prenderà parametri in ingresso
il risultato finale dovrà essere il tuo nome stampato sul terminale */

function printName() {
    console.log("Elena");
}
printName();

/*Scrivi una funzione di nome sayHelloName che prende come parametro una stringa. Questa funzione deve restituire la concatenazione di due stringhe, per capirci, il risultato finale dovrà essere: 'Hello John'. In questo caso, John è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).
La funzione dovrà prendere come parametro una stringa
Il parametro in ingresso sarà il nostro nome
La funzione restituisce 'Hello' seguito dal nostro nome
Abbiamo la possibilità in JavaScript di concatenare le stringhe (es. str1 + str2)
Il risultato finale dovrà essere il tuo 'Hello nome' stampato sul terminale */

function sayHelloName(name) {
    return "Hello " + name;
}
let saluto = sayHelloName("John");
console.log(saluto);



/* Funzioncine di esempio */
let nametest = "John"
let salutotest = "Hello " + nameTEST;

function test(a,b){
    let res = a*b;
    return res;
}

function somma(a,b) {
    return a+b;
}
console.log(somma(1,2));

/*Funzione che chiamiamo sommaVeryStrong che accetta in ingresso due numeri e somma tutti i numeri interi dispari tra i due estremi, estremi inclusi*/
function sommaVeryStrong(a,b) {
    let sum = 0;
    let inf = a<b ? a : b;
    let sup = a<b ? b : a;
    for (let i=inf; i<=sup; i++) {
        if (i%2 !== 0) {
            sum += i;
        }
    }
return sum;
}
console.log(sommaVeryStrong(70000,-10));