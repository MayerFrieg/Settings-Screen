"use client";

import { useState } from "react";

export default function BookingPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  const treatments = [
    { name: "Initial OT Evaluation", duration: 60, price: 165.0 },
    { name: "Treatment Session", duration: 45, price: 115.0 },
    { name: "Home Safety Assessment", duration: 90, price: 235.0 },
    { name: "Work Capacity Evaluation", duration: 180, price: 450.0 },
    { name: "ADL Training", duration: 45, price: 115.0 },
    { name: "Group Session", duration: 60, price: 75.0, isGroup: true },
    { name: "Community-Based Session", duration: 45, price: 130.0 },
    { name: "Initial Assessment", duration: 60, price: 130.0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Bar */}
      <div className="bg-teal-600 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span>
            Hello. Are you a current patient?{" "}
            <a href="#" className="underline font-medium">Sign in</a>
          </span>
          <a href="#" className="underline font-medium">Sign In or Sign Up</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">GraceHealth</h1>
        </div>
      </div>

      {/* Book an Appointment Banner */}
      <div className="bg-teal-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Book an Appointment</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Practitioner and Treatments */}
          <div className="lg:col-span-1 space-y-6">
            {/* Practitioner Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grace Canada</h3>
                <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                  Read More
                </a>
              </div>
            </div>

            {/* Treatment Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Select a treatment</h4>
              <p className="text-gray-700 font-medium mb-4">Psychotherapy</p>
              <div className="space-y-2">
                {treatments.map((treatment, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTreatment(treatment.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      selectedTreatment === treatment.name
                        ? "bg-teal-700 text-white"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{treatment.name}</div>
                        <div className="text-sm opacity-90">
                          {treatment.duration} min - ${treatment.price.toFixed(2)}
                        </div>
                      </div>
                      {treatment.isGroup && (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Calendar/Appointment Times */}
          <div className="lg:col-span-2">
            {selectedTreatment ? (
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Times</h3>
                  <div className="text-gray-500 mb-6">
                    Select a treatment from the list on the left to view available appointment times
                  </div>
                  {/* Calendar placeholder - would show actual availability here */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-700 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-400 text-sm">No Availability</div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <div className="mb-6">
                  <p className="text-gray-600 text-lg mb-4">
                    Select a treatment from the list on the left to view available appointment times
                  </p>
                  <div className="flex justify-center">
                    <div className="w-64 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600 space-y-2">
          <p>
            Can't find a time?{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Add yourself to Grace Canada's wait list
            </a>
          </p>
          <p>Located at: unit 10, Kitchener</p>
          <p>
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">Directions & Map</a>
          </p>
          <p>
            Need Help?{" "}
            <a href="tel:6043001051" className="text-teal-600 hover:text-teal-700">6043001051</a>{" "}
            <a href="mailto:Phillip.henein@gmail.com" className="text-teal-600 hover:text-teal-700">
              Phillip.henein@gmail.com
            </a>
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-500">
              Booking by{" "}
              <span className="text-teal-600 font-semibold">Jane</span>
            </p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">Terms of Use</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

