/*  Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.
    Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo.
    Si el año es anterior a 2010, el impuesto es del 10% del precio; 
    si es posterior o igual a 2010, el impuesto es del 5%.
*/

let vehiculo = {
  marca: "",
  modelo: "",
  anio: 0,
  precio: 0,
  calcularImpuesto: function () {
    if (this.anio < 2010) {
      return this.precio * 0.10;
    } else {
      return this.precio * 0.5;
    }
  }
}

vehiculo.marca = "Toyota";
vehiculo.modelo = "Corolla";
vehiculo.anio = 2008;
vehiculo.precio = 15000;

console.log(vehiculo);

let impuesto = vehiculo.calcularImpuesto();
console.log(`El impuesto a pagar es: $${impuesto}`);
