"use client";

import { useState } from "react";

interface JaneAppNewSupervisoryRelationshipProps {
  onCancel: () => void;
  onSave?: (supervisor: string, supervisee: string) => void;
}

export default function JaneAppNewSupervisoryRelationship({
  onCancel,
  onSave,
}: JaneAppNewSupervisoryRelationshipProps) {
  const [supervisor, setSupervisor] = useState("");
  const [supervisee, setSupervisee] = useState("");

  // Sample staff members - in a real app, this would come from props or API
  const staffMembers = [
    { id: "1", name: "Grace Canada" },
    { id: "2", name: "John Smith" },
    { id: "3", name: "Jane Doe" },
  ];

  const handleSave = () => {
    if (supervisor && supervisee && onSave) {
      onSave(supervisor, supervisee);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New supervisory relationship</h1>

      {/* Form Sections */}
      <div className="space-y-6">
        {/* Supervisor Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Supervisor</h2>
          <p className="text-sm text-gray-600 mb-4">Select supervisor (Required)</p>
          <div className="relative">
            <select
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="">Select supervisor</option>
              {staffMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Supervisee Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Supervisee</h2>
          <p className="text-sm text-gray-600 mb-4">Select supervisee (Required)</p>
          <div className="relative">
            <select
              value={supervisee}
              onChange={(e) => setSupervisee(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="">Select a staff member</option>
              {staffMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!supervisor || !supervisee}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
}

