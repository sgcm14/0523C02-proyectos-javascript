/*4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.*/

const prompt = require("prompt-sync")({ sigint: true });

const numero = parseInt(prompt("Ingrese número: "));


function factorial(valor) {

  let acumulador = 1;
  for (let i = 1; i <= valor; i++) {
    acumulador = acumulador * i;
  }
  console.log(`El factorial de ${valor} es: ${acumulador}`);

}

factorial(numero);