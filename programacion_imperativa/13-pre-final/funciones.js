/* Desarrollar una función para cada uno de las siguientes apartados: 

1) Que reciba por parámetro un número entero y retorne su triple.*/

function triple(numero) {
  return numero * 3;
}
console.log(triple(5));
console.log("**********************************");


/* 2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  */

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}
console.log(multiplicacion(4, 7));
console.log("**********************************");

/* 3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. */

function division(numero1, numero2) {
  if (numero2 !== 0) {
    return numero1 / numero2;
  } else {
    return "No es posible dividir por 0.";
  }
}
console.log(division(10, 2));
console.log("**********************************");
console.log(division(8, 0));
console.log("**********************************");