import { ReactNode } from "react";

export function SettingsSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="panel rounded-3xl border border-white/20 bg-white/5 px-6 py-6 shadow-[0_22px_75px_rgba(0,0,0,0.55)]">
      <header className="mb-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-200/60">
            {title}
          </p>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-slate-200/75">{description}</p>
          ) : null}
        </div>
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function SettingRow({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-inner shadow-black/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="text-sm font-semibold text-slate-50">{label}</p>
        {hint ? <p className="text-sm text-slate-200/70">{hint}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-100/90">{children}</div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200/80">
      {children}
    </span>
  );
}
