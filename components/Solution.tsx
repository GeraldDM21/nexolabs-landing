"use client";

import { useI18n } from "./i18n";
import { Eyebrow, Reveal, TiltCard } from "./ui";

export default function Solution() {
  const { t } = useI18n();

  return (
    <section
      id="solucion"
      className="relative border-t border-white/[0.06] bg-ink-900/30 px-6 py-28 lg:px-10"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-iris-500/[0.07] blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.solution.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.solution.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.solution.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {t.solution.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <TiltCard className="h-full" strength={6}>
                <article className="glass group relative h-full overflow-hidden rounded-2xl p-9 transition-colors duration-500 hover:border-brand-500/30">
                  <span
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/[0.09] blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
                    aria-hidden
                  />

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <span className="font-mono text-xs text-brand-500/50">
                      {pillar.index}
                    </span>
                  </div>

                  <p className="mt-4 text-[14.5px] leading-relaxed text-slate-400">
                    {pillar.body}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.points.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-slate-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
