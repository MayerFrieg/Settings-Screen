"use client";

interface Fee {
  id: string;
  name: string;
  type: "no-show" | "late-cancellation";
  adjustmentType: "override" | "percent-discount" | "dollar-discount";
  value: number;
  provider: "clinic-staff" | "clinic-only";
}

interface JaneAppFeesProps {
  onCreateFee?: () => void;
  onEditFee?: (id: string) => void;
}

export default function JaneAppFees({ onCreateFee, onEditFee }: JaneAppFeesProps) {
  const noShowFees: Fee[] = [
    {
      id: "1",
      name: "No Show - Full Price",
      type: "no-show",
      adjustmentType: "dollar-discount",
      value: 0.0,
      provider: "clinic-staff",
    },
    {
      id: "2",
      name: "No Show - No Charge",
      type: "no-show",
      adjustmentType: "override",
      value: 0.0,
      provider: "clinic-staff",
    },
    {
      id: "3",
      name: "No Show - $20.00",
      type: "no-show",
      adjustmentType: "override",
      value: 20.0,
      provider: "clinic-staff",
    },
  ];

  const lateCancellationFees: Fee[] = [
    {
      id: "4",
      name: "Late Cancellation - 50%",
      type: "late-cancellation",
      adjustmentType: "percent-discount",
      value: 50.0,
      provider: "clinic-staff",
    },
    {
      id: "5",
      name: "Late Cancellation - $20.00",
      type: "late-cancellation",
      adjustmentType: "override",
      value: 20.0,
      provider: "clinic-staff",
    },
  ];

  const getAdjustmentDetail = (fee: Fee) => {
    if (fee.adjustmentType === "override") {
      return `$${fee.value.toFixed(2)} Override`;
    } else if (fee.adjustmentType === "percent-discount") {
      return `${fee.value.toFixed(1)}% Discount`;
    } else {
      return `$${fee.value.toFixed(2)} Discount`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Fees</h1>
        <div className="flex items-center gap-4">
          <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm flex items-center gap-1">
            Learn more about fees
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button
            onClick={onCreateFee}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Fee
          </button>
        </div>
      </div>

      {/* No Show Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">No Show</h2>
        <p className="text-sm text-gray-700 mb-6">
          No Show fees are used in Jane to charge for a No Show appointment.
        </p>
        
        <div className="space-y-4">
          {noShowFees.map((fee, index) => (
            <div
              key={fee.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{fee.name}</h3>
                  <p className="text-xs text-gray-600">{getAdjustmentDetail(fee)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => onEditFee?.(fee.id)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Late Cancellations Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Late Cancellations</h2>
        <p className="text-sm text-gray-700 mb-6">
          Late Cancellation fees are used in Jane to charge an appointment that was cancelled out of the period of your cancellation policy. Your time period for the cancellation policy is set up for 24 hours. To change it, please visit{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Online Booking Settings
          </a>
          .
        </p>
        
        <div className="space-y-4">
          {lateCancellationFees.map((fee, index) => (
            <div
              key={fee.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{fee.name}</h3>
                  <p className="text-xs text-gray-600">{getAdjustmentDetail(fee)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => onEditFee?.(fee.id)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

