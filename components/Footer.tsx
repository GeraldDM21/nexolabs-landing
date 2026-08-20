"use client";

import Link from "next/link";
import { BRAND, CONTACT_EMAIL } from "./config";
import { useI18n } from "./i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            <span className="text-[13px] font-semibold tracking-[0.22em] text-slate-300">
              {BRAND}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-slate-500">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-slate-300"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href="/legal/terminos"
              className="transition-colors hover:text-slate-300"
            >
              {t.footer.terms}
            </Link>
            <Link
              href="/legal/privacidad"
              className="transition-colors hover:text-slate-300"
            >
              {t.footer.privacy}
            </Link>
          </nav>
        </div>

        <div className="hairline my-8" />

        <p className="text-[12.5px] text-slate-500">
          &copy; {new Date().getFullYear()} Nexolabs. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
