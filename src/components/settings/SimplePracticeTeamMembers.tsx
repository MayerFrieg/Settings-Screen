"use client";

import { useState } from "react";

export default function SimplePracticeTeamMembers() {
  const [showManageOrderModal, setShowManageOrderModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [listOrder, setListOrder] = useState("date-added");

  const teamMembers = [
    {
      id: 1,
      name: "Mayer Frieg",
      email: "youssefwhg4@gmail.com",
      role: "Clinician with entire practice access",
      twoStepVerification: "Off",
      lastSignIn: "Nov 24, 2025 at 12:34 PM",
      avatar: "MF",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team members</h1>
          <p className="text-sm text-gray-900 mt-1">Add and manage team members</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setShowManageOrderModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Manage list order
            </button>
            <button
              onClick={() => setShowAddMemberModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Add team member
            </button>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Team members
          </a>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Q Search"
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
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All roles</option>
          <option>Clinician</option>
          <option>Practice Manager</option>
          <option>Admin</option>
        </select>
      </div>

      {/* Team Members Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                2-step verification
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">
                Last sign in
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-semibold">{member.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-900">{member.role}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-900">{member.twoStepVerification}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-900">{member.lastSignIn}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manage List Order Modal */}
      {showManageOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white w-96 h-full shadow-xl overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Manage list order</h2>
                <button
                  onClick={() => setShowManageOrderModal(false)}
                  className="text-gray-400 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-900 mb-6">
                Select how your team member list is ordered across SimplePractice.
              </p>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="listOrder"
                    value="date-added"
                    checked={listOrder === "date-added"}
                    onChange={(e) => setListOrder(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Date team member was added</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="listOrder"
                    value="last-name"
                    checked={listOrder === "last-name"}
                    onChange={(e) => setListOrder(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Last name alphabetically</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="listOrder"
                    value="first-name"
                    checked={listOrder === "first-name"}
                    onChange={(e) => setListOrder(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">First name alphabetically</span>
                </label>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={() => setShowManageOrderModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Save logic here
                    setShowManageOrderModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Team Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex">
              {/* Left Section - Form */}
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2">
                    Add team member
                  </h2>
                  <button
                    onClick={() => setShowAddMemberModal(false)}
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Set up a profile</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">First name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-1">Last name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">They'll use this email to sign in to SimplePractice</p>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                    Continue
                  </button>
                </div>
              </div>

              {/* Right Section - Illustration */}
              <div className="flex-1 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50 opacity-50" style={{ clipPath: "ellipse(80% 60% at 50% 80%)" }}></div>
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {/* Simple illustration of diverse people */}
                  {[
                    { bg: "bg-green-500", w: "w-16", h: "h-20" },
                    { bg: "bg-blue-500", w: "w-16", h: "h-20" },
                    { bg: "bg-purple-500", w: "w-16", h: "h-20" },
                    { bg: "bg-indigo-500", w: "w-16", h: "h-20" },
                    { bg: "bg-pink-500", w: "w-16", h: "h-20" },
                  ].map((person, index) => (
                    <div
                      key={index}
                      className={`${person.bg} ${person.w} ${person.h} rounded-t-full flex items-end justify-center pb-2`}
                    >
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

