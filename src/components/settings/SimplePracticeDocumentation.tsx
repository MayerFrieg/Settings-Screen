"use client";

import { useState } from "react";

type Section = 
  | "profile" 
  | "clinical-info" 
  | "notifications" 
  | "practice-details" 
  | "business-files" 
  | "plan-info" 
  | "data-export" 
  | "demo-client" 
  | "team-members"
  | "client-billing-documents"
  | "insurance-billing"
  | "payers"
  | "online-payments"
  | "autopay"
  | "services"
  | "products"
  | "client-portal-permissions"
  | "calendar"
  | "contact-form"
  | "prescreener"
  | "widgets"
  | "template-library"
  | "shareable-documents"
  | "email"
  | "text"
  | "voice"
  | "secure-messaging";

const documentation: Record<Section, {
  title: string;
  overview: string;
  flow: string[];
  context: string;
  easeOfUse: string[];
  keyFeatures: string[];
  bestPractices?: string[];
}> = {
  profile: {
    title: "Profile and Security Settings",
    overview: "Manage your personal account information, password, two-step verification, and profile photo. This section controls your account security and how you appear to clients and team members.",
    flow: [
      "Update your personal information (name, email, phone number)",
      "Upload or change your profile photo",
      "Change your password regularly for security",
      "Enable two-step verification for enhanced account protection",
      "Review and update your security settings periodically"
    ],
    context: "Your profile is the foundation of your SimplePractice account. It connects your personal information with your professional identity, ensuring clients can identify you and contact you when needed. Security settings protect your account from unauthorized access and help maintain HIPAA compliance.",
    easeOfUse: [
      "Simple form-based interface for updating information",
      "One-click password change with strength indicator",
      "Easy two-step verification setup with QR code",
      "Profile photo upload with preview",
      "Clear security status indicators"
    ],
    keyFeatures: [
      "Personal information management",
      "Profile photo upload and management",
      "Password change with strength requirements",
      "Two-step verification (2FA) support",
      "Account security status dashboard",
      "Activity log for security events"
    ],
    bestPractices: [
      "Keep your profile photo and contact information up to date",
      "Use a strong, unique password",
      "Enable two-step verification for better security",
      "Review your activity log regularly",
      "Update your email if it changes to maintain account access"
    ]
  },
  "clinical-info": {
    title: "Clinical Info Settings",
    overview: "Enter and manage your NPI number, specialty, taxonomy code, and professional licenses. Configure ePrescribe settings and maintain compliance with licensing requirements.",
    flow: [
      "Enter your National Provider Identifier (NPI) number",
      "Select your specialty and taxonomy code",
      "Add all professional licenses with expiration dates",
      "Configure ePrescribe settings if applicable",
      "Set up license renewal reminders",
      "Update licenses before they expire"
    ],
    context: "Clinical information is essential for insurance billing, ePrescribe functionality, and maintaining compliance with state and federal regulations. Accurate NPI and license information ensures claims are processed correctly and you remain in good standing with licensing boards.",
    easeOfUse: [
      "Auto-population of provider information from NPI lookup",
      "License expiration date tracking with reminders",
      "Simple license addition and removal",
      "Clear taxonomy code selection",
      "ePrescribe setup wizard"
    ],
    keyFeatures: [
      "NPI number management and verification",
      "Specialty and taxonomy code selection",
      "Multiple license support with expiration tracking",
      "ePrescribe configuration",
      "License renewal reminders",
      "Provider information export"
    ],
    bestPractices: [
      "Enter your NPI number immediately after account setup",
      "Add all licenses you hold, even if not currently active",
      "Set up renewal reminders 60 days before expiration",
      "Keep license information current for insurance billing",
      "Verify NPI information matches your official records"
    ]
  },
  notifications: {
    title: "Notification Preferences",
    overview: "Control which email notifications you receive from SimplePractice. Customize your notification settings to stay informed without being overwhelmed by emails.",
    flow: [
      "Review all available notification types",
      "Enable or disable notifications by category",
      "Set notification frequency preferences",
      "Configure email delivery times",
      "Test notification delivery",
      "Review and adjust settings based on your workflow"
    ],
    context: "Notification preferences help you stay informed about important events in your practice without email overload. Well-configured notifications ensure you never miss critical updates like appointment cancellations, payment receipts, or security alerts while filtering out less urgent information.",
    easeOfUse: [
      "Category-based organization (Appointments, Billing, Security, etc.)",
      "One-click enable/disable for each notification type",
      "Preview of notification content",
      "Bulk enable/disable by category",
      "Clear descriptions of what each notification contains"
    ],
    keyFeatures: [
      "Granular notification control by type",
      "Category-based organization",
      "Email frequency settings",
      "Notification preview",
      "Delivery time preferences",
      "Notification history"
    ],
    bestPractices: [
      "Enable critical notifications (appointments, payments, security)",
      "Disable less urgent notifications to reduce email clutter",
      "Review notification settings quarterly",
      "Test notification delivery after changes",
      "Keep security and billing notifications always enabled"
    ]
  },
  "practice-details": {
    title: "Practice Details Settings",
    overview: "Configure your practice name, logo, phone numbers, office locations, telehealth settings, and billing addresses. These settings define how your practice appears to clients and on documents.",
    flow: [
      "Enter your practice name and upload logo",
      "Add all phone numbers (main, fax, etc.)",
      "Set up physical office locations with addresses",
      "Configure telehealth location if applicable",
      "Enter billing addresses for invoices",
      "Set timezone and business hours",
      "Customize practice greeting and messaging"
    ],
    context: "Practice details are displayed on invoices, client communications, and your online booking page. Accurate information ensures clients can contact you, find your office, and receive properly formatted billing documents. These settings affect your professional appearance and client experience.",
    easeOfUse: [
      "Visual logo upload with preview",
      "Multiple location management with map integration",
      "Simple address entry with validation",
      "Timezone selection with automatic detection",
      "Business hours calendar interface",
      "Live preview of practice information"
    ],
    keyFeatures: [
      "Practice name and logo customization",
      "Multiple phone number support",
      "Multi-location management",
      "Telehealth location configuration",
      "Billing address management",
      "Timezone and business hours settings",
      "Practice greeting customization"
    ],
    bestPractices: [
      "Use a professional logo that represents your practice",
      "Keep all contact information current",
      "Set up all locations before configuring services",
      "Verify addresses for accurate mapping",
      "Set business hours to match your actual availability",
      "Test how practice information appears on client documents"
    ]
  },
  "business-files": {
    title: "Business Files",
    overview: "Store and share HIPAA-compliant business documents securely. Organize files by category, share with team members, and maintain a secure repository for practice documents.",
    flow: [
      "Upload business documents (policies, procedures, etc.)",
      "Organize files into folders by category",
      "Set sharing permissions for team members",
      "Tag files for easy searching",
      "Download or share files as needed",
      "Archive old files to maintain organization"
    ],
    context: "Business files provide a secure, HIPAA-compliant location to store practice documents, policies, and shared resources. This centralized storage ensures team members can access important documents while maintaining security and compliance standards.",
    easeOfUse: [
      "Drag-and-drop file upload",
      "Folder organization system",
      "Search functionality for quick file location",
      "Preview for common file types",
      "Bulk file operations",
      "Clear sharing permission controls"
    ],
    keyFeatures: [
      "HIPAA-compliant file storage",
      "Folder organization",
      "Team member sharing",
      "File tagging and search",
      "Document preview",
      "Version history",
      "Secure file download"
    ],
    bestPractices: [
      "Organize files into logical folders from the start",
      "Use consistent naming conventions",
      "Tag files for easy searching",
      "Review and archive old files regularly",
      "Set appropriate sharing permissions",
      "Keep sensitive documents in restricted folders"
    ]
  },
  "plan-info": {
    title: "Plan Info Settings",
    overview: "View your current subscription plan, add-ons, billing history, and receipts. Manage your subscription and understand your plan features and usage.",
    flow: [
      "Review your current plan details and features",
      "Check plan usage and limits",
      "View available add-ons and upgrades",
      "Review billing history and download receipts",
      "Update payment method if needed",
      "Manage subscription renewal settings"
    ],
    context: "Plan information helps you understand what features are available in your subscription, track usage against limits, and manage billing. This section ensures you're getting the most from your SimplePractice subscription and can make informed decisions about upgrades or add-ons.",
    easeOfUse: [
      "Clear plan comparison and feature list",
      "Visual usage indicators with progress bars",
      "Easy add-on activation",
      "Downloadable receipts in PDF format",
      "Simple payment method updates",
      "Renewal date and billing cycle display"
    ],
    keyFeatures: [
      "Current plan details and features",
      "Usage tracking and limits",
      "Add-on management",
      "Billing history and receipts",
      "Payment method management",
      "Subscription renewal settings",
      "Plan upgrade options"
    ],
    bestPractices: [
      "Review your plan features regularly",
      "Monitor usage to avoid overage charges",
      "Download and save receipts for tax purposes",
      "Keep payment method current",
      "Evaluate add-ons based on practice needs",
      "Review plan before renewal date"
    ]
  },
  "data-export": {
    title: "Data Export Settings",
    overview: "Export your practice data for backup, migration, or compliance purposes. Generate comprehensive data exports in various formats.",
    flow: [
      "Select the type of data to export (clients, appointments, billing, etc.)",
      "Choose date range for the export",
      "Select export format (CSV, PDF, etc.)",
      "Initiate the export process",
      "Wait for export completion notification",
      "Download the exported file",
      "Store exported data securely"
    ],
    context: "Data export allows you to create backups of your practice information, migrate data to other systems, or provide data for compliance audits. Regular exports help protect your practice data and ensure business continuity.",
    easeOfUse: [
      "Category-based data selection",
      "Date range picker for filtering",
      "Multiple export format options",
      "Progress indicator during export",
      "Email notification when export is ready",
      "Download link with expiration"
    ],
    keyFeatures: [
      "Comprehensive data export",
      "Multiple export formats",
      "Date range filtering",
      "Category selection",
      "Automated export scheduling",
      "Secure download links",
      "Export history"
    ],
    bestPractices: [
      "Export data regularly for backup purposes",
      "Store exports in secure, encrypted locations",
      "Test export and import processes periodically",
      "Keep export files organized by date",
      "Verify export completeness before deleting data",
      "Use exports for compliance documentation"
    ]
  },
  "demo-client": {
    title: "Demo Client Settings",
    overview: "Enable or disable the demo client account for training and demonstration purposes. The demo client allows you to practice using SimplePractice features without affecting real client data.",
    flow: [
      "Navigate to Demo Client settings",
      "Review demo client information",
      "Enable or disable demo client as needed",
      "Use demo client for training new team members",
      "Practice workflows with demo client",
      "Disable when not needed to avoid confusion"
    ],
    context: "The demo client provides a safe environment to learn SimplePractice features, train team members, and test workflows without risking real client data. It's particularly useful for onboarding new staff or exploring new features.",
    easeOfUse: [
      "Simple toggle to enable/disable",
      "Clear indication when demo client is active",
      "Easy access to demo client from client list",
      "Visual distinction from real clients",
      "Quick reset option for demo data"
    ],
    keyFeatures: [
      "One-click enable/disable",
      "Pre-populated demo data",
      "Full feature access for testing",
      "Visual indicators for demo status",
      "Demo data reset capability",
      "Training scenarios included"
    ],
    bestPractices: [
      "Enable demo client during team training",
      "Use for testing new workflows before implementation",
      "Disable when not in use to avoid confusion",
      "Reset demo data regularly for fresh training scenarios",
      "Train team members to identify demo client",
      "Use demo client for feature exploration"
    ]
  },
  "team-members": {
    title: "Team Members Settings",
    overview: "Add, manage, and organize team members in your practice. Control roles, permissions, and access levels for each team member.",
    flow: [
      "Add new team members with email invitations",
      "Assign roles and permissions",
      "Set up user profiles and contact information",
      "Configure individual notification preferences",
      "Manage team member access and status",
      "Remove or deactivate team members as needed"
    ],
    context: "Team member management ensures the right people have appropriate access to practice features and client information. Proper role assignment maintains security while enabling efficient collaboration. This is essential for multi-provider practices and support staff.",
    easeOfUse: [
      "Email-based team member invitations",
      "Role templates for common positions",
      "Visual permission matrix",
      "Bulk team member operations",
      "Search and filter team members",
      "Clear status indicators (Active, Pending, Inactive)"
    ],
    keyFeatures: [
      "Team member invitation system",
      "Role-based access control",
      "Permission management",
      "User profile management",
      "Activity tracking",
      "Team member status management",
      "Bulk operations support"
    ],
    bestPractices: [
      "Assign roles based on job responsibilities",
      "Use principle of least privilege for permissions",
      "Review team member access regularly",
      "Deactivate accounts immediately when staff leaves",
      "Train team members on their access levels",
      "Keep team member contact information current"
    ]
  },
  "client-billing-documents": {
    title: "Client Billing Documents Settings",
    overview: "Automate the generation and delivery of invoices, statements, and superbills. Configure billing document templates and automation rules.",
    flow: [
      "Configure invoice automation settings",
      "Set up statement generation rules",
      "Customize superbill templates",
      "Configure automatic delivery methods",
      "Set up billing reminders",
      "Test document generation and delivery"
    ],
    context: "Automated billing documents save time and ensure consistent, professional communication with clients. Proper configuration reduces manual work, improves cash flow through timely invoicing, and maintains compliance with billing requirements.",
    easeOfUse: [
      "Template-based document customization",
      "Visual preview of documents",
      "Simple automation rule setup",
      "One-click test generation",
      "Bulk document operations",
      "Clear delivery status tracking"
    ],
    keyFeatures: [
      "Automated invoice generation",
      "Statement automation",
      "Customizable superbill templates",
      "Multiple delivery methods (email, portal, print)",
      "Billing reminder automation",
      "Document customization options",
      "Delivery tracking and history"
    ],
    bestPractices: [
      "Set up automation immediately after account setup",
      "Customize templates to match your practice branding",
      "Test document delivery before going live",
      "Review automation rules quarterly",
      "Keep billing addresses current",
      "Monitor delivery success rates"
    ]
  },
  "insurance-billing": {
    title: "Insurance Billing Settings",
    overview: "Manage how claims, coverage information, and superbills appear to insurance companies. Configure billing provider information and claim settings.",
    flow: [
      "Set up default billing provider information",
      "Configure service facility location",
      "Set claim submission preferences",
      "Customize superbill appearance",
      "Configure coverage verification settings",
      "Set up claim tracking and follow-up"
    ],
    context: "Insurance billing settings ensure claims are submitted correctly to insurance companies, reducing denials and speeding up reimbursement. Proper configuration requires accurate provider information and understanding of payer requirements.",
    easeOfUse: [
      "Provider information auto-population from clinical info",
      "Visual superbill preview",
      "Simple claim settings configuration",
      "Coverage verification integration",
      "Clear payer requirement indicators",
      "Claim status tracking dashboard"
    ],
    keyFeatures: [
      "Billing provider information management",
      "Service facility location configuration",
      "Claim submission settings",
      "Superbill customization",
      "Coverage verification",
      "Claim tracking and follow-up",
      "Payer-specific settings"
    ],
    bestPractices: [
      "Verify all provider information matches NPI records",
      "Set up service facility location correctly",
      "Review payer requirements before submitting claims",
      "Customize superbills to match payer preferences",
      "Enable coverage verification when available",
      "Monitor claim status regularly"
    ]
  },
  payers: {
    title: "Payers Settings",
    overview: "Add and manage insurance payers you work with. Search available payers, add manually, and manage payer-specific settings and enrollments.",
    flow: [
      "Search for insurance payers in the database",
      "Add payers you work with to your list",
      "Manually add payers not in the database",
      "Configure payer-specific settings",
      "Set up payer enrollments if required",
      "Review and update payer information regularly"
    ],
    context: "Managing payers ensures you can properly submit claims and verify coverage for clients. A complete payer list helps streamline billing workflows and reduces errors in claim submission.",
    easeOfUse: [
      "Search functionality for quick payer lookup",
      "Auto-population of payer information",
      "Manual payer addition form",
      "Payer-specific settings management",
      "Bulk payer operations",
      "Clear payer status indicators"
    ],
    keyFeatures: [
      "Insurance payer database integration",
      "Payer search and filtering",
      "Manual payer addition",
      "Payer-specific settings",
      "Enrollment management",
      "Payer contact information",
      "Claim submission preferences"
    ],
    bestPractices: [
      "Add all payers you work with upfront",
      "Verify payer information before adding",
      "Keep payer contact information current",
      "Review payer list quarterly",
      "Remove inactive payers to reduce clutter",
      "Note payer-specific requirements in settings"
    ]
  },
  "online-payments": {
    title: "Online Payments Settings",
    overview: "Set up and manage online payment processing to accept credit and debit cards from clients. Configure payment methods, fees, and processing settings.",
    flow: [
      "Connect a payment processor (Stripe, etc.)",
      "Configure payment methods and card types",
      "Set up payment processing fees",
      "Configure automatic payment application",
      "Set up payment receipts and confirmations",
      "Test payment processing"
    ],
    context: "Online payments improve cash flow by making it easy for clients to pay invoices and outstanding balances. Proper setup ensures secure, compliant payment processing while providing a smooth client experience.",
    easeOfUse: [
      "Step-by-step payment processor setup",
      "Simple fee configuration",
      "Visual payment method selection",
      "One-click test payment",
      "Clear processing status indicators",
      "Payment history dashboard"
    ],
    keyFeatures: [
      "Payment processor integration",
      "Multiple payment method support",
      "Processing fee configuration",
      "Automatic payment application",
      "Payment receipt generation",
      "Payment history and reporting",
      "Refund processing"
    ],
    bestPractices: [
      "Set up online payments early to improve cash flow",
      "Test payment processing before going live",
      "Configure fees to cover processing costs",
      "Enable automatic payment application",
      "Monitor payment success rates",
      "Keep payment processor information current"
    ]
  },
  autopay: {
    title: "AutoPay Settings",
    overview: "Automatically apply credits and charge payments to client invoices on a daily basis. Streamline payment processing and reduce manual work.",
    flow: [
      "Enable AutoPay for your practice",
      "Configure payment application rules",
      "Set up credit application preferences",
      "Configure payment method priority",
      "Set up notification preferences",
      "Monitor AutoPay activity"
    ],
    context: "AutoPay automates the application of payments and credits to invoices, reducing manual work and ensuring timely payment processing. This feature improves efficiency and cash flow management.",
    easeOfUse: [
      "Simple enable/disable toggle",
      "Clear rule configuration interface",
      "Visual payment application preview",
      "Activity log for monitoring",
      "Easy rule modification",
      "Notification settings"
    ],
    keyFeatures: [
      "Automatic payment application",
      "Credit application automation",
      "Payment method priority rules",
      "Daily processing schedule",
      "Activity logging",
      "Notification system",
      "Manual override capability"
    ],
    bestPractices: [
      "Enable AutoPay to reduce manual work",
      "Review AutoPay activity regularly",
      "Configure rules to match your workflow",
      "Set up notifications for important events",
      "Monitor for any processing errors",
      "Keep payment methods current"
    ]
  },
  services: {
    title: "Services Settings",
    overview: "Create and manage services offered by your practice. Set rates, billing codes, durations, and service-specific settings.",
    flow: [
      "Add new services with names and descriptions",
      "Set service rates and billing codes",
      "Configure service duration",
      "Assign services to providers",
      "Set up service-specific billing rules",
      "Organize services by category"
    ],
    context: "Services define what you offer to clients and how they're billed. Proper service setup ensures accurate billing, scheduling, and reporting. Services are the foundation of your practice's service catalog.",
    easeOfUse: [
      "Simple service creation form",
      "Billing code lookup and validation",
      "Service category organization",
      "Bulk service operations",
      "Service search and filtering",
      "Visual service list"
    ],
    keyFeatures: [
      "Service catalog management",
      "Rate and pricing configuration",
      "Billing code assignment",
      "Service duration settings",
      "Provider assignment",
      "Service categories",
      "Service-specific billing rules"
    ],
    bestPractices: [
      "Create all services before scheduling appointments",
      "Use clear, descriptive service names",
      "Verify billing codes match payer requirements",
      "Set accurate service durations",
      "Organize services into logical categories",
      "Review and update rates regularly"
    ]
  },
  products: {
    title: "Products Settings",
    overview: "Manage products you sell to clients, such as books, supplements, or other items. Set prices, track inventory, and configure product-specific settings.",
    flow: [
      "Add products with names and descriptions",
      "Set product prices and tax settings",
      "Configure inventory tracking if needed",
      "Add product images and details",
      "Set up product categories",
      "Manage product availability"
    ],
    context: "Products allow you to sell physical or digital items to clients beyond services. Product management helps track sales, manage inventory, and provide a complete offering to clients.",
    easeOfUse: [
      "Simple product creation form",
      "Image upload for products",
      "Category organization",
      "Inventory tracking interface",
      "Product search and filtering",
      "Bulk product operations"
    ],
    keyFeatures: [
      "Product catalog management",
      "Pricing and tax configuration",
      "Inventory tracking",
      "Product images and descriptions",
      "Product categories",
      "Product availability settings",
      "Sales reporting"
    ],
    bestPractices: [
      "Use clear product names and descriptions",
      "Add product images for better presentation",
      "Set up inventory tracking for physical products",
      "Organize products into categories",
      "Keep product prices current",
      "Review product sales regularly"
    ]
  },
  "client-portal-permissions": {
    title: "Client Portal Permissions Settings",
    overview: "Control what clients can access in the portal, configure online appointment requests, set client permissions, and customize the portal greeting.",
    flow: [
      "Enable or disable client portal features",
      "Configure appointment request settings",
      "Set client permission levels",
      "Customize portal greeting and messaging",
      "Configure document access permissions",
      "Set up portal notification preferences"
    ],
    context: "Client portal permissions balance client convenience with security and practice control. Well-configured permissions provide clients with necessary access while maintaining appropriate boundaries and protecting sensitive information.",
    easeOfUse: [
      "Feature toggle interface",
      "Permission matrix visualization",
      "Greeting customization editor",
      "Preview of portal appearance",
      "Permission templates",
      "Clear permission descriptions"
    ],
    keyFeatures: [
      "Feature access control",
      "Appointment request configuration",
      "Document access permissions",
      "Portal greeting customization",
      "Client permission levels",
      "Notification preferences",
      "Portal appearance settings"
    ],
    bestPractices: [
      "Enable features that improve client experience",
      "Set appropriate permission levels by client type",
      "Customize portal greeting to match your practice",
      "Review permissions regularly",
      "Test portal from client perspective",
      "Keep portal messaging current"
    ]
  },
  calendar: {
    title: "Calendar Settings",
    overview: "Configure calendar alerts, sync with external calendars (Google, Microsoft 365, Apple), set cancellation policies, and manage calendar preferences.",
    flow: [
      "Set up calendar sync with external calendars",
      "Configure appointment alerts and reminders",
      "Set cancellation and no-show policies",
      "Configure calendar display preferences",
      "Set up availability rules",
      "Test calendar sync functionality"
    ],
    context: "Calendar settings ensure appointments are properly managed, synced across platforms, and that you're notified of important events. External calendar sync prevents double-booking and keeps your schedule consistent across devices.",
    easeOfUse: [
      "One-click calendar sync setup",
      "Visual calendar display options",
      "Simple alert configuration",
      "Policy setup with examples",
      "Availability rule builder",
      "Sync status indicators"
    ],
    keyFeatures: [
      "External calendar sync (Google, Microsoft 365, Apple)",
      "Appointment alerts and reminders",
      "Cancellation policy configuration",
      "Calendar display customization",
      "Availability rules",
      "Sync conflict resolution",
      "Calendar export options"
    ],
    bestPractices: [
      "Set up calendar sync immediately",
      "Configure alerts for important events",
      "Set clear cancellation policies",
      "Review sync status regularly",
      "Test calendar sync after setup",
      "Keep external calendars updated"
    ]
  },
  "contact-form": {
    title: "Contact Form Settings",
    overview: "Receive website inquiries directly in SimplePractice. Configure form fields, notification settings, and form appearance.",
    flow: [
      "Enable contact form integration",
      "Configure form fields and questions",
      "Set up notification preferences",
      "Customize form appearance",
      "Get embed code for your website",
      "Test form submission"
    ],
    context: "Contact form integration streamlines the process of receiving and managing inquiries from your website. It centralizes communication and ensures no inquiries are missed while providing a professional experience for potential clients.",
    easeOfUse: [
      "Simple form field configuration",
      "Drag-and-drop field organization",
      "Visual form preview",
      "Easy embed code generation",
      "Notification setup",
      "Form submission management"
    ],
    keyFeatures: [
      "Website form integration",
      "Customizable form fields",
      "Automatic inquiry creation",
      "Notification system",
      "Form appearance customization",
      "Embed code generation",
      "Submission tracking"
    ],
    bestPractices: [
      "Set up contact form early to capture inquiries",
      "Keep form fields simple and relevant",
      "Test form submission regularly",
      "Respond to inquiries promptly",
      "Customize form to match your website",
      "Monitor form submission rates"
    ]
  },
  prescreener: {
    title: "Prescreener Settings",
    overview: "Collect information from prospective clients to determine if they're a good fit for your practice. Configure prescreener questions and logic.",
    flow: [
      "Enable prescreener feature",
      "Create prescreener questions",
      "Set up question logic and branching",
      "Configure scoring or evaluation criteria",
      "Set up notification preferences",
      "Test prescreener flow"
    ],
    context: "Prescreener helps you efficiently evaluate potential clients before scheduling appointments, saving time and ensuring good client-practitioner matches. It's particularly useful for practices with specific client criteria or limited availability.",
    easeOfUse: [
      "Question builder interface",
      "Logic and branching configuration",
      "Visual flow preview",
      "Template questions available",
      "Scoring setup",
      "Response management"
    ],
    keyFeatures: [
      "Custom question creation",
      "Question logic and branching",
      "Scoring and evaluation",
      "Response management",
      "Notification system",
      "Prescreener analytics",
      "Template library"
    ],
    bestPractices: [
      "Keep questions relevant and concise",
      "Use branching to personalize the experience",
      "Test prescreener flow before going live",
      "Review responses regularly",
      "Update questions based on feedback",
      "Set clear evaluation criteria"
    ]
  },
  widgets: {
    title: "Widgets Settings",
    overview: "Add appointment request and contact form widgets to your website. Get embed codes and configure widget appearance and behavior.",
    flow: [
      "Choose widget type (appointment request, contact form)",
      "Customize widget appearance",
      "Configure widget settings and behavior",
      "Get embed code for your website",
      "Test widget functionality",
      "Monitor widget usage"
    ],
    context: "Widgets extend SimplePractice functionality to your website, allowing clients to request appointments or submit contact forms directly from your site. This improves client experience and streamlines inquiry management.",
    easeOfUse: [
      "Visual widget customization",
      "Live preview of widget appearance",
      "Simple embed code generation",
      "Widget template selection",
      "Settings configuration",
      "Usage analytics"
    ],
    keyFeatures: [
      "Appointment request widget",
      "Contact form widget",
      "Customizable appearance",
      "Embed code generation",
      "Widget analytics",
      "Multiple widget support",
      "Responsive design"
    ],
    bestPractices: [
      "Place widgets prominently on your website",
      "Customize appearance to match your site",
      "Test widgets on different devices",
      "Monitor widget usage and conversions",
      "Keep widget settings current",
      "Use widgets to improve client experience"
    ]
  },
  "template-library": {
    title: "Template Library Settings",
    overview: "Manage intake documents, progress notes, treatment plans, and other document templates. Organize and customize templates for your practice.",
    flow: [
      "Browse available template library",
      "Add templates to your practice",
      "Customize templates to match your needs",
      "Organize templates by category",
      "Share templates with team members",
      "Create custom templates"
    ],
    context: "Template library provides standardized documents for common practice needs, ensuring consistency and saving time. Customizable templates allow you to adapt documents to your specific practice requirements while maintaining professional standards.",
    easeOfUse: [
      "Template library browser",
      "Category-based organization",
      "Template preview",
      "Simple customization interface",
      "Template search and filtering",
      "Bulk template operations"
    ],
    keyFeatures: [
      "Template library access",
      "Intake document templates",
      "Progress note templates",
      "Treatment plan templates",
      "Template customization",
      "Template sharing",
      "Custom template creation"
    ],
    bestPractices: [
      "Review template library regularly for new options",
      "Customize templates to match your practice style",
      "Organize templates by category",
      "Share useful templates with team",
      "Create custom templates for unique needs",
      "Keep templates updated with best practices"
    ]
  },
  "shareable-documents": {
    title: "Shareable Documents Settings",
    overview: "Manage default intake documents, consent forms, uploaded files, and scored measures that are shared with clients. Control document access and delivery.",
    flow: [
      "Upload or select default intake documents",
      "Configure consent forms",
      "Set up document sharing rules",
      "Manage uploaded files",
      "Configure scored measures",
      "Set up document delivery preferences"
    ],
    context: "Shareable documents streamline the intake process and ensure clients receive necessary forms and information. Proper management ensures compliance, improves client experience, and reduces administrative work.",
    easeOfUse: [
      "Document upload interface",
      "Visual document organization",
      "Sharing rule configuration",
      "Document preview",
      "Bulk document operations",
      "Delivery status tracking"
    ],
    keyFeatures: [
      "Default intake document management",
      "Consent form configuration",
      "File upload and storage",
      "Scored measures integration",
      "Document sharing rules",
      "Delivery method configuration",
      "Document access tracking"
    ],
    bestPractices: [
      "Set up default intake documents early",
      "Keep consent forms current with regulations",
      "Organize documents logically",
      "Review document access regularly",
      "Test document delivery to clients",
      "Update documents as regulations change"
    ]
  },
  email: {
    title: "Email Settings",
    overview: "Customize automated email templates for appointment confirmations, reminders, and other client communications. Configure email delivery and branding.",
    flow: [
      "Review available email templates",
      "Customize email content and branding",
      "Configure email delivery settings",
      "Set up email automation rules",
      "Test email delivery",
      "Monitor email delivery status"
    ],
    context: "Email automation improves client communication while reducing manual work. Well-crafted emails maintain professional communication, reduce no-shows through reminders, and keep clients informed about their care.",
    easeOfUse: [
      "Template-based email customization",
      "Visual email preview",
      "Simple automation rule setup",
      "Email delivery testing",
      "Delivery status dashboard",
      "Bulk email operations"
    ],
    keyFeatures: [
      "Email template library",
      "Customizable email content",
      "Email branding customization",
      "Automated email delivery",
      "Email delivery tracking",
      "Template variables",
      "Email scheduling"
    ],
    bestPractices: [
      "Customize emails to match your practice voice",
      "Test email delivery before going live",
      "Keep email content current and relevant",
      "Monitor delivery success rates",
      "Review email templates quarterly",
      "Use email automation to reduce no-shows"
    ]
  },
  text: {
    title: "Text Settings",
    overview: "Configure automated text message reminders for appointments and documents. Set up SMS templates and delivery preferences.",
    flow: [
      "Enable text messaging feature",
      "Configure text message templates",
      "Set up appointment reminder texts",
      "Configure document reminder texts",
      "Set delivery timing preferences",
      "Test text message delivery"
    ],
    context: "Text messaging provides timely, convenient communication with clients. SMS reminders are highly effective at reducing no-shows and ensuring clients complete necessary actions like filling out forms or making payments.",
    easeOfUse: [
      "Template-based message creation",
      "Message preview",
      "Simple delivery timing setup",
      "One-click test message",
      "Delivery status tracking",
      "Message history"
    ],
    keyFeatures: [
      "SMS template management",
      "Appointment reminder texts",
      "Document reminder texts",
      "Delivery timing configuration",
      "Message personalization",
      "Delivery tracking",
      "Opt-out management"
    ],
    bestPractices: [
      "Keep text messages concise and clear",
      "Set reminders 24-48 hours before appointments",
      "Test text delivery before going live",
      "Monitor opt-out rates",
      "Review message templates regularly",
      "Use texts for time-sensitive communications"
    ]
  },
  voice: {
    title: "Voice Settings",
    overview: "Set up automated voicemail reminders for appointments and cancellations. Configure voice message templates and delivery preferences.",
    flow: [
      "Enable voice messaging feature",
      "Configure voice message templates",
      "Set up appointment reminder voicemails",
      "Configure cancellation voicemails",
      "Set delivery timing preferences",
      "Test voice message delivery"
    ],
    context: "Voice messaging provides an alternative communication channel for clients who prefer phone calls or when text/email isn't appropriate. Automated voicemails ensure consistent communication while saving time.",
    easeOfUse: [
      "Template-based message creation",
      "Message preview and testing",
      "Simple delivery timing setup",
      "Voice message recording",
      "Delivery status tracking",
      "Message history"
    ],
    keyFeatures: [
      "Voicemail template management",
      "Appointment reminder voicemails",
      "Cancellation voicemails",
      "Delivery timing configuration",
      "Message personalization",
      "Delivery tracking",
      "Voice message recording"
    ],
    bestPractices: [
      "Keep voice messages brief and clear",
      "Set reminders 24-48 hours before appointments",
      "Test voice delivery before going live",
      "Use professional, friendly tone",
      "Review message templates regularly",
      "Monitor delivery success rates"
    ]
  },
  "secure-messaging": {
    title: "Secure Messaging Settings",
    overview: "Enable HIPAA-compliant messaging between team members and clients. Configure messaging permissions, notifications, and security settings.",
    flow: [
      "Enable secure messaging feature",
      "Configure messaging permissions",
      "Set up notification preferences",
      "Configure message retention settings",
      "Set up message templates",
      "Train team on secure messaging use"
    ],
    context: "Secure messaging provides a HIPAA-compliant way to communicate with clients and team members, improving communication while maintaining security and compliance. It's essential for practices that need to discuss sensitive information.",
    easeOfUse: [
      "Simple feature enable/disable",
      "Permission matrix interface",
      "Notification configuration",
      "Message template management",
      "Search and filter messages",
      "Clear security indicators"
    ],
    keyFeatures: [
      "HIPAA-compliant messaging",
      "Team and client messaging",
      "Message encryption",
      "Message retention management",
      "Notification system",
      "Message templates",
      "Message search and archiving"
    ],
    bestPractices: [
      "Enable secure messaging for HIPAA compliance",
      "Train team on proper messaging use",
      "Set appropriate retention policies",
      "Use message templates for common communications",
      "Monitor message activity",
      "Keep messaging permissions current"
    ]
  }
};

export default function SimplePracticeDocumentation({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const doc = documentation[section];

  if (!doc) return null;

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="text-purple-600 hover:text-purple-700 transition"
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
        <div className="space-y-6 pt-4 border-t border-purple-200">
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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-700 font-semibold text-xs flex-shrink-0">
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
                  <svg className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <svg className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <svg className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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


