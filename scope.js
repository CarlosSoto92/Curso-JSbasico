
//Una variable con Scope global se escribe fuera de una funcion y es accesible en cualquier parte del codigo
var miNombre = "Carlos"

function nombre(){
    //Una variable con Scope local solo es util dentro de la funcion.
    var miApellido = "Soto"
    console.log (miNombre + " " + miApellido)
}
nombre();
