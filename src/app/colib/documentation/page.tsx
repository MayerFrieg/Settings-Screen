"use client";

import ColibAllDocumentation from "@/components/settings/ColibAllDocumentation";

export default function ColibDocumentationPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {/* Colib Branding */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-lime-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">CB</span>
            </div>
            <span className="text-gray-800 font-semibold text-lg">Colib</span>
          </div>

          {/* Menu Items */}
          <nav className="flex gap-6">
            <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Clients</a>
            <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Appointments</a>
            <a href="#" className="text-gray-900 hover:text-gray-700 text-sm font-medium">Billing</a>
            <a href="/colib" className="text-teal-600 text-sm font-medium">Settings</a>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">MF</span>
            </div>
            <span className="text-sm font-medium">Mayer Frieg</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-16 overflow-y-auto">
        <ColibAllDocumentation />
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-teal-500 text-white shadow-lg flex items-center justify-center hover:bg-teal-600 transition">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

