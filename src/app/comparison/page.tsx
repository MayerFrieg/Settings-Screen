import Link from "next/link";

type Product = "SimplePractice" | "CarePatron" | "Jan App" | "Colib";

type ComparisonRow = {
  title: string;
  notes: Record<Product, string>;
};

const rows: ComparisonRow[] = [
  {
    title: "Settings intent",
    notes: {
      SimplePractice: "Control panel for billing, portal, insurance, and client comms in private practice.",
      CarePatron: "Team-first controls for routing, escalations, and shared workflows across clinics.",
      "Jan App": "Lightweight settings around journaling cadence, tone safety, and clinician oversight.",
      Colib: "Settings tuned to cohorts, rooms, facilitator roles, and group privacy defaults.",
    },
  },
  {
    title: "Navigation & pacing",
    notes: {
      SimplePractice: "Calm cards with expandable detail and portal/billing guardrails surfaced early.",
      CarePatron: "Direct, decisive sections with clear handoffs and escalation cues.",
      "Jan App": "Short, supportive sections; minimal toggles; tone guidance is highlighted.",
      Colib: "Structured, role-aware grouping; cohort and rooming controls are easy to reach.",
    },
  },
  {
    title: "Scheduling & access settings",
    notes: {
      SimplePractice: "Portal permissions, cancellation rules, calendar sync, client portal access toggles.",
      CarePatron: "Routing across teams, alerts, and shared availability for multi-site schedules.",
      "Jan App": "Light cadence controls; no heavy scheduling—focus stays on journaling sessions.",
      Colib: "Cohort calendars, rooming, waitlists, and facilitator visibility settings.",
    },
  },
  {
    title: "Billing & payments settings",
    notes: {
      SimplePractice: "Deep billing stack: automations, insurance, payers, autopay, products, services.",
      CarePatron: "Billing and insurance tied to team workflows; routing-aware revenue controls.",
      "Jan App": "Minimal billing; settings keep focus on content safety over payments.",
      Colib: "Invoices and payments oriented to cohorts/programs with facilitator alignment.",
    },
  },
  {
    title: "Client communication settings",
    notes: {
      SimplePractice: "Email/text/voice templates, reminders, secure messaging, portal visibility.",
      CarePatron: "Team + client messaging with alerts and escalation hooks.",
      "Jan App": "Tone guidance and clinician oversight on AI-assisted notes/messages.",
      Colib: "Group messaging with facilitator controls and privacy-safe defaults.",
    },
  },
  {
    title: "Documentation & forms settings",
    notes: {
      SimplePractice: "Intake/shareable docs, template library, consent, scored measures with portal controls.",
      CarePatron: "Forms, notes, workflows, and trash recovery for collaborative teams.",
      "Jan App": "Journaling prompts and tone-safe guidance; light form footprint.",
      Colib: "Cohort-friendly forms and notes; balances shared context and individual privacy.",
    },
  },
  {
    title: "Permissions, safety, compliance",
    notes: {
      SimplePractice: "HIPAA-friendly defaults, secure messaging, portal permissions, billing auditability.",
      CarePatron: "Role clarity, routing guardrails, and team escalation paths.",
      "Jan App": "AI tone safety with clinician oversight; gentle defaults on personal data.",
      Colib: "Privacy-first group controls, facilitator permissions, and cohort boundaries.",
    },
  },
  {
    title: "Guardrails that matter most",
    notes: {
      SimplePractice: "Billing automations, portal permissions, cancellation rules, and payment capture steps are guarded.",
      CarePatron: "Handoffs, escalations, and shared tasks have friction to prevent drops in distributed teams.",
      "Jan App": "Tone and AI reflection guardrails keep clinician in control; low-friction elsewhere.",
      Colib: "Group privacy defaults, facilitator-only controls, and cohort boundaries are locked in.",
    },
  },
  {
    title: "Client/participant feel (in settings)",
    notes: {
      SimplePractice: "Patients get predictable reminders, invoices, and clear portal gates configured here.",
      CarePatron: "Clients see coordinated team responses driven by routing/escalation settings.",
      "Jan App": "Clients feel guided journaling and safe messaging tone tuned from settings.",
      Colib: "Participants experience structured group access and messaging set via cohort controls.",
    },
  },
  {
    title: "Integrations & ecosystem",
    notes: {
      SimplePractice: "Calendar sync, reminders, billing/payer stack; focused on practice ops more than broad apps.",
      CarePatron: "Team-centric integrations supporting shared scheduling/billing across sites.",
      "Jan App": "Lightweight; prioritizes safe journaling over external integrations.",
      Colib: "Group-first features (cohorts, rooms, messaging); lighter on external integrations.",
    },
  },
  {
    title: "Automation emphasis",
    notes: {
      SimplePractice: "Strong: billing automations, invoicing, autopay, reminders, portal permissions.",
      CarePatron: "Balanced: automation with friction at handoffs and escalations to keep teams accountable.",
      "Jan App": "Light: gentle cadence and tone checks; keeps humans in the loop for safety.",
      Colib: "Moderate: cohort flows, scheduling, and messaging templates tuned to group rhythm.",
    },
  },
  {
    title: "Branding & customization",
    notes: {
      SimplePractice: "Branding across invoices, emails, portal, and docs to keep patient touchpoints cohesive.",
      CarePatron: "Operational clarity first; lighter branding depth.",
      "Jan App": "Tone customization to keep AI output aligned with clinician style.",
      Colib: "Role- and cohort-based structure; privacy-first over heavy branding.",
    },
  },
  {
    title: "Analytics & insight",
    notes: {
      SimplePractice: "Operational metrics around billing, payments, cancellations, portal activity.",
      CarePatron: "Team performance, routing effectiveness, and escalation outcomes.",
      "Jan App": "Engagement and reflection cadence; tone safety and clinician oversight signals.",
      Colib: "Cohort progress, attendance, and facilitator engagement balanced with privacy.",
    },
  },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen relative overflow-hidden px-6 pb-14 pt-12 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-400/25 blur-[140px]" />
        <div className="absolute -right-12 bottom-12 h-64 w-64 rounded-full bg-emerald-300/25 blur-[130px]" />
        <div className="absolute -left-16 bottom-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.45)]">
          Comparison
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl text-white">Side-by-side: four settings workspaces</h1>
            <p className="max-w-4xl text-slate-200/85">
              A higher-fidelity look at intent, tone, guardrails, and operational strengths across SimplePractice, CarePatron,
              Jan App, and Colib—so you can match the workspace to the team, client mix, and risk surface you are managing.
            </p>
            <p className="text-sm text-slate-200/75">
              Highlights: SimplePractice = billing and portal strength; CarePatron = distributed team safety; Jan App = AI-guided journaling;
              Colib = group-cohort rigor with privacy-first defaults.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-white/20 transition"
            >
              <span>Back to home</span>
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
            <div className="text-xs uppercase tracking-wide text-amber-100/80 font-semibold">SimplePractice</div>
            <p className="mt-2 text-sm text-slate-100/85 leading-relaxed">
              Settings cockpit for private practices: strong billing/insurance, payer setup, portal permissions, and communications.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
            <div className="text-xs uppercase tracking-wide text-emerald-100/80 font-semibold">CarePatron</div>
            <p className="mt-2 text-sm text-slate-100/85 leading-relaxed">
              Settings emphasize distributed teams: routing, escalations, shared workflows, and team accountability.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
            <div className="text-xs uppercase tracking-wide text-cyan-100/80 font-semibold">Jan App</div>
            <p className="mt-2 text-sm text-slate-100/85 leading-relaxed">
              Lightweight journaling settings with AI tone guidance and clinician oversight; minimal operational weight.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-inner shadow-black/30">
            <div className="text-xs uppercase tracking-wide text-lime-100/80 font-semibold">Colib</div>
            <p className="mt-2 text-sm text-slate-100/85 leading-relaxed">
              Group-program settings: cohorts, rooms, facilitator roles, privacy-balanced messaging, and waitlists.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_65px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 text-xs uppercase tracking-wide font-semibold text-slate-200/80">
            <div className="px-4 py-3 bg-white/5">Aspect</div>
            <div className="px-4 py-3 bg-white/5">SimplePractice</div>
            <div className="px-4 py-3 bg-white/5">CarePatron</div>
            <div className="px-4 py-3 bg-white/5">Jan App</div>
            <div className="px-4 py-3 bg-white/5">Colib</div>
          </div>

          <div className="divide-y divide-white/10">
            {rows.map((row) => (
              <div key={row.title} className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
                <div className="bg-white/10 px-4 py-4 text-sm font-semibold text-slate-100">{row.title}</div>
                <div className="bg-white/5 px-4 py-4 text-sm text-slate-100/90 leading-relaxed">{row.notes.SimplePractice}</div>
                <div className="bg-white/5 px-4 py-4 text-sm text-slate-100/90 leading-relaxed">{row.notes.CarePatron}</div>
                <div className="bg-white/5 px-4 py-4 text-sm text-slate-100/90 leading-relaxed">{row.notes["Jan App"]}</div>
                <div className="bg-white/5 px-4 py-4 text-sm text-slate-100/90 leading-relaxed">{row.notes.Colib}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner shadow-black/30">
            <h3 className="text-lg font-semibold text-white">When to pick SimplePractice</h3>
            <p className="mt-2 text-slate-200/85 text-sm leading-relaxed">
              Choose the SimplePractice settings stack when billing rigor, payer setup, and portal governance are your
              biggest levers. Ideal for solo/small practices that need predictable revenue and tight client communications.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/80 list-disc list-inside">
              <li>Best for: predictable billing, payer workflows, portal governance.</li>
              <li>Guardrails: payments, cancellation policies, portal permissions.</li>
              <li>Watchouts: less focused on broad team routing—opt for CarePatron if distributed.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner shadow-black/30">
            <h3 className="text-lg font-semibold text-white">When to pick CarePatron</h3>
            <p className="mt-2 text-slate-200/85 text-sm leading-relaxed">
              Use the CarePatron settings workspace when coordination risk across teams is highest. Routing, escalations,
              and shared workflows keep multi-site clinics synchronized with intentional friction at handoffs.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/80 list-disc list-inside">
              <li>Best for: multi-site collaboration, shared workflows, escalations.</li>
              <li>Guardrails: handoffs, routing, escalation ladders.</li>
              <li>Watchouts: branding depth is lighter—prioritizes operational clarity.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner shadow-black/30">
            <h3 className="text-lg font-semibold text-white">When to pick Jan App</h3>
            <p className="mt-2 text-slate-200/85 text-sm leading-relaxed">
              Choose the Jan App settings when tone safety and clinician oversight over AI-assisted journaling matter more
              than heavy operational controls. Keep cadence gentle and humans in the loop.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/80 list-disc list-inside">
              <li>Best for: reflection cadence, tone guardrails, clinician-supervised AI.</li>
              <li>Guardrails: tone safety, AI outputs, human-in-the-loop checkpoints.</li>
              <li>Watchouts: intentionally light on billing and deep ops.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner shadow-black/30">
            <h3 className="text-lg font-semibold text-white">When to pick Colib</h3>
            <p className="mt-2 text-slate-200/85 text-sm leading-relaxed">
              Select the Colib settings when cohort structure, facilitator roles, and privacy-balanced community spaces
              define success. It optimizes in-product group flow over broad external integrations.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/80 list-disc list-inside">
              <li>Best for: cohorts, facilitator-led sessions, privacy-first community.</li>
              <li>Guardrails: cohort boundaries, role permissions, group messaging privacy.</li>
              <li>Watchouts: lighter on broad integrations; optimized for in-product group flow.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-inner shadow-black/30">
          <h3 className="text-lg font-semibold text-white">Analysis snapshot</h3>
          <p className="mt-2 text-slate-200/85 text-sm leading-relaxed">
            Choose SimplePractice when billing rigor and portal governance are the critical risks. Pick CarePatron when coordination risk across teams is highest.
            Use Jan App when tone safety with AI is the priority and operational overhead should stay light. Select Colib when group privacy and facilitator-driven structure
            define success.
          </p>
        </div>
      </div>
    </main>
  );
}
