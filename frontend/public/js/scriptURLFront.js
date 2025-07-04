document.addEventListener('DOMContentLoaded', () => {
    const accueilLink = document.getElementById('accueil-link');
    const input = document.getElementById('input-url-accueil');
    const btn = document.getElementById('save-btn-accueil');

    const rawHref = accueilLink.getAttribute('href');
    if (rawHref && rawHref !== '#') {
        input.value = accueilLink.href;
    }

    btn.addEventListener('click', () => {
        let url = input.value.trim();
        if (url) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            localStorage.setItem('accueilUrl', url);
            location.reload();
        } else {
            alert("Merci d'entrer une URL");
        }
    });
});
