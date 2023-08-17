/*sumaArray()
En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114*/

function sumArray(array) {
  if (array.length === 3) {
    let resultado= 0;
    for (var i = 0; i < array.length; i++) {
      resultado = resultado + array[i];
    }
    return resultado;
  }
}

console.log(sumArray([1,2,3])); // 6
console.log(sumArray([10, 3, 10])); // 23
console.log(sumArray([-5,100, 19])); //114