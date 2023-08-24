/*Deberás crear una función llamada sumatoria que reciba un 
número como parámetro y que devuelva la sumatoria de todos 
sus números anteriores, incluso ese mismo. 
    Ejemplo:
    -------

    sumatoria(3) debe retornar 6 porque hace (1+2+3)

    sumatoria(8) debe retornar 36 */

const prompt = require("prompt-sync")({ sigint: true });

function sumatoria(numero) {
  let result = 0;
  for (let i = 1; i <= numero; i++) {
    result += i;
  }
  return result;
}

const numeroIngresado = parseInt(prompt("Ingrese un número: "));

console.log(sumatoria(numeroIngresado));