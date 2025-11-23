"use client";

import { useState } from "react";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  subscription: "none" | "free" | "unlimited";
  requested: boolean;
}

type DeletionPolicy = "indefinitely" | "immediately" | "set-period";

export default function JaneAppAIScribe() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([
    {
      id: "1",
      name: "Grace Canada",
      role: "Owner",
      subscription: "none",
      requested: false,
    },
  ]);

  const [deletionPolicy, setDeletionPolicy] = useState<DeletionPolicy>("immediately");

  const handleSubscriptionChange = (id: string, subscription: "none" | "free" | "unlimited") => {
    setStaffMembers((prev) =>
      prev.map((member) => (member.id === id ? { ...member, subscription } : member))
    );
  };

  const handleSave = () => {
    // In a real app, this would save the settings
    console.log("Saving AI Scribe settings:", { staffMembers, deletionPolicy });
  };

  const handleCancel = () => {
    // Reset to original state
    setStaffMembers([
      {
        id: "1",
        name: "Grace Canada",
        role: "Owner",
        subscription: "none",
        requested: false,
      },
    ]);
    setDeletionPolicy("immediately");
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-light text-gray-400">AI Scribe</h1>
        <span className="px-2 py-0.5 text-xs font-semibold text-orange-700 bg-orange-100 rounded">
          New
        </span>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
        <p className="text-gray-700 mb-4">
          Tired of taking notes? With our AI powered AI Scribe feature you can hit record and focus on providing your patients with the care and attention they need. After your session, we'll create a fully editable chart entry that contains a summary of all that was said during your session organized into a SOAP note or your own customized template.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
          <li>Fully HIPAA and PIPEDA compliant</li>
          <li>No additional apps or installs required</li>
        </ul>
      </div>

      {/* Manage Feature Access Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Manage feature access</h2>
        
        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Free Tier */}
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50/30">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Free</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Try AI Scribe out with <span className="font-semibold">5 free notes per month</span> per staff member</li>
              <li>Free notes refill on the first of every month</li>
            </ul>
          </div>

          {/* Unlimited Tier */}
          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50/30">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Unlimited</h3>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">$15 / month</div>
                <div className="text-xs text-gray-600">per staff member</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Unlimited AI Scribe notes and templates</li>
              <li>Cancel any time with a month-to-month subscription</li>
            </ul>
          </div>
        </div>

        {/* Staff Member Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Staff Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Subscription
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Requested
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{member.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-700">{member.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={member.subscription}
                      onChange={(e) =>
                        handleSubscriptionChange(member.id, e.target.value as "none" | "free" | "unlimited")
                      }
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-sm"
                    >
                      <option value="none">None</option>
                      <option value="free">Free</option>
                      <option value="unlimited">Unlimited</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">-</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recording Deletion Policy Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recording deletion policy</h2>
        <p className="text-gray-700 mb-4">
          Set the amount of days you'd like to store audio and transcript files after a successful note generation.
        </p>
        
        <div className="space-y-3 mb-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="deletion-policy"
              value="indefinitely"
              checked={deletionPolicy === "indefinitely"}
              onChange={() => setDeletionPolicy("indefinitely")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-gray-700">Keep files indefinitely</span>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="deletion-policy"
              value="immediately"
              checked={deletionPolicy === "immediately"}
              onChange={() => setDeletionPolicy("immediately")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-gray-700">Delete files immediately after successful generation</span>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="deletion-policy"
              value="set-period"
              checked={deletionPolicy === "set-period"}
              onChange={() => setDeletionPolicy("set-period")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-gray-700">Delete files after a set period of time</span>
          </label>
        </div>

        {deletionPolicy !== "indefinitely" && (
          <div className="flex items-start gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-blue-800">
              After selecting and saving a policy that includes automatic deletion, existing AI Scribe recording files that fall outside the selected time period will be deleted by the end of today.
            </p>
          </div>
        )}
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
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}

