"use client";

import { useState } from "react";

export default function ColibPersonalSecuritySettings() {
  const [enable2FA, setEnable2FA] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Security</h2>
      </div>

      {/* Security Settings */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Multi-factor authentication section */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Multi-factor authentication</h3>
          
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Enable 2 factor authentication (2FA)
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, you will receive a code via email to connect to colib.io. This option is an extra security for your account.
              </p>
            </div>
            <button
              onClick={() => setEnable2FA(!enable2FA)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enable2FA ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enable2FA ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

