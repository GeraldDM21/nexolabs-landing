import { CUSTOMIZATION, SECTORS } from "./content";

export default function Customization() {
  return (
    <section
      id="personalizacion"
      className="border-t border-white/5 bg-ink-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-400">
            Personalizacion
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Cada negocio es distinto, y la solucion tambien
          </h2>
          <p className="mt-4 text-slate-400">
            No entregamos un producto cerrado. Levantamos como opera tu negocio y
            armamos el agente alrededor de eso.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CUSTOMIZATION.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/8 bg-ink-950/60 p-7"
            >
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Sectores donde trabajamos
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {SECTORS.map((sector) => (
              <div
                key={sector.name}
                className="rounded-xl border border-white/8 px-6 py-5"
              >
                <p className="font-medium text-brand-400">{sector.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {sector.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
