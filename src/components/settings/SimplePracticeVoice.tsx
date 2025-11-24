"use client";

import { useState } from "react";

export default function SimplePracticeVoice() {
  const [voiceRemindersEnabled, setVoiceRemindersEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState<"client" | "contact">("client");
  const [cancellationSubTab, setCancellationSubTab] = useState<"single" | "series">("single");
  const [reminderTiming, setReminderTiming] = useState("24");
  const [clientVoiceMessage, setClientVoiceMessage] = useState(
    "Hello {client_first_name_formatted}. This is a reminder for your appointment with {clinician_full_name} on {appointment_date} at {appointment_time}. I repeat. Your appointment with {clinician_full_name} is on {appointment_date} at {appointment_time}."
  );
  const [contactVoiceMessage, setContactVoiceMessage] = useState(
    "Hello {contact_first_name_formatted}. This is a reminder for {client_first_name_formatted}'s appointment with {clinician_full_name} on {appointment_date} at {appointment_time}. I repeat. {client_first_name_formatted}'s appointment with {clinician_full_name} is on {appointment_date} at {appointment_time}."
  );
  const [singleCancellationMessage, setSingleCancellationMessage] = useState(
    "Hi {client_first_name_formatted}. Your appointment on {appointment_date} at {appointment_time} has been canceled by {clinician_full_name}. No appointment fees will be charged. I repeat. Your appointment on {appointment_date} at {appointment_time} has been canceled by {clinician_full_name}. No appointment fees will be charged."
  );
  const [seriesCancellationMessage, setSeriesCancellationMessage] = useState(
    "Hi {client_first_name_formatted}. Your appointment series has been canceled by {clinician_full_name}. No appointment fees will be charged. I repeat. Your appointment series has been canceled by {clinician_full_name}. No appointment fees will be charged."
  );
  const [showEditVoiceMessage, setShowEditVoiceMessage] = useState(false);
  const [showEditCancellationMessage, setShowEditCancellationMessage] = useState(false);

  const formatPreviewMessage = (message: string, isContact: boolean = false) => {
    const clientName = isContact ? "Jamie" : "Jamie";
    const contactName = "Karen";
    return message
      .replace(/{client_first_name_formatted}/g, clientName)
      .replace(/{contact_first_name_formatted}/g, contactName)
      .replace(/{clinician_full_name}/g, "Mayer Frieg")
      .replace(/{appointment_date}/g, "Monday, November 24th")
      .replace(/{appointment_time}/g, "9:00 am (CET)");
  };

  const getCurrentVoiceMessage = () => {
    if (activeTab === "client") return clientVoiceMessage;
    return contactVoiceMessage;
  };

  const setCurrentVoiceMessage = (value: string) => {
    if (activeTab === "client") setClientVoiceMessage(value);
    else setContactVoiceMessage(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Voice</h1>
          <p className="text-sm text-gray-900 mt-1">Automate reminder voicemails</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Watch a quick video about Voice notifications
        </a>
      </div>

      {/* Voice Reminders Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Voice Reminders {voiceRemindersEnabled ? "Enabled" : "Disabled"}
          </h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={voiceRemindersEnabled}
              onChange={(e) => setVoiceRemindersEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-sm text-gray-900 mb-4">
          Customize the content for your voice reminders. Note: Clients only receive reminders if they're also enabled at the client level.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Learn more</a>
        </p>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-900 mb-2">Send voice reminder</label>
          <div className="flex items-center gap-2">
            <select
              value={reminderTiming}
              onChange={(e) => setReminderTiming(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="24">24 hours</option>
              <option value="48">48 hours</option>
            </select>
            <span className="text-sm text-gray-900">before start time of appointment</span>
          </div>
        </div>
        <div className="space-y-1 text-sm text-gray-900">
          <p>In addition, an email reminder is sent 10 minutes before start time of Telehealth appointment.</p>
          <p>Cancellation messages are sent upon the cancellation of an appointment.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("client")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "client"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Client message
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "contact"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Contact and couple message
        </button>
      </div>

      {/* Voice Message Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Voice message</h2>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <button
              onClick={() => setShowEditVoiceMessage(!showEditVoiceMessage)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Edit
            </button>
          </div>
          {showEditVoiceMessage ? (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <textarea
                value={getCurrentVoiceMessage()}
                onChange={(e) => setCurrentVoiceMessage(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex items-center justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowEditVoiceMessage(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowEditVoiceMessage(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-800 whitespace-pre-wrap">
                  {formatPreviewMessage(getCurrentVoiceMessage(), activeTab === "contact")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cancellation Message Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Cancellation message</h2>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <button
              onClick={() => setShowEditCancellationMessage(!showEditCancellationMessage)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Edit
            </button>
          </div>

          {/* Cancellation Sub-tabs */}
          <div className="flex gap-2 border-b border-gray-200 mb-4">
            <button
              onClick={() => setCancellationSubTab("single")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                cancellationSubTab === "single"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-900 hover:text-gray-900"
              }`}
            >
              Single appointment cancellation
            </button>
            <button
              onClick={() => setCancellationSubTab("series")}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                cancellationSubTab === "series"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-900 hover:text-gray-900"
              }`}
            >
              Cancellation of a series
            </button>
          </div>

          {showEditCancellationMessage ? (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <textarea
                value={cancellationSubTab === "single" ? singleCancellationMessage : seriesCancellationMessage}
                onChange={(e) => {
                  if (cancellationSubTab === "single") {
                    setSingleCancellationMessage(e.target.value);
                  } else {
                    setSeriesCancellationMessage(e.target.value);
                  }
                }}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex items-center justify-end gap-2 mt-4">
                <button
                  onClick={() => setShowEditCancellationMessage(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowEditCancellationMessage(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-800 whitespace-pre-wrap">
                  {formatPreviewMessage(
                    cancellationSubTab === "single" ? singleCancellationMessage : seriesCancellationMessage,
                    activeTab === "contact"
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

