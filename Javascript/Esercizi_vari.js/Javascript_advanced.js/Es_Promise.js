/*Simulare registrazione di un utente con assegnazione di una classe*/

function registrazione({nome, cognome, email}) {
return new Promise((resolve, reject) => {
if(!nome || !cognome || !email) {
    reject("Tutti i dati sono obbligatori");
    return
}
if (!email.includes("@")) {
    reject("email non valida");
    return
}
console.log("L'utente è stato registrato correttamente");
setTimeout(() => {resolve({nome, cognome, email})}, 1000);
})
}

//implementa nuova promise in cui dopo aver registrato l'utente, viene assegnato ad una scuola. Data una variabile istituto che è un array di oggetti, ognuno dei quali rappresenta una scuola, con una chiave classi che è un array di stringhe ognuna delle quali rappresenta una classe: a partire dal sistema già implemmentato aggiungere passaggi. 1) l'utente si registra e sceglie in quale scuola iscriversi, e in questi oggetti scuola c'è una chiave disponibilità. 2) Se è disponibile, l'utente si può registrare e si può automaticamente assegnare a una classe. 3) In caso contrario viene rifiutato.

const istituto = [
    {   nome: "Matteotti",
        classi: ["1A", "1H", "1D"],
        disponibilita: true
    },
    {
        nome: "Donatelli",
        classi: ["1A", "1H", "1D"],
        disponibilita: false
    }
]


function assegnazioneScuola(studente, istituto) {
    return new Promise ((resolve, reject) => {
        const scuola = istituto[Math.floor(Math.random()* istituto.length)];
        const disp = (istituto.find((x) => x.nome === scuola.nome)).disponibilita;
        if(!disp) {
            reject(`${studente.nome} non può essere assegnato alla scuola ${scuola.nome}.`)
        } else {
            console.log(`${studente.nome} si può iscrivere alla scuola ${scuola.nome}.`);
            const classi = scuola.classi;
            resolve ({
                ...studente,
                classi: scuola.classi
            })
        }
})
}



function assegnazioneClasse(studente, classi) {
return new Promise((resolve, reject) => {
    if(!studente) {
        reject("Tutti i dati sono obbligatori");
        return
    }
    const classe = classi[Math.floor(Math.random()* classi.length)];
    console.log(`${studente.nome} è stato assegnato alla classe ${classe}`);
    const newStudente = {...studente, classe};
    setTimeout(() => {resolve(newStudente)}, 1000);
})
}

function confermaRegistrazione(studente) {
    return new Promise((resolve) => {
        resolve(`Registrazione completata con successo per l'utente ${studente.nome}`);
    })
}

registrazione(
    {
        nome: "Bob",
        cognome: "Dylan",
        email: "bob.dylan@gmail.com"
    }
)

.then((studente) => assegnazioneScuola(studente, istituto))
.then((studente) => assegnazioneClasse(studente, studente.classi))
.then((neWstudente) => confermaRegistrazione(neWstudente))
.then((messaggio) => console.log(messaggio))
.catch((errore) => console.error(errore));


//trasformare con async await



