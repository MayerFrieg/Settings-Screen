export default function JaneAppAccountRecommendations() {
  return (
    <div className="space-y-6">
      {/* Header with Icon */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Account Recommendations</h1>
          <p className="text-gray-600">Here are a few tips on getting the most from your Jane account.</p>
        </div>
      </div>

      {/* Recommendation Cards */}
      <div className="space-y-4">
        {/* AI Scribe Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">AI Scribe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Want to make charting even faster? AI Scribe can help with drafting your session notes, right inside Jane. It's designed to make documentation quicker, with no extra apps required. Turning it on is quick, and you can start exploring in minutes.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
              >
                Learn More About AI Scribe
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Jane Payments Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Jane Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Looks like you haven't enabled Jane Payments which would enable a bunch of great feature in Jane, such as storing credit cards, allowing patients to pay their balance online, and online booking pre-payment options. Enabling Jane Payments is super quick and you'll be processing within a few minutes.
              </p>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Enable Jane Payments
              </button>
            </div>
          </div>
        </div>

        {/* Disciplines without a Description Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disciplines without a Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your online booking pages will look best if you add a few sentences to let your patients know about what you offer in each area of your business. Head to the Disciplines area to add a description to each discipline you offer, and then check out your online booking pages to see how it looks. Disciplines missing a description: <span className="font-medium">Occupational Therapy, Physiotherapy, Psychology, Psychotherapy</span>
              </p>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                Fix
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

