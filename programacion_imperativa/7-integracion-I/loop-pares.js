/*Deberás crear una función llamada loopDePares que reciba como parámetro 
un número y haga un loop de 0 a 100 mostrando en la consola cada número 
del loop. En caso de que el número de la iteración sumado con el número 
pasado por parámetro sea par, mostrará en la consola: “El número X es par”.*/
const prompt = require("prompt-sync")({ sigint: true });

function loopDePares(numero) {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
    let result = i + numero;
    if (result % 2 === 0) {
      console.log(`El número ${result} es par`);
    }
  }
}

const numeroIngresado = parseInt(prompt("Ingrese un número:"));

loopDePares(numeroIngresado);
