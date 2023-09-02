/**
 * Ejercicio 3: 
 */
// Crear un array vacío llamado destinos.
let destinos = [];

// Dados estos tres objetos:
let brasil = {
  cantidadDeVisitas: 3,
  clima: "soleado",
  habitantes: "212 millones"
}
let rusia = {
  cantidadDeVisitas: 4,
  clima: "frío",
  habitantes: "144 millones"
}
let estadosUnidos = {
  cantidadDeVisitas: 1,
  clima: "nublado",
  habitantes: "329 millones"
}

// Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
destinos.push(brasil);
destinos.push(rusia);
destinos.push(estadosUnidos);

// Mostrar por consola el array para ver que contenga esos objetos.
console.log("Destinos:", destinos);

/**
 * Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje. 
 * Debes utilizar alguna estructura de repetición vista en clase.
 */
function siguienteViaje(destinosArray) {
  for (let i = 0; i < destinosArray.length; i++) {
    destinosArray[i].cantidadDeVisitas++;
  }
}

// Mostrar por consola el array de destinos antes y después de la ejecución de la función. 

console.log("Destinos antes:", destinos);

siguienteViaje(destinos);

console.log("Destinos después:", destinos);
