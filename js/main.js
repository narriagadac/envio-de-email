
var nombre=document.getElementById("nombre").value;
var rut=document.getElementById("rut").value;
var email=document.getElementById("email").value;
var telefono=document.getElementById("telefono").value;
var mensaje=document.getElementById("mensaje").value;

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

function limpiar(){  
    
    document.getElementById("nombre").value=" ";
    document.getElementById("rut").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("telefono").value=" ";
    document.getElementById("mensaje").value=" ";
    document.getElementById("nombre").value
}


function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}


function validarEmail(elemento){

  var texto = document.getElementById(elemento.id).value;
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if (!regex.test(texto)) {
      document.getElementById("resultado").innerHTML = "Correo invalido";
  } else {
    document.getElementById("resultado").innerHTML = "correcto";
  }

}

function camposVacios(){
    var nombre =  document.getElementById("nombre").value;
    var rut =  document.getElementById("rut").value;
    var email =  document.getElementById("email").value;
    var telefono =  document.getElementById("telefono").value;
    var mensaje =  document.getElementById("mensaje").value;
  
   if(nombre==""){
      document.getElementById("errorEnvio").innerHTML="Por favor, rellene el campo NOMBRE.";
  }
   else if(rut==""){
      document.getElementById("errorEnvio").innerHTML="Por favor, rellene el campo RUT.";
  }
   else if(email==""){
      document.getElementById("errorEnvio").innerHTML="Por favor, rellene el campo EMAIL.";
  }
   else if(telefono==""){
      document.getElementById("errorEnvio").innerHTML="Por favor, rellene el campo TELEFONO.";
  }
  else if (mensaje==""){
    document.getElementById("errorEnvio").innerHTML="Por favor, rellene el campo MENSAJE.";
  }
}






