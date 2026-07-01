import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/reveal";
import DevisForm from "@/components/devis-form";
import { BUSINESS } from "@/lib/data";
import { CITIES, PSERVICES, findCity, findService, allCombos } from "@/lib/programmatic";

export const dynamicParams = false;

type Params = { service: string; ville: string };

export function generateStaticParams() {
  return allCombos();
}

function faqFor(sLabel: string, sShort: string, c: { prep: string; dept: string; venues: string[]; name: string }) {
  return [
    {
      q: `Intervenez-vous ${c.prep} et dans le département ${c.dept} ?`,
      a: `Oui. Depuis nos bases du Mans et de Paris, LAB Services intervient ${c.prep}, dans tout le département ${c.dept} et sa région, ainsi que partout en France. Notre logistique intégrée nous permet d'acheminer et d'installer votre dispositif sans dépendre d'un sous-traitant local.`,
    },
    {
      q: `Sur quels lieux événementiels intervenez-vous ${c.prep} ?`,
      a: `Nous intervenons sur l'ensemble des lieux événementiels de ${c.name} et de sa périphérie, dont ${c.venues.slice(0, 3).join(", ")}. Nous adaptons stands, structures et logistique aux contraintes de chaque parc d'exposition ou lieu réceptif.`,
    },
    {
      q: `Combien coûte ${sShort} ${c.prep} ?`,
      a: `Le budget dépend de la surface, de la scénographie, de la logistique et de la durée. Chaque projet est chiffré sur mesure : le plus simple est de demander un devis gratuit, avec une réponse sous 24 à 48 h.`,
    },
  ];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service, ville } = await params;
  const s = findService(service);
  const c = findCity(ville);
  if (!s || !c) return {};
  const title = `${s.label} ${c.prep} — LAB Services`;
  const description = `${s.label} ${c.prep} : ${s.short} clé en main par LAB Services, de la conception 3D au démontage. Intervention sur ${c.venues[0]} et toute la région ${c.region}. Devis gratuit sous 24–48 h.`;
  const canonical = `/${service}/${ville}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website", locale: "fr_FR", siteName: "LAB Services" },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { service, ville } = await params;
  const s = findService(service);
  const c = findCity(ville);
  if (!s || !c) notFound();

  const faqs = faqFor(s.label, s.short, c);
  const otherServices = PSERVICES.filter((x) => x.slug !== s.slug);
  const nearbyCities = c.nearby.map((slug) => findCity(slug)).filter(Boolean) as typeof CITIES;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BUSINESS.url },
          { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: `${BUSINESS.url}/villes` },
          { "@type": "ListItem", position: 3, name: `${s.label} ${c.prep}`, item: `${BUSINESS.url}/${service}/${ville}` },
        ],
      },
      {
        "@type": "Service",
        name: `${s.label} ${c.prep}`,
        serviceType: s.label,
        description: s.lead,
        provider: {
          "@type": "Organization",
          "@id": `${BUSINESS.url}/#organization`,
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
        },
        areaServed: { "@type": "City", name: c.name },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 blueprint opacity-60" />
        <div className="pointer-events-none absolute -right-40 -top-28 h-[460px] w-[460px] red-glow" />
        <div className="container-x relative pb-14">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-mist">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2 text-line">/</span>
            <Link href="/villes" className="hover:text-white">Zones</Link>
            <span className="mx-2 text-line">/</span>
            <span className="text-white">{s.label} {c.prep}</span>
          </nav>
          <span className="eyebrow">{s.label} · {c.name}</span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.08] md:text-6xl">
            {s.label} <span className="text-gradient">{c.prep}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{s.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#devis" className="btn-red px-7 py-4 text-base">Demande de devis gratuite</a>
            <a href={`tel:${BUSINESS.phone}`} className="btn-ghost px-7 py-4 text-base">{BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* CE QUE NOUS RÉALISONS */}
      <section className="border-y border-line bg-charcoal py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">Notre prestation</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-white md:text-4xl">
                {s.label} clé en main {c.prep}
              </h2>
              <p className="mt-4 text-mist">{c.angle}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3">
              {s.includes.map((it) => (
                <li key={it} className="flex items-start gap-3 rounded-xl border border-line bg-ink/50 p-4 text-[15px] text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                    <circle cx="12" cy="12" r="11" fill="#e00028" />
                    <path d="M7 12.5l3.2 3.2L17 8.8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* LIEUX + POURQUOI */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <span className="eyebrow">Lieux événementiels {c.prep}</span>
              <h2 className="mt-4 font-display text-xl font-bold text-white">Nous intervenons sur tous les grands lieux {c.prep}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.venues.map((v) => (
                  <li key={v} className="rounded-full border border-line px-3 py-1.5 text-sm text-mist">{v}</li>
                ))}
              </ul>
              {c.sport && (
                <p className="mt-5 text-sm leading-relaxed text-mist">
                  Ancrage sportif local : <span className="text-white">{c.sport}</span>. Notre expertise hospitality née aux 24 Heures du Mans s'applique à tous les grands rendez-vous sportifs {c.prep}.
                </p>
              )}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-7">
              <span className="eyebrow">Pourquoi LAB Services</span>
              <h2 className="mt-4 font-display text-xl font-bold text-white">Un seul interlocuteur, {c.prep} comme partout en France</h2>
              <ul className="mt-5 space-y-3 text-[15px] text-mist">
                <li><span className="font-semibold text-white">Logistique intégrée.</span> Entrepôt en propre et WMS 24h/24 : votre matériel est stocké, tracé et acheminé {c.prep} sans maillon externe.</li>
                <li><span className="font-semibold text-white">De la 3D au démontage.</span> Conception, production, montage, pilotage jour J : une seule équipe responsable.</li>
                <li><span className="font-semibold text-white">Références premium.</span> 24h du Mans, GP Explorer, Samsung, Goodyear, Erborian, HOKA… les plus grands nous confient leurs événements.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-line bg-charcoal py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-4 font-display text-2xl font-extrabold text-white md:text-4xl">{s.label} {c.prep} : vos questions</h2>
          <div className="mt-8 divide-y divide-line/80">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-display text-lg font-bold text-white">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE INTERNE */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-bold text-white">Autres prestations {c.prep}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {otherServices.map((os) => (
                <li key={os.slug}>
                  <Link href={`/${os.slug}/${c.slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-mist transition hover:border-red hover:text-white">
                    {os.label} {c.prep}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">{s.label} dans d&apos;autres villes</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearbyCities.map((nc) => (
                <li key={nc.slug}>
                  <Link href={`/${s.slug}/${nc.slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm text-mist transition hover:border-red hover:text-white">
                    {s.label} {nc.prep}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA + DEVIS */}
      <section id="devis" className="relative overflow-hidden border-t border-line py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 red-glow" />
        <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Parlons-en</span>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Votre projet {c.prep} commence ici.
            </h2>
            <p className="mt-4 text-lg text-mist">
              Décrivez votre événement : réponse sous 24 à 48 h, gratuite et sans engagement. Ou appelez-nous directement.
            </p>
            <a href={`tel:${BUSINESS.phone}`} className="mt-6 inline-block font-display text-2xl font-black text-white hover:text-red-2">
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="font-display text-xl font-extrabold text-white">Demande de devis — {s.label} {c.prep}</h3>
            <div className="mt-6"><DevisForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
