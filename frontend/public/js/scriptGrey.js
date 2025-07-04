document.addEventListener("DOMContentLoaded", () => {
    // Récupère tous les liens qui ont un data-module
    const links = document.querySelectorAll('[data-module]');

    links.forEach(link => {
        const module = link.dataset.module;
        const isEnabled = localStorage.getItem(`module_${module}`) !== 'disabled';

        if (!isEnabled) {
            link.classList.add('disabled');
            link.addEventListener('click', e => {
                e.preventDefault();
                alert(`Le module "${module}" est désactivé.`);
            });
        }
    });
});
