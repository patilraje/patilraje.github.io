// Initialize Particles.js
particlesJS.load('particles-js', '/assets/particles.json', () => {
    console.log('Particles.js loaded');
});

// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));
});
