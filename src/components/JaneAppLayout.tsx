import { ReactNode } from "react";

interface JaneAppLayoutProps {
  children: ReactNode;
  activeMenuItem?: "dashboard" | "account-recommendations" | "jane-payments" | "address-book" | "jane-subscription" | "clinic-info" | "locations" | "security" | "branding" | "language" | "emails" | "mass-welcome-email" | "online-booking" | "reminders-notifications" | "messaging" | "schedule-settings" | "forms-surveys" | "integrations" | "workshop" | "staff-permissions" | "dashboard-permissions" | "supervision" | "wait-lists" | "patient-form-fields" | "test-patient" | "online-appointments-for-groups" | "ai-scribe" | "disciplines" | "treatments" | "products" | "billing-settings" | "reconciliation-date" | "adjustments" | "billing-codes" | "fees" | "payment-methods" | "income-categories" | "taxes" | "merge-history" | "schedule-import";
  onMenuItemClick?: (item: "dashboard" | "account-recommendations" | "jane-payments" | "address-book" | "jane-subscription" | "clinic-info" | "locations" | "security" | "branding" | "language" | "emails" | "mass-welcome-email" | "online-booking" | "reminders-notifications" | "messaging" | "schedule-settings" | "forms-surveys" | "integrations" | "workshop" | "staff-permissions" | "dashboard-permissions" | "supervision" | "wait-lists" | "patient-form-fields" | "test-patient" | "online-appointments-for-groups" | "ai-scribe" | "disciplines" | "treatments" | "products" | "billing-settings" | "reconciliation-date" | "adjustments" | "billing-codes" | "fees" | "payment-methods" | "income-categories" | "taxes" | "merge-history" | "schedule-import") => void;
}

export default function JaneAppLayout({ children, activeMenuItem = "dashboard", onMenuItemClick }: JaneAppLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-teal-600 z-50 flex items-center justify-between px-6">
        {/* Left Navigation */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Day
            </a>
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium">Schedule</a>
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium">Patients</a>
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium">Staff</a>
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium">Billing</a>
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium">Reports</a>
            <a href="#" className="text-white font-semibold text-sm bg-teal-700 px-3 py-1 rounded">Settings</a>
          </nav>
        </div>

        {/* Center Logo */}
        <button
          onClick={() => window.location.href = '/'}
          className="absolute left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg hover:text-white/90 transition cursor-pointer"
        >
          Jane GraceHealth
        </button>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-1">
            Need Help?
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-white/90">
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
              GC
            </div>
            <span className="text-sm font-medium">GC Grace Canada</span>
          </div>
        </div>
      </div>

      <div className="flex w-full pt-16">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            {/* Preferences Section */}
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Preferences</h2>
              
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Q Settings Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:border-teal-500 focus:bg-white"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => onMenuItemClick?.("dashboard")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "dashboard" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Dashboard
                </button>
                <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-50">
                  Account
                </button>
                <button
                  onClick={() => onMenuItemClick?.("account-recommendations")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "account-recommendations" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Account Recommendations
                  <span className="ml-auto w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-700">5</span>
                </button>
                <button
                  onClick={() => onMenuItemClick?.("jane-payments")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "jane-payments" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Jane Payments
                </button>
                <button
                  onClick={() => onMenuItemClick?.("address-book")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "address-book" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Address Book
                </button>
                <button
                  onClick={() => onMenuItemClick?.("jane-subscription")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "jane-subscription" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Jane Subscription
                </button>
              </nav>
            </div>

            {/* Settings Section */}
            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Settings</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => onMenuItemClick?.("clinic-info")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "clinic-info" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Clinic Info
                </button>
                <button
                  onClick={() => onMenuItemClick?.("locations")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "locations" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Locations
                </button>
                <button
                  onClick={() => onMenuItemClick?.("security")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "security" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => onMenuItemClick?.("branding")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "branding" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Branding
                </button>
                <button
                  onClick={() => onMenuItemClick?.("language")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "language" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Language
                </button>
                <button
                  onClick={() => onMenuItemClick?.("emails")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "emails" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Emails
                </button>
                <button
                  onClick={() => onMenuItemClick?.("mass-welcome-email")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "mass-welcome-email" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Mass Welcome Email
                </button>
                <button
                  onClick={() => onMenuItemClick?.("online-booking")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "online-booking" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Online Booking
                </button>
                <button
                  onClick={() => onMenuItemClick?.("reminders-notifications")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "reminders-notifications" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Reminders & Notifications
                </button>
                <button
                  onClick={() => onMenuItemClick?.("messaging")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "messaging" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Messaging
                  <span className="ml-auto px-2 py-0.5 text-xs font-semibold text-purple-700 bg-purple-100 rounded">
                    BETA
                  </span>
                </button>
                <button
                  onClick={() => onMenuItemClick?.("staff-permissions")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "staff-permissions" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Staff Permissions
                </button>
                <button
                  onClick={() => onMenuItemClick?.("dashboard-permissions")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "dashboard-permissions" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Dashboard Permissions
                </button>
                <button
                  onClick={() => onMenuItemClick?.("supervision")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "supervision" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Supervision
                </button>
                <button
                  onClick={() => onMenuItemClick?.("wait-lists")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "wait-lists" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Wait Lists
                </button>
                <button
                  onClick={() => onMenuItemClick?.("patient-form-fields")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "patient-form-fields" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Patient Form Fields
                </button>
                <button
                  onClick={() => onMenuItemClick?.("test-patient")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "test-patient" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Test Patient
                </button>
                <button
                  onClick={() => onMenuItemClick?.("online-appointments-for-groups")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "online-appointments-for-groups" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Online Appointments for Groups
                </button>
                <button
                  onClick={() => onMenuItemClick?.("ai-scribe")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "ai-scribe" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  AI Scribe
                  <span className="ml-auto px-2 py-0.5 text-xs font-semibold text-orange-700 bg-orange-100 rounded">
                    New
                  </span>
                </button>
                <button
                  onClick={() => onMenuItemClick?.("schedule-settings")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "schedule-settings" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Schedule Settings
                </button>
                <button
                  onClick={() => onMenuItemClick?.("forms-surveys")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "forms-surveys" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Forms & Surveys
                </button>
                <button
                  onClick={() => onMenuItemClick?.("integrations")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "integrations" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Integrations
                </button>
                <button
                  onClick={() => onMenuItemClick?.("workshop")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "workshop" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Workshop
                </button>
              </nav>
            </div>

            {/* Offerings Section */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Offerings</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => onMenuItemClick?.("disciplines")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "disciplines" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Disciplines
                </button>
                <button
                  onClick={() => onMenuItemClick?.("treatments")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "treatments" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Treatments, Classes & Group Appointments
                </button>
                <button
                  onClick={() => onMenuItemClick?.("products")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "products" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Products
                </button>
              </nav>
            </div>

            {/* Billing Section */}
            <div className="mt-6">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">Billing</h2>
              <nav className="space-y-1">
                <button
                  onClick={() => onMenuItemClick?.("billing-settings")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "billing-settings" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Billing Settings
                  <span className="ml-auto px-2 py-0.5 text-xs font-semibold text-orange-700 bg-orange-100 rounded">
                    New
                  </span>
                </button>
                <button
                  onClick={() => onMenuItemClick?.("reconciliation-date")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "reconciliation-date" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Reconciliation Date
                </button>
                <button
                  onClick={() => onMenuItemClick?.("adjustments")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "adjustments" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Adjustments
                </button>
                <button
                  onClick={() => onMenuItemClick?.("billing-codes")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "billing-codes" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Billing Codes
                </button>
                <button
                  onClick={() => onMenuItemClick?.("fees")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "fees" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Fees
                </button>
                <button
                  onClick={() => onMenuItemClick?.("payment-methods")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "payment-methods" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Payment Methods
                </button>
                <button
                  onClick={() => onMenuItemClick?.("income-categories")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "income-categories" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Income Categories
                </button>
                <button
                  onClick={() => onMenuItemClick?.("taxes")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "taxes" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Taxes
                </button>
                <button
                  onClick={() => onMenuItemClick?.("merge-history")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "merge-history" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Merge History
                </button>
                <button
                  onClick={() => onMenuItemClick?.("schedule-import")}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    activeMenuItem === "schedule-import" 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Schedule an Import
                </button>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

