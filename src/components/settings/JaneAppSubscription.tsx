"use client";

import { useState } from "react";

export default function JaneAppSubscription() {
  const [activeTab, setActiveTab] = useState<"account" | "contact-info" | "update-credit-card" | "make-payment" | "billing-history">("account");
  const [referralName, setReferralName] = useState("");
  const [referralClinic, setReferralClinic] = useState("");
  const [referralCity, setReferralCity] = useState("");

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab("account")}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "account"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab("contact-info")}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "contact-info"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab("update-credit-card")}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "update-credit-card"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Update Credit Card
          </button>
          <button
            onClick={() => setActiveTab("make-payment")}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "make-payment"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Make a Payment
          </button>
          <button
            onClick={() => setActiveTab("billing-history")}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "billing-history"
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Billing History
          </button>
        </nav>
      </div>

      {/* Account Tab Content */}
      {activeTab === "account" && (
        <div className="space-y-8">
          {/* GraceHealth Clinic Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-600 mb-6">GraceHealth</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                  <p className="text-gray-900">unit 10</p>
                  <p className="text-gray-900">Kitchener ON N2A 4E1</p>
                  <p className="text-gray-900">CA</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Phone</label>
                  <p className="text-gray-900">6043001051</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Clinic Email</label>
                  <a href="mailto:Phillip.henein@gmail.com" className="text-blue-600 hover:text-blue-700 underline">
                    Phillip.henein@gmail.com
                  </a>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Website</label>
                  <p className="text-gray-900">None</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Owner</label>
                  <p className="text-gray-900">Grace Canada</p>
                  <a href="mailto:Phillip.henein@gmail.com" className="text-blue-600 hover:text-blue-700 underline">
                    Phillip.henein@gmail.com
                  </a>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Jane URL</label>
                  <a href="https://healthpartners.janeapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                    healthpartners.janeapp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Section */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 mb-4 flex items-center gap-2">
                Did you hear about Jane from a Jane user? Let us know who they are so we can thank them (and maybe even send them some Jane swag!)
                <span>🎁</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={referralName}
                    onChange={(e) => setReferralName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Clinic / Practice / Business Name</label>
                  <input
                    type="text"
                    value={referralClinic}
                    onChange={(e) => setReferralClinic(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={referralCity}
                    onChange={(e) => setReferralCity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Save
              </button>
            </div>
          </div>

          {/* Primary Subscriptions Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Primary Subscriptions</h2>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Update Subscriptions
              </button>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">November 20, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Practice</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.0 license</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">CAD $79.00 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 pt-4">
            Booking by Jane. See Jane run your clinic.
          </div>
        </div>
      )}

      {/* Other Tabs - Placeholder Content */}
      {activeTab !== "account" && (
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
          <p>This section is coming soon.</p>
        </div>
      )}
    </div>
  );
}

