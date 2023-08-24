//Leer una secuencia de números y sumar solo los pares mostrando el resultado del proceso.
const prompt = require("prompt-sync")({ sigint: true });

const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
  console.log("Cantidad inválida. Por favor, ingrese un número válido mayor que cero.");
} else {
  let sumaPares = 0;

  for (let i = 1; i <= cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    
    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        sumaPares += numero;
      }
    } else {
      console.log(`El valor ingresado para el número ${i} no es válido. Se omitirá.`);
    }
  }

  console.log(`La suma de los números pares ingresados es: ${sumaPares}`);
}
