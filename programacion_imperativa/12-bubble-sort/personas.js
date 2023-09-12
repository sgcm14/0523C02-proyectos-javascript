//¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? Utiliza bubble sort.
let personas = [
    {
      nombre: "Dua",
      apellido: "Lipa",
      ocupacion: "cantante",
      estatura: 173
    },
    {
      nombre: "Ariana",
      apellido: "Grande",
      ocupacion: "cantante",
      estatura: 160
    },
    {
      nombre: "Taylor",
      apellido: "Swift",
      ocupacion: "cantante",
      estatura: 180
    }
  ];
  
  for (let i = 0; i < personas.length - 1; i++) {
    for (let j = 0; j < personas.length - 1 - i; j++) {
      // Compara las estaturas de dos personas y las intercambia si están en el orden incorrecto
      if (personas[j].estatura > personas[j + 1].estatura) {
        let temp = personas[j];
        personas[j] = personas[j + 1];
        personas[j + 1] = temp;
      }
    }
  }
  
  console.log(personas);
  