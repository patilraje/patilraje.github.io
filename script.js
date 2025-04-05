// script.js

// DOMContentLoaded ensures the script runs after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll-triggered animations
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    sections.forEach((section) => observer.observe(section));

    // 2. Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // 3. Particles.js Configuration
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js config loaded');
    });
});
