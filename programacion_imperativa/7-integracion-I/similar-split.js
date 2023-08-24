/*Deberás crear una función llamada split que reciba un string
 y simule el comportamiento de la función original. Si no estás
  seguro de cómo funciona, Google puede ayudarte. 
  Importante: no podés usar el String.split(). 
    Ejemplo:
    -------
    split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
    split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

const prompt = require("prompt-sync")({ sigint: true });

function split(palabra) {
  let array = [];
  for (let i = 0; i < palabra.length; i++) {
    //la linea 15 o 16 hacen lo mismo 
    const letra = palabra[i]; 
    //const letra = palabra.charAt(i);

    //linea 20 o 21 hacen lo mismo
    array[i]=letra;
    //array.push(letra);
  }

  //hasta aqui tengo el array asi: [ 's', 'a', 'm', 'm', 'y' ]
  //return array;

  //de aqui en adelante se arma la estructura para que tenga ""
  let salida = "[";

  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      salida += ", ";
    }
    salida += `"${array[i]}"`;
  }

  salida += "]";
  return salida;
}


const palabraIngresada = prompt("Ingrese un string: ");
console.log(split(palabraIngresada));