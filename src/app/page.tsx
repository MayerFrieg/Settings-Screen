import Link from "next/link";

const screens = [
  {
    title: "SimplePractice",
    slug: "/simplepractice",
    badge: "Private practice ready",
    description: "Calm, therapist-first controls that keep scheduling and billing predictable.",
    accent: "from-amber-400/40 via-orange-400/20 to-transparent",
    highlights: ["Calendar guardrails", "Payment protections", "Client messaging cues"],
    metrics: [
      { label: "No-show buffer", value: "10 min" },
      { label: "Statements", value: "Auto, weekly" },
      { label: "Reminders", value: "SMS + email" },
    ],
  },
  {
    title: "CarePatron",
    slug: "/carepatron",
    badge: "Distributed care teams",
    description: "Coordinated care controls that keep multi-practice teams in sync.",
    accent: "from-teal-300/40 via-emerald-300/20 to-transparent",
    highlights: ["Cross-clinic routing", "Escalation ladder", "Session QA"],
    metrics: [
      { label: "Regions live", value: "6" },
      { label: "Escalation SLA", value: "15 min" },
      { label: "On-call", value: "Weekend cover" },
    ],
  },
  {
    title: "Jan App",
    slug: "/jan-app",
    badge: "AI-supported journaling",
    description: "Lightweight well-being controls that keep AI support safe and human-led.",
    accent: "from-cyan-300/40 via-sky-400/20 to-transparent",
    highlights: ["Reflection cadence", "AI safety rails", "Tone guidance"],
    metrics: [
      { label: "Prompts", value: "Curated daily" },
      { label: "AI limit", value: "12 replies/day" },
      { label: "Export", value: "End-to-end" },
    ],
  },
  {
    title: "Colib",
    slug: "/colib",
    badge: "Group programs",
    description: "Structured group-care controls that balance community with privacy.",
    accent: "from-lime-300/50 via-emerald-300/20 to-transparent",
    highlights: ["Cohort dosing", "Facilitator roles", "Privacy defaults"],
    metrics: [
      { label: "Groups active", value: "12" },
      { label: "Privacy preset", value: "Tight" },
      { label: "Check-ins", value: "Twice weekly" },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden px-6 pb-14 pt-12 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-10 bottom-8 h-64 w-64 rounded-full bg-amber-400/20 blur-[110px]" />
        <div className="absolute -left-16 bottom-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.45)]">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(52,211,153,0.18)]" />
          Designed for mindful ops
        </div>

        <header className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              One control center for calm, capable mental health teams
            </h1>
            <p className="max-w-2xl text-lg text-slate-200/80">
              Four bespoke settings workspaces tailored to how modern care orgs actually run. Each
              screen balances clinical safety, operational rhythm, and human warmth.
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm text-slate-200/85 sm:grid-cols-3">
              <div className="panel rounded-2xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300/70">Tone</p>
                <p className="mt-1 text-base font-semibold">Grounded, human, unhurried</p>
              </div>
              <div className="panel rounded-2xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300/70">Safety</p>
                <p className="mt-1 text-base font-semibold">Friction where it matters</p>
              </div>
              <div className="panel rounded-2xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300/70">Momentum</p>
                <p className="mt-1 text-base font-semibold">Less toggling, more clarity</p>
              </div>
            </div>
          </div>

          <div className="panel-strong rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between text-sm text-slate-200/85">
              <span className="font-semibold">Curation</span>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                Ready to preview
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="font-semibold">Ops fidelity</p>
                  <p className="text-slate-300/70">Guardrails before guidance</p>
                </div>
                <span className="text-emerald-200">High</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="font-semibold">Adaptability</p>
                  <p className="text-slate-300/70">Per-org nuance captured</p>
                </div>
                <span className="text-amber-200">Flexible</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="font-semibold">Feel</p>
                  <p className="text-slate-300/70">Warm, confident, precise</p>
                </div>
                <span className="text-sky-200">Intentional</span>
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {screens.map((screen) => {
            const isCarePatron = screen.title === "CarePatron";
            const isColib = screen.title === "Colib";
            const isClickable = isCarePatron || isColib;
            const CardWrapper = isClickable ? Link : "div";
            const wrapperProps = isClickable ? { href: screen.slug } : {};

            return (
              <CardWrapper
                key={screen.slug}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_65px_rgba(0,0,0,0.55)] ${
                  isClickable
                    ? "transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                    : ""
                }`}
              >
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${screen.accent} ${
                    isClickable ? "opacity-75 transition duration-300 group-hover:opacity-100" : "opacity-50"
                  }`}
                />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-100/85">
                        {screen.badge}
                      </div>
                      <h2 className="text-2xl font-semibold">{screen.title}</h2>
                      <p className="max-w-xl text-slate-200/80">{screen.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-100/80">
                        {screen.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/20 bg-black/20 px-3 py-1 shadow-inner shadow-black/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 ${
                        isClickable
                          ? "bg-slate-950/80 text-slate-100 transition group-hover:border-white/30 group-hover:bg-white/10"
                          : "bg-slate-950/80 text-slate-100"
                      }`}
                    >
                      {isClickable ? (
                        <span className="text-xl">&rarr;</span>
                      ) : (
                        <span className="text-lg">🔒</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-slate-200/80">
                    {screen.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1 rounded-xl bg-white/5 px-3 py-2">
                        <p className="text-xs uppercase tracking-wide text-slate-300/70">
                          {metric.label}
                        </p>
                        <p className="text-base font-semibold">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {!isClickable && (
                    <div className="mt-2 flex items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3">
                      <p className="text-sm font-semibold text-amber-200">Coming Soon</p>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </section>
      </div>
    </main>
  );
}
