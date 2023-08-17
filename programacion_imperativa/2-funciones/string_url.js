//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”*/

const prompt = require("prompt-sync")({ sigint: true });

function convertirAURL(nombre) {
    const url = `http://www.${nombre}.com`;
    return url;
}

// Pedir al usuario el nombre
const nombre = prompt('Ingresa un nombre: ');

// Convertir a URL y mostrar el resultado
const url = convertirAURL(nombre);
console.log(`El nombre "${nombre}" se convierte en la URL: ${url}`);