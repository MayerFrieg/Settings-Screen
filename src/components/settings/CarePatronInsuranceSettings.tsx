"use client";

import { useState } from "react";
import { SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "payers" | "eligibility";

export default function CarePatronInsuranceSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("payers");

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="insurance" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Insurance</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white">
          <svg className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-50">Insurance</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {[
          { id: "payers" as Tab, label: "Payers" },
          { id: "eligibility" as Tab, label: "Eligibility" },
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
        {activeTab === "payers" && <PayersTab />}
        {activeTab === "eligibility" && <EligibilityTab />}
      </div>
    </div>
  );
}

function PayersTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Insurance Payers */}
      <SettingsSection
        title="Insurance payers"
        description="View the payers that have been added to your account and manage enrollment."
      >
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search payers"
              className="w-full rounded-lg border border-white/20 bg-white/5 pl-10 pr-4 py-2.5 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
            />
          </div>

          {/* No Payers Message */}
          <div className="rounded-xl border border-white/10 bg-black/20 p-8 text-center">
            <p className="text-sm text-gray-300/70">No payers have been found</p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add available payers
            </button>
            <button className="text-center text-sm font-medium text-gray-300/70 hover:text-gray-200 transition">
              or add manually
            </button>
          </div>
        </div>
      </SettingsSection>

      {/* Billing Profiles */}
      <SettingsSection
        title="Billing profiles"
        description="Manage your billing information for practitioners and insurance payers by setting up billing profiles that can be applied to invoices and insurance payouts."
      >
        <div className="space-y-6">
          {/* Default Billing Profile */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-100">Default billing profile</p>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-200 hover:bg-emerald-400/20 transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Default billing profile
            </button>
          </div>

          {/* Additional Billing Profiles */}
          <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-4">
            <div>
              <p className="text-sm font-semibold text-gray-100">Additional billing profiles</p>
              <p className="mt-1 text-xs text-gray-300/70">
                Override the default billing information used for specific team members, payers or invoice templates.
              </p>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200 hover:bg-white/10 transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Billing profile
            </button>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function EligibilityTab() {
  return (
    <div className="space-y-6">
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"></div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Simplified illustration representation */}
            <div className="relative">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-emerald-400/20 bg-emerald-400/5">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-emerald-400/30 bg-white/10">
                    <svg className="h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="h-16 w-32 rounded-lg border border-emerald-400/20 bg-white/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-100">
            Verify clients insurance coverage with eligibility checks
          </h3>
          <p className="text-sm text-gray-300/70">
            Upgrade to a paid plan to access this feature.
          </p>

          {/* Upgrade Button */}
          <button className="mx-auto flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition">
            <span>Upgrade</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

