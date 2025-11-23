"use client";

import { useState } from "react";

export default function ColibWebPageSettings() {
  const [enableWebPage, setEnableWebPage] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Web Page</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Colib allows you to create your own custom web page in order to introduce your practice to your clients. Make sure to also complete the information in the 'General' tab.
      </p>

      {/* General Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Enable web page
            </label>
          </div>
          <button
            onClick={() => setEnableWebPage(!enableWebPage)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
              enableWebPage ? "bg-teal-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                enableWebPage ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
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

