"use client";

import { useState } from "react";

export default function SimplePracticeShareableDocuments() {
  const [showNewConsentFormModal, setShowNewConsentFormModal] = useState(false);
  const [consentFormTitle, setConsentFormTitle] = useState("");
  const [consentForms, setConsentForms] = useState([
    { id: 1, name: "Consent for Telehealth Consultation", isDefault: false },
    { id: 2, name: "Credit Card Authorization", isDefault: true },
    { id: 3, name: "Consent to Record Audio", isDefault: false },
    { id: 4, name: "Consent for Use of Artificial Intelligence (AI) Tools in Therapy Services", isDefault: false },
    { id: 5, name: "Notice of Privacy Practices", isDefault: true },
    { id: 6, name: "Informed Consent for Psychotherapy", isDefault: true },
    { id: 7, name: "Practice Policies", isDefault: true },
  ]);

  const [intakeForms, setIntakeForms] = useState([
    { id: 1, name: "COVID-19 Pre-Appointment Screening Questionnaire", isDefault: false },
    { id: 2, name: "Standard Intake Questionnaire Template", isDefault: true },
    { id: 3, name: "Release of Information", isDefault: false },
    { id: 4, name: "Consent for Minor Usage of Software Services", isDefault: false },
    { id: 5, name: "Third Party Financial Responsibility Form", isDefault: false },
  ]);

  const toggleConsentFormDefault = (id: number) => {
    setConsentForms(consentForms.map(form => 
      form.id === id ? { ...form, isDefault: !form.isDefault } : form
    ));
  };

  const toggleIntakeFormDefault = (id: number) => {
    setIntakeForms(intakeForms.map(form => 
      form.id === id ? { ...form, isDefault: !form.isDefault } : form
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shareable documents</h1>
          <p className="text-sm text-gray-900 mt-1">Manage default intake documents and uploaded files.</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Watch a quick video about Shareable documents
        </a>
      </div>

      {/* Consent forms */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Consent forms</h2>
          <p className="text-sm text-gray-900 mb-4">
            Read and signed by clients via the Client Portal.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Learn more</a>
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-900">
              <strong>Legal disclaimer:</strong> Consent forms are for reference only. It's your responsibility to customize them and ensure they meet the legal requirements of your state.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-1">
                      Default
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                {consentForms.map((form) => (
                  <tr key={form.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{form.name}</td>
                    <td className="py-3 px-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.isDefault}
                          onChange={() => toggleConsentFormDefault(form.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-900">Yes</span>
                      </label>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Edit</a>
                        {form.id !== 2 && form.id !== 5 && form.id !== 6 && form.id !== 7 && (
                          <a href="#" className="text-sm text-red-600 hover:text-red-700 hover:underline">Delete</a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => setShowNewConsentFormModal(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New consent form
          </button>
        </div>
      </div>

      {/* Uploaded files */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Uploaded files</h2>
          <p className="text-sm text-gray-900 mb-4">
            Manage PDF and image files to share with clients, like homework, handouts, and articles.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Downloadable File
          </button>
        </div>
      </div>

      {/* Scored measures */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Scored measures</h2>
          <p className="text-sm text-gray-900 mb-4">
            Track client-reported symptoms and outcomes with validated measurement tools.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-1">
                      Default
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">GAD-7</td>
                  <td className="py-3 px-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">Yes</span>
                    </label>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <svg className="w-5 h-5 text-gray-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">PHQ-9</td>
                  <td className="py-3 px-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">Yes</span>
                    </label>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <svg className="w-5 h-5 text-gray-400 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Intake forms */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Intake forms</h2>
          <p className="text-sm text-gray-900 mb-4">
            Manage intake forms, assessments, and questionnaires filled out by your clients in the Client Portal.{" "}
            <a href="/simplepractice/template-library" className="text-blue-600 hover:text-blue-700 hover:underline">Manage in template library</a>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-1">
                      Default
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                {intakeForms.map((form) => (
                  <tr key={form.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{form.name}</td>
                    <td className="py-3 px-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.isDefault}
                          onChange={() => toggleIntakeFormDefault(form.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-900">Yes</span>
                      </label>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Edit</a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Manage Forms
          </button>
        </div>
      </div>

      {/* Demographics and Credit Card Forms */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Demographics and Credit Card Forms</h2>
          <p className="text-sm text-gray-900 mb-4">
            Customize your demographics form and choose whether or not to collect credit card information.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Learn more</a>
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-sm text-gray-900">Demographics form</span>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Edit</a>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex flex-col">
                <span className="text-sm text-gray-900">Credit card information</span>
                <a href="/simplepractice/online-payments" className="text-xs text-blue-600 hover:text-blue-700 hover:underline mt-1">
                  Enable Online Payments to accept credit cards
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Consent Form Modal */}
      {showNewConsentFormModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white w-96 h-full shadow-xl overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setShowNewConsentFormModal(false)}
                  className="text-gray-400 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (consentFormTitle.trim()) {
                      setConsentForms([...consentForms, { id: consentForms.length + 1, name: consentFormTitle, isDefault: false }]);
                      setConsentFormTitle("");
                      setShowNewConsentFormModal(false);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-4">New consent form</h2>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-900 mb-2">Title</label>
                <input
                  type="text"
                  value={consentFormTitle}
                  onChange={(e) => setConsentFormTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter consent form title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Content</label>
                <div className="border border-gray-300 rounded-lg">
                  {/* Rich text editor toolbar */}
                  <div className="border-b border-gray-300 p-2 flex items-center gap-2 flex-wrap">
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Bold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6zM6 12h9" />
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Italic">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Strikethrough">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                      </svg>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Unordered list">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Ordered list">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Link">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Undo">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded" title="Redo">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* Text area */}
                  <textarea
                    className="w-full p-4 min-h-[400px] focus:outline-none resize-none"
                    placeholder="Begin typing here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

