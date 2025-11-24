"use client";

import { useState } from "react";

type Service = {
  id: string;
  code: string;
  name: string;
  duration: number;
  rate: number;
  isDefault: boolean;
  hasAppointmentRequests: boolean;
};

export default function SimplePracticeServices() {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      code: "90834",
      name: "Psychotherapy, 45 min",
      duration: 50,
      rate: 100,
      isDefault: true,
      hasAppointmentRequests: false,
    },
    {
      id: "2",
      code: "00000",
      name: "Initial Consultation - No Charge",
      duration: 15,
      rate: 0,
      isDefault: false,
      hasAppointmentRequests: true,
    },
    {
      id: "3",
      code: "90791",
      name: "Psychiatric Diagnostic Evaluation",
      duration: 50,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: true,
    },
    {
      id: "4",
      code: "90837",
      name: "Psychotherapy, 60 min",
      duration: 60,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: false,
    },
    {
      id: "5",
      code: "90847",
      name: "Family psychotherapy, conjoint psychotherapy with the patient present",
      duration: 50,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: false,
    },
    {
      id: "6",
      code: "90853",
      name: "Group Therapy",
      duration: 50,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: false,
    },
    {
      id: "7",
      code: "97110",
      name: "Therapeutic exercises",
      duration: 50,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: false,
    },
    {
      id: "8",
      code: "97530",
      name: "Therapeutic activities, direct (one-on-one) patient contact (use of dynamic activities to improve functional performance), each 15 minutes",
      duration: 50,
      rate: 100,
      isDefault: false,
      hasAppointmentRequests: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    rate: "0",
    defaultDuration: "50",
    isDefault: false,
    billInUnits: false,
    availableForOnlineRequests: true,
    allowForNewClients: false,
    requireClientsToCall: false,
    blockOffBefore: "0",
    blockOffAfter: "0",
  });

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      code: service.code,
      description: service.name,
      rate: service.rate.toString(),
      defaultDuration: service.duration.toString(),
      isDefault: service.isDefault,
      billInUnits: false,
      availableForOnlineRequests: service.hasAppointmentRequests,
      allowForNewClients: false,
      requireClientsToCall: false,
      blockOffBefore: "0",
      blockOffAfter: "0",
    });
    setShowAddForm(true);
  };

  const handleSave = () => {
    // Save logic here
    setShowAddForm(false);
    setEditingService(null);
    setFormData({
      code: "",
      description: "",
      rate: "0",
      defaultDuration: "50",
      isDefault: false,
      billInUnits: false,
      availableForOnlineRequests: true,
      allowForNewClients: false,
      requireClientsToCall: false,
      blockOffBefore: "0",
      blockOffAfter: "0",
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-sm text-gray-900 mt-1">Manage services and set rates</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => {
              setEditingService(null);
              setFormData({
                code: "",
                description: "",
                rate: "0",
                defaultDuration: "50",
                isDefault: false,
                billInUnits: false,
                availableForOnlineRequests: true,
                allowForNewClients: false,
                requireClientsToCall: false,
                blockOffBefore: "0",
                blockOffAfter: "0",
              });
              setShowAddForm(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Add service
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Services
          </a>
        </div>
      </div>

      {/* Informational Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm font-semibold text-gray-900 mb-1">Click on each Service name to edit</p>
        <p className="text-sm text-gray-900">
          Service Descriptions are shown throughout the SimplePractice platform internally, in some client
          communications and in superbills.
        </p>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Services</h2>
            <span className="text-sm text-gray-900">Appointment requests</span>
          </div>

          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => handleEdit(service)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <button className="text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {service.code} {service.name}
                      </p>
                    </button>
                    {service.isDefault && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                        ✓ Default practice service
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-900 mt-1">
                    {service.duration} minutes at ${service.rate}
                  </p>
                </div>
                {service.hasAppointmentRequests && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add/Edit Service Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingService ? "Edit Service" : "Add New Service"}
                </h2>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Watch a quick video about Services
                  </a>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-400 hover:text-gray-900"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Service Code */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Service</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder="12345"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Rate</label>
                <input
                  type="text"
                  value={formData.rate}
                  onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Default Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Default Duration
                  <button className="ml-2 text-gray-400 hover:text-gray-900">
                    <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.defaultDuration}
                    onChange={(e) => setFormData({ ...formData, defaultDuration: e.target.value })}
                    placeholder="50"
                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">min</span>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isDefault}
                    onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Make this the default service</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.billInUnits}
                    onChange={(e) => setFormData({ ...formData, billInUnits: e.target.checked })}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Bill this code in units</span>
                    <button className="text-gray-400 hover:text-gray-900">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </label>
              </div>

              {/* Booking Options */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Booking Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.availableForOnlineRequests}
                      onChange={(e) => setFormData({ ...formData, availableForOnlineRequests: e.target.checked })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">Available for online appointment requests</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.allowForNewClients}
                      onChange={(e) => setFormData({ ...formData, allowForNewClients: e.target.checked })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">Allow for New Clients</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requireClientsToCall}
                      onChange={(e) => setFormData({ ...formData, requireClientsToCall: e.target.checked })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">Require Clients to call to request available appointment</span>
                      <button className="text-gray-400 hover:text-gray-900">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Block off</span>
                    <input
                      type="text"
                      value={formData.blockOffBefore}
                      onChange={(e) => setFormData({ ...formData, blockOffBefore: e.target.value })}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">minutes before and</span>
                    <input
                      type="text"
                      value={formData.blockOffAfter}
                      onChange={(e) => setFormData({ ...formData, blockOffAfter: e.target.value })}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">minutes after the appointment.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

