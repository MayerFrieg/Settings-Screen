"use client";

import { useState } from "react";

interface JaneAppAddReminderProps {
  onCancel?: () => void;
}

export default function JaneAppAddReminder({ onCancel }: JaneAppAddReminderProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<"email" | "sms" | "phone">("email");
  const [sendReminder, setSendReminder] = useState("2 days");
  const [subscribedByDefault, setSubscribedByDefault] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [patientSelectable, setPatientSelectable] = useState(true);

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900">New Reminder</h1>

      {/* Form Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <form className="space-y-8">
          {/* Delivery Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Delivery method <span className="text-red-500">- Required</span>
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="email"
                  checked={deliveryMethod === "email"}
                  onChange={(e) => setDeliveryMethod(e.target.value as "email" | "sms" | "phone")}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">Email</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="sms"
                  checked={deliveryMethod === "sms"}
                  onChange={(e) => setDeliveryMethod(e.target.value as "email" | "sms" | "phone")}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">Text Message (SMS)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="phone"
                  checked={deliveryMethod === "phone"}
                  onChange={(e) => setDeliveryMethod(e.target.value as "email" | "sms" | "phone")}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700">Phone (Not Automated)</span>
              </label>
            </div>
          </div>

          {/* Send Reminder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Send Reminder <span className="text-red-500">- Required</span>
            </label>
            <select
              value={sendReminder}
              onChange={(e) => setSendReminder(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
            >
              <option>1 hour</option>
              <option>2 hours</option>
              <option>4 hours</option>
              <option>6 hours</option>
              <option>12 hours</option>
              <option>1 day</option>
              <option>2 days</option>
              <option>3 days</option>
              <option>1 week</option>
              <option>2 weeks</option>
            </select>
          </div>

          {/* Subscription Options */}
          <div className="space-y-6">
            {/* Subscribed by Default */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={subscribedByDefault}
                  onChange={(e) => setSubscribedByDefault(e.target.checked)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
                />
                <div>
                  <span className="text-gray-700 font-medium block">Subscribed by Default</span>
                  <p className="text-gray-600 text-sm mt-1">
                    New patients will be automatically subscribed to this reminder.
                  </p>
                </div>
              </label>
            </div>

            {/* Enabled */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
                />
                <div>
                  <span className="text-gray-700 font-medium block">Enabled</span>
                  <p className="text-gray-600 text-sm mt-1">
                    Enable deliveries for this Reminder. Uncheck to temporarily stop deliveries.
                  </p>
                </div>
              </label>
            </div>

            {/* Patient selectable */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={patientSelectable}
                  onChange={(e) => setPatientSelectable(e.target.checked)}
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
                />
                <div>
                  <span className="text-gray-700 font-medium block">Patient selectable</span>
                  <p className="text-gray-600 text-sm mt-1">
                    Allow patients to opt in or out of this reminder. If unchecked, only staff can change this reminder for the patient.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

