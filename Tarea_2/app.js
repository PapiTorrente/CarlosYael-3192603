//Código para el juego de la ruleta rusa.
alert("Hola! Este es mi juego de 'adivina el número'. Tendrás 8 oportunidades. El rango de números que puedes elegir va del 0 al 9.");

//Variables
let numero;
let vidas = 8;
let numRandom = parseInt(Math.random() * 10);

//Bloque while en el que se ejecuta el juego
while (vidas > 0 ) { //Verifica que todavia le queden vidas al jugador.
    numero = parseInt(prompt("Es hora de jugar! Escribe a continuación un número: ")); //Método de introducción del número, el cual es parseado.
    if(numero === numRandom){ //Si le atinó al número, la consola le dice que ganó y lo saca del bucle.
        console.log("FELICIDADES! GANASTE!");
        break;
    } else { //Si no, la consola le dice que lo vuelva a intentar y le muestra cuántas vidas le quedan.
        console.log("Aún no lo tienes, vuelve a intentar.");
        console.log("Te quedan " + vidas + " vidas restantes.");
    }
    vidas--;
    if(vidas === 0){ console.log("Perdiste :c"); } //Si el número de vidas es 0, la consola le dice que perdió antes de terminar el juego.
}