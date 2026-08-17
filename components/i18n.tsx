"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "./config";
import { dict, type Dict } from "./dictionary";

const STORAGE_KEY = "nexolabs-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  // Al montar: preferencia guardada, si no el idioma del navegador
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;

    if (saved === "es" || saved === "en") {
      setLocaleState(saved);
      return;
    }

    if (navigator.language?.toLowerCase().startsWith("en")) {
      setLocaleState("en");
    }
  }, []);

  // Mantiene el atributo lang del documento sincronizado
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // modo privado o storage bloqueado: seguimos sin persistir
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: dict[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n debe usarse dentro de <I18nProvider>");
  }
  return ctx;
}

/* ------------------------------ selector ---------------------------- */

export function LocaleToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={`flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 ${
        compact ? "text-[11px]" : "text-[11.5px]"
      }`}
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-2.5 py-1 font-medium uppercase tracking-wider transition-colors ${
            locale === l
              ? "bg-white text-ink-950"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
