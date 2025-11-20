"use client";

import CarePatronDocumentation from "./CarePatronDocumentation";

export default function CarePatronAllDocumentation() {
  const sections: Array<{ id: "profile" | "workspace" | "billing" | "insurance" | "scheduling" | "workflows" | "trash"; title: string }> = [
    { id: "profile", title: "My Profile" },
    { id: "workspace", title: "Workspace Settings" },
    { id: "billing", title: "Billing" },
    { id: "insurance", title: "Insurance" },
    { id: "scheduling", title: "Scheduling" },
    { id: "workflows", title: "Workflows" },
    { id: "trash", title: "Trash" },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Documentation</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Documentation</h2>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id}>
            <CarePatronDocumentation section={section.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

