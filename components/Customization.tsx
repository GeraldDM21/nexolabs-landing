"use client";

import { waLink } from "./config";
import { useI18n } from "./i18n";
import { Eyebrow, Reveal, TiltCard } from "./ui";

export default function Customization() {
  const { t } = useI18n();

  return (
    <section
      id="personalizacion"
      className="border-t border-white/[0.06] bg-ink-900/30 px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.customization.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.customization.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.customization.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {t.customization.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <TiltCard className="h-full" strength={6}>
                <article className="glass h-full rounded-2xl p-8 transition-colors hover:border-white/[0.16]">
                  <h3 className="font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              {t.customization.sectorsTitle}
            </h3>
            <div className="hairline mt-4" />

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {t.customization.sectors.map((sector) => (
                <a
                  key={sector.name}
                  href={waLink(t.wa.sector(sector.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-white/[0.07] px-7 py-6 transition-colors hover:border-brand-500/25"
                >
                  <p className="font-medium text-brand-400">{sector.name}</p>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-400">
                    {sector.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-slate-500 transition-colors group-hover:text-brand-400">
                    {t.customization.sectorCta}
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
