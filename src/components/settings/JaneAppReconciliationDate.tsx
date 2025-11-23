"use client";

import { useState } from "react";

export default function JaneAppReconciliationDate() {
  const [reconciliationDate, setReconciliationDate] = useState("");

  const handleSave = () => {
    // In a real app, this would save the reconciliation date
    console.log("Saving reconciliation date:", reconciliationDate);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Reconciliation Date</h1>

      {/* Report Invoice Changes Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Report Invoice Changes Prior To...</h2>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-4">
              You can enable Jane's invoice reversals system by setting a date here. Leave this field blank to disable invoice reversals.
            </p>
          </div>
          <div className="w-64">
            <input
              type="date"
              value={reconciliationDate}
              onChange={(e) => setReconciliationDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Set a date..."
            />
          </div>
        </div>

        {/* Detailed Instructions */}
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            Jane will treat any changes to invoices created prior to this date as changes that should be tracked in your current billing period.
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              If you have a regular payroll period, we recommend setting this date to the end of the last payroll period when you have finished your payroll work.
            </li>
            <li>
              If your accountant or bookkeeper pulls reports from Jane, you could set this date to the day they last pulled their reports.
            </li>
          </ul>

          <p>
            This instructs Jane to re-invoice any changes to appointments or products (such as a response from an insurer) <span className="font-semibold">on the date you make the change</span>, so it shows up in the current reporting period.
          </p>

          <p>
            If you are making changes to invoices where the purchase happened after the date set here, you are operating in a grace period where the changes will be automatically back dated to the date of the purchase.
          </p>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}

