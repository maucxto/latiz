// Scripts para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        // Insertar el texto del logo (asumiendo que el logo es texto "Latiz" por ahora; se puede reemplazar con SVG o imagen)
        logoContainer.innerHTML = 'LATIZ';
        
        // Agregar clase para activar animaciones si es necesario (en este caso, la animación es aplicada directamente via CSS)
        // logoContainer.classList.add('animate-lattice'); // Si se quiere trigger manual
        
        // Opcional: Usar Intersection Observer para animar al entrar en vista
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Aquí se podría agregar lógica adicional, pero CSS maneja la animación principal
                }
            });
        });
        observer.observe(logoContainer);
    }
});
