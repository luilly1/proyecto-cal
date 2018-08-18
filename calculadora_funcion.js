// JavaScript Document
var cifra = 0;
var cargar_nuevo = true;
var operador_en_curso = true;
var resultado = 0;
var primera_operacion = true;
var ultima_operacion = "=";
var coma = true;

function cargar(numero){
	var display = document.getElementById("display");
	var display_auxiliar = document.getElementById("display_auxiliar");
	
	if(cargar_nuevo){
		display.value = "";
		cargar_nuevo = false;
		operador_en_curso = true;
	}
	
	if (coma == true && numero == "."){
		display.value = display.value + numero;
		display_auxiliar.value = display_auxiliar.value +numero;
		coma = false;
		
	}
	
	if (numero == "."){
		numero = "";
		operador_en_curso = false;
	}else{
		operador_en_curso = true;
	}
	display.value = display.value + numero;
	cifra = display.value;
	display_auxiliar.value = display_auxiliar.value + numero;
}

function resetear(){
	cifra = 0;
	cargar_nuevo = true;
	operador_en_curso = true;
	resultado = 0;
	primera_operacion = true;
	ultima_operacion = "=";
	document.getElementById("display").value = "";
	document.getElementById("display_auxiliar").value = "";
}

function operar(operador){
	if (operador_en_curso){
		operacion_pendiente(ultima_operacion);
		document.getElementById("display_auxiliar").value = document.getElementById("display_auxiliar").value + operador;
		document.getElementById("display").value = resultado;
		ultima_operacion = operador;
		cargar_nuevo = true;
		operador_en_curso = false;
		coma = true;
	}
}

function resultado_final(){
	operacion_pendiente(ultima_operacion);
	document.getElementById("display").value = resultado;
	ultima_operacion = "=";
	cifra = resultado;
	cargar_nuevo = true;
	coma = true;
}

function operacion_pendiente(operador){
	switch (operador){
		case "+":{
			resultado = resultado + Number(cifra);
			break;
		}
		case "-":{
			resultado = resultado - Number(cifra);
			break;
		}
		case "*":{
			resultado = resultado * Number(cifra);
			break;
		}
		case "/":{
			resultado = resultado / Number(cifra);
			break;
		}
		default:{
			resultado = Number(cifra);
		}
	}
}