let listaAmigos = [];

// Verifica si se ingreso u nombre en la caja
function validar(){
    let amigo1 = document.getElementById('amigo').value;
    console.log(amigo1);
    if ( amigo1 == "" ){
        alert('Por favor ingrese un nombre');
        return;
    }
};

// Asigna texto al HTML desde js
function asignarTexto(etiqueta, texto) {
    let etiquetaHtml = document.querySelector(etiqueta);
    etiquetaHtml.innerHTML = texto;
    return;

}

function agregarAmigo() {
   validar();
   let amigo = document.getElementById('amigo').value;
   listaAmigos.push(amigo);
   limpiarTexto();
   listaAmigos.forEach((element) => console.log(element));
   asignarTexto('ul', listaAmigos );
   return;
   
}

function limpiarTexto() {
    let textoCaja = document.getElementById("amigo");
    textoCaja.value = '';


}

function sortearAmigo()  {
    let indiceLista = Math.floor(Math.random() * listaAmigos.length );
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es "${listaAmigos[indiceLista]}"`;
    console.log(indiceLista);
   

}



/*function limpiarTexto() {
    let limpiarTexto = document.getElementById('amigo');
    limpiarTexto.value = '';

}*/

asignarTexto('h1', 'Juego del Amigo Secreto');
asignarTexto('h2', 'ingresa los nombres de tus amigos');

