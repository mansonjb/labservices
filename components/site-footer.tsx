import { BUSINESS, SERVICES, NAV } from "@/lib/data";

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="relative border-t border-line bg-charcoal">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-black text-white">
              LAB<span className="text-red">.</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-mist">Services</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            {BUSINESS.tagline}. Agence de logistique et de production événementielle, de la conception 3D au démontage.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              ["Instagram", BUSINESS.social.instagram],
              ["LinkedIn", BUSINESS.social.linkedin],
              ["Facebook", BUSINESS.social.facebook],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-xs font-bold text-mist transition hover:border-red hover:text-white"
                aria-label={label}
              >
                {label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href="#services" className="text-sm text-mist transition hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-mist transition hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#devis" className="text-sm font-semibold text-red-2 transition hover:text-white">
                Demande de devis
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {BUSINESS.locations.map((l) => (
              <li key={l.city}>
                <span className="font-semibold text-white">{l.city}</span>
                <br />
                <span className="text-xs">{l.note}</span>
              </li>
            ))}
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="transition hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phone}`} className="transition hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-mist/70 md:flex-row">
          <p>© {year} LAB Services. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">Mentions légales</a>
            <a href="#" className="transition hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
