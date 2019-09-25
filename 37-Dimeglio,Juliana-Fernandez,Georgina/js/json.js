"use strict"; 
let URL= "https://web-unicen.herokuapp.com/api/groups/37-Doramas/favoritos/";
document.addEventListener("DOMContentLoaded",traerDatos(URL, cuerpoTabla));
let botonCargar = document.getElementById("cargar");
botonCargar.addEventListener('click', agregar1);
let botonCargar3 = document.getElementById("cargar3");
botonCargar3.addEventListener('click', agregar3);
let botonBorrarTodo = document.getElementById("borrar");
botonBorrarTodo.addEventListener('click', borrarTodo);
let idGuardar=0;
async function agregar1() {
    let nuevo = {
        "thing":{
            'dorama':document.querySelector("#dorama").value,
            'usuario':document.querySelector("#usuario").value,
            'genero':document.querySelector("#genero").value
        }
    }
    try{
          let r = await fetch(URL,
            {
              "method": "POST",
              "headers": { "Content-Type": "application/json" },
              "body": JSON.stringify(nuevo)
            });
          let json = await r.json();
          traerDatos(URL, cuerpoTabla); 
  }catch(r){
    console.log(r);
  }
}
async function traerDatos(URL,cuerpoTabla){
    try{
        let dato= await fetch(URL);
        let json= await dato.json();
        document.querySelector("#cuerpoTabla").innerHTML='';
        for (let data of json.favoritos){
          crearFila(data.thing.dorama, data.thing.usuario, data.thing.genero,data._id);
        } 
    }catch(json){
        console.log(json);
      }
}
function crearFila(dorama, usuario,genero,id){
    let fila = document.createElement("tr");
    agregarColumna(fila, dorama);
    agregarColumna(fila, usuario);
    agregarColumna(fila, genero, genero);
    agregarBoton(fila, "DELETE", id);
    agregarBoton(fila, "EDIT", id);
    agregarBoton(fila, "SAVE", id);
    document.getElementById("cuerpoTabla").appendChild(fila);
}
function agregarColumna(fila, atributoObjeto, genero) {
    let columna = document.createElement("td");
    let textoColumna = document.createTextNode(atributoObjeto);
    if(genero==="Romance"){
      fila.classList.toggle("destacados");
    }
    columna.appendChild(textoColumna);
    fila.appendChild(columna);
}
function agregarBoton(fila, buttonText, id) {
    let boton = document.createElement("button");
    boton.classList.add("btn");
    boton.classList.add("btn-outline-success");
    boton.setAttribute("id",  id);
    boton.setAttribute("name", id);
    let textButton = document.createTextNode(buttonText);
    boton.appendChild(textButton);
    if (buttonText === "DELETE") {
      boton.addEventListener('click', () => { borrarUno(id) });
    } else if (buttonText === "EDIT") {
      boton.addEventListener('click', () => { traerDato(id) });
    } else if (buttonText === "SAVE") {
      boton.addEventListener('click', () => { editarDato(id) });
    }
    fila.appendChild(boton);
}
async function borrarUno(id) {
   let nuevaUrl= URL+ id;
    try{
        let borrarDato= await fetch(nuevaUrl,{
           "method": "DELETE",
           "headers":{
               "Content-Type": "application/json"
               },  
            });
        let json= await borrarDato.json();
           traerDatos(URL, 'cuerpoTabla');      
    }catch(e){
        console.log("Falló el borrado");
    }
  } 
  
async function editarDato(id) {
  let valoresInput= document.querySelectorAll(".miDorama");
  let newURL= URL+idGuardar;
  let nuevo = {
    "thing":{
        'dorama':valoresInput[0].value ,
        'usuario':valoresInput[1].value,
        'genero':valoresInput[2].value
    }
  } 
  try{

      let r = await fetch(newURL,
        {
          "method": "PUT",
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(nuevo)
        });
      let json = await r.json();
      traerDatos(URL, 'cuerpoTabla'); 
  }catch(r){
      console.log(r);
  }
}
async function traerDato(id) {
  idGuardar=id;
  let newURL= "https://web-unicen.herokuapp.com/api/groups/37-Doramas/favoritos/"+id;
  let valoresInput= document.querySelectorAll(".miDorama");
    let r = await fetch(newURL,{
          "method": "GET",
          "mode": "cors",
        });
    let json = await r.json();
      valoresInput[0].value = json.information.thing.dorama;
      valoresInput[1].value = json.information.thing.usuario;
      valoresInput[2].value = json.information.thing.genero;
} 
function agregar3() {
    for (let i = 0; i < 3; i++) {
        agregar1();
    }
}
async function borrarTodo(favoritos) {
  try{
    let dato= await fetch(URL);
    let json= await dato.json();
    for (let data of json.favoritos){
      borrarUno(data._id);
    }
  }catch(json){
    console.log("Devuelve los objetos que no se borraron: " + json);
  }
}

let busqueda= document.getElementById('buscar')
busqueda.addEventListener('keyup',hacerBusqueda);
function hacerBusqueda() {
    let registroTabla = document.getElementById('datos');
    let buscarTexto = document.getElementById('buscar').value.toLowerCase();
    let celdas = "";
    let encontrado = false;
    let comparaCon = "";
    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < registroTabla.rows.length; i++) {
        celdas = registroTabla.rows[i].getElementsByTagName('td');
        encontrado = false;
        // Recorremos todas las celdas
        for (let j = 0; j < celdas.length && !encontrado; j++) {
            comparaCon = celdas[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (buscarTexto.length == 0 || (comparaCon.indexOf(buscarTexto) > -1)) {
                encontrado = true;
            }
        }
        if (encontrado) {
          registroTabla.rows[i].classList.remove('js-ocultar');
           registroTabla.rows[i].classList.add('js-mostrar');
        } else{
          registroTabla.rows[i].classList.remove('js-mostrar');
          registroTabla.rows[i].classList.add('js-ocultar');
        }
    }
  }