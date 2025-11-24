"use client";

import { useState } from "react";

type NotificationCategory = {
  id: string;
  title: string;
  notifications: {
    id: string;
    label: string;
    enabled: boolean;
    description?: string;
  }[];
};

export default function SimplePracticeNotificationPreferences() {
  const [categories, setCategories] = useState<NotificationCategory[]>([
    {
      id: "client-billing",
      title: "Client billing",
      notifications: [
        { id: "outstanding-balances", label: "Outstanding client balances", enabled: true },
        { id: "uninvoiced-amounts", label: "Uninvoiced amounts", enabled: true },
      ],
    },
    {
      id: "client-management",
      title: "Client management",
      notifications: [
        { id: "possible-couples", label: "Possible couple clients", enabled: true },
        { id: "possible-duplicates", label: "Possible duplicate clients or contacts", enabled: true },
        { id: "upcoming-birthdays", label: "Upcoming birthdays", enabled: true },
      ],
    },
    {
      id: "documentation",
      title: "Documentation",
      notifications: [
        { id: "document-requests-completed", label: "Document requests completed by clients", enabled: true },
        { id: "good-faith-estimates-expiring", label: "Good faith estimates expiring", enabled: true },
        { id: "missing-diagnosis-treatment", label: "Missing diagnosis and treatment plans", enabled: true },
        { id: "missing-mental-status", label: "Missing mental status exams", enabled: true },
        { id: "missing-progress-notes", label: "Missing progress notes", enabled: true },
        { id: "pending-document-requests", label: "Pending document requests for clients", enabled: true },
        { id: "unreviewed-diagnosis-treatment", label: "Unreviewed diagnosis and treatment plans", enabled: true },
      ],
    },
    {
      id: "insurance",
      title: "Insurance",
      notifications: [
        { id: "expiring-authorizations", label: "Clients with expiring insurance authorizations", enabled: true },
        { id: "insurance-payments-received", label: "Insurance payments received", enabled: true },
        { id: "unallocated-funds", label: "Insurance payments with unallocated funds", enabled: true },
      ],
    },
    {
      id: "messaging",
      title: "Messaging",
      notifications: [
        { id: "contact-form-inquiries", label: "Contact form inquiries submitted by prospective clients", enabled: true },
        { id: "unsubscribed-email", label: "Clients unsubscribed to email reminders", enabled: true },
        { id: "unsubscribed-text", label: "Clients unsubscribed to text reminders", enabled: true },
      ],
    },
    {
      id: "scheduling",
      title: "Scheduling",
      notifications: [
        { id: "existing-client-requests", label: "Existing clients submit appointment requests", enabled: true },
        { id: "prospective-client-requests", label: "Prospective clients submit appointment requests", enabled: true },
      ],
    },
    {
      id: "tasks",
      title: "Tasks",
      notifications: [{ id: "overdue-tasks", label: "Overdue tasks", enabled: true }],
    },
    {
      id: "emails",
      title: "Emails (INDIVIDUAL SETTINGS)",
      notifications: [
        {
          id: "daily-agenda",
          label: "Daily agenda",
          enabled: false,
          description: "An email summary sent each morning that includes upcoming appointments, appointment requests, reminders, and billing updates.",
        },
        {
          id: "evening-summary",
          label: "Evening summary",
          enabled: true,
          description: "An email summary sent each evening about the appointments and AutoPay amounts that have occurred in the day.",
        },
        {
          id: "secure-messages",
          label: "Secure messages",
          enabled: true,
          description: "An email sent in addition to the in app notification you receive for new secure messages.",
        },
      ],
    },
  ]);

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.map((cat) => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleNotification = (categoryId: string, notificationId: string) => {
    setCategories(
      categories.map((cat) => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            notifications: cat.notifications.map((notif) =>
              notif.id === notificationId ? { ...notif, enabled: !notif.enabled } : notif
            ),
          };
        }
        return cat;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Notification preferences</h1>
        <p className="text-sm text-gray-900 mt-1">Manage the notifications you receive</p>
      </div>

      {/* Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-gray-900">
          Note: Not all are listed—some are essential and can't be turned off.
        </p>
      </div>

      {/* Notifications Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-900 text-xs font-medium rounded">
            PRACTICE SETTINGS
          </span>
        </div>

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-semibold text-gray-900">{category.title}</h3>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedCategories.has(category.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedCategories.has(category.id) && (
                <div className="border-t border-gray-200 p-4 space-y-4">
                  {category.notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <label
                            htmlFor={notification.id}
                            className="relative inline-flex items-center cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id={notification.id}
                              checked={notification.enabled}
                              onChange={() => toggleNotification(category.id, notification.id)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{notification.label}</p>
                            {notification.description && (
                              <p className="text-xs text-gray-900 mt-1">{notification.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

