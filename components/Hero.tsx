"use client";

import dynamic from "next/dynamic";
import { CONTACT_EMAIL, METRICS } from "./content";
import { Reveal } from "./ui";

// La escena 3D solo carga en el cliente
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="top"
      className="noise relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-36 lg:px-10"
    >
      {/* capa 3D */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* grilla + halos */}
      <div className="grid-fade pointer-events-none absolute inset-0 z-[1]" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 z-[1] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[160px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 z-[1] h-[420px] w-[420px] rounded-full bg-iris-500/10 blur-[150px]"
        aria-hidden
      />
      {/* fundido hacia la siguiente seccion */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Agencia de automatizacion con IA
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-9 text-[2.6rem] font-semibold leading-[1.06] tracking-tightest text-white sm:text-6xl lg:text-[4.4rem]">
            Un agente que atiende,
            <br />
            vende y <span className="text-gradient">despacha por vos</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-slate-400">
            Conectamos modelos de IA conversacional a tu punto de venta e
            inventario. Contestan chats, arman ordenes, coordinan entregas,
            generan reportes y gestionan turnos, sin que nadie tenga que estar
            pendiente.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-ink-950 transition-transform hover:scale-[1.035] sm:w-auto"
            >
              Agendar una demo
            </a>
            <a
              href="#flujo"
              className="glass w-full rounded-full px-8 py-4 text-sm font-medium text-slate-200 transition-colors hover:text-white sm:w-auto"
            >
              Ver como funciona
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-7 text-[13px] text-slate-500">
            O escribinos a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>

        {/* metricas */}
        <Reveal delay={430} className="w-full">
          <div className="mt-20 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-ink-950/60 px-6 py-7">
                <p className="text-2xl font-semibold tracking-tight text-white">
                  {m.value}
                </p>
                <p className="mt-1.5 text-[13px] text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
