"use client";

import { useState } from "react";
import { SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "templates" | "reminders";

export default function CarePatronWorkflowsSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("templates");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["scheduling"]));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="workflows" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Workflows</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Workflows</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {[
          { id: "templates" as Tab, label: "Templates" },
          { id: "reminders" as Tab, label: "Basic reminders" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 pb-3 px-1 text-sm font-medium transition ${
              activeTab === tab.id
                ? "border-teal-500 text-gray-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "templates" && <TemplatesTab expandedSections={expandedSections} toggleSection={toggleSection} />}
        {activeTab === "reminders" && <RemindersTab />}
      </div>
    </div>
  );
}

function TemplatesTab({
  expandedSections,
  toggleSection,
}: {
  expandedSections: Set<string>;
  toggleSection: (section: string) => void;
}) {
  const schedulingTemplates = [
    {
      icon: "📅",
      title: "Cancelled appointment • Email",
      status: "Active",
      description: "Keep everyone informed - send to clients when their appointment is cancelled.",
      workflows: 1,
    },
    {
      icon: "📅",
      title: "New appointment • Email",
      status: "Active",
      description: "Reach out to clients when their appointment is booked for them.",
      workflows: 1,
    },
    {
      icon: "📅",
      title: "Appointment request declined • Email",
      status: "Active",
      description: "Keep everyone informed - send to clients when their appointment request is declined.",
      workflows: 1,
    },
    {
      icon: "📅",
      title: "Appointment request received • Email",
      status: "Active",
      description: "Keep everyone informed - send to clients when their appointment request is received.",
      workflows: 1,
    },
    {
      icon: "🔄",
      title: "Reschedule appointment • Email",
      status: "Active",
      description: "Keep everyone informed - send to clients when their appointment start time is changed.",
      workflows: 1,
    },
    {
      icon: "📅",
      title: "Appointment reminder • Email",
      status: "Active",
      description: "Reduce no shows - remind your clients about upcoming appointments.",
      workflows: 1,
    },
    {
      icon: "📅",
      title: "Appointment reminder • SMS",
      status: "Active",
      description: "Reduce no shows - remind your clients about upcoming appointments.",
      workflows: 1,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Scheduling Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <button
          onClick={() => toggleSection("scheduling")}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-gray-900">Scheduling</span>
            <span className="text-sm text-gray-600">{schedulingTemplates.length}</span>
          </div>
          <svg
            className={`h-5 w-5 text-gray-400 transition ${expandedSections.has("scheduling") ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedSections.has("scheduling") && (
          <div className="border-t border-gray-200">
            {schedulingTemplates.map((template, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 p-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                    {template.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900">{template.title}</h3>
                      <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
                        {template.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{template.workflows} workflow</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RemindersTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Appointment Reminders */}
      <SettingsSection
        title="Appointment reminders"
        description="Set automated reminders for client appointments to avoid no-shows and cancellations"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-teal-500 bg-teal-50 px-4 py-2.5 text-sm font-medium text-teal-700 hover:bg-teal-100 transition">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New reminder
          </button>
        </div>
      </SettingsSection>

      {/* Invoice Reminders */}
      <SettingsSection
        title="Invoice reminders"
        description="Set automated reminders for invoice due dates. Reminders only apply to invoices sent through Carepatron"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-teal-500 bg-teal-50 px-4 py-2.5 text-sm font-medium text-teal-700 hover:bg-teal-100 transition">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New reminder
          </button>
        </div>
      </SettingsSection>
    </div>
  );
}

