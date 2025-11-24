"use client";

import { useState } from "react";

export default function SimplePracticeText() {
  const [textRemindersEnabled, setTextRemindersEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState<"appointment" | "telehealth" | "document" | "cancellation">("appointment");
  const [cancellationSubTab, setCancellationSubTab] = useState<"single" | "series">("single");
  const [reminderTiming, setReminderTiming] = useState("24");
  const [appointmentMessage, setAppointmentMessage] = useState(
    "Reminder for {client_first_name_formatted} appointment on {appointment_date} at {appointment_time} with {practice_name}."
  );
  const [telehealthMessage, setTelehealthMessage] = useState(
    "Your appointment with {clinician_full_name} on {appointment_date} starts at {appointment_time}. {appointment_telehealth_link}"
  );
  const [documentMessage, setDocumentMessage] = useState(
    "This is a reminder that you have documents to complete before your appointment on {appointment_date} at {appointment_time} with {clinician_full_name}.\n\nThe documents include: {client_document_request_names}\n\nSign in to your Client Portal to get started. {practice_client_portal_no_auth_login_url}"
  );
  const [singleCancellationMessage, setSingleCancellationMessage] = useState(
    "The appointment on {appointment_date} at {appointment_time} has been canceled by {clinician_full_name}. No appointment fees will be charged."
  );

  const getCharacterCount = (text: string) => text.length;

  const formatPreviewMessage = (message: string) => {
    return message
      .replace(/{client_first_name_formatted}/g, "Jamie")
      .replace(/{appointment_date}/g, "Monday, November 24th")
      .replace(/{appointment_time}/g, "9:00 am (CET)")
      .replace(/{practice_name}/g, "Mayer Frieg")
      .replace(/{clinician_full_name}/g, "Mayer Frieg")
      .replace(/{appointment_telehealth_link}/g, "Before joining the appointment from mobile, update to the latest Telehealth app version. Join video appt: https://appt.to/s!mpL3")
      .replace(/{client_document_request_names}/g, "Demographics form")
      .replace(/{practice_client_portal_no_auth_login_url}/g, "https://mayer-frieg.clientsecure.me/");
  };

  const getCurrentMessage = () => {
    if (activeTab === "appointment") return appointmentMessage;
    if (activeTab === "telehealth") return telehealthMessage;
    if (activeTab === "document") return documentMessage;
    if (activeTab === "cancellation") return singleCancellationMessage;
    return "";
  };

  const setCurrentMessage = (value: string) => {
    if (activeTab === "appointment") setAppointmentMessage(value);
    else if (activeTab === "telehealth") setTelehealthMessage(value);
    else if (activeTab === "document") setDocumentMessage(value);
    else if (activeTab === "cancellation") setSingleCancellationMessage(value);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Text</h1>
          <p className="text-sm text-gray-900 mt-1">Automate reminder text messages</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Watch a quick video about Text notifications
          </a>
        </div>
      </div>

      {/* Text Reminders Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Text Reminders {textRemindersEnabled ? "Enabled" : "Disabled"}
          </h2>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={textRemindersEnabled}
              onChange={(e) => setTextRemindersEnabled(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-sm text-gray-900">
          Customize the content for your text reminders. Note: Clients only receive reminders if they are also enabled at the client level.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Learn more</a>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("appointment")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "appointment"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Appointment reminders
        </button>
        <button
          onClick={() => setActiveTab("telehealth")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "telehealth"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Telehealth reminders
        </button>
        <button
          onClick={() => setActiveTab("document")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "document"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Document reminders
        </button>
        <button
          onClick={() => setActiveTab("cancellation")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
            activeTab === "cancellation"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-900 hover:text-gray-900"
          }`}
        >
          Cancellation message
        </button>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Form */}
        <div className="space-y-6">
          {activeTab === "appointment" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Send text reminder</label>
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
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Customize text reminder</label>
                <textarea
                  value={appointmentMessage}
                  onChange={(e) => setAppointmentMessage(e.target.value)}
                  rows={6}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add information</a>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add confirm / cancel link</a>
                  </div>
                  <span className="text-xs text-gray-900">{getCharacterCount(appointmentMessage)}/500</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "telehealth" && (
            <>
              <p className="text-sm text-gray-900">
                This text reminder is sent 10 minutes before the start time of a Telehealth appointment.
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Customize text reminder</label>
                <textarea
                  value={telehealthMessage}
                  onChange={(e) => setTelehealthMessage(e.target.value)}
                  rows={6}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add information</a>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Client video link</a>
                  </div>
                  <span className="text-xs text-gray-900">{getCharacterCount(telehealthMessage)}/500</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "document" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Send text reminder</label>
                <div className="flex items-center gap-2">
                  <select
                    value={reminderTiming}
                    onChange={(e) => setReminderTiming(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="24">24 hours</option>
                    <option value="48">48 hours</option>
                    <option value="72">72 hours</option>
                  </select>
                  <span className="text-sm text-gray-900">before start time of appointment</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Customize text reminder</label>
                <textarea
                  value={documentMessage}
                  onChange={(e) => setDocumentMessage(e.target.value)}
                  rows={8}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add information</a>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add client portal link</a>
                  </div>
                  <span className="text-xs text-gray-900">{getCharacterCount(documentMessage)}/500</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "cancellation" && (
            <>
              <p className="text-sm text-gray-900 mb-4">
                A cancellation message will be sent upon cancellation of an appointment
              </p>
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
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Customize text reminder</label>
                <textarea
                  value={singleCancellationMessage}
                  onChange={(e) => setSingleCancellationMessage(e.target.value)}
                  rows={6}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Add information</a>
                  <span className="text-xs text-gray-900">{getCharacterCount(singleCancellationMessage)}/500</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column - Mobile Preview */}
        <div className="lg:sticky lg:top-6 h-fit">
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="bg-white rounded-[2.5rem] p-2 shadow-xl w-64 border-4 border-gray-800">
              {/* Phone notch */}
              <div className="bg-gray-800 h-6 rounded-t-[2rem] flex items-center justify-center">
                <div className="w-20 h-1.5 bg-gray-600 rounded-full"></div>
              </div>
              {/* Screen */}
              <div className="bg-white rounded-b-[2rem] p-3 min-h-[400px]">
                <div className="flex justify-end mb-2">
                  <div className="text-xs text-gray-900">9:41 AM</div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-end">
                    <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {formatPreviewMessage(getCurrentMessage())}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

