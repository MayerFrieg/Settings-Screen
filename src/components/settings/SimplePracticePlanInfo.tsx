"use client";

export default function SimplePracticePlanInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Plan info</h1>
          <p className="text-sm text-gray-900 mt-1">Current plan, add-ons, receipts</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about Plan info
        </a>
      </div>

      {/* Plan and add-on details section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Plan and add-on details</h2>

          {/* Plus Plan */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plus Plan</h3>
                <p className="text-sm text-gray-900">
                  For the practice looking to simplify admin work and streamline their business
                </p>
              </div>
              <div className="text-right ml-4">
                <p className="text-2xl font-bold text-gray-900">$99/mo</p>
                <button className="mt-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded border border-gray-300">
                  Change trial plan
                </button>
              </div>
            </div>

            {/* PLAN DETAILS */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">PLAN DETAILS</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">Plus plan:</span> $99/month
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Team Members</p>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">Additional clinicians:</span>
                      <span className="text-sm text-gray-900">Starting at $74/month</span>
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
                    <div>
                      <span className="text-sm text-gray-900">Practice managers:</span>
                      <span className="text-sm text-gray-900 ml-2">$39/month</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-900">Admin users:</span>
                      <span className="text-sm text-gray-900 ml-2">Free</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Insurance</p>
                  <div className="ml-4 space-y-2">
                    <div>
                      <span className="text-sm text-gray-900">Claims:</span>
                      <span className="text-sm text-gray-900 ml-2">
                        first 35 free/month, then starts at $0.25 per claim
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-900">Manual insurance status checks:</span>
                      <span className="text-sm text-gray-900 ml-2">Free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADD-ONS */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">ADD-ONS</h4>
            <div className="space-y-6">
              {/* Note Taker */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-base font-semibold text-gray-900">Note Taker</h5>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                        30-day trial available
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">
                      Simplify progress note writing with an AI-powered digital scribe
                    </p>
                    <p className="text-xs text-gray-500">
                      SimplePractice is committed to ethical AI. Learn more in our{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                        Addendum to SimplePractice Terms of Service for Add-On AI Products
                      </a>
                      .
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 mb-2">
                      Manage access
                    </button>
                    <p className="text-sm text-gray-900">$35/month per clinician</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available after activating plan */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Available after activating plan
            </h4>
            <div className="space-y-4">
              {/* ePrescribe */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="text-base font-semibold text-gray-900 mb-2">ePrescribe</h5>
                    <p className="text-sm text-gray-900 mb-1">
                      Prescribe medications, track medication history, and order refills
                    </p>
                    <p className="text-sm text-gray-900">Prescription Drug Monitoring Program</p>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-sm text-gray-900 mb-1">$49/month</p>
                    <p className="text-sm text-gray-900">$6.25/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel account button */}
      <div className="flex justify-start">
        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded border border-red-300">
          Cancel account
        </button>
      </div>
    </div>
  );
}

