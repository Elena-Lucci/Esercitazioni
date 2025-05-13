/*Date le variabili name e surname, crea un costrutto if else per stampare in console la variabile fullname, che conterrà le due variabili precedenti.
La variabile fullname dovrà essere stampata solo se name e surname sono truthy, in caso contrario stampa il messaggio Fullname is invalid */

let name;
let surname = "Rossi";
let fullname = name + surname;

if (name && surname) {
  console.log(fullname);
} else {
  console.log("Fullname is invalid");
}

/*Crea un controllo, tramite un costrutto if else, che permetta di verificare il valore di una variabile pin di tipo number: se il valore del pin è maggiore di 999 e minore o uguale a 10000, stampa il messaggio "Pin is valid". Altrimenti stampa il messaggio: "Pin is not valid".*/

let pin = 9999;
if (typeof pin === "number" && pin > 999 && pin <= 10000) {
  console.log("Pin is valid");
} else {
  console.log("Pin is not valid");
}

/*Crea una variabile primitive e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
Crea un controllo per verificare il tipo della variabile e stamparlo in console.*/

let primitive
if (typeof primitive === "number") {
    console.log("La variabile primitive è di tipo number")
} else if (typeof primitive === "string") {
    console.log("La variabile primitive è di tipo string")
}
else if (typeof primitive === "boolean") {
    console.log("La variabile primitive è di tipo boolean")
}
else {console.log("La variabile primitive non è né un numero, né una stringa, né un booleano")}