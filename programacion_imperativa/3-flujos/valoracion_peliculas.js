/*Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.*/

const prompt = require("prompt-sync")({ sigint: true });

const valoracion = prompt("Valora la película que viste (Muy mala, Mala, Mediocre, Buena, Muy buena): ");

switch (valoracion.toLowerCase()) {
  case "muy mala":
    console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
    break;

  case "mala":
    console.log("Calificaste la película como Mala. Lo lamentamos.");
    break;

  case "mediocre":
    console.log("Calificaste la película como Mediocre. Aceptamos tus comentarios.");
    break;

  case "buena":
    console.log("Calificaste la película como Buena. Nos alegramos por eso.");
    break;

  case "muy buena":
    console.log("Calificaste la película como Muy Buena. ¡Nos alegra saberlo!");
    break;

  default:
    console.log("Ingresaste un valor inválido.");
    break;
}

console.log("Gracias por tu valoración.");
