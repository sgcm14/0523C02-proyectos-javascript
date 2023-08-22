function propiedadUnica(array, string) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let newObj = {};
    newObj[string] = array[i][string];
    newArray.push(newObj);
  }
  return newArray;
}

let array = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49 }];
/*let array = [
    { nombre: "Ana", edad: 30, ciudad: "Madrid"},
    { nombre: "Carlos", edad: 25, ciudad: "Barcelona"},
    { nombre: "Elena", edad: 28, ciudad: "Sevilla"}
];*/

let resultadoEdad = propiedadUnica(array, "edad");// debe retornar [ { edad: 27 }, { edad: 49 } ]
console.log(resultadoEdad);

let resultadoNombre = propiedadUnica(array, "nombre");// debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
console.log(resultadoNombre);

/*let resultadoCiudad = propiedadUnica(array,"ciudad");
console.log(resultadoCiudad);*/

