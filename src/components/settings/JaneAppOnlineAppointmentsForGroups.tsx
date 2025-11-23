"use client";

import { useState } from "react";

interface StaffMember {
  id: string;
  name: string;
  initials: string;
  groupOnlineAppointments: boolean;
}

export default function JaneAppOnlineAppointmentsForGroups() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      id: "1",
      name: "Grace Canada",
      initials: "GC",
      groupOnlineAppointments: false,
    },
  ]);

  const [hasActiveCalls, setHasActiveCalls] = useState(false);

  const handleToggle = (id: string) => {
    setStaffMembers((prev) =>
      prev.map((member) =>
        member.id === id
          ? { ...member, groupOnlineAppointments: !member.groupOnlineAppointments }
          : member
      )
    );
  };

  const hasChanges = staffMembers.some((member) => member.groupOnlineAppointments !== false);

  const handleSave = () => {
    // In a real app, this would save the settings
    console.log("Saving online appointments for groups:", staffMembers);
  };

  const handleCancel = () => {
    // Reset to original state
    setStaffMembers([
      {
        id: "1",
        name: "Grace Canada",
        initials: "GC",
        groupOnlineAppointments: false,
      },
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Online Appointments for Groups</h1>

      {/* Guide Link */}
      <div>
        <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm">
          Read Online Appointments for Groups Guide
        </a>
      </div>

      {/* Feature Description Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-4">
          Online Appointments for Groups is a new way to deliver Telehealth for calls, ideal for couples, families, and related clients. It's an optional add-on for <span className="font-semibold">$15 / month per practitioner who is enabled</span>. Jane's one-on-one Online Appointments are included in all subscriptions.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
          <li>Run unlimited virtual sessions for 2-12 related clients</li>
          <li>Fully HIPAA, PIPEDA, and GDPR compliant</li>
          <li>No additional apps or installs required</li>
          <li>Launch from any device or browser with a secure link</li>
          <li>Cancel any time with a month-to-month subscription</li>
        </ul>
        <p className="text-gray-700">
          After enabling the feature for practitioners, check out our{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            ready checklist
          </a>{" "}
          to get started.
        </p>
      </div>

      {/* Heads Up Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Heads up</span> - to avoid any call disruptions we strongly suggest enabling Online Appointments for Groups for individual Staff Members when there are no active calls, such as before or after the clinic's operating hours.
        </p>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-blue-800">
            Currently, no active calls happening
          </span>
        </div>
      </div>

      {/* Staff Member Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Staff Member</h2>
        <div className="space-y-4">
          {staffMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-700">{member.initials}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{member.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">Group Online Appointments</span>
                <button
                  type="button"
                  onClick={() => handleToggle(member.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                    member.groupOnlineAppointments ? "bg-teal-600" : "bg-gray-300"
                  }`}
                  role="switch"
                  aria-checked={member.groupOnlineAppointments}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      member.groupOnlineAppointments ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
}

