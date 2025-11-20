"use client";

import Link from "next/link";

const settingsCategories = [
  {
    id: "profile",
    title: "My Profile",
    description: "Your personal details",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    href: "/carepatron/profile",
  },
  {
    id: "workspace",
    title: "Workspace Settings",
    description: "Subscription and workspace info",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    href: "/carepatron/workspace",
  },
  {
    id: "billing",
    title: "Billing",
    description: "Billing info, invoices, and Stripe",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/carepatron/billing",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Insurance payers and claims",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: "/carepatron/insurance",
  },
  {
    id: "scheduling",
    title: "Scheduling",
    description: "Services details and bookings",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    href: "/carepatron/scheduling",
  },
  {
    id: "workflows",
    title: "Workflows",
    description: "Automation & Reminders",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    href: "/carepatron/workflows",
  },
  {
    id: "trash",
    title: "Trash",
    description: "Restore deleted items",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    href: "/carepatron/trash",
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Complete guides and best practices for all settings",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: "/carepatron/documentation",
  },
];

export default function CarePatronMainSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      {/* Settings Categories List */}
      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {settingsCategories.slice(0, 6).map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="flex items-start gap-4 p-6 hover:bg-gray-50 transition group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:text-teal-600 transition">
              {category.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-600 transition">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{category.description}</p>
            </div>
            <svg
              className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Separator and Trash */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Link
          href={settingsCategories[6].href}
          className="flex items-start gap-4 p-6 hover:bg-gray-50 transition group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:text-teal-600 transition">
            {settingsCategories[6].icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-600 transition">
              {settingsCategories[6].title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{settingsCategories[6].description}</p>
          </div>
          <svg
            className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Documentation - Different Color Scheme */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 shadow-sm">
        <Link
          href={settingsCategories[7].href}
          className="flex items-start gap-4 p-6 hover:from-blue-100 hover:to-indigo-100 transition group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 group-hover:text-blue-700 transition">
            {settingsCategories[7].icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-blue-900 group-hover:text-blue-950 transition">
              {settingsCategories[7].title}
            </h3>
            <p className="mt-1 text-sm text-blue-700">{settingsCategories[7].description}</p>
          </div>
          <svg
            className="h-5 w-5 text-blue-500 group-hover:text-blue-700 transition flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

