//Ingresar la edad del usuario
const prompt = require("prompt-sync")({ sigint: true });
let nombre="Pedro";
let edad = prompt("Ingrese su edad: ");
console.log(`Hola ${nombre} tu edad es... ${edad} años`);
