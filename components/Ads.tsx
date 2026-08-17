export default function Ads() {
  const steps = [
    "Manda dos fotos del producto por WhatsApp",
    "El agente arma la pieza promocional",
    "La revisas y aprobas",
    "Sale a toda tu base de clientes",
  ];

  return (
    <section className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-400">
            Extra
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Publicidad que se arma sola
          </h2>
          <p className="mt-5 leading-relaxed text-slate-400">
            El dueno manda un par de fotos y dice que quiere promocionar. El
            agente genera la imagen, la deja lista para revision y, una vez
            aprobada, la manda a todos los clientes registrados en la base.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            Una campana pasa de tomar medio dia a tomar unos minutos, sin
            contratar disenador.
          </p>
        </div>

        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/15 font-mono text-sm text-brand-400">
                {i + 1}
              </span>
              <span className="text-sm text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
