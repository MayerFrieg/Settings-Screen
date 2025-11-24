"use client";

import { useState } from "react";

export default function SimplePracticeAutoPay() {
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AutoPay</h1>
          <p className="text-sm text-gray-900 mt-1">Automatically apply credits and payments to invoices</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about AutoPay
        </a>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <p className="text-sm text-gray-900 mb-6">
            Enrolled clients are charged for any invoiced and unpaid balances between 12:00-2:00 AM each day. Keep in
            mind, the client's available credit will be applied to their balance before charging their online card.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Learn more
            </a>
            .
          </p>

          {/* AutoPay Toggle */}
          <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                {autoPayEnabled ? "AutoPay is enabled" : "AutoPay is disabled"}
              </p>
              <p className="text-xs text-gray-900">
                {autoPayEnabled
                  ? "Clients with AutoPay enabled will be automatically charged for unpaid invoices."
                  : "Turn on AutoPay to automatically charge enrolled clients for unpaid balances."}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
              <input
                type="checkbox"
                checked={autoPayEnabled}
                onChange={(e) => setAutoPayEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

