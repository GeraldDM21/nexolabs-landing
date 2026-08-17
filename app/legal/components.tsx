/* Componentes de tipografia para las paginas legales */

export function LegalTitle({
  children,
  updated,
}: {
  children: React.ReactNode;
  updated: string;
}) {
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-semibold tracking-tightest text-white sm:text-4xl">
        {children}
      </h1>
      <p className="mt-3 text-[13px] text-slate-500">
        Última actualización: {updated}
      </p>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 text-lg font-medium tracking-tight text-white">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[15px] leading-relaxed text-slate-400">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-2.5">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500/60" />
      <span>{children}</span>
    </li>
  );
}
