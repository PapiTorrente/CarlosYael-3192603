let num1;
let num2;

num1 = prompt("Ingresa un numero");
num2 = prompt("Ingresa otro numero");

if(num1 != null && num2 != null){
    document.write("<h1> Tu número es: " + sumar(num1, num2) + "</h1>");
    console.log(sumar(num1, num2));
}

function sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);
}