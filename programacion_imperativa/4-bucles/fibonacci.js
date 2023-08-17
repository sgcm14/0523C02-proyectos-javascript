/*5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.*/

const prompt = require("prompt-sync")({ sigint: true });

const numero = parseInt(prompt("Ingrese número: "));


function fibonacci(valor) {
  let a = 0, b = 1, c;
  let fibonacciString = '';
  //let fibonacciArray = []; //para concatenar array
  while (a <= valor) {
    //console.log(a) //uno debajo del otro
    fibonacciString += a + ' '; //uno al costado del otro con espacio
    //fibonacciArray.push(a); //agrega al array
    c = a + b;
    a = b;
    b = c;
  }
  console.log(fibonacciString);
 // console.log(fibonacciArray.join(' , ')); //imprime el array
}

fibonacci(numero);