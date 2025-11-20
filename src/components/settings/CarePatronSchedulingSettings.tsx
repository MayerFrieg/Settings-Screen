"use client";

import { useState } from "react";
import { SettingsSection } from "./CarePatronBlocks";
import CarePatronDocumentation from "./CarePatronDocumentation";

type Tab = "locations" | "services" | "online";

export default function CarePatronSchedulingSettings() {
  const [activeTab, setActiveTab] = useState<Tab>("locations");

  return (
    <div className="space-y-6">
      {/* Documentation */}
      <CarePatronDocumentation section="scheduling" />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600">
        <span>Settings</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Scheduling</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Scheduling</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New collection
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New location
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200">
        {[
          { id: "locations" as Tab, label: "Locations" },
          { id: "services" as Tab, label: "Services" },
          { id: "online" as Tab, label: "Online Booking" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 pb-3 px-1 text-sm font-medium transition ${
              activeTab === tab.id
                ? "border-teal-500 text-gray-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "locations" && <LocationsTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "online" && <OnlineBookingTab />}
      </div>
    </div>
  );
}

function LocationsTab() {
  return (
    <div className="space-y-6">
      <SettingsSection
        title="Locations"
        description="Set up physical and virtual locations with specific addresses, room names, and types of virtual spaces to make scheduling appointments and video calls easier."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900">Carepatron</p>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
                    Virtual location
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">Video conferencing</p>
                <p className="text-sm text-gray-600">POS 02</p>
              </div>
            </div>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

function ServicesTab() {
  const services = [
    { name: "Diagnostic Evaluation", code: "90791", duration: "50 mins", price: "$100.00", color: "bg-pink-500" },
    { name: "Family Therapy", code: "90847", duration: "50 mins", price: "$100.00", color: "bg-green-500" },
    { name: "[Copy] Family Therapy", code: "90847", duration: "50 mins", price: "$100.00", color: "bg-green-500" },
    { name: "Group Therapy", code: "90853", duration: "50 mins", price: "$100.00", color: "bg-blue-500" },
    { name: "Initial Consultation - No Charge", code: "", duration: "15 mins", price: "$0.00", color: "bg-pink-500" },
    { name: "Therapeutic activities", code: "97530", duration: "50 mins", price: "$100.00", color: "bg-purple-500" },
    { name: "Therapeutic exercises", code: "97110", duration: "50 mins", price: "$100.00", color: "bg-cyan-500" },
    { name: "Therapy Add-on, 60 min", code: "90838", duration: "50 mins", price: "$0.00", color: "bg-pink-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search services"
          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />
      </div>

      {/* Services List */}
      <div className="space-y-2 rounded-lg border border-gray-200 bg-white">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b border-gray-100 p-4 last:border-b-0 hover:bg-gray-50"
          >
            <div className={`h-10 w-10 rounded ${service.color} flex-shrink-0`}></div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">{service.name}</p>
              <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
                {service.code && <span>{service.code}</span>}
                <span>•</span>
                <span>{service.duration}</span>
                <span>•</span>
                <span className="font-medium">{service.price}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnlineBookingTab() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Booking & Cancellation Policies */}
      <SettingsSection
        title="Booking & cancellation policies"
        description=""
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Cancellation policy</p>
              <p className="mt-1 text-sm text-gray-400">No cancellation policy added</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Cancellation period without penalty</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Minimum cancellation time</p>
              <p className="mt-1 text-sm font-medium text-gray-900">Allow at least 24 hours before appointment</p>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Payment Settings */}
      <SettingsSection
        title="Payment settings"
        description=""
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="rounded-lg bg-teal-50 border border-teal-200 p-3">
            <div className="flex gap-2">
              <svg className="h-5 w-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-teal-800">
                Connect to Stripe to receive online booking payments and streamline your payment process
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Collect payments for services at the time of online booking to secure and streamline payments
            </p>
            <div>
              <p className="text-sm text-gray-600">Process payments at time of booking</p>
              <p className="mt-1 text-sm font-medium text-gray-900">No</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Require credit card details</p>
              <p className="mt-1 text-sm font-medium text-gray-900">No</p>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Booking Policies */}
      <SettingsSection
        title="Booking policies"
        description="Set when online bookings can be made by clients"
      >
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Minimum booking time</p>
            <p className="mt-1 text-sm text-gray-400">No time set</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Maximum booking time</p>
            <p className="mt-1 text-sm font-medium text-gray-900">Clients can schedule up to 12 months into the future</p>
          </div>
        </div>
      </SettingsSection>

      {/* Customize Appearance */}
      <SettingsSection
        title="Customize appearance"
        description="Customize your online booking appearance to match your brand and optimise how your services are displayed to clients."
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Show collections</p>
              <p className="mt-1 text-sm font-medium text-gray-900">No</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Show description on service bookings</p>
              <p className="mt-1 text-sm font-medium text-gray-900">No</p>
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Booking Requests */}
      <SettingsSection
        title="Booking requests"
        description="Control how booking requests are handled when clients book online."
      >
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Auto-accept all bookings</p>
            <p className="mt-1 text-sm font-medium text-gray-900">No</p>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

