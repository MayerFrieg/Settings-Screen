"use client";

interface JaneAppScheduleImportProps {
  onBegin?: () => void;
  onLearnMore?: () => void;
}

export default function JaneAppScheduleImport({ onBegin, onLearnMore }: JaneAppScheduleImportProps) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Imports</h1>

      {/* Main Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-12">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          {/* Clock Icon */}
          <div className="mb-6">
            <svg
              className="w-24 h-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Schedule an Import
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Looking to import some data to Jane? You're in the right place. Here you can let us know what sort of data you will be importing and when you would like it to happen.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLearnMore}
              className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 font-medium text-sm transition-colors"
            >
              Learn More...
            </button>
            <button
              onClick={onBegin}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
            >
              Begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

