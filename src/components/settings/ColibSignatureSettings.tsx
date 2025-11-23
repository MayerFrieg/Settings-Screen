"use client";

import { useState } from "react";

export default function ColibSignatureSettings() {
  const [addPersonalSignature, setAddPersonalSignature] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Signature</h2>
      </div>

      {/* Signature Settings */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Preferences</h3>
        
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-900 mb-2 block">
              Add personal signature to notes
            </label>
            <p className="text-sm text-gray-600">
              Use this option to automatically add a handwritten signature at the bottom of each note after it has been signed.
            </p>
          </div>
          <button
            onClick={() => setAddPersonalSignature(!addPersonalSignature)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
              addPersonalSignature ? "bg-teal-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                addPersonalSignature ? "translate-x-6" : "translate-x-1"
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

