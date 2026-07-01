"use client";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/data";

export default function StickyCta() {
  const [show, setShow] = useState(false);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Widget contact rapide / chat (bas droite) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {chat && (
          <div className="w-[290px] overflow-hidden rounded-2xl border border-line bg-charcoal shadow-2xl">
            <div className="bg-gradient-to-br from-graphite to-charcoal-2 p-4">
              <p className="font-display text-base font-extrabold text-white">Un projet d&apos;événement ?</p>
              <p className="mt-1 text-xs text-mist">Un chef de projet vous répond. Dites-nous ce dont vous avez besoin.</p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <a href="#devis" onClick={() => setChat(false)} className="btn-red w-full py-2.5 text-sm">
                Demander un devis
              </a>
              <a
                href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Projet événementiel")}`}
                className="btn-ghost w-full py-2.5 text-sm"
              >
                Écrire un e-mail
              </a>
              <a href={`tel:${BUSINESS.phone}`} className="btn-ghost w-full py-2.5 text-sm">
                Être rappelé
              </a>
            </div>
          </div>
        )}
        <button
          onClick={() => setChat((v) => !v)}
          className="grid h-14 w-14 place-items-center rounded-full bg-red text-white shadow-[0_10px_30px_-6px_rgba(224,0,40,.8)] transition hover:scale-105"
          aria-label="Ouvrir le contact rapide"
        >
          {chat ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9A1.5 1.5 0 0118.5 16H9l-4 4v-4H5.5A1.5 1.5 0 014 14.5v-9z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Barre CTA mobile (bas) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a href="#devis" className="btn-red w-full py-3.5">
          Demande de devis gratuite
        </a>
      </div>
    </>
  );
}
