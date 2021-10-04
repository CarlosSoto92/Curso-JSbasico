

//El hoisting es cuando intetamos usar una variable antes de declararla

console.log(MiNombre)  //Uso de la varable primero

var MiNombre = "Carlos" // Declaracion de la variable despues de su uso, hara que se la primera funcion termine en undefined


var miNombre = undefined

console.log(miNombre);

miNombre = "Carlos"


hola();  //De igual modo podemos tener errores si  intentamos invocar una funcion antes de declararla

function hola (Nombre) {   // Si usamos variables que no estan declaradas ni inicializafas, la funcion se hara con valores de undefinded
        console.log("hola " + Nombre)
}

var Nombre = "Jorge"



