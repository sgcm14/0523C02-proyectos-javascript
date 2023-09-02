/**
 * Ejercicio 2:
 *Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
    nombre 
    apellido
    edad
    esArgentino (bool)
 */

const persona = {
  nombre: "Sammy Gigi",
  apellido: "Cantoral Montejo",
  edad: 31,
  esArgentino: false
};


/*
 * Declarar un función que reciba al objeto por parámetro:
    Si la edad es mayor o igual a 18 años y es argentino, retornará una frase que diga: [nombre] [apellido] vive en Argentina y es mayor de edad.
    Si es mayor de edad pero no es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y es mayor de edad.
    Si NO es mayor de edad pero es argentino, retornará una frase que diga: [nombre] [apellido]  vive en Argentina y NO es mayor de edad.
    Si no es mayor ni es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y NO es mayor de edad.
 */
function verificarEdadYProcedencia(persona) {
  let mensaje;
  if (persona.edad >= 18 && persona.esArgentino) {
    mensaje = `${persona.nombre} ${persona.apellido} vive en Argentina y es mayor de edad.`;
  } else if (persona.edad >= 18 && !persona.esArgentino) {
    mensaje = `${persona.nombre} ${persona.apellido} NO vive en Argentina y es mayor de edad.`;
  } else if (persona.edad < 18 && persona.esArgentino) {
    mensaje = `${persona.nombre} ${persona.apellido} vive en Argentina y NO es mayor de edad.`;
  } else {
    mensaje = `${persona.nombre} ${persona.apellido} NO vive en Argentina y NO es mayor de edad.`;
  }
  return mensaje;
}

console.log(verificarEdadYProcedencia(persona));

console.log("*********************************************************");

/*Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, estos pueden ser String o Booleano. Nuestra función deberá      
  determinar si los valores recibidos son del mismo tipo sin utilizar typeof. Por ejemplo:
    Si recibe por parámetro (true, “true”) deberá retornar un mensaje que indique “No son del mismo tipo”
    Si recibe por parámetro (false, true) deberá retornar un mensaje que indique “Son del mismo tipo”
    Si recibe por parámetro (“true”,”false”) deberá retornar un mensaje que indique “Son del mismo tipo”
    Si recibe por parámetro (“false”, false) deberá retornar un mensaje que indique “No son del mismo tipo”
*/
function verificacionDeTiposDeDatos(valor1, valor2) {
  let resultado;

  function esBoolean(dato) {
    return dato === true || dato === false;
  }

  function esString(dato) {
    return dato !== true && dato !== false;
  }

  if ((esBoolean(valor1) && esBoolean(valor2)) || (esString(valor1) && esString(valor2))) {
    resultado = "Son del mismo tipo";
  } else {
    resultado = "No son del mismo tipo";
  }

  return resultado;
}


console.log(verificacionDeTiposDeDatos(true, "true"));    // No son del mismo tipo
console.log(verificacionDeTiposDeDatos(false, true));    // Son del mismo tipo
console.log(verificacionDeTiposDeDatos("true", "false")); // Son del mismo tipo
console.log(verificacionDeTiposDeDatos("false", false)); // No son del mismo tipo

console.log("*********************************************************");