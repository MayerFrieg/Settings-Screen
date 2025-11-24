"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  initialClientBalance?: {
    amount: string;
    price: string;
  };
};

export default function SimplePracticeProducts() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "",
      price: "0",
      initialClientBalance: {
        amount: "",
        price: "0",
      },
    },
  ]);

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now().toString(),
        name: "",
        price: "0",
        initialClientBalance: {
          amount: "",
          price: "0",
        },
      },
    ]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleProductChange = (id: string, field: string, value: string) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          if (field === "initialBalanceAmount") {
            return {
              ...p,
              initialClientBalance: {
                ...p.initialClientBalance!,
                amount: value,
              },
            };
          } else if (field === "initialBalancePrice") {
            return {
              ...p,
              initialClientBalance: {
                ...p.initialClientBalance!,
                price: value,
              },
            };
          } else {
            return { ...p, [field]: value };
          }
        }
        return p;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-900 mt-1">Manage products and set prices</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Save changes
          </button>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Watch a quick video about Products
          </a>
        </div>
      </div>

      {/* Products Form */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6">
          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={product.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Product Name</label>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => handleProductChange(product.id, "name", e.target.value)}
                      placeholder="Enter product name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        value={product.price}
                        onChange={(e) => handleProductChange(product.id, "price", e.target.value)}
                        placeholder="0"
                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Initial client balance */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Initial client balance</label>
                    <input
                      type="text"
                      value={product.initialClientBalance?.amount || ""}
                      onChange={(e) => handleProductChange(product.id, "initialBalanceAmount", e.target.value)}
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Initial client balance price */}
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-900 mb-1">Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="text"
                          value={product.initialClientBalance?.price || "0"}
                          onChange={(e) => handleProductChange(product.id, "initialBalancePrice", e.target.value)}
                          placeholder="0"
                          className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    {products.length > 1 && (
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-gray-400 hover:text-red-600 mb-1"
                        title="Delete product"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Add Product Button */}
            <div className="pt-4">
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded border border-blue-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

