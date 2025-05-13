/* Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:
Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€ */

let tariffa = "BB";
switch (tariffa) {
  case "BB":
    console.log("50€");
    break;
  case "HB":
    console.log("80€");
    break;
  case "FB":
    console.log("100€");
    break;
  default:
    console.log("Non puoi permetterti nessuna delle tariffe? Sei povero!");
}

/*Crea la variabile favoriteFood e utilizza un costrutto switch per stampare i seguenti messaggi:
"You like PIZZA!" se favoriteFood contiene il valore "pizza" "You like COCONUT!" se favoriteFood contiene il valore "coconut" "You like something else!" in tutti gli altri casi*/

let favoriteFood = "coconut";
switch (favoriteFood) {
  case "pizza":
    console.log("You like PIZZA!");
    break;
  case "coconut":
    console.log("You like COCONUT!");
    break;
  default:
    console.log("You like something else!");
}
