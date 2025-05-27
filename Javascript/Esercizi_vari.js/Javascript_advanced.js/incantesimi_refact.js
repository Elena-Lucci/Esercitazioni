// 1. Refactoring metodo async await

class Avventuriero {
  constructor(nome, preferenzaIncantesimo, coraggio) {
    this.nome = nome;
    this.preferenzaIncantesimo = preferenzaIncantesimo;
    this.coraggio = coraggio;
  }


//Recupera dalla libreriaIncantesimi la funzione corrispondente al tipo di incantesimo scelto.
// Se non esiste, lancia subito un errore con throw, interrompendo l’esecuzione.
// Altrimenti usa await per “attendere” che la Promise restituita da incantesimo(this.coraggio) si risolva.
// Quando la Promise si risolve, ottieni il valore danno. Restituisce un oggetto { nome, tipo, danno }.


  async evocaIncantesimo() {
    const incantesimo = libreriaIncantesimi[this.preferenzaIncantesimo];
    if (!incantesimo) {
      throw new Error(`L'incantesimo "${this.preferenzaIncantesimo}" non esiste.`);
    }
    // attendo l'esecuzione dell’incantesimo
    try {const danno = await incantesimo(this.coraggio);
    return {
      nome: this.nome,
      tipo: this.preferenzaIncantesimo,
      danno
    };
  }
  catch(error) {throw new Error(error)};
  }
}

//
function creaIncantesimo(nome, basePotenza, tempo, rischioBase) {
  return function (coraggio) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const probabilità = coraggio - rischioBase;
        if (probabilità < 5) {
          reject(`L'incantesimo "${nome}" è fallito.`);
        } else {
          resolve(basePotenza + coraggio * 2);
        }
      }, tempo);
    });
  };
}

// 3. Libreria di incantesimi: 3 funzioni.

const libreriaIncantesimi = {
  fuoco:   creaIncantesimo("fuoco",   50, 2000, 0.3),
  ghiaccio:creaIncantesimo("ghiaccio",40, 1500, 0.2),
  fulmine: creaIncantesimo("fulmine", 60, 1000, 0.4),
};

// - Estendi l’esercizio per supportare nuovi tipi di incantesimo con caratteristiche personalizzate

function incantesimoPersonalizzato(libroIncantesimi, nome, basePotenza, tempo, rischioBase) {
if(libroIncantesimi[nome]) { //con la dicitura nella condizione dell'if, sto indicando la chiave nome all'interno dell'oggetto libroIncantesimi.
  throw new Error (`L'incantesimo ${nome} esiste già`);
} else {
libroIncantesimi[nome] = creaIncantesimo(nome, basePotenza, tempo, rischioBase);
}
}

incantesimoPersonalizzato(libreriaIncantesimi, "vento", 80, 1600, 0.1);
console.log(libreriaIncantesimi);

// 4. Array di avventurieri
const avventurieri = [
  new Avventuriero("Michele",  "fuoco",   Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Giacomo",  "ghiaccio",Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Andrea",   "fulmine", Math.floor(Math.random() * 10) + 1),
  new Avventuriero("Ludovico", "fulmine", Math.floor(Math.random() * 10) + 1),
];

// 5. Funzione principale che gestisce la spedizione
async function preparaSpedizione() {
  try {
    // evocazione parallela di tutti gli incantesimi. avventurieri.map(a => a.evocaIncantesimo()) crea un array di Promise.
    const risultati = await Promise.all(avventurieri.map(a => a.evocaIncantesimo()));

    console.log("Tutti gli incantesimi sono riusciti! Ecco il riepilogo:");
    // risultati: array di oggetti {nome,tipo,danno} per ciascun avventuriero, ordinati per danno decrescente
    risultati
      .sort((a, b) => b.danno - a.danno)
      .forEach(r =>
        console.log(
          `${r.nome} ha lanciato ${r.tipo} con potenza ${r.danno}`
        )
      );
  } catch (err) {
    console.error("Fallimento nella preparazione della spedizione:", err);
  }

  // 6. Promise.race per il primo incantesimo
  try {
    const primo = await Promise.race(avventurieri.map(a => a.evocaIncantesimo()));
    console.log(
      `Primo incantesimo completato: ${primo.tipo} da ${primo.nome} con potenza ${primo.danno}`
    );
  } catch (err) {
    console.error("La spedizione non parte: primo incantesimo fallito:", err);
  }
}

// Avvio del flusso
preparaSpedizione();
