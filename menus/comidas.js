// zcomidas.js

// Variables globales específicas para zcomidas
var zcomidas_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zcomidas_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zcomidas_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zcomidas_imagenSeleccionada = sessionStorage.getItem('zcomidas_imagenSeleccionada');
    if (zcomidas_imagenSeleccionada) {
        zcomidas_mostrarPictograma(zcomidas_imagenSeleccionada);
    }
}
function zcomidas_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zcomidas_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zcomidas_imagenesSeleccionadas', JSON.stringify(zcomidas_pictogramasSeleccionados));
}
