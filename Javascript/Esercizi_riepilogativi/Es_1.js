/* Dato il seguente array di oggetti, creare una funzione che passi in rassegna gli elementi dell'array e produca il seguente output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
Il più giovane è Carmelo
Il cognome più lungo è Brambilla*/

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
{ id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
{ id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
{ id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

function motti(students) {

    let etaMinima = students[0].age;
    let nomeEtaMinima = students[0].name;
    let cognomePiuLungo = students[0].surname;

    for (let i=0; i<students.length; i++) {
        console.log(students[i].name);
    
        switch (students[i].hobby) {
            case 'gamer':
                console.log("Life Is a Game, Play to Win!");
                break;
            case 'sportsman':
                console.log("Never give up!");
                break;
            case 'photographer':
                console.log("A picture is worth a thousand words!");
                break;
        }

        if (students[i].age < etaMinima) {
            etaMinima = students[i].age;
            nomeEtaMinima = students[i].name;
        }

        if (students[i].surname.length > cognomePiuLungo.length) {
            cognomePiuLungo = students[i].surname;
        }
    }

    console.log("Il più giovane è " + nomeEtaMinima);
    console.log("Il cognome più lungo è " + cognomePiuLungo);
}

motti(students);

/*Poi aggiungi un nuovo studente al terzo posto dell'array:*/

students.splice(2, 0, { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'});
motti(students);

/*Ogni motto è associato all'hobby dello studente.
E' possibile creare diverse funzioni che si occupino ognuna di un task diverso e richiamarle tutte dentro la funzione padre.
Il console.log può stampare una combinazione di stringa e variabile ( es: console.log('Ciao', name) ).*/