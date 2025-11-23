"use client";

import { useState } from "react";

interface FormField {
  id: string;
  label: string;
  includeInSignup: boolean;
  required: boolean;
  helpText?: string;
  requiredDisabled?: boolean;
}

export default function JaneAppPatientFormFields() {
  const [fields, setFields] = useState<FormField[]>([
    {
      id: "first-name",
      label: "First Name",
      includeInSignup: true,
      required: true,
    },
    {
      id: "last-name",
      label: "Last Name",
      includeInSignup: true,
      required: true,
    },
    {
      id: "email",
      label: "Email",
      includeInSignup: true,
      required: true,
    },
    {
      id: "phone",
      label: "Mobile Phone and/or Home Phone",
      includeInSignup: true,
      required: false,
      requiredDisabled: true,
      helpText: "A mobile phone is required if you would like to receive SMS appointment reminders.",
    },
    {
      id: "date-of-birth",
      label: "Date of Birth",
      includeInSignup: false,
      required: false,
    },
    {
      id: "personal-health-number",
      label: "Personal Health Number",
      includeInSignup: false,
      required: false,
    },
    {
      id: "marketing-emails",
      label: "Marketing Emails",
      includeInSignup: true,
      required: false,
    },
    {
      id: "how-did-you-hear",
      label: "How Did You Hear About Us?",
      includeInSignup: true,
      required: true,
    },
    {
      id: "referred-to",
      label: "Who Were You Referred To?",
      includeInSignup: true,
      required: true,
    },
    {
      id: "preferred-name",
      label: "Preferred Name (if different)",
      includeInSignup: true,
      required: false,
      helpText: "This is the name you identify with. Providing this allows the staff to address you appropriately.",
    },
    {
      id: "pronouns",
      label: "Pronouns",
      includeInSignup: false,
      required: false,
    },
  ]);

  const handleIncludeChange = (id: string, checked: boolean) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id
          ? { ...field, includeInSignup: checked, required: checked ? field.required : false }
          : field
      )
    );
  };

  const handleRequiredChange = (id: string, checked: boolean) => {
    setFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, required: checked } : field))
    );
  };

  const handleSave = () => {
    // In a real app, this would save the settings
    console.log("Saving patient form fields:", fields);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Patient Form Fields</h1>

      {/* Form Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">New Patient Signup Form</h2>
        <p className="text-gray-700 mb-6">
          Select the fields you would like the patients to fill out when signing up.
        </p>

        {/* Fields Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Field
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Include in Patient Sign Up
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Required
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fields.map((field) => (
                <tr key={field.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{field.label}</div>
                      {field.helpText && (
                        <p className="text-xs text-gray-500 mt-1">{field.helpText}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={field.includeInSignup}
                      onChange={(e) => handleIncludeChange(field.id, e.target.checked)}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={field.required}
                      onChange={(e) => handleRequiredChange(field.id, e.target.checked)}
                      disabled={!field.includeInSignup || field.requiredDisabled}
                      className={`h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded ${
                        !field.includeInSignup || field.requiredDisabled
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

