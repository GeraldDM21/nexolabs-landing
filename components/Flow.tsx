import { FLOW_STEPS } from "./content";

export default function Flow() {
  return (
    <section
      id="flujo"
      className="border-t border-white/5 bg-ink-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-400">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Una venta de supermercado, de punta a punta
          </h2>
          <p className="mt-4 text-slate-400">
            El mismo flujo aplica a un pedido express o a una consulta de hotel.
            Cambia el sistema al que se conecta, no la logica.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {FLOW_STEPS.map((step) => (
            <li
              key={step.step}
              className="relative rounded-2xl border border-white/8 bg-ink-950/60 p-6"
            >
              <span className="font-mono text-2xl font-semibold text-brand-500/60">
                {step.step}
              </span>
              <h3 className="mt-4 font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-2xl border border-brand-500/25 bg-brand-500/10 px-6 py-5 text-sm text-slate-200">
          Todo esto ocurre en segundos y queda registrado. El dueno se entera por
          el reporte, no por tener que estar encima.
        </p>
      </div>
    </section>
  );
}
