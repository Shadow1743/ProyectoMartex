// js/ui-loader.js

const components = {
    'navbar-container': `
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
    </nav>`,

    'footer-container': `
    <footer class="bg-azul-marino text-white pt-12 pb-6 mt-auto">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h3 class="text-2xl font-bold text-verde-quirurgico mb-2">MARTEX</h3>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Uniformes profesionales con la calidad que inspira confianza. Confeccionados en Usulután, El Salvador.
                </p>
                <p class="text-gray-400 text-xs mt-3">&copy; 2026 Martex Uniformes. Todos los derechos reservados.</p>
            </div>

            <div>
                <h4 class="text-lg font-semibold text-white mb-3">Contacto</h4>
                <ul class="space-y-2 text-gray-300 text-sm">
                    <li class="flex items-center justify-center md:justify-start gap-2">
                        <i class="fas fa-map-marker-alt text-verde-quirurgico w-5 text-center"></i>
                        <span>CALLE DR. FEDERICO PENADO FINAL, Usulutan</span>
                    </li>
                    <li class="flex items-center justify-center md:justify-start gap-2">
                        <i class="fas fa-phone-alt text-verde-quirurgico w-5 text-center"></i>
                        <span>+503 6049-7383</span>
                    </li>
                    <li class="flex items-center justify-center md:justify-start gap-2">
                        <i class="fas fa-mobile-alt text-verde-quirurgico w-5 text-center"></i>
                        <span>+503 7670-1234</span>
                    </li>
                    <li class="flex items-center justify-center md:justify-start gap-2">
                        <i class="far fa-envelope text-verde-quirurgico w-5 text-center"></i>
                        <span>info@martexuniforms.com</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold text-white mb-3">Síguenos</h4>
                <p class="text-gray-300 text-sm mb-4">Entérate de promociones y nuevos diseños.</p>
                <div class="flex justify-center md:justify-start space-x-4">
                    <a href="https://www.instagram.com/martexsv?igsh=a3Izc2YzZGNucmVl" class="w-10 h-10 bg-azul-pantera hover:bg-verde-quirurgico rounded-full flex items-center justify-center transition" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://web.whatsapp.com/" class="w-10 h-10 bg-azul-pantera hover:bg-verde-quirurgico rounded-full flex items-center justify-center transition" aria-label="WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-azul-pantera hover:bg-verde-quirurgico rounded-full flex items-center justify-center transition" aria-label="TikTok">
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
            <p>Hecho con orgullo en <span class="text-verde-quirurgico font-semibold">Usulután, El Salvador</span> 🇸🇻</p>
        </div>
    </footer>`
};

document.addEventListener("DOMContentLoaded", () => {
    Object.keys(components).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = components[id];
        }
    });
});