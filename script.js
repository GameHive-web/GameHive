// Fonction pour afficher un message de bienvenue
function afficherMessageBienvenue() {
    alert("Bienvenue sur Game Hive ! Découvrez nos jeux passionnants et plongez dans l'univers du divertissement.");
}

// Fonction pour télécharger un jeu
function telechargerJeu(nomJeu) {
    alert("Vous avez téléchargé le jeu : " + nomJeu);
}

// Fonction pour acheter un jeu
function acheterJeu(nomJeu, prixJeu) {
    alert("Vous avez acheté le jeu : " + nomJeu + " au prix de " + prixJeu + " €");
}

// Ajouter des événements aux boutons de téléchargement et d'achat des jeux
document.addEventListener("DOMContentLoaded", function() {
    // Afficher un message de bienvenue
    afficherMessageBienvenue();

    // Ajouter des événements aux boutons de téléchargement des jeux
    const boutonsTelechargement = document.querySelectorAll(".game button:nth-of-type(1)");
    boutonsTelechargement.forEach(function(bouton) {
        bouton.addEventListener("click", function() {
            const nomJeu = this.parentNode.querySelector("h3").textContent;
            telechargerJeu(nomJeu);
        });
    });

    // Ajouter des événements aux boutons d'achat des jeux
    const boutonsAchat = document.querySelectorAll(".game button:nth-of-type(2)");
    boutonsAchat.forEach(function(bouton) {
        bouton.addEventListener("click", function() {
            const nomJeu = this.parentNode.querySelector("h3").textContent;
            const prixJeu = this.parentNode.querySelector(".price").textContent;
            acheterJeu(nomJeu, prixJeu);
        });
    });

    // Carrousel d'images
    // Remplace "carousel" par l'identifiant de ton carrousel
    const carousel = document.getElementById("carousel");
    let index = 0;
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Remplace ces noms de fichiers par les tiens
    function afficherImageSuivante() {
        index = (index + 1) % images.length;
        carousel.src = images[index];
    }
    setInterval(afficherImageSuivante, 5000); // Changement d'image toutes les 5 secondes

    // Barre de navigation collante
    window.addEventListener("scroll", function() {
        const barreNavigation = document.querySelector("nav");
        if (window.scrollY > 50) {
            barreNavigation.classList.add("fixe");
        } else {
            barreNavigation.classList.remove("fixe");
        }
    });
});
