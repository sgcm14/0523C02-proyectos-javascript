/*Deberás crear una función llamada arrayHandler que reciba dos arreglos 
de igual largo como parámetros y muestre en la consola 
“Soy {elemento de array 1} y yo soy {elemento de array 2}”. 
    Ejemplo:
    --------

    arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 

    Soy 1 y yo soy h

    Soy 2 y yo soy o

    Soy 3 y yo soy l

    Soy 4 y yo soy a */

const prompt = require("prompt-sync")({ sigint: true });

function arrayHandler(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("No son del mismo largo");
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
  }

}

const array1 = prompt("Ingrese primer array separado por comas: ").split(",");
const array2 = prompt("Ingrese segundo array separado por comas: ").split(",");
arrayHandler(array1, array2);