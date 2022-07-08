document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

function validarFormulario(event) {
    event.preventDefault();
    var txtNumTarjeta = document.getElementById('numeroTarjeta').value;
    var txtfecha = document.getElementById('fechaExpiracion').value;
    if(txtNumTarjeta.length == 0) {
      alert('El numero de tarjeta es nulo');
      return;
    }

    if (txtNumTarjeta.length < 16) {
      alert('el numero de tarjeta no tiene exactamente 16 numeros');
      return;
    }

    if(txtfecha.length == 0){
        alert('la fecha de caducidad es nula');
        return;
    }

    this.submit();
  }


 function valideKey(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { 
        return true;
      } else if(code>=48 && code<=57) {
        return true;
      } else{
        alert('algunos caracteres de la tarjeta no es un digito')
        return false;
      }
 }




