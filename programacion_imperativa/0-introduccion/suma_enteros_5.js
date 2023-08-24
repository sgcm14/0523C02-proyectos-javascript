//Generar enteros de 3 en 3 comenzando por 2 hasta el valor máximo menor que 30. Calculando la suma de los enteros generados que sean divisibles por 5.
let suma = 0;
for (let i = 2; i < 30; i += 3) {
  if (i % 5 === 0) {
    suma += i;
  }
}

console.log("La suma de los enteros generados divisibles por 5 es:", suma);
