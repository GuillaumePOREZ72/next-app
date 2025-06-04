# 🚀 Mon Application Next.js - Plateforme Moderne

Une application Next.js 15 moderne avec blog, dashboard et pages marketing. Interface intuitive avec mode sombre, optimisation SEO complète et performances exceptionnelles.

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![SEO](https://img.shields.io/badge/SEO-100%25-green)

## 📋 Table des Matières

- [🎯 Fonctionnalités](#-fonctionnalités)
- [🛠 Installation](#-installation)
- [🚀 Utilisation](#-utilisation)
- [📱 Architecture](#-architecture)
- [🔍 Optimisation SEO](#-optimisation-seo)
- [⚡ Performance](#-performance)
- [🌐 Déploiement](#-déploiement)
- [📚 Documentation](#-documentation)

## 🎯 Fonctionnalités

### ✨ Interface Utilisateur

- **Design Moderne** : Interface clean avec Tailwind CSS
- **Mode Sombre** : Thème adaptatif avec next-themes
- **Responsive** : Optimisé pour mobile, tablette et desktop
- **Composants UI** : Radix UI pour une accessibilité parfaite
- **Animations** : Transitions fluides et micro-interactions

### 📝 Gestion de Contenu

- **Blog Dynamique** : Articles avec métadonnées complètes
- **Pages Marketing** : À propos, Contact avec formulaires
- **Dashboard** : Interface d'administration moderne
- **Navigation** : Fil d'Ariane avec structured data

### 🔍 SEO & Performance

- **Score Lighthouse 100%** : Optimisation SEO complète
- **Structured Data** : JSON-LD pour tous les types de contenu
- **Sitemap Dynamique** : Génération automatique XML
- **Optimisation Images** : WebP, AVIF avec Next.js Image
- **Core Web Vitals** : Performance optimisée

## 🛠 Installation

### Prérequis

- Node.js 18+
- npm, pnpm ou yarn

### 1. Cloner le Repository

```bash
git clone <repository-url>
cd next-app
```

### 2. Installer les Dépendances

```bash
# Avec npm
npm install

# Avec pnpm (recommandé)
pnpm install

# Avec yarn
yarn install
```

### 3. Configuration Environnement

```bash
# Copier le fichier d'exemple
cp .env.local.example .env.local

# Éditer les variables d'environnement
nano .env.local
```

#### Variables d'Environnement Essentielles

```env
# Domaine de base
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Informations de contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-domaine.com
NEXT_PUBLIC_CONTACT_PHONE=+33123456789

# Réseaux sociaux
NEXT_PUBLIC_TWITTER_HANDLE=@votre_compte
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/votre-entreprise
```

## 🚀 Utilisation

### Développement

```bash
# Démarrer le serveur de développement
npm run dev
# ou avec turbopack (plus rapide)
npm run dev --turbo

# Accéder à l'application
open http://localhost:3000
```

### Production

```bash
# Construire l'application
npm run build

# Démarrer en production
npm start

# Linter le code
npm run lint
```

### Scripts Personnalisés

```bash
# Audit SEO complet
node seo-audit.js

# Vérifier la structure SEO
npm run seo:check
```

## 📱 Architecture

### Structure des Dossiers

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout racine avec métadonnées
│   ├── page.tsx           # Page d'accueil
│   ├── sitemap.ts         # Sitemap dynamique
│   ├── robots.txt         # Directives robots
│   ├── (marketing)/       # Groupe de routes marketing
│   │   ├── about/         # Page à propos
│   │   └── contact/       # Page contact
│   ├── blog/              # Blog avec articles dynamiques
│   │   ├── page.tsx       # Liste des articles
│   │   └── [id]/          # Article individuel
│   └── dashboard/         # Interface d'administration
│       ├── profile/       # Profil utilisateur
│       └── settings/      # Paramètres
├── components/            # Composants réutilisables
│   └── ui/               # Composants UI de base
├── lib/                  # Utilitaires et helpers
│   ├── structured-data.ts # Générateurs JSON-LD
│   ├── seo.ts            # Helpers SEO
│   └── utils.ts          # Utilitaires généraux
└── hooks/                # Custom React hooks
```

### Technologies Utilisées

#### Frontend

- **Next.js 15** : Framework React avec App Router
- **React 19** : Dernière version avec Server Components
- **TypeScript** : Typage statique pour la robustesse
- **Tailwind CSS 4** : Styling utilitaire moderne

#### UI & UX

- **Radix UI** : Composants accessibles et headless
- **Lucide React** : Icônes modernes et cohérentes
- **next-themes** : Gestion du mode sombre
- **CVA** : Class Variance Authority pour les variantes

#### SEO & Performance

- **Structured Data** : Schema.org avec JSON-LD
- **Image Optimization** : WebP/AVIF automatique
- **Font Optimization** : Google Fonts optimisées
- **Core Web Vitals** : Métriques de performance

## 🔍 Optimisation SEO

Notre application atteint un **score SEO Lighthouse de 100%** grâce à :

### 🎯 Métadonnées Complètes

#### Pages Optimisées

- **Titres Uniques** : 50-60 caractères par page
- **Meta Descriptions** : 150-160 caractères engageantes
- **Mots-clés** : Recherche sémantique ciblée
- **Open Graph** : Partage social optimisé
- **Twitter Cards** : Prévisualisations enrichies

#### Exemple d'Implémentation

```typescript
export const metadata: Metadata = {
  title: "Titre de la Page - Mon Application Next.js",
  description:
    "Description engageante de 150-160 caractères qui incite au clic",
  keywords: ["mot-clé1", "mot-clé2", "mot-clé3"],
  openGraph: {
    title: "Titre pour le partage social",
    description: "Description pour les réseaux sociaux",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titre Twitter",
    description: "Description Twitter",
  },
};
```

### 🏗 Données Structurées

#### Types de Schema Implémentés

- **Organization** : Informations d'entreprise
- **Website** : Structure du site web
- **Blog** : Liste des articles
- **Article** : Articles individuels
- **BreadcrumbList** : Navigation hiérarchique

#### Générateurs JSON-LD

```typescript
// Organisation
const orgJsonLd = generateOrganizationJsonLd();

// Article de blog
const articleJsonLd = generateArticleJsonLd({
  title: "Titre de l'article",
  description: "Description de l'article",
  url: "https://example.com/article",
  datePublished: "2025-01-01",
  author: "Nom de l'auteur",
});
```

### 🤖 Infrastructure Technique

#### Fichiers SEO Essentiels

- **`robots.txt`** : Directives pour les crawlers
- **`sitemap.xml`** : Plan du site dynamique
- **`manifest.json`** : Configuration PWA

#### robots.txt

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://votre-domaine.com/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /private/
```

#### Sitemap Dynamique

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://votre-domaine.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://votre-domaine.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // ... autres URLs
  ];
}
```

### 📊 Métriques de Performance

#### Optimisations Implémentées

- **Images** : WebP/AVIF avec lazy loading
- **Fonts** : Google Fonts avec `display: swap`
- **Compression** : Gzip activé
- **Caching** : Headers de cache optimisés
- **Bundle Splitting** : Code splitting automatique

#### Core Web Vitals Cibles

- **LCP** : < 2.5s (Largest Contentful Paint)
- **FID** : < 100ms (First Input Delay)
- **CLS** : < 0.1 (Cumulative Layout Shift)

### 🌐 Localisation Française

#### Optimisations Linguistiques

- **HTML lang="fr"** : Déclaration de langue
- **Contenu français** : Textes optimisés pour le public français
- **Locale OpenGraph** : "fr_FR" pour le partage social
- **Mots-clés locaux** : SEO géolocalisé

## ⚡ Performance

### Configuration Next.js

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};
```

### Optimisation des Fonts

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Production
vercel --prod
```

### Variables d'Environnement Production

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# ... autres variables
```

### Autres Plateformes

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📚 Documentation

### Guides Détaillés

- [📋 Guide SEO Complet](./SEO-GUIDE.md)
- [🎨 Guide des Composants UI](./docs/components.md)
- [⚡ Guide de Performance](./docs/performance.md)

### API Reference

- [🔧 Utilitaires SEO](./src/lib/seo.ts)
- [📊 Structured Data](./src/lib/structured-data.ts)
- [🎯 Helpers](./src/lib/utils.ts)

### Tests & Qualité

#### Audit SEO

```bash
# Lancer l'audit SEO
node seo-audit.js

# Lighthouse CLI
npx lighthouse http://localhost:3000 --view
```

#### Tests de Performance

```bash
# Bundle analyzer
npm run analyze

# Core Web Vitals
npm run test:vitals
```

## 🤝 Contribution

### Workflow de Développement

1. Fork le repository
2. Créer une branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branch (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Standards de Code

- **TypeScript** : Typage strict
- **ESLint** : Configuration Next.js
- **Prettier** : Formatage automatique
- **Convention** : Conventional Commits

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🆘 Support

- 📧 **Email** : contact@votre-domaine.com
- 📱 **Téléphone** : +33 1 23 45 67 89
- 💬 **Discord** : [Rejoindre le serveur](https://discord.gg/votre-serveur)
- 📖 **Documentation** : [docs.votre-domaine.com](https://docs.votre-domaine.com)

---

**Développé avec ❤️ par l'équipe Mon Application Next.js**

_Cette application atteint un score Lighthouse SEO de 100% et respecte toutes les meilleures pratiques du web moderne._
