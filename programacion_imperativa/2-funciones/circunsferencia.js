/*9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/

const prompt = require("prompt-sync")({ sigint: true });

function calcularCircunferencia(radio) {
    const circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}

// Pedir al usuario el radio del círculo
const radio = parseFloat(prompt('Ingresa el radio del círculo: '));

// Calcular la circunferencia y mostrar el resultado
const circunferencia = calcularCircunferencia(radio);
console.log(`La circunferencia del círculo es aproximadamente: ${circunferencia.toFixed(2)}`);