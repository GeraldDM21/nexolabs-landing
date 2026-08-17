import { CAPABILITIES } from "./content";
import { Eyebrow, Reveal } from "./ui";

export default function Capabilities() {
  return (
    <section
      id="capacidades"
      className="border-t border-white/[0.06] px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Capacidades</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-[2.6rem]">
              Que puede hacer el agente
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {CAPABILITIES.map((block, i) => (
            <Reveal key={block.group} delay={i * 110}>
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {block.group}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-600">
                    {String(block.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="hairline mt-4" />

                <ul className="mt-6 space-y-4">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="group flex gap-3 text-[14.5px] text-slate-400 transition-colors hover:text-slate-200"
                    >
                      <svg
                        className="mt-[3px] h-4 w-4 shrink-0 text-brand-500/70 transition-colors group-hover:text-brand-400"
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
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
