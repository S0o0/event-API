// Fonction pour ouvrir un popup plein écran sans barre d'URL
function openPopupFullScreen(url, title) {
    const width = screen.width;
    const height = screen.height;
    const left = 0;
    const top = 0;

    const features = [
        `width=${width}`,
        `height=${height}`,
        `top=${top}`,
        `left=${left}`,
        'fullscreen=yes',
        'resizable=no',
        'scrollbars=no',
        'status=no',
        'toolbar=no',
        'location=no',
        'menubar=no'
    ].join(',');

    const newWindow = window.open(url, title, features);

    // Focus sur la popup
    if (window.focus && newWindow) newWindow.focus();

    return newWindow;
}

// Gestion des clics sur les liens avec la classe .popup-link
document.querySelectorAll('.popup-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const url = link.href;
        const title = link.dataset.module || 'Popup';

        if (url === '#' || !url) {
            alert('Aucune URL à ouvrir pour ce lien.');
            return;
        }

        openPopupFullScreen(url, title);
    });
});