 //Object
 //Dos formas de escribir objetos
 //Primera forma
 var persona = new Object();
 persona.nombre = 'Gustavo';
 persona.apellido = 'Garcia';
 persona.edad = 32;

 //segunda forma
 var personaDos = {
     nombre: 'Gustavo',
     apellido: 'Garcia',
     edad: 32,
     toString: function() { "Hola esto es algo diferente" }
 };

 //Hay dos formas de perdir un valor de una propiedad
 //Primera forma objeto[]
 console.log(persona['nombre']);
 console.log(personaDos['nombre']);
 //Segunda forma objeto[]
 console.log(persona.edad);
 console.log(personaDos.edad);
 //Cuando invocamos propiedades inexistentes 
 console.log(personas['celular']);
 console.log(personaDos.email);
 //Cuando quiero agregar propiedades una vez ya se creo el objeto
 personaDos['celular'] = 1231231243;
 //objeto.propiedad

 persona['email'] = 'felipehg@gmail.com';
 persona.celular = 124312321;

 console.log(persona['celular']);
 console.log(persona.email, persona.celular);

 var informacion = {
     profile: {
         name: "Gustavo",
         apellido: "Garcia",
         edad: 32
     },
     estudio: {
         primaria: {
             colegio: "Liceo Colombia"
         },
         secundaria: {
             colegio: "Liceo Santa Barbara"

         }
     },
     gustos: {
         hobbies: {

         },
         Comida: {

         }

     }

 }
 console.log(informacion['estudio'], ['secundaria'], ['colegio']);
 console.log(informacion.estudio.primaria.colegio);
 //Eliminar propiedades de un objeto mezclando
 delete informacion.profile['edad'];
 console.log(informacion['profile']['edad']);
 //otra forma
 delete informacion.profile.edad;
 console.log(informacion['profile']['edad']);


 //Utilizar los console.log
 //console.log(variable + variable2);
 //console.log(variable, variable2);
 //trate de concaquetar cono string
 console.log("objeto " + persona);
 //Imprimalo como el dato que es
 console.log("objeto ", persona);

 console.log("numero " + 8);
 console.log("numero ", 8);

 console.log("vector " + [1, 2, 3, 4, 5]);
 console.log("vector ", [1, 2, 3, 4, 5]);

 //comparar objetos
 //dos objetos nunca son iguales, incluso si tinen la misma propiedad
 var vehiculo = {
     modelo: 2014

 }
 var vehiculoDos = {
     modelo: 2014

 }
 var vehiculo = {
     modelo: 2014

 }
 console.log(vehiculo == vehiculoDos);
 console.log(vehiculo === vehiculoDos);

 //La unica manera de comparar objetos es qu tengan la misma referencia

 var camion = {
     marca: 'BMW'

 };

 var camionDos = camion;
 console.log(camion == camionDos);
 console.log(camion === camionDos);