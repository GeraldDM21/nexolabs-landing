"use client";

import { useReveal, useTilt } from "./hooks";

/* Wrapper que revela su contenido al hacer scroll */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>(delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Tarjeta con inclinacion 3D al pasar el cursor */
export function TiltCard({
  children,
  className = "",
  strength = 9,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useTilt<HTMLDivElement>(strength);
  return (
    <div ref={ref} className={`tilt ${className}`}>
      <div className="tilt-inner">{children}</div>
    </div>
  );
}

/* Etiqueta de seccion */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-brand-500/60" />
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-400">
        {children}
      </p>
    </div>
  );
}
