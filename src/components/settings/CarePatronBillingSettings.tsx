"use client";

import { useState } from "react";
import { SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "details" | "invoices" | "automation";

export default function CarePatronBillingSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="billing" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Billing</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white">
          <svg className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-50">Billing</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-white/10">
        {[
          { id: "details" as Tab, label: "Billing details" },
          { id: "invoices" as Tab, label: "Invoices" },
          { id: "automation" as Tab, label: "Automation" },
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
        {activeTab === "details" && <BillingDetailsTab />}
        {activeTab === "invoices" && <InvoicesTab />}
        {activeTab === "automation" && <AutomationTab />}
      </div>
    </div>
  );
}

function BillingDetailsTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Payment Settings */}
      <SettingsSection title="Payment settings" description="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center rounded-xl border border-gray-300 bg-white p-6">
              <span className="text-2xl font-bold text-gray-100">stripe</span>
            </div>

            <p className="text-sm text-gray-300/80">
              Carepatron uses Stripe to get you paid quickly and keep your payment information secure. Available payment methods vary by region, all major debit & credit cards are accepted.
            </p>

            <ul className="space-y-2 text-sm text-gray-300/80">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Processing fees are applied to each successful transaction, you can view our rates{" "}
                  <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                    here
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Payouts occur daily but are held for to 4 days.</span>
              </li>
            </ul>

            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-200">Processing fee</span>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-1 text-sm text-gray-300/70">Your customers will pay the processing fee</p>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Set up payments
            </button>
          </div>
        </div>
      </SettingsSection>

      {/* Billing Settings */}
      <SettingsSection title="Billing settings" description="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Tax number type</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">EIN</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Tax number</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">-</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Currency</p>
              <p className="mt-1 text-sm font-semibold text-gray-100">USD</p>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Tax Rates */}
      <SettingsSection
        title="Tax rates"
        description="Manage the tax rates that will be applied to your invoice line items."
      >
        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Tax name</p>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-100">Default</p>
                  <p className="text-sm text-gray-100">Tax</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Rate</p>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-100">-</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-100">6%</p>
                    <button className="rounded-lg border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-200 hover:bg-gray-50">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New tax rate
          </button>
        </div>
      </SettingsSection>

      {/* Billing Address */}
      <SettingsSection title="Billing address" description="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Street</p>
              <input
                type="text"
                placeholder="Enter street address"
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">City</p>
                <input
                  type="text"
                  placeholder="City"
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">State</p>
                <input
                  type="text"
                  placeholder="State"
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Zip</p>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70">Country</p>
                <input
                  type="text"
                  placeholder="Country"
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function InvoicesTab() {
  return (
    <div className="space-y-6">
      {/* Invoice Templates */}
      <SettingsSection
        title="Invoice templates"
        description="Tailor your invoice templates to reflect your brand, meet regulatory requirements, and cater to client preferences with our user-friendly templates."
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          {/* Template Previews */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {["Simple", "Contemporary", "Modern"].map((template) => (
              <div
                key={template}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition"
              >
                <div className="aspect-[3/4] rounded-lg border border-white/10 bg-white/10 p-3">
                  <div className="h-full rounded bg-white/20">
                    {template === "Modern" && (
                      <div className="h-full flex flex-col">
                        <div className="h-12 bg-teal-600 rounded-t"></div>
                        <div className="flex-1 p-3 space-y-2">
                          <div className="h-4 bg-white/30 rounded w-3/4"></div>
                          <div className="h-3 bg-white/20 rounded w-full"></div>
                          <div className="h-3 bg-white/20 rounded w-5/6"></div>
                          <div className="mt-4 pt-3 border-t border-white/20">
                            <div className="text-right">
                              <div className="text-lg font-bold text-white">$300.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-200">{template}</p>
              </div>
            ))}
          </div>

          {/* Customization Options */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70 mb-2">Logo</p>
              <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-white/20 bg-white/5">
                <span className="text-lg font-bold text-gray-300">MF</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70 mb-2">Theme</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-100">Caribbean green</span>
                <div className="h-5 w-5 rounded border border-white/20 bg-[#00BFA5]"></div>
                <span className="text-xs text-gray-300/70">#00BFA5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70 mb-2">Title</p>
              <input
                type="text"
                placeholder="Invoice title"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-300/70 mb-2">Overdue term (days)</p>
              <input
                type="number"
                placeholder="30"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-white/30 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Invoice Reminders */}
      <SettingsSection
        title="Invoice reminders"
        description="Set automated reminders for invoice due dates. Reminders only apply to invoices sent through Carepatron"
      >
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <button className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New reminder
        </button>
      </SettingsSection>
    </div>
  );
}

function AutomationTab() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Autogenerate billing documents"
        description="Automated billing documents will be generated on the last day of the month. Invoices and superbill receipts can be created manually anytime."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-200">Automatically send superbill receipts</span>
              <span className="text-sm text-gray-400">Not active</span>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

