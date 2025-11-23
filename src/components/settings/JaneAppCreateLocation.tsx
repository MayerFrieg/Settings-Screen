"use client";

import { useState } from "react";

interface JaneAppCreateLocationProps {
  onCancel?: () => void;
}

export default function JaneAppCreateLocation({ onCancel }: JaneAppCreateLocationProps) {
  const [displayAddress, setDisplayAddress] = useState(true);
  const [displayMap, setDisplayMap] = useState(true);
  const [useLocationAddressForBilling, setUseLocationAddressForBilling] = useState(true);
  const [availableOnline, setAvailableOnline] = useState(true);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900">Create Location</h1>

      {/* Location Address & Map Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Location Address & Map</h2>
        <p className="text-gray-600 text-sm mb-6">Enter your location's address for directions and maps.</p>

        {/* Street Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street Address <span className="text-red-500">- Required</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter street address"
          />
        </div>

        {/* Google Map */}
        <div className="mb-6">
          <div className="w-full h-64 bg-gray-100 rounded-lg border border-gray-300 relative overflow-hidden">
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
              <div className="text-center">
                <svg className="w-16 h-16 text-red-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500 text-sm">Google Map</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apartment, Suite, etc. */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Apartment, Suite, etc.</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Optional"
          />
        </div>

        {/* City and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">- Required</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">- Required</span>
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white">
              <option>Select a country...</option>
              <option>Canada</option>
              <option>United States</option>
            </select>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={displayAddress}
              onChange={(e) => setDisplayAddress(e.target.checked)}
              className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Display location address on your online booking site and emails</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={displayMap}
              onChange={(e) => setDisplayMap(e.target.checked)}
              className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Display map in emails</span>
          </label>
        </div>
      </div>

      {/* Location Details Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Location Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Province <span className="text-red-500">- Required</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal / Zip <span className="text-red-500">- Required</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Billing Information Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Billing Information</h2>
        <p className="text-gray-600 text-sm mb-6">Information that appears on your invoices, receipts and statements.</p>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legal Name <span className="text-red-500">- Required</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Numbers / Tax Numbers</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useLocationAddressForBilling}
              onChange={(e) => setUseLocationAddressForBilling(e.target.checked)}
              className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Use my location address for billing</span>
          </label>
        </div>
      </div>

      {/* Online Booking Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Online Booking</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={availableOnline}
            onChange={(e) => setAvailableOnline(e.target.checked)}
            className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <span className="text-sm text-gray-700">Location available to be booked online</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
        >
          Cancel
        </button>
        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save
        </button>
      </div>
    </div>
  );
}

