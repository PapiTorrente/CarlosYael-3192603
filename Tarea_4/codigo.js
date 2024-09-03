//Iniciamos un arreglo para poder almacenar las tareas.
let tareas =  [];

//Función para mostrar opciones
function mostrarMenu() {
    return parseInt(prompt(`
        "Opciones disponibles:"
        1.- Agregar tarea.
        2.- Ver todas las tareas.
        3.- Marcar mis tareas como completadas
        4.- Salir.
        `));
}

//Funcion para agregar tareas
function agregarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre, 
            completada: false
        };
        tareas.push(tarea);
        alert("La tarea se agrego con exito.");
    } else {
        alert("El nombre de la tarea no puede estar vacio.");
    }
}

//Funcion para mostrar todas las tareas
function verTodasTareas() {
    let a = 0;
    let longitud = tareas.length;
    while(a<longitud) {
        console.log(tareas[a]);
        a++;
    }
}

//Función principal para poder manejar nuestro programa
function iniciarPrograma() {
    let continuar = true;
    while(continuar) {
        let opcion = mostrarMenu();
        switch(opcion) {
            case 1: 
                agregarTarea();
                break;

            case 2:
                verTodasTareas();
                break;
            
            case 3:
                marcarTareaCompletada();
                break;

            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;

            default:
                alert("Opción no valida. Inténtalo de nuevo.");
        }
    }

    alert("Programa finalizado.");
}

iniciarPrograma();