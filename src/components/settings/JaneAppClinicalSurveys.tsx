"use client";

interface JaneAppClinicalSurveysProps {
  onNewSurvey?: () => void;
  onReturn?: () => void;
}

export default function JaneAppClinicalSurveys({ onNewSurvey, onReturn }: JaneAppClinicalSurveysProps) {
  const surveys = [
    {
      id: 1,
      name: "COVID-19 Screening",
      availablePerPatient: true,
      timing: "Before or after an in-person appointment",
      location: "GraceHealth",
    },
    {
      id: 2,
      name: "PHQ-9",
      availablePerPatient: true,
      timing: "Before or after an in-person appointment",
      location: "GraceHealth",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Clinical Surveys</h1>
        <div className="flex gap-3">
          <button
            onClick={onReturn}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
          >
            Return To Forms & Surveys
          </button>
          <button
            onClick={onNewSurvey}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            New Survey
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700">
          Clinical Surveys help you collect feedback throughout the course of care. They can also be scored to create Outcome Measure Surveys, with results calculated automatically. All responses are automatically saved to the patient's chart.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">Learn more</a>.
        </p>
      </div>

      {/* Filter */}
      <div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
          <option>Active</option>
          <option>Inactive</option>
          <option>All</option>
        </select>
      </div>

      {/* Survey List */}
      <div className="space-y-4">
        {surveys.map((survey) => (
          <div key={survey.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{survey.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Available per patient.
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {survey.timing}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {survey.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors">
                  View
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

