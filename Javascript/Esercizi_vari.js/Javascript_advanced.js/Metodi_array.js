/*Implementare la funzione adultFilter che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.*/
/* function adultFilter(persons) {
    return persons.filter((n)=> n.age >= 18);
  }
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const adults = adultFilter(persons);
  console.log(persons);
  console.log(adults);


//Implementare la funzione firstUncompletedNote che, dato un array di note, restituisce la prima nota non completata. Una nota viene considerata completata se tutti i todo presenti hanno il flag done impostato a true.

/*function firstUncompletedNote(notes) {
    return notes.find(x => !x.todos.every(todo => todo.done)); 
    
  //notes.find restiuisce la prima nota per cui la callback è false (!). Poi uso every che restiuisce true se tutti i todo hanno done===true. Sono necessarie due callback perché todos è un array dell'array notes. 
  }*/

  function firstUncompletedNote(notes) {
    return notes.find ((note) => {
      !note.todos.every ((todo) => {todo.done})
    })
  }

  /* oppure 
  function firstUncompletedNote(notes) {
    return notes.find ((note) => {
      note.todos.some ((!todo) => {todo.done})
    })
  }
  */
  
  
  const notes = [
    {
      id: 1,
      description: 'Workout program',
      todos: [
        {
          id: 1,
          name: 'Push ups - 10 x 3',
          done: true
        },
        {
          id: 2,
          name: 'Abdominals - 20 x 3',
          done: true
        },
        {
          id: 3,
          name: 'Tapis Roulant - 15min',
          done: true
        }
      ]
    },
    {
      id: 2,
      description: 'Front-end Roadmap',
      todos: [
        {
          id: 1,
          name: 'Learn HTML',
          done: true
        },
        {
          id: 2,
          name: 'Learn CSS',
          done: false
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          done: true
        },
        {
          id: 4,
          name: 'Learn Angular',
          done: false
        }
      ]
    },
    {
      id: 3,
      description: 'My Movies Library',
      todos: [
        {
          id: 1,
          name: 'La città incantata',
          done: true
        },
        {
          id: 2,
          name: 'Avatar',
          done: true
        },
        {
          id: 3,
          name: 'Titanic',
          done: false
        }
      ]
    }
  ]
  
  const noteInProgress = firstUncompletedNote(notes);
  console.log('All notes: ', notes); 
  console.log('First note in progress: ', noteInProgress);



  /*Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.*/

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

const frutti = []; // forEach non restituisce un array!!! Perciò devo io stessa creare un nuovo array vuoto che deve contenere poi gli elementi di fruits con il !
fruits.forEach( fruit => frutti.push(`${fruit}!`)); //per ogni elemento di fruits, mi aggiunge alla fine dell'array frutti il nome dell'elemento con il punto esclamativo.
console.log(frutti.join(" "));  //concateno con join tutti gli elementi in una sola stringa.


//Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: <name>-<age>. { name: 'Paul', age: 21 } => Paul-21

/*function nicknameMap(persons) {
  return persons.map ((x) => `${x.name}-${x.age}`);
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);


/* Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.*/

function calculateAverageAge(persons) {
  return Math.round(persons.reduce((acc, cur) => (acc + cur.age), 0)/persons.length);
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);


/* In questo esercizio dato un array di studenti:*/

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//Utilizza forEach per stampare i nomi degli studenti.
studenti.forEach((x) => console.log(x.nome));

//Utilizza find per trovare uno studente con un voto superiore a 90.
const primoStudenteBravo = studenti.find((x) =>  x.voto > 90);
console.log("Il primo studente dell'array ad avere voto superiore a 90 è " + primoStudenteBravo.nome);

//Utilizza reduce per calcolare la media dei voti degli studenti.
const media = Math.round(studenti.reduce((acc, cur) => acc + cur.voto, 0)/studenti.length);
console.log(media);

//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
const nomiCapsLock = (studenti.map((x) => x.nome.toUpperCase()));
console.log(nomiCapsLock);

//Utilizza filter per trovare gli studenti con voti superiori a 85. */
const studentiBravi = studenti.filter((x) => x.voto > 85);
console.log(studentiBravi);