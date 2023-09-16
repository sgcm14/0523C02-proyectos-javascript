/**
 *  El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. 

  Las temperaturas —objeto temperatura— están cargados en un array.

  a) Ordenar por temperatura mínima de menor a mayor.

  b) Ordenar por temperatura máxima de mayor a menor.
 */

const temperaturas = [
  { dia: 1, mes: 9, tempMaxima: 25, tempMinima: 15 },
  { dia: 2, mes: 9, tempMaxima: 28, tempMinima: 16 },
  { dia: 3, mes: 9, tempMaxima: 22, tempMinima: 14 },
  { dia: 4, mes: 10, tempMaxima: 23, tempMinima: 13 },
  { dia: 5, mes: 10, tempMaxima: 26, tempMinima: 14 },
  { dia: 6, mes: 11, tempMaxima: 21, tempMinima: 12 },
  { dia: 7, mes: 11, tempMaxima: 24, tempMinima: 11 },
  { dia: 8, mes: 12, tempMaxima: 20, tempMinima: 10 },
  { dia: 9, mes: 12, tempMaxima: 22, tempMinima: 9 }
];

function ordenarTemperaturaMinima(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j].tempMinima > array[j + 1].tempMinima) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function ordenarTemperaturaMaxima(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j].tempMaxima < array[j + 1].tempMaxima) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// Clonar el array original para mantenerlo intacto [...temperaturas];

const minima= ordenarTemperaturaMinima([...temperaturas]);
const maxima= ordenarTemperaturaMaxima([...temperaturas]);

console.log('Array de temperaturas:');
console.log(temperaturas);
console.log('*******************************');

console.log('Temperatura mínima de menor a mayor:');
console.log(minima);
console.log('*******************************');

console.log('Temperatura máxima de mayor a menor:');
console.log(maxima);
console.log('*******************************');