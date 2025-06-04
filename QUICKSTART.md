# 🚀 Guide de Démarrage Rapide

## Installation Express (5 minutes)

### 1. Cloner et Installer

```bash
git clone <repository-url>
cd next-app
pnpm install  # ou npm install
```

### 2. Configuration Minimale

```bash
# Copier le fichier d'environnement
cp .env.local.example .env.local

# Éditer avec vos informations
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-domaine.com
```

### 3. Lancer l'Application

```bash
# Développement
pnpm dev

# Production
pnpm build && pnpm start
```

## ✅ Vérification Express

### Audit SEO Automatique

```bash
node seo-audit.js
```

### Vérification Complète

```bash
node verify-setup.js
```

## 🎯 Résultats Attendus

- ✅ **Score SEO Lighthouse** : 100%
- ⚡ **Performance** : >90
- 🎨 **Interface** : Responsive avec mode sombre
- 📱 **PWA** : Manifest et optimisations mobiles

## 🔗 Liens Utiles

- **Application** : http://localhost:3000
- **Documentation** : [README.md](./README.md)
- **Guide SEO** : [SEO-GUIDE.md](./SEO-GUIDE.md)
- **Composants** : [docs/components.md](./docs/components.md)

---

🎉 **Félicitations !** Votre application Next.js est prête avec une optimisation SEO de 100% !
