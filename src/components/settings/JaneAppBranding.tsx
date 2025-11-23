"use client";

import { useState } from "react";

export default function JaneAppBranding() {
  const [primaryColor, setPrimaryColor] = useState("#14b8a6"); // teal
  const [accentColor, setAccentColor] = useState("#f97316"); // orange
  const [selectedLocation, setSelectedLocation] = useState("Home Page");

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Branding</h1>

      {/* Theme Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Theme</h2>
        
        {/* Primary Colour */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Colour <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose a colour that is the primary colour of your brand. Be sure it's a saturated enough colour that white text will be legible on it for Jane's online booking pages.
          </p>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Accent Colour */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accent Colour <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose an accent colour that compliments the primary colour of your brand. Be sure it's a saturated enough colour that white text will be legible on it for Jane's online booking pages.
          </p>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
            />
            <input
              type="text"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save Colours
        </button>
      </div>

      {/* Logo & Graphics Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Logo & Graphics</h2>

        {/* Logo */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
          <p className="text-gray-600 text-sm mb-3">
            Upload your logo here in a JPG, PNG or GIF format. For best results, the logo should be in a horizontal orientation on a white or transparent background and a recommended size of 500px in width for the logo. The logo will be displayed on your online booking pages and on all printed or exported documents.
          </p>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm cursor-pointer transition-colors">
              Choose File
              <input type="file" accept="image/jpeg,image/png,image/gif" className="hidden" />
            </label>
            <span className="text-gray-500 text-sm">No file chosen</span>
          </div>
        </div>

        {/* Email Header */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Header</label>
          <p className="text-gray-600 text-sm mb-3">
            This banner graphic will be displayed in emails sent to Patients and Staff. Upload a JPG, PNG or GIF. For best results, the graphic should be in a horizontal orientation with a very wide aspect ratio. We would recommend approx. 600px wide and between 70px and 150px tall.
          </p>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm cursor-pointer transition-colors">
              Choose File
              <input type="file" accept="image/jpeg,image/png,image/gif" className="hidden" />
            </label>
            <span className="text-gray-500 text-sm">No file chosen</span>
          </div>
        </div>

        {/* Online Booking Background */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking Background</label>
          <p className="text-gray-600 text-sm mb-3">
            This background image will be displayed full screen on your online booking pages. We recommend choosing an image that is visually simple (not too contrasty) and contains colours that will provide good contrast with the Primary colour you've chosen above. For best results upload a JPG file with a recommended size of 1200px by 1200px for the background. Maximum File Size is 5mb.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <label className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm cursor-pointer transition-colors">
              Choose File
              <input type="file" accept="image/jpeg,image/png,image/gif" className="hidden" />
            </label>
            <span className="text-gray-500 text-sm">No file chosen</span>
          </div>
          <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
            Upload
          </button>
        </div>
      </div>

      {/* Online Booking Buttons & URL's Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Online Booking Buttons & URL's</h2>
        <p className="text-gray-700 mb-6">
          Here's a couple of ways to add links to the online booking site. You can choose Jane's snazzy "Book an Appointment" button, or you can make your own button on your website using the plain URL below.
        </p>

        {/* Location/Staff Member Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select a Location or Staff Member...</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>Home Page</option>
            <option>GraceHealth - Kitchener</option>
            <option>Grace Canada</option>
          </select>
        </div>

        {/* Instructions and Embed Code */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm mb-3">
            Select which Location or Staff Member you want to link to from the dropdown above, and then copy and paste the embed code or URL below.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Embed Code</label>
              <textarea
                readOnly
                value={`<iframe frameborder='0' height='28' scrolling='no' src='https://healthpartners.janeapp.com/embed/book_online' width='177'></iframe>`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm focus:outline-none"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL</label>
              <textarea
                readOnly
                value="https://healthpartners.janeapp.com/"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm focus:outline-none"
                rows={1}
              />
            </div>
          </div>
        </div>

        {/* Book Online Button Example */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-700 text-sm mb-4">
            To add a Book Online button to your website like the one below, copy and paste this embed code. You can use this code in any HTML web page, or even in online services like your LinkedIn profile.
          </p>
          <div className="flex justify-center mb-4">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-teal-700 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Plain URL Link Example */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-700 text-sm mb-4">
            To add your book online links without a button (for simple integration with WordPress for example) just copy and paste this URL.
          </p>
          <div>
            <span className="text-gray-700 text-sm">Test Link: </span>
            <a href="https://healthpartners.janeapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

