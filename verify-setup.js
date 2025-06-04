#!/usr/bin/env node

/**
 * 🔍 Script de Vérification Complète
 * Vérifie que toutes les optimisations SEO et performance sont en place
 */

const fs = require("fs");
const path = require("path");

console.log("🚀 Verification Complete de l'Application Next.js\n");

// Fonction utilitaire pour vérifier l'existence d'un fichier
function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? "✅" : "❌"} ${description}: ${filePath}`);
  return exists;
}

// Fonction pour vérifier le contenu d'un fichier
function checkFileContent(filePath, searchString, description) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const found = content.includes(searchString);
    console.log(`${found ? "✅" : "❌"} ${description}`);
    return found;
  } catch (error) {
    console.log(`❌ ${description} (fichier non trouvé)`);
    return false;
  }
}

console.log("📂 Vérification de la Structure des Fichiers");
console.log("=".repeat(50));

// Fichiers essentiels
const essentialFiles = [
  ["package.json", "Configuration npm"],
  ["next.config.ts", "Configuration Next.js"],
  ["tsconfig.json", "Configuration TypeScript"],
  ["postcss.config.mjs", "Configuration PostCSS (Tailwind v4)"],
  ["src/app/layout.tsx", "Layout racine"],
  ["src/app/page.tsx", "Page d'accueil"],
  ["src/app/sitemap.ts", "Sitemap dynamique"],
  ["public/robots.txt", "Fichier robots.txt"],
  ["public/manifest.json", "Manifest PWA"],
];

let allFilesExist = true;
essentialFiles.forEach(([file, desc]) => {
  if (!checkFile(file, desc)) {
    allFilesExist = false;
  }
});

console.log("\n🔍 Vérification du Contenu SEO");
console.log("=".repeat(50));

// Vérifications SEO dans le layout
const seoChecks = [
  ["src/app/layout.tsx", 'lang="fr"', "Langue française définie"],
  ["src/app/layout.tsx", "metadata", "Métadonnées définies"],
  ["src/app/layout.tsx", "openGraph", "Open Graph configuré"],
  ["src/app/layout.tsx", "twitter", "Twitter Cards configurées"],
  ["src/app/page.tsx", "JSON.stringify", "Structured data présente"],
  ["public/robots.txt", "sitemap.xml", "Sitemap référencé dans robots.txt"],
];

let allSeoChecks = true;
seoChecks.forEach(([file, search, desc]) => {
  if (!checkFileContent(file, search, desc)) {
    allSeoChecks = false;
  }
});

console.log("\n⚡ Vérification des Optimisations Performance");
console.log("=".repeat(50));

// Vérifications performance
const performanceChecks = [
  ["next.config.ts", "compress: true", "Compression activée"],
  ["next.config.ts", "images:", "Optimisation images configurée"],
  ["src/lib/fonts.ts", "display: 'swap'", "Fonts optimisées"],
  ["next.config.ts", "headers()", "Headers de sécurité configurés"],
];

let allPerformanceChecks = true;
performanceChecks.forEach(([file, search, desc]) => {
  if (!checkFileContent(file, search, desc)) {
    allPerformanceChecks = false;
  }
});

console.log("\n🧩 Vérification des Composants");
console.log("=".repeat(50));

// Vérification des composants essentiels
const componentFiles = [
  ["src/components/ui/breadcrumbs.tsx", "Composant breadcrumbs"],
  ["src/components/ui/theme-provider.tsx", "Provider de thème"],
  ["src/components/ui/toggle-theme.tsx", "Toggle mode sombre"],
  ["src/components/ui/button.tsx", "Composant bouton"],
];

let allComponentsExist = true;
componentFiles.forEach(([file, desc]) => {
  if (!checkFile(file, desc)) {
    allComponentsExist = false;
  }
});

console.log("\n📚 Vérification de la Documentation");
console.log("=".repeat(50));

// Vérification documentation
const docFiles = [
  ["README.md", "README principal"],
  ["SEO-GUIDE.md", "Guide SEO complet"],
  ["CHANGELOG.md", "Journal des modifications"],
  ["docs/components.md", "Guide des composants"],
  ["docs/performance.md", "Guide de performance"],
];

let allDocsExist = true;
docFiles.forEach(([file, desc]) => {
  if (!checkFile(file, desc)) {
    allDocsExist = false;
  }
});

console.log("\n📊 Résumé de la Vérification");
console.log("=".repeat(50));

const overallScore =
  (allFilesExist ? 25 : 0) +
  (allSeoChecks ? 35 : 0) +
  (allPerformanceChecks ? 25 : 0) +
  (allComponentsExist ? 10 : 0) +
  (allDocsExist ? 5 : 0);

console.log(
  `📂 Structure des fichiers: ${
    allFilesExist ? "✅ Parfait" : "❌ Problèmes détectés"
  }`
);
console.log(
  `🔍 Configuration SEO: ${
    allSeoChecks ? "✅ Parfait" : "❌ Problèmes détectés"
  }`
);
console.log(
  `⚡ Optimisations Performance: ${
    allPerformanceChecks ? "✅ Parfait" : "❌ Problèmes détectés"
  }`
);
console.log(
  `🧩 Composants UI: ${
    allComponentsExist ? "✅ Parfait" : "❌ Problèmes détectés"
  }`
);
console.log(
  `📚 Documentation: ${allDocsExist ? "✅ Parfait" : "❌ Problèmes détectés"}`
);

console.log(`\n🎯 Score Global: ${overallScore}/100`);

if (overallScore === 100) {
  console.log(
    "\n🎉 Félicitations ! Votre application est parfaitement configurée !"
  );
  console.log("✨ Prêt pour un score Lighthouse SEO de 100% !");
} else if (overallScore >= 80) {
  console.log("\n🟢 Très bien ! Quelques ajustements mineurs recommandés.");
} else if (overallScore >= 60) {
  console.log(
    "\n🟡 Bien, mais des améliorations importantes sont nécessaires."
  );
} else {
  console.log(
    "\n🔴 Des corrections importantes sont requises avant le déploiement."
  );
}

console.log("\n🚀 Prochaines étapes recommandées:");
console.log("1. Corriger les problèmes détectés ci-dessus");
console.log("2. Lancer les tests: npm run seo:check");
console.log("3. Audit Lighthouse: npm run lighthouse");
console.log("4. Déployer en production");
console.log("5. Soumettre le sitemap à Google Search Console");

console.log("\n📞 Support: README.md pour plus d'informations");

// Exit avec le code approprié
process.exit(overallScore === 100 ? 0 : 1);
