//Dado el siguiente arreglo de objetos: 

let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24
  },
]

/* 
1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.*/

function edadMayor25(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j].edad > array[j + 1].edad) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
 // return array;

  const personasMayoresDe25 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].edad > 25) {
      personasMayoresDe25.push(array[i]);
    }
  }
  return personasMayoresDe25;
}


/* 2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. */

console.log(edadMayor25(personas));