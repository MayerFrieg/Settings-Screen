"use client";

import { useState } from "react";

interface RoomData {
  name: string;
  code: string;
  priorityOrder: number;
  description: string;
  availableForAllTypes: boolean;
}

interface ColibAddRoomModalProps {
  onClose: () => void;
  onSave: (room: RoomData) => void;
}

export default function ColibAddRoomModal({ onClose, onSave }: ColibAddRoomModalProps) {
  const [formData, setFormData] = useState<RoomData>({
    name: "",
    code: "",
    priorityOrder: 10,
    description: "",
    availableForAllTypes: false,
  });

  const handleInputChange = (field: keyof RoomData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriorityChange = (delta: number) => {
    const newValue = formData.priorityOrder + delta;
    if (newValue >= 1 && newValue <= 20) {
      handleInputChange("priorityOrder", newValue);
    }
  };

  const handleSave = () => {
    if (formData.name.trim() && formData.code.trim()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add Room</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4">
          {/* Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Name"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Code */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Code</label>
            <input
              type="text"
              value={formData.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Code"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <p className="mt-1 text-xs text-gray-600">
              The code of the room is displayed on your scheduler.
            </p>
          </div>

          {/* Priority order */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority order</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.priorityOrder}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 1 && value <= 20) {
                    handleInputChange("priorityOrder", value);
                  }
                }}
                min={1}
                max={20}
                className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <div className="flex flex-col">
                <button
                  onClick={() => handlePriorityChange(1)}
                  className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                  disabled={formData.priorityOrder >= 20}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => handlePriorityChange(-1)}
                  className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                  disabled={formData.priorityOrder <= 1}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-600">
              Enter a number between 1 and 20 to give an order of priority to the room when the platform has to decide between several available rooms for an appointment. The rooms with priority "1" will be chosen first.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[80px] resize-y"
              placeholder="Description"
            />
          </div>

          {/* Available for all types of appointments */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Available for all types of appointments
              </label>
              <p className="text-sm text-gray-600">
                If you don't select this option, you will have to choose the type of appointments available for this room.
              </p>
            </div>
            <button
              onClick={() => handleInputChange("availableForAllTypes", !formData.availableForAllTypes)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                formData.availableForAllTypes ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.availableForAllTypes ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <button
            onClick={handleSave}
            className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

