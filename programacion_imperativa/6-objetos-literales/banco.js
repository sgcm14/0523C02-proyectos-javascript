//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (nombreTitular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombreTitular) {
        return this.clientes[i];
      }
    }
    return null;
  },
  deposito: function (nombreTitular, montoDeposito) {
    let cliente = this.consultarCliente(nombreTitular);
    if (cliente) {
      cliente.saldoEnPesos += montoDeposito;
      console.log(`Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`);
    } else {
      console.log(`No se encontró el Cliente: ${nombreTitular}`);
    }
  },
  extraccion: function (nombreTitular, montoRetiro) {
    let cliente = this.consultarCliente(nombreTitular);
    if (cliente) {
      if (cliente.saldoEnPesos >= montoRetiro) {
        cliente.saldoEnPesos -= montoRetiro;
        console.log(`Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`);
      } else {
        console.log("Fondos insuficientes");
      }
    } else {
      console.log(`No se encontró el Cliente: ${nombreTitular}`);
    }
  }
};

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);
console.log("***********************************************");
banco.deposito("Abigael Natte", 5000);
console.log("***********************************************");
banco.extraccion("Ramon Connell", 2000);
console.log("***********************************************");
banco.extraccion("Sammy", 2000);