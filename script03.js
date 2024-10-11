const URL = "https://dummyjson.com/products";

fetch(URL)
    .then(products =>{
        console.log(products);
        return products.json();
    }).then(responde =>{
        
        // nella responde il dato è già parserizzato dal metodo .JSON()
        console.log(responde);
        console.log(responde.products[0].id);
        
        utenti = responde.products;

        // for(let i = 0; i < responde.data.length; i++){
        //     demo.innerHTML += "<li> " + responde.data[i].first_name + " " + responde.data[i].last_name + "</li>";
        // }

        responde.products.forEach(prodotti => {
            demo.innerHTML += creaDiv(prodotti.id, prodotti.title, prodotti.price, prodotti.description, prodotti.thumbnail);
        })

    })

function creaDiv(id, title, price, description, thumbnail){
    let riga = `<div id="prod"> Id prodotto: ${id} <br> Titolo: ${title} <br> Prezzo: ${price}€ <br> Descrizione: ${description} <br> <img src=${thumbnail}> </div>`;
    return riga
}




// let prdoTrasf = JSON.parse(prodJSON);
// console.log(prdoTrasf);

// console.log(prdoTrasf.products[0].title, prdoTrasf.products[0].category);


// let demo = document.querySelector("#demo");

// for (let i = 0; i < prdoTrasf.products.length; i++){
//     demo.innerHTML += `<li> Id prodotto: ${prdoTrasf.products[i].id} <br> Titolo: ${prdoTrasf.products[i].titolo} <br> Prezzo: ${prdoTrasf.products[i].price}€ <br> Descrizione: ${prdoTrasf.products[i].description} <br> <img src='${prdoTrasf.products[i].images}'> </li>`;
// }