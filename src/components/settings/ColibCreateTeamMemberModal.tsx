"use client";

import { useState } from "react";

interface TeamMemberData {
  email: string;
  firstName: string;
  lastName: string;
  qualification: string;
  licenceNumber: string;
  role: string;
  isPractitioner: boolean;
  hideMedicalInfo: boolean;
  hideInvoicingInfo: boolean;
  enable2FA: boolean;
  hasIPRestrictions: boolean;
  schedulerColor: string;
}

interface TeamMemberFormData {
  email: string;
  firstName: string;
  lastName: string;
  qualification: string;
  licenceNumber: string;
}

interface ColibCreateTeamMemberModalProps {
  onClose: () => void;
  onSave: (member: TeamMemberFormData) => void;
}

export default function ColibCreateTeamMemberModal({ onClose, onSave }: ColibCreateTeamMemberModalProps) {
  const [step, setStep] = useState<"profile" | "rights">("profile");
  const [formData, setFormData] = useState<TeamMemberData>({
    email: "",
    firstName: "",
    lastName: "",
    qualification: "",
    licenceNumber: "",
    role: "",
    isPractitioner: false,
    hideMedicalInfo: false,
    hideInvoicingInfo: false,
    enable2FA: false,
    hasIPRestrictions: false,
    schedulerColor: "#22c55e",
  });

  const schedulerColors = [
    "#3b82f6", "#f97316", "#8b5cf6", "#10b981", "#ec4899", "#ef4444",
    "#84cc16", "#06b6d4", "#f59e0b", "#6366f1", "#14b8a6", "#64748b",
    "#22c55e", "#a855f7", "#eab308", "#dc2626", "#000000", "#6b7280",
  ];

  const handleInputChange = (field: keyof TeamMemberData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === "profile") {
      setStep("rights");
    }
  };

  const handleSave = () => {
    onSave({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      qualification: formData.qualification,
      licenceNumber: formData.licenceNumber,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Team Member Creation</h2>
            <p className="text-sm text-gray-600 mt-1">
              {step === "profile" ? "Profile Picture & General Info." : "Rights, Security & Preferences"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {step === "profile" ? (
            <div className="space-y-6">
              {/* Profile Picture Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Profile Picture</h3>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                    <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
                    <p className="text-sm text-gray-600 mb-2">
                      Drag a file here or click to choose an image from your computer.
                    </p>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/bmp"
                      className="hidden"
                      id="profile-upload"
                    />
                    <label
                      htmlFor="profile-upload"
                      className="inline-block px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 cursor-pointer hover:bg-gray-50"
                    >
                      No file chosen
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Restrictions: jpg, jpeg, png, or bmp format
                  </p>
                </div>
              </div>

              {/* General Info Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">General Info</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter email"
                    />
                    <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter first name"
                    />
                    <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter last name"
                    />
                    <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                    <input
                      type="text"
                      value={formData.qualification}
                      onChange={(e) => handleInputChange("qualification", e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter qualification"
                    />
                    <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Licence Number</label>
                    <input
                      type="text"
                      value={formData.licenceNumber}
                      onChange={(e) => handleInputChange("licenceNumber", e.target.value)}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter licence number"
                    />
                    <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Rights Section */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Rights</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                    >
                      <option value="">-- Select --</option>
                      <option value="administrator">Administrator</option>
                      <option value="staff">Staff</option>
                    </select>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <p>Users with 'Administrator' role have a full access for this account.</p>
                      <p>Users with 'Staff' role cannot create and edit forms and access the following sections: Settings, Plan & Payments, Analytics.</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Practitioner?</label>
                      <p className="text-sm text-gray-600">Appointments can only be assigned to practitioners.</p>
                    </div>
                    <button
                      onClick={() => handleInputChange("isPractitioner", !formData.isPractitioner)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        formData.isPractitioner ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.isPractitioner ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hide medical information?</label>
                      <p className="text-sm text-gray-600">
                        If you select this option, the user will not be able to view the notes, documents, or forms of clients. A user with this option enabled will only be able to view the documents they have created. An audit record will be created every time this option is modified for a user.
                      </p>
                    </div>
                    <button
                      onClick={() => handleInputChange("hideMedicalInfo", !formData.hideMedicalInfo)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        formData.hideMedicalInfo ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.hideMedicalInfo ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hide invoicing and billing information?</label>
                      <p className="text-sm text-gray-600">
                        If you select this option, the user will not be able to view the invoices, receipts, or payment cards of clients. Supervisors can be granted permissions to see (read-only) other practitioner's assigned clients records and notes.
                      </p>
                    </div>
                    <button
                      onClick={() => handleInputChange("hideInvoicingInfo", !formData.hideInvoicingInfo)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        formData.hideInvoicingInfo ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.hideInvoicingInfo ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Enable 2 factor authentication (2FA)</label>
                    </div>
                    <button
                      onClick={() => handleInputChange("enable2FA", !formData.enable2FA)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        formData.enable2FA ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.enable2FA ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Has IP addresses restrictions?</label>
                      <p className="text-sm text-gray-600">
                        Select this option if you want this user to connect to Colib only from the list of IP addresses defined in the 'Security' tab.
                      </p>
                    </div>
                    <button
                      onClick={() => handleInputChange("hasIPRestrictions", !formData.hasIPRestrictions)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                        formData.hasIPRestrictions ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.hasIPRestrictions ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* Default Color for Scheduler Section */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Default color for the scheduler</h3>
                <div className="grid grid-cols-6 gap-3">
                  {schedulerColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleInputChange("schedulerColor", color)}
                      className={`w-12 h-12 rounded border-2 transition-all ${
                        formData.schedulerColor === color ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <div className="flex gap-3">
            {step === "profile" ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Next
              </button>
            ) : (
              <>
                <button
                  onClick={() => setStep("profile")}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

