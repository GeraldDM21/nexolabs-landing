"use client";

import { waLink } from "./config";
import { useI18n } from "./i18n";
import { Eyebrow, Reveal, TiltCard } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function Data() {
  const { t } = useI18n();

  return (
    <section
      id="datos"
      className="relative border-t border-white/[0.06] px-6 py-28 lg:px-10"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-500/[0.06] blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.data.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.data.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.data.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {t.data.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <TiltCard className="h-full" strength={6}>
                <article className="glass group relative h-full overflow-hidden rounded-2xl p-9 transition-colors duration-500 hover:border-iris-400/30">
                  <span
                    className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-iris-500/[0.09] blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
                    aria-hidden
                  />

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {service.title}
                    </h3>
                    <span className="font-mono text-xs text-iris-400/50">
                      {service.index}
                    </span>
                  </div>

                  <p className="mt-4 text-[14.5px] leading-relaxed text-slate-400">
                    {service.body}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-8 py-7 lg:flex-row lg:items-center">
            <p className="max-w-xl text-[15px] leading-relaxed text-slate-300">
              {t.data.note}
            </p>
            <a
              href={waLink(t.wa.datos)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-[13px] font-medium text-[#052e16] transition-transform hover:scale-[1.035]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.data.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
