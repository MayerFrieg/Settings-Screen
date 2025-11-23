"use client";

import { useState } from "react";

export default function ColibWaitlistSettings() {
  const [enableWaitlist, setEnableWaitlist] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Waitlist</h2>
      </div>

      {/* General Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
        
        <div className="space-y-4">
          {/* Enable Waitlist Toggle */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable Waitlist
              </label>
              <p className="text-sm text-gray-600 leading-relaxed">
                The waitlist helps you manage clients who want an appointment when your schedule is full or when their preferences can't be accommodated. Enable it to start collecting waitlist requests and notify clients when spots open up.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Click here
                </a>{" "}
                for more information.
              </p>
            </div>
            <button
              onClick={() => setEnableWaitlist(!enableWaitlist)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enableWaitlist ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enableWaitlist ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
          Save
        </button>
      </div>
    </div>
  );
}

