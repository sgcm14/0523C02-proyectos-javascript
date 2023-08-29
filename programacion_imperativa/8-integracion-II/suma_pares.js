/* 
  Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.
*/
let numeros = [2, 5, 8, 10, 15, 6, 7, 4, 12];
let sumaNumerosPares = 0;
let indice = 0;
while (indice < numeros.length) {

  if (numeros[indice] % 2 === 0) {
    sumaNumerosPares += numeros[indice];
  }
  indice++;
}

console.log(`La suma de los números pares es: ${sumaNumerosPares}`);
