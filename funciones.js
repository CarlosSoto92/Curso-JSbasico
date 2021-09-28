
//2 tipos de funciones//
//Declarativas
//Function es una palabra reservada para JS


function miFuncion() {
        return 3
}



//Expresión o anonimas (Que son creadas dentro de una variable//

var miFuncion = function(a,b) {

    return a + b;
}
  //Para utilizar las funciones hay que invocarlas o llamarlas//

 //las declarativas las llamamos con el nombre de la funcion esta

 document.write(miFuncion(1,5);)

///las expresivas se invocan con el nombre de la variable

function sumar(a,b){
  var resultado= a+b;

  return resultado;
}

sumar(1,5)

var nombre = function(nombre){
  console.log(`Hola ${nombre}`)
  return nombre
}

nombre(‘Diego’);
