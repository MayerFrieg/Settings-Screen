"use client";

import { useState } from "react";

export default function SimplePracticeClientPortalPermissions() {
  const [clientPortalEnabled, setClientPortalEnabled] = useState(true);
  const [onlineAppointmentRequests, setOnlineAppointmentRequests] = useState(true);
  const [appointmentStartTimes, setAppointmentStartTimes] = useState("half-hour");
  const [requestBeforeHours, setRequestBeforeHours] = useState("24");
  const [requestAdvanceWeeks, setRequestAdvanceWeeks] = useState("1");
  const [newClientRequests, setNewClientRequests] = useState("yes");
  const [allowNewIndividual, setAllowNewIndividual] = useState(true);
  const [allowNewCouple, setAllowNewCouple] = useState(true);
  const [allowNewContacts, setAllowNewContacts] = useState(true);
  const [requireCreditCard, setRequireCreditCard] = useState("yes");
  const [allowFileUpload, setAllowFileUpload] = useState(true);
  const [allowLanguageChoice, setAllowLanguageChoice] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi Karen,\nThis Client Portal will help us get started by making it easy for you to review our practice policies and provide some basic information before our first session.\nIf you leave the portal before completing everything, you can use the link we emailed to come back and start over. It should take between 5-20 minutes to finish."
  );
  const [isEditingWelcome, setIsEditingWelcome] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Client Portal permissions</h1>
          <p className="text-sm text-gray-900 mt-1">Online appointment requests, client permissions, greeting</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Client Portal permissions
          </a>
        </div>
      </div>

      {/* Client Portal Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Client Portal</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={clientPortalEnabled}
                onChange={(e) => setClientPortalEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {showBanner && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 relative">
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-sm text-gray-900 pr-6">
                Your Client Portal is enabled. Your Client Portal is a place where people can find you online and for
                you to communicate securely with clients. Play around with the Client Portal and customize it to make it
                your own.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Learn more
                </a>
                .
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Default domain
                <a href="#" className="ml-2 text-blue-600 hover:text-blue-700 hover:underline text-xs">
                  Learn more
                </a>
              </label>
              <p className="text-xs text-gray-900 mb-2">
                This is the default domain of your Website and Client Portal. Learn more
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value="https://mayer-frieg.clientsecure.me"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                />
                <button className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
                  Edit
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online appointment requests Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Online appointment requests</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={onlineAppointmentRequests}
                onChange={(e) => setOnlineAppointmentRequests(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <p className="text-sm text-gray-900 mb-4">
            Let clients request appointments online to simplify calendar management.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Learn about appointment requests
            </a>
            .
          </p>

          {showWarning && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm font-semibold text-yellow-800">! No availability set up</span>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
                Manage availability
              </a>
            </div>
          )}

          {/* Scheduling settings */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Set how available appointment times are shown to clients.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Learn about setting availability
                </a>
                .
              </p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">Appointment start times</label>
                  <select
                    value={appointmentStartTimes}
                    onChange={(e) => setAppointmentStartTimes(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="half-hour">On the half hour (9:00, 9:30)</option>
                    <option value="quarter-hour">On the quarter hour (9:00, 9:15, 9:30, 9:45)</option>
                    <option value="hour">On the hour (9:00, 10:00, 11:00)</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900">Requests can be made</span>
                  <select
                    value={requestBeforeHours}
                    onChange={(e) => setRequestBeforeHours(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="24">24 hours before start time</option>
                    <option value="48">48 hours before start time</option>
                    <option value="72">72 hours before start time</option>
                  </select>
                  <span className="text-sm text-gray-900">and</span>
                  <select
                    value={requestAdvanceWeeks}
                    onChange={(e) => setRequestAdvanceWeeks(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1 week in advance</option>
                    <option value="2">2 weeks in advance</option>
                    <option value="4">4 weeks in advance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New client appointment requests */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">New client appointment requests</h2>
          <p className="text-sm text-gray-900 mb-4">
            Allow requests from new clients. To set which services are available for new clients, go to billing and
            services.
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="newClientRequests"
                value="yes"
                checked={newClientRequests === "yes"}
                onChange={(e) => setNewClientRequests(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="newClientRequests"
                value="no"
                checked={newClientRequests === "no"}
                onChange={(e) => setNewClientRequests(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Allow requests from */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Allow requests from:</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowNewIndividual}
                onChange={(e) => setAllowNewIndividual(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">New individual clients</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowNewCouple}
                onChange={(e) => setAllowNewCouple(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">New couple clients</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowNewContacts}
                onChange={(e) => setAllowNewContacts(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">New contacts (on behalf of someone else)</span>
            </label>
          </div>
        </div>
      </div>

      {/* Information collected from new clients */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Information collected from new clients</h2>
          <p className="text-sm text-gray-900 mb-1">Require credit card to request appointment</p>
          <p className="text-xs text-gray-900 mb-4">
            Credit cards are not charged when an appointment is requested. To accept credit cards,{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              set up online payments
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="requireCreditCard"
                value="yes"
                checked={requireCreditCard === "yes"}
                onChange={(e) => setRequireCreditCard(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="requireCreditCard"
                value="no"
                checked={requireCreditCard === "no"}
                onChange={(e) => setRequireCreditCard(e.target.value)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-900">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={allowFileUpload}
              onChange={(e) => setAllowFileUpload(e.target.checked)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-900">Allow clients to upload documents to Client Portal</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline mt-2 block">
            Learn about setting up your Client Portal
          </a>
        </div>
      </div>

      {/* Localization */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={allowLanguageChoice}
              onChange={(e) => setAllowLanguageChoice(e.target.checked)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-900">Clients can choose their portal language</span>
          </label>
          <p className="text-xs text-gray-900 mt-2">Lets clients view the portal in Spanish or English</p>
        </div>
      </div>

      {/* Client Portal Greeting */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Client Portal Greeting</h2>
          <p className="text-sm text-gray-900 mb-4">
            Customize the welcome greeting for clients when they first sign into the Client Portal to complete intake
            documents.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Learn more
            </a>
            .
          </p>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Welcome Message</h3>
              <button
                onClick={() => setIsEditingWelcome(!isEditingWelcome)}
                className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
              >
                {isEditingWelcome ? "Cancel" : "Edit"}
              </button>
            </div>
            {isEditingWelcome ? (
              <textarea
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={6}
              />
            ) : (
              <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 whitespace-pre-line bg-gray-50">
                {welcomeMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Set up a customized prescreener */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Set up a customized prescreener</h2>
          <p className="text-sm text-gray-900">
            Screen new clients with custom questions on your online appointment request widget and contact form.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Explore Prescreener
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

