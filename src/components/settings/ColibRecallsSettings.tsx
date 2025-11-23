"use client";

import { useState } from "react";

export default function ColibRecallsSettings() {
  const [practitionerSpecificRecalls, setPractitionerSpecificRecalls] = useState(false);
  const [recalls, setRecalls] = useState<any[]>([]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Recalls</h2>
      </div>

      {/* List Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">List</h3>
        
        <div className="space-y-6">
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Recall
            </button>
          </div>

          {recalls.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No recall yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recalls.map((recall) => (
                <div key={recall.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{recall.name}</p>
                    <p className="text-sm text-gray-600">{recall.description}</p>
                  </div>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-600">
            This section allows you to manage the recalls for your clients. You can set up automatic emails and/or text messages to your clients if they have not booked certain types of appointments after a defined amount of time. A recall does not apply retroactively. You can edit the recall and view the notifications sent for it by clicking the pencil icon in this list.
          </p>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Preferences</h3>
        
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Practitioner Specific Recalls
              </label>
              <p className="text-sm text-gray-600">
                This option allows to send recalls from a specific practitioner that the client is usually seeing, and link to their practitioner-specific booking link. Recalls will be signed by the practitioner's name before the clinic's name. If this option is not selected, the signatures set in 'Communications' tab will be used.
              </p>
            </div>
            <button
              onClick={() => setPractitionerSpecificRecalls(!practitionerSpecificRecalls)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                practitionerSpecificRecalls ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  practitionerSpecificRecalls ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

