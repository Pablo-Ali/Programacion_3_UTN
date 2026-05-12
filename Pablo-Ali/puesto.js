class Puesto{
    nombre;
    salario;
    nivel;
    fechaDeCreacion;
    habilidades;

    constructor(nombre, salario, nivel, fechaDeCreacion, habilidades){
        this.nombre = nombre;
        this.salario = salario;
        this.nivel = nivel;
        this.fechaDeCreacion = fechaDeCreacion;
        this.habilidades = habilidades;
    }

    static createFromJsonString(json){
        //parsear el String en objeto
        const obj = JSON.parse(json);

        //creo el array para guardar las habilidades
        const habilidades = [];

        //itero para instanciar cada habilidad y guardarla en el array
        for(let habilidad of obj.habilidades){
            const habilidadInstancia = new Habilidad(habilidad.nombre, habilidad.aniosDeExperiencia, habilidad.excluyente);
            habilidades.push(habilidadInstancia);
        }
        
        //creo el nuevo puesto y lo retorno
        const puesto = new Puesto(obj.nombre, obj.salario, obj.nivel, obj.fechaDeCreacion, habilidades);
        return puesto;
    }

    createHtmlElement(){
        //creo el contenedor
        const div = document.createElement("div");

        //creo los elementos
        const h2Nombre = document.createElement("h2");
        const pSalario = document.createElement("p");
        const pNivel = document.createElement("p");
        const pFechaDeCreacion = document.createElement("p");
        const divHabilidades = document.createElement("div");
        const botonGuardar = document.createElement("button"); //creo el botón para guardar

        //asigno los elementos
        h2Nombre.textContent = this.nombre;
        pSalario.textContent = this.salario;
        pNivel.textContent = this.nivel;
        pFechaDeCreacion.textContent = this.fechaDeCreacion;
        for(let habilidad of this.habilidades){
            const elementoHabilidad = habilidad.createHtmlElement();
            divHabilidades.appendChild(elementoHabilidad);
        }
        //punto 6
        botonGuardar.textContent="Guardar";
        botonGuardar.onclick = () => {
            Puesto.guardar(this);
        }

        //asigno los elementos al contenedor y retorno
        div.append(h2Nombre, pSalario, pNivel, pFechaDeCreacion, divHabilidades, botonGuardar);
        
        return div;
    }

    
    static guardar(puesto){
        //traigo lo que está guardado en el local storage con la clave puestos
        let arrayLocalSorage = localStorage.getItem("puestos");

        //convierto el array JSON en array de objetos JS. Si no existe, lo creo
        let arrayJS = JSON.parse(arrayLocalSorage);
        if (!arrayJS){
            arrayJS = [];
        }

        //agrego el nuevo puesto
        arrayJS.push(puesto);

        //guardo en local storage
        localStorage.setItem("puestos", JSON.stringify(arrayJS));
    }
}