/*Escribe un programa en JavaScript que solicite al usuario ingresar su sueldo. Luego, según el valor ingresado, calcula el descuento correspondiente de acuerdo a las siguientes condiciones:

Si el sueldo es igual a 100, aplica un descuento del 30% sobre el sueldo ingresado.
Si el sueldo es mayor que 100, aplica un descuento del 20% sobre el sueldo ingresado.
Si el sueldo es menor que 100, aplica un descuento del 10% sobre el sueldo ingresado.
Finalmente, muestra un mensaje en pantalla que indique el monto del descuento calculado.

Asegúrate de que el programa realice la conversión adecuada del valor ingresado a un número entero antes de realizar los cálculos.*/
const prompt = require("prompt-sync")({ sigint: true });
let sueldo = parseInt(prompt("Ingresa sueldo: "));
let descuento;
if (sueldo == 100) {
    descuento = sueldo * 0.30
} else if (sueldo > 100) {
    descuento = sueldo * 0.20
} else {
    descuento = sueldo * 0.10
}

console.log("El descuento es..." + descuento)