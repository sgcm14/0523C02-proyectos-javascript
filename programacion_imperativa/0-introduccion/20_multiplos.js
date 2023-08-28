// Dado una secuencia de enteros de cada uno determina sus 20 primeros múltiplos positivos y enteros.
const prompt = require("prompt-sync")({ sigint: true });

// Función para obtener los primeros n múltiplos de un número
function obtenerMultiplos(numero, n) {
  const multiplos = [];

  for (let i = 1; i <= n; i++) {
    multiplos.push(numero * i);
  }

  return multiplos;
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  secuencia.push(numero);
}

// Calcular y mostrar los primeros 20 múltiplos de cada número en la secuencia
for (let numero of secuencia) {
  const multiplos = obtenerMultiplos(numero, 20);
  console.log(`Los primeros 20 múltiplos de ${numero} son: ${multiplos.join(", ")}`);
}

