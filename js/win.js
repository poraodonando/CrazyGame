var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);

    // impede o envio do form
    e.preventDefault();
});