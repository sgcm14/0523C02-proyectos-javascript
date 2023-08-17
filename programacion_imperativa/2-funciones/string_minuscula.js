/*7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
Investigá qué hace el método de strings .toUpperCase()*/

const prompt = require("prompt-sync")({ sigint: true });

function convertirAMayusculas(texto) {
    const textoMayusculas = texto.toUpperCase();
    return textoMayusculas;
}

// Pedir al usuario un string en minúscula
const textoMin = prompt('Ingresa un texto en minúscula: ');

// Convertir a mayúsculas y mostrar el resultado
const textoMay = convertirAMayusculas(textoMin);
console.log(`El texto en mayúsculas es: ${textoMay}`);