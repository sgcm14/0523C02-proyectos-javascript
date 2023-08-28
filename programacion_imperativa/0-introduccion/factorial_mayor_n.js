// Determina de una secuencia de enteros aquel factorial que es mayor.
const prompt = require("prompt-sync")({ sigint: true });

// Función para calcular el factorial de un número
function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Encontrar el número cuyo factorial es mayor en la secuencia
let mayorFactorial = -Infinity;
let numeroConMayorFactorial = null;

for (let numero of secuencia) {
  const fact = factorial(numero);
  if (fact > mayorFactorial) {
    mayorFactorial = fact;
    numeroConMayorFactorial = numero;
  }
}

if (numeroConMayorFactorial !== null) {
  console.log(`El número cuyo factorial es mayor en la secuencia es: ${numeroConMayorFactorial}`);
  console.log(`Su factorial es: ${mayorFactorial}`);
} else {
  console.log("No se ingresaron números válidos en la secuencia.");
}

