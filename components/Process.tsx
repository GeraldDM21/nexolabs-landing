"use client";

import { useI18n } from "./i18n";
import { Eyebrow, Reveal } from "./ui";

export default function Process() {
  const { t } = useI18n();

  return (
    <section
      id="proceso"
      className="relative border-t border-white/[0.06] bg-ink-900/30 px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.process.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.process.body}
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-16 space-y-px">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.index} delay={i * 110}>
              <li className="group relative grid gap-5 border-t border-white/[0.07] py-9 lg:grid-cols-[auto_1fr_2fr] lg:items-start lg:gap-10">
                <div className="flex items-center gap-4 lg:w-24">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/25 bg-ink-950 font-mono text-xs text-brand-400 transition-colors duration-500 group-hover:border-brand-400/60">
                    {step.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-600 lg:hidden">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {step.title}
                  </h3>
                  <span className="mt-2 hidden font-mono text-[11px] uppercase tracking-wider text-slate-600 lg:block">
                    {step.duration}
                  </span>
                </div>

                <p className="text-[14.5px] leading-relaxed text-slate-400">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <p className="mt-10 border-t border-white/[0.07] pt-9 text-[15px] leading-relaxed text-slate-300">
            {t.process.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
