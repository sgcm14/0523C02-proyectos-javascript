/**
 * Ejercicio 1: 
 * Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son: 
    Si ambos son tipo de dato Number deberá retornar su multiplicación. 
    Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
    Si ambos son tipo de dato Booleano deberán retornar false.
 */
function VerificarValoresTipados(valor1, valor2) {
  let resultado;

  if (typeof valor1 === 'number' && typeof valor2 === 'number') {
    resultado = valor1 * valor2;
  } else if (typeof valor1 === 'string' && typeof valor2 === 'string') {
    resultado = valor1 + valor2;
  } else if (typeof valor1 === 'boolean' && typeof valor2 === 'boolean') {
    resultado = false;
  } else {
    resultado = "Tipos de datos no permitidos";
  }

  return resultado;
}

console.log(VerificarValoresTipados(2, 3));
console.log(VerificarValoresTipados("Hola", "Mundo"));
console.log(VerificarValoresTipados(true, false));
console.log(VerificarValoresTipados(5, "Hola"));
