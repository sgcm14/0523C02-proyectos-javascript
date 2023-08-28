// Determina dado una secuencia de enteros los dos mayores.
const prompt = require("prompt-sync")({ sigint: true });

// Función para determinar los dos mayores números en una secuencia
function encontrarDosMayores(secuencia) {
  let primerMayor = -Infinity;
  let segundoMayor = -Infinity;

  for (let numero of secuencia) {
    if (numero > primerMayor) {
      segundoMayor = primerMayor;
      primerMayor = numero;
    } else if (numero > segundoMayor && numero !== primerMayor) {
      segundoMayor = numero;
    }
  }

  return { primerMayor, segundoMayor };
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Encontrar los dos mayores números en la secuencia
const { primerMayor, segundoMayor } = encontrarDosMayores(secuencia);

console.log(`El primer mayor número es: ${primerMayor}`);
console.log(`El segundo mayor número es: ${segundoMayor}`);
