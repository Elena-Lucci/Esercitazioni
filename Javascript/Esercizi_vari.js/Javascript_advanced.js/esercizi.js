//NB: Questi esercizi sono strutturati per farti apprendere come concatenare più metodi in una volta: cerca di scrivere meno codice possibile

//Esercizio 1
//Dato il seguente array di numeri, filtra i numeri pari e calcola la loro somma.
/*const numberi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pari = numberi.filter ((x) => x % 2 === 0);
console.log(`I numeri pari sono ${pari}. La loro somma è ${pari.reduce((acc, cur) => acc + cur, 0)}.`);*/

//Esercizio 2
//Dato il seguente array di parole, trasforma tutte le parole in maiuscolo e poi conta quante lettere ci sono in totale.
const parole = ["ciao", "albero", "parco", "mese", "divertimento"];
const maius = parole.map((x) => x.toUpperCase());
const lettereTot = parole.reduce((acc, cur) => acc + cur.length, 0);
console.log(maius, lettereTot);

//Esercizio 3
// Dato il seguente array di numeri che contiente sia valori positivi che negativi, filtra i numeri positivi e calcola la loro media.
const numberiMix = [-5, 10, 15, -20, 25, 30];
const positivi = numberiMix.filter((x) => x > 0);
const media = (positivi.reduce((acc, cur) => acc + cur, 0))/positivi.length;
console.log(positivi, media);

//Esercizio 4
//Dato il seguente array di frutti, crea un oggetto che conta le occorrenze di ciascun frutto e poi filtra l'oggetto per mostrare solo i frutti che compaiono più di una volta.
const frutti = ["apple", "banana", "apple", "orange", "banana", "banana"];
const occorrenze = frutti.reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1;
    return acc}, {});
const filtrati = Object.fromEntries(Object.entries(occorrenze).filter((frutto, numero) => numero > 1)); //destrutturizzazione, cosa complessa
console.log(filtrati);

// STEP 1: Object.entries converte l'oggetto occorrenze in un array di array chiave-valore.
const oggettoToArray = Object.entries(occorrenze);

// STEP 2: prende l'array di array e filtra in base al valore della prima posizione degli array che stanno all'interno, ossia dell'elemento valore. 
const oggettoToArrayFiltrato = oggettoToArray.filter((x) => x[1] > 1);

//STEP 3: con Object.fromEntries riconvertiamo in oggetto.

const oggettoFinale = Object.fromEntries(oggettoToArrayFiltrato);

return oggettoFinale;


//Esercizio 5
/*Crea un array di oggetti rappresentanti studenti (con nome e voto), filtra gli studenti che hanno un voto maggiore o uguale a 60 e crea un nuovo array di oggetti contenente solo i nomi degli studenti e il loro voto.*/

const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

function filtro(array) {
return array 
.filter((x) => x.voto >= 60) //non devo mettere un punto e virgola, sennò si intende che non è più un'operazione concatenata. 
.map((x) => ({nome: x.nome, voto: x.voto}));
}

console.log(filtro(studenti));

//Esercizio 6
//Prendi come riferimento l'array di numeri dell'esercizio 1. Filtra i numeri pari, calcola il quadrato di ciascuno e poi somma tutti i quadrati. (Suggerimento: l'operazione per calcolare il quadrato è numero ** 2)

const numberi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pari = numberi.filter ((x) => x % 2 === 0);
const quadrati = pari.map((x) => x ** 2);
const sommaQuadrati = quadrati.reduce((acc, cur) => acc + cur, 0);
console.log(quadrati, sommaQuadrati);

