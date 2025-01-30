let listaAmigos = [];

function activarBotones() {
    document.getElementById("agregar").removeAttribute('disabled')
    document.getElementById("botonSorteo").removeAttribute('disabled')
    return;
}
function desactivarBotones() {
    document.getElementById("agregar").setAttribute('disabled', 'true')
    document.getElementById("botonSorteo").setAttribute('disabled', 'true')
    return;
}

function reiniciarJuego() {
    alert('has reiniciado el Juego');
    activarBotones();
    location.reload();
    return;
}

// Asigna texto al HTML desde js
function asignarTexto(etiqueta, texto) {
    let etiquetaHtml = document.querySelector(etiqueta);
    etiquetaHtml.innerHTML = texto;
    return;
} 
// Verifica si lacaja de texto esta vacia y luego agrega los datos al arreglo
function agregarAmigo() {
   let amigo = document.getElementById('amigo').value;
        if (amigo == '') {
            alert('Por favor ingrese un nombre');
            
         } else {
            listaAmigos.push(amigo);
            limpiarTexto();
            listaAmigos.forEach((element) => console.log(element));
            asignarTexto('ul', listaAmigos );
            activarBotones();
         }
   return;
}

function limpiarTexto() {
    let textoCaja = document.getElementById("amigo");
    textoCaja.value = '';
    return;
}

function sortearAmigo()  {
    if ( listaAmigos.length === 0 ) { 
        alert('la lista esta vacia')
     } else {
        let indiceLista = Math.floor(Math.random() * listaAmigos.length );
    document.getElementById("resultado").innerHTML = `Tu amigo secreto es "${listaAmigos[indiceLista]}"`;
    console.log(indiceLista);
    alert("Felicidades ya tienes tu amigo secreto");
    desactivarBotones();
     }
    return;

}

asignarTexto('h1', 'Juego del Amigo Secreto');
asignarTexto('h2', 'Ingresa los nombres de tus amigos');

