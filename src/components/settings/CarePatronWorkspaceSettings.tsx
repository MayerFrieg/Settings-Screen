"use client";

import { useState } from "react";
import { SettingRow, SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "details" | "subscriptions" | "custom" | "reminders" | "communications";

export default function CarePatronWorkspaceSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="workspace" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Mayer Frieg</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white">
          <svg className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-50">Mayer Frieg</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {[
          { id: "details" as Tab, label: "Details" },
          { id: "subscriptions" as Tab, label: "Subscriptions" },
          { id: "custom" as Tab, label: "Custom fields" },
          { id: "reminders" as Tab, label: "Reminders" },
          { id: "communications" as Tab, label: "Communications" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 pb-3 px-1 text-sm font-medium transition ${
              activeTab === tab.id
                ? "border-teal-500 text-gray-900"
                : "border-transparent text-gray-300/70 hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "details" && <DetailsTab />}
        {activeTab === "subscriptions" && <SubscriptionsTab />}
        {activeTab === "custom" && <CustomFieldsTab />}
        {activeTab === "reminders" && <RemindersTab />}
        {activeTab === "communications" && <CommunicationsTab />}
      </div>
    </div>
  );
}

function DetailsTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Business Information */}
      <SettingsSection title="Business information" description="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Name</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">Mayer Frieg</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Phone number</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">-</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">National provider identifier (NPI)</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">-</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Website URL</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">-</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Country</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">us United States</p>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Locations */}
      <SettingsSection
        title="Locations"
        description="Set up physical and virtual locations with specific addresses, room names, and types of virtual spaces to make scheduling appointments and video calls easier."
      >
        <div className="space-y-4">
          <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-4 max-h-96 overflow-y-auto">
            <div className="flex items-start justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                  <svg className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-100">Carepatron Virtual location</p>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-200">
                      Virtual location
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-300/70">Video conferencing</p>
                  <p className="mt-0.5 text-xs text-gray-300/70">POS 02</p>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New location
          </button>
        </div>
      </SettingsSection>

      {/* Workspace Branding */}
      <SettingsSection
        title="Workspace branding"
        description="Effortlessly brand your workspace with a cohesive style that reflects your professionalism and personality. Customize invoices to online booking for a beautiful customer experience."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Brand</p>
              <input
                type="text"
                placeholder="Enter brand name"
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Logo</p>
              <div className="mt-1 flex h-24 w-full items-center justify-center rounded-lg border-2 border-dashed border-white/20 bg-blue-50/10">
                <p className="text-xs text-gray-400">Upload logo</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Theme</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-100">Caribbean green</span>
                <div className="h-5 w-5 rounded border border-white/20 bg-[#00BFA5]"></div>
                <span className="text-xs text-gray-300/70">#00BFA5</span>
              </div>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function SubscriptionsTab() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Subscription summary"
        description="Stay in control of your practice's needs. Review your current plan, monitor usage, and explore upgrade options to unlock more features as your team grows."
      >
        <div className="space-y-6">
          {/* Active Users */}
          <div>
            <p className="text-sm font-semibold text-gray-100">Active users</p>
            <p className="mt-1 text-sm text-gray-300/70">1 team member</p>
          </div>

          {/* Current Plan */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-100">Free Plan</p>
                  <p className="text-xs text-gray-300/70">Limited</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Metrics */}
          <div className="space-y-4">
            {/* Storage */}
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-gray-200/80">Storage</span>
                <span className="font-semibold text-gray-100">12%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/30">
                <div className="h-full w-[12%] rounded-full bg-emerald-400"></div>
              </div>
            </div>

            {/* AI Tokens */}
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-gray-200/80">AI Tokens</span>
                <span className="font-semibold text-gray-100">4017 of 1000000 used</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/30">
                <div className="h-full w-[0.4%] rounded-full bg-emerald-400"></div>
              </div>
            </div>

            {/* Tasks */}
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-gray-200/80">Tasks</span>
                <span className="font-semibold text-gray-100">2 of 1000 used</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/30">
                <div className="h-full w-[0.2%] rounded-full bg-emerald-400"></div>
              </div>
            </div>
          </div>

          {/* Upgrade Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Upgrade plan
          </button>
        </div>
      </SettingsSection>
    </div>
  );
}

function CustomFieldsTab() {
  const sections = [
    {
      name: "Name",
      fields: ["First name", "Middle name", "Last name", "Preferred name"],
    },
    {
      name: "Contact details",
      fields: ["Phone number", "Email", "Address"],
    },
    {
      name: "About Client",
      fields: [
        "Date of birth",
        "Gender",
        "Sex",
        "Preferred Language",
        "Date First Seen",
        "Relationship Status",
        "Employment Status",
        "Ethnicity",
        "Client Notes",
      ],
    },
    {
      name: "Provider details",
      fields: ["Identification Number", "Status", "Assigned Team", "Tags", "Referred By"],
    },
  ];

  return (
    <div className="space-y-6">
      <SettingsSection
        title="Customize client fields"
        description="Organize and customize the fields available for client profiles to match your practice's needs."
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200/80">Manage custom fields for client profiles</span>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <div key={section.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-100">{section.name}</h3>
                  <button className="text-teal-600 hover:text-teal-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {section.fields.map((field) => (
                    <div key={field} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                      <p className="text-xs text-gray-200/80">{field}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function RemindersTab() {
  return (
    <div className="space-y-6">
      {/* Information Banner */}
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
        <div className="flex items-start gap-3">
          <svg className="h-5 w-5 flex-shrink-0 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-emerald-200">
              Your reminder experience is getting better. Find all reminders under the new Workflow Management tab in Settings. This update brings powerful new features, improved templating, and smarter automation tools to boost your productivity. 🚀
            </p>
            <button className="mt-2 text-sm font-medium text-emerald-300 hover:text-emerald-200">
              Go to Workflow Management
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Reminders */}
      <SettingsSection
        title="Appointment reminders"
        description="Set automated reminders for client appointments to avoid no-shows and cancellations"
      >
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </SettingsSection>

      {/* Invoice Reminders */}
      <SettingsSection
        title="Invoice reminders"
        description="Set automated reminders for invoice due dates. Reminders only apply to invoices sent through Carepatron"
      >
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </SettingsSection>
    </div>
  );
}

function CommunicationsTab() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Client messaging preferences"
        description="Choose how you'd like clients to contact you."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200/80">Manage messaging preferences</span>
            <button className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-500/20">
              Edit
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Client contact type</p>
              <p className="mt-2 text-sm font-semibold text-gray-100">Reply-only (48hr window)</p>
              <p className="mt-1 text-xs text-gray-300/70">
                Clients can only reply to messages you've sent. Replies must be made within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

