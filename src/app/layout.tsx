import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/toggle-theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Application Next.js - Plateforme Moderne",
  description:
    "Une application Next.js moderne avec blog, dashboard et pages marketing. Interface intuitive, mode sombre, et contenu optimisé pour le SEO.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Blog",
    "Dashboard",
    "Application Web",
  ],
  authors: [{ name: "Mon Application" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mon Application Next.js - Plateforme Moderne",
    description:
      "Une application Next.js moderne avec blog, dashboard et pages marketing. Interface intuitive, mode sombre, et contenu optimisé pour le SEO.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mon Application Next.js - Plateforme Moderne",
    description:
      "Une application Next.js moderne avec blog, dashboard et pages marketing. Interface intuitive, mode sombre, et contenu optimisé pour le SEO.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center px-6">
              <div className="mr-auto flex items-center pl-2">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Image
                    src="/globe.svg"
                    alt="Application Logo"
                    width={24}
                    height={24}
                  />{" "}
                </Link>
              </div>
              {/* Mobile Menu Trigger can be added here if needed */}
              <nav className="hidden md:flex items-center space-x-8 text-sm font-medium mr-8">
                <Link
                  href="/blog"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Blog
                </Link>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  Dashboard
                </Link>
              </nav>
              <div className="flex items-center space-x-2">
                <ModeToggle />
              </div>
            </div>
          </header>
          <main>{children}</main>
          {/* You can add a global footer here if needed */}
        </ThemeProvider>
      </body>
    </html>
  );
}
