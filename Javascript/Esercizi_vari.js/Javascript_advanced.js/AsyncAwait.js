// La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!
// Implementa la funzione ottieniDati utilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.

function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

async function ottieniDati() {
    try {
        const dati = await caricamentoDati();
        return dati;
    }
    catch(error) {console.error("Errore nel caricamento dati:", error);}
}

console.log(ottieniDati());



//In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {

  const risultatoA = await caricaModulo('A');
  console.log(risultatoA);

  const risultatoB = await caricaModulo('B');
  console.log(risultatoB);

  const risultatoC = await caricaModulo('C');
  console.log(risultatoC);

  console.log('Veicolo spaziale pronto per il lancio!');
}

lanciaVeicoloSpaziale();


// In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Gestisci eventuali errori nel caricamento dei moduli stampando in console "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

// Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".
// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    const resA = await caricaModulo('A');
    console.log(resA);

    const resB = await caricaModulo('B');
    console.log(resB);

    const resC = await caricaModulo('C');
    console.log(resC);

    console.log('Veicolo spaziale pronto per il lancio!');
  } catch (err) {
    console.log('Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.');
  }
}

lanciaVeicoloSpaziale();
