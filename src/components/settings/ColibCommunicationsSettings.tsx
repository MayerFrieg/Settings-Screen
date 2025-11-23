"use client";

import { useState } from "react";

export default function ColibCommunicationsSettings() {
  const [toneOfVoice, setToneOfVoice] = useState("formal");
  const [englishSignature, setEnglishSignature] = useState(
    "If you have any questions, feel free to reply to this email or call us.\nWe look forward to seeing you again!\nBest wishes,\nGraceApp"
  );
  const [frenchSignature, setFrenchSignature] = useState(
    "Si vous avez des questions, n'hésitez pas à répondre à cet e-mail ou à nous appeler.\nNous avons hâte de vous revoir!\nAu plaisir,\nGraceApp"
  );

  // Event notification recipients
  const [appointmentBooked, setAppointmentBooked] = useState("practitioner");
  const [appointmentRescheduled, setAppointmentRescheduled] = useState("practitioner");
  const [appointmentConfirmed, setAppointmentConfirmed] = useState("clinic");
  const [appointmentCancellation, setAppointmentCancellation] = useState("practitioner");
  const [waitlistRequest, setWaitlistRequest] = useState("practitioner");

  // Email reply-to settings
  const [appointmentReminders, setAppointmentReminders] = useState("practitioner");
  const [appointmentCancellationReply, setAppointmentCancellationReply] = useState("practitioner");
  const [invoicesReceipts, setInvoicesReceipts] = useState("clinic");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Communications</h2>
      </div>

      {/* General Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">General</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tone of voice</label>
            <select
              value={toneOfVoice}
              onChange={(e) => setToneOfVoice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
            </select>
            <p className="mt-2 text-sm text-gray-600">
              The tone of voice will affect Colib's automated communications that your clients receive in reminder emails, receipts, etc. 'Formal' uses the same content but without emojis.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signature (English version) */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email signature (English version)</h3>
        
        {/* Rich Text Editor Toolbar */}
        <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex flex-wrap items-center gap-2">
          <button className="p-2 hover:bg-gray-200 rounded" title="Bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Italic">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4H6l4-4-4-4 4-4" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Underline">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <select className="px-2 py-1 text-xs border border-gray-300 rounded bg-white">
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
          <button className="p-2 hover:bg-gray-200 rounded" title="Text Color">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="p-2 hover:bg-gray-200 rounded" title="Align Left">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Bullet List">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Numbered List">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Link">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Image">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="p-2 hover:bg-gray-200 rounded" title="Undo">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Redo">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Code View">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>
        </div>
        
        {/* Text Area */}
        <textarea
          value={englishSignature}
          onChange={(e) => setEnglishSignature(e.target.value)}
          className="w-full px-4 py-3 border-x border-b border-gray-300 rounded-b-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[200px] resize-y"
          placeholder="Enter your email signature..."
        />
        
        <p className="mt-2 text-sm text-gray-600">
          This text will appear at the bottom of the emails sent to your clients in the english version.
        </p>
      </section>

      {/* Email Signature (French version) */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email signature (French version)</h3>
        
        {/* Rich Text Editor Toolbar */}
        <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex flex-wrap items-center gap-2">
          <button className="p-2 hover:bg-gray-200 rounded" title="Bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Italic">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4H6l4-4-4-4 4-4" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Underline">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <select className="px-2 py-1 text-xs border border-gray-300 rounded bg-white">
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
          <button className="p-2 hover:bg-gray-200 rounded" title="Text Color">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="p-2 hover:bg-gray-200 rounded" title="Align Left">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18M3 6h18" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Bullet List">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Numbered List">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Link">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Image">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="p-2 hover:bg-gray-200 rounded" title="Undo">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Redo">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded" title="Code View">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>
        </div>
        
        {/* Text Area */}
        <textarea
          value={frenchSignature}
          onChange={(e) => setFrenchSignature(e.target.value)}
          className="w-full px-4 py-3 border-x border-b border-gray-300 rounded-b-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[200px] resize-y"
          placeholder="Enter your email signature..."
        />
        
        <p className="mt-2 text-sm text-gray-600">
          This text will appear at the bottom of the emails sent to your clients in the french version.
        </p>
      </section>

      {/* Event Notification Recipient Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Event notification recipient</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="text-sm font-medium text-gray-700">Appointment booked</label>
            <select
              value={appointmentBooked}
              onChange={(e) => setAppointmentBooked(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="text-sm font-medium text-gray-700">Appointment rescheduled</label>
            <select
              value={appointmentRescheduled}
              onChange={(e) => setAppointmentRescheduled(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="text-sm font-medium text-gray-700">Appointment confirmed</label>
            <select
              value={appointmentConfirmed}
              onChange={(e) => setAppointmentConfirmed(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="text-sm font-medium text-gray-700">Appointment cancellation</label>
            <select
              value={appointmentCancellation}
              onChange={(e) => setAppointmentCancellation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3">
            <label className="text-sm font-medium text-gray-700">Waitlist request</label>
            <select
              value={waitlistRequest}
              onChange={(e) => setWaitlistRequest(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Practitioner</label>
            <select
              value={appointmentBooked}
              onChange={(e) => setAppointmentBooked(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Waitlist request</label>
            <select
              value={waitlistRequest}
              onChange={(e) => setWaitlistRequest(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <p className="text-sm text-gray-600">
            This section lets you choose who will receive notifications depending on the type of event.
          </p>
        </div>
      </section>

      {/* Email reply-to Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email reply-to</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Appointment reminders and confirmation</label>
            <select
              value={appointmentReminders}
              onChange={(e) => setAppointmentReminders(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Appointment cancellation</label>
            <select
              value={appointmentCancellationReply}
              onChange={(e) => setAppointmentCancellationReply(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Invoices and receipts</label>
            <select
              value={invoicesReceipts}
              onChange={(e) => setInvoicesReceipts(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="practitioner">Practitioner</option>
              <option value="clinic">Clinic</option>
              <option value="both">Both</option>
            </select>
          </div>

          <p className="text-sm text-gray-600">
            This section lets you choose who will receive emails when a client replies to a notification sent by Colib.
          </p>
        </div>
      </section>

      {/* Save Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
          Save
        </button>
      </div>
    </div>
  );
}

