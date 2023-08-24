//Leer una secuencia de números y mostrar los 30 primeros pares leídos.
const prompt = require("prompt-sync")({ sigint: true });

let numerosPares = [];
let contadorPares = 0;

while (contadorPares < 30) {
  const numero = parseFloat(prompt("Ingrese un número:"));

  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
      contadorPares++;
    }
  } else {
    console.log("Valor inválido. Intente nuevamente.");
  }
}

console.log("Los primeros 30 números pares ingresados son:", numerosPares);

