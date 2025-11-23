"use client";

import { useState } from "react";

interface JaneAppEditPaymentMethodProps {
  paymentMethodId: string;
  onCancel: () => void;
  onSave?: (paymentMethod: any) => void;
  onDelete?: () => void;
}

export default function JaneAppEditPaymentMethod({ paymentMethodId, onCancel, onSave, onDelete }: JaneAppEditPaymentMethodProps) {
  // In a real app, this would fetch the payment method data based on paymentMethodId
  const [location, setLocation] = useState("GraceHealth");
  const [displayName, setDisplayName] = useState("Cash");
  const [internalName, setInternalName] = useState("Cash");
  const [transactionFee, setTransactionFee] = useState("");
  const [transactionRate, setTransactionRate] = useState("");

  const handleSave = () => {
    if (location && displayName && internalName && onSave) {
      onSave({
        id: paymentMethodId,
        location,
        displayName,
        internalName,
        transactionFee: transactionFee ? parseFloat(transactionFee) : null,
        transactionRate: transactionRate ? parseFloat(transactionRate) : null,
      });
    }
  };

  const isFormValid = location && displayName && internalName;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Edit Payment Method</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Location - Required
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="GraceHealth">GraceHealth</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Display Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Display Name - Required
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <p className="mt-2 text-xs text-gray-600">
            This will appear on Patient receipts, statements, and reports.
          </p>
        </div>

        {/* Internal Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Internal Name - Required
          </label>
          <input
            type="text"
            value={internalName}
            onChange={(e) => setInternalName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <p className="mt-2 text-xs text-gray-600">
            This is the internal name that identifies this unique payment method. Only staff will see this name. For example, you can use this name to distinguish between multiple debit/credit machines.
          </p>
        </div>

        {/* Practitioner Transaction Fee */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Practitioner transaction fee
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={transactionFee}
              onChange={(e) => setTransactionFee(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="0.00"
              step="0.01"
            />
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Set this if your clinic charges back transaction fees to practitioners for this payment type.
          </p>
        </div>

        {/* Practitioner Transaction Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Practitioner transaction rate
          </label>
          <div className="relative">
            <input
              type="number"
              value={transactionRate}
              onChange={(e) => setTransactionRate(e.target.value)}
              className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="0.00"
              step="0.01"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Set this if your clinic charges a percentage fee to practitioners for this payment type.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm transition-colors"
        >
          Delete
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
            Update Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}

