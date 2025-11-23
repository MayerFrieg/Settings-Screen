"use client";

import { useState } from "react";

interface JaneAppNewDisciplineProps {
  onCancel: () => void;
  onSave?: (discipline: any) => void;
}

export default function JaneAppNewDiscipline({ onCancel, onSave }: JaneAppNewDisciplineProps) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [description, setDescription] = useState("");
  const [displayInOnlineBooking, setDisplayInOnlineBooking] = useState(true);

  const categories = [
    "Mental Health",
    "Physical Therapy",
    "Occupational Therapy",
    "Speech Therapy",
    "Nutrition",
    "Other",
  ];

  const handleSave = () => {
    if (category && name && professionalTitle && onSave) {
      onSave({
        category,
        name,
        professionalTitle,
        description,
        displayInOnlineBooking,
      });
    }
  };

  const isFormValid = category && name && professionalTitle;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Discipline</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Category - Required
          </label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="">Select a discipline</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Please select a category that this discipline best fits within. This will be used for reporting and analytics and will not be displayed publicly.
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Name - Required
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="e.g., Physiotherapy, Chiropractic, Acupuncture"
          />
          <p className="mt-2 text-xs text-gray-600">
            Used as a title to group your staff on your online booking site—e.g., Physiotherapy, Chiropractic, Acupuncture, Counselling, Registered Massage, etc. Optionally, use it to categorize treatments, Consultations, IV Therapy, or Injectables.
          </p>
        </div>

        {/* Professional Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Professional title - Required
          </label>
          <input
            type="text"
            value={professionalTitle}
            onChange={(e) => setProfessionalTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="e.g., Physiotherapist, Chiropractor, Acupuncturist"
          />
          <p className="mt-2 text-xs text-gray-600">
            The term for a practitioner in this discipline. This will be used in some of the phrasing in online booking pages. Common examples would be physiotherapist, chiropractor, acupuncturist, counsellor, therapist, practitioner, etc.
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-y"
            placeholder="Describe the benefits of this type of treatment and your unique approach..."
          />
          <p className="mt-2 text-xs text-gray-600">
            This description is displayed in your online booking pages. It's your chance to describe the benefits of this type of treatment and your unique approach.
          </p>
        </div>

        {/* Display in Online Booking */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={displayInOnlineBooking}
              onChange={(e) => setDisplayInOnlineBooking(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-900">Display in Online Booking</span>
          </label>
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
          disabled={!isFormValid}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Create Discipline
        </button>
      </div>
    </div>
  );
}

