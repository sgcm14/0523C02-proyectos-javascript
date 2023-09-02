# Examen parcial de Programación Imperativa
¡Llegó el momento de poner a prueba todo lo que estuvimos viendo a lo largo de estas semanas!

## Ejercicios

**Ejercicio 1:**

Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son:

- Si ambos son tipo de dato Number deberá retornar su multiplicación.
- Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
- Si ambos son tipo de dato Booleano deberán retornar false.


**Ejercicio 2:**

1) Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor:

        nombre

        apellido

        edad

        esArgentino (bool)

2) Declarar un función que reciba al objeto por parámetro:

    a) Si la edad es mayor o igual a 18 años y es argentino, retornará una frase que diga:

        [nombre] [apellido] vive en Argentina y es mayor de edad.

    b) Si es mayor de edad pero no es argentino, retornará una frase que diga: 

        [nombre][apellido] NO vive en Argentina y es mayor de edad.
    
    c) Si NO es mayor de edad pero es argentino, retornará una frase que diga: 
    
        [nombre][apellido] vive en Argentina y NO es mayor de edad.

    d) Si no es mayor ni es argentino, retornará una frase que diga:

        [nombre] [apellido] NO vive en Argentina y NO es mayor de edad.

    Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, estos pueden ser String o Booleano. Nuestra función deberá determinar si los valores recibidos son del mismo tipo sin utilizar **typeof**. 

        Por ejemplo:

        - Si recibe por parámetro (true, “true”) deberá retornar un mensaje que indique “No son del mismo tipo”
        - Si recibe por parámetro (false, true) deberá retornar un mensaje que indique “Son del mismo tipo”
        - Si recibe por parámetro (“true”,”false”) deberá retornar un mensaje que indique “Son del mismo tipo”
        - Si recibe por parámetro (“false”, false) deberá retornar un mensaje que indique “No son del mismo tipo”


**Ejercicio 3:**

1. Crear un array vacío llamado destinos.
2. Dados estos tres objetos:

        let brasil = {
        cantidadDeVisitas : 3,
        clima: "soleado",
        habitantes: "212 millones"
        }
        let rusia = {
        cantidadDeVisitas : 4,
        clima: "frío",
        habitantes: "144 millones"
        }
        let estadosUnidos = {
        cantidadDeVisitas : 1,
        clima: "nublado",
        habitantes: "329 millones"
        }

    a. Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)

    b. Mostrar por consola el array para ver que contenga esos objetos.

3. Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas de cada uno de los destinos, llámala siguienteViaje.
    - Debes utilizar alguna estructura de repetición vista en clase.

4. Mostrar por consola el array de destinos antes y después de la ejecución de la función.

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
