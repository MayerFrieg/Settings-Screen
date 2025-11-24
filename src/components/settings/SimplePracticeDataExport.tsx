"use client";

export default function SimplePracticeDataExport() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data export</h1>
          <p className="text-sm text-gray-900 mt-1">Export practice data</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Start export
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Data export
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-12">
          <div className="flex flex-col items-center justify-center">
            {/* Large circular graphic with cloud and arrow */}
            <div className="mb-8">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center">
                {/* Cloud icon with arrow inside */}
                <div className="relative">
                  {/* Cloud shape */}
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" />
                  </svg>
                  {/* Upward arrow inside cloud */}
                  <svg
                    className="w-12 h-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* No recent exports text */}
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 mb-2">No recent exports</p>
              <p className="text-sm text-gray-900">
                Files exported within the past week will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

