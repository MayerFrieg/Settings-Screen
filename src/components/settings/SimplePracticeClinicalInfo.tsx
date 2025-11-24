"use client";

import { useState } from "react";

export default function SimplePracticeClinicalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [npiNumber, setNpiNumber] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clinical info</h1>
          <p className="text-sm text-gray-900 mt-1">NPI number and licenses</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about Clinical info
        </a>
      </div>

      {/* Clinician details section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Clinician details</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
            >
              Edit
            </button>
          </div>

          {/* Informational Banner */}
          {showBanner && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 relative">
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-sm text-gray-900 pr-6">
                If you or someone in your practice is a pre-licensed clinician, add a supervisor as a team member.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Specialty</label>
              {isEditing ? (
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Psychology</option>
                  <option>Psychiatry</option>
                  <option>Social Work</option>
                  <option>Counseling</option>
                </select>
              ) : (
                <p className="text-sm text-gray-900">Psychology</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Taxonomy code</label>
              {isEditing ? (
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>101YM0800X - Mental Health Counselor</option>
                  <option>101YP2500X - Professional</option>
                  <option>101YM0800X - Mental Health Counselor</option>
                </select>
              ) : (
                <p className="text-sm text-gray-900">101YM0800X - Mental Health Counselor</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">NPI number</label>
              {isEditing ? (
                <input
                  type="text"
                  value={npiNumber}
                  onChange={(e) => setNpiNumber(e.target.value)}
                  placeholder="Enter NPI number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-sm text-gray-900">{npiNumber || "Enter NPI number"}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* License and degree info section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">License and degree info</h2>
          <p className="text-sm text-gray-900 mb-4">
            Add license type, number, expiration date, and state.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add license
          </button>
        </div>
      </div>

      {/* ePrescribe section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 text-blue-600 font-bold text-xl leading-none flex items-center justify-center">
                Rx
              </div>
              <h2 className="text-lg font-semibold text-gray-900">ePrescribe</h2>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              Add ePrescribe
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Prescriber access</h3>
              <ul className="space-y-2 text-sm text-gray-900">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Prescribe medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Track medication history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Receive notifications about pending prescriptions and refill requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Refill prescriptions</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">$49/mo</p>
                </div>
                <div>
                  <p className="text-sm text-gray-900">One time setup fee: $89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

