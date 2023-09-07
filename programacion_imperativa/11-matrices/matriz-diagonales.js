// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
  let matriz = [];
  let valor = 1;

  for (let i = 0; i < 10; i++) {
    let fila = [];

    for (let j = 0; j < 10; j++) {
      fila.push(valor);
      valor++;
    }

    matriz.push(fila);
  }

  return matriz;
}

let matriz10por10 = generarMatriz10por10();
//console.log(matriz10por10);

for (let fila of matriz10por10) {
  console.log(fila.join(" "));
}

/**
 * 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
 */

function sumarDiagonalRoja() {
  let suma = 0;
  let valoresDiagonalRoja = [];
  for (let i = 0; i < matriz10por10.length; i++) {
    for (let j = 0; j < matriz10por10[i].length; j++) {
      if (i === j) {
        valoresDiagonalRoja.push(matriz10por10[i][j]);

        suma += matriz10por10[i][j];
      }
    }
  }
  console.log("Valores de la diagonal roja:", valoresDiagonalRoja);
  return suma;
}

function sumarDiagonalVerde() {
  let suma = 0;
  let valoresDiagonalVerde = [];

  for (let i = 0; i < matriz10por10.length; i++) {
    const valor = matriz10por10[i][matriz10por10.length - 1 - i];

    valoresDiagonalVerde.push(valor);

    suma += valor;
  }

  console.log("Valores de la diagonal verde:", valoresDiagonalVerde);
  return suma;
}

console.log(sumarDiagonalRoja());
console.log(sumarDiagonalVerde());
