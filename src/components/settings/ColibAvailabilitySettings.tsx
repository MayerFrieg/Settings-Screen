"use client";

import { useState } from "react";

export default function ColibAvailabilitySettings() {
  const [clusterOnlineBooking, setClusterOnlineBooking] = useState(false);
  const [makeMeLookBusy, setMakeMeLookBusy] = useState("no-restriction");
  const [dailyMaxAppointments, setDailyMaxAppointments] = useState("");
  const [usePracticeHours, setUsePracticeHours] = useState(false);

  const makeMeLookBusyOptions = [
    { value: "no-restriction", label: "No daily restriction" },
    { value: "1", label: "1 appointment per day" },
    { value: "2", label: "2 appointments per day" },
    { value: "3", label: "3 appointments per day" },
    { value: "4", label: "4 appointments per day" },
    { value: "5", label: "5 appointments per day" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Availability</h2>
      </div>

      {/* Availability Settings */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
        
        <div className="space-y-6">
          {/* Cluster online booking */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-gray-900">
                  Cluster online booking
                </label>
              </div>
              <p className="text-sm text-gray-600">
                If you have a really flexible schedule with lots of openings, but you'd like clients to only book around existing appointments, you can use this setting so that Colib will offer appointments just before or after whatever is booked on your schedule.
              </p>
            </div>
            <button
              onClick={() => setClusterOnlineBooking(!clusterOnlineBooking)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                clusterOnlineBooking ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  clusterOnlineBooking ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Make me look busy */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Make me look busy
            </label>
            <select
              value={makeMeLookBusy}
              onChange={(e) => setMakeMeLookBusy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              {makeMeLookBusyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-gray-600">
              Often when you're brand new to practicing, or to a clinic, or to a city you might not yet have a full caseload. People are a bit wary of booking on a fully open schedule, so Colib can limit the number of appointments that are displayed per day. Even if you are completely empty, Colib can display just a few spots to make it look a little busier.
            </p>
          </div>

          {/* Daily maximum number of authorized appointments */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Daily maximum number of authorized appointments
            </label>
            <input
              type="number"
              value={dailyMaxAppointments}
              onChange={(e) => setDailyMaxAppointments(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter maximum number"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-2 text-sm text-gray-600">
              This setting will be used on your direct booking page.
            </p>
          </div>

          {/* Use the practice opening hours */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-gray-900">
                  Use the practice opening hours
                </label>
              </div>
              <p className="text-sm text-gray-600">
                You can define your availabilities for appointments booking in this section. You can either decide to follow your practice's opening hours or define your own schedule.
              </p>
            </div>
            <button
              onClick={() => setUsePracticeHours(!usePracticeHours)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                usePracticeHours ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  usePracticeHours ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

