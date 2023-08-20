# Trabajando con funciones

Vamos a ejercitar sobre nuestro conocimiento en funciones y poner en práctica todo lo aprendido hasta el momento. Como siempre recordá que todo el material que hayas visto hasta el momento podés consultarlo, y no te asustes si ves algo que no hemos visto todavía, con el correr del tiempo la práctica de buscar conceptos nuevos y cómo utilizarlos va a ser cada vez más sencilla.

¿Qué devuelve cada función?
En este ejercicio deberás pensar qué devuelve cada función sin ejecutarla en la consola.

--------

**Micro Desafío 1**

    function test1(x,y){
        return y-x
    }

    test1(10,40)

> Pista: No importa el orden en que pasemos los Argumentos, sino el de los Parámetros en el return.
--------

**Micro Desafío 2**

    function test2(x,y){
        return x*2
        console.log(x)
        return x/2
    }

    test2(10)

> Pista: Cuando JS encuentra la palabra clave return, devuelve el valor de la expresión que tiene a su derecha y termina la ejecución del bloque.

---------

**Funciones simples**

En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores-

1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.
4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
    > PD: considerá que tu mes de trabajo tiene 40 horas.

6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

Seleccionar alguna de estas funciones —o de manera opcional, todas— y escribirla como función expresada y función flecha.

Si llegamos hasta este punto estamos más que satisfechos. Ahora te dejamos unos ejercicios con una dificultad extra, tendrás que buscar algunos conceptos para poder resolverlos. Es una práctica que los programadores realizamos todos los días. Como siempre te decimos, una parte importante del aprendizaje en programación es ignorar la complejidad, e ir estrictamente a lo que necesitamos. Sabemos que no es
una práctica fácil de realizar, pero con el tiempo va a ir haciéndose más sencilla y divertida.

7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
    > Investigá qué hace el método de strings .toUpperCase()
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
    > Pista: te servirá revisar qué hace la palabra reservada typeof.
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
    > Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
