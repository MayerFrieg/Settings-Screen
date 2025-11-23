"use client";

interface JaneAppFormsSurveysProps {
  onViewForms?: () => void;
  onViewSurveys?: () => void;
  onNewSurvey?: () => void;
}

export default function JaneAppFormsSurveys({ onViewForms, onViewSurveys, onNewSurvey }: JaneAppFormsSurveysProps) {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Forms & Surveys</h1>

      {/* Intake Forms Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intake Forms</h2>
            <p className="text-gray-700 mb-6 max-w-2xl">
              Intake forms are used to collect patient information, insurance information, and consent before an appointment. Examples include Health History Forms, Patient Profile Forms, and Staff Specific forms.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-64 h-48 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Profile Information - Step 1 of 3</p>
                    <div className="space-y-2 text-xs text-left">
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-6 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onViewForms}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
          >
            View Forms
          </button>
        </div>
      </div>

      {/* Clinical Surveys Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Clinical Surveys</h2>
            <p className="text-gray-700 mb-6 max-w-2xl">
              Clinical surveys can be set up to automatically collect information for continued care. Add scores to create Outcome Measures surveys. Examples include Covid-19 screenings, PHQ-9, and daily subjective surveys.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-64 h-48 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
                    <p className="text-xs font-semibold text-gray-700 mb-3">How are you doing?</p>
                    <div className="space-y-3 text-xs text-left">
                      <div>
                        <p className="text-gray-700 mb-1">How are you feeling?</p>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                          <span className="text-gray-600">better</span>
                          <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                          <span className="text-gray-600">worse</span>
                          <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                          <span className="text-gray-600">same</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1">If there is pain, rate your pain from 1 to 10</p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-teal-500 rounded-full w-1/3"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0</span>
                          <span>10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onViewSurveys}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              View Surveys
            </button>
            <button
              onClick={onNewSurvey}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors"
            >
              New Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

