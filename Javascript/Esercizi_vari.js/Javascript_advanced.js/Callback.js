// /*Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.*/

// // const numbers = [1, 2, 3, 4, 5];

// // function doubleArray(arr, callback) {
// //     return arr.map((x) => callback(x));
// //   }

// // function doubleValue(num) {
// //     return num * 2;
// //   }

// // console.log(doubleArray(numbers, doubleValue));


// /*Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo temporale in millisecondi come argomenti.
// delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.*/

// function delay(callback, delayTime) {
//  setTimeout(callback, delayTime);
// }

// function sayHi() {
//   console.log("Hi, there!");
// }

// delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay. 


// /*Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti. -La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
// filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.*/

// function filterArray(arr, callback) {
//  return arr.filter((x) => callback(x));
// }

// function isEven(num) {
//  return num % 2 === 0; 
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterArray(numbers, isEven);
// console.log(evenNumbers); // Should output [2, 4, 6]


// // Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// // La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

// function runCallbacks(callbacks) {
//   callbacks.forEach((x) => x());
// }
// function firstCallback() {
//   console.log("Ciao, sono io, la prima callback!");
// }
// function secondCallback() {
//   console.log("Io invece sono la seconda callback!!");
// }

// function thirdCallback() {
//    console.log("E io sono la terza callback!!!");
// }
// const callbackArray = [firstCallback, secondCallback, thirdCallback];
// runCallbacks(callbackArray);

// /*Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
// La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
// Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.*/

// // function performOperation(a, b, callback) {
// //     const x = a + b;
// //     callback(x);
// // }

// // function displayResult(result) {
// //   console.log(result);
// // }

// // performOperation(5, 3, displayResult);


// /*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

// const ogg = { name: "John", age: 30 };

// function fetchDataFromAPI(callback) {
//   setTimeout(() => {callback(ogg)}, 5000);
// }

// function handleData(data) {
// console.log(data);
// }

// fetchDataFromAPI(handleData); 


// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    if(b===0) {
      callback(new Error ("Non si può dividere per 0."), null);
    } else {
      const x = a/b;
      callback(null, x); //la callback si aspetta di ricevere (errore, risultato) secondo la convenzione Node.js-style (error-first callback). Se non c'è errore, perché è il caso in cui esegue l'operazione, allora l'errore è null
      };
}

function displayResult(err, result) {
  if (err) {
    console.error("Errore:", err.message);
  } else {
    console.log("Risultato:", result);
  }
}

performOperation(5, 2.5, displayResult);
performOperation(5, 0, displayResult);
