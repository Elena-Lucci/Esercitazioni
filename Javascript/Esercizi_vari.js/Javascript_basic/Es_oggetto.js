const persona = {
    nome: "Elena",
    cognome: "Gatto In Nocciola Ammaccata",
    eta: 27,
    ciboPreferito: "Caramelle Haribo Tropical",
    professione: "Ronfy e bellezza naturale estrema",
    saluta: function () {
        return `Ciay, sono ${this.nome} ${this.cognome}`;
    },
    // nomeCompleto: `${this.nome} ${this.cognome}`, // se non assegno la proprietà nomeCompleto mi dà undefined 
};
persona.nome ="RonfyElena"; //va bene, perché ho cambiato il contenuto dell'oggetto persona, che è una struttura interna al mio dato, non ho riassegnato il valore della variabile const persona con: persona = {} (cosa che non potrei fare!). POSSO QUINDI DICHIARARE OGGETTI COME CONST, INVECE CHE CON LET!
// persona.nomeCompleto=`${persona.nome} ${persona.cognome}`; //posso assegnare un valore solo successivamente alla creazione dell'oggetto
console.log(persona.saluta());

// LE ARROW FUNCTIONS NON SUPPORTANO IL this!!!!

if("nomeCompleto" in persona) {
    persona.nomeCompleto=`${persona.nome} ${persona.cognome}`;
} else {
    console.log("Non esiste la proprietà");
}
console.log(persona.nomeCompleto);
console.log(`nome`in persona); //mi dà true perché l'operatore in dà true o false a seconda che la proprietà esista o meno nell'oggetto indicato

for (let x in persona) {       //operatore FOR IN iterata per ognuna delle chiavi del mio oggetto
    console.log(persona[x]);
}