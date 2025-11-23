"use client";

import { useState } from "react";
import ColibGeneralSettings from "@/components/settings/ColibGeneralSettings";
import ColibAppointmentsSettings from "@/components/settings/ColibAppointmentsSettings";
import ColibBookingPageSettings from "@/components/settings/ColibBookingPageSettings";
import ColibWaitlistSettings from "@/components/settings/ColibWaitlistSettings";
import ColibTeamSettings from "@/components/settings/ColibTeamSettings";
import ColibCommunicationsSettings from "@/components/settings/ColibCommunicationsSettings";
import ColibClientsSettings from "@/components/settings/ColibClientsSettings";
import ColibNotesSettings from "@/components/settings/ColibNotesSettings";
import ColibSchedulerSettings from "@/components/settings/ColibSchedulerSettings";
import ColibWebPageSettings from "@/components/settings/ColibWebPageSettings";
import ColibRecallsSettings from "@/components/settings/ColibRecallsSettings";
import ColibFormsSettings from "@/components/settings/ColibFormsSettings";
import ColibInvoicesSettings from "@/components/settings/ColibInvoicesSettings";
import ColibPaymentsSettings from "@/components/settings/ColibPaymentsSettings";
import ColibTelehealthSettings from "@/components/settings/ColibTelehealthSettings";
import ColibRoomsSettings from "@/components/settings/ColibRoomsSettings";
import ColibSecuritySettings from "@/components/settings/ColibSecuritySettings";
import ColibInventorySettings from "@/components/settings/ColibInventorySettings";
import ColibOnlineSalesSettings from "@/components/settings/ColibOnlineSalesSettings";
import ColibProfileSettings from "@/components/settings/ColibProfileSettings";
import ColibPasswordSettings from "@/components/settings/ColibPasswordSettings";
import ColibAvailabilitySettings from "@/components/settings/ColibAvailabilitySettings";
import ColibCalendarSyncSettings from "@/components/settings/ColibCalendarSyncSettings";
import ColibPersonalSecuritySettings from "@/components/settings/ColibPersonalSecuritySettings";
import ColibSignatureSettings from "@/components/settings/ColibSignatureSettings";

type AdminTab = "general" | "appointments" | "booking-page" | "waitlist" | "team" | "communications" | "clients" | "notes" | "scheduler" | "web-page" | "recalls" | "forms" | "invoices" | "payments" | "telehealth" | "rooms" | "security" | "inventory" | "online-sales";

type PersonalTab = "profile" | "password" | "availability" | "calendar-sync" | "security" | "signature";

export default function ColibSettingsPage() {
  const [activeAdminTab, setActiveAdminTab] = useState<AdminTab>("general");
  const [activePersonalTab, setActivePersonalTab] = useState<PersonalTab | null>(null);
  const [expandedPersonal, setExpandedPersonal] = useState(false);
  const [expandedAdmin, setExpandedAdmin] = useState(true);

  const personalTabs: { id: PersonalTab; label: string; icon: string }[] = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "password", label: "Password", icon: "🔒" },
    { id: "availability", label: "Availability", icon: "🕐" },
    { id: "calendar-sync", label: "Calendar Sync.", icon: "🔄" },
    { id: "security", label: "Security", icon: "🛡️" },
    { id: "signature", label: "Signature", icon: "✍️" },
  ];

  const adminTabs: { id: AdminTab; label: string; icon: string }[] = [
    { id: "general", label: "General", icon: "⚙️" },
    { id: "appointments", label: "Appointments", icon: "📅" },
    { id: "booking-page", label: "Booking Page", icon: "📖" },
    { id: "waitlist", label: "Waitlist", icon: "⏳" },
    { id: "team", label: "Team", icon: "👥" },
    { id: "communications", label: "Communications", icon: "💬" },
    { id: "clients", label: "Clients", icon: "👤" },
    { id: "notes", label: "Notes", icon: "📝" },
    { id: "scheduler", label: "Scheduler", icon: "📅" },
    { id: "web-page", label: "Web Page", icon: "🌐" },
    { id: "recalls", label: "Recalls", icon: "⏰" },
    { id: "forms", label: "Forms", icon: "📄" },
    { id: "invoices", label: "Invoices", icon: "🧾" },
    { id: "payments", label: "Payments", icon: "💳" },
    { id: "telehealth", label: "Telehealth", icon: "📹" },
    { id: "rooms", label: "Rooms", icon: "🏢" },
    { id: "security", label: "Security", icon: "🛡️" },
    { id: "inventory", label: "Inventory", icon: "📋" },
    { id: "online-sales", label: "Online sales", icon: "🛒" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-lime-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">CB</span>
            </div>
            <span className="text-gray-900 font-semibold text-lg">Colib</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Dashboard</a>
            <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Clients</a>
            <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Appointments</a>
            <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium">Billing</a>
            <a href="#" className="text-sm font-medium text-teal-600">Settings</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
          </button>
          <button>
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">MF</span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex w-full pt-16">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-4rem)]">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Settings</h2>
            
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search settings..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:border-teal-500"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Documentation Link */}
            <a
              href="/colib/documentation"
              className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition text-gray-700 hover:bg-gray-50 mb-4 border border-gray-200 bg-teal-50 hover:bg-teal-100"
            >
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-medium text-teal-700">Documentation</span>
            </a>
            
            {/* PERSONAL Section */}
            <div className="mb-6">
              <button
                onClick={() => setExpandedPersonal(!expandedPersonal)}
                className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2"
              >
                PERSONAL
                <svg
                  className={`w-4 h-4 transition-transform ${expandedPersonal ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedPersonal && (
                <div className="space-y-1">
                  {personalTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActivePersonalTab(tab.id);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${
                        activePersonalTab === tab.id
                          ? "bg-teal-50 text-teal-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ADMIN Section */}
            <div>
              <button
                onClick={() => setExpandedAdmin(!expandedAdmin)}
                className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2"
              >
                ADMIN
                <svg
                  className={`w-4 h-4 transition-transform ${expandedAdmin ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedAdmin && (
                <div className="space-y-1">
                  {adminTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveAdminTab(tab.id);
                        setActivePersonalTab(null);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition ${
                        activeAdminTab === tab.id
                          ? "bg-teal-50 text-teal-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          {activePersonalTab === null && activeAdminTab === "general" && <ColibGeneralSettings />}
          {activePersonalTab === null && activeAdminTab === "appointments" && <ColibAppointmentsSettings />}
          {activePersonalTab === null && activeAdminTab === "booking-page" && <ColibBookingPageSettings />}
          {activePersonalTab === null && activeAdminTab === "waitlist" && <ColibWaitlistSettings />}
          {activePersonalTab === null && activeAdminTab === "team" && <ColibTeamSettings />}
          {activePersonalTab === null && activeAdminTab === "communications" && <ColibCommunicationsSettings />}
          {activePersonalTab === null && activeAdminTab === "clients" && <ColibClientsSettings />}
          {activePersonalTab === null && activeAdminTab === "notes" && <ColibNotesSettings />}
          {activePersonalTab === null && activeAdminTab === "scheduler" && <ColibSchedulerSettings />}
          {activePersonalTab === null && activeAdminTab === "web-page" && <ColibWebPageSettings />}
          {activePersonalTab === null && activeAdminTab === "recalls" && <ColibRecallsSettings />}
          {activePersonalTab === null && activeAdminTab === "forms" && <ColibFormsSettings />}
          {activePersonalTab === null && activeAdminTab === "invoices" && <ColibInvoicesSettings />}
          {activePersonalTab === null && activeAdminTab === "payments" && <ColibPaymentsSettings />}
          {activePersonalTab === null && activeAdminTab === "telehealth" && <ColibTelehealthSettings />}
          {activePersonalTab === null && activeAdminTab === "rooms" && <ColibRoomsSettings />}
          {activePersonalTab === null && activeAdminTab === "security" && <ColibSecuritySettings />}
          {activePersonalTab === null && activeAdminTab === "inventory" && <ColibInventorySettings />}
          {activePersonalTab === null && activeAdminTab === "online-sales" && <ColibOnlineSalesSettings />}
          {activePersonalTab === "profile" && <ColibProfileSettings />}
          {activePersonalTab === "password" && <ColibPasswordSettings />}
          {activePersonalTab === "availability" && <ColibAvailabilitySettings />}
          {activePersonalTab === "calendar-sync" && <ColibCalendarSyncSettings />}
          {activePersonalTab === "security" && <ColibPersonalSecuritySettings />}
          {activePersonalTab === "signature" && <ColibSignatureSettings />}
          {activePersonalTab === null && activeAdminTab !== "general" && activeAdminTab !== "appointments" && activeAdminTab !== "booking-page" && activeAdminTab !== "waitlist" && activeAdminTab !== "team" && activeAdminTab !== "communications" && activeAdminTab !== "clients" && activeAdminTab !== "notes" && activeAdminTab !== "scheduler" && activeAdminTab !== "web-page" && activeAdminTab !== "recalls" && activeAdminTab !== "forms" && activeAdminTab !== "invoices" && activeAdminTab !== "payments" && activeAdminTab !== "telehealth" && activeAdminTab !== "rooms" && activeAdminTab !== "security" && activeAdminTab !== "inventory" && activeAdminTab !== "online-sales" && (
            <div className="text-center text-gray-500 mt-20">
              <p>Select a setting from the sidebar to get started</p>
            </div>
          )}
          {activePersonalTab !== null && activePersonalTab !== "profile" && activePersonalTab !== "password" && activePersonalTab !== "availability" && activePersonalTab !== "calendar-sync" && activePersonalTab !== "security" && activePersonalTab !== "signature" && (
            <div className="text-center text-gray-500 mt-20">
              <p>Personal settings for {activePersonalTab} coming soon</p>
            </div>
          )}
        </main>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-teal-500 text-white shadow-lg flex items-center justify-center hover:bg-teal-600 transition">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

