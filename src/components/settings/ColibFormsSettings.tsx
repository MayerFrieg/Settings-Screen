"use client";

import { useState } from "react";

export default function ColibFormsSettings() {
  const [emailNotificationPerForm, setEmailNotificationPerForm] = useState(false);
  const [emailNotificationOnRisk, setEmailNotificationOnRisk] = useState(true);
  const [defaultUser, setDefaultUser] = useState("mayer-frieg");
  const [linkFormsToClient, setLinkFormsToClient] = useState(true);
  const [shareFormsWithClients, setShareFormsWithClients] = useState(false);
  const [countersignature, setCountersignature] = useState("no-signature");
  const [automaticReminders, setAutomaticReminders] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Forms</h2>
      </div>

      {/* Notifications Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Notifications</h3>
        
        <div className="space-y-6">
          {/* Receive an email notification for each form completed */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Receive an email notification for each form completed
              </label>
            </div>
            <button
              onClick={() => setEmailNotificationPerForm(!emailNotificationPerForm)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                emailNotificationPerForm ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotificationPerForm ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Receive an email notification when a risk is detected */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Receive an email notification when a risk is detected in a form
              </label>
            </div>
            <button
              onClick={() => setEmailNotificationOnRisk(!emailNotificationOnRisk)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                emailNotificationOnRisk ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotificationOnRisk ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Default user receiving the notifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default user receiving the notifications
            </label>
            <select
              value={defaultUser}
              onChange={(e) => setDefaultUser(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="mayer-frieg">Mayer Frieg</option>
              <option value="admin">Administrator</option>
              <option value="clinic">Clinic</option>
            </select>
            <p className="mt-2 text-sm text-gray-600">
              If a practitioner has been assigned to the client having completed the form, the practitioner will receive the form. Otherwise, the default user you selected will be notified.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Clients</h3>
        
        <div className="space-y-6">
          {/* Link every completed form to a client record */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Link every completed form to a client record
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, Colib will link every new form completed to an existing client record or automatically create a new client record. Colib will use the first name, the last name and the birthdate (if provided) to try to match the form to an existing client record. You will also be able to map the answers of the form completed with the client information.
              </p>
            </div>
            <button
              onClick={() => setLinkFormsToClient(!linkFormsToClient)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                linkFormsToClient ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  linkFormsToClient ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Share completed forms with clients */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Share completed forms with clients
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, your clients will be able to download their completed forms on the client portal.
              </p>
            </div>
            <button
              onClick={() => setShareFormsWithClients(!shareFormsWithClients)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                shareFormsWithClients ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  shareFormsWithClients ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Signature</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Countersignature</label>
            <select
              value={countersignature}
              onChange={(e) => setCountersignature(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="no-signature">No other signature required</option>
              <option value="required">Signature required</option>
              <option value="optional">Signature optional</option>
            </select>
            <p className="mt-2 text-sm text-gray-600">
              You can decide if a signature from your business is required after your clients have signed their form. You will be able to countersign the documents on your results page.
            </p>
          </div>
        </div>
      </section>

      {/* Automatic Reminders Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Automatic reminders</h3>
        
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically send a reminder if a form sent to a client has not been completed
              </label>
              <p className="text-sm text-gray-600">
                Select this option if you want to automatically send an email to clients who have not completed a form after a certain number of days. You will be able to determine the number of days if you select this option.
              </p>
            </div>
            <button
              onClick={() => setAutomaticReminders(!automaticReminders)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                automaticReminders ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  automaticReminders ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
          Save
        </button>
      </div>
    </div>
  );
}

