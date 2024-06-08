<?php
// Inclure le fichier de connexion à la base de données
include 'connexion_bd.php';

// Vérifier si le formulaire de connexion a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $email = $_POST['email'];
    $mot_de_passe = $_POST['mot_de_passe'];

    // Préparer et exécuter la requête SQL pour récupérer les informations de l'utilisateur à partir de son adresse e-mail
    $sql = "SELECT * FROM utilisateurs WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Utilisateur trouvé, vérifier le mot de passe
        $row = $result->fetch_assoc();
        if (password_verify($mot_de_passe, $row['mot_de_passe'])) {
            // Mot de passe correct, connecter l'utilisateur
            session_start();
            $_SESSION['id_utilisateur'] = $row['id_utilisateur'];
            $_SESSION['nom_utilisateur'] = $row['nom_utilisateur'];
            echo "Vous êtes maintenant connecté.";
        } else {
            echo "Mot de passe incorrect.";
        }
    } else {
        echo "Aucun utilisateur trouvé avec cet e-mail.";
    }
    // Fermer la connexion à la base de données
    $conn->close();
}
?>
