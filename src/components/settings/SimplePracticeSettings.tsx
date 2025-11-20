import { SettingRow, SettingsSection, Tag } from "./blocks";

export default function SimplePracticeSettings() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Scheduling guardrails"
        description="Hold steady schedules across clinicians while keeping enough flexibility for real life."
      >
        <SettingRow
          label="Session buffer"
          hint="Applied to 50-minute and 80-minute templates to reduce stacking and overrun stress."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>10 minutes (recommended)</option>
            <option>15 minutes</option>
            <option>Custom windows</option>
          </select>
          <Tag>Default</Tag>
        </SettingRow>

        <SettingRow
          label="Late cancel policy"
          hint="Client-facing language updates automatically on reminders and invoices."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Charge $75 after 5 minutes</option>
            <option>Charge full rate after 10 minutes</option>
            <option>Flag for clinician call</option>
          </select>
          <label className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-100/80">
              Offer 1 grace per month
            </span>
          </label>
        </SettingRow>

        <SettingRow
          label="Waitlist automation"
          hint="Clients move into openings that match clinician capacity and specialty rules."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Auto-assign by modality</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-emerald-400" />
            <span>Require clinician confirm</span>
          </label>
          <Tag>Live</Tag>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Billing and payments"
        description="Keep billing language consistent and transparent for both clinicians and clients."
      >
        <SettingRow
          label="Statements cadence"
          hint="Rhythm for individual clients and families."
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
              Monthly
            </button>
            <button
              type="button"
              className="rounded-full px-3 py-1.5 text-slate-200/80"
              aria-pressed="false"
            >
              After session
            </button>
          </div>
        </SettingRow>

        <SettingRow
          label="Card on file"
          hint="Protect clinicians by requiring payment methods before intake."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-amber-300" />
            <span>Required before first session</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-amber-300" />
            <span>Allow HSA/FSA split</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Refund guardrails"
          hint="Only admins can approve refunds unless flagged as clinical risk."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Admin only (default)</option>
            <option>Admin + supervisor</option>
            <option>Any clinician</option>
          </select>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-400" />
            <span>Auto-open risk review</span>
          </label>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Communication rhythm"
        description="Keep clients informed without overwhelming clinicians. Timing adapts to time zones."
      >
        <SettingRow label="Reminder mix" hint="Reminders queue with fallbacks if undelivered.">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>SMS 24h before</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>Email 48h before</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-sky-300" />
            <span>Push 2h before</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Tone presets"
          hint="Adjusts copy used across reminders, invoices, and intake flows."
        >
          <div className="flex flex-wrap gap-2">
            {["Reassuring", "Neutral", "Direct"].map((tone) => (
              <button
                key={tone}
                type="button"
                aria-pressed={tone === "Reassuring"}
                className={`rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold ${
                  tone === "Reassuring" ? "bg-white/20 text-slate-50" : "bg-black/25 text-slate-200/80"
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </SettingRow>

        <SettingRow
          label="Escalation path"
          hint="Route complex billing or scheduling replies to the right teammates."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Clinician first, then admin</option>
            <option>Admin triage, clinician cc</option>
            <option>Operations only</option>
          </select>
          <Tag>Updated</Tag>
        </SettingRow>
      </SettingsSection>
    </div>
  );
}

