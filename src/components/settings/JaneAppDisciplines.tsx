"use client";

import { useState } from "react";

interface Discipline {
  id: string;
  name: string;
  professionalTitle: string;
  staffCount: number;
  onlineBookingEnabled: boolean;
}

interface JaneAppDisciplinesProps {
  onCreateDiscipline?: () => void;
}

export default function JaneAppDisciplines({ onCreateDiscipline }: JaneAppDisciplinesProps) {
  const [showArchived, setShowArchived] = useState(false);
  
  const disciplines: Discipline[] = [
    {
      id: "1",
      name: "Psychotherapy",
      professionalTitle: "Psychotherapist",
      staffCount: 1,
      onlineBookingEnabled: true,
    },
    {
      id: "2",
      name: "Occupational Therapy",
      professionalTitle: "Occupational Therapist",
      staffCount: 1,
      onlineBookingEnabled: true,
    },
    {
      id: "3",
      name: "Physiotherapy",
      professionalTitle: "Physiotherapist",
      staffCount: 1,
      onlineBookingEnabled: true,
    },
    {
      id: "4",
      name: "Psychology",
      professionalTitle: "Psychologist",
      staffCount: 1,
      onlineBookingEnabled: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Disciplines</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowArchived(!showArchived)}
            className="text-teal-600 hover:text-teal-700 underline text-sm"
          >
            Show Archived
          </button>
          <button
            onClick={onCreateDiscipline}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            New Discipline
          </button>
        </div>
      </div>

      {/* Introductory Text */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-4">
          Disciplines in Jane are a versatile tool for grouping staff and organizing your account. Use them to structure your online booking site, group staff columns in the main schedule, and filter reports.
        </p>
        <p className="text-gray-700">
          Disciplines don't have to represent a specific scope of practice; use them creatively to best suit your needs. For example, a medical aesthetics clinic could create multiple disciplines based on different service categories for better organization.{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Learn more about disciplines
          </a>
        </p>
      </div>

      {/* Disciplines List */}
      <div className="space-y-4">
        {disciplines.map((discipline, index) => (
          <div
            key={discipline.id}
            className="bg-white rounded-lg border border-gray-200 p-6 flex items-center gap-6"
          >
            {/* Number Circle */}
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">{index + 1}</span>
            </div>

            {/* Discipline Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">{discipline.name}</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>Professional Title: {discipline.professionalTitle}</p>
                <p>{discipline.staffCount} Staff {discipline.staffCount === 1 ? "Member" : "Members"}</p>
                <p>Online Booking: {discipline.onlineBookingEnabled ? "Enabled" : "Disabled"}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

