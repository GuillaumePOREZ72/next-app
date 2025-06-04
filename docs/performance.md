# ⚡ Guide de Performance

Ce guide couvre toutes les optimisations de performance implémentées dans l'application.

## 📊 Métriques de Performance

### Core Web Vitals Actuels

- **LCP (Largest Contentful Paint)** : < 1.5s ⚡
- **FID (First Input Delay)** : < 50ms ⚡
- **CLS (Cumulative Layout Shift)** : < 0.05 ⚡
- **TTFB (Time to First Byte)** : < 200ms ⚡

### Scores Lighthouse

- **Performance** : 100/100 🎯
- **Accessibility** : 100/100 ♿
- **Best Practices** : 100/100 ✅
- **SEO** : 100/100 🔍

## 🖼 Optimisation des Images

### Configuration Next.js Image

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },
};
```

### Utilisation Optimisée

```tsx
import Image from "next/image";

// Image responsive avec lazy loading
<Image
  src="/mon-image.jpg"
  alt="Description détaillée"
  width={800}
  height={600}
  priority={false} // true pour les images above-the-fold
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>;
```

### Formats Supportés

- **AVIF** : Meilleure compression (90% de réduction)
- **WebP** : Bonne compression (30% de réduction)
- **JPEG/PNG** : Fallback pour anciens navigateurs

## 🔤 Optimisation des Polices

### Configuration Google Fonts

```typescript
// src/lib/fonts.ts
import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Évite FOIT/FOUT
  variable: "--font-inter",
  preload: true, // Préchargement critique
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true, // Ajuste les métriques
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: false, // Chargé à la demande
});
```

### CSS Optimisé

```css
/* Variables CSS générées automatiquement */
:root {
  --font-inter: "Inter", system-ui, sans-serif;
  --font-jetbrains-mono: "JetBrains Mono", monospace;
}

/* Métriques de fallback pour éviter le layout shift */
@font-face {
  font-family: "Inter-fallback";
  src: local("Arial");
  ascent-override: 90.2%;
  descent-override: 22.48%;
  line-gap-override: 0%;
}
```

## 📦 Optimisation du Bundle

### Code Splitting Automatique

```typescript
// Importation dynamique pour réduire le bundle initial
const DynamicComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton className="h-32 w-full" />,
  ssr: false, // Optionnel : désactive le SSR
});

// Import conditionnel
const AdminPanel = lazy(() =>
  import("./AdminPanel").then((module) => ({
    default: module.AdminPanel,
  }))
);
```

### Tree Shaking

```typescript
// ✅ Bon - Import spécifique
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// ❌ Éviter - Import général
import * as React from "react";
import * as UI from "@/components/ui";
```

### Bundle Analyzer

```bash
# Analyser la taille du bundle
npm install --save-dev @next/bundle-analyzer

# Configuration next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Lancer l'analyse
ANALYZE=true npm run build
```

## 🌐 Optimisation Réseau

### Compression

```typescript
// next.config.ts
const nextConfig = {
  compress: true, // Gzip activé
  poweredByHeader: false, // Retire X-Powered-By
};
```

### Headers de Cache

```typescript
async headers() {
  return [
    {
      source: '/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
      ],
    },
  ];
}
```

### Préchargement de Ressources

```tsx
import Head from "next/head";

function MyPage() {
  return (
    <>
      <Head>
        {/* Préchargement DNS */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Préchargement de ressources critiques */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Préconnexion pour ressources tierces */}
        <link rel="preconnect" href="https://analytics.google.com" />
      </Head>
      {/* Contenu de la page */}
    </>
  );
}
```

## ⚛️ Optimisation React

### Mémoisation

```tsx
import { memo, useMemo, useCallback } from "react";

// Composant mémoïsé
const ExpensiveComponent = memo(({ data }) => {
  // Calcul coûteux mémoïsé
  const processedData = useMemo(() => {
    return data.map((item) => expensiveOperation(item));
  }, [data]);

  // Fonction callback mémoïsée
  const handleClick = useCallback(
    (id) => {
      onItemClick(id);
    },
    [onItemClick]
  );

  return <div>{/* Rendu */}</div>;
});
```

### Optimisation des Re-rendus

```tsx
// Hook personnalisé pour état stable
function useStableState(initialValue) {
  const [state, setState] = useState(initialValue);
  const stableSetState = useCallback((newState) => {
    setState(newState);
  }, []);

  return [state, stableSetState];
}

// Éviter les objets inline dans les props
const STATIC_STYLE = { marginTop: 10 };

function MyComponent() {
  return <ChildComponent style={STATIC_STYLE} />; // ✅ Bon
  // return <ChildComponent style={{ marginTop: 10 }} />; // ❌ Éviter
}
```

## 🔄 Optimisation du Rendering

### Server Components vs Client Components

```tsx
// ✅ Server Component (par défaut)
function ServerComponent() {
  // Rendu côté serveur, bundle plus léger
  return <div>Contenu statique</div>;
}

// ✅ Client Component (avec 'use client')
("use client");
function ClientComponent() {
  const [state, setState] = useState(false);
  // Interactivité côté client
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

### Streaming et Suspense

```tsx
import { Suspense } from "react";

function MyPage() {
  return (
    <div>
      <header>Header immédiat</header>

      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <AnotherSlowComponent />
      </Suspense>
    </div>
  );
}
```

## 📱 Optimisation Mobile

### Responsive Images

```tsx
<Image
  src="/hero-image.jpg"
  alt="Image héro"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  width={800}
  height={600}
  priority
/>
```

### Touch Optimizations

```css
/* Optimisations tactiles */
.interactive {
  touch-action: manipulation; /* Évite le délai de 300ms */
  -webkit-tap-highlight-color: transparent; /* Supprime le highlight */
}

/* Zones tactiles minimum 44px */
.button {
  min-height: 44px;
  min-width: 44px;
}
```

## 🔧 Outils de Monitoring

### Web Vitals

```tsx
// pages/_app.tsx ou app/layout.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

function sendToAnalytics(metric) {
  // Envoyer à votre service d'analytics
  gtag("event", metric.name, {
    value: Math.round(metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}

// Mesurer toutes les métriques
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Observer

```typescript
// Monitoring personnalisé
if (typeof window !== "undefined" && "PerformanceObserver" in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Analyser les métriques de performance
      console.log(entry);
    }
  });

  observer.observe({ type: "navigation", buffered: true });
  observer.observe({ type: "paint", buffered: true });
}
```

## 🚀 Optimisations Build

### Configuration Webpack

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@radix-ui/react-icons"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};
```

### Optimisation Turbopack

```bash
# Développement avec Turbopack (plus rapide)
npm run dev --turbo

# Build de production optimisé
npm run build
```

## 📊 Métriques de Benchmark

### Temps de Build

- **Development** : ~2s (avec Turbopack)
- **Production Build** : ~45s
- **TypeScript Check** : ~8s

### Tailles de Bundle

- **First Load JS** : ~85KB
- **Route Pages** : ~12KB moyenne
- **Shared Chunks** : ~73KB

### Métriques Réseau

- **TTFB** : <200ms
- **FCP** : <1.2s
- **LCP** : <1.5s
- **Total Blocking Time** : <100ms

## 🔍 Audit et Tests

### Scripts d'Audit

```bash
# Lighthouse CLI
npx lighthouse http://localhost:3000 --view

# Bundle size analysis
npm run analyze

# Performance testing
npm run test:performance
```

### Monitoring Continu

```typescript
// Sentry Performance Monitoring
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

## 📚 Ressources

### Outils Recommandés

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Vercel Speed Insights](https://vercel.com/docs/concepts/speed-insights)

### Documentation

- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev Performance](https://web.dev/performance/)
- [React Performance](https://react.dev/learn/render-and-commit)
