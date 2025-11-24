"use client";

import Link from "next/link";

export default function SimplePracticeDashboard() {
  const quickLinks = [
    { title: "Profile and security", href: "/simplepractice/profile", description: "Manage your profile and security settings" },
    { title: "Practice details", href: "/simplepractice/practice-details", description: "Update practice information and locations" },
    { title: "Team members", href: "/simplepractice/team-members", description: "Manage your team" },
    { title: "Services", href: "/simplepractice/services", description: "Configure services and pricing" },
    { title: "Online payments", href: "/simplepractice/online-payments", description: "Set up payment processing" },
    { title: "Email notifications", href: "/simplepractice/email", description: "Customize email templates" },
    { title: "Calendar", href: "/simplepractice/calendar", description: "Calendar settings and sync" },
    { title: "Client Portal", href: "/simplepractice/client-portal-permissions", description: "Manage client portal access" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome to SimplePractice Settings</h1>
        <p className="text-sm text-gray-900 mt-1">
          Manage your practice settings, billing, team, and client communications from one place.
        </p>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow group"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-gray-900 mt-2">{link.description}</p>
            <div className="flex items-center gap-2 mt-4 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Go to settings</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Sections */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Settings Overview</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">OPERATIONS</h3>
            <p className="text-sm text-gray-900">
              Manage your profile, practice details, team members, and business files.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">BILLING</h3>
            <p className="text-sm text-gray-900">
              Configure billing documents, insurance, payment processing, services, and products.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">CLIENT CARE</h3>
            <p className="text-sm text-gray-900">
              Set up scheduling, documentation, notifications, messaging, and client portal permissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

