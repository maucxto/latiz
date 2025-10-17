// Scripts principales
document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('hidden');
        });
    }

    // Smooth scroll para enlaces de navegación
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Placeholder para más funcionalidades, como validación de formulario
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica futura para envío de formulario (e.g., via AJAX)
            alert('Formulario enviado (simulación)');
        });
    }
});
