/*Array inverso
En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.*/

/*1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/
function imprimirInverso(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

let miArray = [1, 2, 3, 4, 5];
imprimirInverso(miArray);

/*2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.*/

function arrayInverso(array) {
  let newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
}

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log('array: ', peliculas);
console.log('array inverso: ',arrayInverso(peliculas));