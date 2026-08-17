import { PROBLEMS } from "./content";
import { Eyebrow, Reveal, TiltCard } from "./ui";

export default function Problems() {
  return (
    <section
      id="problema"
      className="relative border-t border-white/[0.06] px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>El problema</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              El negocio funciona, pero todo depende de manos disponibles
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <TiltCard className="h-full" strength={7}>
                <article className="glass group h-full rounded-2xl p-8 transition-colors duration-500 hover:border-white/[0.16]">
                  <span className="font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-medium leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
