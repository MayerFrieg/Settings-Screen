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
      { label: "Active clients", value: "1,240" },
      { label: "Monthly revenue", value: "$89K" },
      { label: "Uptime", value: "99.9%" },
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
      { label: "Team members", value: "142" },
      { label: "Sessions/month", value: "3.2K" },
      { label: "Response time", value: "< 2 min" },
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
      { label: "Active users", value: "8.5K" },
      { label: "Daily entries", value: "2.1K" },
      { label: "Satisfaction", value: "4.8/5" },
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
      { label: "Active groups", value: "24" },
      { label: "Participants", value: "312" },
      { label: "Completion rate", value: "87%" },
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
            const isJanApp = screen.title === "Jan App";
            const isSimplePractice = screen.title === "SimplePractice";
            const isClickable = isCarePatron || isColib || isJanApp || isSimplePractice;

            if (isClickable) {
              return (
                <Link
                  key={screen.slug}
                  href={screen.slug}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_65px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.6)] cursor-pointer`}
                >
                  <div
                    className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${screen.accent} opacity-75 transition duration-300 group-hover:opacity-100`}
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/80 text-slate-100 transition group-hover:border-white/30 group-hover:bg-white/10">
                        <span className="text-xl">&rarr;</span>
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
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={screen.slug}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_65px_rgba(0,0,0,0.55)]`}
              >
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${screen.accent} opacity-50`}
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/80 text-slate-100">
                      <span className="text-lg">🔒</span>
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

                  <div className="mt-2 flex items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3">
                    <p className="text-sm font-semibold text-amber-200">Coming Soon</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 grid grid-cols-1">
          <Link
            href="/comparison"
            className="relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_65px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.65)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-emerald-300/10 to-cyan-300/10 opacity-80 transition duration-300" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-100/85">
                Comparison
              </div>
              <h2 className="text-2xl font-semibold text-white">How the four workspaces differ</h2>
              <p className="text-slate-200/85 text-sm max-w-4xl">
                Open the comparison view to see tone, guardrails, and operational focus side-by-side for SimplePractice,
                CarePatron, Jan App, and Colib.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
                  <div className="text-xs uppercase tracking-wide text-amber-100/80 font-semibold">SimplePractice</div>
                  <p className="mt-2 text-sm text-slate-100/85">
                    Calm, therapist-first. Strong billing and portal guardrails for predictable revenue.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
                  <div className="text-xs uppercase tracking-wide text-emerald-100/80 font-semibold">CarePatron</div>
                  <p className="mt-2 text-sm text-slate-100/85">
                    Distributed teams. Cross-clinic routing, escalation ladders, and role clarity.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
                  <div className="text-xs uppercase tracking-wide text-cyan-100/80 font-semibold">Jan App</div>
                  <p className="mt-2 text-sm text-slate-100/85">
                    AI-assisted journaling. Tone guidance, reflection cadence, and clinician oversight.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
                  <div className="text-xs uppercase tracking-wide text-lime-100/80 font-semibold">Colib</div>
                  <p className="mt-2 text-sm text-slate-100/85">
                    Group programs. Cohort dosing, facilitator roles, and privacy-balanced community.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                <span>Open comparison</span>
                <span className="text-lg leading-none">→</span>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
