/**
 * Ejercicio 3: 
 */
let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5]  // 2
];

// Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.

function sumarFila1(matriz) {
  let suma = 0;
  if (matriz.length > 0 && matriz[0].length >= 1) {
    for (let i = 0; i < matriz[0].length; i++) {
      suma += matriz[0][i];
    }
  }
  return suma;
}

console.log("La suma de la fila 1 es:", sumarFila1(matriz));


// Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.
function valoresPares(matriz) {
  let pares = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        pares.push(matriz[i][j]);
      }
    }
  }
  return pares;
}

console.log("Valores pares de la matriz:", valoresPares(matriz));
