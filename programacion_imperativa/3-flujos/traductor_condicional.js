/*Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.*/
const prompt = require("prompt-sync")({ sigint: true });

const palabraIngresada = prompt("Ingrese una palabra: ");

switch (palabraIngresada) {
  case "casa":
    console.log("La palabra en inglés es 'house'.");
    break;

  case "perro":
    console.log("La palabra en inglés es 'dog'.");
    break;

  case "pelota":
    console.log("La palabra en inglés es 'ball'.");
    break;

  case "árbol":
    console.log("La palabra en inglés es 'tree'.");
    break;

  case "genio":
    console.log("La palabra en inglés es 'genius'.");
    break;

  default:
    console.log("La palabra ingresada es incorrecta.");
    break;
}
