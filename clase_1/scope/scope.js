// scope ambito alcance
var variable = 5;
console.log(variable);
function nombre() {
    console.log("yo soy una funcion");

}

(function(){
    var variable = 5;
    console.log(variable);
}());

//funcion window
var variable = 5;
console.log(variable);

// global es de la funcion 
//local es del bloque que lo contiene
var variable = 5;
console.log(variable);
for(var i = 0; 1< 10; i++){
    console.log(i);
}
console.log(i);

function otroEjemplo(){
    var i = 0;
    console.log(i);
}
otroEjemplo();
console.log(i);

for(let i = 0; i<10)




