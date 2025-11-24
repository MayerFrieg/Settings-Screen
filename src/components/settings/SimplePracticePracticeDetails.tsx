"use client";

import { useState } from "react";

export default function SimplePracticePracticeDetails() {
  const [practiceName, setPracticeName] = useState("Mayer Frieg");
  const [practiceEmail, setPracticeEmail] = useState("youssefwhg4@gmail.com");
  const [timeZone, setTimeZone] = useState("Vienna UTC+01:00");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Practice details</h1>
          <p className="text-sm text-gray-900 mt-1">Practice name and location info</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Practice details
          </a>
        </div>
      </div>

      {/* Practice Information section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Practice Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                <span className="text-red-500">*</span> Practice Name
              </label>
              <input
                type="text"
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Practice Email
                <button className="ml-2 text-gray-400 hover:text-gray-900">
                  <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </label>
              <input
                type="email"
                value={practiceEmail}
                onChange={(e) => setPracticeEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Time Zone</label>
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Vienna UTC+01:00</option>
                <option>New York UTC-05:00</option>
                <option>Los Angeles UTC-08:00</option>
                <option>London UTC+00:00</option>
              </select>
              <p className="text-xs text-gray-900 mt-2">
                This time zone applies to data exports, activity logs, and analytic reports. To change your calendar
                time zone, go to{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Calendar Preferences
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Logo section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Practice Logo</h2>
          <p className="text-sm text-gray-900 mb-6">
            Add a logo for SimplePractice documents. Manage documents{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              here
            </a>
            .
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm font-medium text-gray-900 mb-1">Choose image or drag and drop image</p>
              <p className="text-xs text-gray-500 mt-2">
                Upload a .jpg or .png image under 10 MB, with a minimum of 200px height and 300px width.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Phone section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Practice Phone</h2>
          {phoneNumber ? (
            <div className="space-y-4">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300">
              Add Phone Number
            </button>
          )}
        </div>
      </div>

      {/* Office location section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Office location</h2>
          <p className="text-sm text-gray-900 mb-4">
            By default, each office address is hidden from public view. Office addresses will always be visible to
            clients who sign in to the Client Portal and receive appointment reminders.
          </p>
          <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300">
            Add a location
          </button>
        </div>
      </div>

      {/* Telehealth section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Telehealth</h2>
          <p className="text-sm text-gray-900 mb-6">
            Your video appointments are conducted through the Telehealth feature. You and your clients will get a
            unique link to access these appointments.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Address</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Color</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Place Of Service</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Public View</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">Video Office</span>
                      <button className="text-gray-400 hover:text-gray-900">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">No address added</td>
                  <td className="py-3 px-4">
                    <div className="w-6 h-6 rounded-full bg-green-500 border border-gray-300"></div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    02-Telehealth Provided Other than in Patient's Home
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">Hidden</span>
                      <button className="text-gray-400 hover:text-gray-900">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">
              Turn off
            </button>
          </div>
        </div>
      </div>

      {/* Billing addresses section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Billing addresses</h2>
          <p className="text-sm text-gray-900 mb-6">
            Your business billing address will be displayed on your SimplePractice subscription invoices. The client
            billing address will be displayed on your insurance claims and client-facing billing documents such as
            invoices, statements, and receipts.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Address / Office</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">Business Billing</td>
                  <td className="py-3 px-4 text-sm text-gray-900">No address added</td>
                  <td className="py-3 px-4">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">Client Billing</td>
                  <td className="py-3 px-4 text-sm text-gray-900">No address added</td>
                  <td className="py-3 px-4">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

