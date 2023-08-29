/*
Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada


- Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
- Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
- Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
- Obtener la cuenta con el titular de la misma más joven.
- Obtener un array con las cuentas habilitadas.
- Obtener un array con las cuentas deshabilitadas.
- Obtener la cuenta con el menor saldo.
- Obtener la cuenta con el mayor saldo.

Extras:

- Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

- Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null

- Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

- Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined, Reutilizando la función buscarPorId
*/

const arrayCuentas =
  [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ];

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
let edadesMenores = [];

for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].edadTitular < 30) {
    edadesMenores.push(arrayCuentas[i]);
  }
}
console.log("Cuentas con titulares menores a 30 años:");
console.log(edadesMenores);
console.log("-------------------");

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
let edadesMayores = [];

for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].edadTitular >= 30) {
    edadesMayores.push(arrayCuentas[i]);
  }
}
console.log("Cuentas con titulares mayores/igual a 30 años:");
console.log(edadesMayores);
console.log("-------------------");

// Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
let edadesMenoresIgual = [];

for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].edadTitular <= 30) {
    edadesMenoresIgual.push(arrayCuentas[i]);
  }
}
console.log("Cuentas con titulares menores/igual a 30 años:");
console.log(edadesMenoresIgual);
console.log("-------------------");


// Obtener la cuenta con el titular de la misma más joven.
let titularJoven = arrayCuentas[0];
for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].edadTitular < titularJoven.edadTitular) {
    titularJoven = arrayCuentas[i];
  }
}
console.log("Cuenta con el titular de la misma más joven:");
console.log(titularJoven);
console.log("-------------------");

// Obtener un array con las cuentas habilitadas.
let cuentasHabilitadas = [];

for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].estaHabilitada == true) {
    cuentasHabilitadas.push(arrayCuentas[i]);
  }
}
console.log("Cuentas habilitadas:");
console.log(cuentasHabilitadas);
console.log("-------------------");

// Obtener un array con las cuentas deshabilitadas.
let cuentasdeshabilitadas = [];

for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].estaHabilitada == false) {
    cuentasdeshabilitadas.push(arrayCuentas[i]);
  }
}
console.log("Cuentas deshabilitadas:");
console.log(cuentasdeshabilitadas);
console.log("-------------------");

// Obtener la cuenta con el menor saldo.
let menorSaldo = arrayCuentas[0];
for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].saldo < menorSaldo.saldo) {
    menorSaldo = arrayCuentas[i];
  }
}
console.log("Cuenta con el menor saldo:");
console.log(menorSaldo);
console.log("-------------------");

// Obtener la cuenta con el mayor saldo.
let mayorSaldo = arrayCuentas[0];
for (let i = 0; i < (arrayCuentas.length); i++) {
  if (arrayCuentas[i].saldo > mayorSaldo.saldo) {
    mayorSaldo = arrayCuentas[i];
  }
}
console.log("Cuenta con el mayor saldo:");
console.log(mayorSaldo);
console.log("-------------------");

// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico
let arrayID = [];
function generarID(array) {
  for (let i = 0; i < (array.length); i++) {
    array[i].id = i + 1;
  }
  return array;
}
console.log("Array con ID:");
arrayID = generarID(arrayCuentas)
console.log(arrayID);
console.log("-------------------");

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null
function buscarPorId(array, idBuscar) {
  for (let i = 0; i < (array.length); i++) {
    if (idBuscar === array[i].id) {
      return array[i];
    }
  }
  return null;
}

console.log("Array buscado:");
console.log(buscarPorId(arrayCuentas, 3));
console.log("-------------------");

// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array cuyas cuentas se encuentren por debajo del saldo enviado por parámetro
let arraySaldos = [];
function filtrarPorSaldos(array, saldo) {
  let arrayFiltrado = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].saldo < saldo) {
      arrayFiltrado.push(array[i]);
    }
  }
  return arrayFiltrado;
}
console.log("Array filtrado por saldo:");
arraySaldos = filtrarPorSaldos(arrayCuentas, 3627.12)
console.log(arraySaldos);
console.log("-------------------");

// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined, Reutilizando la función buscarPorId

let arrayIncremento = [];
function incrementarSaldo(array, id, saldo) {
  let cuentaEncontrada = buscarPorId(array, id);

  if (cuentaEncontrada !== null) {
    cuentaEncontrada.saldo += saldo;
    return cuentaEncontrada;
  } else {
    return undefined;
  }
}

console.log("Array con saldo:");
arrayIncremento = incrementarSaldo(arrayCuentas, 2, 50)
console.log(arrayIncremento);
console.log("-------------------");
