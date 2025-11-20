import { SettingRow, SettingsSection, Tag } from "./blocks";

export default function JanAppSettings() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Reflection cadence"
        description="Set the rhythm for reflective prompts so people build momentum without fatigue."
      >
        <SettingRow label="Prompt schedule" hint="Cadence adjusts when streaks are strong.">
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Daily evenings (default)</option>
            <option>Morning + evening</option>
            <option>Every other day</option>
          </select>
          <Tag>Gentle</Tag>
        </SettingRow>

        <SettingRow
          label="Focus themes"
          hint="Choose which domains should be emphasized across the week."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>Sleep and rest</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>Relationships</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-sky-300" />
            <span>Work and school</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Nudge style"
          hint="Tone and length of nudges to keep people writing without pressure."
        >
          <div className="flex flex-wrap gap-2">
            {["Warm", "Neutral", "Direct"].map((tone) => (
              <button
                key={tone}
                type="button"
                aria-pressed={tone === "Warm"}
                className={`rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold ${
                  tone === "Warm" ? "bg-white/20 text-slate-50" : "bg-black/25 text-slate-200/80"
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="AI guidance"
        description="Keep AI supportive, bounded, and aligned with clinician oversight."
      >
        <SettingRow label="Reply caps" hint="Limit assistance to protect space for self-reflection.">
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>12 replies per day</option>
            <option>8 replies per day</option>
            <option>Unlimited</option>
          </select>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan-300" />
            <span>Pause AI after sensitive flags</span>
          </label>
        </SettingRow>

        <SettingRow
          label="Safety rails"
          hint="Select interventions for high-risk language or repeated rumination."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan-300" />
            <span>Escalate to human coach</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-cyan-300" />
            <span>Mask triggering topics</span>
          </label>
          <Tag>Safeguarded</Tag>
        </SettingRow>

        <SettingRow
          label="Voice and tone"
          hint="Defines how AI responds and acknowledges feelings."
        >
          <select className="rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-sm">
            <option>Grounded and validating</option>
            <option>Curious and brief</option>
            <option>Clinical and direct</option>
          </select>
        </SettingRow>
      </SettingsSection>

      <SettingsSection
        title="Privacy and exports"
        description="Give people control over where their data travels and who can see it."
      >
        <SettingRow
          label="Export options"
          hint="Formats available to users when they choose to take their data elsewhere."
        >
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>PDF with timeline</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-sky-300" />
            <span>JSON machine-readable</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-300" />
            <span>Share with clinician</span>
          </label>
        </SettingRow>

        <SettingRow label="Anonymization" hint="Strip identifiers from exports and AI training signals.">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan-300" />
            <span>Remove names and places</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-cyan-300" />
            <span>Blur exact timestamps</span>
          </label>
        </SettingRow>

        <SettingRow label="Device privacy" hint="Control what is stored locally versus the cloud.">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-cyan-300" />
            <span>Encrypt at rest</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-cyan-300" />
            <span>Allow offline journaling</span>
          </label>
          <Tag>Privacy first</Tag>
        </SettingRow>
      </SettingsSection>
    </div>
  );
}
