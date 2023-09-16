//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.*/
function sumarDiagonal(matriz) {
  let suma = 0;
  const valoresDiagonal = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i === j) {
        valoresDiagonal.push(matriz[i][j]);

        suma += matriz[i][j];
      }
    }
  }
  console.log("Valores de la diagonal:", valoresDiagonal);
  return suma;
}

console.log(`Suma de valores de primer diagonal: ${sumarDiagonal(matriz)}`);
console.log("**********************************");

/*2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */
function matrizPares(matriz) {
  const valoresPares = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        valoresPares.push(matriz[i][j]);
      }
    }
  }

  return valoresPares;
}

console.log("Valores Pares de matriz:");
console.log(matrizPares(matriz));
console.log("**********************************");