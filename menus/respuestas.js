// zrespuestas.js

// Variables globales específicas para zrespuestas
var zrespuestas_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zrespuestas_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zrespuestas_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zrespuestas_imagenSeleccionada = sessionStorage.getItem('zrespuestas_imagenSeleccionada');
    if (zrespuestas_imagenSeleccionada) {
        zrespuestas_mostrarPictograma(zrespuestas_imagenSeleccionada);
    }
}
function zrespuestas_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zrespuestas_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zrespuestas_imagenesSeleccionadas', JSON.stringify(zrespuestas_pictogramasSeleccionados));
}
