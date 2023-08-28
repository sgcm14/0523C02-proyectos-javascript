// Dado una secuencia de números determinar el mayor leído y el número de veces que aparece.
const prompt = require("prompt-sync")({ sigint: true });

// Función para determinar el mayor número y contar su frecuencia en la secuencia
function encontrarMayorYFrecuencia(secuencia) {
  let mayor = -Infinity;
  let frecuencia = 0;

  for (let numero of secuencia) {
    if (numero > mayor) {
      mayor = numero;
      frecuencia = 1;
    } else if (numero === mayor) {
      frecuencia++;
    }
  }

  return { mayor, frecuencia };
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Encontrar el mayor número y su frecuencia en la secuencia
const { mayor, frecuencia } = encontrarMayorYFrecuencia(secuencia);

console.log(`El mayor número en la secuencia es: ${mayor}`);
console.log(`Aparece ${frecuencia} veces en la secuencia.`);
