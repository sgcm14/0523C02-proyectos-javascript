/* 
Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, 
y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.
*/

function encontrarMultiplos(numero, limite) {
  let multiplos = [];
  for (let i = numero; i < limite; i++) {
    if (i % numero == 0) {
      multiplos.push(i);
    }
  }
  return multiplos;
}

let multiplos = encontrarMultiplos(5, 50);
console.log(multiplos);
