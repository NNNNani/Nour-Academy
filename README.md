# Nour-Academy# 🚀 Application de Gestion des Inscriptions (Nour App)

Une application web moderne, fluide et performante de gestion des inscriptions, conçue en JavaScript vanilla avec une architecture modulaire (ES Modules) et une persistance des données via LocalStorage.

---

## 📋 Table des Matières
- [Présentation](#-présentation)
- [Fonctionnalités Principales](#-fonctionnalités-principales)
- [Technologies & Outils](#-technologies--outils)
- [Architecture du Projet](#-architecture-du-projet)
- [Installation et Lancement](#-installation-et-lancement)
- [Workflow Git & Stratégie de Branching](#-workflow-git--stratégie-de-branching)
- [Équipe](#-équipe)

---

## 📌 Présentation

Ce projet permet de gérer le cycle de vie complet des inscriptions candidats : création, consultation, mise à jour, suppression (CRUD), analyse statistique, recherche dynamique, filtrage avancé et exportation de données.

---

## ✨ Fonctionnalités Principales

### ⚙️ Cœur de l'application (Obligatoire)
* **NOUR-01 : Architecture ES Modules** — Organisation modulaire du code (`import`/`export`) avec point d'entrée unique (`main.js`).
* **NOUR-02 : Données Demo & Persistance** — Initialisation automatique des données de démonstration et stockage local via `localStorage`.
* **NOUR-03 : Affichage des Inscriptions** — Tableau dynamique affichant les détails des candidats.
* **NOUR-04 : Ajout & Validation** — Formulaire dynamique avec validation stricte des champs et emails.
* **NOUR-05 : Édition & Suppression** — Modification en ligne et suppression sécurisée avec modale de confirmation.
* **NOUR-06 : Recherche & Tri** — Barre de recherche en temps réel, filtres par statut et tri multi-colonnes.
* **NOUR-07 : Tableau de Bord (Dashboard)** — Indicateurs clés (KPIs) et statistiques mis à jour dynamiquement.
* **NOUR-12 : Tests, Responsive & Accessibilité** — Interface adaptative (Mobile/Desktop), navigation au clavier (A11y) et tests automatisés.

### 🌟 Fonctionnalités Bonus
* **NOUR-08 : Navigation SPA** — Routage côté client géré via l'URL Hash (`#dashboard`, `#inscriptions`).
* **NOUR-09 : Pagination** — Découpage du tableau à 10 lignes par page avec navigation intuitive.
* **NOUR-10 : Export CSV** — Exportation des données filtrées au format `.csv` (encodage UTF-8).
* **NOUR-11 : Annulation (Undo)** — Notification temporaire (5s) permettant d'annuler la dernière suppression.

---

## 🛠 Technologies & Outils

* **HTML5** (Sémantique & Accessibilité ARIA)
* **CSS3** (Flexbox, CSS Grid, Responsive Design)
* **JavaScript** (ES6+, ES Modules)
* **Versionning** : Git & GitHub

---

## 📁 Architecture du Projet

```text
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js                  # Point d'entrée principal