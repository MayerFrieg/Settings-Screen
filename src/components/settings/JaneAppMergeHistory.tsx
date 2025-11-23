"use client";

interface MergeEvent {
  id: string;
  date: string;
  type: string;
  description: string;
  mergedFrom: string;
  mergedTo: string;
}

interface JaneAppMergeHistoryProps {
  // No props needed for now
}

export default function JaneAppMergeHistory({}: JaneAppMergeHistoryProps) {
  // In a real app, this would fetch merge history data
  const mergeEvents: MergeEvent[] = [];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Merge History</h1>

      {/* Content */}
      {mergeEvents.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12">
          <div className="flex flex-col items-center justify-center py-12">
            {/* Empty State Illustration */}
            <div className="w-full max-w-md mb-6 opacity-30">
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                {/* Abstract network illustration */}
                <circle cx="80" cy="80" r="30" fill="currentColor" className="text-gray-300" />
                <circle cx="320" cy="80" r="30" fill="currentColor" className="text-gray-300" />
                <circle cx="200" cy="150" r="40" fill="currentColor" className="text-gray-300" />
                <circle cx="120" cy="220" r="25" fill="currentColor" className="text-gray-300" />
                <circle cx="280" cy="220" r="25" fill="currentColor" className="text-gray-300" />
                
                {/* Connecting lines */}
                <line x1="110" y1="80" x2="180" y2="130" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
                <line x1="290" y1="80" x2="220" y2="130" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
                <line x1="190" y1="190" x2="140" y2="200" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
                <line x1="210" y1="190" x2="260" y2="200" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
                
                {/* Document icon */}
                <rect x="50" y="50" width="60" height="60" rx="4" fill="currentColor" className="text-gray-300" />
                <line x1="60" y1="70" x2="100" y2="70" stroke="white" strokeWidth="2" />
                <line x1="60" y1="85" x2="100" y2="85" stroke="white" strokeWidth="2" />
                <line x1="60" y1="100" x2="90" y2="100" stroke="white" strokeWidth="2" />
                
                {/* Person icon */}
                <circle cx="320" cy="60" r="20" fill="currentColor" className="text-gray-300" />
                <path d="M300 90 Q320 80 340 90" stroke="white" strokeWidth="3" fill="none" />
                
                {/* Card icon */}
                <rect x="150" y="120" width="100" height="60" rx="4" fill="currentColor" className="text-gray-300" />
                <line x1="160" y1="140" x2="240" y2="140" stroke="white" strokeWidth="2" />
                <line x1="160" y1="160" x2="220" y2="160" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-gray-500 text-center text-lg">
              No merge history available
            </p>
            <p className="text-gray-400 text-center text-sm mt-2">
              Merge history will appear here when patient records or other data are merged.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {mergeEvents.map((event) => (
              <div
                key={event.id}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{event.type}</h3>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{event.description}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Merged from:</span> {event.mergedFrom}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Merged to:</span> {event.mergedTo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

