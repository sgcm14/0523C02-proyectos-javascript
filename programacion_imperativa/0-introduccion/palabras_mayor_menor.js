// Dado una secuencia de palabras determinar el mayor y menor lexicográficamente.
const prompt = require("prompt-sync")({ sigint: true });

// Función para determinar la palabra mayor y menor lexicográficamente en una secuencia
function encontrarMayorYMenorPorLongitud(secuencia) {
  let mayor = secuencia[0];
  let menor = secuencia[0];

  for (let palabra of secuencia) {
    if (palabra.length > mayor.length) {
      mayor = palabra;
    }

    if (palabra.length < menor.length) {
      menor = palabra;
    }
  }

  return { mayor, menor };
}

// Leer una secuencia de palabras del usuario
const secuencia = [];
const cantidadPalabras = parseInt(prompt("Ingrese la cantidad de palabras en la secuencia:"));

for (let i = 0; i < cantidadPalabras; i++) {
  const palabra = prompt(`Ingresa la palabra ${i + 1}:`);
  secuencia.push(palabra);
}

// Encontrar la palabra con mayor y menor longitud en la secuencia
const { mayor, menor } = encontrarMayorYMenorPorLongitud(secuencia);

console.log(`La palabra con mayor longitud es: ${mayor}`);
console.log(`La palabra con menor longitud es: ${menor}`);

