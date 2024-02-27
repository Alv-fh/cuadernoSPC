// zacciones.js

// Variables globales específicas para zacciones
var zacciones_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('_acciones_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zacciones_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var _acciones_imagenSeleccionada = sessionStorage.getItem('_acciones_imagenSeleccionada');
    if (_acciones_imagenSeleccionada) {
        zacciones_mostrarPictograma(_acciones_imagenSeleccionada);
    }
}
function zacciones_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('_acciones_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zacciones_imagenesSeleccionadas', JSON.stringify(zacciones_pictogramasSeleccionados));
}
