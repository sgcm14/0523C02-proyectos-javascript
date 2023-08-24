//Leer una secuencia de números y mostrar su producto, el proceso finalizará cuando el usuario pulse a la tecla F.
const prompt = require("prompt-sync")({ sigint: true });

// Variable para almacenar el producto
let producto = 1;

// Ciclo para leer los números y calcular el producto
while (true) {
  // Solicitar al usuario ingresar un número o la tecla "F"
  let entrada = prompt("Ingresa un número o presiona 'F' para finalizar:");

  // Salir del ciclo si se ingresa la tecla "F"
  if (entrada.toLowerCase() === "f") {
    break;
  }

  // Convertir la entrada a número
  let numero = parseFloat(entrada);

  // Verificar si la entrada es un número válido
  if (!isNaN(numero)) {
    producto *= numero; // Multiplicar el número al producto
  } else {
    console.log("Entrada inválida. Ingresa un número o 'F' para finalizar.");
  }
}

// Mostrar el producto de los números ingresados
console.log("El producto de los números ingresados es: " + producto);

