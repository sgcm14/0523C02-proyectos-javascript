// Ingresar una nota y saber si está aprobado/desaprobado
const prompt = require("prompt-sync")({ sigint: true });
let nota = parseInt(prompt("Ingresa nota: "));

if (nota > 10) {
    console.log("aprobado")
}
else {
    console.log("desaprobado")
}