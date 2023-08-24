/*Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, 
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código 
para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre 
en la consola la palabra pasada por parámetro.*/

const prompt = require("prompt-sync")({ sigint: true });

function loopDeImpares(numero, palabra) {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
    let result = i + numero;
    if (!(result % 2 === 0)) {
      console.log(palabra);
    }
  }
}

const numeroIngresado = parseInt(prompt("Ingrese un número: "));
const palabraIngresada = prompt("Ingrese una palabra: ");

loopDeImpares(numeroIngresado, palabraIngresada);