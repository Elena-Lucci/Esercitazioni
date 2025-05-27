// Farci restituire tutte le FETCH di
const url = "https://jsonplaceholder.typicode.com/todos";
async function recuperoDati(x, n) {
  try {
    if (typeof n === "number") {
      const dati = await fetch(x);
      const result = await dati.json();
      const resultFiltrato = result.filter(
        (x) => x.completed && x.userId === n && x.id < 155
      );
      return resultFiltrato;
    } else {
      throw new Error("Il tipo di dato inserito non e numerico.");
    }
  } catch (error) {
    console.error(`Errore durante la richiesta: `, error);
  }
}
/*recuperoDati(url, 7)
  .then((x) => console.log(x))
  .catch((error) => console.error(error));*/

async function recuperaPokemon(n) {
  try {
    if (typeof n === "string") {
      const dati = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${n.toLowerCase()}`
      );
      const result = await dati.json();
      return `Il pokemon richiesto e' presente in database :${result.name} ed e' di tipo ${result.types[0].type.name}`;
    } else {
      throw new Error("Il valore inserito non e di tipo stringa");
    }
  } catch (error) {
    console.error("Pokemon non esiste", error);
  }
}
recuperaPokemon('CHARIZARD')
  .then((x) => console.log(x))
  .catch((error) => console.error(error));
