# VELORIA — Guide complet du projet

Ce document explique **ce qui a été livré**, **comment le lancer**, et **les étapes précises** pour aller jusqu'à la mise en production, y compris les évolutions futures que vous avez listées.

---

## 1. Ce qui est livré aujourd'hui

Un site e-commerce **fonctionnel** en Next.js / React / Tailwind CSS, avec :

- **Accueil** : bannière, produits vedettes, nouveautés, catégories, avis clients, footer avec contact.
- **Catalogue** : recherche, filtre par catégorie, tri par prix/popularité.
- **Fiche produit** : galerie photos, couleurs, stock, sélecteur de quantité, ajout au panier.
- **Panier** : modification des quantités, suppression, total automatique.
- **Commande** : formulaire client → génère un message WhatsApp complet (produits, quantités, prix, total, coordonnées) et l'envoie au numéro du vendeur.
- **Espace Admin** (`/admin`, protégé par mot de passe) :
  - Tableau de bord avec statistiques (commandes, CA estimé, produit le plus vendu).
  - Gestion des produits (ajouter / modifier / supprimer, photos, prix, stock).
  - Consultation des commandes reçues.

**Design** : noir / blanc / or, typographie serif + sans-serif, inspiré Zara / Daniel Wellington / MVMT, responsive mobile/tablette/desktop.

### Limite actuelle (à connaître)
Pour que le site soit **immédiatement utilisable sans configuration**, les produits sont stockés dans un fichier (`lib/products.ts`) et les données de l'admin (produits modifiés, commandes) sont stockées dans le **navigateur** (localStorage), pas dans une vraie base de données partagée. C'est volontaire : cela vous permet de tester tout le site tout de suite. L'étape 4 ci-dessous explique comment brancher une vraie base de données (Firebase ou Supabase) pour que ce soit persistant et partagé entre tous vos appareils.

---

## 2. Lancer le site en local (5 minutes)

Prérequis : [Node.js](https://nodejs.org) version 18 ou plus installé sur votre ordinateur.

```bash
# 1. Dézippez le dossier reçu, puis ouvrez un terminal dedans
cd veloria

# 2. Installez les dépendances
npm install

# 3. Lancez le site en mode développement
npm run dev
```

Ouvrez ensuite `http://localhost:3000` dans votre navigateur.

- Boutique : `http://localhost:3000`
- Admin : `http://localhost:3000/admin` — mot de passe par défaut : **`veloria2026`**
  (à changer dans `context/AdminAuthContext.tsx`, ligne `ADMIN_PASSWORD`)

---

## 3. Étape immédiate : personnaliser votre boutique

### a) Votre numéro WhatsApp (essentiel)
Fichier `lib/config.ts` :
```ts
whatsappNumber: "212600000000", // remplacez par votre numéro, format international sans "+" ni espaces
```

### b) Vos vraies informations
Toujours dans `lib/config.ts` : nom, email, adresse, liens Instagram/Facebook.

### c) Vos vrais produits et photos
Deux façons :
1. **Rapide** : modifiez directement `lib/products.ts` (nom, prix, description, couleurs, stock, liens d'images).
2. **Recommandée** : utilisez l'espace `/admin/produits` une fois le site en ligne — ajoutez/modifiez vos produits depuis une interface, sans toucher au code. *(Note : tant que l'étape 4 n'est pas faite, ces modifications restent locales à votre navigateur — voir ci-dessous.)*

Pour les photos, le plus simple est d'utiliser un hébergeur d'images (voir étape 4c) et de coller les liens dans le champ "Photos" du produit.

---

## 4. Étape suivante recommandée : connecter une vraie base de données

Actuellement, produits et commandes vivent dans le navigateur. Pour un site professionnel, il faut une base de données partagée. Vous avez deux choix, tous deux gratuits pour démarrer :

| | Firebase | Supabase |
|---|---|---|
| Société | Google | Open source |
| Base de données | Firestore (NoSQL) | PostgreSQL (SQL) |
| Authentification admin | Firebase Auth | Supabase Auth |
| Stockage photos | Firebase Storage | Supabase Storage |
| Simplicité pour démarrer | Très simple | Simple, plus proche du SQL classique |

**Recommandation** : Supabase si vous êtes à l'aise avec des tableurs/SQL, Firebase si vous préférez une prise en main ultra guidée. Les deux fonctionnent très bien avec Next.js.

### Étapes générales (identiques dans l'esprit pour les deux) :
1. Créer un compte gratuit sur [firebase.google.com](https://firebase.google.com) ou [supabase.com](https://supabase.com).
2. Créer un projet.
3. Créer les tables/collections : `products`, `orders`, `categories`.
4. Récupérer les clés API et les coller dans le fichier `.env.local` (basé sur `.env.example` fourni).
5. Remplacer, dans le code, les fonctions de `lib/adminStore.ts` et `lib/products.ts` par des appels à la base (au lieu de `localStorage`).
6. Sécuriser l'accès admin avec l'authentification du fournisseur choisi (email/mot de passe), au lieu du mot de passe simple actuel.

Cette étape demande des compétences techniques : je peux la réaliser avec vous dans une prochaine session si vous le souhaitez — dites-moi simplement lequel des deux vous préférez.

### c) Où héberger vos photos produits
- Simple : Firebase Storage ou Supabase Storage (inclus si vous choisissez l'un des deux ci-dessus).
- Alternative gratuite immédiate : [Cloudinary](https://cloudinary.com) ou [ImgBB](https://imgbb.com) — vous uploadez une photo, vous récupérez un lien, vous le collez dans l'admin produit.

---

## 5. Mettre le site en ligne (Vercel)

1. Créez un compte gratuit sur [vercel.com](https://vercel.com).
2. Mettez votre code sur GitHub (créez un repository, poussez le dossier `veloria`).
3. Sur Vercel : "Add New Project" → sélectionnez votre repository GitHub.
4. Si vous avez configuré Firebase/Supabase, ajoutez vos variables d'environnement (celles de `.env.local`) dans les paramètres du projet Vercel.
5. Cliquez sur "Deploy". Votre site sera en ligne en 2 minutes, avec une URL du type `veloria.vercel.app`.
6. Vous pourrez ensuite connecter votre propre nom de domaine (ex : `veloria-store.com`) depuis les paramètres du projet Vercel.

---

## 6. Évolutions futures — comment le projet est préparé

Le projet a été structuré pour que chaque évolution soit un ajout, pas une refonte :

| Évolution souhaitée | Ce qu'il faut ajouter |
|---|---|
| Paiement en ligne | Intégrer Stripe ou CMI/PayZone (Maroc) sur la page `/commande`, en complément (ou remplacement) du bouton WhatsApp |
| Comptes clients | Authentification Firebase/Supabase Auth + page "Mon compte" |
| Liste de favoris | Nouveau contexte `FavoritesContext.tsx` (même principe que `CartContext.tsx`), stocké en base une fois le compte client actif |
| Codes promotionnels | Champ "code promo" sur `/panier`, vérifié contre une table `promo_codes` en base |
| Programme de fidélité | Table `loyalty_points` liée au compte client, mise à jour à chaque commande validée |
| Suivi de commande | Statuts (`en attente`, `expédiée`, `livrée`) modifiables depuis `/admin/commandes`, visibles par le client connecté |
| Tableau de bord avancé | Graphiques (ex. bibliothèque `recharts`) sur `/admin`, ventes par période, par catégorie |
| Notifications e-mail/WhatsApp | Service d'envoi automatique (ex. Resend pour l'email, API WhatsApp Business pour les notifications automatiques) déclenché à la création d'une commande |

Rien de tout cela ne nécessite de repartir de zéro : l'architecture (composants séparés, contexte panier, config centralisée) a été pensée pour ça dès le départ.

---

## 7. Structure des fichiers (pour référence)

```
veloria/
├── app/
│   ├── page.tsx              → Accueil
│   ├── catalogue/page.tsx    → Catalogue (recherche/filtre/tri)
│   ├── produit/[slug]/       → Fiche produit
│   ├── panier/page.tsx       → Panier
│   ├── commande/page.tsx     → Commande + génération message WhatsApp
│   └── admin/                → Espace administrateur
│       ├── page.tsx          → Tableau de bord
│       ├── produits/         → Gestion produits
│       └── commandes/        → Commandes reçues
├── components/                → Header, Footer, cartes produit, etc.
├── context/                   → Panier (CartContext) + Auth admin
├── lib/
│   ├── products.ts            → Données produits (à remplacer par une DB)
│   ├── config.ts              → Numéro WhatsApp, contact, réseaux sociaux
│   └── adminStore.ts          → Stockage produits/commandes (à remplacer par une DB)
└── .env.example                → Modèle pour vos futures clés Firebase/Supabase
```

---

## 8. Questions fréquentes

**Le site fonctionne-t-il sans Firebase/Supabase ?**
Oui, totalement, dès maintenant. La base de données sert à rendre les changements de l'admin permanents et partagés entre appareils.

**Puis-je changer les couleurs (noir/blanc/or) ?**
Oui, tout est centralisé dans `app/globals.css` (variables `--color-noir`, `--color-or`, etc.).

**Le mot de passe admin est-il sécurisé ?**
Pas encore en l'état — c'est une démo locale. Avant la mise en ligne définitive, il faut le remplacer par une vraie authentification (Firebase Auth / Supabase Auth), comme indiqué à l'étape 4.

**Puis-je ajouter d'autres catégories ?**
Oui, dans `lib/products.ts`, tableau `CATEGORIES`.
