/**
 * Ejercicio 1: 
 * Crear una función que reciba como parámetro él arreglo de objetos, un continente, y un número de población.
La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro.
Si no encuentra coincidencias deberá retornar un array vacío
 */
let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000
  },
  {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000
  }
];

function filtrarPaises(paises, continente, poblacionMinima) {
  const paisesFiltrados = [];

  for (let i = 0; i < paises.length; i++) {
    const pais = paises[i];
    if (pais.continente === continente && pais.poblacion >= poblacionMinima) {
      paisesFiltrados.push(pais);
    }
  }

  return paisesFiltrados;
}

const continenteBuscado = "Sudamérica";
const poblacionMinimaBuscada = 50000000;

console.log(filtrarPaises(paises, continenteBuscado, poblacionMinimaBuscada));
console.log("***********************************************************");
