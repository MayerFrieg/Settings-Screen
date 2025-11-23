"use client";

import { useState } from "react";

export default function ColibGeneralSettings() {
  const [hideBrand, setHideBrand] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState("teal");
  const [openingHours, setOpeningHours] = useState({
    monday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    tuesday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    wednesday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    thursday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    friday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    saturday: { open: true, start: "8:00 am", end: "7:00 pm", break: false },
    sunday: { open: false, start: "8:00 am", end: "7:00 pm", break: false },
  });

  const themeColors = [
    { id: "teal", color: "#14b8a6", name: "Teal" },
    { id: "black", color: "#000000", name: "Black" },
    { id: "dark-green", color: "#166534", name: "Dark Green" },
    { id: "blue", color: "#2563eb", name: "Blue" },
    { id: "light-green", color: "#22c55e", name: "Light Green" },
    { id: "orange-red", color: "#ea580c", name: "Orange-Red" },
    { id: "dark-brown", color: "#78350f", name: "Dark Brown" },
    { id: "gray", color: "#6b7280", name: "Gray" },
    { id: "red", color: "#dc2626", name: "Red" },
    { id: "yellow", color: "#eab308", name: "Yellow" },
    { id: "dark-blue", color: "#1e40af", name: "Dark Blue" },
    { id: "purple", color: "#9333ea", name: "Purple" },
  ];

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  const timeOptions = [
    "12:00 am", "12:30 am", "1:00 am", "1:30 am", "2:00 am", "2:30 am",
    "3:00 am", "3:30 am", "4:00 am", "4:30 am", "5:00 am", "5:30 am",
    "6:00 am", "6:30 am", "7:00 am", "7:30 am", "8:00 am", "8:30 am",
    "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am",
    "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm",
    "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm",
    "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm",
    "9:00 pm", "9:30 pm", "10:00 pm", "10:30 pm", "11:00 pm", "11:30 pm",
  ];

  const updateDayHours = (day: string, field: string, value: any) => {
    setOpeningHours((prev) => ({
      ...prev,
      [day]: { ...prev[day as keyof typeof prev], [field]: value },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Logo Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900">General</h2>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-4">Logo</h3>
        
        {/* Current Logo */}
        <div className="mb-4">
          <div className="w-32 h-32 rounded-lg bg-teal-500 flex flex-col items-center justify-center mb-4">
            <span className="text-white text-4xl font-bold">C</span>
            <span className="text-white text-sm font-semibold">Colib</span>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 mb-4">
          <p className="text-gray-600 mb-2">Drag a file here or click to choose an image from your computer.</p>
          <input type="file" accept="image/jpeg,image/jpg,image/png,image/bmp" className="hidden" id="logo-upload" />
          <label htmlFor="logo-upload" className="inline-block mt-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            No file chosen
          </label>
        </div>

        <div className="mb-2">
          <p className="text-sm font-medium text-gray-700 mb-1">Restrictions:</p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>jpg, jpeg, png, or bmp format</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          Select a logo for your business. This logo will appear on all your public pages and documents.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Contact</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="GraceApp"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business description</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter business description"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
            <div className="relative">
              <input
                type="email"
                defaultValue="mayersoliman4@gmail.com"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-900">Hide Colib brand</label>
          <button
            onClick={() => setHideBrand(!hideBrand)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              hideBrand ? "bg-teal-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                hideBrand ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        <p className="text-sm text-gray-600">
          If you select this option, the Colib logo and the Colib name will be replaced with your information on your public pages (direct booking, video conference, forms, etc.).
        </p>
      </section>

      {/* Theme Color Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Theme color</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {themeColors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedThemeColor(color.id)}
              className={`w-12 h-12 rounded border-2 transition-all ${
                selectedThemeColor === color.id ? "border-gray-900 scale-110" : "border-gray-300 hover:border-gray-400"
              }`}
              style={{ backgroundColor: color.color }}
              title={color.name}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          This color will be used on your public pages and the emails sent to your clients.
        </p>
      </section>

      {/* Referral & Promo Code Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Referral & Promo code</h3>
        <div className="space-y-4">
          <div>
            <p className="text-2xl font-bold text-orange-600 mb-2">PYRJG3</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Link to share with your network:</p>
            <p className="text-sm text-teal-600 break-all">https://www.colib.io/register?Code=PYRJG3</p>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Invite your network to join us and both of you can earn a CAD $50 credit! Here's how: Share your unique promo code. When anyone in your network signs up using this code, they'll receive a CAD $50 credit to start. Plus, for every new practice that signs up with your code on Colib.io, you'll also receive a CAD $50 credit as our thanks after they have spent that amount on our platform. Ensure your network enters this code on the sign-up page—it's applicable for multiple practices, multiplying your rewards!
          </p>
        </div>
      </section>

      {/* Business Address Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Address</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Street Address"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal/Zip Code</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Postal/Zip Code"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <div className="relative">
                <select className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white">
                  <option>Canada</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
            <div className="relative">
              <select className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white">
                <option>--Select--</option>
                <option>Ontario</option>
                <option>Quebec</option>
                <option>British Columbia</option>
              </select>
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-sm text-teal-600 hover:text-teal-700">Address policy</a>
        </div>
      </section>

      {/* Social Media & Website Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">Social Media & Website</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook page</label>
            <div className="relative">
              <input
                type="url"
                placeholder="Enter Facebook page URL"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <div className="absolute right-3 top-3 w-5 h-5 flex items-center justify-center text-blue-600 font-bold">f</div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <div className="relative">
              <input
                type="url"
                placeholder="Enter the url of your practice's website."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instagram page</label>
            <div className="relative">
              <input
                type="url"
                placeholder="Enter Instagram page URL"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Linkedin page</label>
            <div className="relative">
              <input
                type="url"
                placeholder="Enter LinkedIn page URL"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
              <div className="absolute right-3 top-3 text-blue-600 font-bold text-sm">in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">Opening Hours</h3>
        <div className="space-y-3">
          {days.map((day) => {
            const dayData = openingHours[day.key as keyof typeof openingHours];
            return (
              <div key={day.key} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                <div className="w-24 text-sm font-medium text-gray-700">{day.label}</div>
                <button
                  onClick={() => updateDayHours(day.key, "open", !dayData.open)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    dayData.open ? "bg-teal-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      dayData.open ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm w-16 ${dayData.open ? "text-teal-600 font-medium" : "text-gray-500"}`}>
                  {dayData.open ? "Open" : "Closed"}
                </span>
                {dayData.open && (
                  <>
                    <select
                      value={dayData.start}
                      onChange={(e) => updateDayHours(day.key, "start", e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <span className="text-gray-500">to</span>
                    <select
                      value={dayData.end}
                      onChange={(e) => updateDayHours(day.key, "end", e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => updateDayHours(day.key, "break", !dayData.break)}
                      className={`ml-auto relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        dayData.break ? "bg-teal-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          dayData.break ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600 w-32">
                      {dayData.break ? "Break included" : "No break included"}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-gray-600 text-center">
          You have the ability to override the practice's opening hours on your scheduler and booking page by setting your own availability timetable.{" "}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">Click here</a> to define your personalized availability timetable.
        </p>
      </section>

      {/* Background Image Section */}
      <section className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6 text-center">Background Image</h3>
        
        {/* Current Background Preview */}
        <div className="mb-6">
          <div className="w-full h-48 rounded-lg border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-12 h-12 border-2 border-gray-400 rounded transform rotate-45"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-blue-50 mb-4">
          <p className="text-gray-600 mb-2">Drag a file here or click to choose an image from your computer.</p>
          <input type="file" accept="image/jpeg,image/jpg,image/png,image/bmp" className="hidden" id="bg-upload" />
          <label htmlFor="bg-upload" className="inline-block mt-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            No file chosen
          </label>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-1">Restrictions:</p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>jpg, jpeg, png, or bmp format</li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Select a background image for your practice. This image will be used on your booking and web pages.
        </p>

        <button className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete existing background image
        </button>

        <div className="mt-6 text-center">
          <button className="px-8 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition">
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

