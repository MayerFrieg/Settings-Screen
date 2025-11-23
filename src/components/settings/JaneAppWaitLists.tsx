"use client";

import { useState } from "react";

export default function JaneAppWaitLists() {
  const [allowPatientsToAddWaitList, setAllowPatientsToAddWaitList] = useState(true);

  const handleSave = () => {
    // In a real app, this would save the settings
    console.log("Saving wait list settings:", { allowPatientsToAddWaitList });
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Wait Lists</h1>

      {/* Settings Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Allow Patients to add Wait List requests
              </h2>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={allowPatientsToAddWaitList}
                  onChange={(e) => setAllowPatientsToAddWaitList(e.target.checked)}
                  className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
              </label>
            </div>
            <p className="text-sm text-gray-600 italic">
              This allows Patients to add themselves to the Wait List with their preferred appointment type and availability.
            </p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}

