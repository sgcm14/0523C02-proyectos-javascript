//  Dada una secuencia de enteros determinar para cada una los divisores.
const prompt = require("prompt-sync")({ sigint: true });

// Función para obtener los divisores de un número
function obtenerDivisores(numero) {
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Calcular y mostrar los divisores para cada número en la secuencia
for (let numero of secuencia) {
  const divisores = obtenerDivisores(numero);
  console.log(`Los divisores de ${numero} son: ${divisores.join(", ")}`);
}
