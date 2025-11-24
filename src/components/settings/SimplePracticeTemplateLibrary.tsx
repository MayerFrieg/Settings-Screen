"use client";

import { useState } from "react";

type Template = {
  id: string;
  name: string;
  category: string;
  checked: boolean;
};

export default function SimplePracticeTemplateLibrary() {
  const [showExpandBanner, setShowExpandBanner] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["scored-measures", "intake-forms", "progress-notes", "diagnosis-treatment", "other-documents"])
  );
  const [includePracticeLogo, setIncludePracticeLogo] = useState(false);
  const [footerInfo, setFooterInfo] = useState("");

  const [templates, setTemplates] = useState<Template[]>([
    // Scored measures
    { id: "1", name: "GAD-7 (Generalized Anxiety Disorder)", category: "scored-measures", checked: true },
    { id: "2", name: "PHQ-9 (Patient Health Questionnaire)", category: "scored-measures", checked: true },
    // Intake forms
    { id: "3", name: "Consent for Minor Usage of Software Services", category: "intake-forms", checked: true },
    { id: "4", name: "COVID-19 Pre-Appointment Screening Questionnaire", category: "intake-forms", checked: true },
    { id: "5", name: "Release of Information", category: "intake-forms", checked: true },
    { id: "6", name: "Standard Intake Questionnaire Template (Default)", category: "intake-forms", checked: false },
    // Progress notes
    { id: "7", name: "Biopsychosocial Assessment & SOAP", category: "progress-notes", checked: true },
    { id: "8", name: "DAP Note", category: "progress-notes", checked: true },
    { id: "9", name: "Group Therapy Progress Note", category: "progress-notes", checked: true },
    { id: "10", name: "SOAP Note", category: "progress-notes", checked: true },
    { id: "11", name: "Standard Progress Note", category: "progress-notes", checked: true },
    { id: "12", name: "Treatment Plan & Goals Note", category: "progress-notes", checked: true },
    // Diagnosis and treatment plans
    { id: "13", name: "Behavioral Health Treatment Plan", category: "diagnosis-treatment", checked: true },
    { id: "14", name: "Couples Behavioral Health Treatment Plan", category: "diagnosis-treatment", checked: true },
    { id: "15", name: "Initial Clinical Mental Health Assessment and Treatment Plan", category: "diagnosis-treatment", checked: true },
    // Other documents
    { id: "16", name: "Discharge Summary Note", category: "other-documents", checked: true },
    { id: "17", name: "Good Faith Estimate for Health Care Items and Services", category: "other-documents", checked: true },
    { id: "18", name: "Release of Information", category: "other-documents", checked: true },
    { id: "19", name: "Third Party Financial Responsibility Form", category: "other-documents", checked: true },
  ]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleTemplate = (id: string) => {
    setTemplates(templates.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)));
  };

  const categories = [
    {
      id: "scored-measures",
      title: "Scored measures",
      description: "Use these templates to track client-reported symptoms and outcomes.",
    },
    {
      id: "intake-forms",
      title: "Intake forms",
      description: "Templates to gather information from clients via the Client Portal.",
    },
    {
      id: "progress-notes",
      title: "Progress notes / Session notes",
      description: "Templates to record the observations, interventions, and outcomes from each appointment.",
    },
    {
      id: "diagnosis-treatment",
      title: "Diagnosis and treatment plans",
      description: "Templates to outline a client's plan of care.",
    },
    {
      id: "other-documents",
      title: "Other documents",
      description: "Templates for documentation that's not related to specific appointments.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Template library</h1>
          <p className="text-sm text-gray-900 mt-1">Organize the documentation templates used by your practice</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Watch a quick video about Template library
        </a>
      </div>

      {/* Expand your template library banner */}
      {showExpandBanner && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm relative">
          <button
            onClick={() => setShowExpandBanner(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-6 flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Expand your template library</h2>
              <p className="text-sm text-gray-900 mb-4">
                Find customizable, pre-built templates designed for your specialty or start with a blank canvas in the
                template builder.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  Browse pre-built templates
                </button>
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 border border-gray-300">
                  Build new template
                </button>
              </div>
            </div>
            <div className="ml-8 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Template Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const categoryTemplates = templates.filter((t) => t.category === category.id);
          const isExpanded = expandedSections.has(category.id);

          return (
            <div key={category.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-900 mt-1">{category.description}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="border-t border-gray-200 p-4">
                  {/* Special handling for Intake forms */}
                  {category.id === "intake-forms" && (
                    <div className="mb-4">
                      <a
                        href="/simplepractice/shareable-documents"
                        className="text-sm text-gray-900 hover:text-blue-600 hover:underline"
                      >
                        Manage your client intake package, including consent forms, in Shareable documents.
                      </a>
                    </div>
                  )}

                  {/* Special handling for Scored measures */}
                  {category.id === "scored-measures" && (
                    <div className="mb-4">
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                        Learn about using scored measures.
                      </a>
                    </div>
                  )}

                  <div className="space-y-2">
                    {categoryTemplates.map((template) => (
                      <div
                        key={template.id}
                        className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={template.checked}
                            onChange={() => toggleTemplate(template.id)}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                        </label>
                        <a
                          href="#"
                          className="flex-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {template.name}
                        </a>
                        <div className="flex items-center gap-2">
                          <button className="text-gray-400 hover:text-gray-900" title="View">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-900" title="Copy">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-red-600" title="Delete">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline inline-block mt-2">
                      + Add new
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Standard client document format */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Standard client document format</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includePracticeLogo}
                onChange={(e) => setIncludePracticeLogo(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">Include practice logo</span>
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Footer information</label>
              <textarea
                value={footerInfo}
                onChange={(e) => setFooterInfo(e.target.value)}
                placeholder="Information that will show in the footer of your billing documents goes here. The character limit is 120 characters."
                maxLength={120}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <p className="text-xs text-gray-900 mt-1">{footerInfo.length}/120 characters</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              Save format
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

