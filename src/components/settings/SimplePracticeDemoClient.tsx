"use client";

import { useState } from "react";

export default function SimplePracticeDemoClient() {
  const [isDemoClientOn, setIsDemoClientOn] = useState(true);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Demo client</h1>
          <p className="text-sm text-gray-900 mt-1">Turn Jamie Appleseed on and off</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setIsDemoClientOn(!isDemoClientOn)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            {isDemoClientOn ? "Turn demo client off" : "Turn demo client on"}
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Demo client
          </a>
        </div>
      </div>

      {/* Information Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="bg-white rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Try out features in SimplePractice using the demo client, Jamie Appleseed
          </p>
          <p className="text-sm text-gray-900">
            You can turn the demo client on or off at anytime.
          </p>
        </div>
      </div>

      {/* Status Message */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <p className="text-sm text-gray-900">
          Demo client is {isDemoClientOn ? "on" : "off"} for your practice
        </p>
      </div>
    </div>
  );
}

