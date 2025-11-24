"use client";

import { useState } from "react";

export default function SimplePracticeEmail() {
  const [activeTab, setActiveTab] = useState<"client" | "contact">("client");
  const [isAutomatedEmailsExpanded, setIsAutomatedEmailsExpanded] = useState(true);

  const clientEmailTemplates = [
    "Welcome",
    "Appointment confirmation",
    "Appointment confirmation with documents",
    "Video appointment confirmation",
    "Video appointment confirmation with documents",
    "Appointment declined (new client)",
    "Appointment declined (existing client)",
    "Client portal activation",
    "Document request",
    "Recurring measure request",
    "New billing document available",
    "Invoice past due",
    "Appointment request received",
    "Pending appointment request",
    "Ad hoc document reminder",
    "Contact form inquiry confirmation",
    "Out of office contact form inquiry",
  ];

  const contactEmailTemplates = [
    "Contact welcome",
    "Contact appointment confirmation",
    "Contact appointment declined",
    "Couple welcome",
    "Couple appointment confirmation",
    "Couple appointment declined",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email</h1>
          <p className="text-sm text-gray-900 mt-1">Automate confirmation and reminder emails</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Watch a quick video about Email notifications
        </a>
      </div>

      {/* Automated emails section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <button
            onClick={() => setIsAutomatedEmailsExpanded(!isAutomatedEmailsExpanded)}
            className="w-full flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-semibold text-gray-900">Automated emails</h2>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isAutomatedEmailsExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isAutomatedEmailsExpanded && (
            <div className="space-y-4">
              <p className="text-sm text-gray-900">
                You can view and customize the content of these templates.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Learn more</a>
              </p>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("client")}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                    activeTab === "client"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-900 hover:text-gray-900"
                  }`}
                >
                  Client emails
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                    activeTab === "contact"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-900 hover:text-gray-900"
                  }`}
                >
                  Contact and couple emails
                </button>
              </div>

              {/* Email templates list */}
              <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden">
                {(activeTab === "client" ? clientEmailTemplates : contactEmailTemplates).map((template, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer group"
                  >
                    <span className="text-sm text-gray-900">{template}</span>
                    <div className="flex items-center gap-4">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <button className="text-gray-400 hover:text-blue-600">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

