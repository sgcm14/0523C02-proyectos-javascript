// Dada una secuencia de enteros determinar los que son primos y además tienen como dígito menos significativo un 7.
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

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Encontrar los números primos con dígito menos significativo 7
const primosCon7 = secuencia.filter(numero => esPrimo(numero) && numero % 10 === 7);

console.log(`Los números primos con dígito menos significativo 7 son: ${primosCon7.join(", ")}`);
