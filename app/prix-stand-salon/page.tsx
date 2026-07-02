import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import DevisForm from "@/components/devis-form";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prix d'un stand de salon : le guide complet 2026",
  description:
    "Combien coûte un stand de salon en 2026 ? Fourchettes de prix au m² (stand nu, modulaire, sur mesure), coûts annexes, exemples de budgets et conseils pour optimiser. Le guide LAB Services.",
  alternates: { canonical: "/prix-stand-salon" },
  openGraph: {
    title: "Prix d'un stand de salon : le guide complet 2026 — LAB Services",
    description:
      "Fourchettes de prix au m², coûts annexes, exemples de budgets et conseils pour optimiser le coût de votre stand de salon.",
    url: "/prix-stand-salon",
    type: "article",
    locale: "fr_FR",
  },
};

const FAQ = [
  {
    q: "Combien coûte un stand de salon au m² ?",
    a: "En 2026, comptez en moyenne 150 à 300 €/m² pour un stand nu (emplacement seul), 200 à 450 €/m² pour un stand modulaire équipé, et 600 à 1 200 €/m² (voire plus) pour un stand sur mesure. Ces fourchettes sont indicatives et varient selon le salon, la ville et le niveau de finition.",
  },
  {
    q: "Quel budget total prévoir pour un stand de 20 m² ?",
    a: "Pour un stand sur mesure de 20 m² clé en main (conception, fabrication, mobilier, transport, montage et démontage), le budget se situe généralement entre 15 000 et 40 000 €. Un stand modulaire équipé de même surface descend souvent sous les 12 000 €.",
  },
  {
    q: "Qu'est-ce qui fait varier le prix d'un stand ?",
    a: "Principalement : la surface, le type de stand (nu, modulaire, sur mesure), le nombre de côtés ouverts, la hauteur et l'étage éventuel, les matériaux et finitions, le mobilier et l'audiovisuel, le transport et le stockage, ainsi que le montage/démontage et le personnel sur place.",
  },
  {
    q: "Comment réduire le coût d'un stand de salon ?",
    a: "En optant pour un stand réutilisable d'un salon à l'autre (amorti sur plusieurs événements), en mutualisant le stockage et la logistique, et en confiant l'ensemble à un seul prestataire intégré plutôt qu'à plusieurs intervenants. C'est précisément l'approche de LAB Services : conception, production et logistique WMS sous un même toit.",
  },
  {
    q: "Le prix de l'emplacement est-il inclus ?",
    a: "Non. Le prix au m² facturé par l'organisateur du salon (location de l'espace nu) est distinct du coût de conception et de construction du stand. Notre devis couvre le stand et sa logistique ; la réservation de l'espace se fait auprès de l'organisateur.",
  },
];

export default function PrixStandSalon() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BUSINESS.url },
          { "@type": "ListItem", position: 2, name: "Prix d'un stand de salon", item: `${BUSINESS.url}/prix-stand-salon` },
        ],
      },
      {
        "@type": "Article",
        headline: "Prix d'un stand de salon : le guide complet 2026",
        about: "Prix et budget d'un stand de salon professionnel",
        author: { "@type": "Organization", "@id": `${BUSINESS.url}/#organization`, name: BUSINESS.name },
        publisher: { "@id": `${BUSINESS.url}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const cell = "border-b border-line px-4 py-3 text-sm";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 blueprint opacity-60" />
        <div className="pointer-events-none absolute -right-40 -top-28 h-[440px] w-[440px] red-glow" />
        <div className="container-x relative pb-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-mist">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2 text-line">/</span>
            <span className="text-white">Prix d&apos;un stand de salon</span>
          </nav>
          <span className="eyebrow">Guide · Budget stand 2026</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.08] md:text-6xl">
            Prix d&apos;un stand de salon : <span className="text-gradient">le guide complet 2026</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Combien coûte un stand de salon ? En résumé : de <strong className="text-white">150 à 300 €/m²</strong> pour un stand nu,
            <strong className="text-white"> 200 à 450 €/m²</strong> pour un modulaire équipé, et <strong className="text-white">600 à 1 200 €/m²</strong> pour du sur-mesure.
            Voici le détail, les coûts annexes et comment optimiser votre budget.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#devis" className="btn-red px-7 py-4 text-base">Obtenir un devis précis</a>
            <a href={`tel:${BUSINESS.phone}`} className="btn-ghost px-7 py-4 text-base">{BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* PRIX AU M2 */}
      <section className="border-y border-line bg-charcoal py-16 md:py-20">
        <div className="container-x max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-4xl">Prix au m² selon le type de stand</h2>
            <p className="mt-3 text-mist">Fourchettes indicatives 2026, hors location de l&apos;emplacement (facturée par l&apos;organisateur).</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="px-4 py-3 text-sm font-bold">Type de stand</th>
                    <th className="px-4 py-3 text-sm font-bold">Prix indicatif /m²</th>
                    <th className="px-4 py-3 text-sm font-bold">Pour qui ?</th>
                  </tr>
                </thead>
                <tbody className="text-mist">
                  <tr><td className={cell}>Stand nu (emplacement seul)</td><td className={cell}>150 – 300 €</td><td className={cell}>Budget serré, aménagement autonome</td></tr>
                  <tr><td className={cell}>Stand modulaire équipé</td><td className={cell}>200 – 450 €</td><td className={cell}>Exposants réguliers, réutilisable</td></tr>
                  <tr><td className={cell}>Stand sur mesure</td><td className={cell}>600 – 1 200 €+</td><td className={cell}>Impact fort, image de marque premium</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="mt-12 font-display text-2xl font-extrabold text-white md:text-4xl">Les coûts annexes à prévoir</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Conception & 3D", "Design, plans et modélisation du stand"],
                ["Mobilier & agencement", "Comptoirs, assises, vitrines, réserves"],
                ["Audiovisuel & digital", "Écrans, éclairage, sonorisation"],
                ["Transport & logistique", "Acheminement et stockage du matériel"],
                ["Montage & démontage", "Installation et repli sur le parc"],
                ["Personnel & fluides", "Hôtes/hôtesses, électricité, wifi, nettoyage"],
              ].map(([t, d]) => (
                <li key={t} className="rounded-xl border border-line bg-ink/50 p-4">
                  <span className="font-semibold text-white">{t}.</span> <span className="text-sm text-mist">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="mt-12 font-display text-2xl font-extrabold text-white md:text-4xl">Exemples de budgets clé en main</h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="px-4 py-3 text-sm font-bold">Surface</th>
                    <th className="px-4 py-3 text-sm font-bold">Modulaire équipé</th>
                    <th className="px-4 py-3 text-sm font-bold">Sur mesure</th>
                  </tr>
                </thead>
                <tbody className="text-mist">
                  <tr><td className={cell}>9 m² (petit)</td><td className={cell}>3 000 – 7 000 €</td><td className={cell}>8 000 – 18 000 €</td></tr>
                  <tr><td className={cell}>20 m² (moyen)</td><td className={cell}>7 000 – 12 000 €</td><td className={cell}>15 000 – 40 000 €</td></tr>
                  <tr><td className={cell}>50 m² (grand)</td><td className={cell}>15 000 – 30 000 €</td><td className={cell}>40 000 – 100 000 €+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-mist/70">Fourchettes indicatives tout compris (hors emplacement). Le budget réel dépend du salon, de la ville et du niveau de finition.</p>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-red/40 bg-red/10 p-6 md:p-8">
              <h2 className="font-display text-xl font-extrabold text-white md:text-2xl">Comment optimiser le coût de votre stand</h2>
              <p className="mt-3 text-mist">
                Le vrai levier d&apos;économie n&apos;est pas de rogner sur la qualité, mais de <strong className="text-white">réutiliser</strong> et de <strong className="text-white">mutualiser</strong>.
                Un stand sur mesure conçu pour être remonté d&apos;un salon à l&apos;autre s&apos;amortit sur plusieurs événements. En confiant conception,
                production, <strong className="text-white">stockage (WMS 24h/24)</strong> et logistique à un seul prestataire intégré, vous supprimez les marges empilées
                des intermédiaires et les mauvaises surprises. C&apos;est exactement l&apos;approche de LAB Services.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-white md:text-4xl">Prix d&apos;un stand : vos questions</h2>
          <div className="mt-8 divide-y divide-line/80">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-display text-lg font-bold text-white">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + DEVIS */}
      <section id="devis" className="relative overflow-hidden border-t border-line py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 red-glow" />
        <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Votre budget, chiffré</span>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Un prix précis pour votre stand, gratuitement.
            </h2>
            <p className="mt-4 text-lg text-mist">
              Donnez-nous votre salon, votre surface et vos objectifs : nous revenons sous 24 à 48 h avec un chiffrage clair, sans engagement.
            </p>
            <a href={`tel:${BUSINESS.phone}`} className="mt-6 inline-block font-display text-2xl font-black text-white hover:text-red-2">
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="font-display text-xl font-extrabold text-white">Devis stand de salon</h3>
            <div className="mt-6"><DevisForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
