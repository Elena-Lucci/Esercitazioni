/* Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Stampare in console il primo valore
console.log(numbers[0]);

//Stampare la lunghezza dell'array
console.log(numbers.length);

//Stampare in console l'ultimo valore
console.log(numbers[numbers.length-1]);

/*Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti. Poiché l'array ha solo 10 elementi, il 21esimo elemento non è definito, quindi provando a stamparlo si ottiene undefined*/
console.log(numbers[20]);


/*Abbiamo bisogno di scrivere un array che chiameremo studenti. Questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age
Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente.

Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array 

const student1 = {
    id: 1,
    name: "Elena",
    surname: "Lucci",
    age: 27,
};

const student2 = {
    id: 2,
    name: "Francesco",
    surname: "De Michele",
    age: 27,
};

const student3 = {
    id: 3,
    name: "Gabriel",
    surname: "Jiménez",
    age: 29,
};

const studenti = [student1, student2, student3];
console.log(studenti[0]); 


/* Partendo dall'esercizio precedente, tramite un ciclo for, dobbiamo stampare tutti gli elementi contenuti nel nostro array*/

const studenti = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

for (let i=0; i < studenti.length; i++) {
    console.log(studenti[i]);
}
 //COME IL CICLO FOR IN PER GLI OGGETTI, MA QUESTO E' FOR OF PER GLI ARRAY, CHE E' MOLTO MEGLIO. Scorre gli elementi degli array, analogamente a quanto faceva il ciclo for in per le chiavi degli oggetti.
for (const student of studenti) {
    console.log(student);
}

/*Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:*/

const nomi = ["Luca", "Marco", "Vittorio", "Giovanni"];

//Rimuovere il nome "Giovanni" dal nostro array
nomi.pop();
console.log(nomi);

//Aggiungere il nome "Pippo" alla coda del nostro array
nomi.push("Pippo");
console.log(nomi);

//Aggiungere il nome "Giovanni" come primo elemento del nostro array
nomi.unshift("Giovanni");
console.log(nomi);

/*Partendo dall'array nomi, come possiamo stampare tutti i nomi contenuti al suo interno separandoli con un trattino?*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log(names.join(" - "));

/*Partendo dal seguente oggetto studenti:

Come possiamo rimuovere Giovanni e aggiungere lo studente Francesco?

*/

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
  ];

students.pop();
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });

console.log(students);