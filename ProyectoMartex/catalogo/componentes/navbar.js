class MainNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-azul-marino text-white p-4 sticky top-0 z-50 shadow-md">
                <div class="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-verde-quirurgico cursor-pointer" onclick="window.location.href='index.html'">MARTEX</h1>
                    <div class="space-x-6 font-medium text-sm md:text-base">
                        <a href="index.html" class="text-verde-quirurgico border-b-2 border-verde-quirurgico pb-1">Inicio</a>
                        <a href="nosotros.html" class="hover:text-verde-quirurgico transition">Nosotros</a>
                        <a href="catalogo.html" class="hover:text-verde-quirurgico transition">Catálogo</a>
                        <a href="carrito.html" class="bg-azul-pantera hover:bg-verde-quirurgico px-4 py-2 rounded-lg transition">Carrito (<span id="cart-count">0</span>)</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

// Registramos el nuevo elemento con el nombre que queramos usar en HTML
customElements.define('main-navbar', MainNavbar);