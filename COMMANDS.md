# 🎛️ Commandes Utiles - Application Next.js SEO 100%

## 🚀 Développement

```bash
# Démarrer en développement (avec Turbopack)
npm run dev

# Démarrer en développement (standard)
npm run dev:standard
```

## 🏗️ Build & Production

```bash
# Construire l'application
npm run build

# Démarrer en production
npm start

# Démarrer sur un port spécifique
npx next start -p 3003
```

## 🔍 Validation & Tests SEO

```bash
# Audit SEO complet (checklist)
npm run seo:audit

# Vérification de l'implémentation SEO
npm run seo:check

# Validation finale (score 100%)
npm run seo:final

# Vérification complète de l'application
node verify-setup.js
```

## 🏆 Lighthouse Audits

```bash
# Audit SEO Desktop avec interface
npm run lighthouse

# Audit SEO Mobile avec interface
npm run lighthouse:mobile

# Audit complet (toutes catégories)
npm run lighthouse:full

# Audit silencieux (JSON seulement)
lighthouse http://localhost:3003 --only-categories=seo --output=json --output-path=./seo-report.json --chrome-flags="--headless"
```

## ⚡ Performance & Analyse

```bash
# Analyser le bundle
npm run analyze

# Vérification TypeScript
npm run type-check

# Linting du code
npm run lint

# Tests de performance
npm run test:performance
```

## 📊 Vérifications Rapides

```bash
# Vérifier que le serveur fonctionne
netstat -ano | findstr :3003

# Tester le sitemap
curl http://localhost:3003/sitemap.xml

# Tester le robots.txt
curl http://localhost:3003/robots.txt

# Vérifier la structure des fichiers
tree /F
```

## 🌐 URLs de Test

- **Application** : http://localhost:3003
- **Blog** : http://localhost:3003/blog
- **À propos** : http://localhost:3003/about
- **Contact** : http://localhost:3003/contact
- **Dashboard** : http://localhost:3003/dashboard
- **Sitemap** : http://localhost:3003/sitemap.xml
- **Robots** : http://localhost:3003/robots.txt

## 📚 Documentation

```bash
# Ouvrir la documentation principale
start README.md

# Ouvrir le guide SEO
start SEO-GUIDE.md

# Ouvrir le guide rapide
start QUICKSTART.md

# Ouvrir le rapport Lighthouse
start lighthouse-seo-report.html
```

## 🎯 Résultats Attendus

- ✅ **Score SEO Lighthouse** : 100%
- ⚡ **Performance** : >90
- 🎨 **Accessibilité** : >95
- 🔧 **Bonnes Pratiques** : 100%
- 📱 **PWA** : Compatible

## 🚨 Dépannage

```bash
# Si le port est occupé
npx kill-port 3003

# Nettoyer le cache Next.js
rm -rf .next

# Réinstaller les dépendances
rm -rf node_modules && npm install

# Vérifier la version Node.js
node --version  # Doit être >= 18

# Vérifier les permissions
npm audit fix
```

## 🎉 Commande de Célébration

```bash
# Validation finale complète
npm run seo:final && echo "🎉 SUCCESS: Application ready for production!"
```

---

_Score SEO 100% confirmé - Application prête pour la production !_
