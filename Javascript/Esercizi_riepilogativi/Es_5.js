/* Scrivi una funzione che prende un array di oggetti come parametro, ognuno dei quali rappresenta un libro con le seguenti proprietà: titolo, autore, anno e genere.
La funzione dovrebbe restituire un array di stringhe che contiene il titolo e l'autore di ogni libro nel formato "titolo di autore". Se l'anno del libro è successivo al 2000, aggiungi " - Moderno" alla fine della stringa. Se il genere del libro è "Science Fiction", aggiungi " - SciFi" alla fine della stringa.
Stampa il nuovo array.*/

const libri = [
    {
        titolo: "Le stelle fredde",
        autore: "Guido Piovene",
        anno: 1970,
        genere: "narrativa",
    },
    {
        titolo: "Il mondo nuovo",
        autore: "Aldous Huxley",
        anno: 1932,
        genere: "Science Fiction",
    },
    {
        titolo: "Venuto al mondo",
        autore: "Margaret Mazzantini",
        anno: 2008,
        genere: "narrativa",
    }
];

function infoLibro(libri) {
    return libri.map ((n) => {let info = `${n.titolo} di ${n.autore}` //importante usare let invece di const per l'array info, perché deve variare. La callback di map non restituisce automaticamente nulla, è necessario il return. All'interno del placeholder libri io creo un nuovo array con map. Per ogni suo elemento n, costruisco l'array info, che assegno ad una variabile, dato dal valore titolo e autore di ogni elemento n, cioè di ogni oggetto con proprietà n.
    if (n.anno > 2000) {
        info += " - Moderno"; //aggiunta e concatenazione di stringhe all'array di stringhe info
        };
    
        if (n.genere === "Science Fiction") {
        info += " - SciFi";
        }
        return info; // la funzione infoLibro deve restituire l'array di stringhe info
    });
    
}

console.log(infoLibro(libri));