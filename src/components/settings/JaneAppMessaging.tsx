"use client";

import { useState } from "react";

export default function JaneAppMessaging() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Messaging</h1>

      {/* Enable Messaging Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Enable Messaging</h2>
            <span className="px-2 py-0.5 text-xs font-semibold text-purple-700 bg-purple-100 rounded">
              BETA
            </span>
          </div>
          
          {/* Toggle Switch */}
          <button
            type="button"
            onClick={() => setIsEnabled(!isEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              isEnabled ? "bg-teal-600" : "bg-gray-300"
            }`}
            role="switch"
            aria-checked={isEnabled}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        
        <p className="text-gray-700">
          Let your team connect with patients directly in Jane, in a way that's simple and secure. Need help getting started?{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            See our guide
          </a>
        </p>
      </div>
    </div>
  );
}

