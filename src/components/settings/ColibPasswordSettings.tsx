"use client";

import { useState } from "react";

export default function ColibPasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Password</h2>
      </div>

      {/* Password Change Form */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Current password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Current password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              placeholder="Enter current password"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          {/* New password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">New password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              placeholder="Enter new password"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

