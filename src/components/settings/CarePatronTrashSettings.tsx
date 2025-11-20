"use client";

import CarePatronDocumentation from "./CarePatronDocumentation";

export default function CarePatronTrashSettings() {
  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="trash" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Trash</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Trash</h2>
      </div>

      {/* Empty State */}
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-12 text-center">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-teal-100 blur-3xl"></div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Simplified illustration representation */}
            <div className="relative">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-teal-200 bg-teal-50">
                <div className="flex flex-col items-center gap-4">
                  {/* Character representation */}
                  <div className="flex items-end gap-2">
                    <div className="flex flex-col items-center">
                      {/* Head */}
                      <div className="h-12 w-12 rounded-full bg-gray-300 border-2 border-gray-400"></div>
                      {/* Body */}
                      <div className="h-16 w-16 rounded-lg bg-teal-600 mt-1"></div>
                    </div>
                    {/* Paper */}
                    <div className="h-20 w-12 rounded bg-white border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-xs text-gray-400">levs</span>
                    </div>
                  </div>
                  {/* Shredder */}
                  <div className="h-8 w-24 rounded bg-gray-300 border-2 border-gray-400 flex items-center justify-center">
                    <div className="h-4 w-20 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <p className="text-base font-medium text-gray-900">No deleted item found</p>
        </div>
      </div>
    </div>
  );
}

