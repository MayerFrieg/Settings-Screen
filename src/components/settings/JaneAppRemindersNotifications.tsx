"use client";

import { useState } from "react";

interface JaneAppRemindersNotificationsProps {
  onAddReminder?: () => void;
}

export default function JaneAppRemindersNotifications({ onAddReminder }: JaneAppRemindersNotificationsProps) {
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(true);
  const [bookingNotifications, setBookingNotifications] = useState(true);
  const [cancellationNotifications, setCancellationNotifications] = useState(true);
  const [changeNotifications, setChangeNotifications] = useState(true);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Reminders & Notifications</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Read Reminders & Notifications Guide
          </button>
          <button
            onClick={onAddReminder}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            Add Reminder
          </button>
        </div>
      </div>

      {/* Reminders Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Reminders</h2>

        {/* Email Reminder */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">48hr</span>
              </div>
              <p className="text-gray-700 mb-2">
                Email 2 days before appointment (before late cancellation period)
              </p>
              <p className="text-gray-600 text-sm mb-4">0 of 0 patients subscribed</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">Enabled</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">Subscribe by Default</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                View Preview
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* SMS Reminder */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-900">SMS</h3>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">2hr</span>
              </div>
              <p className="text-gray-700 mb-2">
                Text Message (SMS) 2 hours before appointment (within late cancellation period)
              </p>
              <p className="text-gray-600 text-sm mb-4">0 of 0 patients subscribed</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">Enabled</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">Subscribe by Default after patient consents</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                View Preview
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>

        {/* Email Notifications */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailNotificationsEnabled}
                onChange={(e) => setEmailNotificationsEnabled(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-lg font-semibold text-gray-900">Email Notifications</span>
            </label>
            <p className="text-gray-600 text-sm mt-2 ml-7">
              Enable the email notification system. This is the master switch for the notification types selected below. Only staff and patients that have enabled notifications on their profile will receive notifications when this is checked.
            </p>
          </div>

          {/* Sub-options */}
          <div className="space-y-4 ml-7">
            {/* Booking Notifications */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={bookingNotifications}
                  onChange={(e) => setBookingNotifications(e.target.checked)}
                  disabled={!emailNotificationsEnabled}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded disabled:opacity-50"
                />
                <span className="text-gray-700 font-medium">Send email notifications when appointment booked</span>
              </label>
              <p className="text-gray-600 text-sm mt-1 ml-7">
                Booking notifications are sent when appointments are booked by staff or booked online. They are delivered approx 3 minutes after the appointment is booked.
              </p>
            </div>

            {/* Cancellation Notifications */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={cancellationNotifications}
                  onChange={(e) => setCancellationNotifications(e.target.checked)}
                  disabled={!emailNotificationsEnabled}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded disabled:opacity-50"
                />
                <span className="text-gray-700 font-medium">Send email notifications when appointment cancelled</span>
              </label>
              <p className="text-gray-600 text-sm mt-1 ml-7">
                Cancellation notifications are sent when appointments are cancelled by staff or in the my account area of online booking.
              </p>
            </div>

            {/* Change Notifications */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={changeNotifications}
                  onChange={(e) => setChangeNotifications(e.target.checked)}
                  disabled={!emailNotificationsEnabled}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded disabled:opacity-50"
                />
                <span className="text-gray-700 font-medium">Send email notifications when appointment changed</span>
              </label>
              <p className="text-gray-600 text-sm mt-1 ml-7">
                Change notifications are sent if the start time changes.
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-blue-800 mb-2">
                  You currently have 0 patient profiles set to enabled, and 0 patient profiles set to disabled.
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">
                    Set All To Enabled
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">
                    Set All To Disabled
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
              Update Notification Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

