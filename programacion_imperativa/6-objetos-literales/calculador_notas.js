let alumno =
{
  nombre: "",
  numeroLegajo: "",
  listaNotas: [],
  notaAprobacion: 11,
  agregarNota: function (nota) {
    this.listaNotas.push(nota);
  },
  calcularPromedio: function () {
    if (this.listaNotas.length === 0) {
      return 0;
    }
    let sumaNotas = 0;
    for (let i = 0; i < this.listaNotas.length; i++) {
      sumaNotas += this.listaNotas[i];
    }

    return sumaNotas / this.listaNotas.length;
  },
  estaAprobado: function () {
    return this.calcularPromedio() >= this.notaAprobacion ? "Sí" : "No"
  }
};

alumno.nombre = "Juan Perez";
alumno.numeroLegajo = "12345";
alumno.agregarNota(16);
alumno.agregarNota(14);
alumno.agregarNota(10);

console.log("IMPRIMIENDO LIBRETA");
console.log("**********************************");
console.log(`Nombre alumno: ${alumno.nombre}`);
console.log(`N° legajo: ${alumno.numeroLegajo}`);
console.log(`Notas: ${alumno.listaNotas}`);
console.log("**********************************");
console.log("Promedio:", alumno.calcularPromedio());
console.log("¿Está Aprobado? :", alumno.estaAprobado());