//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.*/

const prompt = require("prompt-sync")({ sigint: true });

function agregarExclamacion(frase) {
    const fraseConExclamacion = `${frase}!`;
    return fraseConExclamacion;
}

// Pedir al usuario una frase
const frase = prompt('Ingresa una frase: ');

// Agregar exclamación y mostrar el resultado
const fraseConExclamacion = agregarExclamacion(frase);
console.log(`La frase "${frase}" con exclamación es: ${fraseConExclamacion}`);