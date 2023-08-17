//Funciones simples
/*En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores*/

/*4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.*/

const prompt = require("prompt-sync")({ sigint: true });

function calcularEdadPerro(edadHumana) {
  const edadPerro = edadHumana * 7;
  return edadPerro;
}

// Pedir al usuario la edad humana del perro
const edadHumana = parseFloat(prompt('Ingresa la edad humana del perro en años: '));

// Calcular la edad del perro en años perro y mostrar el resultado
const edadPerro = calcularEdadPerro(edadHumana);
console.log(`La edad del perro en años perro es aproximadamente: ${edadPerro}`);