"use client";

import { useState } from "react";

export default function JaneAppClinicInfo() {
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Clinic Info</h1>

      {/* Clinic Info Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Clinic Info</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-gray-700">Clinic Name: </span>
            <span className="font-semibold text-gray-900">GraceHealth</span>
          </div>
          <div>
            <span className="text-gray-700">Legal Name of Clinic: </span>
            <span className="font-semibold text-gray-900">GraceHealth</span>
          </div>
        </div>
      </div>

      {/* Website Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Website</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <p className="text-gray-500 text-sm">Add a website for your online booking site to link out to</p>
      </div>

      {/* Language, Currency & Numbers Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Language, Currency & Numbers</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <p className="text-gray-700">
          Your language and currency are set to: <span className="font-semibold text-gray-900">English - North America</span>
        </p>
      </div>

      {/* Customized Language Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Customized Language</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-gray-700">Patients are referred to as: </span>
            <span className="font-semibold text-gray-900">Patient</span>
          </div>
          <div>
            <span className="text-gray-700">Treatments are referred to as: </span>
            <span className="font-semibold text-gray-900">Treatment</span>
          </div>
        </div>
      </div>

      {/* Patient Pronouns Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Patient Pronouns</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <p className="text-gray-700">
          Allow Patients to specify their pronouns online: <span className="font-semibold text-gray-900">Off</span>
        </p>
      </div>

      {/* Clinic Time Zone Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Clinic Time Zone</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
        <p className="text-gray-700">
          Your time zone is currently set to: <span className="font-semibold text-gray-900">Toronto - America (GMT -05:00)</span>
        </p>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white rounded-lg border border-gray-200">
        <button
          onClick={() => setAdvancedSettingsOpen(!advancedSettingsOpen)}
          className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-gray-900">Advanced Settings</h2>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${advancedSettingsOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {advancedSettingsOpen && (
          <div className="px-6 pb-6 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">Advanced settings content will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

