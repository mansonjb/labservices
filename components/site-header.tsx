"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

function Logo() {
  return (
    <a href="#top" className="group flex items-baseline gap-1.5" aria-label="LAB Services – accueil">
      <span className="font-display text-2xl font-black tracking-tight text-white">
        LAB<span className="text-red">.</span>
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-mist">Services</span>
    </a>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line/70 bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-mist transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#devis" className="btn-red px-5 py-2.5 text-sm">
            Demande de devis
          </a>
        </div>
        <button
          onClick={() => setMenu((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-white md:hidden"
          aria-label="Menu"
          aria-expanded={menu}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${menu ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${menu ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${menu ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {menu && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenu(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-mist hover:bg-charcoal hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a href="#devis" onClick={() => setMenu(false)} className="btn-red mt-2 w-full">
              Demande de devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
