// Situación 2: Lista de compras de supermercado
const prompt = require("prompt-sync")({ sigint: true });
let ListaCompras = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"];
let ProductosComprados = [];

// Ejemplo de ingreso de usuario (el usuario agrega productos a la lista)
const cantidadProductos = parseInt(prompt("¿Cuántos productos desea agregar a la lista? "));
for (let i = 0; i < cantidadProductos; i++) {
  const producto = prompt(`Ingrese el producto #${i + 1}: `);
  ListaCompras.push(producto);
}

// Ejemplo de ingreso de usuario (el usuario marca productos como comprados)
console.log("Productos disponibles en la lista de compras:");
for (let producto of ListaCompras) {
  const comprarProducto = prompt(`¿Desea comprar ${producto}? (S/N): `);
  if (comprarProducto.toLowerCase() === 's') {
    ProductosComprados.push(producto);
  }
}

// Para mostrar los datos por pantalla, podríamos hacer lo siguiente:
console.log("Lista de compras:");
for (let producto of ListaCompras) {
  if (ProductosComprados.includes(producto)) {
    console.log(`[X] ${producto}`);
  } else {
    console.log(`[ ] ${producto}`);
  }
}