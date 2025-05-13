// Esercizio 1: Filtra e Ordina i Prodotti
// Hai un array di oggetti che rappresentano prodotti di un negozio, ciascuno con proprietà come name, price e category.
//Scrivi una funzione che:
// Accetta una categoria come argomento e ritorna tutti i prodotti di quella categoria.
// Ordina i prodotti per prezzo, dal più basso al più alto.
// Utilizza una template string per mostrare name e price del prodotto nel risultato.
// Suggerimento: Usa filter per selezionare i prodotti per categoria e sort per ordinarli.

/*const prodotti = [
  { nome: "Iphone", prezzo: 1300, categoria: "Telefonia" },

  { nome: "Samsung s22", prezzo: 1000, categoria: "Telefonia" },

  { nome: "Motorola X15", prezzo: 1200, categoria: "Telefonia" },

  { nome: "Xiaomi Redmi 14", prezzo: 200, categoria: "Telefonia" },

  { nome: "Base di ricarica wireless", prezzo: 20, categoria: "Accessori" },

  { nome: "Pellicola in vetro temperato", prezzo: 10, categoria: "Accessori" },
];

function ritornaCategoria(categoria, array) {
    return array.filter((x) => x.categoria === categoria); //filtro per un ecommerce! Se voglio filtrare gli accessori per un array di prodotti, si fa così! x rappresenta di volta in volta l'oggetto nel nostro array prodotti, di cui voglio prendere solo la proprietà categoria.
}

function ordinaPrezzi(array) {
    return array.sort((a, b) => a.prezzo - b.prezzo); //sull'array su cui agisce, mi ordina gli elementi in ordine crescente
}

function stampa(categoria, array) {
const arrayCategoria = ritornaCategoria(categoria, array);
ordinaPrezzi(arrayCategoria);
arrayCategoria.forEach ((x) => console.log(`${x.nome} ${x.prezzo}`));
}

stampa(("Telefonia", prodotti));*/

// Esercizio 2: Calcola il Totale di un Carrello
// Data una lista di prodotti (con name, price e quantity), crea una funzione che calcola il totale del carrello.
// La funzione deve accettare l’array del carrello come parametro e usare reduce per calcolare il totale.
// Il risultato finale deve essere una template string che mostri il totale in formato di valuta (ad esempio, $45.00).

const products = [
  { nome: "Iphone", prezzo: 1300, categoria: "Telefonia", quantita: 5 },

  { nome: "Samsung s22", prezzo: 1000, categoria: "Telefonia", quantita: 3 },

  { nome: "Motorola X15", prezzo: 1200, categoria: "Telefonia", quantita: 10 },
];

function totaleCarrello(products) {
  const totale = products.reduce(
    (acc, cur) => acc + cur.prezzo * cur.quantita,
    0
  );
  return `$${totale}`;
}
console.log(totaleCarrello(products));

// Esercizio 3: Gestisci la Disponibilità dei Biglietti
// Hai un array di oggetti events, dove ogni evento ha name, date e availableTickets.
// Scrivi una funzione checkAvailability che accetti una soglia numerica (es. 10) e ritorni una lista degli eventi che hanno più di quella soglia di biglietti disponibili.
// Usa filter e map per ottenere l’elenco e formatta l’output con una template string mostrando name, date, e availableTickets.

const events = [
  {
    name: "Adele",
    data: "2025-06-01",
    availableTickets: 40,
  },
  {
    name: "Extremoduro",
    data: "2025-06-02",
    availableTickets: 200,
  },
  {
    name: "The Cranberries",
    data: "2017-06-01",
    availableTickets: 0,
  },
];

function checkAvailability(soglia) {
  return events
    .filter((x) => x.availableTickets > soglia)
    .map(
      (x) =>
        `Concerto: ${x.name}, Data: ${x.data}, Biglietti disponibili: ${x.availableTickets}.`
    );
}

console.log(checkAvailability(100));

// Esercizio 4: Statistiche sui Dipendenti
// Hai un array di oggetti employees, dove ogni oggetto ha name, department e salary.
// Crea una funzione getDepartmentStats che accetti il nome di un dipartimento e calcoli lo stipendio medio dei dipendenti di quel dipartimento.
// Usa filter e reduce per ottenere i dipendenti del dipartimento specifico e calcolare la media.
// Ritorna il risultato in una template string: “Lo stipendio medio per il dipartimento di [dipartimento] è di [media]”.

const employees = [
  {
    name: "Adele",
    department: "Risorse umane",
    salary: 1440,
  },
  {
    name: "John",
    department: "Laboratorio",
    salary: 1700,
  },
  {
    name: "Katia",
    department: "Amministrazione",
    salary: 2000,
  },
  {
    name: "Cara",
    department: "Amministrazione",
    salary: 1800,
  },
];

function getDepartmentStats(department) {
  const dip1 = employees.filter((x) => x.department === department);
  const stipendioMedio =
    dip1.reduce((acc, cur) => acc + cur.salary, 0) / dip1.length;
  return `Lo stipendio medio per il dipartimento di ${department} è di ${stipendioMedio} €.`;
}

console.log(getDepartmentStats("Amministrazione"));

// Esercizio 5: Simula un Sistema di Prenotazioni
// Hai un array di oggetti reservations che rappresenta prenotazioni in un ristorante, con proprietà name, date, time, e guests.
// Scrivi una funzione filterReservations che accetti come parametro una data (YYYY-MM-DD) e un numero di ospiti.
// La funzione deve restituire una lista di prenotazioni in quella data per almeno il numero di ospiti specificato.
// Usa filter per ottenere il risultato e usa template strings per mostrare le prenotazioni

const reservations = [
  {
    name: "Mario Rossi",
    date: "2025-05-10",
    time: "19:30",
    guests: 4,
  },
  {
    name: "Anna Bianchi",
    date: "2025-05-10",
    time: "20:00",
    guests: 2,
  },
  {
    name: "Luca Verdi",
    date: "2025-05-11",
    time: "18:45",
    guests: 6,
  },
];

function filterReservations(reservations, data, ospiti) {
  return reservations
    .filter((x) => x.date === data && x.guests === ospiti)
    .map(
      (x) => `Prenotazione per ${x.name}, Ora: ${x.time}, Ospiti: ${x.guests}`
    );
}

console.log(filterReservations(reservations, "2025-05-11", 6));

// Esercizio 6: Gestione dei Task di un Progetto
// Hai un array tasks, dove ogni task ha description, completed (booleano), e priority.
// Crea una funzione getTasksSummary che usi filter, map e reduce per restituire:
// Il numero totale di task.
// Il numero di task completati e da completare.
// Una lista di task prioritari (priority maggiore di 7).
// Usa una template string per mostrare il resoconto finale.
const tasks = [
  { description: "Comprare il latte", completed: false, priority: "1" },
  { description: "Pulire la casa", completed: true, priority: "5" },
  { description: "Scrivere report", completed: false, priority: "8" },
  { description: "Chiamare il meccanico", completed: true, priority: "10" },
  { description: "Preparare presentazione", completed: false, priority: "9" },
];

function getTasksSummary(tasksArray) {
  const totalTasks = tasksArray.length;
  const completedTasks = tasksArray.filter((x) => x.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const highPriorityTasks = tasksArray
    .filter((x) => Number(x.priority) > 7)
    .map((x) => x.description);
  //ATTENZIONE: se il backtick lo metto sotto il return, mi ignora tutto quello che viene dopo di esso. Quindi deve per forza stare sulla stessa riga, mentre il resto può pure andare a capo!!!!
  return `  
 Resoconto Task:
• Totale: ${totalTasks}
• Completati: ${completedTasks}
• Da completare: ${pendingTasks}
• Ad alta priorità (>7): ${
    highPriorityTasks.length ? highPriorityTasks.join(", ") : "nessuno"
  }`;
}
console.log(getTasksSummary(tasks));

// Esercizio 7: Analizza Recensioni dei Prodotti
// Un sito ha un array reviews di oggetti, dove ogni recensione ha productId, rating e comment.
// Crea una funzione averageRating che accetti un productId e calcoli la valutazione media per quel prodotto.
// Usa filter per selezionare le recensioni del prodotto e reduce per calcolare la media dei rating.
// Ritorna la media in una template string: “La valutazione media per il prodotto [productId] è di [rating medio] stelle”.

const reviews = [
  { productId: "A1", rating: 5, comment: "Eccellente!" },
  { productId: "A2", rating: 3, comment: "Va bene" },
  { productId: "A1", rating: 4, comment: "Buono" },
  { productId: "A3", rating: 2, comment: "Deludente" },
  { productId: "A2", rating: 5, comment: "Eccellente!" },
];

function averageRating(arrayReviews, productId) {
  const prodotto = arrayReviews.filter((x) => x.productId === productId);
  const ratingMedio =
    prodotto.reduce((acc, cur) => acc + cur.rating, 0) / prodotto.length;
  return `
    La valutazione media per il prodotto ${productId} è di rating medio stelle ${ratingMedio}`;
}
console.log(averageRating(reviews, "A1"));

// Esercizio 8: Ordina e Classifica le Vendite
// Hai un array di oggetti sales che rappresentano vendite effettuate, con product, quantity, e amount.
// Crea una funzione topSales che:
// Ordina le vendite per amount in ordine decrescente.
// Ritorna i primi 5 prodotti in una lista formattata come: “[product]: [amount] €”.
// Usa sort per l’ordinamento e slice per ottenere le prime 5 vendite.

const sales = [
  { product: "Laptop", quantity: 2, amount: 2400 },
  { product: "Mouse", quantity: 10, amount: 250 },
  { product: "Keyboard", quantity: 5, amount: 500 },
  { product: "Monitor", quantity: 3, amount: 900 },
  { product: "Mouse", quantity: 4, amount: 100 },
];

function topSales(arraySales) {
  return arraySales
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .map((x) => `${x.product}: ${x.amount} €`);
}

console.log(topSales(sales));

// Esercizio 9: Gestisci un Portfolio di Investimenti
// Un portfolio contiene un array investments con oggetti che hanno stockSymbol, shares, pricePerShare, e date.
// Scrivi una funzione portfolioSummary che calcoli il valore totale di ogni investimento (shares * pricePerShare) e restituisca un resoconto con:
// Simbolo e valore di ogni investimento.
// Valore totale del portfolio.
// Usa map per calcolare i valori individuali e reduce per il totale del portfolio. Format il risultato con template strings.

const investments = [
  { stockSymbol: "AAPL", shares: 10, pricePerShare: 150, date: "2023-01-01" },
  { stockSymbol: "GOOGL", shares: 5, pricePerShare: 2800, date: "2023-02-01" },
  { stockSymbol: "AMZN", shares: 8, pricePerShare: 2400, date: "2023-03-01" },
  { stockSymbol: "MSFT", shares: 12, pricePerShare: 300, date: "2023-04-01" },
];

function portfolioSummary(array) {
  const investimento = array.reduce(
    (acc, cur) => acc + cur.shares * cur.pricePerShare,
    0
  );
  return array
    .map(
      (x) =>
        `Simbolo: ${x.stockSymbol}, valore: ${x.shares * x.pricePerShare} €`
    )
    .concat(`Valore totale del portfolio: ${investimento} €`);
}

// Esercizio 10: Sistema di Recensioni per un Ristorante
// Un ristorante ha un array dishes con oggetti che rappresentano i piatti e le recensioni associate, ognuno con name, price, e un array reviews con rating e comment.
// Scrivi una funzione getDishRating che accetti il nome di un piatto e calcoli la valutazione media.
// Seleziona il piatto giusto con find, e poi usa map e reduce per ottenere la media delle recensioni.
// Ritorna il risultato in una template string: “La valutazione media per [name] è [media] stelle.”

const dishes = [
  {
    name: "Spaghetti Carbonara",
    price: 12,
    reviews: [
      { rating: 5, comment: "Deliziosa, cremosa al punto giusto!" },
      { rating: 4, comment: "Ottima, un po' salata però." },
    ],
  },
  {
    name: "Tagliata di Manzo",
    price: 18,
    reviews: [
      { rating: 5, comment: "Carne morbida e saporita!" },
      { rating: 5, comment: "Perfetta cottura." },
      { rating: 4, comment: "Salsa un po' dolce per i miei gusti." },
    ],
  },
  {
    name: "Insalata Mista",
    price: 8,
    reviews: [
      { rating: 3, comment: "Fresca ma niente di speciale." },
      { rating: 4, comment: "Buona e leggera." },
    ],
  },
];

function getDishRating(nomePiatto) {
  const dish = dishes.find((x) => x.name === nomePiatto);
  if (!dish) {
    return `Piatto "${nomePiatto}" non trovato.`;
  }
  const ratings = dish.reviews.map((x) => x.rating); //all'interno dell'oggetto dish, nell'array review, mappo (estraggo) tutti i ratings (stelle).
  const media = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;

  return `La valutazione media per ${dish.name} è ${media.toFixed(1)} stelle.`;
}

console.log(getDishRating("Insalata Mista"));
