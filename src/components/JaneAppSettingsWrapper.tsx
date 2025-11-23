"use client";

import { useState } from "react";
import JaneAppLayout from "./JaneAppLayout";
import JaneAppDashboard from "./settings/JaneAppDashboard";
import JaneAppAccountRecommendations from "./settings/JaneAppAccountRecommendations";
import JaneAppPayments from "./settings/JaneAppPayments";
import JaneAppAddressBook from "./settings/JaneAppAddressBook";
import JaneAppCreateEntry from "./settings/JaneAppCreateEntry";
import JaneAppSubscription from "./settings/JaneAppSubscription";
import JaneAppClinicInfo from "./settings/JaneAppClinicInfo";
import JaneAppLocations from "./settings/JaneAppLocations";
import JaneAppCreateLocation from "./settings/JaneAppCreateLocation";
import JaneAppSecurity from "./settings/JaneAppSecurity";
import JaneAppBranding from "./settings/JaneAppBranding";
import JaneAppLanguage from "./settings/JaneAppLanguage";
import JaneAppEmails from "./settings/JaneAppEmails";
import JaneAppMassWelcomeEmail from "./settings/JaneAppMassWelcomeEmail";
import JaneAppOnlineBooking from "./settings/JaneAppOnlineBooking";
import JaneAppRemindersNotifications from "./settings/JaneAppRemindersNotifications";
import JaneAppAddReminder from "./settings/JaneAppAddReminder";
import JaneAppScheduleSettings from "./settings/JaneAppScheduleSettings";
import JaneAppFormsSurveys from "./settings/JaneAppFormsSurveys";
import JaneAppNewIntakeForm from "./settings/JaneAppNewIntakeForm";
import JaneAppClinicalSurveys from "./settings/JaneAppClinicalSurveys";
import JaneAppNewClinicalSurvey from "./settings/JaneAppNewClinicalSurvey";
import JaneAppIntegrations from "./settings/JaneAppIntegrations";
import JaneAppWorkshop from "./settings/JaneAppWorkshop";

type ActiveView = "dashboard" | "account-recommendations" | "jane-payments" | "address-book" | "create-entry" | "jane-subscription" | "clinic-info" | "locations" | "create-location" | "security" | "branding" | "language" | "emails" | "mass-welcome-email" | "online-booking" | "reminders-notifications" | "add-reminder" | "schedule-settings" | "forms-surveys" | "new-intake-form" | "clinical-surveys" | "new-clinical-survey" | "integrations" | "workshop";

export default function JaneAppSettingsWrapper() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");

  const handleMenuItemClick = (view: ActiveView) => {
    setActiveView(view);
  };

  const handleCreateEntry = () => {
    setActiveView("create-entry");
  };

  const handleCancelCreateEntry = () => {
    setActiveView("address-book");
  };

  const handleCreateLocation = () => {
    setActiveView("create-location");
  };

  const handleCancelCreateLocation = () => {
    setActiveView("locations");
  };

  const handleAddReminder = () => {
    setActiveView("add-reminder");
  };

  const handleCancelAddReminder = () => {
    setActiveView("reminders-notifications");
  };

  const handleViewForms = () => {
    setActiveView("new-intake-form");
  };

  const handleReturnToForms = () => {
    setActiveView("forms-surveys");
  };

  const handleViewSurveys = () => {
    setActiveView("clinical-surveys");
  };

  const handleNewSurvey = () => {
    setActiveView("new-clinical-survey");
  };

  const handleReturnToSurveys = () => {
    setActiveView("clinical-surveys");
  };

  // Determine which menu item should be highlighted
  let activeMenuItem: ActiveView = activeView;
  if (activeView === "create-entry") {
    activeMenuItem = "address-book";
  } else if (activeView === "create-location") {
    activeMenuItem = "locations";
  } else if (activeView === "add-reminder") {
    activeMenuItem = "reminders-notifications";
  } else if (activeView === "new-intake-form" || activeView === "clinical-surveys" || activeView === "new-clinical-survey") {
    activeMenuItem = "forms-surveys";
  }

  return (
    <JaneAppLayout activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick}>
      {activeView === "dashboard" && <JaneAppDashboard />}
      {activeView === "account-recommendations" && <JaneAppAccountRecommendations />}
      {activeView === "jane-payments" && <JaneAppPayments />}
      {activeView === "address-book" && <JaneAppAddressBook onCreateEntry={handleCreateEntry} />}
      {activeView === "create-entry" && <JaneAppCreateEntry onCancel={handleCancelCreateEntry} />}
      {activeView === "jane-subscription" && <JaneAppSubscription />}
      {activeView === "clinic-info" && <JaneAppClinicInfo />}
      {activeView === "locations" && <JaneAppLocations onCreateLocation={handleCreateLocation} />}
      {activeView === "create-location" && <JaneAppCreateLocation onCancel={handleCancelCreateLocation} />}
      {activeView === "security" && <JaneAppSecurity />}
      {activeView === "branding" && <JaneAppBranding />}
      {activeView === "language" && <JaneAppLanguage />}
      {activeView === "emails" && <JaneAppEmails />}
      {activeView === "mass-welcome-email" && <JaneAppMassWelcomeEmail />}
      {activeView === "online-booking" && <JaneAppOnlineBooking />}
      {activeView === "reminders-notifications" && <JaneAppRemindersNotifications onAddReminder={handleAddReminder} />}
      {activeView === "add-reminder" && <JaneAppAddReminder onCancel={handleCancelAddReminder} />}
      {activeView === "schedule-settings" && <JaneAppScheduleSettings />}
      {activeView === "forms-surveys" && <JaneAppFormsSurveys onViewForms={handleViewForms} onViewSurveys={handleViewSurveys} onNewSurvey={handleNewSurvey} />}
      {activeView === "new-intake-form" && <JaneAppNewIntakeForm onReturn={handleReturnToForms} />}
      {activeView === "clinical-surveys" && <JaneAppClinicalSurveys onNewSurvey={handleNewSurvey} onReturn={handleReturnToForms} />}
      {activeView === "new-clinical-survey" && <JaneAppNewClinicalSurvey onReturn={handleReturnToSurveys} />}
      {activeView === "integrations" && <JaneAppIntegrations />}
      {activeView === "workshop" && <JaneAppWorkshop />}
    </JaneAppLayout>
  );
}

