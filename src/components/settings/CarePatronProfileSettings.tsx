"use client";

import { useState } from "react";
import { SettingRow, SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "details" | "services" | "connected" | "notifications";

export default function CarePatronProfileSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="profile" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">My Profile</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {[
          { id: "details" as Tab, label: "Details" },
          { id: "services" as Tab, label: "Services and availability" },
          { id: "connected" as Tab, label: "Connected apps" },
          { id: "notifications" as Tab, label: "Notifications" },
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
        {activeTab === "details" && <DetailsTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "connected" && <ConnectedAppsTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </div>
  );
}

function DetailsTab() {
  return (
    <div className="space-y-6">
      {/* Personal Details */}
      <SettingsSection title="Personal details" description="">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white">
                MF
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Mayer Frieg</p>
                <p className="text-sm text-gray-600">mayer@queensoft.net</p>
              </div>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">First name</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">Mayer</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Last name</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">Frieg</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Email</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">mayer@queensoft.net</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Phone number</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">+20 128 824 4283</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-gray-600">Password</p>
              <p className="mt-1 text-sm font-mono text-gray-900">********</p>
              <button className="mt-2 text-sm text-teal-600 hover:text-teal-700">Change password</button>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Language and Timezone */}
      <SettingsSection title="Language and timezone" description="Manage settings for your language and timezone">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-200/80">Language: <span className="font-semibold text-gray-100">English (US)</span></p>
            <p className="mt-1 text-sm text-gray-200/80">Timezone: <span className="font-semibold text-gray-100">Africa/Cairo</span></p>
          </div>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
            Edit
          </button>
        </div>
      </SettingsSection>

      {/* Theme */}
      <SettingsSection title="Theme" description="Choose between light and dark mode, and customize your theme preferences">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-200/80">Colour mode: <span className="font-semibold text-gray-100">Light</span></p>
            <div className="mt-2 flex items-center gap-2">
              <p className="text-sm text-gray-200/80">Theme: </p>
              <span className="font-semibold text-gray-100">Caribbean green</span>
              <div className="h-5 w-5 rounded border border-white/20 bg-[#00BFA5]"></div>
            </div>
          </div>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-50">
            Edit
          </button>
        </div>
      </SettingsSection>

      {/* Multi-Factor Authentication */}
      <SettingsSection
        title="Multi-Factor Authentication (MFA)"
        description="Secure your account by enabling Multi-Factor Authentication (MFA) for an extra layer of protection. Verify your identity through a secondary method to prevent unauthorized access."
      >
        <button className="rounded-lg border border-teal-500 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100">
          Enable MFA
        </button>
      </SettingsSection>
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="space-y-6">
      {/* Assigned Services */}
      <SettingsSection
        title="Assigned services"
        description="View and manage your assigned services, adjusting the prices to reflect your custom rates."
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200/80">Services assigned to you</span>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="space-y-2 rounded-xl border border-white/10 bg-black/20 p-4">
            {[
              "[Copy] Family Therapy",
              "Diagnostic Evaluation",
              "Family Therapy",
              "Group Therapy",
              "Initial Consultation - No Charge",
              "Therapeutic activities",
              "Therapeutic exercises",
            ].map((service) => (
              <div key={service} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-gray-100">{service}</p>
                  <p className="text-xs text-gray-300/70">50 mins • $100.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SettingsSection>

      {/* Date Specific Hours */}
      <SettingsSection
        title="Date specific hours"
        description="Add dates when your availability changes from your scheduled hours or to offer a service on a specific date."
      >
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-white/10">
            <button className="border-b-2 border-teal-500 px-4 pb-2 text-sm font-medium text-teal-600">
              Upcoming
            </button>
            <button className="px-4 pb-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              Past
            </button>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center">
            <p className="text-sm text-gray-300/70">No date overrides have been found.</p>
            <button className="mt-3 text-sm font-medium text-teal-600 hover:text-teal-700">
              + New date override
            </button>
          </div>
        </div>
      </SettingsSection>

      {/* Availability */}
      <SettingsSection
        title="Availability"
        description="Create schedules based on your availability and desired service offerings at specific times to determine your online booking availability."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-teal-400/30 bg-teal-400/10 p-3">
            <div className="flex gap-2">
              <svg className="h-5 w-5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-teal-200">
                Services offering group events should use a new schedule to reduce the available hours it can be booked by clients online.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
                My availability
              </button>
              <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
                + New
              </button>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function ConnectedAppsTab() {
  const apps = [
    {
      name: "Gmail",
      icon: "📧",
      description: "Add Gmail accounts or Google group list.",
    },
    {
      name: "Google Calendar",
      icon: "📅",
      description: "Add calendars accounts or Google group list.",
    },
    {
      name: "Microsoft Outlook",
      icon: "📬",
      description: "Add a Outlook, Office365 or Exchange account.",
    },
    {
      name: "Microsoft Calendar",
      icon: "📆",
      description: "Add a Outlook, Office365 or Exchange account.",
    },
    {
      name: "Zoom",
      icon: "🎥",
      description: "Zoom",
    },
  ];

  return (
    <div className="space-y-6">
      <SettingsSection title="Connected apps" description="Connect your favorite apps to streamline your workflow">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl">
                    {app.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">{app.name}</p>
                    <p className="mt-1 text-xs text-gray-300/70">{app.description}</p>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700">
                Connect
              </button>
            </div>
          ))}
        </div>
      </SettingsSection>
    </div>
  );
}

function NotificationsTab() {
  const notificationCategories = [
    {
      title: "Scheduling • In-app",
      description: "Receive notifications when a team member or client books, reschedules, or cancels their appointment.",
      inApp: true,
      email: false,
    },
    {
      title: "Practitioner scheduling • Email",
      description: "Receive notifications for appointments that you have created, rescheduled, or cancelled yourself.",
      inApp: false,
      email: true,
    },
    {
      title: "Billing and payment • In-app",
      description: "Receive notifications for client payment updates and reminders.",
      inApp: true,
      email: false,
    },
    {
      title: "Client and documentation • In-app",
      description: "Receive notifications for client updates and documentation changes.",
      inApp: true,
      email: false,
    },
  ];

  return (
    <div className="space-y-6">
      <SettingsSection
        title="Notification preferences"
        description="Choose the notifications you'd like to receive for activities and recommendations."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200/80">Manage your notification preferences</span>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
          {notificationCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-100">{category.title}</p>
                  <p className="mt-1 text-sm text-gray-300/70">{category.description}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-300/70">In-app:</span>
                  <span className={category.inApp ? "text-teal-600" : "text-gray-400"}>
                    {category.inApp ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300/70">Email:</span>
                  <span className={category.email ? "text-teal-600" : "text-gray-400"}>
                    {category.email ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SettingsSection>
    </div>
  );
}

