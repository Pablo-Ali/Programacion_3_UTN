class Serie{

    _id;
    _url;
    _name;
    _language;
    _genres;
    _image;

    constructor(id, url, name, language, genres, image){
        this._id = id;
        this._url = url;
        this._name = name;
        this._language = language;
        this._genres = genres;
        this._image = image;
    }
    
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get url(){
        return this._url;
    }
    set url(url){
        this._url = url;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get language(){
        return this._language;
    }
    set language(language){
        this._language = language;
    }

    get genres(){
        return this._genres;
    }
    set genres(genres){
        this._genres = genres;
    }

    get image(){
        return this._image;
    }
    set image(image){
        this._image = image;
    }

    toJsonString(){
        //crear un objeto limpio para pasar (para que no queden los "_" antes de cada atributo)
        const obj = {
            id: this._id,
            url: this._url,
            name: this._name,
            language: this._language,
            genres: this._genres,
            image: this._image
        };
        //creo el JSON a partir del objeto y lo retorno
        return JSON.stringify(obj);
    }

    static createFromJsonString(json){
        //parsear
        const obj = JSON.parse(json);

        //creo la nueva serie con los datos del JSON y la retorno
        return new Serie(obj.id, obj.url, obj.name, obj.language, obj.genres, obj.image);
    }

    createHtmlElement(){
        //creo el contenedor
        const div = document.createElement("div");

        //creo elementos
        const h2Nombre = document.createElement("h2");
        const pLanguage = document.createElement("p");
        const pGenres = document.createElement("p");
        const imgImagen = document.createElement("img");
        const aMarcoImagen = document.createElement("a"); //creo una etiqueta <a></a> para poder hacer click sobre la img
        const botonGuardar = document.createElement("button"); //creo el botón para guardar series

        let cadena = "";
        let contador = 1; //esto es para que no se imprima el último guión. Debe haber algo más fácil, pero es lo que se me ocurrió
        for (let g of this._genres){
            if (contador < this._genres.length){
                cadena += g + " - ";
            }else{
                cadena += g;
            }
            contador++;
        }
        //asigno los elementos
        h2Nombre.textContent = this._name;
        pLanguage.textContent = this._language;
        pGenres.textContent = cadena;
        imgImagen.src = this._image;
        aMarcoImagen.href = this._url;
        aMarcoImagen.target = "_blank"; //se abre en una pestaña nueva
        aMarcoImagen.append(imgImagen);//vinculo la imagen al marco
        botonGuardar.textContent="Guardar";
        botonGuardar.onclick = () => {
            this.guardarSerie();
        }

        //asigno los elementos al contenedor y retorno
        div.append(h2Nombre, pLanguage, pGenres, aMarcoImagen, botonGuardar);

        return div;
    }

    guardarSerie(){
        //traigo lo que está guardado en el local storage con la clave series
        let arrayLocalSorage = localStorage.getItem("series");

        //convierto el array JSON en array de JS. Si no existe, lo creo
        let arrayJS = JSON.parse(arrayLocalSorage);
        if (!arrayJS){
            arrayJS = [];
        }

        //agrego la nueva serie como un array de JS (primero paso la instancia a String y luego a array)
        arrayJS.push(JSON.parse(this.toJsonString()));

        //guardo todas las series en el local storage
        localStorage.setItem("series", JSON.stringify(arrayJS));
    }
}