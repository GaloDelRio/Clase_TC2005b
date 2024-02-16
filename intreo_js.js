console.log("Hola");
console.info("Clash of Clans");
console.assert(1==1);


let dinero= 20;

const precio= 50;


alert("Hola");
const nombre =prompt("¿Como te llamas?");
console.log("Hola "+nombre);

if (nombre){
    console.log("Es hora de comer");
}
else{
    console.log("Es hora de comer?");
}

function atacar(){
    console.log("atacar goblins");
}

atacar();


let accion = ()=>{
    console.log("Construir")
}

accion();



function crateTable(){
    var numTable =prompt("¿Que numero quieres meter en la tabla?");
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for(var i = 1; numTable>= i; i++ ){
        var cuadrado= i*i;
        var cubo= i*i*i;
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }

    document.write("<table>");
}

