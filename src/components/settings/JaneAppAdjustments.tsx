"use client";

import { useState } from "react";

interface Adjustment {
  id: string;
  name: string;
  type: "override" | "percent-discount" | "dollar-discount";
  value: number;
  provider: "clinic-staff" | "clinic-only";
}

interface JaneAppAdjustmentsProps {
  onCreateAdjustment?: () => void;
  onEditAdjustment?: (id: string) => void;
}

export default function JaneAppAdjustments({ onCreateAdjustment, onEditAdjustment }: JaneAppAdjustmentsProps) {
  const [showArchived, setShowArchived] = useState(false);

  const adjustments: Adjustment[] = [
    {
      id: "1",
      name: "Friends & Family Discount",
      type: "percent-discount",
      value: 15.0,
      provider: "clinic-staff",
    },
    {
      id: "2",
      name: "Newspaper Ad Promo",
      type: "dollar-discount",
      value: 10.0,
      provider: "clinic-only",
    },
    {
      id: "3",
      name: "Pro Bono",
      type: "override",
      value: 0.0,
      provider: "clinic-only",
    },
    {
      id: "4",
      name: "Seniors Discount",
      type: "percent-discount",
      value: 10.0,
      provider: "clinic-staff",
    },
  ];

  const getAdjustmentDetail = (adjustment: Adjustment) => {
    if (adjustment.type === "override") {
      return `$${adjustment.value.toFixed(2)} Override`;
    } else if (adjustment.type === "percent-discount") {
      return `${adjustment.value.toFixed(1)}% Discount`;
    } else {
      return `$${adjustment.value.toFixed(2)} Discount`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Adjustments</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowArchived(!showArchived)}
            className="text-teal-600 hover:text-teal-700 underline text-sm"
          >
            Show Archived
          </button>
          <button
            onClick={onCreateAdjustment}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            New Adjustment
          </button>
        </div>
      </div>

      {/* Adjustments List */}
      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {adjustments.map((adjustment) => (
          <div
            key={adjustment.id}
            className="p-6 flex items-center justify-between hover:bg-gray-50"
          >
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-1">{adjustment.name}</h3>
              <p className="text-sm text-gray-700">{getAdjustmentDetail(adjustment)}</p>
            </div>
            <button
              onClick={() => onEditAdjustment?.(adjustment.id)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

