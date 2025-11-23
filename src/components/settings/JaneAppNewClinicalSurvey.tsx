"use client";

import { useState } from "react";

interface JaneAppNewClinicalSurveyProps {
  onReturn?: () => void;
}

export default function JaneAppNewClinicalSurvey({ onReturn }: JaneAppNewClinicalSurveyProps) {
  const [surveyName, setSurveyName] = useState("");
  const [setup, setSetup] = useState<"individual" | "all-patients">("individual");
  const [scheduling, setScheduling] = useState<"before-after" | "intervals" | "dont-schedule">("before-after");
  const [bestTime, setBestTime] = useState("24 hours before appointment");
  const [appointmentType, setAppointmentType] = useState("In-person appointments");
  const [title, setTitle] = useState("");
  const [introductionMessage, setIntroductionMessage] = useState("");
  const [messageAfterCompletion, setMessageAfterCompletion] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">New Clinical Survey</h1>
        <button
          onClick={onReturn}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Return To Surveys
        </button>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-8">
        {/* General Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Survey Name <span className="text-red-500">- Required</span>
          </label>
          <input
            type="text"
            value={surveyName}
            onChange={(e) => setSurveyName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter survey name"
          />
        </div>

        {/* Setup */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Setup <span className="text-red-500">- Required</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="setup"
                value="individual"
                checked={setup === "individual"}
                onChange={(e) => setSetup(e.target.value as "individual" | "all-patients")}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 mt-1"
              />
              <div>
                <span className="text-gray-700 font-medium block">Set up individually - The survey will be available to be sent from the patient profile.</span>
              </div>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="setup"
                value="all-patients"
                checked={setup === "all-patients"}
                onChange={(e) => setSetup(e.target.value as "individual" | "all-patients")}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 mt-1"
              />
              <div>
                <span className="text-gray-700 font-medium block">Set up for all patients - The survey will be sent to all patients and it will also be available on the patient profile for personalized care.</span>
              </div>
            </label>
          </div>
        </div>

        {/* Scheduling */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            When should this survey be sent?
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="scheduling"
                value="before-after"
                checked={scheduling === "before-after"}
                onChange={(e) => setScheduling(e.target.value as any)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-gray-700">Before or after an appointment</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="scheduling"
                value="intervals"
                checked={scheduling === "intervals"}
                onChange={(e) => setScheduling(e.target.value as any)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-gray-700">On regular intervals</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="scheduling"
                value="dont-schedule"
                checked={scheduling === "dont-schedule"}
                onChange={(e) => setScheduling(e.target.value as any)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-gray-700">Don't schedule survey</span>
            </label>
          </div>

          {/* Sending Options (shown when "Before or after an appointment" is selected) */}
          {scheduling === "before-after" && (
            <div className="mt-6 ml-7 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What would be the best time?
                </label>
                <select
                  value={bestTime}
                  onChange={(e) => setBestTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                >
                  <option>24 hours before appointment</option>
                  <option>12 hours before appointment</option>
                  <option>6 hours before appointment</option>
                  <option>2 hours before appointment</option>
                  <option>Immediately after appointment</option>
                  <option>1 hour after appointment</option>
                  <option>24 hours after appointment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of appointments will this survey be sent to?
                </label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
                >
                  <option>In-person appointments</option>
                  <option>Virtual appointments</option>
                  <option>All appointments</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Communication */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Communication</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title / Email Subject <span className="text-red-500">- Required</span>
              </label>
              <p className="text-gray-500 text-xs mb-2">
                This is the title of the survey and will appear in the email subject.
              </p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter survey title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Introduction Message <span className="text-red-500">- Required</span>
              </label>
              <p className="text-gray-500 text-xs mb-2">
                Help the patient understand what the purpose of the survey is for. This will appear in the survey and in the email.
              </p>
              <textarea
                value={introductionMessage}
                onChange={(e) => setIntroductionMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter introduction message"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message After Completion <span className="text-red-500">- Required</span>
              </label>
              <p className="text-gray-500 text-xs mb-2">
                This message will appear after the patient has finished the survey.
              </p>
              <textarea
                value={messageAfterCompletion}
                onChange={(e) => setMessageAfterCompletion(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter completion message"
              />
            </div>
          </div>
        </div>

        {/* Questionnaire */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Questionnaire</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg mb-6">This clinical survey is currently empty! Build it out by adding items.</p>
            <div className="flex gap-3 justify-center">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Template Library
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onReturn}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
        >
          Cancel
        </button>
        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save Survey
        </button>
      </div>
    </div>
  );
}

