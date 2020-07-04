
function mostrar(){

    document.getElementById('texto').style.display = 'block';

    var mensaje = 'Hola mundo';

    mensaje += '<br>';

    var a = 15;
    var b = 11;
    var resultado = (a + b) / 2;

    var condicion = 'aprobado';
    var verAlerta = false;
    if(resultado < 11){
        condicion = 'jalado';
        verAlerta = true;
    }

    console.log('el promedio es: '+resultado);

    mensaje += 'Resultado de '+a+' + '+b+' = '+resultado;
    mensaje += '<br>';
    mensaje += 'Condición: '+condicion;


    mensaje += '<hr>';

    for(i=0; i<=20; i++){
        //mensaje += 'i = '+i+'<br>';
    }





    document.getElementById('texto').innerHTML = mensaje;
    document.getElementById('texto').style.borderColor = 'blue';


    


    if(verAlerta){
        alert('SAMY JALADA');
    }


}

function ocultar(){

    document.getElementById('texto').style.display = 'none';

}

function verMensaje(opcion){
    console.log('opcion es: '+opcion);

    var fondo;

    //exito
    if(opcion == 1){
        fondo = 'greenyellow';
    }

    //error
    if(opcion == 0){
        fondo = 'red';
    }

    document.getElementById('vermensaje').style.display = 'block';
    document.getElementById('vermensaje').style.backgroundColor = fondo;

    setTimeout(function(){

        document.getElementById('vermensaje').style.display = 'none';
        
    }, 3000);


}


function calcular(){

    var numeroA = document.getElementById('txtNumeroA').value;
    var numeroB = document.getElementById('txtNumeroB').value;
    var operacion = document.getElementById('cmbOperador').value;
    var a = parseInt(numeroA);
    var b = parseInt(numeroB);
    var resultado = 0;

    switch(operacion){
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
    }

    document.getElementById('resultadoOperacion').innerHTML = resultado;


}

