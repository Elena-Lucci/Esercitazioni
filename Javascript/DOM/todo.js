// Farci restituire tutte le FETCH di
const url = "https://jsonplaceholder.typicode.com/todos";
async function recuperoDati(url, id) {
  try {
    if (typeof id === "number") {
      const dati = await fetch(url);
      const result = await dati.json();
      const resultFiltrato = result.filter(
        (x) => x.userId === id && x.id < 155
      );
      return resultFiltrato;
    } else {
      throw new Error("Il tipo di dato inserito non e numerico.");
    }
  } catch (error) {
    console.error(`Errore durante la richiesta: `, error);
  }
}
async function renderizzaDati() {
  try {
    const todos = await recuperoDati(url, 7);
    todos.forEach((element) => {
      const card = document.createElement("div");
      const titolo = document.createElement("h6");
      const esito = document.createElement("p");
      titolo.innerText = element.title;
      esito.innerText = element.completed ? "Completata" : "Fallita";
      card.appendChild(titolo);
      card.appendChild(esito);
      document.body.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}
/*recuperoDati(url, 7)
  .then((x) => console.log(x))
  .catch((error) => console.error(error));*/
renderizzaDati().catch((error) => console.error(error));
