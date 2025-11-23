"use client";

import { useState } from "react";

interface JaneAppNewIncomeCategoryProps {
  onCancel: () => void;
  onSave?: (incomeCategory: any) => void;
}

export default function JaneAppNewIncomeCategory({ onCancel, onSave }: JaneAppNewIncomeCategoryProps) {
  const [name, setName] = useState("");
  const [defaultCommissionRate, setDefaultCommissionRate] = useState("");
  const [defaultReferralCommissionRate, setDefaultReferralCommissionRate] = useState("");

  const handleSave = () => {
    if (name && defaultCommissionRate && onSave) {
      onSave({
        name,
        defaultCommissionRate: parseFloat(defaultCommissionRate),
        defaultReferralCommissionRate: defaultReferralCommissionRate ? parseFloat(defaultReferralCommissionRate) : null,
      });
    }
  };

  const isFormValid = name && defaultCommissionRate;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Income Category</h1>

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
            placeholder="Enter income category name"
          />
        </div>

        {/* Default Commission Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Default Commission Rate - Required
          </label>
          <p className="text-xs text-gray-600 mb-3">
            This percentage will be used to calculate compensation for staff for products or treatments assigned to this income category. This is the default rate that will be used for new staff profiles.
          </p>
          <div className="relative">
            <input
              type="number"
              value={defaultCommissionRate}
              onChange={(e) => setDefaultCommissionRate(e.target.value)}
              className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="100.0"
              step="0.1"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>

        {/* Default Referral Commission Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Default Referral Commission Rate
          </label>
          <p className="text-xs text-gray-600 mb-3">
            If you offer a higher commission rate when a patient is referred directly to a staff member, you can enter the percentage here. This is based on the "Who were you referred to?" field on patient profiles. This is the default rate that will be used for new staff profiles.
          </p>
          <div className="relative">
            <input
              type="number"
              value={defaultReferralCommissionRate}
              onChange={(e) => setDefaultReferralCommissionRate(e.target.value)}
              className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Optional Referral %"
              step="0.1"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
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
          Create Income Category
        </button>
      </div>
    </div>
  );
}

