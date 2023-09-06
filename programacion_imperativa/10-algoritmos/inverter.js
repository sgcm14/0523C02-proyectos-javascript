/**
 * Escribir una función de JavaScript que invierta
 * un número. Por ejemplo, si x = 32443,
 * la salida debería ser 34423.
 */

function invertirNumero(numero) {
  let cadena = numero.toString();

  // Invierte la cadena
  let cadenaInvertida = cadena.split("").reverse().join("");

  // Convierte la cadena invertida de nuevo a un número
  let numeroInvertido = parseInt(cadenaInvertida);

  return numeroInvertido;
}

const numeroOriginal = 32443;
const numeroInvertido = invertirNumero(numeroOriginal);
console.log(numeroInvertido);
