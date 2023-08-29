# ¡Más prácticas!
Como ya observaron esta semana cerramos con los contenidos que veremos en esta materia: variables, tipos de datos, condicionales y bucles, que son herramientas esenciales para cualquier tipo de lenguaje de programación, pero para poder realizar un correcto uso de éstas necesitamos ejercitar nuestro pensamiento computacional, entonces vamos a hacerlo resolviendo los siguientes enunciados de la forma que creamos más conveniente.

**Ejercicios**

------

1) A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

        const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

- Obtener en un nuevo array las edades menores a 18.
- Obtener en un nuevo array las edades mayor o igual a 18.
- Obtener en un nuevo array las edades igual a 18.
- Obtener el menor.
- Obtener el mayor. 
- Obtener el promedio de edades.
- Incrementar en 1 todas las edades.

Recordemos que hay muchas formas de resolver, nuestra tarea será pensar cuál es la mejor para poder reutilizar nuestro código con diferentes array de edades.

    const edadesGrupo1 = [21, 12, 15, 18, 25];
    const edadesGrupo2 = [2, 11, 54, 63, 24];


Excelente, ahora, como ya trabajamos un array, sabemos que este puede tener como elemento cualquier tipo de dato —Number, String, Objetos Literales, Array, etc—. Para continuar con la Mesa de Trabajo trabajaremos con un array de objetos literales, para ello invitamos a repasar la clase de Objetos Literales para tener en claro su estructura y sintaxis. Podemos decir que un objeto literal es una colección de propiedades y cada propiedad es una asociación entre una clave y un valor.

    /*
    Observamos que es un array por su sintaxis que comienza y termina con corchetes []
    y sus elementos tienen la sintaxis de objetos literales {}
    Entonces, podemos decir que tenemos una array de objetos literales, 
    o una colección de objetos literales
    */
    const arrayDeObjetosLiterales =
    [
        {},
        {},
        {},
        {}
    ];


------

2) Tenemos como base un array de cuentas bancarias, donde a cada una la representamos con un objeto literal. A partir de este array trabajaremos sobre los siguientes enunciados, resolviendo de la forma que nos parezca más adecuada

        const arrayCuentas =
        [
            {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
            },
            {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
            },
            {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
            },
            {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
            },
            {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
            },
            {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
            }
        ]

- Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
- Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
- Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
- Obtener la cuenta con el titular de la misma más joven.
- Obtener un array con las cuentas habilitadas.
- Obtener un array con las cuentas deshabilitadas.
- Obtener la cuenta con el menor saldo.
- Obtener la cuenta con el mayor saldo.




**Extras:**

- Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

- Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null

- Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

- Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined, Reutilizando la función  **buscarPorId** 

-----

**Extra Bonus**

- **Variables, Condicionales y Bucles:**
    Escribe una función llamada **encontrarMultiplos** que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.

    Luego, utiliza la función **encontrarMultiplos** para obtener los múltiplos de 5 hasta 50.

- **Arreglos y Objetos:**
    Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

    Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

    - Crear arreglo de objetos estudiantes
    - Función para calcular el promedio de notas
    - Función para determinar si el estudiante aprobó
    - Función para determinar si el estudiante aprobó
    - Calcular si los estudiantes aprobaron o no
    - Imprimir estado de aprobación de los estudiantes


- **Arreglos y Bucles:**
    Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

- **Bucles y Arreglos:**
    Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

- **Objetos y Condicionales:**
    Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

    Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
