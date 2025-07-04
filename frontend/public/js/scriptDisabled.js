function toggleModule(checkbox) {
    const module = checkbox.dataset.module;
    if (checkbox.checked) {
        localStorage.setItem(`module_${module}`, 'enabled');
    } else {
        localStorage.setItem(`module_${module}`, 'disabled');
    }
    updateModuleState(module);
}

function updateModuleState(module) {
    const link = document.querySelector(`a[data-module="${module}"]`);
    const checkbox = document.querySelector(`input[type="checkbox"][data-module="${module}"]`);
    const label = document.getElementById(`status-${module}`);
    const input = document.querySelector(`input.input-url[data-module="${module}"]`);
    const saveBtn = document.querySelector(`button.save-btn[data-module="${module}"]`);

    if (!link || !checkbox || !label) return; // input et saveBtn sont optionnels pour certains modules

    if (checkbox.checked) {
        link.classList.remove('disabled');
        link.removeEventListener('click', preventClick);

        if (input) {
            input.disabled = false;
            input.classList.remove('disabled');
        }
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.classList.remove('disabled');
        }
    } else {
        link.classList.add('disabled');
        link.addEventListener('click', preventClick);

        if (input) {
            input.disabled = true;
            input.classList.add('disabled');
        }
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.classList.add('disabled');
        }
    }
}


function preventClick(e) {
    e.preventDefault();
    alert("Ce module est désactivé.");
}

// Au chargement de la page, on initialise l'état des modules
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="checkbox"][data-module]').forEach(checkbox => {
        const module = checkbox.dataset.module;
        const isEnabled = localStorage.getItem(`module_${module}`) !== 'disabled';
        checkbox.checked = isEnabled;
        updateModuleState(module);
        checkbox.addEventListener('change', () => toggleModule(checkbox));
    });
});