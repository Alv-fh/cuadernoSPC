// Variables globales específicas para descripciones
var todas_imagenesSeleccionadas = {};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('volverMenu').addEventListener('click', function () {
        agregarRutaImagen('descripciones_imagenSeleccionada');
        redirigirAMenu();
    });

    cargarPictogramas();
    cargarImagenSeleccionada();
});

function agregarRutaImagen(clave) {
    var rutaImagen = 'menus/' + sessionStorage.getItem(clave);
    var categoria = obtenerCategoriaDesdeClave(clave);

    // Crear un array para la categoría si aún no existe
    if (!todas_imagenesSeleccionadas[categoria]) {
        todas_imagenesSeleccionadas[categoria] = [];
    }

    // Verificar si la ruta ya está en el array de la categoría antes de agregarla
    if (!todas_imagenesSeleccionadas[categoria].includes(rutaImagen)) {
        todas_imagenesSeleccionadas[categoria].push(rutaImagen);
    }
}

function obtenerCategoriaDesdeClave(clave) {
    // Implementa la lógica para obtener la categoría desde la clave (por ejemplo, usando regex)
    // En este ejemplo, se asume que la categoría es el primer segmento antes de '_imagenSeleccionada'
    var match = clave.match(/^(.+?)_imagenSeleccionada/);
    return match ? match[1] : '';
}

function cargarPictogramas() {
    var imagenesAnteriores = sessionStorage.getItem('todas_imagenesSeleccionadas');

    if (imagenesAnteriores) {
        todas_imagenesSeleccionadas = JSON.parse(imagenesAnteriores);
    }

    for (var i = 0; i < sessionStorage.length; i++) {
        var clave = sessionStorage.key(i);
        if (clave.endsWith('_imagenSeleccionada')) {
            agregarRutaImagen(clave);
        }
    }
}

function cargarImagenSeleccionada() {
    var descripciones_imagenSeleccionada = sessionStorage.getItem('descripciones_imagenSeleccionada');
    if (descripciones_imagenSeleccionada) {
        descripciones_mostrarPictograma(descripciones_imagenSeleccionada);
    }
}

function descripciones_mostrarPictograma(src) {
    var barraBlanca = document.getElementById('imagenSeleccionadaContainer');
    if (barraBlanca) {
        barraBlanca.innerHTML = '';
        var pictogramaSeleccionado = document.createElement('img');
        pictogramaSeleccionado.src = src;
        pictogramaSeleccionado.alt = 'Pictograma Seleccionado';
        pictogramaSeleccionado.classList.add('pictograma-seleccionado');

        barraBlanca.appendChild(pictogramaSeleccionado);
        sessionStorage.setItem('descripciones_imagenSeleccionada', src);
    }
}

function redirigirAMenu() {
    // Almacenar el objeto actualizado en sessionStorage
    sessionStorage.setItem('todas_imagenesSeleccionadas', JSON.stringify(todas_imagenesSeleccionadas));
}
