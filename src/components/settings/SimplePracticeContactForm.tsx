"use client";

import { useState } from "react";

export default function SimplePracticeContactForm() {
  const [practiceContactFormEnabled, setPracticeContactFormEnabled] = useState(false);
  const [therapyFinderEnabled, setTherapyFinderEnabled] = useState(false);
  const [sendToClinician, setSendToClinician] = useState(true);
  const [sendToOneEmail, setSendToOneEmail] = useState(false);
  const [allowIndividual, setAllowIndividual] = useState(true);
  const [allowCouple, setAllowCouple] = useState(true);
  const [allowContacts, setAllowContacts] = useState(true);
  const [sendConfirmationEmail, setSendConfirmationEmail] = useState("no");
  const [showPrescreenerBanner, setShowPrescreenerBanner] = useState(true);

  const contactFormUrl = "https://mayer-frieg.clientsecure.me/contact-widget";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(contactFormUrl);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact form</h1>
          <p className="text-sm text-gray-900 mt-1">Get website inquiries sent directly to SimplePractice</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about the contact form
        </a>
      </div>

      {/* Prescreener Banner */}
      {showPrescreenerBanner && (
        <div className="bg-gray-50 border-l-4 border-blue-600 rounded-lg p-4 relative">
          <button
            onClick={() => setShowPrescreenerBanner(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-sm text-gray-900 pr-6">
            Screen new clients with custom questions on your online appointment request widget and contact form.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Explore Prescreener
            </a>
            .
          </p>
        </div>
      )}

      {/* PRACTICE SETTINGS Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Practice Contact form</h2>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
              PRACTICE SETTINGS
            </a>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Contact form inquiries are added to SimplePractice as prospective clients. The form can display on your
                Client Portal and Professional Website (depending on your practice's settings).
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
              <input
                type="checkbox"
                checked={practiceContactFormEnabled}
                onChange={(e) => setPracticeContactFormEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Share your practice's contact form */}
          {practiceContactFormEnabled && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Share your practice's contact form</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={contactFormUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 font-mono text-xs"
                />
                <button
                  onClick={handleCopyUrl}
                  className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact form settings */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Contact form settings</h2>

          <div className="space-y-6">
            {/* Send Therapy Finder contact form inquiries to */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <label className="block text-sm font-medium text-gray-900">
                  Send Therapy Finder contact form inquiries to:
                </label>
                <button className="text-gray-400 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sendToClinician}
                    onChange={(e) => setSendToClinician(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Clinician receiving inquiry</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sendToOneEmail}
                    onChange={(e) => setSendToOneEmail(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">One email address</span>
                </label>
              </div>
            </div>

            {/* Allow contact form inquiries from */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Allow contact form inquiries from:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowIndividual}
                    onChange={(e) => setAllowIndividual(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">New individual clients</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowCouple}
                    onChange={(e) => setAllowCouple(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">New couple clients</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowContacts}
                    onChange={(e) => setAllowContacts(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">New contacts (on behalf of someone else)</span>
                </label>
              </div>
            </div>

            {/* Send contact form inquiry confirmation email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Send contact form inquiry confirmation email
              </label>
              <p className="text-xs text-gray-900 mb-3">
                To customize the content of email template,{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  go to email settings
                </a>
                .
              </p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sendConfirmationEmail"
                    value="yes"
                    checked={sendConfirmationEmail === "yes"}
                    onChange={(e) => setSendConfirmationEmail(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sendConfirmationEmail"
                    value="no"
                    checked={sendConfirmationEmail === "no"}
                    onChange={(e) => setSendConfirmationEmail(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INDIVIDUAL SETTINGS Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Therapy Finder contact form</h2>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
              INDIVIDUAL SETTINGS
            </a>
          </div>

          {/* Warning Banner */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-orange-900 mb-1">Your Therapy Finder profile is not published</p>
                <p className="text-sm text-orange-800">
                  Publish your profile to get contact form inquiries from Therapy Finder.{" "}
                  <a href="#" className="text-orange-700 hover:text-orange-800 hover:underline font-medium">
                    Go to public profile settings
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Get contact form inquiries from the Therapy Finder Directory.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
              <input
                type="checkbox"
                checked={therapyFinderEnabled}
                onChange={(e) => setTherapyFinderEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

