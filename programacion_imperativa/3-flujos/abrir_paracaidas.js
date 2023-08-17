/*Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.*/

const prompt = require("prompt-sync")({ sigint: true });

function abrirParacaidas(velocidad, altura) {
  if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
    return "¡Abre el paracaídas!";
  } else {
    return "No es necesario abrir el paracaídas en este momento.";
  }
}

const velocidadIngresada = parseFloat(prompt("Ingrese la velocidad (km/h): "));
const alturaIngresada = parseFloat(prompt("Ingrese la altura (m): "));

const resultado = abrirParacaidas(velocidadIngresada, alturaIngresada);
console.log(resultado);
