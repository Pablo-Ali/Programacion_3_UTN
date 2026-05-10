const DIV_SERIES = document.getElementById("series");

//creo una función aparte para poder reutilizar más fácil
function traerSeriesLocalStorage(){
    //traigo las series desde local storage
    let arrayLocalSorage = localStorage.getItem("series");
    //guardo los datos del String en un JSON
    const datos = JSON.parse(arrayLocalSorage);

    //valido que no sea null
        if(!datos){
            return;
        }

    return datos;
}

const datos = traerSeriesLocalStorage();

function cargarSeriesGuardadas(datos){
    //borro el contenido anterior
    DIV_SERIES.innerHTML = "";

    //recorro las series y las muestro
    for(let dato of datos){
        //creo un objeto con los datos del JSON
        const serie = new Serie(
            dato.id,
            dato.url,
            dato.name,
            dato.language,
            dato.genres,
            dato.image
        );

        //creo el elemento HTML
        const elemento = serie.createHtmlElement();

        // inserto el elemento en el DOM
        DIV_SERIES.appendChild(elemento);
    }    
   
}

//lanzo el método de una forma distinta a como lo hice en main para tener variedad
cargarSeriesGuardadas(datos);

function ordenarPorNombre(){
    //función de ordenamiento robada de chatGPT para no ponerme a hacer un algoritmo de ordenamiento
    datos.sort((a,b) => a.name.localeCompare(b.name));
    cargarSeriesGuardadas(datos);
}

function ordenarPorID(){
    //función de ordenamiento robada de chatGPT para no ponerme a hacer un algoritmo de ordenamiento
    datos.sort((a,b) => a.id - b.id);
    cargarSeriesGuardadas(datos);
}

//acá acciono los botones desde el JS en vez del HTML
document.getElementById("btnNombre").onclick=ordenarPorNombre;
document.getElementById("btnID").onclick=ordenarPorID;