/* 
Crea una función que tome un arreglo de números y devuelva el producto de los números impares.
*/

function producto(arreglo) {
  let total = 1;
  arreglo.forEach(element => {
    if (element % 2 == 1) {
      total *= element;
    }
  });
  return total
}

console.log(producto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
