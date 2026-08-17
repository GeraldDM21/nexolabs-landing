import { CONTACT_EMAIL } from "./content";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/5 px-6 py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Veamos que se puede automatizar en tu negocio
        </h2>
        <p className="mt-5 leading-relaxed text-slate-400">
          Agendamos una llamada, revisamos como opera hoy tu negocio y te
          mostramos que tareas puede tomar el agente desde la primera semana.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-full rounded-full bg-brand-500 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-brand-600 sm:w-auto"
          >
            Escribinos
          </a>
          <a
            href="#capacidades"
            className="w-full rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/30 sm:w-auto"
          >
            Ver capacidades
          </a>
        </div>
      </div>
    </section>
  );
}
