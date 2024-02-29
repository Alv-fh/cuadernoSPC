document.addEventListener('DOMContentLoaded', function () {
    var menuPrincipalContainer = document.getElementById('menuPrincipalContainer');

    cargarMenuPrincipal();

    document.getElementById('volverMenu').addEventListener('click', volverMenu);

    window.addEventListener('beforeunload', limpiarSessionStorage);

    function cargarMenuPrincipal() {
        menuPrincipalContainer.innerHTML = '';

        var todas_imagenesSeleccionadas = JSON.parse(sessionStorage.getItem('todas_imagenesSeleccionadas')) || {};
        
        for (var categoria in todas_imagenesSeleccionadas) {
            todas_imagenesSeleccionadas[categoria].forEach(function (rutaImagen) {
                agregarImagenAlMenu(rutaImagen);
            });
        }
    }

    function agregarImagenAlMenu(rutaImagen) {        
        if (rutaImagen && typeof rutaImagen === 'string' && rutaImagen.toLowerCase() !== 'menus/' + 'null') {
            var imgElement = document.createElement('img');
            imgElement.src = rutaImagen;
            imgElement.classList.add(obtenerNombreClaseSegunRuta(rutaImagen));
            menuPrincipalContainer.appendChild(imgElement);
    
        }
    }
    function volverMenu() {
        sessionStorage.clear();
        location.reload();
    }

    function obtenerNombreClaseSegunRuta(ruta) {
        var categorias = ['acciones', 'comidas', 'descripciones', 'lugares', 'objetos', 'personas', 'respuestas'];

        for (var i = 0; i < categorias.length; i++) {
            if (ruta.includes(categorias[i] + '/')) {
                return categorias[i] + '-principal';
            }
        }

        return 'otras-principal';
    }  
});
function limpiarSessionStorage() {
        sessionStorage.clear();
        location.reload();
}
document.getElementById('ok').addEventListener('click', OK);
function OK() {
    window.location.href = 'index3.html';
    var todas_imagenesSeleccionadas = JSON.parse(sessionStorage.getItem('todas_imagenesSeleccionadas')) || {};

        // Guardar las imágenes seleccionadas en el sessionStorage de index3.html
        sessionStorage.setItem('imagenesSeleccionadasIndex3', JSON.stringify(todas_imagenesSeleccionadas));
}
