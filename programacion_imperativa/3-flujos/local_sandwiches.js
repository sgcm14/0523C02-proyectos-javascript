/*Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.*/

const prompt = require("prompt-sync")({ sigint: true });

const sandwichBase = prompt("Ingrese cuál desea (pollo-carne-veggie): ");
const pan = prompt("Ingrese pan (blanco-negro-s/gluten): ");
const queso = prompt("Desea queso? (true-false): ");
const tomate = prompt("Desea tomate? (true-false): ");
const lechuga = prompt("Desea lechuga? (true-false): ");
const cebolla = prompt("Desea cebolla? (true-false): ");
const mayonesa = prompt("Desea mayonesa? (true-false): ");
const mostaza = prompt("Desea mostaza? (true-false): ");


function calcularPrecio(sandwichBase, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
  let precioBase, precioPan, precioTotal;

  switch (sandwichBase) {
    case "pollo":
      precioBase = 150;
      break;

    case "carne":
      precioBase = 200;
      break;

    case "veggie":
      precioBase = 100;
      break;
  }

  switch (pan) {
    case "blanco":
      precioPan = 50;
      break;

    case "negro":
      precioPan = 60;
      break;

    case "s/gluten":
      precioPan = 75;
      break;
  }

  precioTotal = precioBase + precioPan;

  if (queso === "true") precioTotal += 20;
  if (tomate === "true") precioTotal += 15;
  if (lechuga === "true") precioTotal += 10;
  if (cebolla === "true") precioTotal += 15;
  if (mayonesa === "true") precioTotal += 5;
  if (mostaza === "true") precioTotal += 5;

  return precioTotal;
}

const precio =calcularPrecio(sandwichBase, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);
console.log(`Debe pagar $${precio}`);

