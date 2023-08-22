//Leer un número y mostrar su tabla de multiplicar.

let s, x;
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Ingresa Numero: "));

for (x = 1; x <= 12; x++) {
    s = numero * x
    console.log(numero + "x" + x + "=" + s );
}
