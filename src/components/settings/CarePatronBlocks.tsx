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
    <section className="bg-white rounded-lg border border-gray-200 px-6 py-6">
      <header className="mb-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-base font-semibold text-gray-900">{title}</p>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-gray-600">{description}</p>
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
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        {hint ? <p className="text-sm text-gray-600">{hint}</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">{children}</div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
      {children}
    </span>
  );
}

