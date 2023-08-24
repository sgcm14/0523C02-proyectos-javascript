/*Deberás crear una función llamada **nuevoArreglo** que reciba 
un número como parámetro y que devuelva un nuevo arreglo con 
tantos elementos como el número que le hayas pasado. 
    Ejemplo:
    -------
    nuevoArreglo(5) debe retornar [1,2,3,4,5]

    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

const prompt = require("prompt-sync")({ sigint: true });

function nuevoArreglo(numero) {
  let array = [];
  for (let i = 1; i <= numero; i++) {
    //array[i-1]=i;
    array.push(i);
  }
  return array;
}

const numeroIngresado = parseInt(prompt("Ingrese un número: "));
console.log(nuevoArreglo(numeroIngresado));