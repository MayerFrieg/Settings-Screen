"use client";

import JaneAppDocumentation from "./JaneAppDocumentation";

interface PaymentMethod {
  id: string;
  displayName: string;
  internalName: string;
}

interface JaneAppPaymentMethodsProps {
  onCreatePaymentMethod?: () => void;
  onEditPaymentMethod?: (id: string) => void;
}

export default function JaneAppPaymentMethods({ onCreatePaymentMethod, onEditPaymentMethod }: JaneAppPaymentMethodsProps) {
  const paymentMethods: PaymentMethod[] = [
    {
      id: "1",
      displayName: "Cash",
      internalName: "Cash",
    },
    {
      id: "2",
      displayName: "Interac eTransfer",
      internalName: "Interac E Transfer",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <JaneAppDocumentation section="payment-methods" />

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Payment Methods</h1>
        <button
          onClick={onCreatePaymentMethod}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
        >
          New Payment Method
        </button>
      </div>

      {/* Payment Methods List */}
      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="p-6 flex items-center justify-between hover:bg-gray-50"
          >
            <div>
              <h3 className="text-lg font-semibold text-teal-600 mb-1">{method.displayName}</h3>
              <p className="text-sm text-gray-600">{method.internalName}</p>
            </div>
            <button
              onClick={() => onEditPaymentMethod?.(method.id)}
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

