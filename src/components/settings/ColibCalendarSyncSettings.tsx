"use client";

import { useState } from "react";

export default function ColibCalendarSyncSettings() {
  const [oneWaySync, setOneWaySync] = useState(false);
  const [includeFullDayEvents, setIncludeFullDayEvents] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Calendar Sync.</h2>
      </div>

      {/* Preferences Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Preferences</h3>
        
        <div className="space-y-6">
          {/* One-way synchronization only */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-gray-900">
                  One-way synchronization only
                </label>
              </div>
              <p className="text-sm text-gray-600">
                If you select this option, you primary Google Calendar events will NOT be synchronized with your Colib scheduler moving forward. However, your Colib appointments will show up on your Google Calendar.
              </p>
            </div>
            <button
              onClick={() => setOneWaySync(!oneWaySync)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                oneWaySync ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  oneWaySync ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Include full-day events in sync */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-gray-900">
                  Include full-day events in sync
                </label>
              </div>
              <p className="text-sm text-gray-600">
                Enabling this option will sync full-day events from your Google Calendar to Colib.
              </p>
            </div>
            <button
              onClick={() => setIncludeFullDayEvents(!includeFullDayEvents)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                includeFullDayEvents ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  includeFullDayEvents ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Synchronization Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Synchronization</h3>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-700">
            Click on the button below to synchronize your scheduler with your Google Calendar
          </p>
          
          <button className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition shadow-md">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
          
          <p className="text-sm text-gray-600">
            If you decide to synchronize your scheduler with your Google Calendar, a Google event will be created for every new appointment created on Colib. Colib will also create events on your scheduler for every new event created on your Google calendar.
          </p>
        </div>
      </section>
    </div>
  );
}

