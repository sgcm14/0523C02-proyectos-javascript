//tabla de sumar de un número ingresado
const prompt = require("prompt-sync")({ sigint: true });
let n = parseInt(prompt("Ingresa Numero: "));
let s, x;


for (x = 0; x <= 20; x++) {
    s = n + x
   console.log(n + "+" + x + "=" + s );
}