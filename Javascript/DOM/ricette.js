const ricette = [
  {
    titolo: "Jiaozi al vapore",
    immagine: "https://www.dissapore.com/wp-content/uploads/2022/12/ravioli-cinesi-al-vapore-ricetta.jpg",
    ingredienti: [
      "250 g di farina 00",
      "150 ml di acqua",
      "200 g di carne di maiale macinata",
      "100 g di verza",
      "2 cipollotti",
      "1 cucchiaio di zenzero grattugiato",
      "2 cucchiai di salsa di soia",
      "1 cucchiaino di olio di sesamo",
      "sale q.b."
    ],
    descrizione: "Delicati ravioli ripieni di carne e verdure, cotti al vapore fino a diventare morbidi e succosi, ideali come antipasto.",
    label: "antipasto",
    tempoPreparazione: "30 min",
    tempoCottura: "15 min",
    porzioni: 4,
    difficolta: "media",
    regione: "Nord-Est"
  },
  {
    titolo: "Zuppa di Wonton",
    immagine: "https://www.agrodolce.it/app/uploads/2020/03/zuppa-di-wonton-con-carne-2020-i-025-scaled.jpg",
    ingredienti: [
      "20 fogli di pasta per wonton",
      "100 g di gamberi sgusciati",
      "150 g di carne di maiale macinata",
      "1 l di brodo di pollo",
      "2 cucchiai di salsa di soia",
      "1 cucchiaio di zenzero grattugiato",
      "2 cipollotti",
      "semi di sesamo per guarnire"
    ],
    descrizione: "Zuppa calda con wonton ripieni di carne e gamberi serviti in un brodo aromatico, perfetta per scaldare le serate più fresche.",
    label: "primo",
    tempoPreparazione: "20 min",
    tempoCottura: "10 min",
    porzioni: 4,
    difficolta: "facile",
    regione: "Cantonese"
  },
  {
    titolo: "Mapo Tofu",
    immagine: "https://www.giallozafferano.it/images/262-26232/Mapo-tofu_780x520_wm.jpg",
    ingredienti: [
      "400 g di tofu morbido",
      "150 g di carne di maiale macinata",
      "2 cucchiai di pasta di fagioli piccanti (doubanjiang)",
      "1 cucchiaio di salsa di soia",
      "1 cucchiaino di pepe di Sichuan",
      "2 spicchi d'aglio",
      "1 cucchiaio di zenzero grattugiato",
      "2 cipollotti"
    ],
    descrizione: "Tipico piatto piccante della cucina del Sichuan: cubetti di tofu immersi in una salsa saporita e leggermente numbing, con carne macinata aromatizzata al pepe di Sichuan.",
    label: "secondo",
    tempoPreparazione: "15 min",
    tempoCottura: "10 min",
    porzioni: 2,
    difficolta: "media",
    regione: "Sichuan"
  },
  {
    titolo: "Pollo alle mandorle",
    immagine: "https://www.giallozafferano.it/images/229-22993/Pollo-alle-mandorle_650x433_wm.jpg",
    ingredienti: [
      "500 g di petto di pollo",
      "50 g di mandorle tostate",
      "2 cucchiai di amido di mais",
      "3 cucchiai di salsa di soia",
      "1 cucchiaio di zucchero",
      "100 ml di brodo di pollo",
      "1 cucchiaio di aceto di riso",
      "1 cucchiaino di olio di sesamo"
    ],
    descrizione: "Bocconcini di pollo croccanti saltati con mandorle tostate in una salsa agrodolce, un classico della cucina cantonese.",
    label: "secondo",
    tempoPreparazione: "25 min",
    tempoCottura: "15 min",
    porzioni: 4,
    difficolta: "media",
    regione: "Cantone"
  },
  {
    titolo: "Riso alla cantonese",
    immagine: "https://blog.giallozafferano.it/mastercheffa/wp-content/uploads/2021/11/riso-alla-cantonese-5-scaled.jpg",
    ingredienti: [
      "300 g di riso basmati cotto e raffreddato",
      "100 g di piselli",
      "100 g di prosciutto cotto a dadini",
      "2 uova",
      "1 carota",
      "2 cipollotti",
      "2 cucchiai di salsa di soia",
      "olio di semi q.b."
    ],
    descrizione: "Riso saltato in padella con verdure, uova e pezzetti di prosciutto, semplice e veloce, perfetto come contorno o piatto unico.",
    label: "contorno",
    tempoPreparazione: "10 min",
    tempoCottura: "10 min",
    porzioni: 4,
    difficolta: "facile",
    regione: "Cantone"
  },
  {
    titolo: "Tang Yuan",
    immagine: "https://noobcook.com/wp-content/uploads/2013/02/tangyuan.jpg",
    ingredienti: [
      "200 g di farina di riso glutinoso",
      "100 ml di acqua calda",
      "50 g di semi di sesamo nero",
      "30 g di zucchero",
      "200 ml di latte di cocco",
      "zucchero extra per lo sciroppo"
    ],
    descrizione: "Dolci polpette di riso glutinoso ripiene di sesamo nero e zucchero, servite in uno sciroppo caldo di latte di cocco, tipiche delle feste cinesi.",
    label: "dessert",
    tempoPreparazione: "20 min",
    tempoCottura: "8 min",
    porzioni: 4,
    difficolta: "difficile",
    regione: "Tradizionale"
  }
];


function renderizzaRicetta(array) {
    array.forEach ((x) => {
        const card = document.createElement("div");
        const titolo = document.createElement("h3");
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

image.className = "img";
titolo.className = "title";
descrizione.className = "testo";
ingredienti.className = "ingredienti";

card.classList.add(`diff-${x.difficolta}`);
const badge = document.createElement('span');
badge.innerText = x.difficolta.toUpperCase();
badge.className = " badge-difficolta"
if (x.difficolta === "facile") {
    badge.className += " badge-difficolta-facile"
} else if (x.difficolta === "media") {
    badge.className += " badge-difficolta-media"
} else {badge.className += " badge-difficolta-difficile"}
card.appendChild(badge);

label.className = "lable"

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