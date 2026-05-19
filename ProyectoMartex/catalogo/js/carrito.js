/**
 * Función para manejar el clic en el botón "Añadir" capturando la talla
 * @param {string} nombreProducto - El nombre del producto seleccionado
 * @param {number} precioProducto - El precio del producto
 * @param {string} idSelectTalla - El id del elemento HTML <select> de la talla
 */
function agregarAlCarrito(nombreProducto, precioProducto, idSelectTalla) {
    // Obtener la talla seleccionada del elemento select correspondiente
    const selectElement = document.getElementById(idSelectTalla);
    const tallaSeleccionada = selectElement ? selectElement.value : 'M';

    // Obtener el estado actual del carrito en localStorage o inicializarlo vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Estructurar el nuevo producto incluyendo la propiedad 'talla'
    const nuevoProducto = {
        nombre: nombreProducto,
        precio: precioProducto,
        talla: tallaSeleccionada,
        cantidad: 1
    };

    // Agregar el producto al arreglo del carrito
    carrito.push(nuevoProducto);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    console.log(`Guardando en carrito: ${nombreProducto} - Talla: ${tallaSeleccionada} - $${precioProducto}`);

    // Seleccionar los elementos de control del modal de confirmación
    const modal = document.getElementById('modal-carrito');
    const textoModal = document.getElementById('modal-producto-texto');

    // Personalizar el texto interno del modal para mostrar los detalles elegidos
    textoModal.innerHTML = `Has añadido <strong>${nombreProducto}</strong> (Talla: <strong>${tallaSeleccionada}</strong>) a tu carrito exitosamente.`;

    // Hacer visible el modal cambiando las clases de Tailwind CSS
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

/**
 * Función para ocultar el modal y permitir al usuario seguir navegando en el catálogo
 */
function cerrarModal() {
    const modal = document.getElementById('modal-carrito');
    
    // Ocultar el modal regresando a la configuración por defecto
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

/**
 * Función para redirigir directamente al flujo de procesamiento de pago
 */
function irAPago() {
    // Redirigir hacia la página encargada de procesar el pago final
    window.location.href = 'pago.html';
}