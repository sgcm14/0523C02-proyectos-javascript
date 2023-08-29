/*
  Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre,
  notas (arreglo de números) y aprobado (booleano).

  Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba 
  si su promedio de notas es mayor o igual a 70.
*/

// Crear arreglo de objetos estudiantes
let arrEstudiantes = [
  {
    nombre: "Sam",
    notas: [10, 78, 95, 33],
    aprobado: false
  },
  {
    nombre: "Pedro",
    notas: [99, 78, 95, 33],
    aprobado: false
  },
  {
    nombre: "Juan",
    notas: [99, 50, 95, 33],
    aprobado: false
  },
  {
    nombre: "Trent",
    notas: [10, 20, 95, 33],
    aprobado: false
  }
];


// Función para calcular el promedio de notas
function obtenerPromedio(arrNotas) {
  let sum = 0;
  for (let i = 0; i < arrNotas.length; i++) {
    sum += arrNotas[i];
  }
  return sum / arrNotas.length;
}

// Función para determinar si el estudiante aprobó
function aprueba(promedio) {
  if (promedio >= 70) {
    return true;
  } else {
    return false;
  }
}

  // cualquiera de los dos funcionan
function aprueba(promedio) {
  return promedio >= 70;
}

// Calcular si los estudiantes aprobaron o no
function aprobaron(arrEstudiantes) {
  for (i = 0; i < arrEstudiantes.length; i++) {
    arrEstudiantes[i].aprobado = aprueba(obtenerPromedio(arrEstudiantes[i].notas));
  }
  return arrEstudiantes;
}

// Imprimir estado de aprobación de los estudiantes
console.log(aprobaron(arrEstudiantes));