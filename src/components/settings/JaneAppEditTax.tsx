"use client";

import { useState } from "react";

interface JaneAppEditTaxProps {
  taxId: string;
  onCancel: () => void;
  onSave?: (tax: any) => void;
  onDelete?: () => void;
}

export default function JaneAppEditTax({ taxId, onCancel, onSave, onDelete }: JaneAppEditTaxProps) {
  // In a real app, this would fetch the tax data based on taxId
  const [name, setName] = useState("HST");
  const [rate, setRate] = useState("13.0");
  const [locations, setLocations] = useState<{ id: string; name: string; selected: boolean }[]>([
    { id: "1", name: "GraceHealth", selected: true },
  ]);

  const handleLocationToggle = (locationId: string) => {
    setLocations((prev) =>
      prev.map((loc) =>
        loc.id === locationId ? { ...loc, selected: !loc.selected } : loc
      )
    );
  };

  const handleSave = () => {
    if (name && rate && onSave) {
      onSave({
        id: taxId,
        name,
        rate: parseFloat(rate),
        locations: locations.filter((loc) => loc.selected),
      });
    }
  };

  const isFormValid = name && rate;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Edit Tax</h1>

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

        {/* Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Rate - Required
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            step="0.1"
          />
        </div>

        {/* Locations */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Locations
          </label>
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={location.selected}
                  onChange={() => handleLocationToggle(location.id)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm text-gray-700">{location.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onDelete}
          className="px-4 py-2 border border-red-300 rounded-lg text-red-700 hover:bg-red-50 font-medium text-sm transition-colors"
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
            Update Tax
          </button>
        </div>
      </div>
    </div>
  );
}

