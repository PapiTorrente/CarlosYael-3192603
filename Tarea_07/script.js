let caracter = "";
let matrix = "";
let direccion = prompt("Escribe '1' para imprimir en vertical, o escribe '0' para imprimir en horizontal");
let equis = prompt("Ahora escribe cuantas x quieres que se impriman");
let tamano = parseInt(equis);
let frutas = ["Manzana", "Uva", "Pera", "Plátano", "Sandía", "Papaya", "Mora Azul"];

imprimir(direccion, equis);
imprimirCuadrado(tamano);
tablas();
mostrarFrutas();

function imprimir(direccion, equis){
    console.log("Imprimir");
    if(parseInt(direccion) == 1){
        console.log("Vertical");
        for(let numero = 0; numero < equis; numero++){
            caracter += "X\n";
        }
        console.log(caracter);
    } else if (parseInt(direccion) == 0){
        console.log("Horizontal");
        for(let numero = 0; numero < equis; numero++){
            caracter += "X";
        }
        console.log(caracter);
    } else {
        for(let numero = 0; numero < equis; numero++){
            caracter += "X";
        }
        console.log(caracter);
    }
}

function imprimirCuadrado(tamano){
    for(let vertical = 0; vertical < tamano; vertical++){
        for(let horizontal = 0; horizontal < tamano; horizontal++){
            caracter += "X";
        }
        caracter += "\n";
    }
    console.log(caracter);
}

function tablas(){
    for(let num1 = 1; num1 <= 10; num1++){
        for(let num2 = 1; num2 <= 10; num2++){
            matrix += num1+" * "+num2+" = "+(num1*num2)+"; "; 
        }
        matrix += "\n";
    }
    console.log(matrix);
}

function mostrarFrutas(){
    let imprimir = "";
    frutas.forEach(frutaActual => { 
        imprimir += (frutas.indexOf(frutaActual)+1)+"-> "+frutaActual+"; ";
    });
    console.log(imprimir);
}