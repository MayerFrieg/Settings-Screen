"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

export default function SimplePracticeLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [expandedProfile, setExpandedProfile] = useState(true);
  const [expandedPractice, setExpandedPractice] = useState(true);
  const [expandedTeam, setExpandedTeam] = useState(true);
  const [expandedBilling, setExpandedBilling] = useState(true);
  const [expandedClientBilling, setExpandedClientBilling] = useState(true);
  const [expandedPaymentProcessing, setExpandedPaymentProcessing] = useState(true);
  const [expandedServicesProducts, setExpandedServicesProducts] = useState(true);
  const [expandedSchedulingInquiries, setExpandedSchedulingInquiries] = useState(true);
  const [expandedDocumentation, setExpandedDocumentation] = useState(true);
  const [expandedClientNotifications, setExpandedClientNotifications] = useState(true);
  const [expandedMessaging, setExpandedMessaging] = useState(true);
  const [expandedDocumentationSummary, setExpandedDocumentationSummary] = useState(false);
  const [expandedClientCare, setExpandedClientCare] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 flex items-center gap-2 border-b border-gray-200">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-gray-900 font-semibold">SimplePractice</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {/* OPERATIONS Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">OPERATIONS</h3>
            <div className="space-y-1">
              {/* Profile Section */}
              <div>
                <button
                  onClick={() => setExpandedProfile(!expandedProfile)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Profile</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedProfile ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedProfile && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/profile"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/profile"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Profile and security</div>
                        <div className="text-xs text-gray-900">Personal info and security preferences</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/clinical-info"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/clinical-info"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Clinical info</div>
                        <div className="text-xs text-gray-900">NPI number and licenses</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/notifications"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/notifications"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Notification preferences</div>
                        <div className="text-xs text-gray-900">Manage the notifications you receive</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Practice Section */}
              <div>
                <button
                  onClick={() => setExpandedPractice(!expandedPractice)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Practice</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedPractice ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedPractice && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/practice-details"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/practice-details"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Practice details</div>
                        <div className="text-xs text-gray-900">Practice name and location info</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/business-files"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/business-files"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Business files</div>
                        <div className="text-xs text-gray-900">A secure, HIPAA-compliant place to store and share files</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/plan-info"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/plan-info"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Plan info</div>
                        <div className="text-xs text-gray-900">Current plan, add-ons, receipts</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/data-export"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/data-export"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Data export</div>
                        <div className="text-xs text-gray-900">Export practice data</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/demo-client"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/demo-client"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Demo client</div>
                        <div className="text-xs text-gray-900">Turn demo client on and off</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Team Section */}
              <div>
                <button
                  onClick={() => setExpandedTeam(!expandedTeam)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Team</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedTeam ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedTeam && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/team-members"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/team-members"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Team members</div>
                        <div className="text-xs text-gray-900">Add and manage team members</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BILLING Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">BILLING</h3>
            <div className="space-y-1">
              <div>
                <button
                  onClick={() => setExpandedClientBilling(!expandedClientBilling)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Client billing and insurance</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedClientBilling ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedClientBilling && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/client-billing-documents"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/client-billing-documents"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Client billing documents</div>
                        <div className="text-xs text-gray-900">Automate invoices, statements, superbills</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/insurance-billing"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/insurance-billing"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Insurance billing</div>
                        <div className="text-xs text-gray-900">Manage how claims, coverage and superbills appear</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/payers"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/payers"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Payers</div>
                        <div className="text-xs text-gray-900">Manage insurance payers and enrollments</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setExpandedPaymentProcessing(!expandedPaymentProcessing)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Payment processing</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedPaymentProcessing ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedPaymentProcessing && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/online-payments"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/online-payments"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Online payments</div>
                        <div className="text-xs text-gray-900">Set up and manage online payments</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/autopay"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/autopay"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">AutoPay</div>
                        <div className="text-xs text-gray-900">Automatically apply credits and payments to invoices</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setExpandedServicesProducts(!expandedServicesProducts)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Services and products</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedServicesProducts ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedServicesProducts && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/services"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/services"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Services</div>
                        <div className="text-xs text-gray-900">Manage services and set rates</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/products"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/products"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Products</div>
                        <div className="text-xs text-gray-900">Manage products and set rates</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CLIENT CARE Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">CLIENT CARE</h3>
            <div className="space-y-1">
              <div>
                <button
                  onClick={() => setExpandedSchedulingInquiries(!expandedSchedulingInquiries)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Scheduling and inquiries</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedSchedulingInquiries ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSchedulingInquiries && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/client-portal-permissions"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/client-portal-permissions"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Client portal permissions</div>
                        <div className="text-xs text-gray-900">Online appointment requests, client permissions, greeting</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/calendar"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/calendar"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Calendar</div>
                        <div className="text-xs text-gray-900">Alerts, calendar sync</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/contact-form"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/contact-form"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Contact form</div>
                        <div className="text-xs text-gray-900">Get website inquiries sent directly to SimplePractice</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/prescreener"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/prescreener"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Prescreener</div>
                        <div className="text-xs text-gray-900">Collect information to determine if a prospective client is a good fit</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/widgets"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/widgets"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Widgets</div>
                        <div className="text-xs text-gray-900">Add appointment requests and contact forms to your website</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setExpandedDocumentation(!expandedDocumentation)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Documentation</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedDocumentation ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedDocumentation && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/template-library"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/template-library"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Template library</div>
                        <div className="text-xs text-gray-900">Intake documents, progress notes, treatment plans, and other documents</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/shareable-documents"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/shareable-documents"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {/* First document (behind) */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          opacity="0.6"
                        />
                        {/* Second document (front) */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 10h6m-6 4h6m2 5H9a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          transform="translate(2, -2)"
                        />
                        {/* Person icon */}
                        <circle cx="18" cy="8" r="2.5" fill="currentColor" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 11.5c0 1.1-.9 2-2 2s-2-.9-2-2"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Shareable documents</div>
                        <div className="text-xs text-gray-900">Manage default intake documents and uploaded files</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setExpandedClientNotifications(!expandedClientNotifications)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Client notifications</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedClientNotifications ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedClientNotifications && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/email"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/email"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-xs text-gray-900">Automate confirmation and reminder emails</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/text"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/text"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Text</div>
                        <div className="text-xs text-gray-900">Automate reminder texts</div>
                      </div>
                    </Link>
                    <Link
                      href="/simplepractice/voice"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/voice"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Voice</div>
                        <div className="text-xs text-gray-900">Automate reminder voicemails</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setExpandedMessaging(!expandedMessaging)}
                  className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                >
                  <span>Messaging</span>
                  <svg
                    className={`w-4 h-4 text-gray-900 transition-transform ${expandedMessaging ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedMessaging && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/simplepractice/secure-messaging"
                      className={`flex items-center gap-2 px-2 py-2 text-sm rounded ${
                        pathname === "/simplepractice/secure-messaging"
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {/* Two people */}
                        <circle cx="8" cy="8" r="2" strokeWidth={1.5} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10c-2 0-4 1-4 3v1h8v-1c0-2-2-3-4-3z" />
                        <circle cx="16" cy="8" r="2" strokeWidth={1.5} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 10c-2 0-4 1-4 3v1h8v-1c0-2-2-3-4-3z" />
                        {/* Chat bubble */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          opacity="0.6"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-900">Secure messaging</div>
                        <div className="text-xs text-gray-900">Messaging for team members and clients</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Documentation Summary Section */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <button
              onClick={() => setExpandedDocumentationSummary(!expandedDocumentationSummary)}
              className="w-full flex items-center justify-between px-2 py-2 text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
                <span className="font-semibold">Documentation</span>
              </div>
              <svg
                className={`w-4 h-4 text-purple-600 transition-transform ${expandedDocumentationSummary ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedDocumentationSummary && (
              <div className="mt-2 space-y-3 max-h-[500px] overflow-y-auto px-2 pb-2">
                <div className="rounded-lg border border-purple-100 bg-purple-50 p-3">
                  <div className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">
                    Summary
                  </div>
                  <p className="text-sm text-gray-800 mb-3">
                    Jump to the consolidated documentation page to see summaries for every SimplePractice setting.
                  </p>
                  <Link
                    href="/simplepractice/documentation"
                    className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition"
                  >
                    View all documentation
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <input
              type="text"
              placeholder="Search clients"
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium text-green-700">Nov income $100.00</span>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </button>
            <button className="relative text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 text-xs font-semibold text-blue-600">Messages</span>
            </button>
            <Link
              href="/simplepractice/documentation"
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                pathname === "/simplepractice/documentation"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Documentation
            </Link>
            <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
              Select a plan
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                MF
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 relative">
          {children}
          {/* Footer */}
          <footer className="border-t border-gray-200 bg-white py-4 px-6 mt-auto">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs text-gray-900">
                © 2025 SimplePractice. BAA. Terms. Privacy & Security. Cookies. Support. Licensed Content. CPT © 2022
                American Medical Association. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 items-end">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 flex items-center gap-2">
          <span>Onboarding guide</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

