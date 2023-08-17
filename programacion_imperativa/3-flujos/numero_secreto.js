/*Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.*/
const prompt = require("prompt-sync")({ sigint: true });

function adivinarNumero(numero) {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;

  if (numero === numeroSecreto) {
    return "¡Felicitaciones! ¡Adivinaste el número secreto!";
  } else {
    return `No has adivinado. El número secreto era ${numeroSecreto}, y tú ingresaste ${numero}. ¡Sigue intentando!`;
  }
}

const numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10: "));
const resultado = adivinarNumero(numeroIngresado);
console.log(resultado);
