var numero1;
var numero2;
function agregarPantalla(value) {
    document.getElementById("pantalla").value+=value;
}

function limpiarPantalla() {
    document.getElementById("pantalla").value="";
}

function igual(){
    try{
        let result=eval(document.getElementById("pantalla").value);
        limpiarPantalla();
        document.getElementById("pantalla").value+=result;
    }catch(console){
        document.getElementById("pantalla").value="Error";
    }
}