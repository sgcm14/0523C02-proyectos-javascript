//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/

const prompt = require("prompt-sync")({ sigint: true });

function calcularValorHora(sueldoMensual) {
    const horasEnUnMes = 40;
    const valorHora = sueldoMensual / horasEnUnMes;
    return valorHora;
}

// Pedir al usuario el sueldo mensual
const sueldoMensual = parseFloat(prompt('Ingresa tu sueldo mensual: '));

// Calcular el valor de la hora de trabajo y mostrar el resultado
const valorHora = calcularValorHora(sueldoMensual);
console.log(`El valor de tu hora de trabajo es aproximadamente: S/. ${valorHora.toFixed(2)}`);