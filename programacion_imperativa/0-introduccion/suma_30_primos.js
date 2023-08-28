// Leer una secuencia de 30 números y mostrar la suma de los primos.
const prompt = require("prompt-sync")({ sigint: true });

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún número menor que él
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Función para leer una secuencia de números y calcular la suma de primos
function sumaPrimosEnSecuencia(secuencia) {
  let suma = 0;

  for (let numero of secuencia) {
    if (esPrimo(numero)) {
      suma += numero;
    }
  }

  return suma;
}

// Leer una secuencia de 30 números del usuario
const secuencia = [];
for (let i = 0; i < 30; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Calcular la suma de los números primos en la secuencia
const sumaPrimos = sumaPrimosEnSecuencia(secuencia);

console.log(`La suma de los números primos en la secuencia es: ${sumaPrimos}`);
