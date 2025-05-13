/*Dato un oggetto person con le proprietà nome ed età, utilizza la destrutturazione dell'oggetto per creare variabili nome ed età che contengano i valori dell'oggetto. 

const person = { name: "Alice", age: 30 };
const {name, age} = person;
console.log(name);
console.log(age); */

/*Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato. */

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const {
    info: {name, age},
    grades: {math, science},
} = student;

console.log(name, age, math, science);

/* Dato un array di colori con tre elementi, utilizza la destrutturazione dell'array per creare variabili firstColor, secondColor e thirdColor che contengono i valori dell'array.*/

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor, thirdColor);

/* Date due variabili a e b, scambia i loro valori usando la destrutturazione.*/

let a = 5;
let b = 10;

[a, b] = [b, a]; //riassegnamo le variabili mettendole dentro un array, senza scrivere const, let o var. Infatti, le variabili sono già state assegnate!

console.log(a);
console.log(b);

