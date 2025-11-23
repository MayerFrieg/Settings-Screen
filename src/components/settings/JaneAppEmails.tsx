"use client";

import { useState } from "react";

export default function JaneAppEmails() {
  const [selectedEmail, setSelectedEmail] = useState("");

  const emailTypes = [
    "Welcome Email",
    "Confirm Email Address",
    "Forgot Password",
    "Forgot Password (Multiple Matches)",
    "Lookup Email",
    "Lookup Email (Multiple Matches)",
    "Intake Form",
    "Thanks for Booking",
    "Thanks for Booking (Multiple Appointments)",
    "Appointment Change Notification",
    "Appointment Cancelled Notification",
    "Appointments Cancelled Notification (Multiple)",
    "Upcoming Appointment",
    "Upcoming Appointments",
    "Appointment Reminder",
    "Intake Form Reminder",
    "Appointment Reminder (Multiple Appointments)",
    "Appointment Reminder (Online Appointment)",
    "Appointment Reminder (SMS Failure)",
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Emails</h1>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-2">Preview the various emails Jane sends patients.</p>
        <p className="text-gray-700">
          To change the language in these emails, click on{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">Language</a> in the side panel.
        </p>
      </div>

      {/* Preview Email Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Preview Email</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select an Email...</label>
          <select
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option value="">Select an Email...</option>
            {emailTypes.map((emailType, index) => (
              <option key={index} value={emailType}>
                {emailType}
              </option>
            ))}
          </select>
        </div>

        {/* Email Preview Area */}
        {selectedEmail && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">From:</span>
                  <span className="text-sm text-gray-900">GraceHealth &lt;noreply@janeapp.com&gt;</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">To:</span>
                  <span className="text-sm text-gray-900">patient@example.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Subject:</span>
                  <span className="text-sm text-gray-900">{selectedEmail}</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-sm">
                  This is a preview of the <strong>{selectedEmail}</strong> email template. The actual email content would appear here when a specific template is selected.
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  You can customize the language and content of this email template in the Language settings.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

