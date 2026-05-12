class Habilidad{
    nombre;
    aniosDeExperiencia;
    excluyente;

    constructor(nombre, aniosDeExperiencia, excluyente){
        this.nombre = nombre;
        this.aniosDeExperiencia = aniosDeExperiencia;
        this.excluyente = excluyente
    }

    createHtmlElement(){
        //creo el contenedor
        const div = document.createElement("div");

        //creo los elementos
        const h3Nombre = document.createElement("h3");
        const pAniosExp = document.createElement("p");
        const pExcluyente = document.createElement("p");

        //asigno los elementos
        h3Nombre.textContent = this.nombre;
        pAniosExp.textContent = this.aniosDeExperiencia;
        pExcluyente.textContent = this.excluyente;

        //asigno los elementos al contenedor y retorno
        div.append(h3Nombre, pAniosExp, pExcluyente);
        
        return div;
    }
}