const ricette = [
    {
        titolo: "ravioli al vapore",
        immagine: "",
        ingredienti: ["farina di riso", "verdure", "carne", "spezie"],
        descrizione: "Questa è una descrizione",
        label: "antipasto",
    },

    {
        titolo: "ravioli al vapore",
        immagine: "",
        ingredienti: ["farina di riso", "verdure", "carne", "spezie"],
        descrizione: "Questa è una descrizione",
        label: "pranzo",
    },

    {
        titolo: "ravioli al vapore",
        immagine: "",
        ingredienti: ["farina di riso", "verdure", "carne", "spezie"],
        descrizione: "Questa è una descrizione",
        label: "cena",
    }
];

function renderizzaRicetta(array) {
    array.forEach ((x) => {
        const card = document.createElement("div");
        const titolo = document.createElement("h6");
        const image = document.createElement("img");
        const ingredienti = document.createElement("ul");
        const descrizione = document.createElement("p");
        const label = document.createElement("p");

        titolo.innerText = x.titolo;
        image.src = x.immagine;
        image.alt = x.titolo;
        descrizione.innerText = x.descrizione;
        label.innerText = x.label;
        x.ingredienti.forEach ((y) => {
            const ingrediente = document.createElement("li");
            ingrediente.innerText = y;
            ingredienti.appendChild(ingrediente);
        })

card.className = "card"; //assegna nome della classe. Non mettere il selettore di classe, ma solo il nome
if(x.label === "pranzo") {
   // card.className = "bordoblu"; //riassegna la classe .bordoblu piallando la precedente classe .card
   card.className += " bordoblu"; //così invece concatena la classe .bordoblu a quella .card. !!! ricordare di mettere lo spazio prima del nome della classe da concatenare
}

        card.appendChild(titolo);
        card.appendChild(image);
        card.appendChild(descrizione);
        card.appendChild(label);
        card.appendChild(ingredienti);
        document.body.appendChild(card);

    })
}

renderizzaRicetta(ricette);


//COMPITO: fare qualcosa di creativo con la pagina automatizzando i processi tramite js. Usare il meno possibile html. Mettere immagini, chiavi eventuali, stilizzare bene con css per classi, usando anche delle condizioni.