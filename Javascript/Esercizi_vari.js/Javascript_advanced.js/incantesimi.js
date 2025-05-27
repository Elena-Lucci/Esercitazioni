// Le Promesse del Regno di Asynchronia
//
// OBIETTIVO:
// Sei un Mage of the Web incaricato di preparare una spedizione magica.
// Ogni avventuriero della tua squadra ha un incantesimo preferito da evocare,
// e un livello di coraggio che influisce sulla probabilità di successo dell’incantesimo.
// Alcuni incantesimi potrebbero fallire: se anche solo uno fallisce, la missione è annullata.
//
// CONSEGNA:
//
// 1. **Definisci una classe `Avventuriero`** con le seguenti proprietà:
//    - `nome` (stringa): il nome dell'avventuriero
//    - `preferenzaIncantesimo` (stringa): uno tra `"fuoco"`, `"ghiaccio"` o `"fulmine"`
//    - `coraggio` (numero da 1 a 10): modifica il rischio di fallimento dell’incantesimo
//    - un metodo `evocaIncantesimo()` che restituisce una `Promise`

class Avventuriero {
  constructor(nome, preferenzaIncantesimo, coraggio) {
    this.nome = nome;
    this.preferenzaIncantesimo = preferenzaIncantesimo;
    this.coraggio = coraggio;
  }
  evocaIncantesimo() {
    return new Promise((resolve, reject) => {
      const incatesimo = libreriaIncantesimi[this.preferenzaIncantesimo];
      if (!incatesimo) {
        reject(`L'incantesimo non esiste..`);
        return;
      }
      incatesimo(this.coraggio)
        .then((result) => {
          resolve({
            nome: this.nome,
            tipo: this.preferenzaIncantesimo,
            danno: result,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

// 2. **Crea una funzione generatrice di incantesimi** chiamata `creaIncantesimo(nome, basePotenza, tempo, rischioBase)`:
//    - Deve restituire una funzione che prende in input il `coraggio`
//    - La funzione restituisce una `Promise` che si risolve dopo `tempo` (in millisecondi)
//    - Il `coraggio` diminuisce la probabilità di fallimento
//    - Se l’incantesimo riesce, si risolve con una potenza calcolata in base a `basePotenza + coraggio * 2`
//    - Se fallisce, viene rigettata con un messaggio d’errore
function creaIncantesimo(nome, basePotenza, tempo, rischioBase) {
  return function (coraggio) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const probabilità = coraggio - rischioBase;
        if (probabilità < 5) {
          reject(`L'incantesimo e' fallito.`);
        } else {
          resolve(basePotenza + coraggio * 2);
        }
      }, tempo);
    });
  };
}

// 3. **Crea una libreria di incantesimi** (oggetto `libreriaIncantesimi`) con 3 incantesimi:
//    - `fuoco`: basePotenza 50, tempo 2000ms, rischioBase 0.3
//    - `ghiaccio`: basePotenza 40, tempo 1500ms, rischioBase 0.2
//    - `fulmine`: basePotenza 60, tempo 1000ms, rischioBase 0.4
const libreriaIncantesimi = {
  fuoco: creaIncantesimo("fuoco", 50, 2000, 0.3),
  ghiaccio: creaIncantesimo("ghiaccio", 40, 1500, 0.2),
  fulmine: creaIncantesimo("fulmine", 60, 1000, 0.4),
};

// 4. **Crea un array di almeno 4 avventurieri** (istanze della classe `Avventuriero`)
//    - Varia nomi, coraggio e incantesimi preferiti
const avventurieri = [
  new Avventuriero("Michele", "fuoco", Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Giacomo", "ghiaccio", Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Andrea", "fulmine", Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Ludovico", "fulmine", Math.floor(Math.random() * 10) + 1),
];


// 5. **Evoca tutti gli incantesimi in parallelo** usando `Promise.all()`:
//    - Se tutte le promesse si risolvono, stampa un riepilogo con:
//      `"[nome] ha lanciato [tipo] con potenza [potenza]"`
//    - Se anche una sola fallisce, stampa:
//      `"Fallimento nella preparazione della spedizione"` e il messaggio d’errore
const promises = avventurieri.map((x) => x.evocaIncantesimo());
Promise.all(promises)
  .then(() => console.log(`La spedizione e' andata a buon fine`))
  .catch((error) => console.error(`Missione fallita: `, error));

// 6. **Usa anche `Promise.race()`** per individuare il primo incantesimo completato con successo:
//    - Stampa: `"Primo incantesimo completato: [tipo] da [nome] con potenza [potenza]"`
//    - Se la prima promessa rigettata arriva per prima, stampa un messaggio di fallimento iniziale
Promise.race(promises)
  .then((x) => {
    console.log(
      `Primo incantesimo completato: ${x.tipo} da ${x.nome} con potenza ${x.danno}`
    );
  })
  .catch((error) => console.error(`Missione fallita: `, error));

//   BONUS OPZIONALE:
// - Estendi l’esercizio per supportare nuovi tipi di incantesimo con caratteristiche personalizzate
// - Ordina il riepilogo finale per potenza decrescente


