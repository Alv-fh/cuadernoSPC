document.addEventListener('DOMContentLoaded', function () {
    var imagenesSeleccionadasIndex3 = JSON.parse(sessionStorage.getItem('imagenesSeleccionadasIndex3')) || {};
    mostrarImagenes(imagenesSeleccionadasIndex3);
});
function volverLimpiar() {
    // Implementa aquí la lógica para volver a Index2 y limpiar pictogramas
    // Puedes utilizar window.location.href para la redirección y sessionStorage.clear() para limpiar el sessionStorage
    window.location.href = 'index2.html';
    sessionStorage.clear();
}
function mostrarImagenes(imagenes) {
    var container = document.getElementById('container');
    container.innerHTML = '';

    var numImagenes = 0;
    for (var categoria in imagenes) {
        numImagenes += imagenes[categoria].length;
    }

    var maxAltura = window.innerHeight / 2; // Establece el límite máximo de altura para las imágenes

    var alturaImagen = Math.min(maxAltura / Math.ceil(numImagenes / 3), maxAltura); // Divide en 3 columnas, ajusta según sea necesario

    for (var categoria in imagenes) {
        imagenes[categoria].forEach(function (rutaImagen) {
            if (rutaImagen && typeof rutaImagen === 'string' && rutaImagen.toLowerCase() !== 'menus/' + 'null') {
                var imgElement = document.createElement('img');
                imgElement.src = rutaImagen;
                imgElement.classList.add(obtenerNombreClaseSegunRuta(rutaImagen));
                imgElement.style.borderStyle = 'solid';
                imgElement.style.borderWidth = '5px';
                imgElement.style.margin = '10px';
                imgElement.style.maxHeight = alturaImagen + 'px';
                imgElement.style.width = 'auto';

                container.appendChild(imgElement);
            }
        });
    }
}
function obtenerNombreClaseSegunRuta(ruta) {
    if (ruta.includes('acciones/')) {
        return 'acciones-principal';
    } else if (ruta.includes('comidas/')) {
        return 'comidas-principal';
    } else if (ruta.includes('descripciones/')) {
        return 'descripciones-principal';
    } else if (ruta.includes('lugares/')) {
        return 'lugares-principal';
    } else if (ruta.includes('objetos/')) {
        return 'objetos-principal';
    } else if (ruta.includes('personas/')) {
        return 'personas-principal';
    } else if (ruta.includes('respuestas/')) {
        return 'respuestas-principal';
    } else {
        return 'otras-principal';
    }
}
