/*Creare una classe Macchina che abbia le seguenti proprietà: marca, modello, prezzo, sconto e una proprietà usato che sia booleana.

class Macchina {
    constructor(marca, modello, prezzo, sconto, usato) {
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.sconto = sconto;
        this.usato = usato;
    }
}

let macchina1 = new Macchina("Toyota", "Yaris", 20000, 5, true);
let macchina2 = new Macchina("Fiat", "500L", 10000, null, true);


function mostraDatiAuto(macchina) {
    for(let i in macchina) {
        console.log(`${i}: ${macchina[i]}`);
    }
}

// Esegue setTimeout e mostraDatiauto contemporaneamente, ma stampa prima quella che non ha il timer.

setTimeout(()=> mostraDatiAuto(macchina1), 1000);

mostraDatiAuto(macchina2);


/*Compito: crea metodo all'interno della classe Macchina che, se invocato, mi mostra i dati dell'auto, agganciato all'oggetto. Ce ne sono almeno 3: trovali tutti!!! */



class Macchina {
    constructor(marca, modello, prezzo, sconto, usato) {
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.sconto = sconto;
        this.usato = usato;
    }
    //METODI = funzioni direttamente riferite alla classe (puoi usare this). Ciò consente di cambiare il metodo con cui le richiami: elemento della classe a cui appartengono.nome del metodo.

    // Metodo1: uso una funzione che mi restituisce un array di array, che contiene tutte le coppie chiave-valore definite nel constructor.
    mostraDatiMacchina() {
        console.log(Object.entries(this));
    }
    // Metodo2: uso un ciclo for in per scorrere tutte le chiavi della classe (le chiavi sono come gli indici numerici di un array, solo che sono parole, quindi non si possono scorrere con un normale ciclo for (richiede dei numeri), ma si usa il ciclo for in con la specifica this se è un metodo della classe). This quindi rappresenta l'elemento della classe su cui il metodo sta agendo, quando richiamato.

    //GLI OGGETTI SONO COME ARRAY CON INDICI PARI A PAROLE (LE CHIAVI) INVECE CHE NUMERICI.

    mostraDatiMacchinaBis() {
            for (let i in this) {
                console.log(`${i}: ${this[i]}`);
        }
    }
    // Metodo3: THE BEST (secondo me). Creo due array, che assegno a variabili, uno con tutte le chiavi, uno con tutti i valori. Anche questi nel metodo possono riferirsi direttamente agli elementi della classe attraverso this. Poi, introduco un ciclo for, che attraverso una variabile di indicizzazione, scorre tutte le posizioni degli array, dalla prima (pari a 0), all'ultima (che essendo in potenza sconosciuta, si può trovare usando il metodo nome dell'array.lenght). QUESTA COSA FUNZIONA SOLO PERCHE' I DUE ARRAY HANNO LA STESSA LUNGHEZZA!!!! Quindi se un array ha n valori, con il ciclo for scorro da 0 a n-1. Il console.log nel ciclo for funziona perché l'i-esimo elemento di chiavi è corrispondente all'i-esimo elemento di valori, quindi stampa le coppie chiave-valore in maniera ordinata.

    mostraDatiMacchinaTris() {
        let chiavi = Object.keys(this);
        let valori = Object.values(this);
        for (let i=0; i < chiavi.length; i++) {
            console.log(`${chiavi[i]}: ${valori[i]}`);
        }
    }
}

let macchina1 = new Macchina("Toyota", "Yaris", 20000, 5, true);
macchina1.mostraDatiMacchina();

// COME VADO A CAPO NELL'OUTPUT? COSì.
console.log("\n");

macchina1.mostraDatiMacchinaBis();
console.log("\n");
macchina1.mostraDatiMacchinaTris();