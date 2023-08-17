let cajonRemeras = ["Remera1", "Remera2", "Remera3"];
let cajonPantalones = ["Pantalon1", "Pantalon2", "Pantalon3"];

console.log("------Cajón de remeras al inicio------");
console.log("Cajón de remeras:", cajonRemeras);
console.log("Cajón de pantalones:", cajonPantalones);

// Intercambiar el contenido de las variables
let temp = cajonRemeras;
cajonRemeras = cajonPantalones;
cajonPantalones = temp;

console.log("------Cajón de remeras al final------");
console.log("Cajón de remeras:", cajonRemeras);
console.log("Cajón de pantalones:", cajonPantalones);