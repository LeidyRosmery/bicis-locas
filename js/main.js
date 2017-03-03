
function validateForm(){
var validarButton=document.getElementById("boton");
var nombreError = document.getElementById("nombre-error");
var apellidoError = document.getElementById("apellido-error");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");
var inputName=document.getElementById("name");
var apellido=document.getElementById("lastname");
var email=document.getElementById("input-email");
var pass=document.getElementById("input-password");
var elementoClase=document.getElementsByClassName("form-control");
var opcion=document.getElementById("opcion");
var expresion = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
var correoExpresion=/\w+@\w+\.+[a-z]/ ;

if(elementoClase[0].value=="" && elementoClase[1].value=="" && elementoClase[2].value=="" && elementoClase[3].value==""){
  alert(" INGRESE LOS VALORES SOLICITADOS EN EL FORMULARIO ");

}
if(elementoClase[0].value=="" || elementoClase[1].value=="" || elementoClase[2].value=="" || elementoClase[3].value==""){
  camposVacios();
}
  validaCampos();

function camposVacios(){
  if(inputName.value == "" ){
    nombreError.innerHTML= " <strong> *  Este campo es Obligatorio </strong>";
  }else{
    nombreError.innerHTML= "";
  }

  if(apellido.value == ""){
    apellidoError.innerHTML= " <strong> *  Este campo es Obligatorio </strong>";
  }else{
    apellidoError.innerHTML= "";
  }

  if(email.value == ""){
    emailError.innerHTML= " <strong> *  Este campo es Obligatorio </strong>";
  }else{
    emailError.innerHTML= "";
  }

  if(pass.value == ""){
    passError.innerHTML= " <strong> *  Este campo es Obligatorio </strong>";
  }else{
    passError.innerHTML= "";
  }
}
function limpiarInput(){
  inputName.value="";
  apellido.value="";
  email.value="";
  pass.value="";
  opcion.value="";
}
function validaCampos(){
  if(!expresion.test(inputName.value)){
    alert("el nombre no es valido");
  }
  else if(!expresion.test(apellido.value)) {
    alert("el apellido es invalido");
  }
  else if (!correoExpresion.test(email.value)){
    alert("ingrese un correo valido");
  }
  else if (pass.value.length < 6){
    alert("la constraseña es muy corta");
  }
  else if (pass.value === "password"|| pass.value ==="123456" || pass.value==="987654"){
    alert("ingrese otra contraseña ");
  }
  else if (opcion.value=="0") {
    alert("Elija una opcion");
  } else {
    alert("Sus datos fueron registrados correctamente");
    limpiarInput();
  }



}

}
