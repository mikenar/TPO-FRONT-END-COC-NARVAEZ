document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("area-formulario").addEventListener('submit', validarFormulario); 
 });
 
 function validarFormulario(evento) {
   evento.preventDefault();
   var nombre = document.getElementById('nombre').value;
   if(nombre.length == 0) {
     alert('Debe ingresar su nombre');
     return;
   }
   var apellido = document.getElementById('apellido').value;
   if(apellido.length == 0) {
     alert('Debe ingresar su apellido');
     return;
   }
   email = document.getElementById("email").value;
   if ( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
      alert('Su direccion de correo NO es valida o el campo se encuentra vacío. Revise e intente nuevamente');
    return;
}

   var telefono = document.getElementById('tel').value;
   if ( !(/^\d{8,15}$/.test(telefono)) ) {
   alert('El número de teléfono ingresado debe incluir entre 8 y 15 digitos, sin incluir letras, espacios o caracteres especiales. Debe incluir el código del pais y de la ciudad. Por ejemplo: 581112345678');
   return;
   }

   var text_area=document.getElementById('exampleFormControlTextarea1').value;
   if ( text_area == null || text_area.length == 0 || /^\s+$/.test(text_area) ) {
      alert('Debe ingresar un mensaje');
      return
   }
   alert('Su mensaje se envió correctamente. Nuestro equipo se pondrá en contacto con usted. Gracias por su mensaje')
   this.submit()
   
}
