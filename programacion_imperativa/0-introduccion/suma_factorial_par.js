// Dado una secuencia de números obtener la suma de los factoriales de aquellos que ocupan posición par.
const prompt = require("prompt-sync")({ sigint: true });

// Función para calcular el factorial de un número
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

// Leer una secuencia de números del usuario
const secuencia = [];
const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números en la secuencia:"));

for (let i = 0; i < cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    secuencia.push(numero);
}

// Calcular la suma de los factoriales de números en posiciones pares
let sumaFactoriales = 0;

for (let i = 1; i < secuencia.length; i += 2) {
    sumaFactoriales += factorial(secuencia[i]);
}

console.log(`La suma de los factoriales de los números en posiciones pares es: ${sumaFactoriales}`);
