// Lee una secuencia de números y determina cual es el mayor de ellos.
const prompt = require("prompt-sync")({ sigint: true });

// Variable para almacenar el número mayor
let numeroMayor = Number.NEGATIVE_INFINITY;

// Ciclo para leer los números y encontrar el mayor
while (true) {
  // Solicitar al usuario ingresar un número o la tecla "F" para finalizar
  let entrada = prompt("Ingresa un número o presiona 'F' para finalizar:");

  // Salir del ciclo si se ingresa la tecla "F"
  if (entrada.toLowerCase() === "f") {
    break;
  }

  // Convertir la entrada a número
  let numero = parseFloat(entrada);

  // Verificar si la entrada es un número válido
  if (!isNaN(numero)) {
    if (numero > numeroMayor) {
      numeroMayor = numero; // Actualizar el número mayor si corresponde
    }
  } else {
    console.log("Entrada inválida. Ingresa un número o 'F' para finalizar.");
  }
}

// Mostrar el número mayor
if (numeroMayor !== Number.NEGATIVE_INFINITY) {
  console.log("El número mayor ingresado es: " + numeroMayor);
} else {
  console.log("No se ingresaron números válidos.");
}
