"use client";

import { useState } from "react";

export default function JaneAppScheduleSettings() {
  const [openingTime, setOpeningTime] = useState("8");
  const [closingTime, setClosingTime] = useState("18");
  const [scheduleGrid, setScheduleGrid] = useState("15 minutes");
  const [listStaffBy, setListStaffBy] = useState("Last Name");
  const [allowDoubleBooking, setAllowDoubleBooking] = useState(true);
  const [preventBookingOutsideShifts, setPreventBookingOutsideShifts] = useState(false);

  // Generate time options
  const timeOptions = Array.from({ length: 24 }, (_, i) => i.toString());

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Schedule Settings</h1>

      {/* Settings Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <form className="space-y-8">
          {/* Opening Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Opening Time <span className="text-red-500">- Required</span>
            </label>
            <p className="text-gray-600 text-sm mb-3">
              Select the earliest time that you would like to be visible in the admin schedule.
            </p>
            <select
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
            >
              {timeOptions.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>

          {/* Closing Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Closing Time <span className="text-red-500">- Required</span>
            </label>
            <p className="text-gray-600 text-sm mb-3">
              Select the latest time that you would like to be visible in the admin schedule.
            </p>
            <select
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
            >
              {timeOptions.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>

          {/* Schedule Grid */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Schedule Grid <span className="text-red-500">- Required</span>
            </label>
            <p className="text-gray-600 text-sm mb-3">
              Appointments in the admin schedule will snap to the nearest grid line.
            </p>
            <select
              value={scheduleGrid}
              onChange={(e) => setScheduleGrid(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
            >
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>60 minutes</option>
            </select>
          </div>

          {/* List Staff By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              List Staff By <span className="text-red-500">- Required</span>
            </label>
            <p className="text-gray-600 text-sm mb-3">
              Select what order you would like your staff listed in the admin schedule and staff list.
            </p>
            <select
              value={listStaffBy}
              onChange={(e) => setListStaffBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
            >
              <option>First Name</option>
              <option>Last Name</option>
              <option>Alphabetical</option>
              <option>Custom Order</option>
            </select>
          </div>

          {/* Allow Double Booking */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowDoubleBooking}
                onChange={(e) => setAllowDoubleBooking(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
              />
              <div>
                <span className="text-gray-700 font-medium block">Allow Double Booking</span>
                <p className="text-gray-600 text-sm mt-1">
                  Allow staff to double book in the admin schedule. This does not allow patients to double book.
                </p>
              </div>
            </label>
          </div>

          {/* Prevent staff booking outside shifts */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={preventBookingOutsideShifts}
                onChange={(e) => setPreventBookingOutsideShifts(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
              />
              <div>
                <span className="text-gray-700 font-medium block">Prevent staff booking outside shifts</span>
                <p className="text-gray-600 text-sm mt-1">
                  Prevent staff from booking appointments outside of scheduled shifts.
                </p>
              </div>
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
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

