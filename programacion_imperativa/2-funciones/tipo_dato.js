/*8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.*/

const prompt = require("prompt-sync")({ sigint: true });

function obtenerTipoDeDato(valor) {
  //return typeof valor;
  if (!isNaN(valor)) {
    if (Number.isInteger(parseFloat(valor))) {
      return 'Número entero';
    } else {
      return 'Número decimal';
    }
  } else if (valor === 'true' || valor === 'false') {
    return 'Booleano';
  } else {
    return 'Cadena';
  }
}

// Pedir al usuario un valor
const input = prompt('Ingresa un valor: ');

// Obtener el tipo de dato y mostrar el resultado
const tipo = obtenerTipoDeDato(input);
console.log(`El tipo de dato es: ${tipo}`); 