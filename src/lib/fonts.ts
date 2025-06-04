// Configuration des polices optimisées pour le SEO et les performances
import { Inter, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    preload: true,
})

export const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
    preload: false, // Chargé uniquement quand nécessaire
})

// Configuration des métriques de police pour éviter le layout shift
export const fontConfig = {
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
}
