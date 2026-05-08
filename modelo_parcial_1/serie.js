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

        let cadena = "";
        for (let g of this._genres){
            cadena += g + " ";
        }
        //asigno los elementos
        h2Nombre.textContent = this._name;
        pLanguage.textContent = this._language;
        pGenres.textContent = cadena;
        imgImagen.src = this._image;

        //asigno los elementos al contenedor y retorno
        div.append(h2Nombre, pLanguage,pGenres,imgImagen);
        return div;
    }
}