/* Crear una matriz de 5 x 7.
Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.*/

const matriz57 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
];

function sumaFila4(matriz) {
  if (matriz.length >= 4) {
    const fila4 = matriz[3];
    let suma = 0;
    const valores = [];

    for (let i = 0; i < fila4.length; i++) {
      valores.push(fila4[i]);
      suma += fila4[i];
    }
    console.log("Valores:", valores);
    return suma;
  } else {
    return "La matriz no tiene fila 4.";
  }
}

const sumaFilaCuatro = sumaFila4(matriz57);
console.log("La suma de la fila 4 es:", sumaFilaCuatro);