"use client";

import { useI18n } from "./i18n";
import { Eyebrow, Reveal } from "./ui";

export default function Ads() {
  const { t } = useI18n();

  return (
    <section className="border-t border-white/[0.06] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <Eyebrow>{t.ads.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.ads.title}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-400">
              {t.ads.bodyA}
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-400">
              {t.ads.bodyB}
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {t.ads.steps.map((step, i) => (
            <Reveal key={step} delay={i * 110}>
              <div className="glass group flex items-center gap-5 rounded-xl px-6 py-5 transition-colors hover:border-white/[0.16]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/[0.12] font-mono text-[13px] text-brand-400 transition-transform group-hover:scale-110">
                  {i + 1}
                </span>
                <span className="text-[14.5px] text-slate-300">{step}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
