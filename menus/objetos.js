// zobjetos.js

// Variables globales específicas para zobjetos
var zobjetos_pictogramasSeleccionados = [];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', redirigirAMenu);
    cargarPictogramas();
    cargarImagenSeleccionada();
});
function cargarPictogramas() {
    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.startsWith('zobjetos_imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
            agregarPictogramaSeleccionado(rutaImagen);
        }
    }
}
function agregarPictogramaSeleccionado(src) {
    zobjetos_pictogramasSeleccionados.push(src);
}
function cargarImagenSeleccionada() {
    var zobjetos_imagenSeleccionada = sessionStorage.getItem('zobjetos_imagenSeleccionada');
    if (zobjetos_imagenSeleccionada) {
        zobjetos_mostrarPictograma(zobjetos_imagenSeleccionada);
    }
}
function zobjetos_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('zobjetos_imagenSeleccionada', src);
    }
}
function redirigirAMenu() {
    sessionStorage.setItem('zobjetos_imagenesSeleccionadas', JSON.stringify(zobjetos_pictogramasSeleccionados));
}
