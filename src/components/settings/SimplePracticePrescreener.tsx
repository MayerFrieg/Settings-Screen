"use client";

import { useState } from "react";

type Question = {
  id: string;
  label: string;
  show: boolean;
  required: boolean;
  category: string;
  note?: string;
};

export default function SimplePracticePrescreener() {
  const [contactFormEnabled, setContactFormEnabled] = useState(false);
  const [appointmentRequestsEnabled, setAppointmentRequestsEnabled] = useState(true);

  const [questions, setQuestions] = useState<Question[]>([
    // REASON FOR CARE
    {
      id: "1",
      label: "What is the reason for seeking care? (Booking widget only)",
      show: true,
      required: false,
      category: "REASON FOR CARE",
    },
    {
      id: "2",
      label: "What kind of care is being sought? (Booking widget only)",
      show: true,
      required: false,
      category: "REASON FOR CARE",
    },
    {
      id: "3",
      label: "What mental health concerns or treatment have occurred in the past? (Booking widget only)",
      show: true,
      required: false,
      category: "REASON FOR CARE",
    },
    // ADMINISTRATIVE
    {
      id: "4",
      label: "Inquiry reason",
      show: false,
      required: false,
      category: "ADMINISTRATIVE",
    },
    {
      id: "5",
      label: "Referral source",
      show: false,
      required: false,
      category: "ADMINISTRATIVE",
    },
    {
      id: "6",
      label: "Driver's license upload",
      show: true,
      required: false,
      category: "ADMINISTRATIVE",
    },
    // BILLING & PAYMENT
    {
      id: "7",
      label: "Payment method (Booking widget only)",
      show: true,
      required: false,
      category: "BILLING & PAYMENT",
    },
    {
      id: "8",
      label: "Insurance details (Booking widget only)",
      show: true,
      required: false,
      category: "BILLING & PAYMENT",
    },
    {
      id: "9",
      label: "Insurance card upload (Booking widget only)",
      show: true,
      required: false,
      category: "BILLING & PAYMENT",
    },
    // CLIENT PREFERENCES
    {
      id: "10",
      label: "Preferred appointment times",
      show: false,
      required: false,
      category: "CLIENT PREFERENCES",
    },
    {
      id: "11",
      label: "Preferred clinician (Contact form only)",
      show: false,
      required: false,
      category: "CLIENT PREFERENCES",
    },
    {
      id: "12",
      label: "Preferred modality",
      show: false,
      required: false,
      category: "CLIENT PREFERENCES",
    },
    {
      id: "13",
      label: "Is there anything that the practitioner needs to know? (Contact form only)",
      show: true,
      required: false,
      category: "CLIENT PREFERENCES",
    },
    // DEMOGRAPHICS
    {
      id: "14",
      label: "Name you go by",
      show: true,
      required: false,
      category: "DEMOGRAPHICS",
    },
    {
      id: "15",
      label: "Date of birth",
      show: true,
      required: true,
      category: "DEMOGRAPHICS",
    },
    {
      id: "16",
      label: "Gender",
      show: false,
      required: false,
      category: "DEMOGRAPHICS",
    },
    {
      id: "17",
      label: "Sex at birth",
      show: false,
      required: false,
      category: "DEMOGRAPHICS",
    },
    {
      id: "18",
      label: "State (Contact form only)",
      show: true,
      required: true,
      category: "DEMOGRAPHICS",
    },
  ]);

  const toggleQuestion = (id: string, field: "show" | "required") => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [field]: !q[field] } : q))
    );
  };

  const categories = ["REASON FOR CARE", "ADMINISTRATIVE", "BILLING & PAYMENT", "CLIENT PREFERENCES", "DEMOGRAPHICS"];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prescreener</h1>
          <p className="text-sm text-gray-900 mt-1">
            Collect information to determine if a prospective client is a good fit for your practice.{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
              Learn More
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 border border-gray-300">
            Preview
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Publish
          </button>
        </div>
      </div>

      {/* PRACTICE SETTINGS Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Add prescreener to:</h2>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
              PRACTICE SETTINGS
            </a>
          </div>

          <div className="space-y-4">
            {/* Contact form */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 flex-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={contactFormEnabled}
                    onChange={(e) => setContactFormEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Contact form</p>
                </div>
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
                <button className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded border border-blue-300">
                  Copy link
                </button>
              </div>
            </div>

            {/* Appointment requests from new clients */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 flex-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appointmentRequestsEnabled}
                    onChange={(e) => setAppointmentRequestsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Appointment requests from new clients</p>
                </div>
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
                <button className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded border border-blue-300">
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prescreener questions */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Prescreener questions</h2>

          <div className="space-y-8">
            {categories.map((category) => {
              const categoryQuestions = questions.filter((q) => q.category === category);
              if (categoryQuestions.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">{category}</h3>
                  <div className="space-y-3">
                    {categoryQuestions.map((question) => (
                      <div
                        key={question.id}
                        className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{question.label}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={question.show}
                                onChange={() => toggleQuestion(question.id, "show")}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-xs text-gray-900">Show</span>
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={question.required}
                                onChange={() => toggleQuestion(question.id, "required")}
                                disabled={!question.show}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                              />
                              <span className="text-xs text-gray-900">Required</span>
                            </label>
                          </div>
                          <button className="text-gray-400 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline inline-block">
                      + Add new
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

