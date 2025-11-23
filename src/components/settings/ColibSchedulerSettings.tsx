"use client";

import { useState } from "react";

export default function ColibSchedulerSettings() {
  const [enable24hCalendar, setEnable24hCalendar] = useState(false);
  const [use24HourFormat, setUse24HourFormat] = useState(false);
  const [useSundayToSaturday, setUseSundayToSaturday] = useState(true);
  const [notificationsDefault, setNotificationsDefault] = useState(true);
  const [sendDuringBusinessHours, setSendDuringBusinessHours] = useState(true);
  const [addConfirmationLink, setAddConfirmationLink] = useState(true);
  const [allowClientCancellation, setAllowClientCancellation] = useState(false);
  const [sendDailyEmailSummary, setSendDailyEmailSummary] = useState(false);
  const [notifyOnClientConfirm, setNotifyOnClientConfirm] = useState(false);
  const [useColorCode, setUseColorCode] = useState(false);
  const [notificationMethod, setNotificationMethod] = useState("email-sms");
  const [busyTypeColor, setBusyTypeColor] = useState("#dc2626");
  const [otherTypeColor, setOtherTypeColor] = useState("#1e40af");
  const [enableAvailabilityGroups, setEnableAvailabilityGroups] = useState(false);

  const colorOptions = [
    "#dc2626", // red
    "#1e40af", // dark blue
    "#166534", // dark green
    "#9333ea", // purple
    "#06b6d4", // light blue
    "#d4a574", // beige/cream
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Scheduler</h2>
      </div>

      {/* General Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
        
        <div className="space-y-6">
          {/* Enable 24h calendar */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable 24h calendar
              </label>
              <p className="text-sm text-gray-600">
                By default, your calendar displays times from 6 am to 10 pm. Enable this setting to show the entire day, from midnight to midnight.
              </p>
            </div>
            <button
              onClick={() => setEnable24hCalendar(!enable24hCalendar)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enable24hCalendar ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enable24hCalendar ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Use 24 hour date format */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Use 24 hour date format
              </label>
            </div>
            <button
              onClick={() => setUse24HourFormat(!use24HourFormat)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                use24HourFormat ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  use24HourFormat ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Use a Sunday-to-Saturday weekly calendar */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Use a Sunday-to-Saturday weekly calendar
              </label>
            </div>
            <button
              onClick={() => setUseSundayToSaturday(!useSundayToSaturday)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                useSundayToSaturday ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useSundayToSaturday ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Notifications options selected by default */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Notifications options selected by default
              </label>
              <p className="text-sm text-gray-600">
                Everytime you create a new appointment via your scheduler, our platform will ask you to select options regarding notifications to be sent to clients (reminders, confirmations).
              </p>
            </div>
            <button
              onClick={() => setNotificationsDefault(!notificationsDefault)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                notificationsDefault ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notificationsDefault ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Send notifications to clients during business hours only */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Send notifications to clients during business hours only
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, email notifications sent to your clients will be sent between 7am and 7pm in the time zone of the practitioner. This setting is not retroactive.
              </p>
            </div>
            <button
              onClick={() => setSendDuringBusinessHours(!sendDuringBusinessHours)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                sendDuringBusinessHours ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  sendDuringBusinessHours ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Add a confirmation link to the reminder notifications */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Add a confirmation link to the reminder notifications
              </label>
            </div>
            <button
              onClick={() => setAddConfirmationLink(!addConfirmationLink)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                addConfirmationLink ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  addConfirmationLink ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Allow clients to cancel their appointments */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Allow clients to cancel their appointments
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, your clients will be able to cancel their appointment via a link provided in the notifications they receive and via the client portal. You will be notified every time an appointment is cancelled.
              </p>
            </div>
            <button
              onClick={() => setAllowClientCancellation(!allowClientCancellation)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                allowClientCancellation ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  allowClientCancellation ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Send daily email summary to practitioners */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Send daily email summary to practitioners
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, an email will be sent every day at 6pm to all the practitioners with a summary of their appointments scheduled for the next day
              </p>
            </div>
            <button
              onClick={() => setSendDailyEmailSummary(!sendDailyEmailSummary)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                sendDailyEmailSummary ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  sendDailyEmailSummary ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Receive a notification when a client confirms an appointment */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Receive a notification when a client confirms an appointment
              </label>
              <p className="text-sm text-gray-600">
                If you select this option, a notification will be sent to the practitioner every time an appointment is confirmed by a client
              </p>
            </div>
            <button
              onClick={() => setNotifyOnClientConfirm(!notifyOnClientConfirm)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                notifyOnClientConfirm ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifyOnClientConfirm ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Use color code by appointment type */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Use color code by appointment type
              </label>
            </div>
            <button
              onClick={() => setUseColorCode(!useColorCode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                useColorCode ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useColorCode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Preferred ways to send notifications */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Preferred ways to send notifications to the clients</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email & SMS</label>
            <select
              value={notificationMethod}
              onChange={(e) => setNotificationMethod(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="email-sms">Email & SMS</option>
              <option value="email">Email only</option>
              <option value="sms">SMS only</option>
            </select>
            <p className="mt-2 text-sm text-gray-600">
              Select the way you want to send notifications to your clients. Make sure your clients have a valid phone number on their client file if you choose to send SMS.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">'Busy' type color</label>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setBusyTypeColor(color)}
                  className={`w-12 h-12 rounded border-2 transition-all ${
                    busyTypeColor === color ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">'Other' type color</label>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setOtherTypeColor(color)}
                  className={`w-12 h-12 rounded border-2 transition-all ${
                    otherTypeColor === color ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-700 underline text-sm">
            Click here to allow your clients to book or request appointments
          </a>
        </div>
      </section>

      {/* Availability Groups */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Availability Groups</h3>
        
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable Availability Groups
              </label>
              <p className="text-sm text-gray-600">
                Use Availability Groups to create different schedules for different appointment types. For example, differentiate when "In-person" appointments can be booked when "Online" appointments are available. Make sure that each appointment type has at least one availability group to be bookable by your clients.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Click here
                </a>{" "}
                for more information.
              </p>
            </div>
            <button
              onClick={() => setEnableAvailabilityGroups(!enableAvailabilityGroups)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enableAvailabilityGroups ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enableAvailabilityGroups ? "translate-x-6" : "translate-x-1"
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

      {/* Appointment Pauses */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Appointment Pauses</h3>
        
        <div className="space-y-4">
          <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add pause
          </button>

          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">No item yet.</p>
          </div>

          <p className="text-sm text-gray-600">
            Use this section to configure your absences/pauses from work. You can also defined pauses for certain types of appointments for a defined period if needed.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Click here
            </a>{" "}
            for more information.
          </p>
        </div>
      </section>
    </div>
  );
}

