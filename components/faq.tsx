"use client";
import { useState } from "react";
import { FAQ } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line/80">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-1">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-bold text-white">
                {f.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen ? "rotate-45 border-red bg-red text-white" : "border-line text-mist"
                }`}
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-[15px] leading-relaxed text-mist">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
