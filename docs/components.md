# 🎨 Guide des Composants UI

Ce guide présente tous les composants UI disponibles dans l'application et comment les utiliser.

## 📦 Composants Disponibles

### Navigation

#### Breadcrumbs

Composant de fil d'Ariane avec support JSON-LD pour le SEO.

```tsx
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

<Breadcrumbs
  items={[
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Article", href: "/blog/1" },
  ]}
/>;
```

**Props :**

- `items`: Array d'objets avec `label` et `href`
- `className?`: Classes CSS supplémentaires

**Fonctionnalités :**

- Génération automatique de JSON-LD
- Responsive design
- Accessibilité ARIA

### Boutons

#### Button

Bouton principal avec plusieurs variantes.

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="md">
  Cliquez ici
</Button>;
```

**Variantes :**

- `default`: Bouton primaire bleu
- `destructive`: Bouton rouge pour actions dangereuses
- `outline`: Bouton avec bordure
- `secondary`: Bouton secondaire gris
- `ghost`: Bouton transparent
- `link`: Style de lien

**Tailles :**

- `sm`: Petit bouton
- `md`: Taille normale
- `lg`: Grand bouton

#### BackButton

Bouton de retour client-side pour la navigation.

```tsx
import BackButton from "@/components/ui/back-button";

<BackButton />;
```

### Formulaires

#### Input

Champ de saisie avec styles cohérents.

```tsx
import { Input } from "@/components/ui/input";

<Input type="email" placeholder="votre@email.com" className="w-full" />;
```

**Types supportés :**

- `text`, `email`, `password`, `number`, `tel`, `url`

### Thème

#### ThemeProvider

Fournisseur de contexte pour la gestion du thème.

```tsx
import { ThemeProvider } from "@/components/ui/theme-provider";

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>;
```

#### ModeToggle

Bouton de basculement entre mode clair et sombre.

```tsx
import { ModeToggle } from "@/components/ui/toggle-theme";

<ModeToggle />;
```

### Dropdowns & Menus

#### DropdownMenu

Menu déroulant accessible basé sur Radix UI.

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Option 1</DropdownMenuItem>
    <DropdownMenuItem>Option 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

#### Menubar

Barre de menu horizontale.

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>Fichier</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Nouveau</MenubarItem>
      <MenubarItem>Ouvrir</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>;
```

### Layout & Structure

#### Separator

Séparateur visuel entre sections.

```tsx
import { Separator } from "@/components/ui/separator";

<Separator className="my-4" />;
```

**Orientations :**

- `horizontal` (défaut)
- `vertical`

#### Sheet

Panneau latéral coulissant.

```tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button>Ouvrir le panneau</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Titre du panneau</SheetTitle>
    </SheetHeader>
    <p>Contenu du panneau</p>
  </SheetContent>
</Sheet>;
```

#### Sidebar

Barre latérale pour la navigation.

```tsx
import { Sidebar } from "@/components/ui/sidebar";

<Sidebar>
  <nav>
    <a href="/">Accueil</a>
    <a href="/blog">Blog</a>
  </nav>
</Sidebar>;
```

### Feedback

#### Skeleton

Placeholder animé pendant le chargement.

```tsx
import { Skeleton } from "@/components/ui/skeleton";

<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>;
```

#### Tooltip

Info-bulle au survol.

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Survolez-moi</TooltipTrigger>
    <TooltipContent>
      <p>Information utile</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>;
```

## 🎨 Personnalisation

### Système de Design

#### Couleurs

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... autres couleurs */
}
```

#### Typographie

```css
.text-sm {
  font-size: 0.875rem;
}
.text-base {
  font-size: 1rem;
}
.text-lg {
  font-size: 1.125rem;
}
.text-xl {
  font-size: 1.25rem;
}
```

#### Espacements

```css
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
```

### Variantes avec CVA

```typescript
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## 📱 Responsivité

### Breakpoints Tailwind

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Exemples d'Usage

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Contenu responsive */}
</div>
```

## ♿ Accessibilité

### Bonnes Pratiques Implémentées

- **ARIA Labels** : Tous les composants interactifs
- **Focus Management** : Navigation au clavier
- **Color Contrast** : Ratio minimum 4.5:1
- **Screen Readers** : Support complet

### Exemple d'Implémentation

```tsx
<button
  aria-label="Fermer le modal"
  aria-expanded={isOpen}
  aria-controls="modal-content"
>
  <CloseIcon aria-hidden="true" />
</button>
```

## 🔧 Création de Nouveaux Composants

### Structure Recommandée

```
components/ui/
├── mon-composant.tsx
├── index.ts
└── mon-composant.stories.tsx (optionnel)
```

### Template de Base

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface MonComposantProps {
  children: React.ReactNode;
  className?: string;
}

const MonComposant = React.forwardRef<HTMLDivElement, MonComposantProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("base-styles", className)} {...props}>
        {children}
      </div>
    );
  }
);

MonComposant.displayName = "MonComposant";

export { MonComposant };
```

## 📚 Ressources

### Documentation Externe

- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CVA Documentation](https://cva.style/)
- [Lucide Icons](https://lucide.dev/)

### Outils de Développement

- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
