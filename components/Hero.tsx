"use client";

import dynamic from "next/dynamic";
import { waLink } from "./config";
import { useI18n } from "./i18n";
import { Reveal } from "./ui";
import StaticNetwork from "./StaticNetwork";
import { WhatsAppIcon } from "./WhatsAppIcon";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="noise relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-36 lg:px-10"
    >
      {/* capa 3D solo en escritorio */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Scene />
      </div>

      {/* version estatica en movil */}
      <div className="absolute inset-x-0 top-24 z-0 mx-auto h-[380px] w-full max-w-md opacity-60 lg:hidden">
        <StaticNetwork />
      </div>

      <div className="grid-fade pointer-events-none absolute inset-0 z-[1]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 z-[1] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[90px] lg:h-[600px] lg:w-[600px] lg:blur-[160px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 z-[1] hidden h-[420px] w-[420px] rounded-full bg-iris-500/10 blur-[150px] lg:block"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-9 text-[2.6rem] font-semibold leading-[1.06] tracking-tightest text-white sm:text-6xl lg:text-[4.4rem]">
            {t.hero.titleA}
            <br />
            {t.hero.titleB}{" "}
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-slate-400">
            {t.hero.body}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(t.wa.demo)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-[#052e16] transition-transform hover:scale-[1.035] sm:w-auto"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#flujo"
              className="glass w-full rounded-full px-8 py-4 text-sm font-medium text-slate-200 transition-colors hover:text-white sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-7 text-[13px] text-slate-500">{t.hero.note}</p>
        </Reveal>

        <Reveal delay={430} className="w-full">
          <div className="mt-20 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-3">
            {t.hero.metrics.map((m) => (
              <div key={m.label} className="bg-ink-950/60 px-6 py-7">
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {m.value}
                </p>
                <p className="mt-1.5 text-[13px] text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
