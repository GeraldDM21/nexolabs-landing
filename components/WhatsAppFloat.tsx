"use client";

import { useEffect, useState } from "react";
import { waLink } from "./config";
import { useI18n } from "./i18n";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // muestra el globito una sola vez, poco despues de aparecer
  useEffect(() => {
    if (!visible) return;
    const show = setTimeout(() => setHint(true), 900);
    const hide = setTimeout(() => setHint(false), 6500);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className={`glass hidden rounded-full px-4 py-2.5 text-[13px] text-slate-200 transition-all duration-500 sm:block ${
          hint ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
        }`}
      >
        {t.float.hint}
      </span>

      <a
        href={waLink(t.wa.info)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.float.aria}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#052e16] shadow-lg shadow-emerald-500/20 transition-transform hover:scale-110"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-pulseRing"
          aria-hidden
        />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  );
}
