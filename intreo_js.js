function createTable() {
    // Solicitar al usuario que ingrese un número y almacenarlo en la variable numTable
    var numTable = prompt("¿Qué número quieres meter en la tabla?");
    
    // Escribir el comienzo de la tabla en el documento HTML
    document.write("<table>");
    
    // Escribir la fila de encabezado de la tabla
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    // Bucle for para generar las filas de la tabla con los números, sus cuadrados y cubos correspondientes
    for (var i = 1; numTable >= i; i++) {
        // Calcular el cuadrado del número actual en el bucle
        var cuadrado = i * i;
        // Calcular el cubo del número actual en el bucle
        var cubo = i * i * i;
        // Escribir una fila de la tabla con el número, su cuadrado y su cubo
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }

    // Cerrar la etiqueta de la tabla correctamente
    document.write("</table>");
}


function sumaAleatoria() {
    // Generar dos números aleatorios entre 1 y 100
    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;

    // Calcular la suma de los dos números
    var suma = num1 + num2;

    // Pedir al usuario que ingrese el resultado de la suma
    var inicioTiempo = new Date(); // Registro del tiempo inicial
    var respuestaUsuario = parseInt(prompt("¿Cuál es el resultado de " + num1 + " + " + num2 + "?"));

    // Calcular el tiempo transcurrido
    var finTiempo = new Date();
    var tiempoTranscurrido = (finTiempo - inicioTiempo) / 1000; // Convertir a segundos

    // Verificar si la respuesta del usuario es correcta
    if (respuestaUsuario === suma) {
        alert("¡Correcto! El resultado es " + suma + ".\nTiempo empleado: " + tiempoTranscurrido + " segundos.");
    } else {
        alert("Incorrecto. El resultado era " + suma + ".\nTiempo empleado: " + tiempoTranscurrido + " segundos.");
    }
}

function contador(numeros) {
    // Inicializar contadores
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;

    // Iterar sobre el arreglo de números
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            // Si el número es negativo, incrementar el contador de negativos
            negativos++;
        } else if (numeros[i] === 0) {
            // Si el número es cero, incrementar el contador de ceros
            ceros++;
        } else {
            // Si el número es mayor que 0, incrementar el contador de positivos
            positivos++;
        }
    }
    
    // Mostrar los resultados en una ventana emergente utilizando alert()
    alert("Negativos: " + negativos + "\nCeros: " + ceros + "\nPositivos: " + positivos);
}

function promedios(matriz) {
    // Array para almacenar los promedios de cada fila
    let promediosArray = [];
    
    // Bucle para recorrer cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
        // Inicialización de la variable suma para acumular los elementos de la fila actual
        let suma = 0;
        
        // Bucle para recorrer cada elemento de la fila actual
        for (let j = 0; j < matriz[i].length; j++) {
            // Se suman los elementos de la fila actual
            suma += matriz[i][j];
        }
        
        // Cálculo del promedio de la fila actual
        let promedio = suma / matriz[i].length;
        
        // Se agrega el promedio al array de promedios
        promediosArray.push(promedio);
    }
    
    alert("Promedios: " + promediosArray.join(", "));
}

function inverso(numero) {
    var numeroInverso = "";
    while (numero !== 0) {
        numeroInverso = (numero % 10) + numeroInverso;
        numero = Math.floor(numero / 10);
    }
    alert("El inverso del número es: " + numeroInverso);
    return numeroInverso;
}
  

// console.log("Hola");
// console.info("Clash of Clans");
// console.assert(1==1);


// let dinero= 20;

// const precio= 50;


// alert("Hola");
// const nombre =prompt("¿Como te llamas?");
// console.log("Hola "+nombre);

// if (nombre){
//     console.log("Es hora de comer");
// }
// else{
//     console.log("Es hora de comer?");
// }

// function atacar(){
//     console.log("atacar goblins");
// }

// atacar();


// let accion = ()=>{
//     console.log("Construir")
// }

// accion();


 
  

