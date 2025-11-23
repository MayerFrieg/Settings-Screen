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
import JaneAppMessaging from "./settings/JaneAppMessaging";
import JaneAppStaffPermissions from "./settings/JaneAppStaffPermissions";
import JaneAppDashboardPermissions from "./settings/JaneAppDashboardPermissions";
import JaneAppSupervision from "./settings/JaneAppSupervision";
import JaneAppNewSupervisoryRelationship from "./settings/JaneAppNewSupervisoryRelationship";
import JaneAppWaitLists from "./settings/JaneAppWaitLists";
import JaneAppPatientFormFields from "./settings/JaneAppPatientFormFields";
import JaneAppTestPatient from "./settings/JaneAppTestPatient";
import JaneAppOnlineAppointmentsForGroups from "./settings/JaneAppOnlineAppointmentsForGroups";
import JaneAppAIScribe from "./settings/JaneAppAIScribe";
import JaneAppDisciplines from "./settings/JaneAppDisciplines";
import JaneAppNewDiscipline from "./settings/JaneAppNewDiscipline";
import JaneAppTreatments from "./settings/JaneAppTreatments";
import JaneAppNewTreatment from "./settings/JaneAppNewTreatment";
import JaneAppReassignTreatments from "./settings/JaneAppReassignTreatments";
import JaneAppProducts from "./settings/JaneAppProducts";
import JaneAppNewProduct from "./settings/JaneAppNewProduct";
import JaneAppBillingSettings from "./settings/JaneAppBillingSettings";
import JaneAppReconciliationDate from "./settings/JaneAppReconciliationDate";
import JaneAppAdjustments from "./settings/JaneAppAdjustments";
import JaneAppNewAdjustment from "./settings/JaneAppNewAdjustment";
import JaneAppEditAdjustment from "./settings/JaneAppEditAdjustment";
import JaneAppBillingCodes from "./settings/JaneAppBillingCodes";
import JaneAppNewBillingCode from "./settings/JaneAppNewBillingCode";
import JaneAppFees from "./settings/JaneAppFees";
import JaneAppNewFee from "./settings/JaneAppNewFee";
import JaneAppPaymentMethods from "./settings/JaneAppPaymentMethods";
import JaneAppNewPaymentMethod from "./settings/JaneAppNewPaymentMethod";
import JaneAppEditPaymentMethod from "./settings/JaneAppEditPaymentMethod";
import JaneAppIncomeCategories from "./settings/JaneAppIncomeCategories";
import JaneAppNewIncomeCategory from "./settings/JaneAppNewIncomeCategory";
import JaneAppEditIncomeCategory from "./settings/JaneAppEditIncomeCategory";
import JaneAppTaxes from "./settings/JaneAppTaxes";
import JaneAppNewTax from "./settings/JaneAppNewTax";
import JaneAppEditTax from "./settings/JaneAppEditTax";
import JaneAppMergeHistory from "./settings/JaneAppMergeHistory";
import JaneAppScheduleImport from "./settings/JaneAppScheduleImport";

type ActiveView = "dashboard" | "account-recommendations" | "jane-payments" | "address-book" | "create-entry" | "jane-subscription" | "clinic-info" | "locations" | "create-location" | "security" | "branding" | "language" | "emails" | "mass-welcome-email" | "online-booking" | "reminders-notifications" | "add-reminder" | "messaging" | "staff-permissions" | "dashboard-permissions" | "supervision" | "new-supervisory-relationship" | "wait-lists" | "patient-form-fields" | "test-patient" | "online-appointments-for-groups" | "ai-scribe" | "disciplines" | "new-discipline" | "treatments" | "new-treatment" | "reassign-treatments" | "products" | "new-product" | "billing-settings" | "reconciliation-date" | "adjustments" | "new-adjustment" | "edit-adjustment" | "billing-codes" | "new-billing-code" | "fees" | "new-fee" | "payment-methods" | "new-payment-method" | "edit-payment-method" | "income-categories" | "new-income-category" | "edit-income-category" | "taxes" | "new-tax" | "edit-tax" | "merge-history" | "schedule-import" | "schedule-settings" | "forms-surveys" | "new-intake-form" | "clinical-surveys" | "new-clinical-survey" | "integrations" | "workshop";

export default function JaneAppSettingsWrapper() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");
  const [editingAdjustmentId, setEditingAdjustmentId] = useState<string | null>(null);
  const [editingPaymentMethodId, setEditingPaymentMethodId] = useState<string | null>(null);
  const [editingIncomeCategoryId, setEditingIncomeCategoryId] = useState<string | null>(null);
  const [editingTaxId, setEditingTaxId] = useState<string | null>(null);

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

  const handleCreateSupervisoryRelationship = () => {
    setActiveView("new-supervisory-relationship");
  };

  const handleCancelSupervisoryRelationship = () => {
    setActiveView("supervision");
  };

  const handleSaveSupervisoryRelationship = (supervisor: string, supervisee: string) => {
    // In a real app, this would save the relationship
    console.log("Saving supervisory relationship:", { supervisor, supervisee });
    setActiveView("supervision");
  };

  const handleCreateDiscipline = () => {
    setActiveView("new-discipline");
  };

  const handleCancelDiscipline = () => {
    setActiveView("disciplines");
  };

  const handleSaveDiscipline = (discipline: any) => {
    // In a real app, this would save the discipline
    console.log("Saving discipline:", discipline);
    setActiveView("disciplines");
  };

  const handleCreateTreatment = () => {
    setActiveView("new-treatment");
  };

  const handleCancelTreatment = () => {
    setActiveView("treatments");
  };

  const handleSaveTreatment = (treatment: any) => {
    // In a real app, this would save the treatment
    console.log("Saving treatment:", treatment);
    setActiveView("treatments");
  };

  const handleReassignTreatments = () => {
    setActiveView("reassign-treatments");
  };

  const handleBackToTreatments = () => {
    setActiveView("treatments");
  };

  const handleCreateProduct = () => {
    setActiveView("new-product");
  };

  const handleCancelProduct = () => {
    setActiveView("products");
  };

  const handleSaveProduct = (product: any) => {
    // In a real app, this would save the product
    console.log("Saving product:", product);
    setActiveView("products");
  };

  const handleManageSuppliers = () => {
    // In a real app, this would navigate to suppliers management
    console.log("Manage suppliers");
  };

  const handleCreateAdjustment = () => {
    setActiveView("new-adjustment");
  };

  const handleCancelAdjustment = () => {
    setActiveView("adjustments");
    setEditingAdjustmentId(null);
  };

  const handleSaveAdjustment = (adjustment: any) => {
    // In a real app, this would save the adjustment
    console.log("Saving adjustment:", adjustment);
    setActiveView("adjustments");
    setEditingAdjustmentId(null);
  };

  const handleEditAdjustment = (id: string) => {
    setEditingAdjustmentId(id);
    setActiveView("edit-adjustment");
  };

  const handleArchiveAdjustment = () => {
    // In a real app, this would archive the adjustment
    console.log("Archiving adjustment:", editingAdjustmentId);
    setActiveView("adjustments");
    setEditingAdjustmentId(null);
  };

  const handleCreateBillingCode = () => {
    setActiveView("new-billing-code");
  };

  const handleCancelBillingCode = () => {
    setActiveView("billing-codes");
  };

  const handleSaveBillingCode = (billingCode: any) => {
    // In a real app, this would save the billing code
    console.log("Saving billing code:", billingCode);
    setActiveView("billing-codes");
  };

  const handleCreateFee = () => {
    setActiveView("new-fee");
  };

  const handleCancelFee = () => {
    setActiveView("fees");
  };

  const handleSaveFee = (fee: any) => {
    // In a real app, this would save the fee
    console.log("Saving fee:", fee);
    setActiveView("fees");
  };

  const handleEditFee = (id: string) => {
    // In a real app, this would navigate to edit fee
    console.log("Editing fee:", id);
    // For now, we'll just show the new fee form
    setActiveView("new-fee");
  };

  const handleCreatePaymentMethod = () => {
    setActiveView("new-payment-method");
  };

  const handleCancelPaymentMethod = () => {
    setActiveView("payment-methods");
    setEditingPaymentMethodId(null);
  };

  const handleSavePaymentMethod = (paymentMethod: any) => {
    // In a real app, this would save the payment method
    console.log("Saving payment method:", paymentMethod);
    setActiveView("payment-methods");
    setEditingPaymentMethodId(null);
  };

  const handleEditPaymentMethod = (id: string) => {
    setEditingPaymentMethodId(id);
    setActiveView("edit-payment-method");
  };

  const handleDeletePaymentMethod = () => {
    // In a real app, this would delete the payment method
    console.log("Deleting payment method:", editingPaymentMethodId);
    setActiveView("payment-methods");
    setEditingPaymentMethodId(null);
  };

  const handleCreateIncomeCategory = () => {
    setActiveView("new-income-category");
  };

  const handleCancelIncomeCategory = () => {
    setActiveView("income-categories");
    setEditingIncomeCategoryId(null);
  };

  const handleSaveIncomeCategory = (incomeCategory: any) => {
    // In a real app, this would save the income category
    console.log("Saving income category:", incomeCategory);
    setActiveView("income-categories");
    setEditingIncomeCategoryId(null);
  };

  const handleEditIncomeCategory = (id: string) => {
    setEditingIncomeCategoryId(id);
    setActiveView("edit-income-category");
  };

  const handleArchiveIncomeCategory = () => {
    // In a real app, this would archive the income category
    console.log("Archiving income category:", editingIncomeCategoryId);
    setActiveView("income-categories");
    setEditingIncomeCategoryId(null);
  };

  const handleCreateTax = () => {
    setActiveView("new-tax");
  };

  const handleCancelTax = () => {
    setActiveView("taxes");
    setEditingTaxId(null);
  };

  const handleSaveTax = (tax: any) => {
    // In a real app, this would save the tax
    console.log("Saving tax:", tax);
    setActiveView("taxes");
    setEditingTaxId(null);
  };

  const handleEditTax = (id: string) => {
    setEditingTaxId(id);
    setActiveView("edit-tax");
  };

  const handleDeleteTax = () => {
    // In a real app, this would delete the tax
    console.log("Deleting tax:", editingTaxId);
    setActiveView("taxes");
    setEditingTaxId(null);
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
  } else if (activeView === "new-supervisory-relationship") {
    activeMenuItem = "supervision";
  } else if (activeView === "new-discipline") {
    activeMenuItem = "disciplines";
  } else if (activeView === "new-treatment" || activeView === "reassign-treatments") {
    activeMenuItem = "treatments";
  } else if (activeView === "new-product") {
    activeMenuItem = "products";
  } else if (activeView === "new-adjustment" || activeView === "edit-adjustment") {
    activeMenuItem = "adjustments";
  } else if (activeView === "new-billing-code") {
    activeMenuItem = "billing-codes";
  } else if (activeView === "new-fee") {
    activeMenuItem = "fees";
  } else if (activeView === "new-payment-method" || activeView === "edit-payment-method") {
    activeMenuItem = "payment-methods";
  } else if (activeView === "new-income-category" || activeView === "edit-income-category") {
    activeMenuItem = "income-categories";
  } else if (activeView === "new-tax" || activeView === "edit-tax") {
    activeMenuItem = "taxes";
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
      {activeView === "messaging" && <JaneAppMessaging />}
      {activeView === "staff-permissions" && <JaneAppStaffPermissions />}
      {activeView === "dashboard-permissions" && <JaneAppDashboardPermissions />}
      {activeView === "supervision" && <JaneAppSupervision onCreateRelationship={handleCreateSupervisoryRelationship} />}
      {activeView === "new-supervisory-relationship" && <JaneAppNewSupervisoryRelationship onCancel={handleCancelSupervisoryRelationship} onSave={handleSaveSupervisoryRelationship} />}
      {activeView === "wait-lists" && <JaneAppWaitLists />}
      {activeView === "patient-form-fields" && <JaneAppPatientFormFields />}
      {activeView === "test-patient" && <JaneAppTestPatient />}
      {activeView === "online-appointments-for-groups" && <JaneAppOnlineAppointmentsForGroups />}
      {activeView === "ai-scribe" && <JaneAppAIScribe />}
      {activeView === "disciplines" && <JaneAppDisciplines onCreateDiscipline={handleCreateDiscipline} />}
      {activeView === "new-discipline" && <JaneAppNewDiscipline onCancel={handleCancelDiscipline} onSave={handleSaveDiscipline} />}
      {activeView === "treatments" && <JaneAppTreatments onCreateTreatment={handleCreateTreatment} onReassign={handleReassignTreatments} />}
      {activeView === "new-treatment" && <JaneAppNewTreatment onCancel={handleCancelTreatment} onSave={handleSaveTreatment} />}
      {activeView === "reassign-treatments" && <JaneAppReassignTreatments onBack={handleBackToTreatments} />}
      {activeView === "products" && <JaneAppProducts onCreateProduct={handleCreateProduct} onManageSuppliers={handleManageSuppliers} />}
      {activeView === "new-product" && <JaneAppNewProduct onCancel={handleCancelProduct} onSave={handleSaveProduct} />}
      {activeView === "billing-settings" && <JaneAppBillingSettings />}
      {activeView === "reconciliation-date" && <JaneAppReconciliationDate />}
      {activeView === "adjustments" && <JaneAppAdjustments onCreateAdjustment={handleCreateAdjustment} onEditAdjustment={handleEditAdjustment} />}
      {activeView === "new-adjustment" && <JaneAppNewAdjustment onCancel={handleCancelAdjustment} onSave={handleSaveAdjustment} />}
      {activeView === "edit-adjustment" && editingAdjustmentId && <JaneAppEditAdjustment adjustmentId={editingAdjustmentId} onCancel={handleCancelAdjustment} onSave={handleSaveAdjustment} onArchive={handleArchiveAdjustment} />}
      {activeView === "billing-codes" && <JaneAppBillingCodes onCreateBillingCode={handleCreateBillingCode} />}
      {activeView === "new-billing-code" && <JaneAppNewBillingCode onCancel={handleCancelBillingCode} onSave={handleSaveBillingCode} />}
      {activeView === "fees" && <JaneAppFees onCreateFee={handleCreateFee} onEditFee={handleEditFee} />}
      {activeView === "new-fee" && <JaneAppNewFee onCancel={handleCancelFee} onSave={handleSaveFee} />}
      {activeView === "payment-methods" && <JaneAppPaymentMethods onCreatePaymentMethod={handleCreatePaymentMethod} onEditPaymentMethod={handleEditPaymentMethod} />}
      {activeView === "new-payment-method" && <JaneAppNewPaymentMethod onCancel={handleCancelPaymentMethod} onSave={handleSavePaymentMethod} />}
      {activeView === "edit-payment-method" && editingPaymentMethodId && <JaneAppEditPaymentMethod paymentMethodId={editingPaymentMethodId} onCancel={handleCancelPaymentMethod} onSave={handleSavePaymentMethod} onDelete={handleDeletePaymentMethod} />}
      {activeView === "income-categories" && <JaneAppIncomeCategories onCreateIncomeCategory={handleCreateIncomeCategory} onEditIncomeCategory={handleEditIncomeCategory} />}
      {activeView === "new-income-category" && <JaneAppNewIncomeCategory onCancel={handleCancelIncomeCategory} onSave={handleSaveIncomeCategory} />}
      {activeView === "edit-income-category" && editingIncomeCategoryId && <JaneAppEditIncomeCategory incomeCategoryId={editingIncomeCategoryId} onCancel={handleCancelIncomeCategory} onSave={handleSaveIncomeCategory} onArchive={handleArchiveIncomeCategory} />}
      {activeView === "taxes" && <JaneAppTaxes onCreateTax={handleCreateTax} onEditTax={handleEditTax} />}
      {activeView === "new-tax" && <JaneAppNewTax onCancel={handleCancelTax} onSave={handleSaveTax} />}
      {activeView === "edit-tax" && editingTaxId && <JaneAppEditTax taxId={editingTaxId} onCancel={handleCancelTax} onSave={handleSaveTax} onDelete={handleDeleteTax} />}
      {activeView === "merge-history" && <JaneAppMergeHistory />}
      {activeView === "schedule-import" && <JaneAppScheduleImport onBegin={() => console.log("Begin import")} onLearnMore={() => console.log("Learn more")} />}
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

