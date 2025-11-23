"use client";

import { useState } from "react";

interface Treatment {
  id: string;
  name: string;
  treatmentLength: number;
  scheduledLength: number;
  price: number;
  location: string;
  discipline: string;
  groupSize?: number;
  type?: "one-on-one" | "group" | "class";
}

interface JaneAppTreatmentsProps {
  onCreateTreatment?: () => void;
  onReassign?: () => void;
}

export default function JaneAppTreatments({ onCreateTreatment, onReassign }: JaneAppTreatmentsProps) {
  const treatments: Treatment[] = [
    {
      id: "1",
      name: "Initial Assessment – 60 Minutes",
      treatmentLength: 65,
      scheduledLength: 65,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
    },
    {
      id: "2",
      name: "Individual Therapy – 45 Minutes",
      treatmentLength: 45,
      scheduledLength: 45,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
    },
    {
      id: "3",
      name: "Individual Therapy – 60 Minutes",
      treatmentLength: 60,
      scheduledLength: 60,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
    },
    {
      id: "4",
      name: "Couples Therapy – 60 Minutes",
      treatmentLength: 60,
      scheduledLength: 60,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
      groupSize: 2,
      type: "group",
    },
    {
      id: "5",
      name: "Family Therapy – 60 Minutes",
      treatmentLength: 60,
      scheduledLength: 60,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
      groupSize: 4,
      type: "group",
    },
    {
      id: "6",
      name: "Group Therapy – 60 Minutes",
      treatmentLength: 60,
      scheduledLength: 60,
      price: 100.0,
      location: "GraceHealth",
      discipline: "Psychotherapy",
      groupSize: 6,
      type: "class",
    },
  ];

  const groupedTreatments = treatments.reduce((acc, treatment) => {
    if (!acc[treatment.discipline]) {
      acc[treatment.discipline] = [];
    }
    acc[treatment.discipline].push(treatment);
    return acc;
  }, {} as Record<string, Treatment[]>);

  return (
    <div className="space-y-6">
      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Treatments, Classes & Group Appointments</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={onReassign}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
          >
            Reassign
          </button>
          <button
            onClick={onCreateTreatment}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            New Treatment
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 mb-2">
          Create and manage all your treatments here. Choose the type of appointment: one-on-one, class, or group, and select if it's in-person or online (Telehealth).{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Learn more about setting up treatments.
          </a>
        </p>
        <p className="text-gray-700">
          Click and drag to reorder treatments. This sets the order on the main booking page.{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Learn more.
          </a>
        </p>
      </div>

      {/* Treatments List by Discipline */}
      {Object.entries(groupedTreatments).map(([discipline, disciplineTreatments]) => (
        <div key={discipline} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">{discipline}</h2>
          {disciplineTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="bg-white rounded-lg border border-gray-200 p-6 flex items-center gap-6"
            >
              {/* Number */}
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">{index + 1}</span>
              </div>

              {/* Treatment Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                  {treatment.type && treatment.groupSize && (
                    <span className="px-2 py-0.5 text-xs font-semibold text-teal-700 bg-teal-100 rounded">
                      {treatment.groupSize} {treatment.type === "group" ? "Group" : "Class"}
                    </span>
                  )}
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    Treatment Length: {treatment.treatmentLength} minutes. Scheduled Length: {treatment.scheduledLength} minutes
                  </p>
                  <p>Price: ${treatment.price.toFixed(2)}</p>
                  <p>Offered at: {treatment.location}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-400 hover:text-gray-600 cursor-move">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                  Duplicate
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

