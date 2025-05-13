let eta = 20;
let nome = "Gabriele";
let iscritto = 1;
let votoItaliano = 7;
let votoMatematica = 4;
let votoInglese = 9;
let media = null;

if (nome && iscritto && typeof nome === "string") {
    if (typeof eta !== "number") {console.log ("Il formato di eta deve essere un numero");
        return
    }
    if (eta>=18) { media = (votoItaliano + votoMatematica + votoInglese)/3;
        console.log(Math.round(media));
       }
    
    else {console.log("Sei minorenne");}
}

else {console.log("Nessuno studente trovato");}
console.log(media);