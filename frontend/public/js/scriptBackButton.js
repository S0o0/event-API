document.getElementById("btn-admin").addEventListener("click", function () {
    const motDePasse = prompt("Entrez le mot de passe admin pour quitter :");
    if (motDePasse === "1234") {
        window.location.href = "index_hub.html";
    } else {
        alert("Mot de passe incorrect.");
    }
});