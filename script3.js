document.addEventListener('DOMContentLoaded', function () {
    cargarMenuPrincipal();
    document.getElementById('volverMenu').addEventListener('click', function () {
    });
    window.addEventListener('beforeunload', function () {
        limpiarSessionStorage();
    });
});
function seleccionarImagen(rutaImagen) {
    var numeroOrden = obtenerSiguienteNumeroOrden();
    var clave = 'imagenSeleccionada_' + numeroOrden;
    sessionStorage.setItem(clave, rutaImagen);
}
function obtenerSiguienteNumeroOrden() {
    var contador = sessionStorage.getItem('contadorOrden') || 1;
    sessionStorage.setItem('contadorOrden', ++contador);
    return contador;
}
function cargarMenuPrincipal() {
    var menuPrincipalContainer = document.getElementById('menuPrincipalContainer');
    menuPrincipalContainer.innerHTML = '';  // Limpiar el contenedor antes de cargar el menú principal
    var sessionStorageKeys = Object.keys(sessionStorage);
    var imagenesSeleccionadas = [];
    for (var i = 0; i < sessionStorageKeys.length; i++) {
        if (sessionStorageKeys[i].endsWith('imagenSeleccionada')) {
            var rutaImagen = 'menus/' + sessionStorage.getItem(sessionStorageKeys[i]);
            imagenesSeleccionadas.push({ rutaImagen, numeroOrden: obtenerNumeroOrdenSegunClave(sessionStorageKeys[i]) });
        }
    }
    imagenesSeleccionadas.forEach(function (imagen) {
        var imgElement = document.createElement('img');
        imgElement.src = imagen.rutaImagen;
        imgElement.classList.add(obtenerNombreClaseSegunRuta(imagen.rutaImagen)); // Agrega la clase según la ruta
        menuPrincipalContainer.appendChild(imgElement);
    });
}
function obtenerNumeroOrdenSegunClave(clave) {
    var match = clave.match(/(\d+)$/);
    return match ? parseInt(match[0]) : 0;
}
function obtenerNombreClaseSegunRuta(ruta) {
    return 'imagen-principal';
}
function limpiarSessionStorage() {
    sessionStorage.clear();
    location.reload();
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
function limpiarSessionStorage() {
    sessionStorage.clear();
    location.reload();
}
