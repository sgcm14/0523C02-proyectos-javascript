/*3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100*/

const prompt = require("prompt-sync")({ sigint: true });

const numero1 = parseInt(prompt("Ingrese primer número: "));
const numero2 = parseInt(prompt("Ingrese segundo número: "));


function sumatoria(valor1,valor2) {
  console.log(`la sumatoria de todos los números
  entre ${valor1} y ${valor2} son:`)
  let sumatoria = 0;
  for (let i = valor1; i <= valor2; i++) {
    sumatoria+=i;
    console.log(sumatoria);
  }
  console.log("------------------------")
  console.log(`la suma total es: ${sumatoria}`);
 
}

sumatoria(numero1,numero2);