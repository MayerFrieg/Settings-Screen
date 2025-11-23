"use client";

import { useState } from "react";

export default function JaneAppBillingSettings() {
  const [tipsEnabled, setTipsEnabled] = useState(false);
  const [accountingMethod, setAccountingMethod] = useState("cash");
  const [pricingByLocation, setPricingByLocation] = useState(false);
  const [showLastUsedPaymentMethod, setShowLastUsedPaymentMethod] = useState(true);
  const [giftCardsEnabled, setGiftCardsEnabled] = useState(true);
  const [giftCardLoadLimit, setGiftCardLoadLimit] = useState("200.0");
  const [giftCardOnlineSaleLimit, setGiftCardOnlineSaleLimit] = useState("200.0");
  const [startingInvoiceNumber, setStartingInvoiceNumber] = useState("1");
  const [invoiceNumberPrefix, setInvoiceNumberPrefix] = useState("");
  const [signReceipts, setSignReceipts] = useState(true);
  const [finePrint, setFinePrint] = useState("");
  const [displayPricesInclusiveOfTax, setDisplayPricesInclusiveOfTax] = useState(false);
  const [displayTaxesAsGroup, setDisplayTaxesAsGroup] = useState("");
  const [hidePatientInfoFromFinancialEmails, setHidePatientInfoFromFinancialEmails] = useState(false);

  const handleSave = () => {
    // In a real app, this would save the billing settings
    console.log("Saving billing settings:", {
      tipsEnabled,
      accountingMethod,
      pricingByLocation,
      showLastUsedPaymentMethod,
      giftCardsEnabled,
      giftCardLoadLimit,
      giftCardOnlineSaleLimit,
      startingInvoiceNumber,
      invoiceNumberPrefix,
      signReceipts,
      finePrint,
      displayPricesInclusiveOfTax,
      displayTaxesAsGroup,
      hidePatientInfoFromFinancialEmails,
    });
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Billing Settings</h1>

      {/* General Billing Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">General Billing</h2>

        {/* Tips Enabled */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tipsEnabled}
              onChange={(e) => setTipsEnabled(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Tips enabled</span>
              <p className="text-xs text-gray-600 mt-1">
                Turn on Jane's Tips & Gratuity features. Allows you to collect tips for your staff and report on tips collected.
              </p>
            </div>
          </label>
        </div>

        {/* Accounting Method */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Accounting method - Required
          </label>
          <p className="text-sm text-gray-700 mb-2">
            Do you pay your staff based on what has been invoiced or what has been collected?
          </p>
          <p className="text-xs text-gray-600 mb-1">
            Cash accounting will only report revenue when the invoices have been paid.
          </p>
          <p className="text-xs text-gray-600 mb-4">
            Accrual accounting reports revenue based on what has been invoiced, regardless of payments being received.
          </p>
          <div className="relative">
            <select
              value={accountingMethod}
              onChange={(e) => setAccountingMethod(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="cash">Collected (Cash)</option>
              <option value="accrual">Invoiced (Accrual)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing by Location */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={pricingByLocation}
              onChange={(e) => setPricingByLocation(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Pricing by location</span>
              <p className="text-xs text-gray-600 mt-1">
                Enable this feature if your pricing varies between locations. This feature is currently only available for treatments and not products.
              </p>
            </div>
          </label>
        </div>

        {/* Show Last Used Payment Method */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showLastUsedPaymentMethod}
              onChange={(e) => setShowLastUsedPaymentMethod(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Show last used payment method</span>
              <p className="text-xs text-gray-600 mt-1">
                When enabled, Jane will prompt you to use the same payment method your patient used during their previous visit.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Gift Cards Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Gift Cards</h2>

        {/* Gift Cards Enabled */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={giftCardsEnabled}
              onChange={(e) => setGiftCardsEnabled(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Gift cards enabled</span>
              <p className="text-xs text-gray-600 mt-1">
                Turn on Jane's gift card and gift certificate tracking features. This allows you to sell gift cards and gift certificates, and redeem them when receiving payment from your patients.
              </p>
            </div>
          </label>
        </div>

        {/* Gift Card Load Limit */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Gift card load limit
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={giftCardLoadLimit}
              onChange={(e) => setGiftCardLoadLimit(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="200.0"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Enter the total value that can be loaded onto a gift card, up to a maximum of $5,000.
          </p>
        </div>

        {/* Gift Card Online Sale Limit */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Gift card online sale limit
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={giftCardOnlineSaleLimit}
              onChange={(e) => setGiftCardOnlineSaleLimit(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="200.0"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Enter the maximum value that patients can purchase online. This is capped at $2,000 to maintain compliance with Stripe's Terms of Service and help reduce exposure to fraud.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Do you have questions about Jane's gift card system?{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Check out the Jane guide
            </a>{" "}
            for tips on loading, redeeming, transferring balances, running promotions and more.
          </p>
        </div>
      </div>

      {/* Financial Documents Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Financial Documents</h2>

        {/* Starting Invoice Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Starting invoice number - Required
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">#</span>
            <input
              type="number"
              value={startingInvoiceNumber}
              onChange={(e) => setStartingInvoiceNumber(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="1"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Choose a starting number for your invoices. To avoid reaching the system limit, we recommend using a low starting number. To update your number, it must be 1 or higher to match or exceed your next invoice number.
          </p>
        </div>

        {/* Invoice Number Prefix */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Invoice number prefix
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">#</span>
            <input
              type="text"
              value={invoiceNumberPrefix}
              onChange={(e) => setInvoiceNumberPrefix(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter prefix"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Enter a short prefix that will be displayed in front of invoice numbers.
          </p>
        </div>

        {/* Sign Receipts */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={signReceipts}
              onChange={(e) => setSignReceipts(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Sign receipts</span>
              <p className="text-xs text-gray-600 mt-1">
                Print practitioner's signatures on receipts.
              </p>
            </div>
          </label>
        </div>

        {/* Fine Print */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Fine print on invoices, statements & receipts
          </label>
          <textarea
            value={finePrint}
            onChange={(e) => setFinePrint(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-y"
            placeholder="Enter fine print text"
          />
          <p className="text-xs text-gray-600 mt-2">
            This text will appear at the bottom of invoices, statements, and receipts.
          </p>
        </div>

        {/* Display Prices Inclusive of Tax */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={displayPricesInclusiveOfTax}
              onChange={(e) => setDisplayPricesInclusiveOfTax(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <span className="text-sm font-medium text-gray-900">Display prices, and invoice line items, inclusive of tax</span>
          </label>
        </div>

        {/* Display Taxes as Group */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Display taxes as group
          </label>
          <input
            type="text"
            value={displayTaxesAsGroup}
            onChange={(e) => setDisplayTaxesAsGroup(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="e.g., Sales Tax"
          />
          <p className="text-xs text-gray-600 mt-2">
            Display multiple taxes as a single tax item. Example: Sales Tax. Leave blank to display taxes individually.
          </p>
        </div>

        {/* Hide Patient Information from Financial Emails */}
        <div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hidePatientInfoFromFinancialEmails}
              onChange={(e) => setHidePatientInfoFromFinancialEmails(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded mt-1"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Hide Patient Information from Financial Emails</span>
              <p className="text-xs text-gray-600 mt-1">
                When disabled, Jane will include a text preview and PDF attachment of any financial documents emailed to patients. When enabled, identifying information is removed from the email, and a secure download link to access, print, or download these documents are sent instead.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          Save Billing Information
        </button>
      </div>
    </div>
  );
}

