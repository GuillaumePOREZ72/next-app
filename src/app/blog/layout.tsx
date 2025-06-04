import Link from "next/link";
import { CalendarIcon, TagIcon, UserIcon, SearchIcon } from "lucide-react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = [
    "Technologie",
    "Design",
    "Marketing",
    "Business",
    "Développement",
  ];

  const recentPosts = [
    {
      id: "1",
      title: "Guide complet pour Next.js 15",
      date: "2025-01-01",
      author: "Guillaume",
    },
    {
      id: "2",
      title: "Les tendances design 2025",
      date: "2024-12-28",
      author: "Marie",
    },
    {
      id: "3",
      title: "Optimiser ses performances web",
      date: "2024-12-25",
      author: "Pierre",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Blog Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Blog
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Découvrez nos derniers articles et insights
              </p>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
              <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 lg:w-2/3">{children}</main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TagIcon className="h-5 w-5 mr-2" />
                  Catégories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog?category=${category.toLowerCase()}`}
                      className="block py-2 px-3 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Articles Récents
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 space-x-4">
                        <span className="flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <UserIcon className="h-3 w-3 mr-1" />
                          {post.author}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Restez informé de nos derniers articles
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
