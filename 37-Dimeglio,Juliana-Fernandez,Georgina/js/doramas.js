"use strict";
//generar un array de longitud = 6(generar captcha con los numeros random)
let captchax=new Array(6);
for(let i=0; i<captchax.length;i++){
    let num= Math.floor(Math.random()*9);
    captchax[i]=num;
    console.log(captchax);
}
//convertir array en string, sintaxis: .join("");
let captcha3= captchax.join("");
//mostrar array en html
document.getElementById("captcha").innerHTML=captcha3;
//activar boton enviar (que realiza la comparacion)
//comparar array con input.value(numeros ingresados por el usuario)
let btn = document.getElementById("botonEnviar");
    btn.addEventListener("click", validarCaptcha);
function validarCaptcha(){
    let valueCapt=document.getElementById("capt").value;
    console.log(valueCapt);
    if(valueCapt==captcha3){
        document.getElementById("mensaje").innerHTML="Gracias por suscribirte!!!";
    }else{
        document.getElementById("mensaje").innerHTML="Error al enviar tu formulario";
    }
}
