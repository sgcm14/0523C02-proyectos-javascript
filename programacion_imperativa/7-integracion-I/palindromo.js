/*Deberás crear una función llamada palindromo que indique si una palabra 
es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” 
en caso de que no. 
    Ejemplo:
    -------
    palindromo(“anilina”) debe retornar true

    palindromo(“Ana”) debe retornar true

    palindromo(“Enrique”) debe retornar false */

const prompt = require("prompt-sync")({ sigint: true });

function palindromo(palabra) {
  palabra = palabra.toLowerCase();
  let isPalindromo = true;
  for (let i = 0; i < palabra.length / 2; i++) {

    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
      isPalindromo = false;
      break;
    }

  }
  return isPalindromo;

}

const palabraIngresada = prompt("Ingrese una palabra: ");
console.log(palindromo(palabraIngresada));