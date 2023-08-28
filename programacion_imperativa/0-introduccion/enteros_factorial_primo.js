// Dada una secuencia de enteros determinar para cada uno su factorial y si es o no primo.
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

// Calcular y mostrar el factorial y si es primo para cada número en la secuencia
for (let numero of secuencia) {
  const fact = factorial(numero);
  const primo = esPrimo(numero);

  console.log(`Número: ${numero}`);
  console.log(`Factorial: ${fact}`);
  console.log(`Es primo: ${primo}`);
  console.log('---');
}
