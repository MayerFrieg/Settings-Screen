"use client";

import { useState } from "react";

export default function JaneAppLanguage() {
  const [locale, setLocale] = useState("English - North America");
  const [patientTerm, setPatientTerm] = useState("Patient");
  const [treatmentTerm, setTreatmentTerm] = useState("Treatment");
  const [addressStyle, setAddressStyle] = useState("Casually (by first name)");
  
  const [clienteleTerm, setClienteleTerm] = useState("Patient");
  const [accountTerm, setAccountTerm] = useState("Account");
  const [honorifics, setHonorifics] = useState("Dr.\nMrs.\nMs.\nMiss\nMr.\nMx.");
  const [healthNumberTerm, setHealthNumberTerm] = useState("Personal Health Number");
  const [servicesTerm, setServicesTerm] = useState("Treatment");
  const [bookingNotice, setBookingNotice] = useState("");
  const [referralSources, setReferralSources] = useState("Friend\nPhysician / Specialist\nOnline Ad\nWeb Search\nOther");
  const [invoiceDetails, setInvoiceDetails] = useState("%[address] %[phone] %[email]");
  const [callToCancelMessage, setCallToCancelMessage] = useState("This appointment is within the cancellation fee period. Please call %[company_telephone] to cancel.");
  const [cancellationReasons, setCancellationReasons] = useState("I need to reschedule and will re-schedule\nI no longer require this appointment\nI was unsatisfied with my last appointment");
  const [welcomeHeader, setWelcomeHeader] = useState("Welcome to our online booking site");
  const [additionalBookingInfo, setAdditionalBookingInfo] = useState("What is the reason for your visit?");
  const [ourTeamLink, setOurTeamLink] = useState("Our Team");
  const [bookByPractitioner, setBookByPractitioner] = useState("Book by Practitioner");
  const [bookByPractitionerDesc, setBookByPractitionerDesc] = useState("Select a practitioner below to see their full list of %[treatments_term] and availability.");
  const [agreeToCancellationPolicy, setAgreeToCancellationPolicy] = useState("Please note that by booking on our website, you are agreeing to the cancellation policy below.");
  const [cancellationPolicy, setCancellationPolicy] = useState("Your appointment time is reserved just for you. A late cancellation or missed visit leaves a hole in the practitioner's day that could have been filled by another patient. As such, we require %[cancellation_period_in_words] notice for any cancellations or changes to your appointment. Patients who provide less than %[cancellation_period_in_words] notice, or miss their appointment, will be charged a cancellation fee to the card on file.");
  const [thanksForChoosing, setThanksForChoosing] = useState("Thanks for choosing %[company_name].");
  const [emailCancellationPolicy, setEmailCancellationPolicy] = useState("Please note that cancellations within %[cancellation_period_in_words] of your appointment are subject to a cancellation fee.");
  const [massWelcomeEmail, setMassWelcomeEmail] = useState("Welcome to our new online booking system. With your %[phrases_account], you will be able to schedule appointments, cancel upcoming appointments, and view your appointment history. The link below will let you set up a username and password for your existing %[company] profile.");
  const [welcomeEmailIntro, setWelcomeEmailIntro] = useState("Please click the link below to set up access to your %[company] %[phrases_account].");
  const [welcomeEmailDetails, setWelcomeEmailDetails] = useState("");
  const [reminderEmailDetails, setReminderEmailDetails] = useState("");
  const [thanksForBookingEmailDetails, setThanksForBookingEmailDetails] = useState("");
  const [cancellationNotificationDetails, setCancellationNotificationDetails] = useState("");

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-light text-gray-400">Language</h1>

      {/* General Language Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">General Language Settings</h2>
        
        {/* Locale */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Locale <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose a language. This will affect number and currency formats, and if available, will display all patient facing pages in the chosen language. If you don't see your region listed, contact us and we'll see what we can do for you!
          </p>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>English - North America</option>
            <option>English - United Kingdom</option>
            <option>French - Canada</option>
            <option>Spanish - Mexico</option>
          </select>
        </div>

        {/* How do you refer to your patients? */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How do you refer to your patients? <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose the word that you typically use to refer to your patients.
          </p>
          <select
            value={patientTerm}
            onChange={(e) => setPatientTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>Patient</option>
            <option>Client</option>
            <option>Customer</option>
          </select>
        </div>

        {/* How do you refer to the treatments you offer? */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How do you refer to the treatments you offer? <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose the word that you typically use to describe the treatments that your customers book.
          </p>
          <select
            value={treatmentTerm}
            onChange={(e) => setTreatmentTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>Treatment</option>
            <option>Service</option>
            <option>Session</option>
          </select>
        </div>

        {/* How do you address your patients? */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How do you address your patients? <span className="text-red-500">- Required</span>
          </label>
          <p className="text-gray-600 text-sm mb-3">
            Choose how you would like Jane to greet your patients in emails and online booking. Friendly and casually by first name (Hello Jane) or formally (Hello Ms. App)
          </p>
          <select
            value={addressStyle}
            onChange={(e) => setAddressStyle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            <option>Casually (by first name)</option>
            <option>Formally (with honorific)</option>
          </select>
        </div>

        <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors">
          Save
        </button>
      </div>

      {/* Customize Language Used in Jane */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Customize Language Used in Jane</h2>
        <p className="text-gray-600 text-sm mb-6">Click any item below to customize the language used in Jane.</p>

        <div className="space-y-6">
          {/* How to refer to your clientele? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How to refer to your clientele?</label>
            <input
              type="text"
              value={clienteleTerm}
              onChange={(e) => setClienteleTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Enter the singular form of the word you use to refer to your clientele. Ex: Patient, Client, Customer</p>
          </div>

          {/* How to refer to your account? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How to refer to your account?</label>
            <input
              type="text"
              value={accountTerm}
              onChange={(e) => setAccountTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Enter the singular form of the word you use to refer to account. Ex: Account, Profile</p>
          </div>

          {/* Prefixes / Honorifics */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prefixes / Honorifics</label>
            <textarea
              value={honorifics}
              onChange={(e) => setHonorifics(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Edit the list of honorifics you would like to include in the prefix dropdowns throughout Jane for both staff and customers. Enter one per line.</p>
          </div>

          {/* What do you call the patient's health number? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What do you call the patient's health number?</label>
            <input
              type="text"
              value={healthNumberTerm}
              onChange={(e) => setHealthNumberTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Enter the term you use for the number associated to the patient's account</p>
          </div>

          {/* How to refer to your services / treatments? */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How to refer to your services / treatments?</label>
            <input
              type="text"
              value={servicesTerm}
              onChange={(e) => setServicesTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Enter the singular form of the word you use to refer to the services you offer. Ex: Treatment, Service, Session</p>
          </div>

          {/* Notice / Message on Online Booking Pages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notice / Message on Online Booking Pages</label>
            <textarea
              value={bookingNotice}
              onChange={(e) => setBookingNotice(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This notice will appear at the top of your online booking pages and can be used to communicate important information. Ex. We've Moved! or Holiday Hours</p>
          </div>

          {/* Referral Sources */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Referral Sources</label>
            <textarea
              value={referralSources}
              onChange={(e) => setReferralSources(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: These options will be available to patients during the sign up process. Enter one option per line.</p>
          </div>

          {/* Patient Invoice Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Patient Invoice Details</label>
            <input
              type="text"
              value={invoiceDetails}
              onChange={(e) => setInvoiceDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: These are the patient details that will display on receipts, invoices, and statements.</p>
          </div>

          {/* Patient's My Account: Call To Cancel Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Patient's My Account: Call To Cancel Message</label>
            <textarea
              value={callToCancelMessage}
              onChange={(e) => setCallToCancelMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This message will appear in a patient's My Account area when they hover over the 'Call To Cancel' text if the appointment is within the late-cancellation period.</p>
          </div>

          {/* Patient's My Account: Cancellation Reasons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Patient's My Account: Cancellation Reasons</label>
            <textarea
              value={cancellationReasons}
              onChange={(e) => setCancellationReasons(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: These options will be available to patients when they cancel appointments through their My Account area.</p>
          </div>

          {/* Online Booking: Welcome Header */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Welcome Header</label>
            <input
              type="text"
              value={welcomeHeader}
              onChange={(e) => setWelcomeHeader(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This short title appears at the top of your online booking home page.</p>
          </div>

          {/* Additional Booking Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Booking Information</label>
            <input
              type="text"
              value={additionalBookingInfo}
              onChange={(e) => setAdditionalBookingInfo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This question or prompt can be used to request additional information from patients when they are booking appointments. Because this note will appear as an administrative note on the appointment, please don't ask for any sensitive information.</p>
          </div>

          {/* Online Booking: Our Team Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Our Team Link</label>
            <input
              type="text"
              value={ourTeamLink}
              onChange={(e) => setOurTeamLink(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: The first item in the discipline navigation list in your online booking. Links to your main online booking landing page.</p>
          </div>

          {/* Online Booking: Book by Practitioner */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Book by Practitioner</label>
            <input
              type="text"
              value={bookByPractitioner}
              onChange={(e) => setBookByPractitioner(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This heading appears above the columns of staff in a discipline's online booking page.</p>
          </div>

          {/* Online Booking: Book by Practitioner - Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Book by Practitioner - Description</label>
            <input
              type="text"
              value={bookByPractitionerDesc}
              onChange={(e) => setBookByPractitionerDesc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This paragraph appears with the "Book by Practitioner" heading.</p>
          </div>

          {/* Online Booking: Agree To Cancellation Policy */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Agree To Cancellation Policy</label>
            <textarea
              value={agreeToCancellationPolicy}
              onChange={(e) => setAgreeToCancellationPolicy(e.target.value)}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears on Online Booking "Thanks for Booking" page.</p>
          </div>

          {/* Online Booking: Cancellation Policy */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Online Booking: Cancellation Policy</label>
            <textarea
              value={cancellationPolicy}
              onChange={(e) => setCancellationPolicy(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Cancellation policy appears on the Online Booking "Thanks for Booking" page.</p>
          </div>

          {/* Phrases: Thanks For Choosing */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phrases: Thanks For Choosing</label>
            <input
              type="text"
              value={thanksForChoosing}
              onChange={(e) => setThanksForChoosing(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This phrase appears at the bottom of all emails.</p>
          </div>

          {/* Email: Cancellation Policy */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email: Cancellation Policy</label>
            <input
              type="text"
              value={emailCancellationPolicy}
              onChange={(e) => setEmailCancellationPolicy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This cancellation policy appears in all appointment related emails sent to patients.</p>
          </div>

          {/* Mass Welcome Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mass Welcome Email</label>
            <textarea
              value={massWelcomeEmail}
              onChange={(e) => setMassWelcomeEmail(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: This text appears in the mass welcome email that you can send to your entire patient list.</p>
          </div>

          {/* Welcome Email: Intro */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Welcome Email: Intro</label>
            <input
              type="text"
              value={welcomeEmailIntro}
              onChange={(e) => setWelcomeEmailIntro(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears at the top of the welcome email.</p>
          </div>

          {/* Welcome Email: Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Welcome Email: Details</label>
            <textarea
              value={welcomeEmailDetails}
              onChange={(e) => setWelcomeEmailDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears in the body text of the welcome email.</p>
          </div>

          {/* Reminder Email: Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Email: Details</label>
            <textarea
              value={reminderEmailDetails}
              onChange={(e) => setReminderEmailDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears in the body text of the reminder emails.</p>
          </div>

          {/* Thanks for Booking Email: Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thanks for Booking Email: Details</label>
            <textarea
              value={thanksForBookingEmailDetails}
              onChange={(e) => setThanksForBookingEmailDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears in the body text of the thanks for booking emails.</p>
          </div>

          {/* Cancellation Notification: Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cancellation Notification: Details</label>
            <textarea
              value={cancellationNotificationDetails}
              onChange={(e) => setCancellationNotificationDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-gray-500 text-xs mt-1">How it's Used: Appears in cancellation notification emails.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

