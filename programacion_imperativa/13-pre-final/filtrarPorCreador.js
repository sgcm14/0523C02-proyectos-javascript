
//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista.
 Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el 
 creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
 
Nuestra función deberá retornar: 
 
("Mona Lisa", "La ultima cena", "Maria Magdalena")*/

function filtrarPorCreador(array, nombreArtista) {
  const obrasDelArtista = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].creador === nombreArtista) {
      obrasDelArtista.push(array[i].nombre);
    }
  }

  return obrasDelArtista;
}

let resultadoFiltrado = filtrarPorCreador(cuadros, "Leonardo Da Vinci");

console.log("Matriz filtrada por artista:");
console.log(resultadoFiltrado);
console.log("**********************************");

/* ---------------------------------------------------------- */

/* Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. */
function estaOrdenado(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].creador > array[i + 1].creador) {
      return false;
    }
  }
  return true;
}


/*2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  */
function comprobarOrdenamiento(arrayVerificar, autor) {
  console.log("¿Está ordenado?");
  let respuesta;
  if (estaOrdenado(arrayVerificar)) {
    respuesta = true;
  } else {
    if (!autor) {
      respuesta = 'No ha especificado autor';
    } else {
      respuesta = filtrarPorCreador(arrayVerificar, autor);
    }
  }
  return respuesta;
}

/* 3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  */
console.log(comprobarOrdenamiento(resultadoFiltrado));
console.log("**********************************");
console.log(comprobarOrdenamiento(cuadros, "Leonardo Da Vinci"));
console.log("**********************************");
console.log(comprobarOrdenamiento(cuadros));
console.log("**********************************");