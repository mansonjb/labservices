import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/data";
import { buildJsonLd } from "@/lib/seo";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StickyCta from "@/components/sticky-cta";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  "LAB Services conçoit, produit et livre vos événements de A à Z : stands sur mesure, salons, roadshows, activations et logistique 360°. Agence de production événementielle au Mans et à Paris, partenaire des 24h du Mans et du GP Explorer. Demandez votre devis gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default:
      "LAB Services — Agence de logistique & production événementielle | Le Mans & Paris",
    template: "%s | LAB Services",
  },
  description: DESCRIPTION,
  applicationName: "LAB Services",
  keywords: [
    "agence événementielle",
    "logistique événementielle",
    "production événementielle",
    "stand sur mesure",
    "salon professionnel",
    "roadshow",
    "scénographie événementielle",
    "activation de marque",
    "hospitality 24h du Mans",
    "événementiel sportif",
    "agence événementielle Le Mans",
    "agence événementielle Paris",
  ],
  authors: [{ name: "LAB Services", url: BUSINESS.url }],
  creator: "LAB Services",
  publisher: "LAB Services",
  category: "Événementiel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BUSINESS.url,
    siteName: "LAB Services",
    title:
      "LAB Services — Logisticiens, Architectes & Bâtisseurs d'événements",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "LAB Services — Production événementielle 360° | Le Mans & Paris",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="fr" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
