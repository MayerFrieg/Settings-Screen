"use client";

import { useState } from "react";

export default function ColibNotesSettings() {
  const [useTemplates, setUseTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("soap");
  const [aiNoteGeneration, setAiNoteGeneration] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Notes</h2>
      </div>

      {/* AI-powered note generation settings */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">AI-powered note generation settings</h3>
        
        <div className="space-y-6">
          {/* Use templates subsection */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Use templates
                </label>
                <p className="text-sm text-gray-600">
                  When using templates for AI Notes, the AI-generated content will fit the selected note model, instead of the general summary.
                </p>
              </div>
              <button
                onClick={() => setUseTemplates(!useTemplates)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                  useTemplates ? "bg-teal-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    useTemplates ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {useTemplates && (
              <div className="ml-0 space-y-3 pl-4 border-l-2 border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                  <select
                    value={selectedTemplate}
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                  >
                    <option value="soap">SOAP</option>
                    <option value="dap">DAP</option>
                    <option value="birt">BIRT</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600">
                  Select the desired template to format your AI notes. More templates will be available in the future.{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    click here
                  </a>{" "}
                  to obtain more information regarding templates, and{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                    Please contact us
                  </a>{" "}
                  to add your own template of notes.
                </p>
              </div>
            )}
          </div>

          {/* AI Note generation for Colib's Online meetings subsection */}
          <div className="flex items-start justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                AI Note generation for Colib's Online meetings
              </label>
              <p className="text-sm text-gray-600 mb-3">
                If you select this option, a note will automatically be created and added to the note section in your client file for that appointment. This settings is only applied to sessions with Colib's videoconferencing tool. The note will be saved as a draft, but not signed. We encourage you to always read and review AI generated notes, as your human judgement cannot be replaced by artificial intelligence. This is powered by PIPEDA/PHIPA/HIPAA compliant tools, so that all Personal Health Information are securely processed, and stored on our servers in Canada. A note will be generated if a dialogue of at least 10 minutes occurs between the practitioner and one or more patients during the video session.
              </p>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  AI-powered note generation is available as an add-on feature. Notes can be purchased in packages or billed individually.{" "}
                  <a href="#" className="text-orange-900 hover:text-orange-950 underline font-medium">
                    Click here
                  </a>{" "}
                  for more information. This feature remains free during your trial period.
                </p>
              </div>
            </div>
            <button
              onClick={() => setAiNoteGeneration(!aiNoteGeneration)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                aiNoteGeneration ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  aiNoteGeneration ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>

      {/* AI-powered note generation packages */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">AI-powered note generation packages</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-sm text-orange-800 font-medium">
              You need to enter your payment information to purchase AI note generation packages.
            </p>
          </div>

          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No package yet.</p>
          </div>

          <p className="text-sm text-gray-600">
            If you plan to use AI Notes consistently, you can benefit from discounts with pre-purchased packages. These packages are independent from your Colib subscription plan, they are a one-time purchase that grant you notes credits to be used within 12 months of the purchase date.
          </p>
        </div>
      </section>

      {/* Templates */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Templates</h3>
          <div className="flex items-center gap-4">
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Template
            </button>
            <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Import Template From Library
            </button>
          </div>
        </div>

        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No template yet.</p>
        </div>

        <p className="text-sm text-gray-600">
          This section allows you to manage your templates of note. These templates can be used to create structured notes on the client profile. Follow this article to learn how to add tags to your notes and incorporate client data:{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">
            How to Use Client Data Tags in Notes Templates?
          </a>
        </p>
      </section>
    </div>
  );
}

