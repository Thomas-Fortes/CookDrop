# CookDrop

**Deux recettes tombent chaque jour.**

CookDrop est une application web qui propose chaque matin deux recettes simples à cuisiner chez soi. Pas de catalogue infini, pas de paralysie du choix — juste deux propositions, choisies à la main, pour cuisiner bien et simplement.

## Stack

- **Framework** : Next.js (App Router, TypeScript)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion + CSS animations
- **Backend** : Supabase (Auth + PostgreSQL + Storage)
- **Polices** : Playfair Display · Lora · Lato · DM Mono (Google Fonts)
- **Déploiement** : Vercel

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'environnement
cp .env.local.example .env.local
# Remplissez les variables dans .env.local

# 3. Lancer en développement
npm run dev
```

L'app fonctionne **sans Supabase** avec des données de démonstration. Configurez `.env.local` pour utiliser votre base de données.

## Structure

```
src/
├── app/
│   ├── page.tsx              # Accueil — Drop du jour
│   ├── recette/[slug]/       # Vue recette complète
│   ├── archive/              # Historique des drops
│   ├── connexion/            # Authentification
│   ├── profil/               # Profil utilisateur
│   └── admin/                # Back-office
├── components/
│   ├── Header.tsx
│   ├── RecipeCard.tsx
│   ├── RecipePageClient.tsx  # Vue recette (client)
│   ├── IngredientsList.tsx   # Liste animée + ajustement portions
│   ├── RecipeSteps.tsx       # Étapes avec checkboxes
│   ├── StickyTimer.tsx       # Timer sticky en bas d'écran
│   ├── ArchiveClient.tsx     # Grille archive + filtres
│   ├── IsometricDecor.tsx    # Décor cuisine isométrique
│   └── Countdown.tsx         # Compte à rebours prochain drop
└── lib/
    ├── types.ts              # Types TypeScript
    ├── data.ts               # Couche de données (Supabase ou mock)
    ├── mock-data.ts          # 4 recettes de démonstration
    ├── supabase-client.ts    # Client navigateur
    ├── supabase-server.ts    # Client serveur (SSR)
    └── json-ld.ts            # Schema Recipe pour SEO
```

## Base de données Supabase

Exécutez `supabase/schema.sql` dans l'éditeur SQL de votre projet Supabase pour créer toutes les tables, index et politiques RLS.

## Design System

| Couleur | Hex | Usage |
|---------|-----|-------|
| Lin chaud | `#F2EBE0` | Background global |
| Parchemin | `#FAF5ED` | Cartes, surfaces |
| Bois foncé | `#2C1F14` | Header, texte |
| Sauge forêt | `#4A6741` | CTA, éléments actifs |
| Sable chaud | `#C4A882` | Bordures, détails |
| Terre cuite | `#D4633A` | Badges, timer |

**Règle absolue** : aucun blanc pur, aucun gris froid, aucun noir pur. Toutes les ombres sont `rgba(44,31,20,...)`.

## Déploiement Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Ajoutez les variables d'environnement `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` et `NEXT_PUBLIC_BASE_URL` dans les paramètres de votre projet Vercel.
