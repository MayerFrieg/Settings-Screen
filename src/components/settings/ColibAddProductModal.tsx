"use client";

import { useState } from "react";

interface ProductData {
  name: string;
  price: number;
  description: string;
  image?: string;
  enabled: boolean;
}

interface ColibAddProductModalProps {
  onClose: () => void;
  onSave: (product: ProductData) => void;
}

export default function ColibAddProductModal({ onClose, onSave }: ColibAddProductModalProps) {
  const [formData, setFormData] = useState<ProductData>({
    name: "",
    price: 1,
    description: "",
    enabled: false,
  });

  const handleInputChange = (field: keyof ProductData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (formData.name.trim()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add Product</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-6">
          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
            <div className="space-y-3">
              <div className="w-full h-48 rounded-lg bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                {formData.image ? (
                  <img src={formData.image} alt="Product" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">
                  Drag a file here or click to choose an image from your computer.
                </p>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/bmp"
                  className="hidden"
                  id="product-image-upload"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        handleInputChange("image", event.target?.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label
                  htmlFor="product-image-upload"
                  className="inline-block px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 cursor-pointer hover:bg-gray-50"
                >
                  No file chosen
                </label>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">Restrictions:</p>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>jpg, jpeg, png, or bmp format</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Name Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter product name"
            />
            <svg className="absolute right-3 top-9 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>

          {/* Price Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <div className="relative">
              <input
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange("price", parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="0.00"
              />
              <span className="absolute right-3 top-2.5 text-gray-600 font-medium">$</span>
            </div>
          </div>

          {/* Taxes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Taxes</label>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Select options ▾
            </button>
          </div>

          {/* Enable this type of product */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enable this type of product
              </label>
            </div>
            <button
              onClick={() => handleInputChange("enabled", !formData.enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${
                formData.enabled ? "bg-teal-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 min-h-[100px] resize-y"
              placeholder="Enter product description"
            />
          </div>

          {/* Available quantity */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Available quantity:</span>
              <span className="text-sm text-gray-600">0</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <button
            onClick={handleSave}
            className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

