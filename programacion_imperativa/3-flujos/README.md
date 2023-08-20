# Controlando el flujo de nuestras aplicaciones

Cuando programemos una aplicación, el usuario va a poder tomar diferentes rumbos dentro de ella dependiendo de los datos, igual que en un libro de “Elige tu propia aventura” —por ejemplo, no es lo mismo aplicar un descuento o un recargo—. Para poder tener control sobre la ejecución de nuestro programa, existen las estructuras condicionales.

**Veamos cómo funciona**

Si quisiéramos restringir el acceso a una discoteca, tendríamos que saber si la persona es mayor o menor de edad. Esto lo podríamos resolver con una condición muy sencilla. ¿Qué opinás de nuestro programa para filtrar el acceso?

    if (edad>=18){
    console.log("Puede pasar")
    }else{
    console.log("No puede pasar")
    }

**Agregá caminos**

Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el ejercicio.

    let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
    crear otras para tener varias pruebas)
    if(edad < 18) {
    console.log("No puede pasar al bar.")
    } else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
    console.log("Puede pasar al bar y tomar alcohol.")
    }

Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:

- Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido."
Importante: no se deberá mostrar ningún otro mensaje.

- Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.

- Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".

----------

**totalAPagar()**

Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y litrosConsumidos.

A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:

- Si el vehículo es “coche”, el precio por litro es de $86.

- Si es “moto”, ha de ser $70.

- Si es “autobús”, ha de ser $55.

- Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.

- Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

----------

**Local de sándwiches**

Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.

Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:

- Pollo = $150 (“pollo”)

- Carne = $200 (“carne”)

- Vegetariano (verduras asadas) = $100 (“veggie”)

Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre otras tres opciones, por lo que recibiremos también otro string con el tipo de pan deseado:

- Blanco c/orégano y parmesano = $50 (“blanco”)

- Negro c/avena = $60 (“negro”)

- Sin gluten = $75 (“s/gluten”)

Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:

- Queso = $20

- Tomate = $15

- Lechuga = $10

- Cebolla = $15

- Mayonesa = $5

- Mostaza = $5

Cada uno de estos adicionales están representados por booleanos —es decir, true o false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un total de seis valores booleanos, uno por cada adicional—.

Nuestro trabajo es crear una función que reciba estos ocho parámetros 

—un string para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. 

La función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.

Finalmente, deberá retornar el valor numérico del total a pagar del cliente.


## Extra bonus

Si llegaste hasta acá, estás más que bien. **¡Felicitaciones!**

Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te proponemos este otro ejercicio. Tené en cuenta que a partir de acá los ejercicios pueden escalar en dificultad. Como decimos siempre, paciencia, ignorá la complejidad y tratá de resolverlo con las herramientas que tengas a tu disposición. También podés buscar información extra en Google o documentaciones que conozcas.

----

**¿Cuál es el número secreto?**

Creá una función que reciba un parámetro numérico y verifique si el mismo es el número secreto. El número secreto deberá ser seleccionado de manera random de entre 1 y 10 —**investigá qué hace la función Math.random()**—. En caso de ser correcto, retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un mensaje de aliento junto con el número ingresado y el secreto.

------

**abrirParacaidas()**

Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo siguiente:

- La velocidad debe ser menor a 1000 km/h.
- La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

## Estructura switch
En estos ejercicios utilizaremos variables que contengan los valores para simular el ingreso de data de un usuario. Es decir, una variable stringUno que contenga —por ejemplo— el valor “perro”, que sería lo que el usuario “ingresa” como valor en nuestro programa.

----

**Traductor condicional**

Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.

----

**Valoración de películas**

Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver según la siguiente escala:

- Muy mala.
- Mala.
- Mediocre.
- Buena.
- Muy buena.

Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás por su valoración.

**Por ejemplo:** "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor inválido".

Cuando el usuario haya valorado la película, agradecerle su visita.

**Realizado por :** Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
