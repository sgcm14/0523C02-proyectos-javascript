/**
 * Ejercicio 2:
 *Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente
	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función. 
 */

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

function bubbleSort(array, orden) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if ((orden === "ASC" && array[j] > array[j + 1]) || (orden === "DESC" && array[j] < array[j + 1])) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log("Array antes de ordenar:", arrayDeNumeros);

//... para copiar el arreglo sin afectar el original

const arrayDeNumerosAsc = bubbleSort(...[arrayDeNumeros], "ASC"); // Para ordenar en orden ascendente
console.log("Array después de ordenar en ASC:", arrayDeNumerosAsc);

const arrayDeNumerosDesc = bubbleSort(...[arrayDeNumeros], "DESC"); // Para ordenar en orden descendente
console.log("Array después de ordenar en DESC:", arrayDeNumerosDesc);

console.log("***********************************************************");