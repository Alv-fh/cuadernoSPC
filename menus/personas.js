// zpersonas.js

// Variables globales específicas para zpersonas
var zpersonas_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zpersonas_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zpersonas_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zpersonas_imagenSeleccionada = sessionStorage.getItem('zpersonas_imagenSeleccionada');
    if (zpersonas_imagenSeleccionada) {
        zpersonas_mostrarPictograma(zpersonas_imagenSeleccionada);
    }
}
function zpersonas_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zpersonas_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zpersonas_imagenesSeleccionadas', JSON.stringify(zpersonas_pictogramasSeleccionados));
}
