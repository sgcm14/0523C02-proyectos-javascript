/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/

const prompt = require("prompt-sync")({ sigint: true });

const numero1 = parseInt(prompt("Ingrese primer número: "));
const numero2 = parseInt(prompt("Ingrese segundo número: "));


function trestEnTres(valor1,valor2) {
  console.log(`los números entre ${valor1} y ${valor2} son:`)
  for (let i = valor1; i <= valor2; i+=3) {
    console.log(i);
  }
 
}

trestEnTres(numero1,numero2);