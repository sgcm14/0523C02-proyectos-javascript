//Leer una secuencia de números y mostrar cuales de ellos es el mayor y el menor, el proceso finalizará cuando se introduzca un número impar.
const prompt = require("prompt-sync")({ sigint: true });

let numeros = [];
let numero;

while (true) {
  numero = parseFloat(prompt("Ingrese un número:"));

  if (isNaN(numero)) {
    console.log("Valor inválido. Intente nuevamente.");
  } else {
    numeros.push(numero);
    if (numero % 2 !== 0) {
      break;
    }
  }
}

if (numeros.length === 0) {
  console.log("No se ingresaron números.");
} else {
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  console.log("Números ingresados:", numeros);
  console.log("El mayor número es:", mayor);
  console.log("El menor número es:", menor);
}
