"use client";

import { useState } from "react";

export default function ColibTelehealthSettings() {
  const [recordOnlineAppointments, setRecordOnlineAppointments] = useState(false);
  const [enableWaitingRoom, setEnableWaitingRoom] = useState(false);
  const [useDefaultBackground, setUseDefaultBackground] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Telehealth</h2>
      </div>

      {/* Settings Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Record online appointments */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Record online appointments
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, an audio recording of the online meeting will be automatically generated and included in the appointment-related documents.
              </p>
            </div>
            <button
              onClick={() => setRecordOnlineAppointments(!recordOnlineAppointments)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                recordOnlineAppointments ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  recordOnlineAppointments ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Enable waiting room */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable waiting room
              </label>
              <p className="text-sm text-gray-600">
                When enabled, your client will first join a waiting room before entering the meeting. You will be able to see when they join the waiting room and allow them in when you are ready. If you select this option, please ensure that you are logged in as a practitioner on the client portal to accept or decline requests from the waiting room.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Click here
                </a>{" "}
                for more information.
              </p>
            </div>
            <button
              onClick={() => setEnableWaitingRoom(!enableWaitingRoom)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enableWaitingRoom ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enableWaitingRoom ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Use default background images */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Use default background images
              </label>
              <p className="text-sm text-gray-600">
                If you do not select this option, you will be able to upload your own background images for your video sessions.
              </p>
            </div>
            <button
              onClick={() => setUseDefaultBackground(!useDefaultBackground)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                useDefaultBackground ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useDefaultBackground ? "translate-x-6" : "translate-x-1"
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
    </div>
  );
}

