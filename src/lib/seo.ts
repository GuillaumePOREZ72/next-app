import { Metadata } from 'next'

interface SEOProps {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
}

export function generateSEOMetadata({
    title,
    description,
    keywords = [],
    image = '/globe.svg',
    url = '',
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = []
}: SEOProps): Metadata {
    const baseUrl = 'https://votre-domaine.com'
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

    const metadata: Metadata = {
        title,
        description,
        keywords: keywords.join(', '),
        authors: author ? [{ name: author }] : undefined,
        openGraph: {
            title,
            description,
            url: fullUrl,
            siteName: 'Mon Application Next.js',
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'fr_FR',
            type,
            ...(type === 'article' && {
                publishedTime,
                modifiedTime,
                authors: author ? [author] : undefined,
                section,
                tags,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [fullImageUrl],
            creator: author ? `@${author}` : undefined,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'votre-code-verification-google',
            // Ajoutez d'autres codes de vérification si nécessaire
        },
    }

    return metadata
}

// Fonction pour générer le JSON-LD de base pour une page
export function generatePageJsonLd({
    title,
    description,
    url,
    image,
    type = 'WebPage'
}: {
    title: string
    description: string
    url: string
    image?: string
    type?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': type,
        name: title,
        description,
        url: `https://votre-domaine.com${url}`,
        image: image ? `https://votre-domaine.com${image}` : 'https://votre-domaine.com/globe.svg',
        isPartOf: {
            '@type': 'WebSite',
            name: 'Mon Application Next.js',
            url: 'https://votre-domaine.com'
        }
    }
}
