"use client";

import { useState } from "react";

interface JaneAppNewFeeProps {
  onCancel: () => void;
  onSave?: (fee: any) => void;
}

export default function JaneAppNewFee({ onCancel, onSave }: JaneAppNewFeeProps) {
  const [name, setName] = useState("");
  const [feeType, setFeeType] = useState<"no-show" | "late-cancellation">("no-show");
  const [adjustmentType, setAdjustmentType] = useState<"override" | "percent-discount" | "dollar-discount">("override");
  const [value, setValue] = useState("");
  const [provider, setProvider] = useState<"clinic-staff" | "clinic-only">("clinic-staff");

  const handleSave = () => {
    if (name && value && onSave) {
      onSave({
        name,
        feeType,
        adjustmentType,
        value: parseFloat(value),
        provider,
      });
    }
  };

  const isFormValid = name && value;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Fee</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Name - Required
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter fee name"
          />
        </div>

        {/* Fee Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Fee Type - Required
          </label>
          <div className="relative">
            <select
              value={feeType}
              onChange={(e) => setFeeType(e.target.value as "no-show" | "late-cancellation")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="no-show">No Show</option>
              <option value="late-cancellation">Late Cancellation</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Adjustment Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Adjustment type - Required
          </label>
          <div className="relative">
            <select
              value={adjustmentType}
              onChange={(e) => setAdjustmentType(e.target.value as "override" | "percent-discount" | "dollar-discount")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="override">Override</option>
              <option value="percent-discount">Percent discount</option>
              <option value="dollar-discount">$ discount</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Value */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Value - Required
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter value"
            step="0.01"
          />
        </div>

        {/* Provider of Discount */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Provider of Discount
          </label>
          <div className="relative mb-4">
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as "clinic-staff" | "clinic-only")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="clinic-staff">Clinic & Staff Member</option>
              <option value="clinic-only">Clinic Only</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>Determines whether this adjustment affects the staff member's compensation.</p>
            <p>Clinic & Staff Member: Staff member is compensated based on final price with the adjustment.</p>
            <p>Clinic Only: Staff member is compensated based on price before the adjustment is made.</p>
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
          Create Fee
        </button>
      </div>
    </div>
  );
}

