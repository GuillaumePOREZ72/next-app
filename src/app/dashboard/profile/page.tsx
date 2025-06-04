import React from "react";
import type { Metadata } from "next";
import {
  UserIcon,
  MailIcon,
  CalendarIcon,
  MapPinIcon,
  EditIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profil - Dashboard Mon Application",
  description:
    "Consultez et modifiez votre profil utilisateur. Informations personnelles, historique d'activité et préférences de compte dans un interface conviviale.",
  keywords: [
    "profil",
    "utilisateur",
    "compte",
    "informations personnelles",
    "activité",
  ],
  openGraph: {
    title: "Profil - Dashboard Mon Application",
    description:
      "Consultez et modifiez votre profil utilisateur. Informations personnelles, historique d'activité et préférences de compte dans un interface conviviale.",
    type: "profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Mon Profil
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Gérez vos informations personnelles et votre activité
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Carte de profil */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Jean Dupont
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Développeur Full-Stack
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                  <MailIcon className="w-4 h-4" />
                  <span className="text-sm">jean.dupont@email.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm">Paris, France</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-sm">Membre depuis Mai 2024</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <EditIcon className="w-4 h-4" />
                <span>Modifier le profil</span>
              </button>
            </div>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informations personnelles */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Informations personnelles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Prénom
                </label>
                <p className="text-gray-900 dark:text-white">Jean</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom
                </label>
                <p className="text-gray-900 dark:text-white">Dupont</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Téléphone
                </label>
                <p className="text-gray-900 dark:text-white">
                  +33 1 23 45 67 89
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date de naissance
                </label>
                <p className="text-gray-900 dark:text-white">15 Mars 1990</p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Statistiques d'activité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  42
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Projets créés
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  128
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Tâches terminées
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  15
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Collaborateurs
                </div>
              </div>
            </div>
          </div>

          {/* Activité récente */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Activité récente
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">
                      Nouveau projet créé: "Application E-commerce"
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Il y a 2 heures
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
