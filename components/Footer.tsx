import { CONTACT_EMAIL } from "./content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-400" />
          <span className="font-semibold tracking-[0.18em] text-slate-300">
            NEXOLABS VEA
          </span>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="transition hover:text-slate-300"
        >
          {CONTACT_EMAIL}
        </a>

        <p>&copy; {new Date().getFullYear()} Nexolabs Vea</p>
      </div>
    </footer>
  );
}
