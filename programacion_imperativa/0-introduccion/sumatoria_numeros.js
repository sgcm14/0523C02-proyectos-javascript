//solicita al usuario ingresar una cantidad de números determinada por n, luego solicita al usuario ingresar esos números uno por uno y finalmente calcula la suma de esos números y la muestra en el navegador.
const prompt = require("prompt-sync")({ sigint: true });
let n = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let x, s, suma = 0;

for (x = 1; x <= n; x++) {
    s = parseInt(prompt("Ingrese número..."));
    suma += s;
}
console.log("La suma es..." + suma);