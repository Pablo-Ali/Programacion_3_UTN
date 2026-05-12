function traerPuestosGuardados(){
    //borro el contenido anterior
    document.getElementById("puestos-guardados").innerHTML = "";
    
    //traigo lo que está guardado en el local storage con la clave puestos
    let arrayLocalSorage = localStorage.getItem("puestos");

    //convierto el array JSON en array de objetos JS. Si no existe, lo creo
    let arrayJS = JSON.parse(arrayLocalSorage);

    //valido que no sea null
    if(!arrayJS){
        return;
    }

    //recorro el array
    for(let p of arrayJS){ //lo llamo p en vez de puesto para que no choque con la variabe puesto que creo después
        //creo el array para guardar las habilidades
        const habilidades = [];

        //itero para instanciar cada habilidad y guardarla en el array
        for(let habilidad of p.habilidades){
            const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
            habilidades.push(habilidadInstancia);
        }

        //creo el nuevo puesto
        const puesto = new Puesto(p.nombre, p.salario, p.nivel, p.fechaDeCreacion, habilidades);

        //creo el elemento HTML
        const elemento = puesto.createHtmlElement();

        // inserto el elemento en el DOM
        document.getElementById("puestos-guardados").appendChild(elemento);
    }
}

traerPuestosGuardados();

function promedio(){
    //borro el contenido anterior
    document.getElementById("promedio").innerHTML = "";
    
    //traigo lo que está guardado en el local storage con la clave puestos
    let arrayLocalSorage = localStorage.getItem("puestos");

    //convierto el array JSON en array de objetos JS. Si no existe, lo creo
    let arrayJS = JSON.parse(arrayLocalSorage);

    //valido que no sea null
    if(!arrayJS){
        return;
    }
    let suma = 0;
    let contador = 0;
    //recorro el array y hago la cuenta
    for(let puesto of arrayJS){
        contador++;
        suma += puesto.salario;
    }
    promedio = suma/contador;

    document.getElementById("promedio").textContent="Promedio de sueldos "+promedio;
}

promedio();

function ordenarPorNombre(){
    //borro el contenido anterior
    document.getElementById("puestos-guardados").innerHTML = "";
    
    //traigo lo que está guardado en el local storage con la clave puestos
    let arrayLocalSorage = localStorage.getItem("puestos");

    //convierto el array JSON en array de objetos JS. Si no existe, lo creo
    let arrayJS = JSON.parse(arrayLocalSorage);

    //valido que no sea null
    if(!arrayJS){
        return;
    }

    arrayJS.sort((a,b) => a.nombre.localeCompare(b.nombre));

    //recorro el array
    for(let p of arrayJS){ //lo llamo p en vez de puesto para que no choque con la variabe puesto que creo después
        //creo el array para guardar las habilidades
        const habilidades = [];

        //itero para instanciar cada habilidad y guardarla en el array
        for(let habilidad of p.habilidades){
            const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
            habilidades.push(habilidadInstancia);
        }

        //creo el nuevo puesto
        const puesto = new Puesto(p.nombre, p.salario, p.nivel, p.fechaDeCreacion, habilidades);

        //creo el elemento HTML
        const elemento = puesto.createHtmlElement();

        // inserto el elemento en el DOM
        document.getElementById("puestos-guardados").appendChild(elemento);
    }
}

function ordenarPorMayorSalario(){
    //borro el contenido anterior
    document.getElementById("puestos-guardados").innerHTML = "";
    
    //traigo lo que está guardado en el local storage con la clave puestos
    let arrayLocalSorage = localStorage.getItem("puestos");

    //convierto el array JSON en array de objetos JS. Si no existe, lo creo
    let arrayJS = JSON.parse(arrayLocalSorage);

    //valido que no sea null
    if(!arrayJS){
        return;
    }

    arrayJS.sort((a,b) => b.salario - a.salario);
    

    //recorro el array
    for(let p of arrayJS){ //lo llamo p en vez de puesto para que no choque con la variabe puesto que creo después
        //creo el array para guardar las habilidades
        const habilidades = [];

        //itero para instanciar cada habilidad y guardarla en el array
        for(let habilidad of p.habilidades){
            const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
            habilidades.push(habilidadInstancia);
        }

        //creo el nuevo puesto
        const puesto = new Puesto(p.nombre, p.salario, p.nivel, p.fechaDeCreacion, habilidades);

        //creo el elemento HTML
        const elemento = puesto.createHtmlElement();

        // inserto el elemento en el DOM
        document.getElementById("puestos-guardados").appendChild(elemento);
    }
}

document.getElementById("btnOrdenNombre").onclick=ordenarPorNombre;
document.getElementById("btnOrdenSalario").onclick=ordenarPorMayorSalario;