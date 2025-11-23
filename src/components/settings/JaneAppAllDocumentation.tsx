"use client";

import JaneAppDocumentation from "./JaneAppDocumentation";

export default function JaneAppAllDocumentation() {
  const sections: Array<{
    id:
      | "dashboard"
      | "clinic-info"
      | "locations"
      | "security"
      | "branding"
      | "language"
      | "emails"
      | "online-booking"
      | "reminders-notifications"
      | "messaging"
      | "staff-permissions"
      | "dashboard-permissions"
      | "supervision"
      | "wait-lists"
      | "patient-form-fields"
      | "test-patient"
      | "online-appointments-for-groups"
      | "ai-scribe"
      | "schedule-settings"
      | "forms-surveys"
      | "integrations"
      | "workshop"
      | "disciplines"
      | "treatments"
      | "products"
      | "billing-settings"
      | "reconciliation-date"
      | "adjustments"
      | "billing-codes"
      | "fees"
      | "payment-methods"
      | "income-categories"
      | "taxes";
    title: string;
  }> = [
    { id: "dashboard", title: "Dashboard" },
    { id: "clinic-info", title: "Clinic Info" },
    { id: "locations", title: "Locations" },
    { id: "security", title: "Security" },
    { id: "branding", title: "Branding" },
    { id: "language", title: "Language" },
    { id: "emails", title: "Emails" },
    { id: "online-booking", title: "Online Booking" },
    { id: "reminders-notifications", title: "Reminders & Notifications" },
    { id: "messaging", title: "Messaging" },
    { id: "staff-permissions", title: "Staff Permissions" },
    { id: "dashboard-permissions", title: "Dashboard Permissions" },
    { id: "supervision", title: "Supervision" },
    { id: "wait-lists", title: "Wait Lists" },
    { id: "patient-form-fields", title: "Patient Form Fields" },
    { id: "test-patient", title: "Test Patient" },
    { id: "online-appointments-for-groups", title: "Online Appointments for Groups" },
    { id: "ai-scribe", title: "AI Scribe" },
    { id: "schedule-settings", title: "Schedule Settings" },
    { id: "forms-surveys", title: "Forms & Surveys" },
    { id: "integrations", title: "Integrations" },
    { id: "workshop", title: "Workshop" },
    { id: "disciplines", title: "Disciplines" },
    { id: "treatments", title: "Treatments, Classes & Group Appointments" },
    { id: "products", title: "Products" },
    { id: "billing-settings", title: "Billing Settings" },
    { id: "reconciliation-date", title: "Reconciliation Date" },
    { id: "adjustments", title: "Adjustments" },
    { id: "billing-codes", title: "Billing Codes" },
    { id: "fees", title: "Fees" },
    { id: "payment-methods", title: "Payment Methods" },
    { id: "income-categories", title: "Income Categories" },
    { id: "taxes", title: "Taxes" },
  ];

  return (
    <div className="space-y-6">
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

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id}>
            <JaneAppDocumentation section={section.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

