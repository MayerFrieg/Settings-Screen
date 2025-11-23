"use client";

import { useState } from "react";

type PermissionLevel = "disabled" | "enabled" | "enabled-with-financial";

interface StaffMember {
  name: string;
  isOwner: boolean;
  permission: PermissionLevel;
}

export default function JaneAppDashboardPermissions() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      name: "Grace Canada",
      isOwner: true,
      permission: "enabled",
    },
  ]);

  const handlePermissionChange = (index: number, permission: PermissionLevel) => {
    const updated = [...staffMembers];
    updated[index].permission = permission;
    setStaffMembers(updated);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Dashboard Permissions</h1>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-4">
          The Practitioner Dashboard is the one-stop shop where your practitioners can measure how they have been doing from day to day. By providing these metrics to them, they can identify where exactly they need to improve.
        </p>
        <p className="text-gray-700">
          If you cannot click on the option 'Enabled with Financial Metrics' for a specific practitioner, you may need to check their permissions. Head over to{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Roles & Permissions
          </a>{" "}
          if so.
        </p>
      </div>

      {/* Permissions Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Staff Member
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Disabled
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Enabled
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Enabled with Financial Metrics
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffMembers.map((staff, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        {staff.isOwner && (
                          <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                            Account Owner
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="radio"
                      name={`permission-${index}`}
                      checked={staff.permission === "disabled"}
                      onChange={() => handlePermissionChange(index, "disabled")}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="radio"
                      name={`permission-${index}`}
                      checked={staff.permission === "enabled"}
                      onChange={() => handlePermissionChange(index, "enabled")}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="radio"
                      name={`permission-${index}`}
                      checked={staff.permission === "enabled-with-financial"}
                      onChange={() => handlePermissionChange(index, "enabled-with-financial")}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500"
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

