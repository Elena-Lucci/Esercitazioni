/*Scrivi una funzione che prenda come parametro un array di oggetti, ognuno dei quali rappresenta una macchina con le seguenti proprietà: brand, model, year.
La funzione dovrebbe restituire un nuovo array di stringhe che contenga la marca e il modello di ogni macchina nel formato "brand model".
Stampare il nuovo array. */

const macchina = [
    {brand: "Dacia",
    model: "Duster",
    year: 2025},
    {brand: "Fiat",
    model: "500L",
    year: 2014}
];

/*function tipoMacchina(macchina) {
    let brandModel = []; //posso definire un array vuoto. Posso farlo anche per gli oggetti. Questa cosa è comoda quando non sai ancora quali elementi vanno inseriti all'interno di un array, ma è comunuque necessario specificare che è un array, affinché JS lo sappia.
    for (let i=0; i < macchina.length; i++) {
        brandModel.push(macchina[i].brand + " " + macchina[i].model);
    }
    return brandModel;
}

console.log(tipoMacchina(macchina));*/


//Uso il metodo map: mi restituisce un array e accetta una arrow function, il cui primo parametro è l'elemento, l'eventuale secondo è il suo indice.
function tipoMacchina(macchina) {
    const brandModel = macchina.map((x) => `${x.brand} ${x.model}`);
    return brandModel;
}

console.log(tipoMacchina(macchina));