//Leer dos números y realizar el producto mediante sumas.
const prompt = require("prompt-sync")({ sigint: true });

// Solicitar al usuario que ingrese dos números
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

// Verificar si alguno de los números es cero
if (numero1 === 0 || numero2 === 0) {
  console.log("El producto es 0");
} else {
  let producto = 0;

  // Calcular el producto utilizando sumas
  for (let i = 0; i < Math.abs(numero2); i++) {
    producto += numero1;
  }

  // Ajustar el signo del producto según los signos de los números originales
  if ((numero1 < 0 && numero2 > 0) || (numero1 > 0 && numero2 < 0)) {
    producto = -producto;
  }

  console.log("El producto de " + numero1 + " y " + numero2 + " es: " + producto);
}