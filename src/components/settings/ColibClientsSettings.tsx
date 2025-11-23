"use client";

import { useState } from "react";

interface AdditionalField {
  id: string;
  label: string;
  type: string;
}

export default function ColibClientsSettings() {
  const [activatePhoneControl, setActivatePhoneControl] = useState(false);
  const [enableScoreGoals, setEnableScoreGoals] = useState(false);
  const [additionalFields, setAdditionalFields] = useState<AdditionalField[]>([]);
  const [isAddFieldModalOpen, setIsAddFieldModalOpen] = useState(false);
  const [newField, setNewField] = useState({ label: "", type: "text" });

  const handleAddField = () => {
    if (newField.label.trim()) {
      setAdditionalFields([
        ...additionalFields,
        {
          id: `field-${Date.now()}`,
          label: newField.label,
          type: newField.type,
        },
      ]);
      setNewField({ label: "", type: "text" });
      setIsAddFieldModalOpen(false);
    }
  };

  const handleDeleteField = (id: string) => {
    setAdditionalFields(additionalFields.filter((field) => field.id !== id));
  };

  const fieldTypes = [
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "email", label: "Email" },
    { value: "date", label: "Date" },
    { value: "textarea", label: "Textarea" },
    { value: "select", label: "Select" },
    { value: "checkbox", label: "Checkbox" },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
        </div>

        {/* General Section */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
          
          <div className="space-y-6">
            {/* Activate US/Canadian phone number control */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Activate US/Canadian phone number control
                </label>
                <p className="text-sm text-gray-600">
                  By enabling this feature, you will prevent the saving of international (non-US or non-Canadian) phone numbers. Please note that only US and Canadian phone numbers will receive SMS notifications.
                </p>
              </div>
              <button
                onClick={() => setActivatePhoneControl(!activatePhoneControl)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                  activatePhoneControl ? "bg-teal-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    activatePhoneControl ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Enable score/goals feature */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Enable score/goals feature
                </label>
                <p className="text-sm text-gray-600">
                  This adds a 'Scores and Goals' section in the client file to track the client's progress over time.{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    Click here
                  </a>{" "}
                  for more information.
                </p>
              </div>
              <button
                onClick={() => setEnableScoreGoals(!enableScoreGoals)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                  enableScoreGoals ? "bg-teal-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enableScoreGoals ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Additional fields Section */}
        <section className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Additional fields</h3>
            <button
              onClick={() => setIsAddFieldModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add field
            </button>
          </div>

          {additionalFields.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Label
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {additionalFields.map((field) => (
                    <tr key={field.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {field.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {fieldTypes.find((t) => t.value === field.type)?.label || field.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteField(field.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 mb-2">No field yet. Click on 'Add field' to create your first additional field for your client pages.</p>
            </div>
          )}

          <p className="mt-6 text-sm text-gray-600">
            Customize your client pages with additional fields to meet your business requirements.
          </p>
        </section>

        {/* Save Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </div>

      {/* Add Field Modal */}
      {isAddFieldModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add Field</h3>
              <button
                onClick={() => setIsAddFieldModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
                <input
                  type="text"
                  value={newField.label}
                  onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter field label"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={newField.type}
                  onChange={(e) => setNewField({ ...newField, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                >
                  {fieldTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => setIsAddFieldModalOpen(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleAddField}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Add Field
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

