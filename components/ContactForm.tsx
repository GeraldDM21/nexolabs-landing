"use client";

import { useState } from "react";
import { useI18n } from "./i18n";

type Estado = "idle" | "enviando" | "ok" | "error";

const inputBase =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14.5px] text-white placeholder:text-slate-600 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]";

function Campo({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12.5px] text-slate-400">
        {label}
        {required && <span className="text-brand-400"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm({
  variant = "section",
}: {
  variant?: "section" | "modal";
}) {
  const { t, locale } = useI18n();
  const [estado, setEstado] = useState<Estado>("idle");
  const [error, setError] = useState("");

  const shell =
    variant === "modal"
      ? "px-7 pb-7 sm:px-9 sm:pb-9"
      : "glass rounded-2xl p-7 sm:p-9";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setEstado("enviando");
    setError("");

    const fd = new FormData(form);
    const payload = { ...Object.fromEntries(fd.entries()), idioma: locale };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error ?? t.form.errGeneric);
        setEstado("error");
        return;
      }

      form.reset();
      setEstado("ok");
    } catch {
      setError(t.form.errNetwork);
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className={`${shell} text-center`}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
          <svg
            className="h-6 w-6 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-lg font-medium text-white">{t.form.okTitle}</h3>
        <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-400">
          {t.form.okBody}
        </p>
        <button
          type="button"
          onClick={() => setEstado("idle")}
          className="mt-6 text-[13px] text-brand-400 underline-offset-4 hover:underline"
        >
          {t.form.okAgain}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={shell}>
      {/* honeypot: invisible para personas, tentador para bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Campo label={t.form.nombre} required>
          <input
            name="nombre"
            required
            maxLength={120}
            placeholder={t.form.nombrePh}
            className={inputBase}
          />
        </Campo>

        <Campo label={t.form.empresa}>
          <input
            name="empresa"
            maxLength={120}
            placeholder={t.form.empresaPh}
            className={inputBase}
          />
        </Campo>

        <Campo label={t.form.email} required>
          <input
            name="email"
            type="email"
            required
            maxLength={160}
            placeholder={t.form.emailPh}
            className={inputBase}
          />
        </Campo>

        <Campo label={t.form.telefono}>
          <input
            name="telefono"
            type="tel"
            maxLength={40}
            placeholder={t.form.telefonoPh}
            className={inputBase}
          />
        </Campo>

        <Campo label={t.form.interes}>
          <select name="interes" defaultValue="" className={inputBase}>
            <option value="" disabled>
              {t.form.interesPh}
            </option>
            {t.form.interestOptions.map((o) => (
              <option key={o} value={o} className="bg-ink-900">
                {o}
              </option>
            ))}
          </select>
        </Campo>

        <Campo label={t.form.presupuesto}>
          <select name="presupuesto" defaultValue="" className={inputBase}>
            <option value="" disabled>
              {t.form.presupuestoPh}
            </option>
            {t.form.budgetOptions.map((o) => (
              <option key={o} value={o} className="bg-ink-900">
                {o}
              </option>
            ))}
          </select>
        </Campo>
      </div>

      <div className="mt-5">
        <Campo label={t.form.mensaje} required>
          <textarea
            name="mensaje"
            required
            rows={5}
            maxLength={5000}
            placeholder={t.form.mensajePh}
            className={`${inputBase} resize-y`}
          />
        </Campo>
      </div>

      {estado === "error" && (
        <p className="mt-5 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.015] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {estado === "enviando" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950/25 border-t-ink-950" />
            {t.form.sending}
          </>
        ) : (
          t.form.submit
        )}
      </button>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-slate-600">
        {t.form.legalA}{" "}
        <a
          href="/legal/terminos"
          className="underline underline-offset-2 hover:text-slate-400"
        >
          {t.form.legalTerms}
        </a>{" "}
        {t.form.legalAnd}{" "}
        <a
          href="/legal/privacidad"
          className="underline underline-offset-2 hover:text-slate-400"
        >
          {t.form.legalPrivacy}
        </a>
        {t.form.legalB}
      </p>
    </form>
  );
}
