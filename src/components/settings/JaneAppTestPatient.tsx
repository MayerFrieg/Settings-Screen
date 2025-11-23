"use client";

import { useState } from "react";

export default function JaneAppTestPatient() {
  const [isTestPatientEnabled, setIsTestPatientEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Test Patient</h1>

      {/* Test Patient Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Ted Test</h2>
          
          {/* Toggle Switch */}
          <button
            type="button"
            onClick={() => setIsTestPatientEnabled(!isTestPatientEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              isTestPatientEnabled ? "bg-teal-600" : "bg-gray-300"
            }`}
            role="switch"
            aria-checked={isTestPatientEnabled}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isTestPatientEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        
        <p className="text-gray-700 mb-4">
          Want to test out a workflow or see things from your patient's point of view? Use your test patient, Ted Test, by toggling them on to the right. When you're finished, you can toggle Ted Test off again to hide their profile and remove their data from your reports and schedule to keep things tidy.
        </p>
        
        <p className="text-gray-700">
          Testing workflows with a regular patient profile creates data that has to be manually deleted, so we recommend using Ted Test instead while practicing.{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Learn more about the test patient
          </a>
        </p>
      </div>
    </div>
  );
}

