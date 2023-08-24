//Calcular la media de una secuencia de números.

const prompt = require("prompt-sync")({ sigint: true });

// Solicitar al usuario la cantidad de números
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));

if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
  console.log("Cantidad inválida. Por favor, ingrese un número válido mayor que cero.");
} else {
  let suma = 0;

  // Solicitar y sumar los números
  for (let i = 1; i <= cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    if (!isNaN(numero)) {
      suma += numero;
    } else {
      console.log(`El valor ingresado para el número ${i} no es válido. Se omitirá.`);
    }
  }

  // Calcular y mostrar la media
  const media = suma / cantidadNumeros;
  console.log(`La media de los ${cantidadNumeros} números ingresados es: ${media.toFixed(2)}`);
}
