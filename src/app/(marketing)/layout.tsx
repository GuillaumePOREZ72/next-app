import Link from "next/link";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      {/* Marketing Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Notre Entreprise</h1>
              <p className="text-blue-100 text-sm">
                Solutions innovantes pour votre entreprise
              </p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/about"
                className="hover:text-blue-200 transition-colors font-medium"
              >
                À Propos
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                href="/dashboard"
                className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium"
              >
                Accéder au Dashboard
                <ArrowRightIcon className="inline ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* Marketing Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Notre Entreprise</h3>
              <p className="text-gray-300 mb-4">
                Nous créons des solutions innovantes pour aider votre entreprise
                à prospérer dans le monde numérique.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <MailIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contactez-nous</h4>
              <p className="text-gray-300 text-sm mb-2">
                Email: contact@entreprise.com
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Téléphone: +33 1 23 45 67 89
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Nous Contacter
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Notre Entreprise. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
