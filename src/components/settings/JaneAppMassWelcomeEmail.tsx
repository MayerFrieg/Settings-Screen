"use client";

import { useState } from "react";

export default function JaneAppMassWelcomeEmail() {
  const [activeTab, setActiveTab] = useState<"intro" | "body">("intro");
  const [introText, setIntroText] = useState(
    "Welcome to our new online booking system. With your Account, you will be able to schedule appointments, cancel upcoming appointments, and view your appointment history. The link below will let you set up a username and password for your existing GraceHealth profile."
  );
  const [bodyText, setBodyText] = useState("");
  const [showFormattingInstructions, setShowFormattingInstructions] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Mass Welcome Email</h1>

      {/* Introductory Text */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
        <p className="text-gray-700">
          Send your patients a welcome email that will give them a personalized link to set up a username and password. This will provide access to their patient profile and allow them to book appointments online (if you offer online booking).
        </p>
        <p className="text-gray-700">
          Once you're all set to start using Jane and have added your patients, either manually or through an import, you can send a mass welcome email to all your patients in one go to welcome them and invite them to set up their patient profile.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">Learn more about the Mass Welcome Email</a>
        </p>
        <p className="text-gray-700">
          As you continue to add new clients in the future, you can send individual welcome emails to each new patient after you enter their information into Jane.
        </p>
      </div>

      {/* Who will the Mass Welcome Email go to? */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Who will the Mass Welcome Email go to?</h2>
        <p className="text-gray-700 mb-3">The Mass Welcome Email will be sent to all patients who:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 ml-4">
          <li>are active (i.e. not marked 'deceased' or 'discharged')</li>
          <li>have a valid email address</li>
          <li>have not yet set up their username</li>
          <li>have not received a welcome email in the past (from a mass welcome email or individual welcome email)</li>
        </ul>
        <p className="text-gray-700 font-medium">
          0 clients are eligible to get the Mass Welcome Email.
        </p>
      </div>

      {/* Email Content Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Editor */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Content</h2>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("intro")}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "intro"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Intro Text
            </button>
            <button
              onClick={() => setActiveTab("body")}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "body"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Body Text
            </button>
          </div>

          {/* Text Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your text here:</label>
            <textarea
              value={activeTab === "intro" ? introText : bodyText}
              onChange={(e) => activeTab === "intro" ? setIntroText(e.target.value) : setBodyText(e.target.value)}
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder={activeTab === "intro" ? "Enter intro text..." : "Enter body text..."}
            />
          </div>

          {/* Live Preview */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Live Preview:</label>
            <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm min-h-[60px]">
              {activeTab === "intro" ? introText || "Preview will appear here..." : bodyText || "Preview will appear here..."}
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
            {activeTab === "intro" ? "Save Intro & Preview" : "Save Body & Preview"}
          </button>

          {/* Formatting Instructions */}
          <div className="mt-6">
            <button
              onClick={() => setShowFormattingInstructions(!showFormattingInstructions)}
              className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center gap-1"
            >
              View Formatting Instructions
              <svg
                className={`w-4 h-4 transition-transform ${showFormattingInstructions ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showFormattingInstructions && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">You can insert the following variables in the text:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                    {activeTab === "intro" ? (
                      <>
                        <li><code className="bg-gray-200 px-1 rounded">%[company]</code></li>
                        <li><code className="bg-gray-200 px-1 rounded">%[phrases_account]</code></li>
                      </>
                    ) : (
                      <li><code className="bg-gray-200 px-1 rounded">%[first_name]</code></li>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Maximum Length:</p>
                  <p className="text-sm text-gray-600">{activeTab === "intro" ? "1000 characters" : "4000 characters"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">You can format the text here using Markdown, which looks like this:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                    <li><code className="bg-gray-200 px-1 rounded">*italics*</code> for <em>italics</em></li>
                    <li><code className="bg-gray-200 px-1 rounded">**bold**</code> for <strong>bold</strong></li>
                    <li><code className="bg-gray-200 px-1 rounded">Links: [text for link in square brackets](http://linkaddress.com)</code></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Example:</p>
                  <p className="text-sm text-gray-600 italic">
                    It's very easy to make some words <strong>bold</strong> and other words <em>italic</em> with Markdown. You can even{" "}
                    <a href="http://www.html5zombo.com" className="text-teal-600 underline">link to funny things!</a>
                  </p>
                </div>
                <div>
                  <a href="#" className="text-sm text-teal-600 hover:text-teal-700 underline">
                    Check out a complete markdown cheat sheet
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Email Preview */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Preview</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Email Header */}
            <div className="bg-teal-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Welcome.</h3>
              <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                SET UP YOUR ACCOUNT
              </button>
            </div>

            {/* Email Content */}
            <div className="p-6 bg-white space-y-4">
              <p className="text-gray-900 font-medium">Grace,</p>
              <div className="text-gray-700 space-y-3">
                {introText && (
                  <p>{introText}</p>
                )}
                {bodyText && (
                  <p>{bodyText}</p>
                )}
                {!introText && !bodyText && (
                  <p className="text-gray-500 italic">Email content will appear here...</p>
                )}
                <p>Please click the link below to set up access to your GraceHealth Account.</p>
              </div>
              {bodyText && (
                <p className="text-gray-700">
                  With your Online Account you will be able to schedule appointments, cancel upcoming appointments, and view your appointment history.
                </p>
              )}
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-2 text-sm">
              <p className="font-medium text-gray-900">Located at:</p>
              <p className="text-gray-700">unit 10</p>
              <p className="text-gray-700">Kitchener, ON, N2A 4E1</p>
              <p className="text-gray-700">Telephone: 6043001051</p>
              <p className="text-gray-700">
                Email: <a href="mailto:Phillip.henein@gmail.com" className="text-teal-600 hover:text-teal-700 underline">Phillip.henein@gmail.com</a>
              </p>
              <p>
                <a href="#" className="text-teal-600 hover:text-teal-700 underline">Directions & Map</a>
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Thanks for choosing GraceHealth.</p>
              <p className="text-gray-600 text-sm">
                No longer wish to receive emails from GraceHealth?{" "}
                <a href="#" className="text-teal-600 hover:text-teal-700 underline">Update Your Email Preferences</a>
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 font-semibold text-sm">Jane</span>
                  <span className="text-gray-500 text-xs">Run Your Practice</span>
                </div>
                <p className="text-gray-400 text-xs">Copyright © 2025 Jane Clinic Management, All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

