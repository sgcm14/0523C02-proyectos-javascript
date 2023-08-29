/* A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

- Obtener en un nuevo array las edades menores a 18.
- Obtener en un nuevo array las edades mayor o igual a 18.
- Obtener en un nuevo array las edades igual a 18.
- Obtener el menor.
- Obtener el mayor. 
- Obtener el promedio de edades.
- Incrementar en 1 todas las edades.

Recordemos que hay muchas formas de resolver, nuestra tarea será pensar cuál es la mejor para poder reutilizar nuestro código con diferentes array de edades.

  const edadesGrupo1 = [21, 12, 15, 18, 25];
  const edadesGrupo2 = [2, 11, 54, 63, 24]; */

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

function calculosEdad(edades) {
  //Obtener en un nuevo array las edades menores a 18.
  let edadesMenores = [];

  for (let i = 0; i < (edades.length); i++) {
    if (edades[i] < 18) {
      edadesMenores.push(edades[i]);
    }
  }
  console.log(`Las edades menores a 18: ${edadesMenores}`);

  // Obtener en un nuevo array las edades mayor o igual a 18.
  let edadesMayores = [];

  for (let i = 0; i < (edades.length); i++) {
    if (edades[i] >= 18) {
      edadesMayores.push(edades[i]);
    }
  }
  console.log(`Las edades mayores a 18: ${edadesMayores}`);


  // Obtener en un nuevo array las edades igual a 18.
  let edadesIguales = [];

  for (let i = 0; i < (edades.length); i++) {
    if (edades[i] == 18) {
      edadesIguales.push(edades[i]);
    }
  }
  console.log(`Las edades igual a 18: ${edadesIguales}`);

  // Obtener el menor.
  let menorEdad = edades[0];

  for (let i = 0; i < (edades.length); i++) {
    if (edades[i] < menorEdad) {
      menorEdad = edades[i];
    }
  }
  console.log(`El menor de las edades es: ${menorEdad}`);


  // Obtener el mayor. 
  let mayorEdad = edades[0];

  for (let i = 0; i < (edades.length); i++) {
    if (edades[i] > mayorEdad) {
      mayorEdad = edades[i];
    }
  }
  console.log(`El mayor de las edades es: ${mayorEdad}`);


  // Obtener el promedio de edades.
  let promedioEdades = 0;
  for (let i = 0; i < (edades.length); i++) {
    promedioEdades += edades[i]
  }
  promedioEdades = promedioEdades / edades.length
  console.log(`El promedio de las edades es: ${promedioEdades}`);

  // Incrementar en 1 todas las edades.
  for (let i = 0; i < (edades.length); i++) {
    edades[i] = edades[i] + 1
  }

  console.log(`Las nuevas edades son: ${edades}`);
}

calculosEdad(edades);
console.log("-------------------");
calculosEdad(edadesGrupo1);
console.log("-------------------");
calculosEdad(edadesGrupo2);