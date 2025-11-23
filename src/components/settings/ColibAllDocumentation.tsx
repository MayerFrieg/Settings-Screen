"use client";

import ColibDocumentation from "./ColibDocumentation";

export default function ColibAllDocumentation() {
  const adminSections: Array<{ id: "general" | "appointments" | "booking-page" | "waitlist" | "team" | "communications" | "clients" | "notes" | "scheduler" | "web-page" | "recalls" | "forms" | "invoices" | "payments" | "telehealth" | "rooms" | "security" | "inventory" | "online-sales"; title: string }> = [
    { id: "general", title: "General" },
    { id: "appointments", title: "Appointments" },
    { id: "booking-page", title: "Booking Page" },
    { id: "waitlist", title: "Waitlist" },
    { id: "team", title: "Team" },
    { id: "communications", title: "Communications" },
    { id: "clients", title: "Clients" },
    { id: "notes", title: "Notes" },
    { id: "scheduler", title: "Scheduler" },
    { id: "web-page", title: "Web Page" },
    { id: "recalls", title: "Recalls" },
    { id: "forms", title: "Forms" },
    { id: "invoices", title: "Invoices" },
    { id: "payments", title: "Payments" },
    { id: "telehealth", title: "Telehealth" },
    { id: "rooms", title: "Rooms" },
    { id: "security", title: "Security" },
    { id: "inventory", title: "Inventory" },
    { id: "online-sales", title: "Online Sales" },
  ];

  const personalSections: Array<{ id: "profile" | "password" | "availability" | "calendar-sync" | "personal-security" | "signature"; title: string }> = [
    { id: "profile", title: "Profile" },
    { id: "password", title: "Password" },
    { id: "availability", title: "Availability" },
    { id: "calendar-sync", title: "Calendar Sync." },
    { id: "personal-security", title: "Security" },
    { id: "signature", title: "Signature" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Documentation</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Documentation</h2>
      </div>

      {/* ADMIN Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ADMIN Settings</h3>
        <div className="space-y-6">
          {adminSections.map((section) => (
            <div key={section.id}>
              <ColibDocumentation section={section.id} />
            </div>
          ))}
        </div>
      </div>

      {/* PERSONAL Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">PERSONAL Settings</h3>
        <div className="space-y-6">
          {personalSections.map((section) => (
            <div key={section.id}>
              <ColibDocumentation section={section.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

