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

    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, { threshold: 0.1 });
    animateElements.forEach(el => observer.observe(el));

    // Footer logo scroll to top
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    window.changeSlide = (direction) => {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev-slide');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides.forEach(slide => slide.classList.remove('prev-slide', 'next-slide'));
        slides[currentSlide].classList.add('active');
    };
});
