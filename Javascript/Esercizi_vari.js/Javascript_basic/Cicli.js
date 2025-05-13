/*Stampa in console i numeri compresi da 0 a 10*/
for (let i=0; i<11; i++) {
    console.log(i);
}
    
/*Stampa in console i numeri compresi da 0 a -10*/

for (let i=0; i>-11; i--) {
    console.log(i);
}

/*Riscrivi l'esercizio 24 usando il ciclo while*/
let i= 0;
while (i<11) {
    console.log(i);
    i++;
}

/*Stampa in console tutti i numeri pari da 0 a 20.
Esempio:

10 % 2 --> restituisce 0 perché 10 / 2 non ha resto
10 % 4 --> restituisce 2 perché 10 / 4 ritorna 2 con un resto di 2*/

for (let i=0; i<=20; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

/*Versione più compatta*/

for (let i=0; i<=20; i+=2) {
    console.log(i);
}

/*Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.*/
let somma = 0;
for (let i=0; i<=10; i++) {
    console.log(i);
    somma += i;
}
console.log(somma);
