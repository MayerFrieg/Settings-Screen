export default function JaneAppPayments() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Jane Payments</h1>
        <p className="text-gray-600 text-lg">Spend less time chasing money</p>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: What you need to know */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">What you need to know</h2>
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium">2.75%</span> for online transactions
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-1">
                    <span className="font-medium">2.50%</span> for terminal transactions on the Jane Payments Terminal
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-1">
                    <span className="font-medium">$0.10</span> for Interac transactions on the Jane Payments Terminal
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Transactions are paid out <span className="font-medium">2 business days later</span>
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    You can accept <span className="font-medium">Visa, Mastercard, American Express, Discover</span>, as well as <span className="font-medium">Visa Debit & Debit Mastercard</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What you need for sign-up */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">What you need for sign-up</h2>
            <div className="space-y-6">
              {/* Bank account */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">Bank account details</p>
                </div>
              </div>

              {/* Business information */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Business information such as the legal name and tax ID
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    If asked for your website, please use{" "}
                    <span className="font-medium text-teal-600">https://healthpartners.janeapp.com</span>
                  </p>
                </div>
              </div>

              {/* Industry */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    Select <span className="font-medium">"Other Medical Services"</span> if asked for your Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-base transition-colors">
            I'm in, let's do this
          </button>
        </div>
      </div>
    </div>
  );
}

