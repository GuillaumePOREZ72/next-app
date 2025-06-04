import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "À Propos - Mon Application Next.js",
  description:
    "Découvrez notre histoire, notre mission et notre équipe. Nous créons des solutions innovantes avec les dernières technologies pour transformer votre expérience digitale.",
  keywords: [
    "à propos",
    "équipe",
    "mission",
    "histoire",
    "innovation",
    "technologies",
  ],
  openGraph: {
    title: "À Propos - Mon Application Next.js",
    description:
      "Découvrez notre histoire, notre mission et notre équipe. Nous créons des solutions innovantes avec les dernières technologies pour transformer votre expérience digitale.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: "À Propos" }]} />

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          À Propos de Nous
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Nous sommes une équipe passionnée dédiée à créer des expériences
            numériques exceptionnelles en utilisant les technologies les plus
            avancées.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            Notre Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Notre mission est de transformer la façon dont les entreprises
            interagissent avec leurs clients en créant des solutions numériques
            innovantes, performantes et accessibles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            Notre Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Nous aspirons à être les leaders dans le développement
            d'applications web modernes, en repoussant constamment les limites
            de ce qui est possible avec les technologies actuelles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
            Notre Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Développement avec Next.js et React</li>
            <li>Applications TypeScript robustes</li>
            <li>Interfaces utilisateur modernes avec Tailwind CSS</li>
            <li>Optimisation SEO et performances</li>
            <li>Expérience utilisateur exceptionnelle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
