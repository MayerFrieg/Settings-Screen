"use client";

import { useState } from "react";

export default function ColibInvoicesSettings() {
  const [paymentTerms, setPaymentTerms] = useState("");
  const [useRandomReferences, setUseRandomReferences] = useState(false);
  const [requirePaymentMethod, setRequirePaymentMethod] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState("");
  const [enableCustomizationPerPractitioner, setEnableCustomizationPerPractitioner] = useState(false);
  const [invoiceFooterText, setInvoiceFooterText] = useState("");
  const [autoReminder, setAutoReminder] = useState(false);
  const [autoSendInvoice, setAutoSendInvoice] = useState(true);
  const [autoChargeClient, setAutoChargeClient] = useState(false);
  const [autoSendReceipt, setAutoSendReceipt] = useState(true);
  const [autoChargeNoShows, setAutoChargeNoShows] = useState(false);
  const [feeModifications, setFeeModifications] = useState<any[]>([]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
      </div>

      {/* General Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">General</h3>
        
        <div className="space-y-6">
          {/* Payment terms (days) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment terms (days)
            </label>
            <div className="relative">
              <input
                type="number"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter number of days"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Enter the default number of days your clients have to pay their invoice. This parameter is optional and can be edited for each invoice.
            </p>
          </div>

          {/* Taxes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Taxes</label>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Select options ▾
            </button>
            <p className="mt-2 text-sm text-gray-600">
              Select the taxes to be included by default for each invoice. Taxes can be edited for each invoice. Please contact us if you need a different type of tax.
            </p>
          </div>

          {/* Use random invoice references */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Use random invoice references
              </label>
              <p className="text-sm text-gray-600">
                Select this option if you want your invoice references to be generated randomly. Otherwise, the reference number of your invoices will be generated with the following pattern: YYYY-n, where YYYY is the current year and n is the number of invoices created since the beginning of the year.
              </p>
            </div>
            <button
              onClick={() => setUseRandomReferences(!useRandomReferences)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                useRandomReferences ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useRandomReferences ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Require a payment method information */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Require a payment method information when selecting the "Paid" status for an invoice
              </label>
              <p className="text-sm text-gray-600">
                This is useful to ensure you will always have a payment method specified, for your accounting and payment reconciliation.
              </p>
            </div>
            <button
              onClick={() => setRequirePaymentMethod(!requirePaymentMethod)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                requirePaymentMethod ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  requirePaymentMethod ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Default message added to the invoice email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default message added to the invoice email
            </label>
            <textarea
              value={defaultMessage}
              onChange={(e) => setDefaultMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[100px] resize-y"
              placeholder="Enter default message..."
            />
          </div>

          {/* Enable invoice customization per practitioner */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable invoice customization per practitioner
              </label>
            </div>
            <button
              onClick={() => setEnableCustomizationPerPractitioner(!enableCustomizationPerPractitioner)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                enableCustomizationPerPractitioner ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enableCustomizationPerPractitioner ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-gray-600">
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Click here
            </a>{" "}
            for more information.
          </p>
        </div>
      </section>

      {/* Invoice Footer Text Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            This text will appear on the footer of your invoices. This text is optional and can be replaced for each invoice.
          </label>
          <textarea
            value={invoiceFooterText}
            onChange={(e) => setInvoiceFooterText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[150px] resize-y"
            placeholder="Enter footer text..."
          />
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>

      {/* Automation Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Automation</h3>
        
        <div className="space-y-6">
          {/* Automatically send a reminder */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically send a reminder if an invoice sent to a client has not been paid
              </label>
              <p className="text-sm text-gray-600">
                Select this option if you want to automatically send an email to clients who have not paid an invoice after a certain number of days. You will be able to determine the number of days and write the message you want to send if you select this option.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Click here
                </a>{" "}
                for more information.
              </p>
            </div>
            <button
              onClick={() => setAutoReminder(!autoReminder)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                autoReminder ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoReminder ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Automatically send an invoice */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically send an invoice to the client
              </label>
              <p className="text-sm text-gray-600">
                This will create and send an invoice automatically whenever the appointment status is marked as "Completed". For this to work, the client must have an email address and a price must be assigned to the appointment type.
              </p>
            </div>
            <button
              onClick={() => setAutoSendInvoice(!autoSendInvoice)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                autoSendInvoice ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSendInvoice ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Automatically charge the client */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically charge the client
              </label>
              <p className="text-sm text-gray-600">
                This will create an invoice and charge it whenever the appointment status is marked as "Completed". For this to work, the client must have at least one active payment card and a price must be assigned to the appointment type.
              </p>
            </div>
            <button
              onClick={() => setAutoChargeClient(!autoChargeClient)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                autoChargeClient ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoChargeClient ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Automatically send receipt */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically send receipt when a payment has been recorded
              </label>
              <p className="text-sm text-gray-600">
                This will send receipts automatically when a payment is processed through Colib or when you mark an invoice as "Paid".
              </p>
            </div>
            <button
              onClick={() => setAutoSendReceipt(!autoSendReceipt)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                autoSendReceipt ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSendReceipt ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Automatically charge no-shows */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Automatically charge no-shows & late cancellations
              </label>
              <p className="text-sm text-gray-600">
                Select this option if you want to charge your clients in case of no-shows or late cancellations for an appointment. Specific rules can be set to determine the fees the client will have to pay. The client will be charged if a payment card is available; otherwise, an invoice will be sent to the client.
              </p>
            </div>
            <button
              onClick={() => setAutoChargeNoShows(!autoChargeNoShows)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                autoChargeNoShows ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoChargeNoShows ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>

      {/* Fee modifications Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Fee modifications</h3>
        
        <div className="space-y-4">
          <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add fee modification
          </button>

          {feeModifications.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No fee modifications yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {feeModifications.map((mod) => (
                <div key={mod.id} className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-medium text-gray-900">{mod.name}</p>
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-600">
            Fee modifications allow you to adjust the regular appointment prices and offer discounts or sliding scales to your clients.
          </p>
        </div>
      </section>
    </div>
  );
}

