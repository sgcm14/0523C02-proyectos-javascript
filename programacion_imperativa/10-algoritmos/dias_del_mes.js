/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
  switch (numeroMes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
      return 31;
    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
      return 30;
    case 2: // Febrero
      return 28; // Suponiendo que no es un año bisiesto
    default:
      return "Número de mes inválido";
  }
}

// E invocala:
console.log(diasDelMes(1));
// Por ahora, la función retorna 0.
// Modifica el codigo para que retorne
// los datos correctos.
