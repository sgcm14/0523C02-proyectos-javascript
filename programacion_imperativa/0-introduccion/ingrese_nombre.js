//Saluda al usuario, para esto debes pedirle su nombre
const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);
