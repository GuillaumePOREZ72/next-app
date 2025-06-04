import Link from "next/link";
import { HomeIcon, SearchIcon } from "lucide-react";
import type { Metadata } from "next";
import BackButton from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Page non trouvée - 404 | Mon Application Next.js",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou explorez notre blog et nos services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Page non trouvée
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <HomeIcon className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <SearchIcon className="w-4 h-4 mr-2" />
            Parcourir le blog
          </Link>

          <BackButton />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              nous contacter
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
