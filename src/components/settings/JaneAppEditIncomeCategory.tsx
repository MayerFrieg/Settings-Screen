"use client";

import { useState } from "react";

interface JaneAppEditIncomeCategoryProps {
  incomeCategoryId: string;
  onCancel: () => void;
  onSave?: (incomeCategory: any) => void;
  onArchive?: () => void;
}

export default function JaneAppEditIncomeCategory({ incomeCategoryId, onCancel, onSave, onArchive }: JaneAppEditIncomeCategoryProps) {
  // In a real app, this would fetch the income category data based on incomeCategoryId
  const [name, setName] = useState("Product Income");
  const [defaultCommissionRate, setDefaultCommissionRate] = useState("100.0");
  const [defaultReferralCommissionRate, setDefaultReferralCommissionRate] = useState("");
  
  const [staffRates, setStaffRates] = useState([
    {
      id: "1",
      name: "Grace Canada",
      commissionRate: "100.0",
      referralRate: "",
    },
  ]);

  const handleApplyDefaultCommission = (staffId: string) => {
    setStaffRates((prev) =>
      prev.map((staff) =>
        staff.id === staffId ? { ...staff, commissionRate: defaultCommissionRate } : staff
      )
    );
  };

  const handleApplyDefaultReferral = (staffId: string) => {
    setStaffRates((prev) =>
      prev.map((staff) =>
        staff.id === staffId ? { ...staff, referralRate: defaultReferralCommissionRate } : staff
      )
    );
  };

  const handleSave = () => {
    if (name && defaultCommissionRate && onSave) {
      onSave({
        id: incomeCategoryId,
        name,
        defaultCommissionRate: parseFloat(defaultCommissionRate),
        defaultReferralCommissionRate: defaultReferralCommissionRate ? parseFloat(defaultReferralCommissionRate) : null,
        staffRates,
      });
    }
  };

  const isFormValid = name && defaultCommissionRate;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Edit Income Category</h1>

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

        {/* Staff Member Specific Rates */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Staff Member Specific Rates</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Staff Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Commission Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Referral Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staffRates.map((staff) => (
                  <tr key={staff.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{staff.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={staff.commissionRate}
                            onChange={(e) =>
                              setStaffRates((prev) =>
                                prev.map((s) =>
                                  s.id === staff.id ? { ...s, commissionRate: e.target.value } : s
                                )
                              )
                            }
                            className="w-full pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                            step="0.1"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">%</span>
                        </div>
                        <button
                          onClick={() => handleApplyDefaultCommission(staff.id)}
                          className="text-xs text-teal-600 hover:text-teal-700 underline"
                        >
                          Apply Default
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={staff.referralRate}
                            onChange={(e) =>
                              setStaffRates((prev) =>
                                prev.map((s) =>
                                  s.id === staff.id ? { ...s, referralRate: e.target.value } : s
                                )
                              )
                            }
                            className="w-full pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                            placeholder="Optional"
                            step="0.1"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">%</span>
                        </div>
                        <button
                          onClick={() => handleApplyDefaultReferral(staff.id)}
                          className="text-xs text-teal-600 hover:text-teal-700 underline"
                        >
                          Apply Default
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onArchive}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h10" />
          </svg>
          Archive
        </button>
        <div className="flex gap-3">
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
            Update Income Category
          </button>
        </div>
      </div>
    </div>
  );
}

