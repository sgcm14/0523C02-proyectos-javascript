/**
 * A partir de él siguiente array de edades nos solicitan realizar lo siguiente
    const edades = [33, 27, 34, 30, 34, 25];
 */

const edades = [33, 27, 34, 30, 34, 25];

/**
 * Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
    [25, 27, 30, 33, 34, 34]
 */

function ordenarAsc(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

/**
  *  Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
    [34, 34, 33, 30, 27, 25]
  */

function ordenarDesc(array) {

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(ordenarAsc(edades));
console.log(ordenarDesc(edades));