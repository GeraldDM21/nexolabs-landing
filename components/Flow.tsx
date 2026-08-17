"use client";

import { useI18n } from "./i18n";
import { Eyebrow, Reveal } from "./ui";

export default function Flow() {
  const { t } = useI18n();

  return (
    <section
      id="flujo"
      className="relative border-t border-white/[0.06] bg-ink-900/30 px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.flow.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.flow.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.flow.body}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent lg:block"
            aria-hidden
          />

          <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.flow.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 130}>
                <li className="glass h-full rounded-2xl p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-500/30 bg-ink-950 font-mono text-xs text-brand-400">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-medium leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-400">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-r from-brand-500/[0.09] to-iris-500/[0.06] px-8 py-6">
            <p className="text-[15px] leading-relaxed text-slate-200">
              {t.flow.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
