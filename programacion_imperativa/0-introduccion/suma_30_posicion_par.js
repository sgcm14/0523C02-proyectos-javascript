// Leer una secuencia de números y mostrar la suma de los 30 números que ocupan posiciones de lectura par.
const prompt = require("prompt-sync")({ sigint: true });

let sumaNumeros = 0;
let contadorPares = 0;
let posicion = 1;

while (contadorPares < 30) {
  const numero = parseFloat(prompt(`Ingrese el número ${posicion}:`));

  if (!isNaN(numero)) {
    if (posicion % 2 === 0) {
      sumaNumeros += numero;
      contadorPares++;
    }
    posicion++;
  } else {
    console.log("Valor inválido. Intente nuevamente.");
  }
}

console.log("La suma de los 30 números en posiciones de lectura par es:", sumaNumeros);
