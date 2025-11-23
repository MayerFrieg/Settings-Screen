"use client";

import { useState } from "react";

export default function JaneAppOnlineBooking() {
  const [onlineBookingPolicy, setOnlineBookingPolicy] = useState("Online booking allowed");
  const [allowSameDayBooking, setAllowSameDayBooking] = useState(true);
  const [doNotAllowBookingWithin, setDoNotAllowBookingWithin] = useState("4 hours");
  const [showOpeningsAsContactToBook, setShowOpeningsAsContactToBook] = useState(false);
  const [lateCancellationPeriod, setLateCancellationPeriod] = useState("24 hours");
  const [allowCancellations, setAllowCancellations] = useState(true);
  const [upcomingAppointmentsLimit, setUpcomingAppointmentsLimit] = useState("No Limit");
  const [allowRelatedProfiles, setAllowRelatedProfiles] = useState(false);
  const [promptForAdditionalInfo, setPromptForAdditionalInfo] = useState(true);
  const [bookByTreatment, setBookByTreatment] = useState(true);
  const [bookByStaffMember, setBookByStaffMember] = useState(true);
  const [browseByMonth, setBrowseByMonth] = useState(true);
  const [displayPhoneNumber, setDisplayPhoneNumber] = useState(true);
  const [displayEmailAddress, setDisplayEmailAddress] = useState(true);
  const [patientPreferredTimeZone, setPatientPreferredTimeZone] = useState(true);
  const [metaDescription, setMetaDescription] = useState("");
  const [practitionerOrder, setPractitionerOrder] = useState("Alphabetical");
  const [marketingEmailsOptIn, setMarketingEmailsOptIn] = useState("Yes, I would like to receive news and special promotions by email");
  const [signInWithSocial, setSignInWithSocial] = useState(true);

  const locations = [{ name: "GraceHealth", checked: true }];
  const disciplines = [
    { name: "Occupational Therapy", checked: true },
    { name: "Physiotherapy", checked: true },
    { name: "Psychology", checked: true },
    { name: "Psychotherapy", checked: true },
  ];
  const staff = [{ name: "Grace Canada", checked: true }];
  const treatments = [
    { name: "ADL Training (Psychotherapy) (45min)", checked: true },
    { name: "Community-Based Session (Psychotherapy) (45min)", checked: true },
    { name: "Couples Therapy - 60 Minutes (Psychotherapy) (60min)", checked: false },
    { name: "Extended Treatment Session (Psychotherapy) (45min)", checked: true },
    { name: "Family Therapy - 60 Minutes (Psychotherapy) (60min)", checked: false },
    { name: "Follow-up Treatment (Psychotherapy) (30min)", checked: true },
    { name: "Group Exercise Class (Psychotherapy) (45min)", checked: true },
    { name: "Treatment Session (Psychotherapy) (45min)", checked: true },
    { name: "Work Capacity Evaluation (Psychotherapy) (180min)", checked: true },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-light text-gray-400">Online Booking</h1>
          <p className="text-gray-500 text-sm mt-1">Listed Items</p>
        </div>
        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save
        </button>
      </div>

      {/* Online Booking Policy */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Online Booking Policy</h2>
        <div className="flex items-start justify-between mb-4">
          <p className="text-gray-700 flex-1">
            Signed in users can still book online if 'Online booking allowed' is set on their profile
          </p>
          <select
            value={onlineBookingPolicy}
            onChange={(e) => setOnlineBookingPolicy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>Online booking allowed</option>
            <option>Use the default</option>
            <option>Online booking disabled</option>
          </select>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-blue-800">
              You currently have 0 patient profiles set to use the default, 0 patient profiles set to allowed, and 0 patient profiles set to disabled. To see which profiles are allowed or disabled, please export the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">Patient List Report</a>.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Set All To Use The Default
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Set All To Allowed
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Set All To Disabled
          </button>
        </div>
      </div>

      {/* Locations */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Locations available to be booked online</h2>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={location.checked}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{location.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Disciplines */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Disciplines available to be booked online <span className="text-red-500">- Required</span>
        </h2>
        <div className="space-y-2">
          {disciplines.map((discipline, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={discipline.checked}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{discipline.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Staff */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Staff available to be booked online</h2>
        <div className="space-y-2">
          {staff.map((member, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={member.checked}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{member.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Treatments */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Treatments available to be booked online</h2>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {treatments.map((treatment, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={treatment.checked}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{treatment.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Pre-payment & Deposits */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Pre-payment & Deposits</h2>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 mb-2">
              Prevent no-shows with Jane Payments. With Jane Payments, you can require a card-on-file or deposit for online bookings, which will prevent no-shows (and let you collect fees if they happen). You can also easily take payments for virtual visits and recurring membership fees.
            </p>
            <a href="#" className="text-teal-600 hover:text-teal-700 underline text-sm font-medium">
              Learn more about Jane Payments
            </a>
          </div>
        </div>
      </div>

      {/* Booking, Cancelling, & Relationships */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Booking, Cancelling, & Relationships</h2>
        
        <div className="space-y-6">
          {/* Allow same day booking */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowSameDayBooking}
                onChange={(e) => setAllowSameDayBooking(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Allow same day booking</span>
            </label>
          </div>

          {/* Do not allow booking within */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <label className="text-gray-700 font-medium">Do not allow booking within:</label>
              <select
                value={doNotAllowBookingWithin}
                onChange={(e) => setDoNotAllowBookingWithin(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
                <option>6 hours</option>
                <option>12 hours</option>
                <option>24 hours</option>
              </select>
            </div>
            <label className="flex items-center gap-3 cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={showOpeningsAsContactToBook}
                onChange={(e) => setShowOpeningsAsContactToBook(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">Show openings within unallowed period as "Contact to Book"</span>
            </label>
            {!showOpeningsAsContactToBook && (
              <p className="text-gray-500 text-sm mt-1 ml-7">Nothing will be displayed if unchecked.</p>
            )}
          </div>

          {/* Late Cancellation Period */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <label className="text-gray-700 font-medium">Late Cancellation Period:</label>
              <select
                value={lateCancellationPeriod}
                onChange={(e) => setLateCancellationPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>12 hours</option>
                <option>24 hours</option>
                <option>48 hours</option>
                <option>72 hours</option>
                <option>1 week</option>
              </select>
            </div>
            <p className="text-gray-600 text-sm ml-7">
              Choose a time period for your cancellation policy. Patients will only be able to cancel an appointment on their 'My Account' page outside of this period. Otherwise they are prompted to call to cancel.
            </p>
          </div>

          {/* Allow cancellations */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowCancellations}
                onChange={(e) => setAllowCancellations(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Allow cancellations</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Allow patients to cancel and reschedule appointments on their My Account page, if the appointment is not within the late cancellation period.
            </p>
          </div>

          {/* Upcoming appointments limit */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <label className="text-gray-700 font-medium">Upcoming appointments limit:</label>
              <select
                value={upcomingAppointmentsLimit}
                onChange={(e) => setUpcomingAppointmentsLimit(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>No Limit</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
            <p className="text-gray-600 text-sm ml-7">
              Set the maximum number of upcoming appointments the patient can book.
            </p>
          </div>

          {/* Allow Patients to add related profiles */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={allowRelatedProfiles}
                onChange={(e) => setAllowRelatedProfiles(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Allow Patients to add related profiles</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              If enabled, patients will have an option to create a profile for a family member in online booking.
            </p>
          </div>

          {/* Prompt Patients for additional info */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={promptForAdditionalInfo}
                onChange={(e) => setPromptForAdditionalInfo(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Prompt Patients for additional info after booking online.</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              You can adjust the language for this field in the Language Settings.
            </p>
            <p className="text-gray-700 text-sm mt-1 ml-7 font-medium">
              Current Prompt: What is the reason for your visit?
            </p>
          </div>
        </div>
      </div>

      {/* Display Preferences */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Display Preferences</h2>
        
        <div className="space-y-6">
          {/* Book by Treatment */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={bookByTreatment}
                onChange={(e) => setBookByTreatment(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Book by Treatment</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Allow patients to browse availability by treatments and book with any staff member that has availability.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2 ml-7">
              <p className="text-sm text-blue-800">
                You currently have 13 treatments in 1 discipline that are available to be booked online. Head over to{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">Treatments</a> to configure which treatments are available.
              </p>
            </div>
          </div>

          {/* Book by Staff Member */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={bookByStaffMember}
                onChange={(e) => setBookByStaffMember(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Book by Staff Member</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Allow patients to choose a specific staff member in the online booking flow.
            </p>
          </div>

          {/* Browse by Month */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={browseByMonth}
                onChange={(e) => setBrowseByMonth(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Browse by Month</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Allow online booking availability to be browsed by month.
            </p>
          </div>

          {/* Display Phone Number */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={displayPhoneNumber}
                onChange={(e) => setDisplayPhoneNumber(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Display Phone Number</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Display the phone number listed in your location settings in online booking, "Contact Us to Book" messages, invoices, receipts, and printed documents.
            </p>
          </div>

          {/* Display Email Address */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={displayEmailAddress}
                onChange={(e) => setDisplayEmailAddress(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Display Email Address</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Display the email address listed in your location settings in online booking, "Contact Us to Book" messages, invoices, receipts, and printed documents.
            </p>
          </div>

          {/* Patient's Preferred Time Zone */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={patientPreferredTimeZone}
                onChange={(e) => setPatientPreferredTimeZone(e.target.checked)}
                className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span className="text-gray-700 font-medium">Patient's Preferred Time Zone</span>
            </label>
            <p className="text-gray-600 text-sm mt-1 ml-7">
              Allow patients to select a preferred time zone in the clinic settings. This setting affects Wait List requests, upcoming and past appointments, and email communications.
            </p>
          </div>

          {/* Meta description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta description:</label>
            <input
              type="text"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter meta description for search engines"
            />
            <p className="text-gray-600 text-sm mt-1">
              This description will appear in Google search results and Facebook posts.
            </p>
          </div>

          {/* Practitioner order */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <label className="text-sm font-medium text-gray-700">Practitioner order:</label>
              <select
                value={practitionerOrder}
                onChange={(e) => setPractitionerOrder(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
              >
                <option>Alphabetical</option>
                <option>By Availability</option>
                <option>Custom Order</option>
              </select>
            </div>
            <p className="text-gray-600 text-sm">
              What order do you want to display the Practitioners on the online booking page.
            </p>
          </div>
        </div>
      </div>

      {/* Marketing Emails Opt In */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Marketing Emails Opt In</h2>
        <p className="text-gray-700 mb-4">
          Your patients will be given the opportunity throughout the online booking experience to opt-in to non-transactional (aka marketing) emails from your company. Please ensure that you phrase this in a way that makes it clear that they are agreeing to receive these emails from you, in accordance with local anti-spam legislation.
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Opt-in message:</label>
          <textarea
            value={marketingEmailsOptIn}
            onChange={(e) => setMarketingEmailsOptIn(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800">
            You currently have 0 patient profiles set to opted in, and 0 patient profiles set to opted out.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Set All To Opted In
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
            Set All To Opted Out
          </button>
        </div>
      </div>

      {/* Patient Sign In Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Patient Sign In Settings</h2>
        <p className="text-gray-600 text-sm mb-4">Sign In with Google, Facebook, Twitter</p>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={signInWithSocial}
            onChange={(e) => setSignInWithSocial(e.target.checked)}
            className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <span className="text-gray-700 font-medium">Sign In with Google, Facebook, Twitter</span>
        </label>
        <p className="text-gray-600 text-sm mt-1 ml-7">
          Allow staff and patients to sign in using their Twitter, Facebook, or Google account. This is simply for convenience so they do not need to remember another username and password.
        </p>
      </div>
    </div>
  );
}

