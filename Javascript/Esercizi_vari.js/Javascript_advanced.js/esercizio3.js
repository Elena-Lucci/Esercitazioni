const books = [
  {
    title: "1984",
    author: "George Orwell",
    price: 15,
    genre: "dystopian",
    available: true,
    rating: 4.8,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    price: 12,
    genre: "dystopian",
    available: false,
    rating: 4.6,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 18,
    genre: "classic",
    available: true,
    rating: 4.9,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10,
    genre: "classic",
    available: true,
    rating: 4.5,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    price: 22,
    genre: "adventure",
    available: true,
    rating: 4.2,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 25,
    genre: "fantasy",
    available: true,
    rating: 4.8,
  },
];

const customers = [
  {
    id: 1,
    name: "Alice",
    orders: [
      { title: "1984", quantity: 1 },
      { title: "The Hobbit", quantity: 2 },
    ],
  },
  { id: 2, name: "Bob", orders: [{ title: "Brave New World", quantity: 1 }] },
  {
    id: 3,
    name: "Charlie",
    orders: [
      { title: "The Great Gatsby", quantity: 1 },
      { title: "Moby Dick", quantity: 1 },
    ],
  },
];

// Implementa una funzione `getAvailableBooksByGenre` che riceve un genere (es. "dystopian")
// e restituisce un array con tutti i libri disponibili di quel genere.

function getAvailableBooksByGenre(genre, array) {
return array.filter((x) => x.genre.toLowerCase() === genre && x.available); //metto toLowerCase, così converto qualunque cosa io abbia scritto in lower case, così se scrivo il genere con lettere maius o minusc, per lui è uguale e elo trova lo stesso.
}
console.log(getAvailableBooksByGenre("dystopian", books));

/*-------------------------------------------------------------------------------------- */

// Implementa una funzione `calculateCustomerTotal` che riceve un customerId
// e restituisce il totale speso da quel cliente, moltiplicando il prezzo dei libri acquistati per la quantità.

function calculateCustomerTotal(customerId) {
  let totaleOrdini = 0;
  const customer = customers.find ((x) => x.id === customerId);
  if(customer && typeof(customerId) === "number") {
    customer.orders.forEach((x)=> {
      const book = books.find((b) => b.title === x.title);
      const totale = book.price * x.quantity;
      totaleOrdini += totale;
    });
    return totaleOrdini;
  } else {
    console.error("Utente non trovato");
  }
}
console.log(calculateCustomerTotal(1));

/*--------------------------------------------------------------------------------------- */

// Implementa una funzione `getCustomersByGenre` che riceve un genere (es. "fantasy")
// e restituisce un array con i nomi dei clienti che hanno acquistato almeno un libro di quel genere.

function getCustomersByGenre(genre) {
  return customers //nell'array customers mi filtra negli elementi dell'array orders il primo elemento il cui titolo è uguale a quello nell'array books. Restituisce quindi questo titolo e il suo genere. 
    .filter((x) =>
      x.orders.some((x) => {
        const book = books.find((b) => b.title === x.title);
        return book && book.genre === genre;
      })
    )
    .map((x) => x.name); // nell'array customers mi mappa il nome dell'elemento che soddisfa i requisiti di cui sopra
}
 console.log(getCustomersByGenre("dystopian"));

/*--------------------------------------------------------------------------------------- */


// Implementa una funzione `getTopCustomer` che trovi il cliente con la spesa più alta.
// Suggerimento: Puoi riutilizzare la funzione `calculateCustomerTotal`.

function getTopCustomer() {
  return customers.reduce((acc, cur) => {
  return calculateCustomerTotal(cur.id) > calculateCustomerTotal(acc.id) ? cur : acc; //mettere il .id, perché sennò non capisce che cosa deve prendere come parametro la funzione calculateCustomerTotal. 
  }, customers[0]);
}

console.log(getTopCustomer());

/*--------------------------------------------------------------------------------------- */

// Implementa una funzione `addBookOrder` che permette di aggiungere un nuovo ordine a un cliente esistente.
// Deve verificare se il cliente esiste e se il libro è disponibile prima di aggiungere l'ordine.

function addBookOrder(customerId, bookTitle, quantity) {
  const customer = customers.find((x) => x.id === customerId);
  if (customer) {
    const book = books.find((x) => x.title.toLowerCase() === bookTitle.toLowerCase());
    if (book && book.available) {
      customer.orders.push({title: bookTitle, quantity: quantity });
      console.log(`Il libro ${bookTitle} è stato aggiunto correttamente.`)
    } else {
      console.log("Il libro non esiste o non è disponibile");
    }
  } else {
    console.error("Utente non trovato");
  }
}

console.log(addBookOrder(1, "The Great Gatsby", 1));
console.log(addBookOrder(4, "The Great Gatsby", 1));
console.log(addBookOrder(4, "Cose che nessuno sa", 1));
console.log(customers[0].orders);


// Implementa una funzione `getBestSellingBooks` che restituisce un array con i libri più venduti,
// ordinati per quantità decrescente. Deve calcolare il numero totale di copie vendute per ogni libro.

function getBestSellingBooks() {
  const vendite = {};
  customers.forEach((customer) => {
    customer.orders.forEach((order) => {
      if(vendite[order.title]) {
        vendite[order.title] += order.quantity
      } else {
        vendite[order.title] = order.quantity;
      }
    });
  });

 return Object
    .entries(vendite)                                
    .map(([title, quantity]) => ({ title, quantity }))

    //([title, quantity]) è il destructuring del parametro x della callback di map, che era un array formato da x[0], cioè il titolo del libro, e x[1], cioè la quantità. => ({ title, quantity }): le parentesi tonde indicano un implicito return. le parentesi graffe creano un oggetto con due proprietà, e corrispondono a { title: title, quantity: quantity }. E' come la versione implicita e abbreviata di:
    // destructuring
/*const title = "The Hobbit";
const quantity = 2;

// crea e ritorna l'oggetto
return {
  title: title,
  quantity: quantity
}; */

    .sort((a, b) => b.quantity - a.quantity);
}

console.log(getBestSellingBooks());




