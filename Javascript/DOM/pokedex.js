const url = "https://pokeapi.co/api/v2/pokemon/";
const container = document.getElementById("container");
const button = document.getElementById("bottone");
const input = document.getElementById("input");


async function recuperoDati(url) {
    try {
        const response = await fetch(url);
        const pokemon = await response.json();
        return pokemon;
    }
    catch (error) {
        console.error (error);
    }
}

async function renderizzaPokemon () {
    try {
    container.innerHTML = ""; // Pulisce il contenitore prima di aggiungere un nuovo Pokémon
    const nomePokemon = input.value.toLowerCase();
    const pokemon = await recuperoDati(url + nomePokemon);
    const p = document.createElement("p");
    p.innerText = `Nome: ${pokemon.name}, Peso: ${pokemon.weight}, Altezza: ${pokemon.height}`; 
    container.appendChild(p);
    }
    catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        const p = document.createElement("p");
        p.innerText = "Errore nel recupero dei dati. Assicurati che il nome del Pokémon sia corretto.";
        container.appendChild(p);
    }
}

button.addEventListener("click", renderizzaPokemon);

// Sistemare lato stilistico.
// Aggiungere una card con immagine del pokemon ed eventualemente atri dati in più.
// Cambiare lo sfondo in base al tipo del pokemon.