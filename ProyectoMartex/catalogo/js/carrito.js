function renderizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('martex-carrito')) || [];
    const lista = document.getElementById('items-lista');
    const totalElem = document.getElementById('total-precio');
    
    if (carrito.length === 0) {
        document.getElementById('carrito-vacio').classList.remove('hidden');
        document.getElementById('carrito-contenido').classList.add('hidden');
        return;
    }

    lista.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                    <h4 class="font-bold">${item.nombre}</h4>
                    <p class="text-sm text-gray-500">${item.tela}</p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-azul-pantera">$${item.precio.toFixed(2)}</p>
                    <button onclick="removerItem(${index})" class="text-xs text-red-500 underline">Quitar</button>
                </div>
            </div>
        `;
    });

    totalElem.innerText = total.toFixed(2);
}

window.removerItem = (index) => {
    const carrito = JSON.parse(localStorage.getItem('martex-carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('martex-carrito', JSON.stringify(carrito));
    renderizarCarrito();
    actualizarContador();
};

window.procesarPago = () => {
    alert("🚀 Conectando con la pasarela de pagos...\n\n¡Gracias por tu compra en Martex!");
    localStorage.removeItem('martex-carrito');
    window.location.href = 'index.html';
};

renderizarCarrito();