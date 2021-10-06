//Existen tres formas de inicializar string
var primeraForma = "PrimeraForma";
var segundaForma = 'SegundaForma';
var terceraForma = `Esto es un template`;
var otraVariable = 8;
var otraVariable2 = 10;

//Concatenacion 
console.log(primeraForma + " " + segundaForma);
//Concatenacion de variables template
console.log(`${primeraForma} ${segundaForma}`);
console.log(eval(`${otraVariable} + ${otraVariable2}`));
console.log(`si{primeraforma} + si{otraVariable2}`);



//Ventaja de un Template
primeraForma = "Esto es un mensaje en varias lineas" + "\n" + "en varias lineas";
console.log(primeraForma);

terceraForma = `esto es un mensaje en 
varias lineas`;
console.log(terceraForma);

//obtener el tamaño de caracteres en un string
console.log(primeraForma.length);
//obtener un caracter en especial de una posicion
console.log(primeraForma.charAt(12));
console.log(primeraForma[11]);
//comparar string
var caracterA = "a";
var caracterB = 'b';
console.log(caracterA < caracterB);

//eval()
console.log(eval(8 + 5));
//Pasar un tipo de dato a un tipo de dato Number
console.log(Number("8"));