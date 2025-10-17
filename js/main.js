// Scripts principales
document.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        splash.style.opacity = '0';
        splash.addEventListener('transitionend', () => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        }, { once: true });
    }, 3500); // After animation

    // Header element
    const header = document.querySelector('.header');

    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation && header) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('hidden');
            header.classList.toggle('menu-active');
        });
    }

    // Toggle desktop menu dropdown
    const menuButton = document.getElementById('menu-button');
    if (menuButton && navigation) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
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
                let top;
                if (targetId === 'hero') {
                    // Para "Inicio", ir directamente al top
                    top = 0;
                } else {
                    // Para otros, aplicar offset del header
                    const headerHeight = header.offsetHeight;
                    top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                }
                window.scrollTo({ top, behavior: 'smooth' });
                // Close menu if open
                const navigationInner = document.querySelector('.navigation');
                const menuToggleInner = document.getElementById('menu-toggle');
                if (navigationInner && !navigationInner.classList.contains('hidden')) {
                    navigationInner.classList.add('hidden');
                    if (menuToggleInner) {
                        menuToggleInner.classList.remove('active');
                    }
                    header.classList.remove('menu-active');
                }
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

    // Active navigation on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    setActiveLink(); // Initial call
    window.addEventListener('scroll', setActiveLink);

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
