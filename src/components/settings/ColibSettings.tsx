import { SettingRow, SettingsSection, Tag } from "./blocks";

export default function ColibSettings() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Cohort structure"
        description="Shape group programs with the right cadence, privacy, and facilitator coverage."
      >
        <SettingRow label="Cohort size" hint="Keeps groups intimate while leaving space for drop-ins.">
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>8-12 members (recommended)</option>
            <option>12-16 members</option>
            <option>4-6 members</option>
          </select>
          <Tag>Balanced</Tag>
        </SettingRow>

        <SettingRow
          label="Facilitator coverage"
          hint="Assign backups and support roles for high-sensitivity groups."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-lime-300" />
            <span>Primary + co-facilitator</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-lime-300" />
            <span>Dedicated note-taker</span>
          </label>
          <Tag>Staffed</Tag>
        </SettingRow>

        <SettingRow
          label="Session cadence"
          hint="Reminders and materials adjust to cadence automatically."
        >
          <div className="inline-flex rounded-full border border-white/20 bg-black/20 p-1 text-xs font-semibold uppercase tracking-wide">
            <button
              type="button"
              className="rounded-full bg-white/20 px-3 py-1.5 text-slate-50"
              aria-pressed="true"
            >
              Weekly
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-slate-200/80"
              aria-pressed="false"
            >
              Bi-weekly
            </button>
          </div>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Privacy and norms"
        description="Protect participants while keeping the sense of community intact."
      >
        <SettingRow
          label="Visibility"
          hint="Control how much identity is shared across the group."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Tight (first name only)</option>
            <option>Balanced (first + city)</option>
            <option>Open (full profile)</option>
          </select>
        </SettingRow>

        <SettingRow
          label="Recording policy"
          hint="Aligns announcements, disclosures, and storage retention."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-emerald-300" />
            <span>Allow recording on request</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-300" />
            <span>Auto-delete after 14 days</span>
          </label>
          <Tag>Consent-driven</Tag>
        </SettingRow>

        <SettingRow
          label="Community norms"
          hint="Apply default agreements people see before joining."
        >
          <div className="flex flex-wrap gap-2">
            {["Confidentiality", "No advice-giving", "Camera optional"].map((norm, index) => (
              <span
                key={norm}
                className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  index === 0 ? "border-lime-300/50 bg-lime-300/20 text-lime-50" : "border-white/20 bg-black/20 text-slate-100/80"
                }`}
              >
                {norm}
              </span>
            ))}
          </div>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Check-ins and follow-ups"
        description="Make sure facilitators follow through and members feel seen between sessions."
      >
        <SettingRow label="Check-in cadence" hint="Messages align to time zones and session cadence.">
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Twice weekly (default)</option>
            <option>Weekly</option>
            <option>After every session only</option>
          </select>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-lime-300" />
            <span>Escalate non-responses</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Resource drops"
          hint="Pre and post-session resources tailored to the program arc."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-lime-300" />
            <span>Send after each session</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-lime-300" />
            <span>Include facilitator notes</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Feedback path"
          hint="Collect structured feedback that facilitators can act on quickly."
        >
          <div className="inline-flex rounded-full border border-white/20 bg-black/20 p-1 text-xs font-semibold uppercase tracking-wide">
            <button
              type="button"
              className="rounded-full bg-white/20 px-3 py-1.5 text-slate-50"
              aria-pressed="true"
            >
              Facilitator first
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-slate-200/80"
              aria-pressed="false"
            >
              Ops triage
            </button>
          </div>
          <Tag>Responsive</Tag>
        </SettingRow>
      </SettingsSection>
    </div>
  );
}

