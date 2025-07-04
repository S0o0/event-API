document.addEventListener('DOMContentLoaded', () => {
    const accueilLink = document.getElementById('accueil-link');
    const input = document.getElementById('input-url-accueil');

    const initialUrl = localStorage.getItem('accueilUrl');
    if (initialUrl) {
        accueilLink.href = initialUrl;
        input.value = initialUrl;
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'accueilUrl') {
            const newUrl = event.newValue;
            accueilLink.href = newUrl || '#';
            input.value = newUrl || '';
        }
    });
});
