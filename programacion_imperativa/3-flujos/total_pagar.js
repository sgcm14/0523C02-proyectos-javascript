/*Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/
const prompt = require("prompt-sync")({ sigint: true });

const vehiculo = prompt("Ingrese su vehiculo: ");
const litros = parseInt(prompt("Ingrese los litros consumidos: "));

function totalAPagar(vehiculo, litrosConsumidos) {
  let precioPorLitro, totalPagar,litroPrecio;

  switch (vehiculo) {
    case "coche":
      precioPorLitro = 86;
      break;

    case "moto":
      precioPorLitro = 70;
      break;
    case "autobus":
      precioPorLitro = 55;
      break;

    default:
      return;
  }

  litroPrecio = litrosConsumidos * precioPorLitro;

  if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
    totalPagar = litroPrecio + 50;
  } else{
    totalPagar = litroPrecio + 25;
  }

  console.log(`El total a pagar es: ${totalPagar}, consumiste ${litrosConsumidos} ltrs`)
}

totalAPagar(vehiculo,litros);