import Link from "next/link";
import { BRAND } from "@/components/config";

/* Layout compartido por las paginas legales */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
            <span className="text-[13px] font-semibold tracking-[0.26em] text-white">
              {BRAND}
            </span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-slate-400 transition-colors hover:text-white"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">{children}</main>

      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-[13px] text-slate-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Nexolabs</p>
          <div className="flex gap-6">
            <Link href="/legal/terminos" className="hover:text-slate-300">
              Términos
            </Link>
            <Link href="/legal/privacidad" className="hover:text-slate-300">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
