import { BUSINESS, SERVICES, FAQ } from "./data";

// Construit le graphe JSON-LD (schema.org) — optimisé Google + moteurs IA (GEO).
export function buildJsonLd() {
  const org = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    description:
      "Agence de logistique et de production événementielle basée au Mans et à Paris. Conception 3D, stands, salons, roadshows, activations, scénographie et logistique 360°.",
    slogan: BUSINESS.tagline,
    logo: { "@type": "ImageObject", url: `${BUSINESS.url}/logo.png` },
    image: `${BUSINESS.url}/og.jpg`,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.linkedin, BUSINESS.social.facebook],
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: [
      "logistique événementielle",
      "production événementielle",
      "stand sur mesure",
      "scénographie",
      "roadshow",
      "hospitality sportive",
      "modélisation 3D événementielle",
    ],
    location: BUSINESS.locations.map((l, i) => ({
      "@type": "Place",
      "@id": `${BUSINESS.url}/#place-${i}`,
      name: `${BUSINESS.name} — ${l.city}`,
      address: {
        "@type": "PostalAddress",
        ...(l.street ? { streetAddress: l.street } : {}),
        addressLocality: l.city,
        addressRegion: l.region,
        postalCode: l.postalCode,
        addressCountry: l.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${BUSINESS.url}/#organization` },
  };

  const services = {
    "@type": "OfferCatalog",
    "@id": `${BUSINESS.url}/#services`,
    name: "Services événementiels LAB Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.desc,
        provider: { "@id": `${BUSINESS.url}/#organization` },
        areaServed: "FR",
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${BUSINESS.url}/#faq`,
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [org, website, services, faqPage],
  };
}
