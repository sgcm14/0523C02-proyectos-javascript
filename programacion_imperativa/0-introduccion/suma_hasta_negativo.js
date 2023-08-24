//Leer una secuencia de números, hasta que se introduce un número negativo y mostrar la suma de dichos números.
const prompt = require("prompt-sync")({ sigint: true });
// Variable para almacenar la suma de los números
let suma = 0;

// Ciclo para leer los números y acumular la suma
while (true) {
  // Solicitar al usuario ingresar un número
  let numero = parseFloat(prompt("Ingresa un número:"));

  // Verificar si el número ingresado es negativo
  if (numero < 0) {
    break; // Salir del ciclo si es negativo
  }

  // Sumar el número ingresado a la suma total
  suma += numero;
}

// Mostrar la suma de los números ingresados
console.log("La suma de los números ingresados es: " + suma);



