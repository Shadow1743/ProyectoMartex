// Estado
let metodoSeleccionado = null;

// Elementos del DOM
const btnEfectivo = document.getElementById('btn-efectivo');
const btnTarjeta = document.getElementById('btn-tarjeta');
const formularioTarjeta = document.getElementById('formulario-tarjeta');
const mensajeEfectivo = document.getElementById('mensaje-efectivo');
const btnConfirmar = document.getElementById('btn-confirmar-pago');
const indicadorMetodo = document.getElementById('metodo-seleccionado-indicador');
const modalExito = document.getElementById('modal-exito');
const mensajeModal = document.getElementById('mensaje-modal');
const totalPrecio = document.getElementById('total-precio');
const itemsLista = document.getElementById('items-lista');
const carritoVacio = document.getElementById('carrito-vacio');
const carritoContenido = document.getElementById('carrito-contenido');

// Cargar carrito desde localStorage
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoVacio.classList.remove('hidden');
        carritoContenido.classList.add('hidden');
        return;
    }

    carritoVacio.classList.add('hidden');
    carritoContenido.classList.remove('hidden');

    let total = 0;
    itemsLista.innerHTML = '';

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100';
        itemElement.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="font-medium text-azul-marino">${item.nombre}</span>
                <span class="text-sm text-gray-500">x${item.cantidad}</span>
            </div>
            <span class="font-semibold text-verde-quirurgico">$${subtotal.toFixed(2)}</span>
        `;
        itemsLista.appendChild(itemElement);
    });

    totalPrecio.textContent = total.toFixed(2);
}

// Seleccionar método de pago
function seleccionarMetodo(metodo) {
    metodoSeleccionado = metodo;

    // Resetear estilos de botones
    btnEfectivo.classList.remove('border-verde-quirurgico', 'bg-green-50');
    btnTarjeta.classList.remove('border-verde-quirurgico', 'bg-green-50');

    // Ocultar ambos paneles
    formularioTarjeta.classList.add('hidden');
    mensajeEfectivo.classList.add('hidden');

    if (metodo === 'efectivo') {
        btnEfectivo.classList.add('border-verde-quirurgico', 'bg-green-50');
        mensajeEfectivo.classList.remove('hidden');
        indicadorMetodo.textContent = 'Pago en efectivo seleccionado';
        btnConfirmar.disabled = false;
    } else if (metodo === 'tarjeta') {
        btnTarjeta.classList.add('border-verde-quirurgico', 'bg-green-50');
        formularioTarjeta.classList.remove('hidden');
        indicadorMetodo.textContent = 'Pago con tarjeta seleccionado';
        btnConfirmar.disabled = false;
    }
}

// Formatear número de tarjeta mientras se escribe
document.addEventListener('DOMContentLoaded', () => {
    const numeroTarjeta = document.getElementById('numero-tarjeta');
    const fechaExpiracion = document.getElementById('fecha-expiracion');

    if (numeroTarjeta) {
        numeroTarjeta.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
            if (valor.length > 16) valor = valor.slice(0, 16);
            // Agregar espacios cada 4 dígitos
            const partes = valor.match(/.{1,4}/g);
            e.target.value = partes ? partes.join(' ') : '';
        });
    }

    if (fechaExpiracion) {
        fechaExpiracion.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
            if (valor.length > 4) valor = valor.slice(0, 4);
            if (valor.length >= 2) {
                valor = valor.slice(0, 2) + '/' + valor.slice(2);
            }
            e.target.value = valor;
        });
    }
});

// Validar formulario de tarjeta
function validarFormularioTarjeta() {
    const numero = document.getElementById('numero-tarjeta').value.replace(/\s/g, '');
    const fecha = document.getElementById('fecha-expiracion').value;
    const cvv = document.getElementById('cvv').value;
    const nombre = document.getElementById('nombre-titular').value.trim();

    if (numero.length !== 16) {
        alert('El número de tarjeta debe tener 16 dígitos.');
        return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(fecha)) {
        alert('La fecha de expiración debe tener el formato MM/AA.');
        return false;
    }
    if (cvv.length < 3 || cvv.length > 4) {
        alert('El CVV debe tener 3 o 4 dígitos.');
        return false;
    }
    if (nombre === '') {
        alert('Debes ingresar el nombre del titular.');
        return false;
    }

    // Validar que la fecha no esté vencida
    const [mes, anio] = fecha.split('/');
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1;
    const anioActual = parseInt(fechaActual.getFullYear().toString().slice(-2));

    if (parseInt(anio) < anioActual || (parseInt(anio) === anioActual && parseInt(mes) < mesActual)) {
        alert('La tarjeta está vencida.');
        return false;
    }

    return true;
}

// Confirmar pago
function confirmarPago() {
    if (!metodoSeleccionado) {
        alert('Por favor selecciona un método de pago.');
        return;
    }

    if (metodoSeleccionado === 'tarjeta') {
        if (!validarFormularioTarjeta()) return;
        mensajeModal.textContent = 'El pago con tarjeta se ha procesado correctamente. Recibirás un correo de confirmación.';
    } else {
        mensajeModal.textContent = 'Tu pedido ha sido registrado. Pagarás en efectivo al recibirlo.';
    }

    // Mostrar modal de éxito
    modalExito.classList.remove('hidden');

    // Limpiar carrito
    localStorage.removeItem('carrito');
}

// Cerrar modal al hacer clic fuera
modalExito.addEventListener('click', (e) => {
    if (e.target === modalExito) {
        modalExito.classList.add('hidden');
    }
});

// Inicializar
cargarCarrito();