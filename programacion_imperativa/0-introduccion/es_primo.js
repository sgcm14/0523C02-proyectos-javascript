//Leer un número y determinar si es o no es primo.
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

// Obtener un número del usuario
const numero = parseInt(prompt("Ingresa un número:"));

if (esPrimo(numero)) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}
