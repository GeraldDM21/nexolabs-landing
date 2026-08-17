"use client";

import { useEffect, useState } from "react";
import { BRAND, waLink } from "./config";
import { useContactModal } from "./ContactModal";
import { LocaleToggle, useI18n } from "./i18n";
import { useScrollProgress } from "./hooks";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function Navbar() {
  const { t } = useI18n();
  const { open } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink-950/95 lg:bg-ink-950/75 lg:backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-70 animate-pulseRing" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
          </span>
          <span className="text-[13px] font-semibold tracking-[0.26em] text-white">
            {BRAND}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] text-slate-400 transition-colors hover:text-white
                         after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0
                         after:bg-brand-400 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          <LocaleToggle />

          <button
            type="button"
            onClick={open}
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-medium text-[#052e16] transition-transform hover:scale-[1.03]"
          >
            {t.modal.open}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LocaleToggle compact />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-slate-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* barra de progreso de lectura */}
      <div
        className="h-px origin-left bg-gradient-to-r from-brand-400 to-iris-400 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      {menuOpen && (
        <div className="border-t border-white/5 bg-ink-950 px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-[#052e16]"
            >
              {t.modal.open}
            </button>
            <a
              href={waLink(t.wa.demo)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
