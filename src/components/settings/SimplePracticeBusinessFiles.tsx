"use client";

export default function SimplePracticeBusinessFiles() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business files</h1>
          <p className="text-sm text-gray-900 mt-1">A secure, HIPAA-compliant place to store and share files</p>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
          Watch a quick video about Business files
        </a>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-12">
          {/* Illustrative Graphic */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-80 h-80 mb-8">
              {/* Main folder icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-40 h-40 bg-blue-600 rounded-lg shadow-xl flex items-center justify-center relative">
                  {/* Checkmark/Leaf symbol */}
                  <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Document icons around the folder with dashed lines */}
              {/* Top document */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-24 bg-white border-2 border-gray-300 rounded shadow-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                {/* Dashed line to folder */}
                <svg
                  className="absolute top-full left-1/2 transform -translate-x-1/2"
                  width="2"
                  height="60"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="60"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Left document */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <div className="w-20 h-24 bg-white border-2 border-gray-300 rounded shadow-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                {/* Dashed line to folder */}
                <svg
                  className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2"
                  width="60"
                  height="2"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {/* Right document */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <div className="w-20 h-24 bg-white border-2 border-gray-300 rounded shadow-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                {/* Dashed line to folder */}
                <svg
                  className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2"
                  width="60"
                  height="2"
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Safely store and share your business files</h2>
              <p className="text-sm text-gray-900 leading-relaxed">
                Upload files that help you run your business, like rental agreements, professional licenses, or
                employment contracts. Files are secure and HIPAA compliant.
              </p>
            </div>
          </div>

          {/* Upload Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              Upload documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

