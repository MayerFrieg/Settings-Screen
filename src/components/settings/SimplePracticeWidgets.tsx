"use client";

import { useState } from "react";

export default function SimplePracticeWidgets() {
  const [activeTab, setActiveTab] = useState<"appointment" | "contact">("appointment");

  const appointmentWidgetCode = `<!-- Start SimplePractice Appointment-Request Widget Embed Code -->
<style>
  .sp-appointment-request-button {
    background-color: #2563eb;
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    display: inline-block;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  .sp-appointment-request-button:hover {
    background-color: #1d4ed8;
  }
</style>
<a href="https://mayer-frieg.clientsecure.me/appointments" 
   class="sp-appointment-request-button" 
   target="_blank">
  Request Appointment
</a>
<script src="https://secure.simplepractice.com/integration-1.0.js"></script>
<!-- End SimplePractice Appointment-Request Widget Embed Code -->`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(appointmentWidgetCode);
    // Could show a toast notification here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Widgets</h1>
          <p className="text-sm text-gray-900 mt-1">Add appointment requests and contact form widget to your website</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Watch a quick video about the {activeTab === "appointment" ? "Appointment request" : "Contact form"} widget
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("appointment")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "appointment"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Appointment request
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "contact"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Contact form
        </button>
      </div>

      {/* Appointment Request Tab Content */}
      {activeTab === "appointment" && (
        <div className="space-y-6">
          {/* Informational Bar */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-900">
              Add this code to your website where you want the appointment request widget to appear.{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                Learn how to add the widget to a website
              </a>
              .
            </p>
          </div>

          {/* Code Block */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-gray-100 font-mono whitespace-pre-wrap">
                  {appointmentWidgetCode}
                </pre>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Copy code
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  Preview Widget
                </button>
              </div>
            </div>
          </div>

          {/* Customization Section */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Want to customize the appointment request widget?
              </h2>
              <p className="text-sm text-gray-900">
                Advanced customers only: edit the look of the button with your own HTML and CSS.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Learn more about widget customization
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Tab Content */}
      {activeTab === "contact" && (
        <div className="space-y-6">
          {/* Contact Form Status Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Contact form is off</p>
                <p className="text-sm text-gray-900 mb-4">
                  Contact form must be turned on to use this widget.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="/simplepractice/contact-form"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Turn it on
                  </a>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

