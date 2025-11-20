import Link from "next/link";
import JanAppSettings from "@/components/settings/JanAppSettings";

export default function JanAppPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pb-16 pt-10 sm:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[140px]" />
        <div className="absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl space-y-8">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-200/80">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 transition hover:border-white/30 hover:bg-white/15"
          >
            <span>&larr;</span>
            <span>Back to home</span>
          </Link>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-semibold uppercase tracking-wide text-sky-100">
            Jan App
          </span>
        </div>

        <header className="panel-strong rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-6 shadow-[0_22px_75px_rgba(0,0,0,0.55)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100/80">
            AI-supported wellbeing
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Jan App settings that keep AI gentle, bounded, and human
          </h1>
          <p className="mt-2 max-w-3xl text-slate-200/80">
            Tune daily prompts, guardrails, and privacy expectations for a journaling experience
            that feels guided yet safe.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">Cadence</p>
              <p className="mt-1 text-base font-semibold">Steady, not pushy</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">AI safety</p>
              <p className="mt-1 text-base font-semibold">Hard rails on risk</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-slate-300/70">Privacy</p>
              <p className="mt-1 text-base font-semibold">Exports on their terms</p>
            </div>
          </div>
        </header>

        <JanAppSettings />
      </div>
    </main>
  );
}
