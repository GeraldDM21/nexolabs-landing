"use client";

import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "./content";
import { useScrollProgress } from "./hooks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
          ? "border-b border-white/[0.07] bg-ink-950/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-70 animate-pulseRing" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-400" />
          </span>
          <span className="text-[13px] font-semibold tracking-[0.26em] text-white">
            {BRAND}
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
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
          <a
            href="#contacto"
            className="group relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Agendar demo</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-slate-300 lg:hidden"
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
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
      </nav>

      {/* barra de progreso de lectura */}
      <div
        className="h-px origin-left bg-gradient-to-r from-brand-400 to-iris-400 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-ink-950"
            >
              Agendar demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
