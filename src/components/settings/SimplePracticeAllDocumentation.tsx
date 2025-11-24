"use client";

import SimplePracticeDocumentation from "./SimplePracticeDocumentation";

type SectionId =
  | "profile"
  | "clinical-info"
  | "notifications"
  | "practice-details"
  | "business-files"
  | "plan-info"
  | "data-export"
  | "demo-client"
  | "team-members"
  | "client-billing-documents"
  | "insurance-billing"
  | "payers"
  | "online-payments"
  | "autopay"
  | "services"
  | "products"
  | "client-portal-permissions"
  | "calendar"
  | "contact-form"
  | "prescreener"
  | "widgets"
  | "template-library"
  | "shareable-documents"
  | "email"
  | "text"
  | "voice"
  | "secure-messaging";

export default function SimplePracticeAllDocumentation() {
  const sections: Array<{ id: SectionId; title: string; category: string; href: string }> = [
    { id: "profile", title: "Profile and Security", category: "OPERATIONS", href: "/simplepractice/profile" },
    { id: "clinical-info", title: "Clinical Info", category: "OPERATIONS", href: "/simplepractice/clinical-info" },
    { id: "notifications", title: "Notification Preferences", category: "OPERATIONS", href: "/simplepractice/notifications" },
    { id: "practice-details", title: "Practice Details", category: "OPERATIONS", href: "/simplepractice/practice-details" },
    { id: "business-files", title: "Business Files", category: "OPERATIONS", href: "/simplepractice/business-files" },
    { id: "plan-info", title: "Plan Info", category: "OPERATIONS", href: "/simplepractice/plan-info" },
    { id: "data-export", title: "Data Export", category: "OPERATIONS", href: "/simplepractice/data-export" },
    { id: "demo-client", title: "Demo Client", category: "OPERATIONS", href: "/simplepractice/demo-client" },
    { id: "team-members", title: "Team Members", category: "OPERATIONS", href: "/simplepractice/team-members" },
    { id: "client-billing-documents", title: "Client Billing Documents", category: "BILLING", href: "/simplepractice/client-billing-documents" },
    { id: "insurance-billing", title: "Insurance Billing", category: "BILLING", href: "/simplepractice/insurance-billing" },
    { id: "payers", title: "Payers", category: "BILLING", href: "/simplepractice/payers" },
    { id: "online-payments", title: "Online Payments", category: "BILLING", href: "/simplepractice/online-payments" },
    { id: "autopay", title: "AutoPay", category: "BILLING", href: "/simplepractice/autopay" },
    { id: "services", title: "Services", category: "BILLING", href: "/simplepractice/services" },
    { id: "products", title: "Products", category: "BILLING", href: "/simplepractice/products" },
    { id: "client-portal-permissions", title: "Client Portal Permissions", category: "CLIENT CARE", href: "/simplepractice/client-portal-permissions" },
    { id: "calendar", title: "Calendar", category: "CLIENT CARE", href: "/simplepractice/calendar" },
    { id: "contact-form", title: "Contact Form", category: "CLIENT CARE", href: "/simplepractice/contact-form" },
    { id: "prescreener", title: "Prescreener", category: "CLIENT CARE", href: "/simplepractice/prescreener" },
    { id: "widgets", title: "Widgets", category: "CLIENT CARE", href: "/simplepractice/widgets" },
    { id: "template-library", title: "Template Library", category: "CLIENT CARE", href: "/simplepractice/template-library" },
    { id: "shareable-documents", title: "Shareable Documents", category: "CLIENT CARE", href: "/simplepractice/shareable-documents" },
    { id: "email", title: "Email", category: "CLIENT CARE", href: "/simplepractice/email" },
    { id: "text", title: "Text", category: "CLIENT CARE", href: "/simplepractice/text" },
    { id: "voice", title: "Voice", category: "CLIENT CARE", href: "/simplepractice/voice" },
    { id: "secure-messaging", title: "Secure Messaging", category: "CLIENT CARE", href: "/simplepractice/secure-messaging" },
  ];

  const sectionsByCategory = sections.reduce<Record<string, typeof sections>>((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Documentation</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Documentation</h2>
          <p className="text-sm text-gray-700">
            Read guidance for each SimplePractice settings area. Expand a card to see the detailed flow and tips.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {Object.entries(sectionsByCategory).map(([category, categorySections]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{category}</h3>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {categorySections.length} areas
              </span>
            </div>

            <div className="space-y-6">
              {categorySections.map((section) => (
                <div
                  key={section.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm shadow-purple-50/60 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-600">{category}</p>
                      <h4 className="text-base font-semibold text-gray-900">{section.title}</h4>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-sm font-semibold">
                      →
                    </div>
                  </div>
                  <div className="p-4">
                    <SimplePracticeDocumentation section={section.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

