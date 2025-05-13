const nome = "Carlo";
const cognome = "Ganci";
const eta = 27;
const votoItaliano = 7;
const votoMatematica = 5;
const votoInglese = 8;
let media = null;
let bonus = null;

// Accertiamo di avere un valore alle stringhe nome e cognome

let studentExist =
  typeof nome === "string" && typeof cognome === "string" ? true : false;
if (studentExist) {
  console.log("Benvenuto: " + nome + " " + cognome);
  if (eta >= 18) {
    media = Math.floor((votoInglese + votoItaliano + votoMatematica) / 3);
    if (votoInglese < 6 || votoMatematica < 6 || votoItaliano < 6) {
      console.log(
        "Non hai la sufficienza in: " + votoInglese < 6
          ? "Hai la seguente insufficienza in Inglese: " + votoInglese
          : votoItaliano < 6
          ? "Hai la seguente insufficienza in Italiano: " + votoItaliano
          : "Hai la seguente insufficienza in Matematica: " + votoMatematica
      );
    } else {
      switch (media) {
        case 6:
          console.log("Hai la media del " + media + ", devi migliorare...");
          break;
        case 7:
          console.log(
            "Hai la media del " +
              media +
              ", sei stato bravo, ma puoi dare di più..."
          );
          break;
        case 8:
          console.log(
            "Hai la media dell' " + media + ", sei un ottimo studente."
          );
          break;
        case 9:
          console.log(
            "Hai la media del " +
              media +
              ", sei tra i migliori studenti della scuola."
          );
          break;
        case 10:
          console.log("Hai la media del " + media + ", sei il nostro pupillo!");
          break;
        default:
          console.log("Questo è un messaggio di default.");
      }
      bonus = true;
    }
  } else {
    console.log("Devi essere MAGGIORENNE.");
  }
} else {
  console.log("Lo Studente non esiste o non è presente in archivio. ");
}
if (bonus && media >= 6) {
  console.log("Sei stato promosso alla classe successiva.");
} else if (media < 6) {
  console.log(
    "Sei stato BOCCIATO, vai subito a studiare, capra, e aumentiamo sta media del: " +
      media
  );
} else {
  console.log(
    "Sei stato promosso con debito in " +
      (votoInglese < 6
        ? "Inglese"
        : votoItaliano < 6
        ? "Italiano"
        : "Matematica")
  );
}
