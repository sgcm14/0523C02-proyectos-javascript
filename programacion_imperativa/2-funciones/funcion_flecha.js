/*Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.
Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder resolverlos. Es una práctica que los programadores realizamos todos los días. Como siempre te decimos, una parte importante del aprendizaje en programación es ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es
una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y divertida.*/

const prompt = require("prompt-sync")({ sigint: true });

let pulgadasACentimetros =  (pulgadas) => {
  const centimetros = pulgadas * 2.54;
  return centimetros;
}

// Pedir al usuario la cantidad de pulgadas
const pulgadas = parseFloat(prompt('Ingresa la cantidad de pulgadas: '));

// Calcular y mostrar el resultado
const centimetros = pulgadasACentimetros(pulgadas);
console.log(`${pulgadas} pulgadas son equivalentes a ${centimetros.toFixed(2)} centímetros.`);