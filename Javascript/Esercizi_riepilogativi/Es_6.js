/*Scrivi una funzione che prende come parametro un array di oggetti, ognuno dei quali rappresenta un film con le seguenti proprietà: titolo, regista, anno e genere. La funzione dovrebbe restituire un oggetto che contiene le seguenti proprietà: numMovies: il numero totale di film nell'array. numYears: il numero di anni unici rappresentati nell'array. genreCounts: un oggetto che contiene un conteggio di quanti film ci sono in ciascun genere rappresentato nell'array.
Stampa l'oggetto. */

const film = [
    {
        titolo: "Opera senza Autore",
        regista: "Florian Henckel von Donnersmarck",
        anno: 2018,
        genere: "Thriller/Romantico",
    },
    {
        titolo: "The Dreamers",
        regista: "Bernardo Bertolucci",
        anno: 2003,
        genere: "Romantico/Drammatico",
    },
    {
        titolo: "Como agua para chocolate",
        regista: "Alfonso Arau",
        anno: 1992,
        genere: "Drammatico",
    },
];


function proprieta(film) {

  const numMovies = film.length; //mi dice quanto è lungo l'array film, quindi quanti film ci sono, e lo assegna alla costante numMovies.

  const yearsArray = [];
  for (const m of film) { //per ogni elemento m di film se non è inclusa la proprietà anno, aggiungila alla fine dell'array yearsArray.
    if (!yearsArray.includes(m.anno)) {
      yearsArray.push(m.anno);
    }
  }
  const numYears = yearsArray.length; //misura la lunghezza dell'array yearsArray, assegnandola alla costante numYears.

  const genreCounts = film.reduce((acc, m) => { //uso reduce sull'array film
    if (!acc[m.genere]) { //se non esiste il contatore della proprietà genere di ogni elemento di film all'inizio, gli assegno il valore 0, altrimenti, mi darà undefined.
        acc[m.genere] = 0;
      }
    acc[m.genere]++; //sennò aggiungo al contatore 1. 
    return acc; //devo ritornare l'accumulatore acc nella callback di reduce. Mi restituisce un oggetto.
  }, {});

  return { numMovies, numYears, genreCounts }; //impongo alla funzione di ritornare un insieme di valori, ma non è un oggetto.
}

console.log(proprieta(film));