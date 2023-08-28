// Determina de una secuencia de enteros aquel que es mayor pero además es primo.
const prompt = require("prompt-sync")({ sigint: true });

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Encontrar el número mayor que además es primo en la secuencia
let mayorPrimo = -Infinity;

for (let numero of secuencia) {
  if (numero > mayorPrimo && esPrimo(numero)) {
    mayorPrimo = numero;
  }
}

if (mayorPrimo !== -Infinity) {
  console.log(`El mayor número primo en la secuencia es: ${mayorPrimo}`);
} else {
  console.log("No hay ningún número primo en la secuencia.");
}
