"use client";

interface JaneAppAddressBookProps {
  onCreateEntry?: () => void;
}

export default function JaneAppAddressBook({ onCreateEntry }: JaneAppAddressBookProps) {
  return (
    <div className="space-y-6">
      {/* Header with New Entry Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-light text-gray-400">Address Book</h1>
        <button
          onClick={onCreateEntry}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Entry
        </button>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-700 leading-relaxed">
          Address Book stores contact information that everyone in your clinic may use (ex. for health providers, pharmacies). If you are using{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">Integrated Outbound Fax</a>, Jane will pull from this list when sending a fax.{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 underline">Learn More</a>
        </p>
      </div>

      {/* Search and Empty State */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-gray-500 text-lg mb-2">No available entries to show</p>
          <p className="text-gray-400 text-sm mb-6">Create entries to store and manage business contact information</p>
          <button
            onClick={onCreateEntry}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Entry
          </button>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="text-center">
        <a href="#" className="text-blue-600 hover:text-blue-700 underline text-sm">
          Learn more about Address Book
        </a>
      </div>
    </div>
  );
}

