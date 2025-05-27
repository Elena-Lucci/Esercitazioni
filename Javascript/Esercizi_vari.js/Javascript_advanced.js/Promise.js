// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

// const ogg = { name: "John", age: 30 };

// function fetchDataFromAPI(callback) {
//   return new Promise((resolve, reject) => {
//     if (!ogg.name || !ogg.age) {
//       reject("Tutti i dati sono necessari");
//       return;
//     }
//     console.log("Recupero dati in corso...");
//     setTimeout(() => {
//       resolve(ogg);
//     }, 5000);
//   });
// }

// function handleData(data) {
//   console.log("Dati ricevuti:", data);
// }

// fetchDataFromAPI()
//   .then((data) => handleData(data))
//   .catch((errore) => console.error(errore));

// Crea una catena di Promises per simulare un'operazione asincrona in più fasi. -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

// const dati = { id: 1, name: "John" };
// const post = ["Post 1", "Post 2", "Post 3"];

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     if (!dati.id || !dati.name) {
//       reject("Non è stato possibile recuperare i dati");
//     } else {
//       console.log("Recupero dati utente in corso...");
//       setTimeout(() => {
//         resolve(dati);
//       }, 2000);
//     }
//   });
// }

// function fetchUserPosts(userId, userName) {
//   return new Promise((resolve, reject) => {
//     if (!post || post.length === 0) {
//       reject("L'utente non ha postato.");
//     } else {
//       console.log(`Recupero post per utente ${userName}, con Id ${userId} in corso...`);
//       setTimeout(() => {
//         resolve(post);
//       }, 1500);
//     }
//   });
// }

// fetchUserData()
//   .then((user) => {
//     console.log("Nome utente:", user.name);
//     return fetchUserPosts(user.id); // passo l'id dell'utente alla seconda Promise
//   })
//   .then((posts) => {
//     console.log("Post dell'utente:");
//     posts.forEach((post) => {
//       console.log(`- ${post}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Errore:", error);
//   });

//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

// function writeYourName(name) {
//   return new Promise((resolve, reject) => {
//     if(typeof(name) === "string") {
//       console.log("Recupero nome in corso...");
//       setTimeout(() => {resolve(`Il tuo nome è ${name}`)}, 2000)
//     } else {
//       reject("Questo non è un nome valido!")
//     }
//   })
// }

// //ATTENZIONE: non si può vedere davvero il risultato della Promise a meno che non si invochi con i suoi parametri, seguita da .then() / .catch(), o in alternativa si consumi dentro un async/await!!!!!!

// writeYourName("Elena")
// .then((message) => console.log(message))
// .catch((error) => console.error(error));


// -Crea una Promise che simula il recupero dei dati da un'API. A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data.

// function fetchDataFromAPI() {
// const success = Math.random() / 2; //Se la variabile success viene dichiarata all'esterno della funzione rimane statica per tutte le chiamate. Generandola all'interno di fetchDataFromAPI si simula invece una chiamata API realmente random ad ogni invocazione.
//   return new Promise((resolve, reject) => {
//     if (success < 0.5) {
//       resolve("Data retrieved successfully"); //Non mettere i console.log nel resolve e nel reject, ma nel .then, per far stampare il messaggio in questione.
//     } else {
//       reject("Error: Failed to fetch data");
//     }
//   });
// }

// fetchDataFromAPI()
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));

// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) {
//   setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0) {
//       callback(null, result);
//     } else {
//       callback(new Error("Result is not odd!"), null);
//     }
//   }, 1000);
// }

// function promise_BasedFunction(arg1, arg2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = arg1 + arg2;
//       if (result % 2 !== 0) {
//         resolve(result);
//       } else {
//         reject(new Error("Result is not odd!"));
//       }
//     }, 1000);
//   });
// }

// promise_BasedFunction(3, 3)
//   .then((result) => console.log("Result:", result))
//   .catch((err) => console.error("Error:", err.message));


//Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:
// La persona che ha come identificativo l'id passato come parametro
// Il tipo di lavoro che ha come identificativo l'id passato come parametro
// Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.

const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  function fetchPersonById(id){
    return promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
      const person = persons.find(person => person.id == id);
      if (person){
        return resolve(`${person.firstName} ${person.lastName}`)
      } else {
        return reject(`No person with id ${id}`)
      }
    },3000)
    })
  };


  function fetchJobById(id){
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
      const job = jobs.find(job => job.id == id);
      if (job){
        return resolve(job.jobTitle)
      } else {
        return reject(`No job with id ${id}`)
      }
    },2000)
    })
  }

  Promise.all([fetchPersonById(1), fetchJobById(1)])
  .then(([person, job]) => {
    console.log("Persona trovata:", person);
    console.log("Job trovato:", job);
  })
  .catch(err => console.error("Errore:", err));