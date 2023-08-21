// Escribe un programa en JavaScript que clasifique a una persona en una de las tres categorías: "niño", "joven" o "adulto", dependiendo de la edad ingresada por el usuario.
const prompt = require("prompt-sync")({ sigint: true });
let edad = parseInt(prompt("Ingresa edad: "));
if (edad <= 10) {
    console.log("niño")
}
else if (edad > 10 && edad < 25) {
    console.log("joven")
}
else {
    console.log("adulto")
}