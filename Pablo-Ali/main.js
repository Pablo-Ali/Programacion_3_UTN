const API_URL = "https://pp-prog-iii-2025-c2.vercel.app/puestos";
const pagina = 1;

async function cargarPuestos(){
    //borro el contenido anterior
    document.getElementById("puestos").innerHTML = "";

    //traigo 5 puestos con fetch
    const respuesta = await fetch(API_URL + "?page=" + pagina + "&limit=5");

    //guardo los datos en un JSON previa verificación
    if(respuesta.ok){
        const datos = await respuesta.json();
        //recorro el array
        for(let dato of datos.puestos){
            //creo el array para guardar las habilidades
            const habilidades = [];

            //itero para instanciar cada habilidad y guardarla en el array
            for(let habilidad of dato.habilidades){
                const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
                habilidades.push(habilidadInstancia);
            }

            //creo el nuevo puesto
            const puesto = new Puesto(dato.nombre, dato.salario, dato.nivel, dato.fechaDeCreacion, habilidades);

            //creo el elemento HTML
            const elemento = puesto.createHtmlElement();

            // inserto el elemento en el DOM
            document.getElementById("puestos").appendChild(elemento);
        }
    }
    
}

//lanzo el método
cargarPuestos();

async function traerPuesto(){
    //borro el contenido anterior
    document.getElementById("busqueda").innerHTML = "";

    //traigo lo que escribió el usuario
    const nombre = document.getElementById("traer-puesto").value;

    const respuesta = await fetch(API_URL + "/" + nombre);

    if(respuesta.ok){
        const datos = await respuesta.json();

        //creo el array para guardar las habilidades
        const habilidades = [];

        //itero para instanciar cada habilidad y guardarla en el array
        for(let habilidad of datos.habilidades){
            const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
            habilidades.push(habilidadInstancia);
        }

        //creo el nuevo puesto
        const puesto = new Puesto(datos.nombre, datos.salario, datos.nivel, datos.fechaDeCreacion, habilidades);

        //creo el elemento HTML
        const elemento = puesto.createHtmlElement();

        // inserto el elemento en el DOM
        document.getElementById("busqueda").appendChild(elemento);
        
    }

}