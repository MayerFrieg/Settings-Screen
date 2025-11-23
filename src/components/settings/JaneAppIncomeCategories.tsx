"use client";

import JaneAppDocumentation from "./JaneAppDocumentation";

interface IncomeCategory {
  id: string;
  name: string;
  defaultCommissionRate: number;
  treatmentsCount?: number;
  productsCount?: number;
}

interface JaneAppIncomeCategoriesProps {
  onCreateIncomeCategory?: () => void;
  onEditIncomeCategory?: (id: string) => void;
}

export default function JaneAppIncomeCategories({ onCreateIncomeCategory, onEditIncomeCategory }: JaneAppIncomeCategoriesProps) {
  const incomeCategories: IncomeCategory[] = [
    {
      id: "1",
      name: "Product Income",
      defaultCommissionRate: 100,
      productsCount: 0,
    },
    {
      id: "2",
      name: "Treatment Income",
      defaultCommissionRate: 100,
      treatmentsCount: 33,
    },
  ];

  const getAssignmentText = (category: IncomeCategory) => {
    if (category.treatmentsCount !== undefined) {
      return `${category.treatmentsCount} Treatments`;
    } else if (category.productsCount !== undefined) {
      return category.productsCount === 0 ? "No Treatments or Products assigned" : `${category.productsCount} Products`;
    }
    return "No Treatments or Products assigned";
  };

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <JaneAppDocumentation section="income-categories" />

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Income Categories</h1>
        <button
          onClick={onCreateIncomeCategory}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          New Income Category
        </button>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700">
          Income categories are used to break down the types of income in your financial reporting and to allow various commission rates for your staff dependent on the product or treatment sold.
        </p>
      </div>

      {/* Income Categories List */}
      <div className="space-y-4">
        {incomeCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">{category.name}</h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>Commission: {category.defaultCommissionRate}%</p>
                <p>{getAssignmentText(category)}</p>
              </div>
            </div>
            <button
              onClick={() => onEditIncomeCategory?.(category.id)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

