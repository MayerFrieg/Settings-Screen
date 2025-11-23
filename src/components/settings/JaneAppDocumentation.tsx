"use client";

import { useState } from "react";

type Section = 
  | "dashboard" 
  | "clinic-info" 
  | "locations" 
  | "security" 
  | "branding" 
  | "language" 
  | "emails" 
  | "online-booking" 
  | "reminders-notifications"
  | "messaging" 
  | "staff-permissions"
  | "dashboard-permissions"
  | "supervision"
  | "wait-lists"
  | "patient-form-fields"
  | "test-patient"
  | "online-appointments-for-groups"
  | "ai-scribe"
  | "schedule-settings"
  | "forms-surveys"
  | "integrations"
  | "workshop"
  | "disciplines" 
  | "treatments" 
  | "products" 
  | "billing-settings"
  | "reconciliation-date"
  | "adjustments"
  | "billing-codes"
  | "fees"
  | "payment-methods" 
  | "income-categories" 
  | "taxes"
  | "default";

const documentation: Record<Section, {
  title: string;
  overview: string;
  flow: string[];
  context: string;
  easeOfUse: string[];
  keyFeatures: string[];
  bestPractices?: string[];
}> = {
  dashboard: {
    title: "Dashboard Settings",
    overview: "Monitor your practice's key performance indicators, view booking statistics, and track important metrics at a glance. The dashboard provides a comprehensive overview of your clinic's activity.",
    flow: [
      "Select staff member or view all staff using the filter dropdown",
      "Choose a date range to analyze specific time periods",
      "Review key metrics: Arrived appointments, Online bookings, New patients",
      "Examine detailed booking tables for appointments and cancellations",
      "Track revenue and payment information",
      "Export data for external analysis if needed"
    ],
    context: "The Dashboard is your command center for understanding practice performance. It aggregates data from appointments, bookings, and patient interactions to give you actionable insights. Use it to identify trends, monitor growth, and make data-driven decisions.",
    easeOfUse: [
      "Quick filter options for staff and date ranges",
      "Visual KPI cards for at-a-glance metrics",
      "Organized tables with clear column headers",
      "Responsive design for mobile and desktop viewing",
      "Real-time data updates"
    ],
    keyFeatures: [
      "Staff-specific and practice-wide metrics",
      "Date range filtering for flexible analysis",
      "Arrived appointments tracking",
      "Online booking statistics",
      "New patient identification",
      "Booking and cancellation details",
      "Revenue and payment summaries"
    ],
    bestPractices: [
      "Review dashboard daily to stay informed",
      "Use date ranges to compare periods",
      "Monitor online booking trends regularly",
      "Track new patient acquisition",
      "Analyze cancellation patterns to improve scheduling"
    ]
  },
  "clinic-info": {
    title: "Clinic Info Settings",
    overview: "Manage your clinic's basic information including name, contact details, business registration, and operational settings. This is the foundation of your practice profile.",
    flow: [
      "Update clinic name and display name",
      "Enter contact information (phone, email, address)",
      "Add business registration numbers (if applicable)",
      "Configure timezone and date format preferences",
      "Set clinic hours and availability",
      "Save changes and verify information"
    ],
    context: "Clinic Info is the primary identifier for your practice across the JaneApp system. This information appears on invoices, booking pages, and client communications. Keeping it accurate ensures professional presentation and proper billing.",
    easeOfUse: [
      "Simple form-based editing",
      "Clear field labels and descriptions",
      "One-click save functionality",
      "Visual preview of changes",
      "Validation for required fields"
    ],
    keyFeatures: [
      "Clinic name and branding",
      "Contact information management",
      "Business registration details",
      "Timezone configuration",
      "Date and time format preferences",
      "Clinic hours setup"
    ],
    bestPractices: [
      "Keep contact information current",
      "Verify timezone settings for accurate scheduling",
      "Use consistent naming across all fields",
      "Update business registration when it changes",
      "Review clinic hours seasonally"
    ]
  },
  locations: {
    title: "Locations Settings",
    overview: "Manage physical and virtual locations where services are provided. Configure address details, contact information, and location-specific settings.",
    flow: [
      "Click 'New Location' to add a location",
      "Enter location name and type (physical/virtual)",
      "Add address and contact details",
      "Configure location-specific settings",
      "Set default location if applicable",
      "Edit or archive locations as needed"
    ],
    context: "Locations allow you to organize services and appointments by physical or virtual space. This is essential for multi-location practices, telehealth services, and accurate scheduling. Each location can have unique settings and availability.",
    easeOfUse: [
      "Simple location creation form",
      "Clear distinction between physical and virtual locations",
      "Easy location management with edit/archive options",
      "Visual location list",
      "Quick location switching"
    ],
    keyFeatures: [
      "Multiple location support",
      "Physical and virtual location types",
      "Location-specific contact information",
      "Address management",
      "Location archiving",
      "Default location selection"
    ],
    bestPractices: [
      "Set up all locations before configuring services",
      "Use clear, descriptive location names",
      "Keep address information accurate",
      "Archive unused locations instead of deleting",
      "Set a default location for new appointments"
    ]
  },
  "billing-settings": {
    title: "Billing Settings",
    overview: "Configure payment processing, billing preferences, and financial settings. Manage how payments are collected, processed, and recorded.",
    flow: [
      "Set up payment processing integration",
      "Configure billing preferences and defaults",
      "Set up tax settings and rates",
      "Configure invoice templates and formatting",
      "Set payment terms and policies",
      "Test payment processing"
    ],
    context: "Billing Settings control how your practice handles financial transactions. Proper configuration ensures timely payment collection, accurate record-keeping, and compliance with financial regulations. These settings affect invoices, receipts, and payment processing.",
    easeOfUse: [
      "Step-by-step setup wizards",
      "Clear payment integration instructions",
      "Visual invoice template previews",
      "One-click payment method configuration",
      "Real-time payment status tracking"
    ],
    keyFeatures: [
      "Payment processing integration",
      "Multiple payment method support",
      "Tax rate configuration",
      "Invoice template customization",
      "Payment terms management",
      "Automated payment reminders"
    ],
    bestPractices: [
      "Set up payment processing early",
      "Configure tax rates before first invoice",
      "Test payment flows regularly",
      "Keep payment terms clear and consistent",
      "Review billing settings quarterly"
    ]
  },
  "payment-methods": {
    title: "Payment Methods Settings",
    overview: "Manage accepted payment methods including cash, debit, credit cards, and other options. Configure which methods are available for online booking and in-person payments.",
    flow: [
      "Click 'New Payment Method' to add a method",
      "Enter payment method name and type",
      "Configure online booking availability",
      "Set active status",
      "Edit existing payment methods as needed",
      "Archive unused payment methods"
    ],
    context: "Payment Methods determine how patients can pay for appointments and products. Configuring these correctly ensures smooth transactions and reduces payment processing issues. Online booking availability affects what patients see when booking appointments.",
    easeOfUse: [
      "Simple payment method creation",
      "Clear type selection dropdown",
      "Toggle switches for online booking and active status",
      "Easy edit and archive functionality",
      "Visual payment method list"
    ],
    keyFeatures: [
      "Multiple payment method types",
      "Online booking integration",
      "Active/inactive status control",
      "Payment method archiving",
      "Type categorization (Cash, Debit, Credit Card, etc.)"
    ],
    bestPractices: [
      "Set up all payment methods you accept",
      "Enable online booking for digital payments",
      "Keep payment methods active only when in use",
      "Archive instead of deleting for historical records",
      "Test payment methods after configuration"
    ]
  },
  "income-categories": {
    title: "Income Categories Settings",
    overview: "Organize income by categories to track different revenue streams and configure commission rates for staff. Categories help with financial reporting and staff compensation.",
    flow: [
      "Click 'New Income Category' to create a category",
      "Enter category name (e.g., Product Income, Treatment Income)",
      "Set default commission rate percentage",
      "Configure default referral commission rate (optional)",
      "Set staff-specific commission rates if needed",
      "Assign treatments or products to categories"
    ],
    context: "Income Categories help you break down revenue by type and manage staff commissions based on what they sell. This is essential for accurate financial reporting and fair staff compensation. Categories can be assigned to treatments, products, or services.",
    easeOfUse: [
      "Simple category creation form",
      "Percentage-based commission rate configuration",
      "Staff-specific rate overrides",
      "Apply default rates with one click",
      "Clear assignment tracking"
    ],
    keyFeatures: [
      "Multiple income categories",
      "Default commission rate configuration",
      "Referral commission rate support",
      "Staff-specific commission rates",
      "Treatment and product assignment",
      "Commission rate inheritance"
    ],
    bestPractices: [
      "Create categories before assigning items",
      "Set realistic default commission rates",
      "Review staff-specific rates annually",
      "Keep category names clear and descriptive",
      "Assign all revenue-generating items to categories"
    ]
  },
  taxes: {
    title: "Taxes Settings",
    overview: "Configure tax rates and rules for different locations and services. Manage how taxes are calculated and applied to invoices and payments.",
    flow: [
      "Click 'New Tax' to create a tax rate",
      "Enter tax name (e.g., HST, GST, VAT)",
      "Set tax rate percentage",
      "Select applicable locations",
      "Edit tax rates as regulations change",
      "Archive unused tax rates"
    ],
    context: "Tax Settings ensure accurate tax calculation on invoices and payments. Proper configuration is essential for compliance with local tax regulations. Taxes can be location-specific and applied to different types of transactions.",
    easeOfUse: [
      "Simple tax creation form",
      "Location-based tax assignment",
      "Percentage-based rate configuration",
      "Easy tax editing and archiving",
      "Clear tax assignment tracking"
    ],
    keyFeatures: [
      "Multiple tax rate support",
      "Location-specific tax configuration",
      "Percentage-based tax calculation",
      "Tax assignment tracking",
      "Tax archiving for historical records"
    ],
    bestPractices: [
      "Set up taxes before creating invoices",
      "Keep tax rates updated with regulation changes",
      "Use clear tax names (HST, GST, etc.)",
      "Assign taxes to correct locations",
      "Archive instead of deleting for records"
    ]
  },
  security: {
    title: "Security Settings",
    overview: "Manage account security, password policies, two-factor authentication, and access controls. Protect your practice data and ensure only authorized users can access sensitive information.",
    flow: [
      "Review current security settings",
      "Update password requirements and policies",
      "Enable two-factor authentication for enhanced security",
      "Configure session timeout settings",
      "Set up IP restrictions if needed",
      "Review and manage active sessions"
    ],
    context: "Security Settings protect your practice's sensitive data and ensure compliance with healthcare privacy regulations. Proper security configuration prevents unauthorized access and protects patient information.",
    easeOfUse: [
      "Clear security status indicators",
      "One-click two-factor authentication setup",
      "Simple password policy configuration",
      "Visual session management",
      "Security recommendations and alerts"
    ],
    keyFeatures: [
      "Password policy enforcement",
      "Two-factor authentication support",
      "Session management",
      "IP address restrictions",
      "Security audit logs",
      "Account lockout protection"
    ],
    bestPractices: [
      "Enable two-factor authentication for all users",
      "Use strong password requirements",
      "Review active sessions regularly",
      "Set appropriate session timeouts",
      "Monitor security audit logs"
    ]
  },
  branding: {
    title: "Branding Settings",
    overview: "Customize your practice's visual identity including logo, colors, and branding elements. These settings affect how your practice appears to patients in booking pages, emails, and invoices.",
    flow: [
      "Upload your practice logo",
      "Set primary and secondary brand colors",
      "Configure email signature and templates",
      "Customize booking page appearance",
      "Preview changes before saving",
      "Apply branding across all patient-facing materials"
    ],
    context: "Branding Settings help maintain a consistent visual identity across all patient interactions. Professional branding builds trust and makes your practice easily recognizable.",
    easeOfUse: [
      "Drag-and-drop logo upload",
      "Color picker for brand colors",
      "Live preview of changes",
      "Template-based customization",
      "One-click apply to all materials"
    ],
    keyFeatures: [
      "Logo upload and management",
      "Custom color palette",
      "Email template branding",
      "Booking page customization",
      "Invoice branding",
      "Brand consistency across platforms"
    ],
    bestPractices: [
      "Use high-resolution logos",
      "Maintain consistent colors across materials",
      "Test branding on different devices",
      "Keep branding professional and clean",
      "Update branding seasonally if needed"
    ]
  },
  language: {
    title: "Language Settings",
    overview: "Configure language preferences for your practice interface and patient communications. Support multiple languages for diverse patient populations.",
    flow: [
      "Select primary interface language",
      "Choose date and time format preferences",
      "Set currency and number formatting",
      "Configure patient communication languages",
      "Set up multilingual email templates",
      "Test language settings"
    ],
    context: "Language Settings ensure your practice can serve diverse patient populations effectively. Proper language configuration improves patient experience and accessibility.",
    easeOfUse: [
      "Simple language selection dropdown",
      "Format preview for dates and numbers",
      "Template-based language configuration",
      "One-click language switching",
      "Clear format examples"
    ],
    keyFeatures: [
      "Multiple language support",
      "Date and time format customization",
      "Currency formatting",
      "Number format preferences",
      "Multilingual email templates",
      "Interface language selection"
    ],
    bestPractices: [
      "Set primary language to match your region",
      "Use standard date formats for your area",
      "Configure currency for accurate billing",
      "Test multilingual templates before use",
      "Keep language settings consistent"
    ]
  },
  emails: {
    title: "Email Settings",
    overview: "Configure email templates, sending preferences, and communication settings. Manage how your practice communicates with patients via email.",
    flow: [
      "Set up email sending preferences",
      "Configure email templates for common communications",
      "Set up email signatures",
      "Configure email delivery settings",
      "Test email sending",
      "Review email delivery logs"
    ],
    context: "Email Settings control all email communications from your practice. Proper configuration ensures patients receive timely, professional communications.",
    easeOfUse: [
      "Template-based email configuration",
      "Visual email template editor",
      "One-click template testing",
      "Email delivery status tracking",
      "Simple signature management"
    ],
    keyFeatures: [
      "Customizable email templates",
      "Email signature management",
      "Delivery status tracking",
      "Scheduled email sending",
      "Email formatting options",
      "Delivery logs and history"
    ],
    bestPractices: [
      "Use professional email templates",
      "Test emails before sending to patients",
      "Keep email signatures concise",
      "Monitor delivery status regularly",
      "Update templates seasonally"
    ]
  },
  "online-booking": {
    title: "Online Booking Settings",
    overview: "Configure online appointment booking options for patients. Set up booking rules, availability, and payment requirements for online appointments.",
    flow: [
      "Enable online booking for services",
      "Configure booking rules and restrictions",
      "Set up payment requirements",
      "Configure booking time windows",
      "Set up cancellation policies",
      "Test booking flow from patient perspective"
    ],
    context: "Online Booking allows patients to book appointments directly, reducing administrative burden and improving patient access. Proper configuration ensures smooth booking experience.",
    easeOfUse: [
      "Simple booking enablement",
      "Visual rule configuration",
      "Template-based setup",
      "Real-time booking preview",
      "Easy booking flow testing"
    ],
    keyFeatures: [
      "Service-specific booking rules",
      "Payment requirement configuration",
      "Booking time restrictions",
      "Cancellation policy setup",
      "Booking page customization",
      "Booking analytics"
    ],
    bestPractices: [
      "Set clear booking rules",
      "Require payment for online bookings when possible",
      "Test booking flow regularly",
      "Monitor booking patterns",
      "Keep booking policies clear"
    ]
  },
  "reminders-notifications": {
    title: "Reminders & Notifications Settings",
    overview: "Configure automated appointment reminders, notifications, and alerts. Keep patients informed and reduce no-shows with timely communications.",
    flow: [
      "Set up appointment reminder schedules",
      "Configure reminder delivery methods (email, SMS)",
      "Create custom reminder messages",
      "Set notification preferences for staff",
      "Configure alert thresholds",
      "Test reminder delivery"
    ],
    context: "Reminders & Notifications help reduce no-shows and keep both patients and staff informed. Proper configuration improves appointment attendance and practice efficiency.",
    easeOfUse: [
      "Template-based reminder creation",
      "Visual reminder schedule configuration",
      "Multi-channel delivery options",
      "One-click reminder testing",
      "Clear notification preferences"
    ],
    keyFeatures: [
      "Automated appointment reminders",
      "Multi-channel delivery (Email, SMS)",
      "Customizable reminder messages",
      "Flexible scheduling options",
      "Staff notification preferences",
      "Reminder delivery tracking"
    ],
    bestPractices: [
      "Send reminders 24-48 hours before appointments",
      "Use SMS for time-sensitive reminders",
      "Personalize reminder messages",
      "Test reminder delivery regularly",
      "Monitor reminder effectiveness"
    ]
  },
  messaging: {
    title: "Messaging Settings",
    overview: "Configure secure messaging between staff and patients. Set up messaging preferences, templates, and notification settings.",
    flow: [
      "Enable secure messaging feature",
      "Configure messaging preferences",
      "Set up message templates",
      "Configure notification settings",
      "Set up message retention policies",
      "Test messaging functionality"
    ],
    context: "Secure Messaging enables direct communication between staff and patients while maintaining privacy and compliance. Proper configuration ensures secure, efficient communication.",
    easeOfUse: [
      "Simple feature enablement",
      "Template-based messaging",
      "Visual preference configuration",
      "Clear notification settings",
      "Easy messaging testing"
    ],
    keyFeatures: [
      "Secure patient messaging",
      "Message templates",
      "Notification preferences",
      "Message history",
      "Compliance features",
      "Message delivery tracking"
    ],
    bestPractices: [
      "Use professional messaging templates",
      "Respond to messages promptly",
      "Keep messages concise and clear",
      "Review message history regularly",
      "Maintain compliance standards"
    ]
  },
  "staff-permissions": {
    title: "Staff Permissions Settings",
    overview: "Manage staff access and permissions across the system. Control what each staff member can view, edit, and manage.",
    flow: [
      "Review current staff permissions",
      "Select staff member to configure",
      "Set permissions for different system areas",
      "Configure access levels",
      "Set up role-based permissions",
      "Test permissions for each user"
    ],
    context: "Staff Permissions ensure appropriate access control and protect sensitive patient information. Proper configuration maintains security and compliance.",
    easeOfUse: [
      "Role-based permission templates",
      "Visual permission matrix",
      "One-click permission application",
      "Clear permission descriptions",
      "Easy permission testing"
    ],
    keyFeatures: [
      "Granular permission controls",
      "Role-based permission templates",
      "Area-specific access control",
      "Permission inheritance",
      "Permission audit logs",
      "Access level management"
    ],
    bestPractices: [
      "Follow principle of least privilege",
      "Review permissions regularly",
      "Use role-based templates when possible",
      "Test permissions after changes",
      "Document permission changes"
    ]
  },
  "dashboard-permissions": {
    title: "Dashboard Permissions Settings",
    overview: "Control which staff members can view and access different dashboard sections and reports. Manage data visibility and access controls.",
    flow: [
      "Review current dashboard permissions",
      "Select staff members to configure",
      "Set permissions for each dashboard section",
      "Configure report access levels",
      "Set data visibility restrictions",
      "Test permissions for each user"
    ],
    context: "Dashboard Permissions ensure staff only see data relevant to their role. This protects patient privacy and maintains appropriate access controls.",
    easeOfUse: [
      "Role-based permission templates",
      "Visual permission matrix",
      "One-click permission application",
      "Clear permission descriptions",
      "Easy permission testing"
    ],
    keyFeatures: [
      "Granular permission controls",
      "Role-based permission templates",
      "Section-specific access control",
      "Report access management",
      "Data visibility restrictions",
      "Permission audit logs"
    ],
    bestPractices: [
      "Follow principle of least privilege",
      "Review permissions regularly",
      "Use role-based templates when possible",
      "Test permissions after changes",
      "Document permission changes"
    ]
  },
  supervision: {
    title: "Supervision Settings",
    overview: "Manage supervisory relationships between staff members. Configure oversight and supervision workflows for clinical staff.",
    flow: [
      "Click 'New Supervisory Relationship' to create a relationship",
      "Select supervisor and supervisee",
      "Configure supervision parameters",
      "Set up supervision schedules",
      "Configure notification preferences",
      "Review and manage relationships"
    ],
    context: "Supervision Settings help manage clinical oversight and ensure proper supervision structures are in place. This is essential for compliance and quality care.",
    easeOfUse: [
      "Simple relationship creation form",
      "Clear supervisor/supervisee selection",
      "Template-based configuration",
      "Visual relationship mapping",
      "Easy relationship management"
    ],
    keyFeatures: [
      "Supervisory relationship management",
      "Supervision schedule configuration",
      "Notification and alert settings",
      "Supervision documentation",
      "Relationship tracking",
      "Compliance reporting"
    ],
    bestPractices: [
      "Set up all supervisory relationships upfront",
      "Review relationships regularly",
      "Configure appropriate notification settings",
      "Document supervision schedules",
      "Keep relationships current"
    ]
  },
  "wait-lists": {
    title: "Wait Lists Settings",
    overview: "Configure wait list management for appointments and services. Manage patient queues and automatic appointment filling.",
    flow: [
      "Enable wait lists for specific services",
      "Configure wait list rules and priorities",
      "Set up automatic appointment filling",
      "Configure wait list notifications",
      "Set wait list capacity limits",
      "Review and manage wait lists"
    ],
    context: "Wait Lists help manage patient demand and fill cancellations efficiently. Proper configuration ensures patients get appointments when available.",
    easeOfUse: [
      "Service-specific wait list configuration",
      "Priority-based wait list management",
      "Automatic filling options",
      "Clear wait list status indicators",
      "Easy patient management"
    ],
    keyFeatures: [
      "Service-specific wait lists",
      "Priority-based queuing",
      "Automatic appointment filling",
      "Wait list notifications",
      "Capacity management",
      "Wait list reporting"
    ],
    bestPractices: [
      "Enable wait lists for high-demand services",
      "Set clear priority rules",
      "Use automatic filling when appropriate",
      "Monitor wait list lengths regularly",
      "Communicate wait times to patients"
    ]
  },
  "patient-form-fields": {
    title: "Patient Form Fields Settings",
    overview: "Customize patient intake forms and data collection fields. Configure which information is collected and how it's displayed.",
    flow: [
      "Review existing form fields",
      "Add custom fields as needed",
      "Configure field types and validation",
      "Set field visibility and requirements",
      "Organize fields into sections",
      "Test form completion flow"
    ],
    context: "Patient Form Fields determine what information you collect from patients. Proper configuration ensures you gather necessary data efficiently.",
    easeOfUse: [
      "Drag-and-drop field organization",
      "Visual form builder",
      "Field type templates",
      "Real-time form preview",
      "Simple field configuration"
    ],
    keyFeatures: [
      "Custom field creation",
      "Multiple field types",
      "Field validation rules",
      "Conditional field display",
      "Form section organization",
      "Field requirement management"
    ],
    bestPractices: [
      "Only collect necessary information",
      "Use clear field labels",
      "Organize fields logically",
      "Test forms from patient perspective",
      "Review fields regularly for relevance"
    ]
  },
  "test-patient": {
    title: "Test Patient Settings",
    overview: "Create and manage test patient records for training, testing, and system validation. Test patients help ensure your system works correctly without affecting real patient data.",
    flow: [
      "Create a test patient record",
      "Configure test patient details",
      "Use test patient for system testing",
      "Perform various operations (booking, billing, etc.)",
      "Review test patient data",
      "Archive or delete test patients when done"
    ],
    context: "Test Patients allow you to safely test system functionality without affecting real patient records. Essential for training staff and validating system changes.",
    easeOfUse: [
      "Simple test patient creation",
      "Clear test patient indicators",
      "Easy test patient management",
      "Visual test patient status",
      "Quick test patient cleanup"
    ],
    keyFeatures: [
      "Test patient creation",
      "Test patient indicators",
      "Full system testing capability",
      "Test patient isolation",
      "Test patient archiving",
      "Test data cleanup"
    ],
    bestPractices: [
      "Use test patients for all system testing",
      "Clearly mark test patients",
      "Clean up test data regularly",
      "Never use real patient data for testing",
      "Archive test patients when not in use"
    ]
  },
  "online-appointments-for-groups": {
    title: "Online Appointments for Groups Settings",
    overview: "Configure group appointment booking options. Allow patients to book group sessions, classes, or workshops online.",
    flow: [
      "Enable group appointment booking",
      "Configure group appointment types",
      "Set group size limits",
      "Configure booking rules and restrictions",
      "Set up group pricing",
      "Test group booking flow"
    ],
    context: "Online Group Appointments allow patients to book group sessions directly. This expands booking options and improves patient access to group services.",
    easeOfUse: [
      "Simple group booking enablement",
      "Visual group configuration",
      "Clear size limit settings",
      "Template-based setup",
      "Easy booking flow testing"
    ],
    keyFeatures: [
      "Group appointment types",
      "Group size management",
      "Online group booking",
      "Group pricing configuration",
      "Booking rule customization",
      "Group booking reporting"
    ],
    bestPractices: [
      "Set appropriate group size limits",
      "Configure clear booking rules",
      "Test group booking regularly",
      "Monitor group booking patterns",
      "Adjust settings based on demand"
    ]
  },
  "ai-scribe": {
    title: "AI Scribe Settings",
    overview: "Configure AI-powered documentation assistance. Use AI to help with clinical note-taking and documentation tasks.",
    flow: [
      "Enable AI Scribe feature",
      "Configure AI documentation preferences",
      "Set up documentation templates",
      "Configure AI assistance levels",
      "Set privacy and security settings",
      "Test AI documentation output"
    ],
    context: "AI Scribe assists with clinical documentation, reducing administrative burden and improving documentation quality. Proper configuration ensures accurate, compliant documentation.",
    easeOfUse: [
      "Simple feature enablement",
      "Template-based configuration",
      "Visual preference settings",
      "Clear assistance level options",
      "Easy testing and validation"
    ],
    keyFeatures: [
      "AI-powered documentation",
      "Customizable templates",
      "Assistance level control",
      "Privacy and security controls",
      "Documentation quality checks",
      "Integration with clinical notes"
    ],
    bestPractices: [
      "Start with lower assistance levels",
      "Review AI output carefully",
      "Customize templates for your practice",
      "Maintain privacy and security standards",
      "Train staff on AI Scribe usage"
    ]
  },
  "schedule-settings": {
    title: "Schedule Settings",
    overview: "Configure scheduling preferences, availability rules, and calendar settings. Control how appointments are scheduled and managed.",
    flow: [
      "Set default appointment durations",
      "Configure availability rules",
      "Set up scheduling restrictions",
      "Configure calendar display preferences",
      "Set up buffer times between appointments",
      "Test scheduling functionality"
    ],
    context: "Schedule Settings control how appointments are created and managed. Proper configuration ensures efficient scheduling and prevents conflicts.",
    easeOfUse: [
      "Visual schedule configuration",
      "Template-based availability setup",
      "Clear restriction settings",
      "Real-time conflict detection",
      "Easy schedule testing"
    ],
    keyFeatures: [
      "Appointment duration management",
      "Availability rule configuration",
      "Scheduling restrictions",
      "Calendar display options",
      "Buffer time management",
      "Conflict prevention"
    ],
    bestPractices: [
      "Set realistic appointment durations",
      "Configure buffer times appropriately",
      "Review availability rules regularly",
      "Test scheduling from patient perspective",
      "Keep schedule settings consistent"
    ]
  },
  "forms-surveys": {
    title: "Forms & Surveys Settings",
    overview: "Manage patient intake forms, clinical surveys, and assessment tools. Create and configure forms for data collection and patient assessment.",
    flow: [
      "Review existing forms and surveys",
      "Create new intake forms or surveys",
      "Configure form fields and questions",
      "Set up form assignment rules",
      "Configure form completion requirements",
      "Test form completion flow"
    ],
    context: "Forms & Surveys help collect patient information and conduct assessments. Proper configuration ensures you gather necessary data efficiently and consistently.",
    easeOfUse: [
      "Visual form builder",
      "Template-based form creation",
      "Drag-and-drop question organization",
      "Real-time form preview",
      "Easy form assignment"
    ],
    keyFeatures: [
      "Custom form creation",
      "Multiple question types",
      "Form assignment rules",
      "Conditional logic",
      "Form completion tracking",
      "Response management"
    ],
    bestPractices: [
      "Use clear, concise questions",
      "Organize forms logically",
      "Test forms before assigning",
      "Review form responses regularly",
      "Update forms based on feedback"
    ]
  },
  integrations: {
    title: "Integrations Settings",
    overview: "Connect JaneApp with external services and tools. Integrate with calendar systems, payment processors, and other healthcare tools.",
    flow: [
      "Browse available integrations",
      "Select integration to connect",
      "Follow integration setup instructions",
      "Configure integration settings",
      "Test integration functionality",
      "Monitor integration status"
    ],
    context: "Integrations extend JaneApp's functionality by connecting with other tools you use. Proper integration setup improves workflow efficiency.",
    easeOfUse: [
      "One-click integration setup",
      "Clear setup instructions",
      "Visual integration status",
      "Simple configuration options",
      "Easy integration testing"
    ],
    keyFeatures: [
      "Multiple integration options",
      "Calendar system integration",
      "Payment processor connections",
      "Healthcare tool integrations",
      "Data synchronization",
      "Integration status monitoring"
    ],
    bestPractices: [
      "Set up essential integrations first",
      "Test integrations thoroughly",
      "Monitor integration status regularly",
      "Keep integration credentials secure",
      "Review integration usage periodically"
    ]
  },
  workshop: {
    title: "Workshop Settings",
    overview: "Configure workshop and training session management. Set up group learning sessions and educational programs.",
    flow: [
      "Create workshop or training session",
      "Configure workshop details and schedule",
      "Set participant limits and requirements",
      "Configure pricing and payment options",
      "Set up registration process",
      "Manage workshop participants"
    ],
    context: "Workshop Settings help manage educational programs and group training sessions. Proper configuration ensures smooth workshop delivery and participant management.",
    easeOfUse: [
      "Simple workshop creation",
      "Visual schedule configuration",
      "Clear participant management",
      "Template-based setup",
      "Easy registration management"
    ],
    keyFeatures: [
      "Workshop creation and management",
      "Participant limit configuration",
      "Registration management",
      "Pricing and payment options",
      "Schedule management",
      "Participant communication"
    ],
    bestPractices: [
      "Set clear participant limits",
      "Configure registration early",
      "Test registration process",
      "Communicate with participants regularly",
      "Review workshop effectiveness"
    ]
  },
  disciplines: {
    title: "Disciplines Settings",
    overview: "Manage clinical disciplines and specialties offered by your practice. Organize services by discipline for better organization and reporting.",
    flow: [
      "Review existing disciplines",
      "Create new disciplines as needed",
      "Configure discipline details and descriptions",
      "Assign staff to disciplines",
      "Link services to disciplines",
      "Review discipline organization"
    ],
    context: "Disciplines help organize your practice's services and specialties. Proper organization improves service management and patient booking.",
    easeOfUse: [
      "Simple discipline creation",
      "Visual discipline management",
      "Clear discipline organization",
      "Easy staff assignment",
      "Service linking"
    ],
    keyFeatures: [
      "Multiple discipline support",
      "Discipline descriptions",
      "Staff discipline assignment",
      "Service discipline linking",
      "Discipline reporting",
      "Discipline organization"
    ],
    bestPractices: [
      "Use clear discipline names",
      "Assign all staff to appropriate disciplines",
      "Link services to disciplines",
      "Review discipline organization regularly",
      "Keep discipline structure consistent"
    ]
  },
  treatments: {
    title: "Treatments, Classes & Group Appointments Settings",
    overview: "Manage treatment types, classes, and group appointment configurations. Set up pricing, duration, and booking rules for different service types.",
    flow: [
      "Review existing treatments and classes",
      "Create new treatment or class types",
      "Configure pricing and duration",
      "Set up booking rules and restrictions",
      "Assign treatments to staff",
      "Test treatment booking"
    ],
    context: "Treatments and Classes are the core services your practice offers. Proper configuration ensures accurate booking, pricing, and scheduling.",
    easeOfUse: [
      "Simple treatment creation",
      "Visual treatment management",
      "Clear pricing configuration",
      "Template-based setup",
      "Easy booking rule configuration"
    ],
    keyFeatures: [
      "Multiple treatment types",
      "Pricing configuration",
      "Duration management",
      "Booking rule customization",
      "Staff assignment",
      "Treatment reporting"
    ],
    bestPractices: [
      "Use clear treatment names",
      "Set accurate pricing and duration",
      "Configure booking rules appropriately",
      "Assign treatments to qualified staff",
      "Review treatments regularly"
    ]
  },
  products: {
    title: "Products Settings",
    overview: "Manage products sold by your practice including retail items, supplements, and other merchandise. Configure inventory, pricing, and sales settings.",
    flow: [
      "Review existing products",
      "Create new products",
      "Configure product details and pricing",
      "Set up inventory tracking",
      "Configure product categories",
      "Set up supplier information"
    ],
    context: "Products Settings help manage retail sales and inventory. Proper configuration ensures accurate product management and sales tracking.",
    easeOfUse: [
      "Simple product creation",
      "Visual product management",
      "Clear inventory tracking",
      "Category organization",
      "Easy supplier management"
    ],
    keyFeatures: [
      "Product catalog management",
      "Inventory tracking",
      "Pricing configuration",
      "Product categories",
      "Supplier management",
      "Sales reporting"
    ],
    bestPractices: [
      "Use clear product names and descriptions",
      "Keep inventory levels accurate",
      "Set competitive pricing",
      "Organize products by category",
      "Review products regularly"
    ]
  },
  "reconciliation-date": {
    title: "Reconciliation Date Settings",
    overview: "Configure financial reconciliation dates and periods. Manage accounting periods and reconciliation schedules.",
    flow: [
      "Set reconciliation date",
      "Configure reconciliation periods",
      "Set up reconciliation schedules",
      "Configure reconciliation rules",
      "Review reconciliation reports",
      "Complete reconciliation process"
    ],
    context: "Reconciliation Date Settings help manage financial reconciliation and accounting periods. Essential for accurate financial reporting and compliance.",
    easeOfUse: [
      "Simple date selection",
      "Clear period configuration",
      "Visual reconciliation status",
      "Automated reconciliation options",
      "Easy report generation"
    ],
    keyFeatures: [
      "Reconciliation date management",
      "Period configuration",
      "Automated reconciliation",
      "Reconciliation reporting",
      "Financial period tracking",
      "Compliance reporting"
    ],
    bestPractices: [
      "Set reconciliation dates consistently",
      "Complete reconciliations on schedule",
      "Review reconciliation reports carefully",
      "Document reconciliation processes",
      "Keep reconciliation records"
    ]
  },
  adjustments: {
    title: "Adjustments Settings",
    overview: "Manage billing adjustments, discounts, and financial corrections. Configure adjustment types and approval workflows.",
    flow: [
      "Review existing adjustments",
      "Create new adjustment types",
      "Configure adjustment rules and limits",
      "Set up approval workflows",
      "Configure adjustment documentation",
      "Review adjustment reports"
    ],
    context: "Adjustments Settings control how billing corrections and discounts are applied. Proper configuration ensures accurate billing and financial records.",
    easeOfUse: [
      "Simple adjustment creation",
      "Visual adjustment management",
      "Clear approval workflows",
      "Template-based configuration",
      "Easy adjustment tracking"
    ],
    keyFeatures: [
      "Multiple adjustment types",
      "Approval workflow management",
      "Adjustment documentation",
      "Adjustment reporting",
      "Limit configuration",
      "Adjustment history tracking"
    ],
    bestPractices: [
      "Document all adjustments clearly",
      "Use appropriate approval workflows",
      "Set reasonable adjustment limits",
      "Review adjustments regularly",
      "Keep adjustment records for audits"
    ]
  },
  "billing-codes": {
    title: "Billing Codes Settings",
    overview: "Manage billing codes for services, procedures, and insurance claims. Configure codes for accurate billing and claim submission.",
    flow: [
      "Review existing billing codes",
      "Add new billing codes as needed",
      "Configure code descriptions and categories",
      "Link codes to services and treatments",
      "Set up code validation rules",
      "Test code usage in billing"
    ],
    context: "Billing Codes are essential for accurate billing and insurance claim submission. Proper code management ensures correct reimbursement and compliance.",
    easeOfUse: [
      "Simple code creation",
      "Code search and filtering",
      "Visual code management",
      "Clear code descriptions",
      "Easy code assignment"
    ],
    keyFeatures: [
      "Multiple billing code types",
      "Code categorization",
      "Code validation",
      "Service code linking",
      "Code reporting",
      "Code history tracking"
    ],
    bestPractices: [
      "Use standard billing codes when possible",
      "Keep code descriptions clear",
      "Link codes to services accurately",
      "Review codes regularly for updates",
      "Document code usage"
    ]
  },
  fees: {
    title: "Fees Settings",
    overview: "Manage service fees, surcharges, and additional charges. Configure fee structures for different services and payment scenarios.",
    flow: [
      "Review existing fees",
      "Create new fee types",
      "Configure fee amounts and rules",
      "Set up fee application rules",
      "Link fees to services or payment methods",
      "Test fee application"
    ],
    context: "Fees Settings control additional charges applied to services or payments. Proper configuration ensures accurate fee calculation and transparent billing.",
    easeOfUse: [
      "Simple fee creation",
      "Visual fee management",
      "Clear fee rules",
      "Template-based configuration",
      "Easy fee testing"
    ],
    keyFeatures: [
      "Multiple fee types",
      "Fee amount configuration",
      "Conditional fee application",
      "Service fee linking",
      "Fee reporting",
      "Fee history tracking"
    ],
    bestPractices: [
      "Set clear fee descriptions",
      "Use consistent fee structures",
      "Test fee application regularly",
      "Document fee rules clearly",
      "Review fees periodically"
    ]
  },
  default: {
    title: "Settings Documentation",
    overview: "This settings section helps you configure and manage various aspects of your practice. Use the information below to understand how to best utilize these settings.",
    flow: [
      "Review the overview and context sections",
      "Follow the step-by-step flow for setup",
      "Explore key features available",
      "Implement best practices for optimal results"
    ],
    context: "Settings allow you to customize JaneApp to match your practice's needs. Proper configuration ensures efficient operations, accurate billing, and a smooth experience for both staff and patients.",
    easeOfUse: [
      "Intuitive interface design",
      "Clear field labels and descriptions",
      "Helpful tooltips and guidance",
      "Save and cancel options",
      "Visual feedback for changes"
    ],
    keyFeatures: [
      "Comprehensive configuration options",
      "Real-time updates",
      "Validation and error handling",
      "Search and filter capabilities",
      "Export and import options"
    ],
    bestPractices: [
      "Review settings regularly",
      "Test changes before going live",
      "Keep documentation updated",
      "Train staff on new features",
      "Back up settings before major changes"
    ]
  }
};

export default function JaneAppDocumentation({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const doc = documentation[section] || documentation.default;

  return (
    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
            <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
            <p className="text-sm text-gray-600">Detailed guide and best practices</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-teal-600 hover:text-teal-700 transition"
        >
          <svg
            className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-teal-200">
          {/* Overview */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Overview</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{doc.overview}</p>
          </div>

          {/* Context */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Context & Purpose</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{doc.context}</p>
          </div>

          {/* Flow */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Step-by-Step Flow</h4>
            <ol className="space-y-2">
              {doc.flow.map((step, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-xs flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Ease of Use */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Ease of Use Features</h4>
            <ul className="space-y-2">
              {doc.easeOfUse.map((feature, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-700">
                  <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {doc.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="h-4 w-4 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          {doc.bestPractices && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Best Practices</h4>
              <ul className="space-y-2">
                {doc.bestPractices.map((practice, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-700">
                    <svg className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="flex-1">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

