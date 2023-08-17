//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/
const prompt = require("prompt-sync")({ sigint: true });

function pulgadasACentimetros(pulgadas) {
  const centimetros = pulgadas * 2.54;
  return centimetros;
}

// Pedir al usuario la cantidad de pulgadas
const pulgadas = parseFloat(prompt('Ingresa la cantidad de pulgadas: '));

// Calcular y mostrar el resultado
const centimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son equivalentes a ${centimetros.toFixed(2)} centímetros.`);
