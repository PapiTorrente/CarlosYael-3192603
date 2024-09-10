let gato = {
	nombre:"Biwi",
	duerme:true,
	edad:3,
	color:"naranja",
	enemigos:["perro","agua","otroGato"],
	comer:function(){console.log("Ahora está comiendo");},	//Funciones discretas
	comiendo(comer){return `${this.nombre} está comiendo ${comer}`},
};

console.log(gato.comiendo("pollito"));
