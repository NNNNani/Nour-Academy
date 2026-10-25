let cours = [];
let panier = [];

const liste = document.getElementById("courseGrid");
const recherche = document.getElementById("filterSearch");
const categorie = document.getElementById("filterSubject");

const panierItems = document.getElementById("cartItems");
const panierTotal = document.getElementById("cartTotal");
const panierCount = document.getElementById("cartCount");

// 1. Charger les cours
fetch("./data/data.json")
    .then(response => response.json())
    .then(data => { cours = data 
        afficher();
    });

// 2. Afficher les cours
function afficher() {
    liste.innerHTML = "";

    let texte = recherche.value.toLowerCase();
    let cat = categorie.value;

    for (let i = 0; i < cours.length; i++) {
        let c = cours[i];

        if (!c.title.toLowerCase().includes(texte)) {
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

// 3. Ajouter un cours au panier
function ajouterAuPanier(id) {
    let c = cours.find(c => c.id === id);

    if (!c || c.seats <= 0) return;

    let existe = panier.find(item => item.id === id);

    if (existe) return;

    panier.push(c);

    afficherPanier();
}

// 4. Afficher le panier
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

// 5. Supprimer un cours
function supprimerDuPanier(id) {
    panier = panier.filter(c => c.id !== id);

    afficherPanier();
    afficher();
}

// 6. Recherche et catégorie
recherche.addEventListener("input", afficher);
categorie.addEventListener("change", afficher);


let boutonInscription = document.getElementById("continueRegistration");

boutonInscription.addEventListener("click", function() {
    document.getElementById("inscription").scrollIntoView({
        behavior: "smooth"
    });
});

let boutonContinuer = document.getElementById("nextStep");
let etape1 = document.getElementById("formStep1");
let etape2 = document.getElementById("formStep2");

boutonContinuer.addEventListener("click", function() {
    let nom = document.getElementById("parentName").value.trim();
    let email = document.getElementById("parentEmail").value.trim();
    let telephone = document.getElementById("parentPhone").value.trim();
    let eleve = document.getElementById("studentName").value.trim();
    let niveau = document.getElementById("studentLevel").value;

    if (nom === "" || email === "" || telephone === "" ||
        eleve === "" || niveau === "") {
        alert("Remplissez tous les champs !");
    } else {
        etape1.hidden = true;
        etape2.hidden = false;
    }
});