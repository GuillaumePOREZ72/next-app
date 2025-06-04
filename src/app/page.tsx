import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ZapIcon, BarChartIcon, UsersIcon } from "lucide-react";
import type { Metadata } from "next";
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Accueil - Mon Application Next.js",
  description:
    "Découvrez notre plateforme moderne construite avec Next.js. Des outils puissants, une interface intuitive et des performances exceptionnelles pour votre business.",
  keywords: ["accueil", "plateforme", "Next.js", "business", "outils modernes"],
  openGraph: {
    title: "Accueil - Mon Application Next.js",
    description:
      "Découvrez notre plateforme moderne construite avec Next.js. Des outils puissants, une interface intuitive et des performances exceptionnelles pour votre business.",
    type: "website",
  },
};

export default function Home() {
  const organizationJsonLd = generateOrganizationJsonLd();
  const websiteJsonLd = generateWebsiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                    Bienvenue sur notre Plateforme
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                    Notre site vous permet de donner vie à vos applications web
                    avec une vitesse et une efficacité inégalées.
                    Concentrez-vous sur l'innovation, pas sur l'infrastructure.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400"
                  >
                    Commencer Gratuitement
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-600"
                  >
                    En Savoir Plus
                  </Link>
                </div>
              </div>
              <Image
                src="/globe.svg"
                alt="Abstract Globe"
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full lg:order-last animate-pulse-slow"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                Pourquoi Nous Choisir ?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
                Tout ce Dont Vous Avez Besoin pour Réussir
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Notre plateforme fournit une suite complète d'outils et de
                fonctionnalités conçus pour accélérer votre développement et
                améliorer l'engagement des utilisateurs.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <ZapIcon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Ultra Rapide
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Profitez de performances ultra-rapides et de chargements de
                  page instantanés grâce à notre infrastructure optimisée.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <BarChartIcon className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Analyses Détaillées
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Obtenez des informations précieuses sur l'utilisation et les
                  performances de votre application grâce à nos analyses
                  intégrées.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <UsersIcon className="h-8 w-8 text-purple-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Collaboration Facilitée
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Travaillez efficacement avec votre équipe grâce à nos
                  fonctionnalités de collaboration intégrées et au contrôle de
                  version.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800/60 border-t border-b dark:border-gray-700/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-50">
                Prêt à Améliorer Votre Présence Web ?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Rejoignez des milliers de développeurs et d'entreprises qui font
                confiance à notre plateforme. Inscrivez-vous aujourd'hui et
                commencez à créer quelque chose d'incroyable.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-4">
              <Link
                href="/dashboard"
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-400 dark:focus-visible:ring-blue-400"
              >
                S'inscrire Gratuitement
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Aucune carte de crédit requise. Commencez en quelques minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Footer (Basic - your main footer is likely in layout.tsx) */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-700/50">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2025 Votre Super App Inc. Tous droits réservés.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            >
              Conditions d'Utilisation
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            >
              Politique de Confidentialité
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
