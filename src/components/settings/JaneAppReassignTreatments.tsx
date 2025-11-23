"use client";

import { useState } from "react";

interface Treatment {
  id: string;
  name: string;
  discipline: string;
  pastAppointments: number;
  upcomingAppointments: number;
}

interface JaneAppReassignTreatmentsProps {
  onBack?: () => void;
}

export default function JaneAppReassignTreatments({ onBack }: JaneAppReassignTreatmentsProps) {
  const [treatments, setTreatments] = useState<Treatment[]>([
    { id: "1", name: "ADL Training", discipline: "Psychotherapy - 45 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "2", name: "Community-Based Session", discipline: "Psychotherapy - 45 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "3", name: "Couples Therapy - 60 Minutes", discipline: "Psychotherapy - 60 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "4", name: "Extended Treatment Session", discipline: "Psychotherapy - 45 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "5", name: "Family Therapy - 60 Minutes", discipline: "Psychotherapy - 60 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "6", name: "Follow-up Treatment", discipline: "Psychotherapy - 30 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "7", name: "Group Exercise Class", discipline: "Psychotherapy - 45 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "8", name: "Group Session", discipline: "Psychotherapy - 60 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "9", name: "Group Therapy - 60 Minutes", discipline: "Psychotherapy - 60 min", pastAppointments: 0, upcomingAppointments: 0 },
    { id: "10", name: "Home Safety Assessment", discipline: "Psychotherapy - 45 min", pastAppointments: 0, upcomingAppointments: 0 },
  ]);

  const [reassignments, setReassignments] = useState<Record<string, string>>({});
  const [archived, setArchived] = useState<Record<string, boolean>>({});

  const handleReassignChange = (id: string, value: string) => {
    setReassignments((prev) => ({ ...prev, [id]: value }));
  };

  const handleArchiveChange = (id: string, checked: boolean) => {
    setArchived((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <div className="space-y-6">
      {/* Title and Back Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Reassign Treatments</h1>
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Back To Treatments
        </button>
      </div>

      {/* Info Banner */}
      <div className="flex items-start gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-blue-800">
          Need to reassign treatments post import?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">
            Visit our guide to learn how
          </a>
        </p>
      </div>

      {/* Treatments Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  # Past Appointments
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  # Upcoming Appointments
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Reassign to
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Archive
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {treatments.map((treatment) => (
                <tr key={treatment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{treatment.name}</div>
                      <div className="text-xs text-gray-500">{treatment.discipline}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-sm text-gray-700">{treatment.pastAppointments}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-sm text-gray-700">{treatment.upcomingAppointments}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={reassignments[treatment.id] || "no-change"}
                      onChange={(e) => handleReassignChange(treatment.id, e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-sm"
                    >
                      <option value="no-change">No Change</option>
                      <option value="treatment-1">Initial Assessment – 60 Minutes</option>
                      <option value="treatment-2">Individual Therapy – 45 Minutes</option>
                      <option value="treatment-3">Individual Therapy – 60 Minutes</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={archived[treatment.id] || false}
                      onChange={(e) => handleArchiveChange(treatment.id, e.target.checked)}
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

