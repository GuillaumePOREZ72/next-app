export function generateOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Mon Application Next.js',
        description: 'Une application Next.js moderne avec blog, dashboard et pages marketing. Interface intuitive, mode sombre, et contenu optimisé pour le SEO.',
        url: 'https://votre-domaine.com',
        logo: 'https://votre-domaine.com/globe.svg',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33-1-23-45-67-89',
            contactType: 'Customer Service',
            email: 'contact@monapplication.fr'
        },
        sameAs: [
            'https://twitter.com/votre-compte',
            'https://linkedin.com/company/votre-entreprise'
        ]
    }
}

export function generateWebsiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mon Application Next.js',
        description: 'Une application Next.js moderne avec blog, dashboard et pages marketing. Interface intuitive, mode sombre, et contenu optimisé pour le SEO.',
        url: 'https://votre-domaine.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://votre-domaine.com/blog?search={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    }
}

export function generateBlogJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog - Mon Application Next.js',
        description: 'Découvrez nos derniers articles sur Next.js, React, TypeScript et les meilleures pratiques du développement web moderne.',
        url: 'https://votre-domaine.com/blog',
        publisher: {
            '@type': 'Organization',
            name: 'Mon Application Next.js',
            logo: 'https://votre-domaine.com/globe.svg'
        }
    }
}

export function generateArticleJsonLd(article: {
    title: string
    description: string
    url: string
    datePublished: string
    dateModified?: string
    author: string
    image?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: article.url,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Person',
            name: article.author
        },
        publisher: {
            '@type': 'Organization',
            name: 'Mon Application Next.js',
            logo: 'https://votre-domaine.com/globe.svg'
        },
        image: article.image || 'https://votre-domaine.com/globe.svg',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url
        }
    }
}
