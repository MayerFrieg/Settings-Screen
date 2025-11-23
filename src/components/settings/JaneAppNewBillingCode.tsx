"use client";

import { useState } from "react";

interface JaneAppNewBillingCodeProps {
  onCancel: () => void;
  onSave?: (billingCode: any) => void;
}

export default function JaneAppNewBillingCode({ onCancel, onSave }: JaneAppNewBillingCodeProps) {
  const [code, setCode] = useState("");
  const [billedAmount, setBilledAmount] = useState("");

  const handleSave = () => {
    if (code && billedAmount && onSave) {
      onSave({
        code,
        billedAmount: parseFloat(billedAmount),
      });
    }
  };

  const isFormValid = code && billedAmount;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Billing Code</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Code */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Code - Required
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter billing code"
          />
        </div>

        {/* Billed Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Billed Amount - Required
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={billedAmount}
              onChange={(e) => setBilledAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!isFormValid}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Create Billing Code
        </button>
      </div>
    </div>
  );
}

