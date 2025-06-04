import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paramètres - Dashboard Mon Application",
  description:
    "Configurez vos préférences, gérez votre profil et personnalisez votre expérience utilisateur. Paramètres de sécurité, notifications et préférences d'affichage.",
  keywords: [
    "paramètres",
    "configuration",
    "profil",
    "préférences",
    "sécurité",
    "notifications",
  ],
  openGraph: {
    title: "Paramètres - Dashboard Mon Application",
    description:
      "Configurez vos préférences, gérez votre profil et personnalisez votre expérience utilisateur. Paramètres de sécurité, notifications et préférences d'affichage.",
    type: "website",
  },
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Paramètres
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Gérez vos préférences et configurez votre compte
        </p>
      </div>

      <div className="grid gap-6">
        {/* Profil */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Informations du profil
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Mettre à jour le profil
            </button>
          </div>
        </div>

        {/* Préférences */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Préférences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Notifications par email
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recevoir des notifications sur les nouvelles activités
                </p>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Notifications push
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recevoir des notifications dans le navigateur
                </p>
              </div>
              <input type="checkbox" className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Newsletter
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recevoir notre newsletter hebdomadaire
                </p>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                defaultChecked
              />
            </div>
          </div>
        </div>

        {/* Sécurité */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sécurité
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
              />
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
