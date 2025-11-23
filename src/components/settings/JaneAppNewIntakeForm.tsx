"use client";

import { useState } from "react";

interface JaneAppNewIntakeFormProps {
  onReturn?: () => void;
}

export default function JaneAppNewIntakeForm({ onReturn }: JaneAppNewIntakeFormProps) {
  const [activeTab, setActiveTab] = useState<"general" | "appointment-type" | "profile-fields" | "credit-cards" | "questionnaires" | "consents">("general");
  const [formName, setFormName] = useState("Intake Form (November 2025)");
  const [automaticOrManual, setAutomaticOrManual] = useState("Automatically prompt patients who have not completed");
  const [validFor, setValidFor] = useState("Forever");
  const [introduction, setIntroduction] = useState("Please take a moment to fill out our online intake form before your visit. All information is kept completely confidential.");
  const [appointmentType, setAppointmentType] = useState<"all" | "discipline" | "staff" | "treatments">("all");
  
  const [profileFields, setProfileFields] = useState([
    { name: "First Name", included: true, required: true },
    { name: "Last Name", included: true, required: true },
    { name: "Email", included: true, required: true },
    { name: "Preferred Name (if different)", included: true, required: false },
    { name: "Prefix / Title", included: true, required: false },
    { name: "Pronouns", included: true, required: false },
    { name: "Home Phone", included: true, required: false },
    { name: "Mobile Phone", included: true, required: false },
    { name: "Work Phone", included: false, required: false },
    { name: "Fax Phone", included: false, required: false },
    { name: "Address", included: true, required: false },
    { name: "Date of Birth", included: true, required: false },
    { name: "Gender", included: true, required: false },
    { name: "Sex", included: true, required: false },
    { name: "Personal Health Number", included: true, required: false },
    { name: "Guardian", included: true, required: false },
    { name: "Emergency Contact", included: true, required: false },
  ]);

  const [consents, setConsents] = useState([
    {
      id: 1,
      name: "Privacy and Sharing of Information",
      text: "I authorize the clinic and its associated health professionals to collect my personal and medical information as documented above. In addition, I authorize the clinic and its associated health professionals to communicate with my family doctor and/or referring doctor as deemed necessary for my beneficial treatment. I also understand that my personal and medical information is confidential and will only be disclosed to third parties with my permission.",
      type: "Must Agree",
      agreeDeclaration: "I agree",
    },
    {
      id: 2,
      name: "Cancellation Policy",
      text: "Your appointment time is reserved just for you. A late cancellation or missed visit leaves a hole in the therapists' day that could have been filled by another patient. As such, we require 24 hours notice for any cancellations or changes to your appointment. Patients who provide less than 24 hours notice, or miss their appointment, will be charged a cancellation fee to the card on file.",
      type: "Must Agree",
      agreeDeclaration: "I am aware of the Cancellation Policy",
    },
  ]);

  const handleToggleField = (index: number, field: "included" | "required") => {
    const updated = [...profileFields];
    if (field === "included") {
      updated[index].included = !updated[index].included;
      if (!updated[index].included) {
        updated[index].required = false;
      }
    } else {
      updated[index].required = !updated[index].required;
    }
    setProfileFields(updated);
  };

  const handleAddConsent = () => {
    setConsents([
      ...consents,
      {
        id: consents.length + 1,
        name: "",
        text: "",
        type: "Must Agree",
        agreeDeclaration: "I agree",
      },
    ]);
  };

  const handleRemoveConsent = (id: number) => {
    setConsents(consents.filter((c) => c.id !== id));
  };

  const handleUpdateConsent = (id: number, field: string, value: string) => {
    setConsents(consents.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">New Intake Form</h1>
        <div className="flex gap-2">
          <button
            onClick={onReturn}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
          >
            Return To Intake Forms
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            ...
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          {[
            { id: "general", label: "General" },
            { id: "appointment-type", label: "Appointment Type" },
            { id: "profile-fields", label: "Profile Fields" },
            { id: "credit-cards", label: "Credit Cards" },
            { id: "questionnaires", label: "Questionnaires" },
            { id: "consents", label: "Consents" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        {/* General Tab */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">General</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">- Required</span>
              </label>
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Automatic or Manual <span className="text-red-500">- Required</span>
              </label>
              <p className="text-gray-600 text-sm mb-3">
                Choose if patients will be automatically prompted to complete this intake form.
              </p>
              <select
                value={automaticOrManual}
                onChange={(e) => setAutomaticOrManual(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>Automatically prompt patients who have not completed</option>
                <option>Manually assign to patients</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valid for <span className="text-red-500">- Required</span>
              </label>
              <p className="text-gray-600 text-sm mb-3">
                Patients should complete this intake form again after this period.
              </p>
              <select
                value={validFor}
                onChange={(e) => setValidFor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>Forever</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>3 years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
              <textarea
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Introduction Preview:</label>
              <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm min-h-[60px]">
                {introduction}
              </div>
            </div>

            <div>
              <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm">
                View Formatting Instructions
              </a>
            </div>
          </div>
        )}

        {/* Appointment Type Tab */}
        {activeTab === "appointment-type" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Appointment Type</h2>
            <p className="text-gray-700 mb-4">
              Select the appointment type for which this intake form is required:
            </p>
            <div className="space-y-3">
              {[
                { id: "all", label: "All Appointments" },
                { id: "discipline", label: "A Specific Discipline" },
                { id: "staff", label: "A Specific Staff Member" },
                { id: "treatments", label: "Specific Treatments" },
              ].map((option) => (
                <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="appointmentType"
                    value={option.id}
                    checked={appointmentType === option.id}
                    onChange={(e) => setAppointmentType(e.target.value as any)}
                    className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Profile Fields Tab */}
        {activeTab === "profile-fields" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Profile</h2>
            <p className="text-gray-700 mb-4">
              Select the fields you would like the Patient to fill out in this intake form:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Field</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Included in Intake</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Required</th>
                  </tr>
                </thead>
                <tbody>
                  {profileFields.map((field, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {field.name}
                        {(field.name === "Mobile Phone" || field.name === "Sex") && (
                          <svg className="w-4 h-4 text-gray-400 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={field.included}
                          onChange={() => handleToggleField(index, "included")}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={field.required}
                          onChange={() => handleToggleField(index, "required")}
                          disabled={!field.included}
                          className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded disabled:opacity-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Credit Cards Tab */}
        {activeTab === "credit-cards" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Credit Cards</h2>
            <div className="flex items-start gap-6 p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-20 h-20 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevent no-shows with Jane Payments.</h3>
                <p className="text-gray-700 mb-4">
                  With Jane Payments, you can use your Intake Forms to request credit card information in a secure, PCI-compliant manner. Keeping a card on file will help prevent no-shows, collect A/R, and streamline your payments.
                </p>
                <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm font-medium">
                  Learn more about Jane Payments
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Questionnaires Tab */}
        {activeTab === "questionnaires" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Intake Questionnaires</h2>
            <p className="text-gray-700">
              Intake questionnaires can be used to collect any information you would like about your patient, such as medical history. The questionnaire will be added to the patient's chart when it is filled out.
            </p>
            <p className="text-gray-700">
              Templates from the Chart Library can be added to the questionnaire, but any inadmissible items (Spine, Body Chart, Upload, Vitals, Primary Complaint, Sketch, Side-By-Side, and Smart Options & Narrative) will be removed before adding.
            </p>
            <p className="text-gray-700">
              Building a questionnaire is just like building a chart template.{" "}
              <a href="#" className="text-teal-600 hover:text-teal-700 underline">Learn How To Build A Template</a>.
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg mb-6">This intake form questionnaire is currently empty! Build it out by adding items.</p>
              <div className="flex gap-3 justify-center">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Template Library
                </button>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Item
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Consents Tab */}
        {activeTab === "consents" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Consents</h2>
            <div className="space-y-6">
              {consents.map((consent, index) => (
                <div key={consent.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-sm">
                        {index + 1}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveConsent(consent.id)}
                      className="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm font-medium transition-colors"
                    >
                      Remove Consent
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">- Required</span>
                      </label>
                      <p className="text-gray-500 text-xs mb-2">Title or name of this consent. Ex. Cancellation Policy.</p>
                      <input
                        type="text"
                        value={consent.name}
                        onChange={(e) => handleUpdateConsent(consent.id, "name", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Text</label>
                      <p className="text-gray-500 text-xs mb-2">The policy the patient is agreeing to. Optional.</p>
                      <textarea
                        value={consent.text}
                        onChange={(e) => handleUpdateConsent(consent.id, "text", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                      <p className="text-gray-500 text-xs mb-2">The type of acknowledgement the patient will make.</p>
                      <select
                        value={consent.type}
                        onChange={(e) => handleUpdateConsent(consent.id, "type", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                      >
                        <option>Must Agree</option>
                        <option>Optional</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Agree Declaration <span className="text-red-500">- Required</span>
                      </label>
                      <p className="text-gray-500 text-xs mb-2">
                        The text for the agree option the patient can check. Ex. I Agree. Or, I am aware of the cancellation policy.
                      </p>
                      <input
                        type="text"
                        value={consent.agreeDeclaration}
                        onChange={(e) => handleUpdateConsent(consent.id, "agreeDeclaration", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddConsent}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Consent
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onReturn}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
        >
          Cancel
        </button>
        {activeTab !== "consents" && (
          <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
            Next
          </button>
        )}
        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save Intake Form
        </button>
      </div>
    </div>
  );
}

