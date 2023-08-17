const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);


/*Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.*/
const cantidadVidas=3;
let resultado= cantidadVidas==0
console.log(`la comparación es: ${resultado}`);

/*Descontar una vida a esa variable y volver a imprimir la comparación, además del nuevo valor de la variable.*/
console.log(`la resta es: ${resultado-1}`);
