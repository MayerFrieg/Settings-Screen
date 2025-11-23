"use client";

import JaneAppDocumentation from "./JaneAppDocumentation";

export default function JaneAppDashboard() {
  return (
    <div className="space-y-6">
      {/* Documentation */}
      <JaneAppDocumentation section="dashboard" />

      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Dashboard</h1>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>All Staff</option>
          </select>
        </div>
        <div>
          <div className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700">
            Nov 1, 2025 - Nov 30, 2025
          </div>
        </div>
      </div>

      {/* Date Range Display */}
      <div className="text-sm text-gray-600">
        Saturday November 1, 2025 to Sunday November 30, 2025
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">Arrived</div>
          <div className="text-4xl font-bold text-gray-900">0</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">Booked Online</div>
          <div className="text-4xl font-bold text-gray-900">0</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm font-medium text-gray-600 mb-2">New Patients</div>
          <div className="text-4xl font-bold text-gray-900">0</div>
        </div>
      </div>

      {/* Tables */}
      <div className="space-y-6">
        {/* Bookings Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Bookings</h2>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nov 1 2025 to Nov 30 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Oct 2 2025 to Oct 31 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  % Change
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Arrived</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cancelled</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">No Show</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Online Booked vs. Booked by Staff Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Online Booked vs. Booked by Staff</h2>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nov 1 2025 to Nov 30 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Oct 2 2025 to Oct 31 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  % Change
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Booked Online</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Booked by Staff</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New vs. Returning Patients Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">New vs. Returning Patients</h2>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nov 1 2025 to Nov 30 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Oct 2 2025 to Oct 31 2025
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  % Change
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">New Patients</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Returning Patients</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total Patients</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

