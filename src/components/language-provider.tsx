"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import ptBR from "@/messages/pt-BR.json";
import enUS from "@/messages/en-US.json";
import esES from "@/messages/es-ES.json";

export type Locale = "pt-BR" | "en-US" | "es-ES";

type Messages = typeof ptBR;

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "pt-BR";

const dictionaries: Record<Locale, Messages> = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-ES": esES,
};

export const LOCALES: { value: Locale; label: string; short: string }[] = [
  { value: "pt-BR", label: "Português", short: "PT" },
  { value: "en-US", label: "English", short: "EN" },
  { value: "es-ES", label: "Español", short: "ES" },
];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en-US" || value === "es-ES";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function writeLocale(next: Locale) {
  localStorage.setItem(STORAGE_KEY, next);
  document.documentElement.lang = next;
  for (const listener of listeners) listener();
}

function resolve(messages: Messages, key: string): string {
  const value = key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      messages
    );
  return typeof value === "string" ? value : key;
}

export function LanguageProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLocale = useCallback((next: Locale) => writeLocale(next), []);

  const t = useCallback(
    (key: string) => resolve(dictionaries[locale], key),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
