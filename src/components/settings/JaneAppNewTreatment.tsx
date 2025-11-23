"use client";

import { useState } from "react";

interface JaneAppNewTreatmentProps {
  onCancel: () => void;
  onSave?: (treatment: any) => void;
}

const treatmentColors = [
  { name: "Jane Blue", value: "jane-blue", color: "bg-teal-500" },
  { name: "Butter", value: "butter", color: "bg-yellow-300" },
  { name: "Lavender", value: "lavender", color: "bg-purple-300" },
  { name: "Tangerine", value: "tangerine", color: "bg-orange-400" },
  { name: "Dusk", value: "dusk", color: "bg-blue-800" },
  { name: "Moss", value: "moss", color: "bg-green-600" },
  { name: "Lilac", value: "lilac", color: "bg-pink-300" },
  { name: "Flamingo", value: "flamingo", color: "bg-pink-400" },
  { name: "Mint", value: "mint", color: "bg-green-300" },
  { name: "Mauve", value: "mauve", color: "bg-red-800" },
];

export default function JaneAppNewTreatment({ onCancel, onSave }: JaneAppNewTreatmentProps) {
  const [treatmentLength, setTreatmentLength] = useState("");
  const [scheduledLength, setScheduledLength] = useState("");
  const [price, setPrice] = useState("");
  const [locations, setLocations] = useState<string[]>(["GraceHealth"]);
  const [taxes, setTaxes] = useState<string[]>([]);
  const [priceIncludesTax, setPriceIncludesTax] = useState(false);
  const [incomeCategory, setIncomeCategory] = useState("Treatment Income");
  const [selectedColor, setSelectedColor] = useState("jane-blue");
  const [displayInOnlineBooking, setDisplayInOnlineBooking] = useState(true);
  const [contactToBook, setContactToBook] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(true);
  const [displayDuration, setDisplayDuration] = useState(true);

  const timeOptions = Array.from({ length: 24 }, (_, i) => (i + 1) * 5);

  const handleSave = () => {
    if (treatmentLength && scheduledLength && price && locations.length > 0 && incomeCategory && onSave) {
      onSave({
        treatmentLength,
        scheduledLength,
        price,
        locations,
        taxes,
        priceIncludesTax,
        incomeCategory,
        selectedColor,
        displayInOnlineBooking,
        contactToBook,
        displayPrice,
        displayDuration,
      });
    }
  };

  const isFormValid = treatmentLength && scheduledLength && price && locations.length > 0 && incomeCategory;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Treatment</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Treatment Length */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Treatment Length - Required
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <select
                value={treatmentLength}
                onChange={(e) => setTreatmentLength(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
              >
                <option value="">Select length</option>
                {timeOptions.map((minutes) => (
                  <option key={minutes} value={minutes}>
                    {minutes} minutes
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            The length of time the patient is scheduled for.
          </p>
        </div>

        {/* Scheduled Length */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Scheduled Length - Required
          </label>
          <div className="relative">
            <select
              value={scheduledLength}
              onChange={(e) => setScheduledLength(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="">Select length</option>
              {timeOptions.map((minutes) => (
                <option key={minutes} value={minutes}>
                  {minutes} minutes
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            The length of time the staff member's schedule is reserved for. Set this to be longer than the treatment length to have a break between treatments. Set this to be shorter than the treatment time to allow overlapping appointments.
          </p>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Price - Required
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Locations */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Locations - Required
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={locations.includes("GraceHealth")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setLocations([...locations, "GraceHealth"]);
                  } else {
                    setLocations(locations.filter((loc) => loc !== "GraceHealth"));
                  }
                }}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">GraceHealth</span>
            </label>
          </div>
        </div>

        {/* Taxes */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Taxes</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={taxes.includes("HST")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setTaxes([...taxes, "HST"]);
                  } else {
                    setTaxes(taxes.filter((tax) => tax !== "HST"));
                  }
                }}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">HST</span>
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Don't see your tax listed?{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Check out this Jane Guide
            </a>{" "}
            to learn more.
          </p>
        </div>

        {/* Price Includes Tax */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={priceIncludesTax}
              onChange={(e) => setPriceIncludesTax(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-900">Price Includes Tax</span>
          </label>
          <p className="mt-2 text-xs text-gray-600">
            Select this option for the treatment price to display inclusive of tax. If you do not select this option, the taxes you have selected above will be calculated and added to the treatment price.
          </p>
        </div>

        {/* Income Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Income category - Required
          </label>
          <div className="relative">
            <select
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="Treatment Income">Treatment Income</option>
              <option value="Other Income">Other Income</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Income categories will allow you to both pay your staff a different rate and also to break down categories of income in your reporting.{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Check out our Jane Guide
            </a>{" "}
            to learn more.
          </p>
        </div>

        {/* Treatment Colour */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Treatment Colour</h3>
          <p className="text-xs text-gray-600 mb-4">
            Choose a colour for this treatment's appointments in the admin schedule.
          </p>
          <div className="grid grid-cols-5 gap-3">
            {treatmentColors.map((color) => (
              <label key={color.value} className="flex flex-col items-center cursor-pointer">
                <input
                  type="radio"
                  name="treatment-color"
                  value={color.value}
                  checked={selectedColor === color.value}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-12 h-12 rounded-full ${color.color} border-2 ${
                    selectedColor === color.value ? "border-teal-600 border-4" : "border-gray-300"
                  }`}
                />
                <span className="mt-2 text-xs text-gray-700 text-center">{color.name}</span>
              </label>
            ))}
          </div>
          <a href="#" className="mt-4 text-xs text-teal-600 hover:text-teal-700 underline">
            View colours in accessibility mode
          </a>
        </div>

        {/* Online Booking Settings */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Online Booking Settings</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={displayInOnlineBooking}
                onChange={(e) => setDisplayInOnlineBooking(e.target.checked)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-900">Display in Online Booking</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={contactToBook}
                onChange={(e) => setContactToBook(e.target.checked)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-900">Contact to book</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={displayPrice}
                onChange={(e) => setDisplayPrice(e.target.checked)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-sm font-medium text-gray-900">Display price on Online Booking pages</span>
            </label>
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={displayDuration}
                  onChange={(e) => setDisplayDuration(e.target.checked)}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-900">Display duration</span>
              </label>
              <p className="mt-2 text-xs text-gray-600">
                Display the treatment duration in online booking and on invoices and receipts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!isFormValid}
          className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Create Treatment
        </button>
      </div>
    </div>
  );
}

