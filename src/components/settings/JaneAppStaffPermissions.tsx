"use client";

export default function JaneAppStaffPermissions() {
  const staffMembers = [
    {
      name: "Grace Canada",
      username: "andrewhaliem",
      lastSignIn: "November 23, 2025 - 7:29am",
      isOwner: true,
      role: "Full Access",
      active: true,
      accessBilling: true,
      accessCharts: true,
      manageShifts: true,
    },
  ];

  const roles = [
    {
      name: "Practitioner (Limited)",
      description: "Own schedule, view patients with whom they've had appointments.",
    },
    {
      name: "Practitioner / Front Desk",
      description: "View/edit all patient records, staff profiles, create appointments for all staff, view/edit own billing records.",
    },
    {
      name: "Practitioner / Front Desk (All Locations)",
      description: "Same as above, plus view schedules and book appointments for any staff member at all locations.",
    },
    {
      name: "Front Desk",
      description: "Schedule appointments, view/edit all patient records, access transaction report.",
    },
    {
      name: "Administrator / All Billing",
      description: "View/edit all patient/staff records, access all billing/reporting.",
    },
    {
      name: "Full Access",
      description: "Full access including all settings and preferences.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Staff Permissions</h1>

      {/* Role Descriptions Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Role Descriptions</h2>
        <div className="space-y-4">
          {roles.map((role, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
              <h3 className="font-semibold text-gray-900 mb-1">{role.name}</h3>
              <p className="text-sm text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Account Ownership Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Ownership</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            The account owner is the primary contact for the Jane account. Consent from the account owner is required for:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Jane subscription changes</li>
            <li>Data exports/transfers</li>
            <li>Roles & permissions changes</li>
            <li>Account closure</li>
          </ul>
          <p className="mt-3">The account owner is also responsible for subscription fees.</p>
        </div>
      </div>

      {/* Staff List Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Access Billing
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Access Charts
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Manage Shifts
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffMembers.map((staff, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                      <div className="text-xs text-gray-500">
                        Username: {staff.username}
                      </div>
                      <div className="text-xs text-gray-500">
                        Last Sign In: {staff.lastSignIn}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {staff.isOwner && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Account Owner
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{staff.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={staff.active}
                      readOnly
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={staff.accessBilling}
                      readOnly
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={staff.accessCharts}
                      readOnly
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={staff.manageShifts}
                      readOnly
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

