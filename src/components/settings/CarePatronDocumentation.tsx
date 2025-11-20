"use client";

import { useState } from "react";

type Section = "profile" | "workspace" | "billing" | "insurance" | "scheduling" | "workflows" | "trash";

const documentation: Record<Section, {
  title: string;
  overview: string;
  flow: string[];
  context: string;
  easeOfUse: string[];
  keyFeatures: string[];
  bestPractices?: string[];
}> = {
  profile: {
    title: "My Profile Settings",
    overview: "Manage your personal account details, preferences, and authentication settings. This section allows you to control how you interact with CarePatron and how others see your profile information.",
    flow: [
      "Start by updating your personal details (name, email, phone) in the Details tab",
      "Configure your services and availability to control when clients can book with you",
      "Connect external apps (Gmail, Calendar, Zoom) for seamless integration",
      "Set notification preferences to stay informed without being overwhelmed",
      "Enable Multi-Factor Authentication for enhanced security"
    ],
    context: "Your profile is the foundation of your CarePatron account. It connects your personal information with your professional services, ensuring clients can reach you and book appointments seamlessly. The settings here affect how you appear to clients, when you're available, and how you receive important updates.",
    easeOfUse: [
      "Tab-based navigation makes it easy to find specific settings",
      "Edit buttons are clearly visible when you need to make changes",
      "Real-time preview of how changes affect your profile",
      "One-click connections for popular apps",
      "Granular control over notifications with clear descriptions"
    ],
    keyFeatures: [
      "Personal information management with avatar support",
      "Language and timezone configuration for global practitioners",
      "Theme customization to match your brand",
      "Service assignment and pricing control",
      "Date-specific availability overrides",
      "Multi-app integration support",
      "Flexible notification preferences"
    ],
    bestPractices: [
      "Keep your profile photo and contact information up to date",
      "Set your timezone correctly to avoid scheduling conflicts",
      "Review your availability regularly to reflect your current schedule",
      "Enable MFA for better account security",
      "Connect your calendar to prevent double bookings"
    ]
  },
  workspace: {
    title: "Workspace Settings",
    overview: "Configure your practice's workspace settings including business information, locations, branding, subscriptions, and team-wide preferences. This section controls how your entire organization appears and operates.",
    flow: [
      "Set up your business information (name, NPI, website) in Details tab",
      "Add physical and virtual locations where services are provided",
      "Customize workspace branding (logo, colors) for client-facing materials",
      "Review subscription plan and usage in Subscriptions tab",
      "Customize client fields to match your practice's data needs",
      "Configure reminders and communications preferences",
      "Monitor storage, AI tokens, and task usage"
    ],
    context: "Workspace settings define your practice's identity and operational parameters. These settings affect all team members and clients, ensuring consistent branding, proper billing information, and efficient workflow management. Changes here impact invoices, online booking, and client communications.",
    easeOfUse: [
      "Clear separation between personal and workspace settings",
      "Visual location management with virtual/physical distinction",
      "One-click theme customization with color picker",
      "Usage metrics displayed with progress bars for easy monitoring",
      "Simple field customization with drag-and-drop organization",
      "Template-based reminder configuration"
    ],
    keyFeatures: [
      "Multi-location support (physical and virtual)",
      "Custom branding for invoices and booking pages",
      "Subscription management with usage tracking",
      "Flexible client field customization",
      "Automated reminder system",
      "Team-wide communication preferences",
      "Tax rate management"
    ],
    bestPractices: [
      "Keep business information current for billing and compliance",
      "Set up all locations before configuring services",
      "Use consistent branding across all materials",
      "Monitor subscription usage to avoid overages",
      "Customize client fields to match your documentation needs",
      "Set up reminders early to reduce no-shows"
    ]
  },
  billing: {
    title: "Billing Settings",
    overview: "Manage payment processing, billing information, tax rates, and invoice templates. This section ensures you can accept payments efficiently and maintain accurate financial records.",
    flow: [
      "Connect Stripe for payment processing in Billing details tab",
      "Configure billing settings (tax number, currency)",
      "Set up tax rates for different services or locations",
      "Enter billing address for invoices and receipts",
      "Customize invoice templates in Invoices tab",
      "Configure invoice reminders for overdue payments",
      "Set up automation for recurring billing documents"
    ],
    context: "Billing settings control how you receive payments and present invoices to clients. Proper configuration ensures compliance with tax regulations, professional presentation of invoices, and timely payment collection. These settings directly impact your revenue and client relationships.",
    easeOfUse: [
      "Step-by-step Stripe integration with clear instructions",
      "Visual invoice template previews",
      "One-click tax rate management",
      "Automated reminder configuration",
      "Real-time payment status tracking",
      "Template customization with live preview"
    ],
    keyFeatures: [
      "Stripe payment integration",
      "Multiple invoice templates (Simple, Contemporary, Modern)",
      "Customizable invoice branding",
      "Tax rate management",
      "Automated invoice reminders",
      "Billing address management",
      "Automated document generation"
    ],
    bestPractices: [
      "Set up Stripe early to enable online payments",
      "Choose invoice template that matches your brand",
      "Configure tax rates before sending first invoice",
      "Set up reminders to reduce late payments",
      "Keep billing address current for tax compliance",
      "Review automation settings monthly"
    ]
  },
  insurance: {
    title: "Insurance Settings",
    overview: "Manage insurance payers, billing profiles, and eligibility verification. This section helps you work efficiently with insurance companies and ensure proper claim submission.",
    flow: [
      "Add insurance payers in Payers tab (search or manual entry)",
      "Set up default billing profile for standard claims",
      "Create additional billing profiles for specific payers or practitioners",
      "Configure eligibility verification in Eligibility tab (requires paid plan)",
      "Link practitioners to appropriate billing profiles",
      "Review payer-specific requirements and settings"
    ],
    context: "Insurance settings streamline the complex process of working with multiple insurance companies. Proper configuration ensures claims are submitted correctly, reduces denials, and helps you track which payers you work with. Billing profiles allow different practitioners or locations to use different billing information.",
    easeOfUse: [
      "Search functionality to quickly find insurance payers",
      "Visual billing profile management",
      "Clear separation between default and custom profiles",
      "One-click payer addition",
      "Eligibility verification with upgrade prompt",
      "Profile assignment with clear visual indicators"
    ],
    keyFeatures: [
      "Insurance payer database integration",
      "Multiple billing profile support",
      "Payer-specific billing information",
      "Eligibility verification (paid plans)",
      "Search and filter capabilities",
      "Profile assignment to practitioners"
    ],
    bestPractices: [
      "Add all insurance payers you work with upfront",
      "Set up billing profiles for each practitioner",
      "Use default profile for standard cases",
      "Create custom profiles for special requirements",
      "Verify eligibility before appointments when possible",
      "Keep payer information updated"
    ]
  },
  scheduling: {
    title: "Scheduling Settings",
    overview: "Configure locations, services, and online booking preferences. This section controls how appointments are scheduled, what services are available, and how clients interact with your booking system.",
    flow: [
      "Add locations (physical and virtual) in Locations tab",
      "Configure services with pricing and duration in Services tab",
      "Set up online booking policies in Online Booking tab",
      "Configure cancellation policies and timeframes",
      "Set payment requirements for online bookings",
      "Customize booking page appearance",
      "Test booking flow from client perspective"
    ],
    context: "Scheduling settings determine how clients find and book appointments with you. Well-configured settings reduce no-shows, ensure proper payment collection, and create a smooth booking experience. These settings directly impact your calendar management and client satisfaction.",
    easeOfUse: [
      "Tab-based organization for different aspects",
      "Visual service list with color coding",
      "Search functionality for large service lists",
      "Template-based location setup",
      "Clear policy configuration with examples",
      "Live preview of booking page appearance",
      "One-click service activation/deactivation"
    ],
    keyFeatures: [
      "Multi-location scheduling support",
      "Service catalog management",
      "Online booking configuration",
      "Cancellation policy setup",
      "Payment integration for bookings",
      "Booking time restrictions",
      "Customizable booking page appearance"
    ],
    bestPractices: [
      "Set up all locations before configuring services",
      "Use clear, descriptive service names",
      "Set realistic booking windows (not too far in advance)",
      "Configure cancellation policies to reduce no-shows",
      "Require payment for online bookings when possible",
      "Test booking flow regularly",
      "Keep service pricing current"
    ]
  },
  workflows: {
    title: "Workflows Settings",
    overview: "Automate communications and reminders through customizable workflow templates. This section helps you maintain consistent client communication while reducing manual work.",
    flow: [
      "Browse available workflow templates in Templates tab",
      "Review templates organized by category (Scheduling, Billing, etc.)",
      "Activate or customize templates for your practice",
      "Set up basic reminders in Basic reminders tab",
      "Configure appointment reminder timing and frequency",
      "Set up invoice reminder schedules",
      "Test workflows to ensure proper delivery"
    ],
    context: "Workflows automate routine communications, saving time while ensuring clients receive timely, consistent information. Templates provide proven communication patterns, while reminders help reduce no-shows and late payments. Well-configured workflows improve client experience and practice efficiency.",
    easeOfUse: [
      "Template library with clear descriptions",
      "Category-based organization",
      "One-click template activation",
      "Simple reminder configuration",
      "Visual workflow preview",
      "Status indicators (Active/Inactive)",
      "Search and filter capabilities"
    ],
    keyFeatures: [
      "Pre-built workflow templates",
      "Multi-channel support (Email, SMS)",
      "Automated appointment reminders",
      "Invoice payment reminders",
      "Customizable message templates",
      "Timing and frequency controls",
      "Workflow status management"
    ],
    bestPractices: [
      "Activate essential templates early (appointment confirmations, reminders)",
      "Set reminders 24-48 hours before appointments",
      "Use SMS for time-sensitive reminders",
      "Customize templates to match your communication style",
      "Review workflow performance regularly",
      "Test new workflows before full activation",
      "Keep reminder timing consistent"
    ]
  },
  trash: {
    title: "Trash Settings",
    overview: "Recover accidentally deleted items including clients, appointments, documents, and other data. This section provides a safety net for restoring important information.",
    flow: [
      "Deleted items automatically move to Trash",
      "View all deleted items in chronological order",
      "Search or filter to find specific items",
      "Select items to restore",
      "Permanently delete items if needed",
      "Items are automatically purged after retention period"
    ],
    context: "The Trash section provides a safety mechanism for accidental deletions. It allows you to recover important data like client records, appointments, or documents that were deleted by mistake. This feature is essential for data protection and peace of mind.",
    easeOfUse: [
      "Simple restore process with one click",
      "Clear visual indication of deleted items",
      "Search functionality to find specific items",
      "Bulk restore options",
      "Clear retention period information",
      "Permanent deletion confirmation"
    ],
    keyFeatures: [
      "Automatic item recovery",
      "Chronological deletion history",
      "Search and filter capabilities",
      "Bulk restore operations",
      "Retention period management",
      "Permanent deletion option"
    ],
    bestPractices: [
      "Review Trash regularly for accidental deletions",
      "Restore items promptly when discovered",
      "Understand retention periods for your plan",
      "Use permanent deletion carefully",
      "Keep important backups outside the system",
      "Train team on restore procedures"
    ]
  }
};

export default function CarePatronDocumentation({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const doc = documentation[section];

  if (!doc) return null;

  return (
    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
            <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
            <p className="text-sm text-gray-600">Detailed guide and best practices</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-teal-600 hover:text-teal-700 transition"
        >
          <svg
            className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-teal-200">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{doc.overview}</p>
          </div>

          {/* Context */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Context & Purpose</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{doc.context}</p>
          </div>

          {/* Flow */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Step-by-Step Flow</h4>
            <ol className="space-y-2">
              {doc.flow.map((step, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-xs flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Ease of Use */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Ease of Use Features</h4>
            <ul className="space-y-2">
              {doc.easeOfUse.map((feature, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-700">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {doc.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          {doc.bestPractices && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Best Practices</h4>
              <ul className="space-y-2">
                {doc.bestPractices.map((practice, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-700">
                    <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="flex-1">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

