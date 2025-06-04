import Link from "next/link";
import {
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { generateArticleJsonLd } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // Dans une vraie application, vous récupéreriez les données de l'article ici
  const posts: {
    [key: string]: { title: string; excerpt: string; tags: string[] };
  } = {
    "1": {
      title: "Guide complet pour Next.js 15",
      excerpt:
        "Découvrez toutes les nouveautés de Next.js 15 et comment migrer votre application existante vers cette nouvelle version.",
      tags: ["Next.js", "React", "JavaScript"],
    },
    "2": {
      title: "Optimiser les performances React",
      excerpt:
        "Techniques avancées pour améliorer les performances de vos applications React et réduire le temps de chargement.",
      tags: ["React", "Performance", "Optimisation"],
    },
    "3": {
      title: "TypeScript pour les débutants",
      excerpt:
        "Introduction complète à TypeScript avec des exemples pratiques et des conseils pour bien commencer.",
      tags: ["TypeScript", "JavaScript", "Développement"],
    },
  };

  const post = posts[id] || {
    title: "Article de blog",
    excerpt: "Découvrez nos conseils et astuces de développement web.",
    tags: ["Blog"],
  };

  return {
    title: `${post.title} - Blog Mon Application`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} - Blog Mon Application`,
      description: post.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Blog Mon Application`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // In a real app, you would fetch this data based on id
  const post = {
    id: id,
    title: "Guide complet pour Next.js 15",
    content: `
      <p>Next.js 15 marque une étape importante dans l'évolution de ce framework React populaire. Cette nouvelle version apporte de nombreuses améliorations en termes de performance, de développement et d'expérience utilisateur.</p>
      
      <h2>Les nouveautés principales</h2>
      
      <h3>1. App Router amélioré</h3>
      <p>L'App Router de Next.js 15 offre maintenant une meilleure gestion du routage avec des performances optimisées et une meilleure intégration avec React Server Components.</p>
      
      <h3>2. Turbopack plus rapide</h3>
      <p>Turbopack, le nouveau bundler de Vercel, est maintenant encore plus rapide et stable. Il réduit considérablement les temps de compilation et de rechargement à chaud.</p>
      
      <h3>3. Améliorations des performances</h3>
      <p>Next.js 15 introduit de nouvelles optimisations automatiques qui améliorent les Core Web Vitals sans configuration supplémentaire.</p>
      
      <h2>Comment migrer vers Next.js 15</h2>
      
      <p>La migration vers Next.js 15 est généralement simple, mais il y a quelques points à considérer :</p>
      
      <ol>
        <li>Mettre à jour les dépendances</li>
        <li>Vérifier la compatibilité des packages tiers</li>
        <li>Tester les nouvelles fonctionnalités</li>
        <li>Optimiser selon les nouvelles recommandations</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>Next.js 15 représente une évolution majeure qui mérite d'être adoptée. Les améliorations de performance et l'expérience développeur améliorée en font un choix excellent pour vos prochains projets.</p>
    `,
    excerpt:
      "Découvrez toutes les nouveautés de Next.js 15 et comment migrer votre application existante vers cette nouvelle version.",
    date: "2025-01-01",
    author: "Guillaume",
    category: "Technologie",
    readTime: "8 min",
    tags: ["Next.js", "React", "JavaScript", "Frontend", "Performance"],
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Les tendances design 2025",
      category: "Design",
    },
    {
      id: "3",
      title: "Optimiser ses performances web",
      category: "Développement",
    },
  ];

  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `https://votre-domaine.com/blog/${id}`,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    image: `https://votre-domaine.com/globe.svg`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <div className="space-y-8">
        <Breadcrumbs
          items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        />

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <header className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
              <TagIcon className="h-4 w-4 mr-1" />
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
              <span className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span>{post.readTime} de lecture</span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white dark:bg-gray-800 rounded-lg p-6 lg:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Articles similaires
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-gray-300 dark:hover:border-gray-500 transition-colors group"
              >
                <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                  {relatedPost.category}
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {relatedPost.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
