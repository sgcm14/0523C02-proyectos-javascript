/**
 * En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array.

  Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.
 */

const likes = [56, 23, 78, 12, 45, 67, 89, 34, 9, 51, 65, 22, 76, 88, 33];

function likesSort(array) {
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

likesSort(likes);

const mayorLikes = likes[likes.length - 1];
const segundoMayorLikes = likes[likes.length - 2];
const tercerMayorLikes = likes[likes.length - 3];
const menorLikes = likes[0];

console.log(`Array de Likes ordenado: ${likes}`);
console.log(`La mayor cantidad de likes fue: ${mayorLikes}`);
console.log(`La segunda mayor cantidad de likes fue: ${segundoMayorLikes}`);
console.log(`La tercera mayor cantidad de likes fue: ${tercerMayorLikes}`);
console.log(`La menor cantidad de likes fue: ${menorLikes}`);
