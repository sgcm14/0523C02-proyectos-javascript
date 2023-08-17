const prompt = require("prompt-sync")({ sigint: true });

// Solicitar entrada al usuario y parsear los valores como números según corresponda
const obtenerNumero = (mensaje) => parseInt(prompt(mensaje));

const obtenerRespuestaBooleana = (mensaje) => prompt(mensaje).toLowerCase() === 'si';

// Variables para el viaje a la fiambrería/embutería
const temperatura = obtenerNumero('Ingrese la temperatura en el exterior: ');
const estaLloviendo = obtenerRespuestaBooleana('¿Está lloviendo? (Sí/No): ');
const pisoAscensor = obtenerNumero('Ingrese el piso del ascensor (0 si vive en casa): ');
const horaActual = obtenerNumero('Ingrese la hora actual: ');
const horaAperturaFiambreria = obtenerNumero('Ingrese la hora de apertura de la fiambrería: ');
const horaCierreFiambreria = obtenerNumero('Ingrese la hora de cierre de la fiambrería: ');

const cantidadQueso = 100;
let deudaConMonica = 0;

// Verificar si la fiambrería está abierta
const fiambreriaEstaAbierta = (hora) => hora >= horaAperturaFiambreria && hora <= horaCierreFiambreria;

// Función para el viaje a la fiambrería
const irALaFiambreria = () => {
    if (temperatura <= 20) {
        console.log("Hace frío, llevo abrigo.");
    } else {
        console.log("Hace calor, llevo ropa ligera.");
    }

    if (estaLloviendo === true) {
        console.log("Llevo paraguas.");
    }

    if (pisoAscensor > 0) {
        console.log(`Vivo en un edificio, subo al piso ${pisoAscensor}.`);
    }

    if (fiambreriaEstaAbierta(horaActual)) {
        console.log("La fiambrería está abierta, puedo ir.");
    } else {
        return console.log("La fiambrería está cerrada, mejor vuelvo más tarde.");
    }

    console.log(`Llevo ${cantidadQueso} gramos de queso.`);

    if (deudaConMonica > 0) {
        console.log(`Me fían el queso, debo $${deudaConMonica}.`);
    }

    console.log("Vuelvo a casa a disfrutar de mi tentempié.");
}

// Ejecutamos la función para el viaje a la fiambrería
irALaFiambreria();