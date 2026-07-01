"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/data";

const field =
  "w-full rounded-lg border border-line bg-charcoal/70 px-4 py-3 text-sm text-white placeholder:text-mist/60 outline-none transition focus:border-red focus:ring-2 focus:ring-red/30";

export default function DevisForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => (f.get(k) || "").toString();
    const body = [
      `Nom : ${g("nom")}`,
      `Société : ${g("societe")}`,
      `E-mail : ${g("email")}`,
      `Téléphone : ${g("tel")}`,
      `Type d'événement : ${g("type")}`,
      `Ville : ${g("ville")}`,
      `Date souhaitée : ${g("date")}`,
      `Budget indicatif : ${g("budget")}`,
      "",
      "Projet :",
      g("message"),
    ].join("\n");
    const subject = `Demande de devis — ${g("type") || "événement"}`;
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="nom" required placeholder="Nom *" className={field} />
        <input name="societe" placeholder="Société" className={field} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="email" type="email" required placeholder="E-mail *" className={field} />
        <input name="tel" placeholder="Téléphone" className={field} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <select name="type" className={field} defaultValue="">
          <option value="" disabled>
            Type d&apos;événement *
          </option>
          <option>Stand / Salon</option>
          <option>Roadshow / Tournée</option>
          <option>Activation de marque</option>
          <option>Événement sportif / Hospitality</option>
          <option>Scénographie / Décoration</option>
          <option>Logistique / Stockage</option>
          <option>Autre</option>
        </select>
        <input name="ville" placeholder="Ville" className={field} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="date" placeholder="Date souhaitée" className={field} />
        <select name="budget" className={field} defaultValue="">
          <option value="" disabled>
            Budget indicatif
          </option>
          <option>&lt; 10 000 €</option>
          <option>10 000 – 30 000 €</option>
          <option>30 000 – 80 000 €</option>
          <option>&gt; 80 000 €</option>
          <option>À définir ensemble</option>
        </select>
      </div>
      <textarea name="message" rows={3} placeholder="Décrivez votre projet en quelques mots…" className={field} />
      <button type="submit" className="btn-red mt-1 w-full py-4 text-base">
        Recevoir mon devis gratuit
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="text-center text-xs text-mist/70">
        {sent
          ? "Votre logiciel de messagerie s'ouvre avec votre demande pré-remplie."
          : "Réponse sous 24–48 h ouvrées. Sans engagement."}
      </p>
    </form>
  );
}
