//Leer un número y mostrar por la salida estándar si dicho número es o no es par.

const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Ingresa Numero: "));

if (numero % 2 == 0) {
    console.log("El número ingresado es Par")
}
else {
    console.log("El número ingresado es Impar")
}