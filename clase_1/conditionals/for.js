/*
 Bucle
 For
*/
//For
//Sintaxis -> for(iterator; condition; end) {code}
//iterator -> declaracion de una variable y se usa para 
//inicializar la iteracion
//condition ->  Se ejecuta el <code> siempre y cuando 
//la condicion sea verdadera
//end -> una expresion final que se evalua cada vez que 
//se ejecuto una iteracion del bucle
//contador++ -> contador = contador + 1;
//contador+2 -> contador = contador + 2;
//contador-4 -> contador = contador - 4;
for (var contador = 1; contador <= 3; contador++) {
    console.log(contador);
}

var ciudades = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

//Por favor imprimir los valores de las posiciones pares
//de la siguiente forma
//'posicion <posicionArreglo> es par y su valor es <valorDelaPosicionDelArreglo>'
// y los valores de las posiciones impares
//de la siguiente forma
//'posicion <posicionArreglo> es impar y su valor es <valorDelaPosicionDelArreglo>'

for (var posicionTemp = 0; posicionTemp < ciudades.length; posicionTemp++) {
    if (posicionTemp % 2 == 0)
        console.log(`Posicion ${posicionTemp} es par y su valor es ${ciudades[posicionTemp]}`);

    else if (posicionTemp % 2 == 1)
        console.log(`Posicion ${posicionTemp} es impar y su valor es ${ciudades[posicionTemp]}`);

}

//matriz
var dosDimensiones3x3 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];


/* Debe aparecer
suma de las diagonales
0 1 2
3 4 5
6 7 8
la suma de las diagonales 
*/
/*
var sumatoria = 0;
for (var iteradorPrincipal = 0; iteradorPrincipal <= dosDimensiones3x3.length-1; iteradorPrincipal++) {
    var matrizInternoTemperoal = dosDimensiones3x3[iteradorPrincipal];
    for(var iteradorSecunario = 0; iteradorSecunario <= matrizInternoTemperoal.length-1; iteradorSecunario++){
        if(iteradorPrincipal == iteradorSecunario){
        sumatoria = sumatoria + dosDimensiones3x3[iteradorPrincipal[iteradorSecunario]];
        }
    }
    for(var iteradorTerciario = matrizInternoTemperoal.length-1; iteradorTerciario >= 0; iteradorTerciario--) {
        if(iteradorPrincipal + iteradorTerciario == matrizInternoTemperoal.length-1){
            sumatoria = sumatoria + dosDimensiones3x3[iteradorPrincipal[iteradorTerciario]];
            }
    }
}
console-log(sumatoria);

for(var iterador; iterador <= dosDimensiones3x3.length-1; iterador++){
    sumatoria += dosDimensiones3x3[iterador][iterador];
    sumatoria += dosDimensiones3x3[iterador][dosDimensiones3x3.length-1 - iterador];
}
console-log(sumatoria);
*/

/*dosDimensiones3x3[0][2]
dosDimensiones3x3[1][1]
dosDimensiones3x3[2][0]
*/
n