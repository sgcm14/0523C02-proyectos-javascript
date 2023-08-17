/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
const prompt = require("prompt-sync")({ sigint: true });

const numero = parseInt(prompt("Ingrese número: "));


function numerosProximos(valor) {
  console.log(`los 10 números siguientes de ${valor} son:`)
  for (let i = valor+1; i < valor+10; i++) {
    console.log(i);
  }
 
}

numerosProximos(numero);