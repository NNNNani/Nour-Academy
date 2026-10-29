
let cours = [];
let panier = [];

const liste = document.getElementById("courseGrid");
const recherche = document.getElementById("filterSearch");
const categorie = document.getElementById("filterSubject");

const panierItems = document.getElementById("cartItems");
const panierItemss = document.getElementsByClassName("cartItems");
const panierTotal = document.getElementById("cartTotal");
const panierCount = document.getElementById("cartCount");

//  Charger les cours
// fetch("./data/data.json")
fetch("./data/data.json")
    .then(response => response.json())
    .then(response => response.json())
    .then(data => {

        cours = data
        afficher();
    });

//  Afficher les cours
function afficher() {

    liste.innerHTML = "";
    liste.innerHTML = "";

    let texte = recherche.value.toLowerCase()
    let cat = categorie.value;

    // for (let i = cours ) {
    for (let i = 0; i < cours.length; i++) {
        let c = cours [i];

        // if (!c.title.toLowerCase().includes(texte)) {
        if ( !c.title.toLowerCase().includes(texte)) {
            continue;
        }

        if (cat !== "" && cat !== "all" && c.subject !== cat) {
            continue;
        }

        liste.innerHTML += `
            <div class="course-card">
                <h2>${c.title}</h2>
                <p>${c.subject}</p>
                <p>${c.level}</p>
                <p>${c.price} DH / mois</p>

                <button
                    type="button"
                    onclick="ajouterAuPanier(${c.id})"
                    ${c.seats <= 0 ? "disabled" : ""}
                >
                    ${c.seats <= 0 ? "Complet" : "Ajouter au panier"}
                </button>
            </div>
        `;
    }
}

//  Ajouter un cours au panier
function ajouterAuPanier(id) {
    let c = cours.find(c => c.id === id);

    if (!c || c.seats <= 0) return;

    let existe = panier.find(item => item.id === id);

    if (existe) return;

    panier.push(c);

    afficherPanier();
}

//  Afficher le panier
function afficherPanier() {
    panierItems.innerHTML = "";

    let total = 0;

    for (let i = 0; i < panier.length; i++) {
        let c = panier[i];

        total += Number(c.price);

        panierItems.innerHTML += `
            <div class="cart-item">
                <h3>${c.title}</h3>
                <p>${c.price} DH / mois</p>

                <button
                    type="button"
                    onclick="supprimerDuPanier(${c.id})"
                >
                    Retirer
                </button>
            </div>
        `;
    }

    panierTotal.textContent = total;
    panierCount.textContent = panier.length;

    document.getElementById("cartEmptyState").hidden =
        panier.length > 0;

    document.getElementById("cartContent").hidden =
        panier.length === 0;
}

//  Supprimer un cours
function supprimerDuPanier(id) {
    panier = panier.filter(c => c.id !== id);

    afficherPanier();
    afficher();
}

//  Recherche et catégorie
recherche.addEventListener("input", afficher);
categorie.addEventListener("change", afficher);


let boutonInscription = document.getElementById("continueRegistration");

boutonInscription.addEventListener("click", function () {
    document.getElementById("inscription").scrollIntoView({
        behavior: "smooth"
    });
});


const formulaire = document.getElementById("regForm");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs
    const nom = document.getElementById("parentName").value.trim();
    const email = document.getElementById("parentEmail").value.trim();
    const telephone = document.getElementById("parentPhone").value.trim();
    const eleve = document.getElementById("studentName").value.trim();
    const niveau = document.getElementById("studentLevel").value;
    const motDePasse = document.getElementById("pwd").value;
    const confirmation = document.getElementById("pwdConfirm").value;
    const consentement = document.getElementById("consent").checked;

    // Réinitialiser les erreurs
    document.querySelectorAll(".field-error").forEach(function (erreur) {
        erreur.textContent = "";
    });

    let valide = true;

    // Vérifier le nom du parent
    if (nom.length < 2) {
        document.getElementById("parentNameError").textContent =
            "Entrez un nom valide.";
        valide = false;
    }

    // Vérifier l'email
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValide.test(email)) {
        document.getElementById("parentEmailError").textContent =
            "Entrez une adresse email valide.";
        valide = false;
    }

    // Vérifier le téléphone marocain
    const tel = telephone.replace(/[\s.-]/g, "");

    const telephoneValide = /^(0[5-7]\d{8}|\+212[5-7]\d{8})$/;

    if (!telephoneValide.test(tel)) {
        document.getElementById("parentPhoneError").textContent =
            "Entrez un numéro marocain valide.";
        valide = false;
    }

    // Vérifier le nom de l'élève
    if (eleve.length < 2) {
        document.getElementById("studentNameError").textContent =
            "Entrez le prénom de l'élève.";
        valide = false;
    }

    // Vérifier le niveau
    if (niveau === "") {
        document.getElementById("studentLevelError").textContent =
            "Choisissez un niveau scolaire.";
        valide = false;
    }

    // Vérifier le mot de passe
    const motDePasseValide =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!motDePasseValide.test(motDePasse)) {
        document.getElementById("pwdError").textContent =
            "8 caractères minimum, une majuscule, un chiffre et un caractère spécial.";
        valide = false;
    }

    // Vérifier la confirmation du mot de passe
    if (confirmation !== motDePasse || confirmation === "") {
        document.getElementById("pwdConfirmError").textContent =
            "Les mots de passe ne correspondent pas.";
        valide = false;
    }

    // Vérifier le consentement
    if (!consentement) {
        document.getElementById("consentError").textContent =
            "Vous devez accepter les conditions.";
        valide = false;
    }

    // Si toutes les informations sont valides
    if (valide) {
        alert(
            "Demande d'inscription validée !\n\n" +
            "Parent : " + nom + "\n" +
            "Élève : " + eleve + "\n" +
            "Niveau : " + niveau + "\n\n" +
            "Ceci est une démonstration : aucune donnée n'a été envoyée."
        );

        formulaire.reset();
    }


    const champMotDePasse = document.getElementById("pwd");
    const texteForce = document.getElementById("pwdText");
    const barreForce = document.getElementById("pwdBar");

    motDePasse.addEventListener("input", function () {
        const valeur = motDePasse.value;
        let score = 0;

        if (valeur.length >= 8) score++;
        if (/[A-Z]/.test(valeur)) score++;
        if (/[a-z]/.test(valeur)) score++;
        if (/[0-9]/.test(valeur)) score++;
        if (/[^A-Za-z0-9]/.test(valeur)) score++;

        if (valeur.length === 0) {
            texteForce.textContent = "À saisir";
        } else if (score <= 2) {
            texteForce.textContent = "Faible";
        } else if (score <= 3) {
            texteForce.textContent = "Moyen";
        } else if (score === 4) {
            texteForce.textContent = "Bon";
        } else {
            texteForce.textContent = "Fort";
        }

        barreForce.style.width = (score * 20) + "%";
        barreForce.style.background =
            score <= 2 ? "#ef4444" :
                score === 3 ? "#f59e0b" :
                    score === 4 ? "#3b82f6" : "#22c55e";
    });

});
