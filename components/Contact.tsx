"use client";

import { CONTACT_EMAIL, waLink } from "./config";
import ContactForm from "./ContactForm";
import { useI18n } from "./i18n";
import { Eyebrow, Reveal } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contacto"
      className="noise relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-10"
    >
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand-500/[0.09] blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:pt-4">
          <Reveal>
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-400">
              {t.contact.body}
            </p>
          </Reveal>

          <Reveal delay={110}>
            <ul className="mt-8 space-y-3.5">
              {t.contact.perks.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-3 text-[14.5px] text-slate-300"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-brand-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={190}>
            <div className="mt-10 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/[0.06] p-7">
              <p className="text-[15px] font-medium text-white">
                {t.contact.waTitle}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
                {t.contact.waBody}
              </p>
              <a
                href={waLink(t.wa.demo)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-[13px] font-medium text-[#052e16] transition-transform hover:scale-[1.035]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.contact.waCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-8 text-[13px] text-slate-500">
              {t.contact.emailLabel}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-brand-400 underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
