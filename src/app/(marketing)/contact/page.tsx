import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact - Mon Application Next.js",
  description:
    "Contactez-nous pour discuter de vos projets, obtenir un devis ou poser vos questions. Notre équipe est là pour vous accompagner dans votre transformation digitale.",
  keywords: [
    "contact",
    "devis",
    "questions",
    "support",
    "assistance",
    "projet",
  ],
  openGraph: {
    title: "Contact - Mon Application Next.js",
    description:
      "Contactez-nous pour discuter de vos projets, obtenir un devis ou poser vos questions. Notre équipe est là pour vous accompagner dans votre transformation digitale.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Contactez-Nous
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Restons en Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Nous serions ravis de discuter de votre projet et de voir comment
              nous pouvons vous aider à atteindre vos objectifs digitaux.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">@</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  contact@monapplication.fr
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  +33 1 23 45 67 89
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Paris, France
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Envoyez-nous un message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Décrivez votre projet ou posez vos questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
