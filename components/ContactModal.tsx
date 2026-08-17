"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { useI18n } from "./i18n";

/* ------------------------------------------------------------------ */
/*  Modal de contacto: se abre desde cualquier parte con useContactModal */
/* ------------------------------------------------------------------ */

type Ctx = { open: () => void; close: () => void; isOpen: boolean };

const ModalContext = createContext<Ctx | null>(null);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Cerrar con Escape y bloquear el scroll del fondo
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <ModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && <ContactModal onClose={close} />}
    </ModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useContactModal debe usarse dentro de <ContactModalProvider>");
  }
  return ctx;
}

/* ----------------------------- el modal ----------------------------- */

function ContactModal({ onClose }: { onClose: () => void }) {
  const { t } = useI18n();

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
    >
      <div
        className="relative my-auto w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modal.close}
          className="absolute -top-2 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-slate-400 transition-colors hover:text-white sm:-right-2 sm:-top-3"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="rounded-2xl border border-white/[0.09] bg-ink-900 p-1 shadow-2xl">
          <div className="px-7 pb-2 pt-7 sm:px-9">
            <h2
              id="modal-titulo"
              className="text-xl font-semibold tracking-tight text-white"
            >
              {t.modal.title}
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
              {t.modal.subtitle}
            </p>
          </div>
          <ContactForm variant="modal" />
        </div>
      </div>
    </div>
  );
}
