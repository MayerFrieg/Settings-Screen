"use client";

import { useState } from "react";

interface JaneAppNewProductProps {
  onCancel: () => void;
  onSave?: (product: any) => void;
}

export default function JaneAppNewProduct({ onCancel, onSave }: JaneAppNewProductProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [incomeCategory, setIncomeCategory] = useState("Product Income");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [trackInventory, setTrackInventory] = useState(false);
  const [taxes, setTaxes] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (name && price && incomeCategory && onSave) {
      onSave({
        name,
        code,
        incomeCategory,
        supplier,
        price: parseFloat(price),
        inventory: trackInventory ? (inventory ? parseInt(inventory) : null) : null,
        taxes,
        description,
      });
    }
  };

  const isFormValid = name && price && incomeCategory;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">New Product</h1>

      {/* Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Name - Required
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Code */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Code
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter product code"
          />
        </div>

        {/* Income Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Income Category - Required
          </label>
          <div className="relative">
            <select
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="Product Income">Product Income</option>
              <option value="Treatment Income">Treatment Income</option>
              <option value="Other Income">Other Income</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Supplier */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Supplier
          </label>
          <div className="relative">
            <select
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white appearance-none pr-10"
            >
              <option value="">Select supplier</option>
              <option value="supplier-1">Supplier 1</option>
              <option value="supplier-2">Supplier 2</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
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

        {/* Track Inventory */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trackInventory}
              onChange={(e) => setTrackInventory(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-900">Track Inventory</span>
          </label>
        </div>

        {/* Inventory */}
        {trackInventory && (
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Inventory
            </label>
            <input
              type="number"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter quantity"
            />
          </div>
        )}

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
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-y"
            placeholder="Enter product description"
          />
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
          Create Product
        </button>
      </div>
    </div>
  );
}

