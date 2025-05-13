/* Dati due numeri a e b la funzione controlla che a sia minore di b e che entrambi siano maggiori di zero. Se così non è segnala un errore e restituisce 0, altrimenti scrive "tutto ok" e poi calcola la somma di tutti i multipli di 5 compresi tra b-a e b+a. */

function cernioBillo(a,b) {
    if (a>b || a<=0 || b<=0) {
        console.log("Sei stupido");
        return 0;
    }

    else {
        console.log("Tutto ok");
        let sommaCulina = 0;
        for (let i=(b-a); i<=(b+a); i++) {
            if (i%5===0) {
                sommaCulina += i;
            }
        }
        return sommaCulina;
    }
}

console.log(cernioBillo(7, 434));


function cernioBilloBis(a,b) {
    if (a>b || a<=0 || b<=0) {
        console.log("Sei stupido");
        return 0;
    }

    else {
        console.log("Tutto ok");
        let sommaCulina = 0;
        let scarto = (b-a)%5 === 0 ? 0 : 5 - (b-a)%5;
        let inf = (b-a) + scarto;
        for (let i=inf ; i<=(b+a); i+=5) {
            sommaCulina += i;
        }
        return sommaCulina;
    }
}

console.log(cernioBilloBis(7, 434));


/*12%5 = 2
scarto = 5 - 3 = 3
inf = 12 +3 = 15*/

function ronfy(a,b) {
    if(a>0 && b>a) {
        let produtto = 1;
        for(let i=a; i<=b; i++) {
            if(i%2===0) {
                produtto *= i;
            }
        }
        return produtto;
    }

    else {
        console.log("Sei un ciafrello!");
        return 0;
    }
}

console.log(ronfy(1,12));

