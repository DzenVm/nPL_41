import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, SITE_NAME, SITE_LOCALE, SITE_DESCRIPTION } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const text = Public_Sans({
  subsets: ["latin-ext"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frebamee — atlas spokojnej strategii",
    template: "%s — Frebamee",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "gra przeglądarkowa",
    "strategia",
    "gra dla jednego gracza",
    "gra logistyczna",
    "budowanie osady",
    "gra bez pobierania",
  ],
  alternates: {
    canonical: "/",
    languages: { "pl-PL": "/" },
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    title: "Frebamee — atlas spokojnej strategii",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frebamee — poznaj wyspy, zaplanuj dostawy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frebamee — atlas spokojnej strategii",
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#121c29" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "pl-PL",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${display.variable} ${text.variable}`}>
      <body>
        <a href="#tresc" className="skip-link">
          Przejdź do treści
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main id="tresc">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
