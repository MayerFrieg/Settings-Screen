"use client";

import { useState } from "react";

type Section = 
  | "dashboard" 
  | "clinic-info" 
  | "locations" 
  | "security" 
  | "branding" 
  | "language" 
  | "emails" 
  | "online-booking" 
  | "messaging" 
  | "staff-permissions" 
  | "disciplines" 
  | "treatments" 
  | "products" 
  | "billing-settings" 
  | "payment-methods" 
  | "income-categories" 
  | "taxes"
  | "default";

const documentation: Record<Section, {
  title: string;
  overview: string;
  flow: string[];
  context: string;
  easeOfUse: string[];
  keyFeatures: string[];
  bestPractices?: string[];
}> = {
  dashboard: {
    title: "Dashboard Settings",
    overview: "Monitor your practice's key performance indicators, view booking statistics, and track important metrics at a glance. The dashboard provides a comprehensive overview of your clinic's activity.",
    flow: [
      "Select staff member or view all staff using the filter dropdown",
      "Choose a date range to analyze specific time periods",
      "Review key metrics: Arrived appointments, Online bookings, New patients",
      "Examine detailed booking tables for appointments and cancellations",
      "Track revenue and payment information",
      "Export data for external analysis if needed"
    ],
    context: "The Dashboard is your command center for understanding practice performance. It aggregates data from appointments, bookings, and patient interactions to give you actionable insights. Use it to identify trends, monitor growth, and make data-driven decisions.",
    easeOfUse: [
      "Quick filter options for staff and date ranges",
      "Visual KPI cards for at-a-glance metrics",
      "Organized tables with clear column headers",
      "Responsive design for mobile and desktop viewing",
      "Real-time data updates"
    ],
    keyFeatures: [
      "Staff-specific and practice-wide metrics",
      "Date range filtering for flexible analysis",
      "Arrived appointments tracking",
      "Online booking statistics",
      "New patient identification",
      "Booking and cancellation details",
      "Revenue and payment summaries"
    ],
    bestPractices: [
      "Review dashboard daily to stay informed",
      "Use date ranges to compare periods",
      "Monitor online booking trends regularly",
      "Track new patient acquisition",
      "Analyze cancellation patterns to improve scheduling"
    ]
  },
  "clinic-info": {
    title: "Clinic Info Settings",
    overview: "Manage your clinic's basic information including name, contact details, business registration, and operational settings. This is the foundation of your practice profile.",
    flow: [
      "Update clinic name and display name",
      "Enter contact information (phone, email, address)",
      "Add business registration numbers (if applicable)",
      "Configure timezone and date format preferences",
      "Set clinic hours and availability",
      "Save changes and verify information"
    ],
    context: "Clinic Info is the primary identifier for your practice across the JaneApp system. This information appears on invoices, booking pages, and client communications. Keeping it accurate ensures professional presentation and proper billing.",
    easeOfUse: [
      "Simple form-based editing",
      "Clear field labels and descriptions",
      "One-click save functionality",
      "Visual preview of changes",
      "Validation for required fields"
    ],
    keyFeatures: [
      "Clinic name and branding",
      "Contact information management",
      "Business registration details",
      "Timezone configuration",
      "Date and time format preferences",
      "Clinic hours setup"
    ],
    bestPractices: [
      "Keep contact information current",
      "Verify timezone settings for accurate scheduling",
      "Use consistent naming across all fields",
      "Update business registration when it changes",
      "Review clinic hours seasonally"
    ]
  },
  locations: {
    title: "Locations Settings",
    overview: "Manage physical and virtual locations where services are provided. Configure address details, contact information, and location-specific settings.",
    flow: [
      "Click 'New Location' to add a location",
      "Enter location name and type (physical/virtual)",
      "Add address and contact details",
      "Configure location-specific settings",
      "Set default location if applicable",
      "Edit or archive locations as needed"
    ],
    context: "Locations allow you to organize services and appointments by physical or virtual space. This is essential for multi-location practices, telehealth services, and accurate scheduling. Each location can have unique settings and availability.",
    easeOfUse: [
      "Simple location creation form",
      "Clear distinction between physical and virtual locations",
      "Easy location management with edit/archive options",
      "Visual location list",
      "Quick location switching"
    ],
    keyFeatures: [
      "Multiple location support",
      "Physical and virtual location types",
      "Location-specific contact information",
      "Address management",
      "Location archiving",
      "Default location selection"
    ],
    bestPractices: [
      "Set up all locations before configuring services",
      "Use clear, descriptive location names",
      "Keep address information accurate",
      "Archive unused locations instead of deleting",
      "Set a default location for new appointments"
    ]
  },
  "billing-settings": {
    title: "Billing Settings",
    overview: "Configure payment processing, billing preferences, and financial settings. Manage how payments are collected, processed, and recorded.",
    flow: [
      "Set up payment processing integration",
      "Configure billing preferences and defaults",
      "Set up tax settings and rates",
      "Configure invoice templates and formatting",
      "Set payment terms and policies",
      "Test payment processing"
    ],
    context: "Billing Settings control how your practice handles financial transactions. Proper configuration ensures timely payment collection, accurate record-keeping, and compliance with financial regulations. These settings affect invoices, receipts, and payment processing.",
    easeOfUse: [
      "Step-by-step setup wizards",
      "Clear payment integration instructions",
      "Visual invoice template previews",
      "One-click payment method configuration",
      "Real-time payment status tracking"
    ],
    keyFeatures: [
      "Payment processing integration",
      "Multiple payment method support",
      "Tax rate configuration",
      "Invoice template customization",
      "Payment terms management",
      "Automated payment reminders"
    ],
    bestPractices: [
      "Set up payment processing early",
      "Configure tax rates before first invoice",
      "Test payment flows regularly",
      "Keep payment terms clear and consistent",
      "Review billing settings quarterly"
    ]
  },
  "payment-methods": {
    title: "Payment Methods Settings",
    overview: "Manage accepted payment methods including cash, debit, credit cards, and other options. Configure which methods are available for online booking and in-person payments.",
    flow: [
      "Click 'New Payment Method' to add a method",
      "Enter payment method name and type",
      "Configure online booking availability",
      "Set active status",
      "Edit existing payment methods as needed",
      "Archive unused payment methods"
    ],
    context: "Payment Methods determine how patients can pay for appointments and products. Configuring these correctly ensures smooth transactions and reduces payment processing issues. Online booking availability affects what patients see when booking appointments.",
    easeOfUse: [
      "Simple payment method creation",
      "Clear type selection dropdown",
      "Toggle switches for online booking and active status",
      "Easy edit and archive functionality",
      "Visual payment method list"
    ],
    keyFeatures: [
      "Multiple payment method types",
      "Online booking integration",
      "Active/inactive status control",
      "Payment method archiving",
      "Type categorization (Cash, Debit, Credit Card, etc.)"
    ],
    bestPractices: [
      "Set up all payment methods you accept",
      "Enable online booking for digital payments",
      "Keep payment methods active only when in use",
      "Archive instead of deleting for historical records",
      "Test payment methods after configuration"
    ]
  },
  "income-categories": {
    title: "Income Categories Settings",
    overview: "Organize income by categories to track different revenue streams and configure commission rates for staff. Categories help with financial reporting and staff compensation.",
    flow: [
      "Click 'New Income Category' to create a category",
      "Enter category name (e.g., Product Income, Treatment Income)",
      "Set default commission rate percentage",
      "Configure default referral commission rate (optional)",
      "Set staff-specific commission rates if needed",
      "Assign treatments or products to categories"
    ],
    context: "Income Categories help you break down revenue by type and manage staff commissions based on what they sell. This is essential for accurate financial reporting and fair staff compensation. Categories can be assigned to treatments, products, or services.",
    easeOfUse: [
      "Simple category creation form",
      "Percentage-based commission rate configuration",
      "Staff-specific rate overrides",
      "Apply default rates with one click",
      "Clear assignment tracking"
    ],
    keyFeatures: [
      "Multiple income categories",
      "Default commission rate configuration",
      "Referral commission rate support",
      "Staff-specific commission rates",
      "Treatment and product assignment",
      "Commission rate inheritance"
    ],
    bestPractices: [
      "Create categories before assigning items",
      "Set realistic default commission rates",
      "Review staff-specific rates annually",
      "Keep category names clear and descriptive",
      "Assign all revenue-generating items to categories"
    ]
  },
  taxes: {
    title: "Taxes Settings",
    overview: "Configure tax rates and rules for different locations and services. Manage how taxes are calculated and applied to invoices and payments.",
    flow: [
      "Click 'New Tax' to create a tax rate",
      "Enter tax name (e.g., HST, GST, VAT)",
      "Set tax rate percentage",
      "Select applicable locations",
      "Edit tax rates as regulations change",
      "Archive unused tax rates"
    ],
    context: "Tax Settings ensure accurate tax calculation on invoices and payments. Proper configuration is essential for compliance with local tax regulations. Taxes can be location-specific and applied to different types of transactions.",
    easeOfUse: [
      "Simple tax creation form",
      "Location-based tax assignment",
      "Percentage-based rate configuration",
      "Easy tax editing and archiving",
      "Clear tax assignment tracking"
    ],
    keyFeatures: [
      "Multiple tax rate support",
      "Location-specific tax configuration",
      "Percentage-based tax calculation",
      "Tax assignment tracking",
      "Tax archiving for historical records"
    ],
    bestPractices: [
      "Set up taxes before creating invoices",
      "Keep tax rates updated with regulation changes",
      "Use clear tax names (HST, GST, etc.)",
      "Assign taxes to correct locations",
      "Archive instead of deleting for records"
    ]
  },
  default: {
    title: "Settings Documentation",
    overview: "This settings section helps you configure and manage various aspects of your practice. Use the information below to understand how to best utilize these settings.",
    flow: [
      "Review the overview and context sections",
      "Follow the step-by-step flow for setup",
      "Explore key features available",
      "Implement best practices for optimal results"
    ],
    context: "Settings allow you to customize JaneApp to match your practice's needs. Proper configuration ensures efficient operations, accurate billing, and a smooth experience for both staff and patients.",
    easeOfUse: [
      "Intuitive interface design",
      "Clear field labels and descriptions",
      "Helpful tooltips and guidance",
      "Save and cancel options",
      "Visual feedback for changes"
    ],
    keyFeatures: [
      "Comprehensive configuration options",
      "Real-time updates",
      "Validation and error handling",
      "Search and filter capabilities",
      "Export and import options"
    ],
    bestPractices: [
      "Review settings regularly",
      "Test changes before going live",
      "Keep documentation updated",
      "Train staff on new features",
      "Back up settings before major changes"
    ]
  }
};

export default function JaneAppDocumentation({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const doc = documentation[section] || documentation.default;

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

