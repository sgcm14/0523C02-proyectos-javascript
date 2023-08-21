//Promedio de 3 números ingresados
const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Ingresa numero 1: ");
let b = prompt("Ingresa numero 2: ");
let c = prompt("Ingresa numero 3: ");
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
d = ((a + b + c) / 3);
console.log("El promedio es..." + d);