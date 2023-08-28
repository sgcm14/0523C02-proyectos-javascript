// Dada un entero visualizar sus divisores.
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

// Leer un número del usuario
const numero = parseInt(prompt("Ingresa un número:"));

// Obtener los divisores del número
const divisores = obtenerDivisores(numero);

console.log(`Los divisores de ${numero} son: ${divisores.join(", ")}`);
