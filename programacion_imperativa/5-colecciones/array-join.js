/*Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/

function join(array) {
  if (array.length === 4) {
    resultado='';
    for (var i = 0; i < array.length; i++) {
      resultado = resultado + array[i];
    }
    return resultado;
  }
}

console.log(join(["h","o","l","a"]));
console.log(join(["c","h","a","u"]));