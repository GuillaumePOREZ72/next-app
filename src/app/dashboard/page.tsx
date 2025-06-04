import {
  UsersIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ActivityIcon,
  CalendarIcon,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Mon Application Next.js",
  description:
    "Tableau de bord complet avec statistiques en temps réel, analytics de performance et gestion de votre activité. Interface intuitive et données détaillées.",
  keywords: [
    "dashboard",
    "tableau de bord",
    "statistiques",
    "analytics",
    "performance",
    "gestion",
  ],
  openGraph: {
    title: "Dashboard - Mon Application Next.js",
    description:
      "Tableau de bord complet avec statistiques en temps réel, analytics de performance et gestion de votre activité. Interface intuitive et données détaillées.",
    type: "website",
  },
};

export default function DashboardPage() {
  const stats = [
    {
      title: "Revenus totaux",
      value: "45,231€",
      change: "+20.1%",
      trend: "up",
      icon: DollarSignIcon,
    },
    {
      title: "Utilisateurs",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: UsersIcon,
    },
    {
      title: "Ventes",
      value: "12,234",
      change: "+19%",
      trend: "up",
      icon: TrendingUpIcon,
    },
    {
      title: "Performance",
      value: "573",
      change: "+8.2%",
      trend: "up",
      icon: ActivityIcon,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Voici un aperçu de vos données et performances.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-4 w-4" />
          <span>Dernière mise à jour: Aujourd'hui</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  {stat.change}
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                  par rapport au mois dernier
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activité récente
          </h3>
          <div className="space-y-4">
            {[
              { label: "Nouveau client ajouté", time: "Il y a 2 minutes" },
              { label: "Commande traitée", time: "Il y a 5 minutes" },
              { label: "Rapport généré", time: "Il y a 10 minutes" },
              { label: "Mise à jour système", time: "Il y a 15 minutes" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {activity.label}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Aperçu des performances
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Ventes</span>
                <span className="text-gray-900 dark:text-white">78%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                  Marketing
                </span>
                <span className="text-gray-900 dark:text-white">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                  Support
                </span>
                <span className="text-gray-900 dark:text-white">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
