//constantes
const API_URL = "https://api.tvmaze.com/shows/";
const DIV_SERIES = document.getElementById("series");

//ejecuto la función al lanzar la página
window.addEventListener("load", cargarSeries);

//variable global que me permite guardar dónde estoy parado
let inicio = 1;

async function cargarSeries(){
    //borro el contenido anterior
    DIV_SERIES.innerHTML = "";
    //traigo 6 series con fetch
    for(let i = inicio; i< inicio + 6; i++){
        const respuesta = await fetch(API_URL + i);
        //guardo los datos en un JSON previa verificación
        if(respuesta.ok){
            const datos = await respuesta.json();
            //creo un objeto con los datos del JSON
            const serie = new Serie(
                datos.id,
                datos.url,
                datos.name,
                datos.language,
                datos.genres,
                datos.image ? datos.image.medium : "" //si no hay imagen no muestra nada, pero ya no da error
            );
            //creo el elemento HTML
            const elemento = serie.createHtmlElement();
            // inserto el elemento en el DOM
            DIV_SERIES.appendChild(elemento);
        }
        
    }   
}

function paginaSiguiente(){
    //ajusto la variable
    inicio += 6;
    //cargo las series
    cargarSeries();
}

function paginaAnterior(){
    if (inicio > 6){ //verifico para que no me de negativo
        inicio -= 6;
    } else{
        inicio = 1;
        alert("Estás al comienzo de la lista")
    }
    cargarSeries();
}