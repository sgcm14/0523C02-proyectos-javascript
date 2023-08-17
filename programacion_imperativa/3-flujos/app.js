const prompt = require("prompt-sync")({ sigint: true });

const edad = parseInt(prompt("Ingrese su edad: "));

/*Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.*/

if(edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}

/*Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.*/

if(edad===21){
    console.log("Bienvenida, felicidades haz llegado a la mayoría de edad.")
}

/*Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
edad es impar?".*/
if (edad % 2 !== 0 && edad>0) {
    console.log("¿Sabías que tu edad es impar?");
}


