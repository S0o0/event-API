// Sélection de tous les liens qui mènent vers une page .html
const links = document.querySelectorAll('a[href$=".html"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');

        // Active l'animation de transition
        const overlay = document.getElementById('transition-overlay');
        overlay.classList.add('active');

        // Attend que la transition soit visible, puis redirige
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Correspond au délai de transition CSS
    });
});

// Optionnel : effet fondu entrant au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('active');
});

// Supprimer l'overlay si on revient en arrière (page from cache)
window.addEventListener('pageshow', (event) => {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.remove('active');
});