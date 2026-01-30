document.addEventListener('DOMContentLoaded', () => {
    
    // Parallax logic
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const heroLayers = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Animate Background Layers
        heroLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.2;
            layer.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Animate Floating Elements
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.1;
            const yPos = -(scrolled * speed * 100);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Simple 3D Tilt Effect for Hero Card
    const heroCard = document.querySelector('.glass-card');
    if(heroCard) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            heroCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            heroCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            heroCard.style.transition = 'all 0.5s ease';
        });
        
        document.addEventListener('mouseenter', () => {
            heroCard.style.transition = 'none';
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add base class for animation
        observer.observe(section);
    });
});
