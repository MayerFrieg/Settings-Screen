"use client";

import { useState } from "react";

interface IPData {
  ip: string;
  description: string;
}

interface ColibAddIPModalProps {
  onClose: () => void;
  onSave: (ip: IPData) => void;
}

export default function ColibAddIPModal({ onClose, onSave }: ColibAddIPModalProps) {
  const [formData, setFormData] = useState<IPData>({
    ip: "",
    description: "",
  });

  const handleInputChange = (field: keyof IPData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUseCurrentIP = async () => {
    // In a real application, this would fetch the current IP from an API
    // For now, we'll use a placeholder
    setFormData((prev) => ({ ...prev, ip: "192.168.1.1" }));
  };

  const handleSave = () => {
    if (formData.ip.trim()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add IP</h3>
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
          {/* IPv4 address */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">IPv4 address</label>
            <input
              type="text"
              value={formData.ip}
              onChange={(e) => handleInputChange("ip", e.target.value)}
              className="w-full px-4 py-2 pr-10 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              placeholder="Enter IPv4 address"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <button
              onClick={handleUseCurrentIP}
              className="mt-2 text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              Use my current IP address
            </button>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
              placeholder="Enter description"
            />
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

