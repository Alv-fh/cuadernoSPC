// zdescripciones.js

// Variables globales específicas para zdescripciones
var zdescripciones_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zdescripciones_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zdescripciones_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zdescripciones_imagenSeleccionada = sessionStorage.getItem('zdescripciones_imagenSeleccionada');
    if (zdescripciones_imagenSeleccionada) {
        zdescripciones_mostrarPictograma(zdescripciones_imagenSeleccionada);
    }
}
function zdescripciones_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zdescripciones_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zdescipciones_imagenesSeleccionadas', JSON.stringify(zdescripciones_pictogramasSeleccionados));
}
