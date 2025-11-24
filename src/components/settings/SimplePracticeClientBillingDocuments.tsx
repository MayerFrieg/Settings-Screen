"use client";

import { useState } from "react";

export default function SimplePracticeClientBillingDocuments() {
  const [serviceDescription, setServiceDescription] = useState("professional-services");
  const [invoiceCreation, setInvoiceCreation] = useState("daily");
  const [pastDueDays, setPastDueDays] = useState("30");
  const [emailPastDue, setEmailPastDue] = useState(false);
  const [includeInvoiceLogo, setIncludeInvoiceLogo] = useState(true);
  const [invoiceFooter, setInvoiceFooter] = useState("");

  const [statementDay, setStatementDay] = useState("10");
  const [includeStatementLogo, setIncludeStatementLogo] = useState(false);
  const [statementFooter, setStatementFooter] = useState("");

  const [superbillDay, setSuperbillDay] = useState("10");
  const [includeSuperbillLogo, setIncludeSuperbillLogo] = useState(false);
  const [includeSignatureLine, setIncludeSignatureLine] = useState(false);
  const [includeDiagnosisDescription, setIncludeDiagnosisDescription] = useState(true);
  const [superbillFooter, setSuperbillFooter] = useState("");

  const [deliveryDelay, setDeliveryDelay] = useState("15");
  const [createStatementsForNewClients, setCreateStatementsForNewClients] = useState(false);
  const [createSuperbillsForNewClients, setCreateSuperbillsForNewClients] = useState(false);
  const [defaultNotificationMethod, setDefaultNotificationMethod] = useState("none");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Client billing documents</h1>
          <p className="text-sm text-gray-900 mt-1">Automate invoices, statements, superbills</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
            Watch a quick video about Client billing documents
          </a>
        </div>
      </div>

      {/* Invoices Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Invoices</h2>

          <div className="space-y-6">
            {/* Service description */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Choose the default text that will be used for line items on your invoices.
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="serviceDescription"
                    value="professional-services"
                    checked={serviceDescription === "professional-services"}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Use Professional Services</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="serviceDescription"
                    value="appointment-service"
                    checked={serviceDescription === "appointment-service"}
                    onChange={(e) => setServiceDescription(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Use Appointment Service and Description</span>
                </label>
              </div>
            </div>

            {/* Automatic invoice creation */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Invoices can be created manually or automatically. When invoices are created, you can choose to send
                them to clients.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Learn more
                </a>
                .
              </p>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="invoiceCreation"
                    value="daily"
                    checked={invoiceCreation === "daily"}
                    onChange={(e) => setInvoiceCreation(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <span className="text-sm text-gray-900">
                    Daily: Automatically create invoices at the end of each day. (Recommended)
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="invoiceCreation"
                    value="monthly"
                    checked={invoiceCreation === "monthly"}
                    onChange={(e) => setInvoiceCreation(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <span className="text-sm text-gray-900">
                    Monthly: Automatically create invoices at the end of each month.
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="invoiceCreation"
                    value="manually"
                    checked={invoiceCreation === "manually"}
                    onChange={(e) => setInvoiceCreation(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-0.5"
                  />
                  <span className="text-sm text-gray-900">
                    Manually: Do not automate invoices. (Only recommended for practices with complex billing workflows).
                  </span>
                </label>
              </div>
            </div>

            {/* Past due invoices */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-sm text-gray-900">Invoices will be marked as past due</p>
                <button className="text-gray-400 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={pastDueDays}
                  onChange={(e) => setPastDueDays(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({ length: 90 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day.toString()}>
                      {day}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-900">days after the issue date.</span>
              </div>
              <label className="flex items-start gap-3 mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailPastDue}
                  onChange={(e) => setEmailPastDue(e.target.checked)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 mt-0.5"
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900">
                    Email clients when an invoice is past due. Only for 'Client Portal' and 'Email' delivery methods.
                  </span>
                  <button className="text-gray-400 hover:text-gray-900">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </label>
            </div>

            {/* Invoice format */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Invoice format</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInvoiceLogo}
                  onChange={(e) => setIncludeInvoiceLogo(e.target.checked)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Include practice logo</span>
              </label>
            </div>

            {/* Footer information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Footer information</h3>
              <textarea
                value={invoiceFooter}
                onChange={(e) => setInvoiceFooter(e.target.value)}
                placeholder="Information that will show in the footer of your billing documents goes here. The character limit is 120 characters."
                maxLength={120}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">{invoiceFooter.length}/120 characters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statements Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Statements</h2>

          <div className="space-y-6">
            {/* Automatic statement generation */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Choose which date to generate the previous month's statement.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">Generate monthly Statements on day</span>
                <select
                  value={statementDay}
                  onChange={(e) => setStatementDay(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day.toString()}>
                      {day}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-900">of the following month.</span>
              </div>
            </div>

            {/* Statement format */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Statement format</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeStatementLogo}
                  onChange={(e) => setIncludeStatementLogo(e.target.checked)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Include practice logo</span>
              </label>
            </div>

            {/* Footer information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Footer information</h3>
              <textarea
                value={statementFooter}
                onChange={(e) => setStatementFooter(e.target.value)}
                placeholder="Information that will show in the footer of your billing documents goes here. The character limit is 120 characters."
                maxLength={120}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">{statementFooter.length}/120 characters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Superbills Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Superbills</h2>

          <div className="space-y-6">
            {/* Automatic superbill generation */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Choose on which day of the following month superbills are generated. This gives you time to close out
                the accounting for a month.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">Generate monthly Superbills on day</span>
                <select
                  value={superbillDay}
                  onChange={(e) => setSuperbillDay(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day.toString()}>
                      {day}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-900">of the following month.</span>
              </div>
            </div>

            {/* Superbill format */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Superbill format</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSuperbillLogo}
                    onChange={(e) => setIncludeSuperbillLogo(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Include practice logo</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSignatureLine}
                    onChange={(e) => setIncludeSignatureLine(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Include signature line</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDiagnosisDescription}
                    onChange={(e) => setIncludeDiagnosisDescription(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Include diagnosis description</span>
                </label>
              </div>
            </div>

            {/* Footer information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Footer information</h3>
              <textarea
                value={superbillFooter}
                onChange={(e) => setSuperbillFooter(e.target.value)}
                placeholder="Information that will show in the footer of your billing documents goes here. The character limit is 120 characters."
                maxLength={120}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">{superbillFooter.length}/120 characters</p>
            </div>
          </div>
        </div>
      </div>

      {/* General billing automations */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">General billing automations</h2>

          <div className="space-y-6">
            {/* Billing document delivery delay */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                When billing documents are created, including invoices, statements and superbills, you can choose a
                delay for notifications/emails that are being sent out. This way you can edit/review a document before
                a client gets a notification. You can control which notifications are being sent for each client
                individually.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">If enabled for a client, send emails for new billing documents</span>
                <select
                  value={deliveryDelay}
                  onChange={(e) => setDeliveryDelay(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">Immediately</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                  <option value="240">4 hours</option>
                </select>
                <span className="text-sm text-gray-900">after the document has been created.</span>
              </div>
            </div>

            {/* Billing documents for new clients */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                These are the default settings for every new client you create. You can change these settings after the
                client is created.
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={createStatementsForNewClients}
                    onChange={(e) => setCreateStatementsForNewClients(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Create monthly statements for new clients</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={createSuperbillsForNewClients}
                    onChange={(e) => setCreateSuperbillsForNewClients(e.target.checked)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">Create monthly superbills for new clients</span>
                </label>
              </div>
            </div>

            {/* Default notification method */}
            <div>
              <p className="text-sm text-gray-900 mb-3">
                Automate the process of notifying new clients when billing documents are available.
              </p>
              <select
                value={defaultNotificationMethod}
                onChange={(e) => setDefaultNotificationMethod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">None</option>
                <option value="email">Email</option>
                <option value="client-portal">Client Portal</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

