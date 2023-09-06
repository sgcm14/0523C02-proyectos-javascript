/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
