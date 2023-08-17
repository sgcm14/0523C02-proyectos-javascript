//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.*/

const prompt = require("prompt-sync")({ sigint: true });

function calculadorIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

// Pedir al usuario el peso en kilogramos
const peso = parseFloat(prompt('Ingresa tu peso en kilogramos: '));

// Pedir al usuario la altura en metros
const altura = parseFloat(prompt('Ingresa tu altura en metros: '));

// Calcular el IMC y mostrar el resultado
const imc = calculadorIMC(peso, altura);
console.log(`Tu IMC es: ${imc.toFixed(2)}`);