"use client";

interface JaneAppLocationsProps {
  onCreateLocation?: () => void;
}

export default function JaneAppLocations({ onCreateLocation }: JaneAppLocationsProps) {
  return (
    <div className="space-y-6">
      {/* Header with Create Location Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Locations</h1>
        <button
          onClick={onCreateLocation}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Location
        </button>
      </div>

      {/* Introductory Text */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          If your clinic has multiple locations and operates as a single business, you can set up each of your locations here. You can then schedule your shifts and appointments at each location and Patients can choose a location when booking online. If your locations each operate as individual businesses with separate financials, we recommend you use multiple Jane accounts. Please contact us to set this up.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">Learn more about Locations</a>
        </p>
        <p className="text-gray-700 leading-relaxed flex items-center gap-1">
          Reorder Locations in the list to set the order for online booking. The first location in the list is your{" "}
          <span className="font-medium">Primary location</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </p>
      </div>

      {/* Filter and Reorder Controls */}
      <div className="flex items-center gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
          <option>Active</option>
          <option>Inactive</option>
          <option>All</option>
        </select>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
          Reorder Locations
        </button>
      </div>

      {/* Location Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-semibold text-gray-900">GraceHealth</h2>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">Primary</span>
            </div>
            <p className="text-gray-600 mb-2">unit 10, Kitchener, Canada</p>
            <p className="text-gray-500 text-sm">This location is listed in online booking</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Edit
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500">
        Showing all active locations
      </div>
    </div>
  );
}

