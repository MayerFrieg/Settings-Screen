"use client";

interface JaneAppSupervisionProps {
  onCreateRelationship?: () => void;
}

export default function JaneAppSupervision({ onCreateRelationship }: JaneAppSupervisionProps) {
  const supervisoryRelationships: any[] = []; // Empty for now

  return (
    <div className="space-y-6">
      {/* Title and Create Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Supervision</h1>
        {supervisoryRelationships.length > 0 && (
          <button
            onClick={onCreateRelationship}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Supervisory Relationship
          </button>
        )}
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700">
          In a supervisory relationship, a staff member (the supervisee) is overseen by other staff member(s) (the supervisors). A supervisor gains access to the supervisee's patients and charts, and is responsible for co-signing the charts as the supervisor.{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Learn more about supervisory relationships.
          </a>
        </p>
      </div>

      {/* Table Headers (when there are relationships) */}
      {supervisoryRelationships.length > 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Supervisor ↑
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Supervisee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Relationships would be listed here */}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-lg border border-gray-200 p-12">
          <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
            {/* Icon - Folder with magnifying glass */}
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6 relative">
              <svg
                className="w-10 h-10 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <svg
                className="w-5 h-5 text-teal-600 absolute bottom-1 right-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Create your first supervisory relationship
            </h2>

            {/* Description */}
            <p className="text-gray-700 mb-6">
              Supervisory relationships are when two staff members are paired together; one supervisee and one supervisor. In this relationship, the supervisor gains access to the supervisee's patients and charts to review and to add their signature.
            </p>

            {/* CTA Button */}
            <button
              onClick={onCreateRelationship}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors mb-4"
            >
              New Supervisory Relationship
            </button>

            {/* Learn More Link */}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm">
              Learn more about supervisory relationships.
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

