"use client";

import { useState } from "react";

export default function SimplePracticeSecureMessaging() {
  const [secureMessagingEnabled, setSecureMessagingEnabled] = useState(true);
  const [autoAllowNewClients, setAutoAllowNewClients] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Empty state - no clients with Client Portal access yet
  const clients: Array<{ name: string; email: string; enabled: boolean }> = [];

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Secure Messaging</h1>
          <p className="text-sm text-gray-900 mt-1">Messaging for team members and clients</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Watch a quick video about Secure Messaging
          </a>
        </div>
      </div>

      {/* Secure Messaging with Clients Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Messaging with Clients is {secureMessagingEnabled ? "enabled" : "disabled"}.
              </h2>
              <p className="text-sm text-gray-900">
                Enable this feature to send messages to your clients in a secure, HIPAA compliant way.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-6">
              <input
                type="checkbox"
                checked={secureMessagingEnabled}
                onChange={(e) => setSecureMessagingEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {secureMessagingEnabled && (
            <div className="mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoAllowNewClients}
                  onChange={(e) => setAutoAllowNewClients(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Automatically allow secure messaging for all new clients</span>
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Clients</h2>
          
          {/* Informational Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-900">
              Note: You can also enable Secure Messaging for individual clients in their Communication tab.
            </p>
          </div>

          {/* Table Header and Search */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Enabled</th>
                  <th className="text-right py-3 px-4">
                    <div className="relative w-64 ml-auto">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Find a client"
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
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-12 text-center">
                      <p className="text-sm text-gray-900">
                        When you enable Client Portal access for individual clients, they will show up here.
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredClients.map((client, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{client.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{client.email}</td>
                      <td className="py-3 px-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={client.enabled}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </label>
                      </td>
                      <td></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

