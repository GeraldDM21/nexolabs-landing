"use client";

import { useEffect, useRef, useState } from "react";

/* Revela elementos cuando entran al viewport */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}

/* Tilt 3D que sigue al cursor sobre una tarjeta.
   Solo se activa con puntero fino (mouse): en tactil no aplica. */
export function useTilt<T extends HTMLElement = HTMLDivElement>(
  strength = 9,
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-py * strength}deg) rotateY(${px * strength}deg) translateZ(0)`;
    };

    const onLeave = () => {
      el.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}

/* Progreso de scroll 0..1 de toda la pagina.
   Actualiza dentro de requestAnimationFrame y solo cuando el valor
   cambia lo suficiente, para no re-renderizar en cada evento. */
export function useScrollProgress(): number {
  const [p, setP] = useState(0);

  useEffect(() => {
    let ticking = false;
    let last = 0;

    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const next = h > 0 ? window.scrollY / h : 0;

      if (Math.abs(next - last) > 0.004) {
        last = next;
        setP(next);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return p;
}
