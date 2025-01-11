# Gestionnaire de Films

Une application web moderne pour explorer, rechercher et découvrir des films, construite avec React et l'API TMDB.

## Fonctionnalités

- 🎬 Affichage des films populaires
- 🔍 Recherche de films en temps réel
- 📱 Interface responsive et moderne
- 🎯 Détails complets pour chaque film
- ⚡ Recherche asynchrone avec mise à jour instantanée

## Technologies Utilisées

- React
- Vite
- Tailwind CSS
- TMDB API
- React Router
- Context API pour la gestion d'état

## Prérequis

- Node.js (version 14 ou supérieure)
- Compte TMDB et clé API (obtenir sur [https://www.themoviedb.org/](https://www.themoviedb.org/))

## Installation

1. Clonez le dépôt :
```bash
git clone [url-du-repo]
cd gestionnaire-film
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet :
```env
VITE_TMDB_TOKEN=votre_token_tmdb_ici
```

4. Démarrez le serveur de développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173)

## Structure du Projet

```
gestionnaire-film/
├── src/
│   ├── pages/          # Composants de pages
│   ├── context/        # Context API
│   ├── components/     # Composants réutilisables
│   └── App.jsx         # Composant racine
├── .env               # Variables d'environnement
└── package.json      # Dépendances et scripts
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## Licence

MIT
