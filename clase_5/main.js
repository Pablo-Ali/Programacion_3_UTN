//crear variables

let nombre = "Pablo"

nombre = 88 //no es fuertemente tipado

const apellido = "Ali"

//Imprimimos con console.log (recibe parámetros infinitos)

console.log(nombre, apellido, 88, "algo", {}, [], "otra cosa")

// Tipos de datos
// string -> cadenas de texto
// number -> cualquier número: 88, 88.5 (no hay distinción por defecto entre ints y floats)
// boolean -> true o false
// object -> {} -> clave/valor para distintas propiedades
// nulo -> valor nulo dado por el desarrollador
// undefined -> valor que llega sin definir ("vacío")
// arrays -> []
// funciones -> function nombre(parametros)
// funciones lambda -> (parametros) => {}
// symbol -> 

// declarar un objeto sin necesidad de declarar una clase e instanciarla. Es una instancia suelta que no pertenece a ninguna clase
let persona = {
    nombre: "Pablo",
    apellido: "Ali",
    edad: 32,
    etc: "etc.",
    hablarMucho: function hablarMucho() {
        console.log("Dar clases");
    },
}; //este ";" es el cierre de la declaración let, no es la llave de una función

persona.hablarMucho();

// declarar primero la clase
class Persona {
    nombre;
    apellido;
    edad;
    etc;

    hablarMucho(){
        console.log("Dar clases")
    }
}

let otraPersona = new Persona();

otraPersona.nombre = "Agus";
otraPersona.hablarMucho();

//crear una función
function nombreDeFuncion(param1, param2){
    console.log(param1 + param2)
}

nombreDeFuncion(55, 55)

//null y undefined

let edad;

console.log(edad); // el valor llega vacío
console.log(otraPersona.edad);

edad = null; // yo asigno que su valor sea nulo
console.log(edad);

// condicionales e iteraciones

if(true){
    console.log("Verdadero");
}else{
    console.log(false);
}

let dia = 3;
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
}

for(let i = 0; i <= 99 ; i++){
    console.log(i);
}

let j=0
do{
    j++;
    console.log("hola");
}while (j <= 10);