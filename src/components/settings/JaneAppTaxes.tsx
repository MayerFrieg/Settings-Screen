"use client";

import JaneAppDocumentation from "./JaneAppDocumentation";

interface Tax {
  id: string;
  name: string;
  rate: number;
  productsCount: number;
  treatmentsCount: number;
  packagesCount: number;
}

interface JaneAppTaxesProps {
  onCreateTax?: () => void;
  onEditTax?: (id: string) => void;
}

export default function JaneAppTaxes({ onCreateTax, onEditTax }: JaneAppTaxesProps) {
  const taxes: Tax[] = [
    {
      id: "1",
      name: "HST",
      rate: 13.0,
      productsCount: 0,
      treatmentsCount: 0,
      packagesCount: 0,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <JaneAppDocumentation section="taxes" />

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Taxes</h1>
        <button
          onClick={onCreateTax}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          New Tax
        </button>
      </div>

      {/* Taxes List */}
      <div className="space-y-4">
        {taxes.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500">
            No taxes found. Click "New Tax" to add one.
          </div>
        ) : (
          taxes.map((tax) => (
            <div
              key={tax.id}
              className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">{tax.name}</h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>Rate: {tax.rate.toFixed(3)}%</p>
                  <p>
                    This tax is being charged on {tax.productsCount} products, {tax.treatmentsCount} treatments, and {tax.packagesCount} packages & memberships at GraceHealth.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onEditTax?.(tax.id)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors ml-4"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

