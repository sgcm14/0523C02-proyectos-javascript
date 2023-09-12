/**
 * Dado un array de strings:
    ¿Cómo pudieras ordenar el array anterior, alfabéticamente?
 */

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

for (let i = 0; i < letras.length - 1; i++) {
  for (let j = 0; j < letras.length - 1 - i; j++) {
    if (letras[j] > letras[j + 1]) {
      let temp = letras[j];
      letras[j] = letras[j + 1];
      letras[j + 1] = temp;
    }
  }
}

console.log(letras);