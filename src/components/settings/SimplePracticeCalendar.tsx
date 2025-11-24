"use client";

import { useState } from "react";

export default function SimplePracticeCalendar() {
  const [cancellationHours, setCancellationHours] = useState("24");
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [nameDisplayFormat, setNameDisplayFormat] = useState("initial");
  const [showPromoBox, setShowPromoBox] = useState(true);
  const [calendarUrl] = useState("https://secure.simplepractice.com/ical/ChijmfYQLgag69NG2V93pwE53m8T8GGbPFdAdVqx");

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(calendarUrl);
    // Could show a toast notification here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-sm text-gray-900 mt-1">Alerts, calendar sync</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Calendar settings
          </a>
        </div>
      </div>

      {/* Cancellation policy section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Cancellation policy</h2>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
              PRACTICE SETTINGS
            </a>
          </div>
          <p className="text-sm text-gray-900 mb-3">
            How many hours before their appointment must a client cancel via text, voice reminders, or the Client Portal
            to avoid penalty?
          </p>
          <select
            value={cancellationHours}
            onChange={(e) => setCancellationHours(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="24">At least 24 hours</option>
            <option value="48">At least 48 hours</option>
            <option value="72">At least 72 hours</option>
            <option value="168">At least 1 week</option>
          </select>
        </div>
      </div>

      {/* Alerts section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Alerts</h2>
              <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
                PRACTICE SETTINGS
              </a>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={alertsEnabled}
                onChange={(e) => setAlertsEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <p className="text-sm text-gray-900">
            With alerts, you'll get a prompt asking if you want to notify your client when you schedule or change their
            appointment. Make sure the client has at least one appointment reminder set up in their client profile for
            alerts to show.
          </p>
        </div>
      </div>

      {/* Calendar sync section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Calendar sync</h2>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
              INDIVIDUAL SETTINGS
            </a>
          </div>
          <p className="text-sm text-gray-900 mb-6">Connect your SimplePractice and personal calendars</p>

          {/* Advanced Calendar Sync Promotional Box */}
          {showPromoBox && (
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 mb-6 relative">
              <button
                onClick={() => setShowPromoBox(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Keep your schedule accurate with advanced calendar sync PLUS ONLY</h3>
              <ul className="space-y-2 mb-4">
                {[
                  "View Google Calendar events in your SimplePractice calendar",
                  "Edit SimplePractice events from your Google Calendar",
                  "Blocks off SimplePractice availability",
                  "Google Calendar details are private to you. Your team members will only see the time blocked off by these events.",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-900">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Learn more
              </button>
            </div>
          )}

          {/* Name display format */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-1">Name display format</label>
            <select
              value={nameDisplayFormat}
              onChange={(e) => setNameDisplayFormat(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="initial">Initial (e.g. J.A.)</option>
              <option value="first-name">First name only</option>
              <option value="full-name">Full name</option>
            </select>
          </div>

          {/* Google Calendar Integration */}
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">31</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Google Calendar</h3>
                  <p className="text-sm text-gray-900 mb-2">
                    View and edit SimplePractice events in Google Calendar
                  </p>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                    Learn about Google Calendar sync
                  </a>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Connect
              </button>
            </div>
          </div>

          {/* Microsoft 365 Integration */}
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Microsoft 365</h3>
                  <p className="text-sm text-gray-900 mb-2">
                    View and edit SimplePractice events in Microsoft 365
                  </p>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                    Learn about Microsoft 365 sync
                  </a>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Connect
              </button>
            </div>
          </div>

          {/* Apple Calendar Integration */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">JUL</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">Apple Calendar</h3>
                <p className="text-sm text-gray-900 mb-2">
                  View SimplePractice events in Apple Calendar
                </p>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                  Learn about Apple Calendar sync
                </a>
              </div>
            </div>
            <div className="ml-13 space-y-2">
              <label className="block text-sm font-medium text-gray-900">Calendar URL</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={calendarUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 font-mono text-xs"
                />
                <button
                  onClick={handleCopyUrl}
                  className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300"
                >
                  Copy link
                </button>
              </div>
              <p className="text-xs text-gray-900">
                Anyone can retrieve the calendar's info with this URL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="space-y-2 text-sm text-gray-900">
            <p>
              By enabling syncing between your SimplePractice Calendar and your external calendar, you acknowledge and
              agree to follow HIPAA compliance requirements and protect the calendar information, including the secure
              telehealth video link.
            </p>
            <p>
              Your SimplePractice appointments will be published to your external calendar once you authorize the
              connection. This synchronization includes all of your telehealth appointments along with all associated
              secure video links. The secure video link gets automatically added to the event details, so you can join
              telehealth appointments directly from your external calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

