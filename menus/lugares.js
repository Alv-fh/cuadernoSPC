// zlugares.js

// Variables globales específicas para zlugares
var zlugares_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zlugares_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zlugares_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zlugares_imagenSeleccionada = sessionStorage.getItem('zlugares_imagenSeleccionada');
    if (zlugares_imagenSeleccionada) {
        zlugares_mostrarPictograma(zlugares_imagenSeleccionada);
    }
}
function zlugares_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zlugares_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zlugares_imagenesSeleccionadas', JSON.stringify(zlugares_pictogramasSeleccionados));
}
