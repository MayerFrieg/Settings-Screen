"use client";

import { useState } from "react";

interface BillingCode {
  id: string;
  code: string;
  description: string;
  version: string;
  date: string;
  codeSet: string;
  rate: string | null;
  isFavorite: boolean;
}

interface JaneAppBillingCodesProps {
  onCreateBillingCode?: () => void;
}

export default function JaneAppBillingCodes({ onCreateBillingCode }: JaneAppBillingCodesProps) {
  const [codeSets, setCodeSets] = useState({
    ICD10: false,
    ICD9: true,
    ICD9UK: false,
    TELEPLAN: false,
    CPT: false,
    PACIFIC_BLUE_CROSS: false,
    TELUS_E_CLAIMS: true,
    HEALTHCODE_ISC: false,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedSet, setSelectedSet] = useState("All Sets");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const customBillingCodes: any[] = []; // Empty for now

  const billingCodes: BillingCode[] = [
    {
      id: "1",
      code: "ICD9: #0 - TBD",
      description: "TBD",
      version: "12",
      date: "August 27, 2011 - 3:00am",
      codeSet: "ICD9",
      rate: null,
      isFavorite: false,
    },
    {
      id: "2",
      code: "ICD9: #001.0 - CHOLERA DUE TO VIBRIO CHOLERAE",
      description: "CHOLERA DUE TO VIBRIO CHOLERAE",
      version: "12",
      date: "August 27, 2011 - 3:00am",
      codeSet: "ICD9",
      rate: null,
      isFavorite: false,
    },
    {
      id: "3",
      code: "ICD9: #001.1 - CHOLERA DUE TO VIBRIO CHOLERAE EL TOR",
      description: "CHOLERA DUE TO VIBRIO CHOLERAE EL TOR",
      version: "12",
      date: "August 27, 2011 - 3:00am",
      codeSet: "ICD9",
      rate: null,
      isFavorite: false,
    },
    {
      id: "4",
      code: "ICD9: #001.9 - CHOLERA UNSPECIFIED",
      description: "CHOLERA UNSPECIFIED",
      version: "12",
      date: "August 27, 2011 - 3:00am",
      codeSet: "ICD9",
      rate: null,
      isFavorite: false,
    },
  ];

  const handleCodeSetChange = (codeSet: keyof typeof codeSets) => {
    setCodeSets((prev) => ({ ...prev, [codeSet]: !prev[codeSet] }));
  };

  const handleSaveCodeSets = () => {
    // In a real app, this would save the code sets
    console.log("Saving code sets:", codeSets);
  };

  const toggleFavorite = (id: string) => {
    // In a real app, this would toggle the favorite status
    console.log("Toggling favorite for code:", id);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-light text-gray-400">Billing Codes</h1>
        <p className="text-lg text-gray-600 mt-2">GraceHealth Billing Codes</p>
      </div>

      {/* Custom Billing Codes Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-4">
              Do you need to use a billing code that isn't available in the standard list below? You can add additional billing codes here.
            </p>
          </div>
          <button
            onClick={onCreateBillingCode}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            New Billing Code
          </button>
        </div>

        {customBillingCodes.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Billed Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Custom codes would be listed here */}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No Custom Billing Codes
          </div>
        )}
      </div>

      {/* Code Sets Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Code Sets</h2>
        <p className="text-sm text-gray-700 mb-4">Which code sets do you want available?</p>
        
        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.ICD10}
              onChange={() => handleCodeSetChange("ICD10")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">ICD10</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.ICD9}
              onChange={() => handleCodeSetChange("ICD9")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">ICD9</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.ICD9UK}
              onChange={() => handleCodeSetChange("ICD9UK")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">ICD9-UK</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.TELEPLAN}
              onChange={() => handleCodeSetChange("TELEPLAN")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">TELEPLAN</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.CPT}
              onChange={() => handleCodeSetChange("CPT")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">CPT</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.PACIFIC_BLUE_CROSS}
              onChange={() => handleCodeSetChange("PACIFIC_BLUE_CROSS")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">PACIFIC BLUE CROSS</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.TELUS_E_CLAIMS}
              onChange={() => handleCodeSetChange("TELUS_E_CLAIMS")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">TELUS E CLAIMS</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={codeSets.HEALTHCODE_ISC}
              onChange={() => handleCodeSetChange("HEALTHCODE_ISC")}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">HEALTHCODE-ISC</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveCodeSets}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium text-sm transition-colors"
          >
            Save Billing Code Sets
          </button>
        </div>
      </div>

      {/* Procedure & ICD Codes Database Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-sm text-gray-700 mb-4">
          There are 14,605 procedure & ICD codes in the database. You can mark your frequently used codes as favorites. Click the star next to a code below to add it to your favorites list.
        </p>

        {/* Search and Filter Bar */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>All Types</option>
            <option>Procedure</option>
            <option>ICD</option>
          </select>
          <select
            value={selectedSet}
            onChange={(e) => setSelectedSet(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>All Sets</option>
            <option>ICD9</option>
            <option>ICD10</option>
            <option>CPT</option>
          </select>
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`p-2 border rounded-lg ${
              showFavoritesOnly
                ? "bg-teal-50 border-teal-500 text-teal-600"
                : "border-gray-300 text-gray-400 hover:border-gray-400"
            }`}
          >
            <svg className="w-5 h-5" fill={showFavoritesOnly ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>

        {/* Codes Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Code Set
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Favorite
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {billingCodes.map((code) => (
                <tr key={code.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{code.code}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{code.version}</div>
                    <div className="text-xs text-gray-500">{code.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{code.codeSet}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{code.rate || "-"}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleFavorite(code.id)}
                      className={`p-2 rounded ${
                        code.isFavorite
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      <svg className="w-5 h-5" fill={code.isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing page {currentPage} of 5
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded ${
                currentPage === 1
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 rounded ${
                currentPage === 2
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`px-3 py-1 rounded ${
                currentPage === 3
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              3
            </button>
            <button
              onClick={() => setCurrentPage(4)}
              className={`px-3 py-1 rounded ${
                currentPage === 4
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              4
            </button>
            <button
              onClick={() => setCurrentPage(5)}
              className={`px-3 py-1 rounded ${
                currentPage === 5
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              5
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              Next &gt;
            </button>
            <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
              Last &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

