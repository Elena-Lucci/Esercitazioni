/*Crea un oggetto di nome car, che abbia al suo interno due proprietà: name, color.
Stampa il valore delle due proprietà di questo oggetto*/

let car = {
    name:"Mini",
    color: "Cooper"
}
 console.log(car.name);
 console.log(car.color);
 

/*Partendo dall'oggetto creato nell'esercizio precedente, scrivi un ciclo for in dove stampiamo le chiavi dell'oggetto car */

for (let i in car) {
    console.log(i);
}

/*Nel nostro codice troviamo un oggetto user che presenta le proprietà name e age. Adesso, se vogliamo creare un nuovo utente partendo da user, e dopo proviamo a modificarne il nome, come vedrete dai console.log(), andremo a modificare anche l'oggetto di partenza. Sapresti creare una copia dell'oggetto user per poterne modificare il nome senza modificare quello di user? */
/*
let user = {
    name: "Cosimo",
    age: 30,
  };
  
  
  let newUser = {};
  for (let j in user){
      newUser[j] = user[j];
  }

  newUser.name = "Paolo";
  
  console.log(newUser);
  console.log(user);


 /*Partendo dall'esercizio precedente, conosci altri modi per copiare l'oggetto user senza modificare le sue proprietà?*/

 let user = {
    name: "Cosimo",
    age: 30,
  };
  
  /* Object.assign vuole a destra l'oggetto da copiare, a sinistra quello di destinazione*/
  let newUser = {};
  newUser = Object.assign(newUser, user);

  /* Versione con dichiarazione e assegnazione nello stesso momento.
  let newUser = Object.assign({}, user); */

  newUser.name = "Paolo";
  
  console.log(newUser);
  console.log(user);

  /*Abbiamo l'oggetto smartphone. Utilizzando uno specifico metodo degli oggetti, possiamo rendere questo oggetto 'freezato', e quindi non modificare il prezzo così facilmente. Sapresti scrivere il metodo che ci serve? */

const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

/* Object.freeze trasforma il tuo oggetto in una costante a livello di valori: nuove proprietà non possono essere aggiunte, e quelle vecchie non possono essere modificate, MA se tenti di farlo non ti dà errore, semplicemente ti ignora e ride alle tue spalle. Una volta freezato un oggetto, non si torna indietro, è bloccato per l'intera esecuzione del codice.*/

Object.freeze(smartphone);

smartphone.price = 100;

console.log(smartphone);

/*Scrivere un funzione di nome Smartphone che prenda come parametro i seguenti elementi: brand, name, price.
Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo. */

function Smartphone(brand, name, price) {
    this.brand=brand;
    this.name=name;
    this.price=price;
}

let smartphone1 = new Smartphone ("Xiaomi", "Redmi 14", 200);
console.log(smartphone1);

let smartphone2 = new Smartphone ("Samsung", "A52", 300);
console.log(smartphone2);


/* Il nostro oggetto student è incompleto. Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome personalData. L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo?

Stampa a schermo l'oggetto nested personalData che dovrà trovarsi dentro student.*/

const student = {
  id: 1,
  school: "Liceo",
  year: 3,
  personalData: {
    name: "Elena",
    surname: "Lucci",
    age: 27,
  },
};

console.log(student.personalData);