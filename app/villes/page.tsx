import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, PSERVICES } from "@/lib/programmatic";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zones d'intervention — Agence événementielle partout en France",
  description:
    "LAB Services intervient partout en France : Paris, Lyon, Bordeaux, Lille, Le Mans, Nantes, Marseille, Strasbourg. Stands, salons, logistique et hospitality événementielle, ville par ville.",
  alternates: { canonical: "/villes" },
};

export default function VillesHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zones d'intervention LAB Services",
    url: `${BUSINESS.url}/villes`,
    about: PSERVICES.map((s) => s.label),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 blueprint opacity-60" />
        <div className="pointer-events-none absolute -right-40 -top-28 h-[440px] w-[440px] red-glow" />
        <div className="container-x relative pb-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-mist">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2 text-line">/</span>
            <span className="text-white">Zones d&apos;intervention</span>
          </nav>
          <span className="eyebrow">Partout en France</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.08] md:text-6xl">
            Nos <span className="text-gradient">zones d&apos;intervention</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mist">
            Basés au Mans et à Paris, nous déployons stands, salons, logistique et hospitality événementielle dans toute la France. Choisissez votre prestation et votre ville.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x space-y-12">
          {PSERVICES.map((s) => (
            <div key={s.slug}>
              <h2 className="font-display text-xl font-extrabold text-white md:text-2xl">{s.label}</h2>
              <p className="mt-1 text-sm text-mist">{s.lead}</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${s.slug}/${c.slug}`}
                      className="inline-block rounded-full border border-line bg-charcoal px-4 py-2 text-sm font-medium text-mist transition hover:border-red hover:text-white"
                    >
                      {s.label} {c.prep}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
