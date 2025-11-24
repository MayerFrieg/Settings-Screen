"use client";

import { useState } from "react";

export default function SimplePracticeOnlinePayments() {
  const [showSecurityCodeModal, setShowSecurityCodeModal] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [verificationMethod, setVerificationMethod] = useState<"call" | "text" | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Online payments</h1>
          <p className="text-sm text-gray-900 mt-1">Set up and manage online payments</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about Online payments
        </a>
      </div>

      {/* Receive payments from clients today */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Receive payments from clients today</h2>
        <p className="text-sm text-gray-900 mb-6">
          Add your bank details; that's it. No card readers, terminals, or hidden fees. Get paid faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900">All major credit & debit cards accepted</p>
              <p className="text-xs text-gray-900 mt-1">This also includes FSA and HSA cards</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900">Transparent processing fees</p>
              <p className="text-xs text-gray-900 mt-1">For each successful charge: 3.15% + 30¢ and no fees for refunds</p>
            </div>
          </div>
        </div>

        {/* Payment graphic illustration */}
        <div className="flex justify-center items-center py-8">
          <div className="relative w-64 h-64">
            {/* Central figure with glasses */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            {/* Connected figures */}
            {[
              { angle: 0, label: "+$90" },
              { angle: 90, label: "+$90" },
              { angle: 180, label: "+$90" },
              { angle: 270, label: "+$90" },
            ].map((item, index) => {
              const radius = 100;
              const x = Math.cos((item.angle * Math.PI) / 180) * radius;
              const y = Math.sin((item.angle * Math.PI) / 180) * radius;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-7 h-7 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-green-600">{item.label}</span>
                  </div>
                </div>
              );
            })}
            {/* Dashed lines connecting to central figure */}
            {[0, 90, 180, 270].map((angle, index) => {
              const radius = 100;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const length = Math.sqrt(x * x + y * y) - 40;
              return (
                <svg
                  key={index}
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: "center",
                  }}
                  width={length}
                  height="2"
                >
                  <line
                    x1="40"
                    y1="1"
                    x2={length}
                    y2="1"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sign up for Online Payments */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sign up for Online Payments</h2>
          <p className="text-sm text-gray-900 mb-6">
            In order to sign up for your Online Payments account, we need to verify your SimplePractice email address
            and that you have a valid phone number. After you verify your email address, choose one of the options
            below to request a security code be sent to your phone number (626) 677-7982.
          </p>
          <p className="text-sm text-gray-900 mb-6">
            If this is not your mobile phone number, please update your{" "}
            <a href="/simplepractice/profile" className="text-blue-600 hover:text-blue-700 hover:underline">
              Profile and security
            </a>
            .
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">1. Verify account email address</h3>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-900">Email verification complete</span>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">2. How would you like to receive your security code?</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setVerificationMethod("call");
                    setShowSecurityCodeModal(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Call Me
                </button>
                <button
                  onClick={() => {
                    setVerificationMethod("text");
                    setShowSecurityCodeModal(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Text Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enter Security Code Modal */}
      {showSecurityCodeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Enter Your Security Code</h2>
              <button
                onClick={() => setShowSecurityCodeModal(false)}
                className="text-gray-400 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-gray-900 mb-6">
              You will get a {verificationMethod === "call" ? "call" : "text"} on your phone ending in 7982 within a few
              seconds.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">Security Code</label>
              <input
                type="text"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                placeholder="XXXXXX"
                maxLength={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                Resend security code
              </a>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSecurityCodeModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Confirm code logic here
                  setShowSecurityCodeModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Confirm Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

