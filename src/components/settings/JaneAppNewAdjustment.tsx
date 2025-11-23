"use client";

import { useState } from "react";

interface JaneAppNewAdjustmentProps {
  onCancel: () => void;
  onSave?: (adjustment: any) => void;
}

export default function JaneAppNewAdjustment({ onCancel, onSave }: JaneAppNewAdjustmentProps) {
  const [name, setName] = useState("");
  const [adjustmentType, setAdjustmentType] = useState<"override" | "percent-discount" | "dollar-discount">("percent-discount");
  const [value, setValue] = useState("");
  const [provider, setProvider] = useState<"clinic-staff" | "clinic-only">("clinic-staff");

  const handleSave = () => {
    if (name && value && onSave) {
      onSave({
        name,
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
      <h1 className="text-4xl font-light text-gray-400">New Adjustment</h1>

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
            placeholder="Enter adjustment name"
          />
        </div>

        {/* Adjustment Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Adjustment type - Required
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="adjustment-type"
                value="override"
                checked={adjustmentType === "override"}
                onChange={() => setAdjustmentType("override")}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Override</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="adjustment-type"
                value="percent-discount"
                checked={adjustmentType === "percent-discount"}
                onChange={() => setAdjustmentType("percent-discount")}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Percent discount</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="adjustment-type"
                value="dollar-discount"
                checked={adjustmentType === "dollar-discount"}
                onChange={() => setAdjustmentType("dollar-discount")}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">$ discount</span>
            </label>
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
            Provider of Discount - Required
          </label>
          <div className="space-y-3 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="provider"
                value="clinic-staff"
                checked={provider === "clinic-staff"}
                onChange={() => setProvider("clinic-staff")}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Clinic & Staff Member</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="provider"
                value="clinic-only"
                checked={provider === "clinic-only"}
                onChange={() => setProvider("clinic-only")}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">Clinic Only</span>
            </label>
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
          Create Adjustment
        </button>
      </div>
    </div>
  );
}

