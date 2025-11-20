import Link from "next/link";
import SimplePracticeSettings from "@/components/settings/SimplePracticeSettings";

export default function SimplePracticePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pb-16 pt-10 sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[140px]" />
        <div className="absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-orange-400/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-8">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-200/100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition hover:border-white/30 hover:bg-white/20"
          >
            <span>&larr;</span>
            <span>Back to home</span>
          </Link>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-semibold uppercase tracking-wide text-amber-100">
            SimplePractice
          </span>
        </div>

        <header className="panel-strong rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-6 shadow-[0_22px_75px_rgba(0,0,0,0.55)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100/100">
            Therapy operations
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            SimplePractice settings built for calm, predictable weeks
          </h1>
          <p className="mt-2 max-w-3xl text-slate-200/100">
            Guardrails for schedules, billing, and communication so clinicians can focus on care.
            Everything here keeps clients informed without adding friction to the day.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">Clinician focus</p>
              <p className="mt-1 text-base font-semibold">Protect time and attention</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">Client clarity</p>
              <p className="mt-1 text-base font-semibold">No surprises on reminders</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">Revenue safety</p>
              <p className="mt-1 text-base font-semibold">Transparent payments</p>
            </div>
          </div>
        </header>

        <SimplePracticeSettings />
      </div>
    </main>
  );
}
