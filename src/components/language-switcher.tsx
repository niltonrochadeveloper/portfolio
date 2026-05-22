"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";

import { LOCALES, useI18n } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = LOCALES.find((l) => l.value === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border/60 bg-card/60 px-2.5 text-xs font-medium text-foreground/80 transition hover:bg-card hover:text-foreground"
      >
        <Languages className="size-4" />
        {current.short}
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-border/60 bg-popover shadow-lg"
        >
          {LOCALES.map((l) => (
            <li key={l.value}>
              <button
                type="button"
                role="option"
                aria-selected={l.value === locale}
                onClick={() => {
                  setLocale(l.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-sm transition hover:bg-accent ${
                  l.value === locale ? "text-foreground" : "text-foreground/70"
                }`}
              >
                {l.label}
                <span className="text-xs text-foreground/50">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
