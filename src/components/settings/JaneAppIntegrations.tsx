export default function JaneAppIntegrations() {
  const integrations = [
    {
      id: 1,
      name: "Jane Payments",
      logo: (
        <div className="w-16 h-16 bg-teal-600 rounded-lg flex flex-col items-center justify-center">
          <span className="text-white font-bold text-lg">Jane</span>
          <span className="text-white text-xs">Payments</span>
        </div>
      ),
      description: "With Jane Payments you can store patient cards on their profile, accept online booking pre-payments online, and send e-invoices to patients for outstanding balances.",
      buttonText: "Get Started >",
      buttonColor: "teal",
    },
    {
      id: 2,
      name: "Clinic Sites",
      logo: (
        <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-6 h-6 bg-teal-600 rounded"></div>
            <div className="w-6 h-6 bg-blue-400 rounded"></div>
            <div className="w-6 h-6 bg-blue-400 rounded"></div>
            <div className="w-6 h-6 bg-teal-600 rounded"></div>
          </div>
        </div>
      ),
      description: "Clinic Sites is a service designed to help health and wellness businesses build and maintain websites with ease. With Jane's integration, the publicly displayed logo, branding, location, services, and staff bios from your Online Booking site are synced to your website daily. It is the only website platform with a direct integration for Jane customers, offering fully-hosted websites at a partnership price of $59/month. (Regular $79/month)",
      features: [
        "No setup fee!",
        "Create your site in just 1 minute",
        "Easy to maintain and make updates",
        "Real, human support (just like Jane!)",
        "Syncs daily with your Jane account",
      ],
      buttonText: "Generate Free Preview >",
      buttonColor: "teal",
    },
    {
      id: 3,
      name: "Documo",
      logo: (
        <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-sm">documo</span>
        </div>
      ),
      description: "Documo is an online platform that integrates with your Jane account to securely send electronic faxes. Learn more about Jane's fax integration",
      hasNewTag: true,
      buttonText: "Get Started >",
      buttonColor: "teal",
    },
    {
      id: 4,
      name: "Mailchimp",
      logo: (
        <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
          <div className="text-3xl">🐵</div>
        </div>
      ),
      description: "Mailchimp is an online email marketing service for managing contacts, sending emails, and tracking results of your teams email campaigns. Your patients in Jane will automatically be added to your Mailchimp list if they have opted in to marketing emails. And if a patient unsubscribes from a Mailchimp email, your Jane list will be automatically updated.",
      buttonText: "Get Started >",
      buttonColor: "teal",
    },
    {
      id: 5,
      name: "Physitrack",
      logo: (
        <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      ),
      description: "Physitrack is a platform for healthcare practitioners to design high-quality home exercise programs and track patient adherence. Jane's Physitrack Integration allows you to quickly add a Jane patient profile to your Physitrack account, and automatically sign in and begin prescribing exercises. Each program you assign to a patient will automatically be loaded into your patient's chart in Jane as a PDF.",
      buttonText: "Get Started >",
      buttonColor: "teal",
    },
    {
      id: 6,
      name: "Fullscript",
      logo: (
        <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-900 font-bold text-sm">Fullscript</span>
        </div>
      ),
      description: "Fullscript is a free online dispensary that helps keep your patients happy and your practice successful by providing you with the industry's largest catalog of professional-grade supplements. Prescribe through your personalized store and Fullscript will ship directly to your patients. Jane's Fullscript integration allows you to build recommendations as part of a chart which means it both documents the prescription in the patient's chart and gives your patient a super simple way to fulfil it.",
      buttonText: "Get Started >",
      buttonColor: "teal",
    },
    {
      id: 7,
      name: "Reserve with Google",
      logo: (
        <div className="w-16 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold">G</div>
            <span className="text-xs text-gray-600">Google</span>
          </div>
        </div>
      ),
      description: "Go from being found on Google, to booked in Jane. This integration between Jane and your Google Business Profile simplifies the process for clients to learn about your practice and seamlessly directs them to your Jane online booking page.",
      buttonText: "Manage",
      buttonColor: "teal",
    },
    {
      id: 8,
      name: "Calendar Subscriptions: iCal, Google Calendar, Outlook, & Mobile Devices",
      logo: (
        <div className="w-16 h-16 bg-red-50 border-2 border-red-300 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-red-600">JUL</div>
            <div className="text-xl font-bold text-red-600">17</div>
          </div>
        </div>
      ),
      description: "Staff can view their Jane schedule (appointments and shifts) in any calendar app that supports the iCal format.",
      buttonText: "0 Subscriptions >",
      buttonColor: "teal",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Integrations</h1>

      {/* Integration Cards */}
      <div className="space-y-6">
        {integrations.map((integration) => (
          <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">{integration.logo}</div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-xl font-semibold text-gray-900">{integration.name}</h2>
                  {integration.hasNewTag && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{integration.description}</p>
                {integration.features && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3 ml-4">
                    {integration.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                  {integration.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

