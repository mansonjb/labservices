import Reveal from "@/components/reveal";
import Faq from "@/components/faq";
import DevisForm from "@/components/devis-form";
import { STATS, CLIENTS, PILLARS, SERVICES, WHY, PROCESS, BUSINESS } from "@/lib/data";

/* ---------- petits icônes ---------- */
function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#e00028" />
      <path d="M7 12.5l3.2 3.2L17 8.8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="11" stroke="#5a5a5a" strokeWidth="1.5" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#8a8a8a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const REALISATIONS = [
  { name: "GP Explorer", cat: "Motorsport", desc: "Aménagement & hospitality sur l'un des plus grands événements sport auto de France." },
  { name: "24 Heures du Mans", cat: "Sport automobile", desc: "Loges, tribunes et dispositifs hospitality au cœur de la course." },
  { name: "Samsung", cat: "Activation de marque", desc: "Activation immersive de marque sur le GP Explorer." },
  { name: "Goodyear", cat: "Sport automobile", desc: "Dispositif de marque sur les 24 Heures du Mans." },
  { name: "Erborian", cat: "Retail & beauté", desc: "Stand et scénographie de marque sur mesure." },
  { name: "HOKA", cat: "Événements sportifs", desc: "Dispositifs sur Marathon de Paris, UTMB et Ironman." },
];

const OFFER = [
  "Conception & modélisation 3D, validée avant production",
  "Un chef de projet unique, du brief au démontage",
  "Stands & structures fabriqués sur mesure",
  "Logistique & stockage sécurisés, WMS 24h/24",
  "Transport, montage et démontage",
  "Pilotage de votre événement sur site, le jour J",
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint opacity-60" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] red-glow animate-pulse-glow" />
        <div className="pointer-events-none absolute -left-52 top-40 h-[420px] w-[420px] red-glow opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

        <div className="container-x relative pt-32 pb-20 md:pt-40 md:pb-28">
          <Reveal>
            <span className="eyebrow">Logistique · Conception · Production événementielle</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              On bâtit l&apos;événement dont vos invités <span className="text-gradient">parleront encore dans un an.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
              De la première esquisse 3D au dernier boulon démonté, LAB Services orchestre vos stands, salons et activations.
              Un seul interlocuteur, zéro maillon faible. Des <strong className="text-white">24h du Mans</strong> au{" "}
              <strong className="text-white">GP Explorer</strong>, plus de 100 marques nous confient les leurs.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#devis" className="btn-red px-7 py-4 text-base">
                Demande de devis gratuite <Arrow />
              </a>
              <a href="#realisations" className="btn-ghost px-7 py-4 text-base">
                Voir nos réalisations
              </a>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 text-sm text-mist/80">
              Réponse sous 24–48 h · Sans engagement · <span className="text-white">Le Mans &amp; Paris</span>
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-line/70 pt-8">
              {STATS.map((s) => (
                <div key={s.label} className="min-w-[120px]">
                  <div className="font-display text-3xl font-black text-white md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-mist">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== TRUST MARQUEE ===================== */}
      <section aria-label="Ils nous font confiance" className="border-y border-line bg-charcoal py-8">
        <p className="container-x mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-mist">
          Ils nous confient leurs événements
        </p>
        <div className="mask-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-line bg-ink/60 px-5 py-2 font-display text-sm font-bold text-mist"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROBLÈME ===================== */}
      <section className="relative py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">Le vrai problème</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Un événement raté ne se rejoue pas.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                Un stand livré en retard, un prestataire logistique injoignable, cinq intervenants qui se renvoient la balle&nbsp;:
                dans l&apos;événementiel, la moindre faille se voit devant vos clients. Et coûte cher.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-7">
              <ul className="space-y-4">
                {[
                  "Trop de prestataires, personne de responsable de bout en bout",
                  "Une logistique sous-traitée qui déraille au pire moment",
                  "Un rendu final loin de la promesse commerciale",
                  "Des budgets qui gonflent à chaque imprévu",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-mist">
                    <Cross />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-red/40 bg-red/10 p-4">
                <Check />
                <p className="text-[15px] font-medium text-white">
                  LAB Services réunit conception, production et logistique sous un même toit. Un seul responsable, du premier
                  croquis au démontage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== MÉTHODE [L][A][B] ===================== */}
      <section id="methode" className="relative border-y border-line bg-charcoal py-20 md:py-28">
        <div className="absolute inset-0 blueprint opacity-40" />
        <div className="container-x relative">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">La méthode [L][A][B]</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Trois métiers, <span className="text-red-2">un seul interlocuteur.</span>
              </h2>
              <p className="mt-5 text-lg text-mist">
                Notre nom résume notre promesse. Nous sommes à la fois vos <strong className="text-white">L</strong>ogisticiens,
                vos <strong className="text-white">A</strong>rchitectes et vos <strong className="text-white">B</strong>âtisseurs.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.letter} delay={i * 100}>
                <div className="card h-full p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-red font-display text-3xl font-black text-white">
                      {p.letter}
                    </span>
                    <span className="font-display text-xl font-extrabold text-white">{p.word}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-mist">
                        <Check />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Nos services</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Tout votre événement, sous un même toit.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <div className="card group h-full p-7">
                  <div className="mb-4 h-1 w-10 rounded bg-red transition-all duration-300 group-hover:w-16" />
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-red-2">{s.punch}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{s.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="rounded-full border border-line px-3 py-1 text-xs text-mist">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <a href="#devis" className="btn-red px-7 py-4 text-base">
                Discuter de mon projet <Arrow />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== RÉALISATIONS ===================== */}
      <section id="realisations" className="border-y border-line bg-charcoal py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Réalisations</span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                  La preuve par les plus grands.
                </h2>
                <p className="mt-5 text-lg text-mist">
                  143+ événements livrés pour des marques et des rendez-vous parmi les plus exigeants de France.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REALISATIONS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 90}>
                <article className="card group h-full overflow-hidden">
                  {/* Emplacement photo — remplacer le dégradé par une vraie photo du projet */}
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-graphite to-ink">
                    <div className="absolute inset-0 blueprint opacity-40" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 red-glow opacity-60" />
                    <span className="relative font-display text-5xl font-black text-white/90">{r.name.charAt(0)}</span>
                    <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      {r.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-white">{r.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{r.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POURQUOI LAB ===================== */}
      <section id="pourquoi" className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Pourquoi LAB Services</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Ce qu&apos;aucune agence généraliste ne peut vous offrir.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100}>
                <div className="card flex h-full gap-5 p-7">
                  <span className="font-display text-4xl font-black text-red">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section id="process" className="border-y border-line bg-charcoal py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Comment ça se passe</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Un process carré, de A à Z.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="relative h-full rounded-xl border border-line bg-ink/40 p-6">
                  <span className="font-display text-5xl font-black text-graphite">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
                  <span className="mt-4 block h-1 w-8 rounded bg-red" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OFFRE / VALEUR ===================== */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-charcoal-2 to-ink p-8 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 red-glow" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <div>
                  <span className="eyebrow">Un seul devis, un seul responsable</span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
                    Ce que vous obtenez avec LAB Services
                  </h2>
                  <p className="mt-4 text-mist">
                    Pas de couches d&apos;intermédiaires ni de coûts cachés. Tout est intégré, cadré et piloté par une seule
                    équipe&nbsp;:
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href="#devis" className="btn-red px-7 py-4 text-base">
                      Recevoir mon devis gratuit <Arrow />
                    </a>
                    <a href={`tel:${BUSINESS.phone}`} className="btn-ghost px-7 py-4 text-base">
                      Être rappelé
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ul className="grid gap-3">
                  {OFFER.map((o) => (
                    <li key={o} className="flex items-start gap-3 rounded-xl border border-line bg-ink/50 p-4 text-[15px] text-white">
                      <Check />
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="border-t border-line bg-charcoal py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Questions fréquentes</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Tout ce que vous devez savoir.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* ===================== CTA FINALE + DEVIS ===================== */}
      <section id="devis" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 blueprint opacity-50" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 red-glow" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Parlons-en</span>
              <h2 className="mt-5 font-display text-3xl font-black leading-[1.08] text-white md:text-5xl">
                Votre prochain événement commence par un message.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-mist">
                Décrivez votre projet&nbsp;: on revient vers vous sous 24 à 48 h avec une première approche et un budget clair.
                Gratuit, sans engagement.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ["Réponse rapide", "Un chef de projet dédié vous recontacte sous 24–48 h."],
                  ["Un seul interlocuteur", "De la conception au démontage, une seule équipe responsable."],
                  ["Le Mans & Paris", "Nous intervenons partout en France et à l'international."],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-3">
                    <Check />
                    <p className="text-[15px] text-mist">
                      <span className="font-semibold text-white">{t}.</span> {d}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
                <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-white hover:text-red-2">
                  {BUSINESS.email}
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-white hover:text-red-2">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-6 md:p-8">
              <h3 className="font-display text-xl font-extrabold text-white">Demande de devis gratuite</h3>
              <p className="mt-1 text-sm text-mist">Quelques infos et c&apos;est parti.</p>
              <div className="mt-6">
                <DevisForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
