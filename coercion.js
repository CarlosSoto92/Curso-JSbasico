
4 + "7" = "47" ; //numero mas string es igual a un string

4 * "7" = 28 ;  //numero multiplicado por string es igual a un numero

2 + true = 3 ; // numero mas boleano true que es 1 es igual a un numero

false - 3 = -3 ;  // numero - boleano false que es 0 es igual a un numero s

var a = 4 + "7" ;  //Coercion implicita de 2 valores diferentes que por el operadpr de + JS asume que es una concatenacion de strings

typeof a

var b = 4 * "8"; // Coercion implicita de 2 valores diferentes que ppor el operador * JS entiende que deseabmos multiplicar cosas y por ende vuelve numero el string y devuelve un numero


//Ejecicios de coercion explicita
var c = 20;

var d = c + "9"

var f = String(c) // Corcion explicita por usar el "metodo" -String convertimos un numero en String

var e = Number(f) //Coercion explicita con el "metodo" Number conviertiendo un String en numero.


