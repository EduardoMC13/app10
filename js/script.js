// JavaScript Document
function mostrarmensaje(){
	alert('alerta desde el archivo js externo');
}
function retornarfecha()
{
	var fecha 
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
	return cadena;
}

function retornarhora()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
	return cadena;
}
function fechahora(){
	var cadena ="La fecha de hoy es: "+ retornarfecha()+ "-----Hora: "+ retornarhora();
	document.formulario.horafecha.value=(cadena);
	return cadena;
}


			
