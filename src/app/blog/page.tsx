import Link from "next/link";
import { CalendarIcon, UserIcon, TagIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import { generateBlogJsonLd } from "@/lib/structured-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog - Mon Application Next.js",
  description:
    "Découvrez nos derniers articles sur Next.js, React, TypeScript et les meilleures pratiques du développement web moderne. Tutorials, guides et conseils d'experts.",
  keywords: [
    "blog",
    "Next.js",
    "React",
    "TypeScript",
    "développement web",
    "tutorials",
    "guides",
  ],
  openGraph: {
    title: "Blog - Mon Application Next.js",
    description:
      "Découvrez nos derniers articles sur Next.js, React, TypeScript et les meilleures pratiques du développement web moderne. Tutorials, guides et conseils d'experts.",
    type: "website",
  },
};

export default function BlogPage() {
  const blogJsonLd = generateBlogJsonLd();

  const posts = [
    {
      id: "1",
      title: "Guide complet pour Next.js 15",
      excerpt:
        "Découvrez toutes les nouveautés de Next.js 15 et comment migrer votre application existante vers cette nouvelle version.",
      content:
        "Next.js 15 apporte de nombreuses améliorations en termes de performance et de développeur experience...",
      date: "2025-01-01",
      author: "Guillaume",
      category: "Technologie",
      readTime: "8 min",
      featured: true,
    },
    {
      id: "2",
      title: "Les tendances design 2025",
      excerpt:
        "Explorez les tendances design qui définiront l'année 2025 et comment les intégrer dans vos projets.",
      content: "Le design évolue constamment et 2025 ne fait pas exception...",
      date: "2024-12-28",
      author: "Marie",
      category: "Design",
      readTime: "6 min",
      featured: false,
    },
    {
      id: "3",
      title: "Optimiser ses performances web",
      excerpt:
        "Techniques avancées pour améliorer les performances de vos applications web et offrir une meilleure expérience utilisateur.",
      content:
        "La performance web est cruciale pour l'expérience utilisateur...",
      date: "2024-12-25",
      author: "Pierre",
      category: "Développement",
      readTime: "10 min",
      featured: false,
    },
    {
      id: "4",
      title: "Stratégies marketing digital 2025",
      excerpt:
        "Comment adapter votre stratégie marketing aux nouvelles tendances digitales de 2025.",
      content: "Le marketing digital continue d'évoluer rapidement...",
      date: "2024-12-20",
      author: "Sophie",
      category: "Marketing",
      readTime: "7 min",
      featured: false,
    },
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <div className="space-y-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        {/* Featured Post */}
        {featuredPost && (
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full">
                  Article Vedette
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center">
                  <TagIcon className="h-3 w-3 mr-1" />
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime} de lecture</span>
                </div>

                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Lire l'article
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center">
                    <TagIcon className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3">
                    <span className="flex items-center">
                      <UserIcon className="h-3 w-3 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>

                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
            Charger plus d'articles
          </button>
        </div>
      </div>
    </>
  );
}
