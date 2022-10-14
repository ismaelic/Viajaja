alert("dfjsñjdf");

function reserva() { 
var origen=document.getElementById("origen").value;
var value = e.options[e.selectedIndex].value;
var text = e.options[e.selectedIndex].text;
return alert('Cuahsjskjas'+ origen);
}
function validaContrasena(contrasena) {
	if (contrasena.length < 6) {
		alert('La contra esta mal');
		return true;
	}else{
		alert('Esta bien prosigue');
		return false;	
	}
}
function validaDNI(DNI,DNI_l) {
	DNI_l=DNI_l.toUpperCase();
	DNI=DNI%23;
	letra= 'TRWAGMYFPDZBNJZSQVHLCKET';
	DNI_completo=letra.substring(DNI,DNI+1);
	if(DNI_l != DNI_completo){
		alert('DNI ERROENEO');
		return false;
	}else{
	alert('DNI correcto');
	return true;	
	}
}
function validarForm() {
	var datos=document.forms["formulario"]["datos"].value;
	var contrasena=document.forms["formulario"]["contrasena"].value;
	var DNI=document.forms["formulario"]["DNI"].value;
	var DNI_l=document.forms["formulario"]["DNI_l"].value;
	var email=document.forms["formulario"]["email"].value;
	
	alert("Comenzamos a validar");
	alert ("Gracias "+datos);
	if (validaContrasena(cont) && validaDNI(DNI,letra_DNI){
		alert("Todo esta bien gracias le enviaremos su reserva a "+ email);
		document.getElementById("formulario").submit();
		return true;
	}
}	