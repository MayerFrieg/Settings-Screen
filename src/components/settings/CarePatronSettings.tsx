import { SettingRow, SettingsSection, Tag } from "./blocks";

export default function CarePatronSettings() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Team coverage"
        description="Structured routes for clinics across regions with clear ownership and backups."
      >
        <SettingRow label="Region routing" hint="Automatically route based on time zone and modality.">
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>East > Central > West</option>
            <option>Clinic home > Regional > Global</option>
            <option>Manual triage</option>
          </select>
          <Tag>Live</Tag>
        </SettingRow>

        <SettingRow
          label="Coverage ladder"
          hint="Sends nudges to next-on-call if unclaimed after 10 minutes."
        >
          <div className="flex flex-wrap gap-2">
            {["Admin", "Lead clinician", "On-call"].map((role, index) => (
              <span
                key={role}
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  index === 0 ? "border-emerald-300/50 bg-emerald-400/20 text-emerald-50" : "border-white/20 bg-black/20 text-slate-100/80"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </SettingRow>

        <SettingRow
          label="Weekend cover"
          hint="Apply lighter touch for non-urgent weekend escalations."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Triaged within 30 minutes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-emerald-400" />
            <span>Clinician confirmation required</span>
          </label>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Safety and compliance"
        description="Ensure privacy, consent, and supervision are consistently applied across teams."
      >
        <SettingRow
          label="Consent refresh"
          hint="Trigger renewals on cadence or whenever care plans change."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Every 6 months</option>
            <option>Every 12 months</option>
            <option>After plan update</option>
          </select>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-teal-300" />
            <span>Request digital signature</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Audit trail"
          hint="Log escalations, overrides, and handoffs for clinical QA."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-teal-300" />
            <span>Always log escalation changes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-teal-300" />
            <span>Mask client identifiers</span>
          </label>
          <Tag>Protected</Tag>
        </SettingRow>

        <SettingRow
          label="Supervisor pairing"
          hint="Enforce supervision for provisionally licensed clinicians."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Auto-pair by license type</option>
            <option>Manual pairing</option>
            <option>Disable</option>
          </select>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Require co-sign on notes</span>
          </label>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Session QA"
        description="Lightweight quality sweeps to keep care aligned with organizational standards."
      >
        <SettingRow
          label="Sampling"
          hint="Choose how many sessions per week get reviewed. Adjusts with volume."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>6 sessions per region</option>
            <option>10 sessions per region</option>
            <option>Manual selection</option>
          </select>
        </SettingRow>

        <SettingRow
          label="Signal triggers"
          hint="Flag sessions for review based on risk and clinical complexity."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Suicide/self-harm mentions</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Medication changes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-emerald-400" />
            <span>New clinician onboarding</span>
          </label>
        </SettingRow>

        <SettingRow
          label="QA feedback route"
          hint="Decide who gets actionable feedback from QA sweeps."
        >
          <div className="inline-flex rounded-full border border-white/20 bg-black/20 p-1 text-xs font-semibold uppercase tracking-wide">
            <button
              type="button"
              className="rounded-full bg-white/20 px-3 py-1.5 text-slate-50"
              aria-pressed="true"
            >
              Clinician + admin
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-slate-200/80"
              aria-pressed="false"
            >
              Admin only
            </button>
          </div>
        </SettingRow>
      </SettingsSection>
    </div>
  );
}

