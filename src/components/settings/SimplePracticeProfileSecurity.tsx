"use client";

import { useState } from "react";

export default function SimplePracticeProfileSecurity() {
  const [isEditing, setIsEditing] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("mm/dd/yyyy");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile and security</h1>
          <p className="text-sm text-gray-900 mt-1">Personal info and security preferences</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
          Save changes
        </button>
      </div>

      {/* SimplePractice profile card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">SimplePractice profile</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
            >
              Edit
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-900">Mayer Frieg</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Date of birth</label>
              {isEditing ? (
                <input
                  type="text"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  placeholder="mm/dd/yyyy"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-sm text-gray-900">{dateOfBirth}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SimplePractice security card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">SimplePractice security</h2>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
              Manage
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-900">
                <span className="font-medium">Email:</span> youssefwhg4@gmail.com
              </p>
              <p className="text-sm text-gray-900 mt-1">2-step verification off</p>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                <span className="font-medium">Phone:</span> (626) 677-7982
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-900">Password last changed on November 24, 2025</p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">Set up 2-step verification</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    Add an extra layer of security to protect your clients' information
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Set up
                  </button>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Set up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile photo card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Profile photo</h2>
          <p className="text-sm text-gray-900 mb-6">
            Add your professional profile image to personalize your SimplePractice account.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm font-medium text-gray-900 mb-1">Choose image or drag and drop image</p>
              <p className="text-xs text-gray-900 mt-2">Upload .jpg or .png image</p>
              <p className="text-xs text-gray-900">Max upload size: 10MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video link */}
      <div className="text-center">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about Profile and security
        </a>
      </div>
    </div>
  );
}

