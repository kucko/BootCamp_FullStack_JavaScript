//variables de funcion
//creacion Sintaxis -> var nombreFuction = function(parametros?) {code}
//invocacion Sintaxis -> var nombreFuction(parametros?)
var funcion = function() {
    console.log("HOla todos");
}
funcion();

var funcionConParametros = function(nombre, apellido) {
    console.log(`Bienvenido ${nombre} ${apellido}`);
}
funcionConParametros(`Giraldo`, `Hincapie`);
/*
//declarar variable
var a;
//iniciar variable
a = 0;
//declarar e inicilizar variable
var b = 0;
*/


//funciones declarativas
//creacion sintaxis -> function nombreFuncion(parametro?) {code}
//invocacion sintaxis -> nombreFuncionparametros?)
function funcionDos() {
    console.log(`Mi nombre es Andres Giraldo`);
}

funcionDos();

function suma(sumando1, sumando2) {
    console.log(sumando1 + sumando2);
}
suma(2, 0);

function division(dividendo, divisor) {
    console.log(eval(dividendo / divisor));
}

division(2, 0);

//Nan cuando es la funcion o cuando 

function multiplicacion(multiplicando1, multiplicando2) {
    return multiplicando1 = multiplicando2;
    //Despues de un return no imprime nada 
}
console.log(multiplicacion(2, 3));