"use client";

import { useState } from "react";

export default function ColibBookingPageSettings() {
  const [clientBookingType, setClientBookingType] = useState("appointment-request-form");
  const [appointmentRequestForm, setAppointmentRequestForm] = useState("appointment-request");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Booking Page</h2>
      </div>

      {/* Booking Type Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Booking Type</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client booking type
            </label>
            <select
              value={clientBookingType}
              onChange={(e) => setClientBookingType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
            >
              <option value="online-booking">Online booking by client</option>
              <option value="appointment-request-form">Appointment request form</option>
            </select>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-700 mb-2">Online booking by client:</p>
              <p>
                Clients can book an appointment directly on the page and will receive a confirmation email. No confirmation from your company is needed.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-700 mb-2">Appointment request form:</p>
              <p>
                Clients can request an appointment and indicate their preferred date and time on a form. A practitioner will then need to open the submitted form and create a new appointment on Colib.io (under the 'Scheduler' section). You will be able to view all requests in the Forms section:{" "}
                <a href="https://Colib.io/Forms?show=results" className="text-teal-600 hover:text-teal-700 underline">
                  https://Colib.io/Forms?show=results
                </a>
              </p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-medium">General Note:</span> Every new booking or booking request will be automatically linked to a client record on our system.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Request Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Booking Request</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Appointment request form
          </label>
          <select
            value={appointmentRequestForm}
            onChange={(e) => setAppointmentRequestForm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
          >
            <option value="appointment-request">Appointment Request</option>
            <option value="custom-form-1">Custom Form 1</option>
            <option value="custom-form-2">Custom Form 2</option>
          </select>
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

