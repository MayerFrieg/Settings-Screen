"use client";

import { useState } from "react";

export default function SimplePracticePayers() {
  const [showAddManuallyModal, setShowAddManuallyModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [payerName, setPayerName] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const availablePayers = [
    { id: "87726", name: "United HealthCare", address: "P.O. Box 31362, Salt Lake City, UT 841310-0362" },
    { id: "60054", name: "AETNA", address: "P.O. Box 981106, El Paso, TX 79998-1106" },
    { id: "00621", name: "Blue Cross Blue Shield of Illinois", address: "P.O. Box 805107, Chicago, IL 60680-4112" },
    { id: "62308", name: "Cigna", address: "P.O. BOX 182223, Chattanooga, TN 37422 - 7223" },
    { id: "84980", name: "Blue Cross Blue Shield of Texas", address: "P.O Box 660044, Dallas, TX 75266-0044" },
    { id: "BCSNC", name: "Blue Cross Blue Shield of North Carolina", address: "P.O Box 35, DURHAM, NC 27702" },
    { id: "00934", name: "Washington State Premera Blue Cross", address: "P.O Box 91059, Seattle, WA 98111-9159" },
    { id: "SB700", name: "Sample Payer 700", address: "Address line" },
    { id: "SB690", name: "Sample Payer 690", address: "Address line" },
    { id: "47198", name: "Sample Payer 47198", address: "Address line" },
    { id: "SB580", name: "Sample Payer 580", address: "Address line" },
    { id: "00932", name: "Sample Payer 00932", address: "Address line" },
  ];

  const filteredPayers = availablePayers.filter(
    (payer) =>
      payer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payer.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payers</h1>
          <p className="text-sm text-gray-900 mt-1">Manage insurance payers and enrollments</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setShowAddManuallyModal(true)}
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300"
            >
              Add payer manually
            </button>
            <button
              onClick={() => setShowSearchModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Search available payers
            </button>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Payers
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-900">
        View the payers that have been added to your account and manage enrollments.{" "}
        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
          Learn more
        </a>
        .
      </p>

      {/* Empty State */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-12">
          <div className="flex flex-col items-center justify-center">
            {/* Shield icon with checkmark */}
            <div className="mb-6">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold text-gray-900 mb-8">It looks like you haven't added an insurance payer</p>

            <div className="space-y-4 w-full max-w-md">
              <div className="text-center">
                <p className="text-sm text-gray-900 mb-3">To submit claims through SimplePractice</p>
                <button
                  onClick={() => setShowSearchModal(true)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Search available payers
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-900 mb-3">To submit claims outside of SimplePractice</p>
                <button
                  onClick={() => setShowAddManuallyModal(true)}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300"
                >
                  Add payer manually
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Payer Manually Modal */}
      {showAddManuallyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white w-96 h-full shadow-xl overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setShowAddManuallyModal(false)}
                  className="text-gray-400 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    // Save logic here
                    setShowAddManuallyModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-4">Add payer manually</h2>
              <p className="text-sm text-gray-900 mt-1">
                Add a payer to submit claims outside of SimplePractice and manage payments.
              </p>
            </div>

            <div className="p-6">
              {/* Alert Box */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6 relative">
                <button
                  onClick={() => {}}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <p className="text-sm font-semibold text-gray-900 mb-1">Not for electronic claim submissions</p>
                <p className="text-xs text-gray-900">
                  Manually adding a payer to your list doesn't create an electronic claim filing connection with the
                  payer.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    <span className="text-red-500">*</span> Payer name
                  </label>
                  <input
                    type="text"
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    <span className="text-red-500">*</span> Coverage type
                  </label>
                  <select
                    value={coverageType}
                    onChange={(e) => setCoverageType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select coverage type</option>
                    <option value="commercial">Commercial</option>
                    <option value="medicare">Medicare</option>
                    <option value="medicaid">Medicaid</option>
                    <option value="tricare">TRICARE</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Address
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Available Payers Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white w-[600px] h-full shadow-xl flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="text-gray-400 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                  Learn more
                </a>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-4">Search available payers</h2>
              <p className="text-sm text-gray-900 mt-1">
                You can edit the payers' details after you add them to your list.
              </p>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Q Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        Payer ID
                        <button className="text-gray-400 hover:text-gray-900">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPayers.map((payer) => (
                    <tr key={payer.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payer.id}</td>
                      <td className="px-4 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{payer.name}</p>
                          <p className="text-xs text-gray-500">{payer.address}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right">
                        <button className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded border border-blue-300">
                          + Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

