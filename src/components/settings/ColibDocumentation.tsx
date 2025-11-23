"use client";

import { useState } from "react";

type Section = 
  | "general" | "appointments" | "booking-page" | "waitlist" | "team" | "communications" | "clients" | "notes" 
  | "scheduler" | "web-page" | "recalls" | "forms" | "invoices" | "payments" | "telehealth" | "rooms" 
  | "security" | "inventory" | "online-sales"
  | "profile" | "password" | "availability" | "calendar-sync" | "personal-security" | "signature";

const documentation: Record<Section, {
  title: string;
  overview: string;
  flow: string[];
  context: string;
  easeOfUse: string[];
  keyFeatures: string[];
  bestPractices?: string[];
}> = {
  general: {
    title: "General Settings",
    overview: "Configure your practice's core information including branding, contact details, business address, opening hours, and theme customization. This section establishes your practice's identity and basic operational parameters.",
    flow: [
      "Upload your practice logo in the Logo section",
      "Enter business contact information (name, email, phone, description)",
      "Configure branding preferences (hide Colib brand if desired)",
      "Select your theme color to match your brand identity",
      "Set up referral and promo code settings",
      "Add your complete business address",
      "Link social media accounts and website",
      "Configure opening hours for each day of the week",
      "Upload a background image for your booking page"
    ],
    context: "General settings form the foundation of your Colib practice profile. These settings control how your practice appears to clients, what information is displayed, and how your brand is presented. Proper configuration ensures professional presentation and accurate client communication.",
    easeOfUse: [
      "Visual logo upload with drag-and-drop support",
      "Color picker for easy theme customization",
      "Day-by-day opening hours configuration",
      "Social media link management in one place",
      "Real-time preview of branding changes"
    ],
    keyFeatures: [
      "Logo upload and management",
      "Business contact information",
      "Brand visibility controls",
      "Theme color customization",
      "Referral and promo code system",
      "Complete business address",
      "Social media integration",
      "Flexible opening hours",
      "Background image customization"
    ],
    bestPractices: [
      "Use high-quality logo images for professional appearance",
      "Keep contact information current and accurate",
      "Set opening hours to match your actual availability",
      "Choose theme colors that match your brand",
      "Complete all sections for better client trust",
      "Update social media links regularly"
    ]
  },
  appointments: {
    title: "Appointments Settings",
    overview: "Manage service categories and appointment types. Organize your services into categories and define different appointment types with durations, pricing, and availability.",
    flow: [
      "Create service categories to organize your services",
      "Add appointment types within each category",
      "Configure duration, pricing, and description for each type",
      "Set availability rules for each appointment type",
      "Enable or disable specific appointment types",
      "Organize categories by priority or frequency"
    ],
    context: "Appointments settings control what services clients can book and how they appear in your scheduler. Well-organized categories and appointment types make it easier for clients to find and book the right service, improving booking rates and client satisfaction.",
    easeOfUse: [
      "Category-based organization",
      "Quick add/edit functionality",
      "Visual category management",
      "Search and filter capabilities",
      "Drag-and-drop reordering"
    ],
    keyFeatures: [
      "Service category management",
      "Multiple appointment types per category",
      "Duration and pricing configuration",
      "Availability controls",
      "Enable/disable toggles",
      "Category organization"
    ],
    bestPractices: [
      "Create clear, descriptive category names",
      "Group related services together",
      "Set realistic durations for each service",
      "Keep pricing information current",
      "Disable unavailable services promptly",
      "Review and update categories regularly"
    ]
  },
  "booking-page": {
    title: "Booking Page Settings",
    overview: "Configure how clients can book appointments with you. Choose between online booking and request forms, and customize the booking experience.",
    flow: [
      "Select booking type: Online booking or Request form",
      "If using request form, select the appropriate form",
      "Configure booking policies and restrictions",
      "Set up payment requirements for bookings",
      "Customize booking page appearance",
      "Test the booking flow from client perspective"
    ],
    context: "Booking page settings determine how clients interact with your scheduling system. The choice between instant booking and request forms affects client experience and your control over appointment scheduling. Proper configuration reduces no-shows and improves booking efficiency.",
    easeOfUse: [
      "Simple toggle between booking types",
      "Form selection dropdown",
      "Clear policy configuration",
      "Visual booking page preview"
    ],
    keyFeatures: [
      "Online booking option",
      "Request form option",
      "Form selection",
      "Booking policy configuration",
      "Payment integration"
    ],
    bestPractices: [
      "Use online booking for standard services",
      "Use request forms for complex consultations",
      "Require payment for online bookings when possible",
      "Test booking flow regularly",
      "Keep booking policies clear and fair"
    ]
  },
  waitlist: {
    title: "Waitlist Settings",
    overview: "Enable and manage a waitlist feature that allows clients to join a queue when preferred appointment times are unavailable.",
    flow: [
      "Enable the waitlist feature using the toggle",
      "Configure waitlist notification settings",
      "Set up automatic waitlist management rules",
      "Define how clients are notified of available slots",
      "Monitor waitlist usage and effectiveness"
    ],
    context: "The waitlist feature helps maximize your schedule utilization by allowing clients to express interest in unavailable time slots. When appointments become available, waitlisted clients can be notified automatically, reducing gaps in your schedule.",
    easeOfUse: [
      "Simple on/off toggle",
      "Automatic notification system",
      "Easy client management"
    ],
    keyFeatures: [
      "Waitlist enable/disable",
      "Automatic notifications",
      "Client queue management",
      "Slot availability alerts"
    ],
    bestPractices: [
      "Enable waitlist for popular time slots",
      "Set up clear notification preferences",
      "Monitor waitlist regularly",
      "Contact waitlisted clients promptly when slots open"
    ]
  },
  team: {
    title: "Team Settings",
    overview: "Manage your practice team members, their roles, permissions, and access levels. Add new team members and configure their individual settings.",
    flow: [
      "View existing team members in the team table",
      "Click 'Add new team member' to open the creation modal",
      "Upload profile picture and enter general information",
      "Configure team member rights and permissions",
      "Set security settings (password, 2FA)",
      "Assign scheduler color for visual identification",
      "Save and verify team member appears in the list",
      "Edit or remove team members as needed"
    ],
    context: "Team settings allow you to manage all practitioners and staff members in your practice. Each team member can have different permissions, access levels, and visual identifiers. Proper team management ensures security and efficient practice operations.",
    easeOfUse: [
      "Multi-step modal for team member creation",
      "Visual team member table",
      "Search and filter capabilities",
      "Quick edit and remove actions",
      "Color-coded scheduler identification"
    ],
    keyFeatures: [
      "Team member management",
      "Role and permission configuration",
      "Profile picture upload",
      "Security settings per member",
      "Scheduler color assignment",
      "Rights and access control"
    ],
    bestPractices: [
      "Set appropriate permissions for each role",
      "Use unique scheduler colors for easy identification",
      "Require strong passwords and 2FA for all members",
      "Review team member access regularly",
      "Remove inactive team members promptly",
      "Keep team member information current"
    ]
  },
  communications: {
    title: "Communications Settings",
    overview: "Configure communication preferences including tone of voice, email signatures, notification recipients, and reply-to addresses. Control how your practice communicates with clients.",
    flow: [
      "Set the tone of voice for automated communications",
      "Configure email signatures (English and French)",
      "Add event notification recipients",
      "Set up email reply-to addresses",
      "Test email templates to ensure proper formatting",
      "Review communication preferences regularly"
    ],
    context: "Communications settings control how your practice interacts with clients through automated emails and notifications. Consistent tone, professional signatures, and proper recipient configuration ensure effective client communication and maintain your practice's professional image.",
    easeOfUse: [
      "Tone selection dropdown",
      "Rich text editor for signatures",
      "Multiple language support",
      "Easy recipient management",
      "Email address validation"
    ],
    keyFeatures: [
      "Tone of voice configuration",
      "Multi-language email signatures",
      "Event notification management",
      "Reply-to address configuration",
      "Rich text signature editor"
    ],
    bestPractices: [
      "Choose a tone that matches your practice style",
      "Keep email signatures professional and concise",
      "Include all necessary contact information in signatures",
      "Set up multiple notification recipients for redundancy",
      "Test email formatting before going live",
      "Update signatures when contact information changes"
    ]
  },
  clients: {
    title: "Clients Settings",
    overview: "Manage client-related settings including phone number controls, score/goals features, and additional custom fields. Customize how client information is collected and displayed.",
    flow: [
      "Enable or disable phone number control features",
      "Toggle score/goals functionality",
      "Add custom client fields using the 'Add Field' modal",
      "Configure field types and requirements",
      "Organize custom fields by priority",
      "Review client data collection regularly"
    ],
    context: "Client settings determine what information is collected from clients and how it's managed. Custom fields allow you to gather practice-specific information beyond standard contact details. Proper configuration ensures you have all necessary client information for effective care delivery.",
    easeOfUse: [
      "Simple toggle switches",
      "Modal-based field creation",
      "Field type selection",
      "Drag-and-drop field organization"
    ],
    keyFeatures: [
      "Phone number control",
      "Score/goals features",
      "Custom field creation",
      "Field type configuration",
      "Required field settings"
    ],
    bestPractices: [
      "Only collect necessary client information",
      "Use custom fields for practice-specific data",
      "Keep field requirements reasonable",
      "Review custom fields periodically",
      "Ensure compliance with data privacy regulations"
    ]
  },
  notes: {
    title: "Notes Settings",
    overview: "Configure AI-powered note generation, templates, online meeting integration, and note management. Automate note creation and customize templates for different appointment types.",
    flow: [
      "Enable AI-powered note generation",
      "Configure note templates for different scenarios",
      "Set up online meeting integration",
      "Review AI package information and usage",
      "Create and customize note templates",
      "Test note generation with sample appointments",
      "Monitor AI token usage"
    ],
    context: "Notes settings enable automated note generation using AI, saving time while ensuring consistent documentation. Templates provide structure for different appointment types, while online meeting integration can automatically capture relevant information. Proper configuration improves documentation efficiency and quality.",
    easeOfUse: [
      "Template-based configuration",
      "AI integration management",
      "Usage monitoring",
      "Template customization",
      "One-click template activation"
    ],
    keyFeatures: [
      "AI-powered note generation",
      "Customizable note templates",
      "Online meeting integration",
      "AI package management",
      "Template library",
      "Usage tracking"
    ],
    bestPractices: [
      "Create templates for common appointment types",
      "Review AI-generated notes for accuracy",
      "Customize templates to match your documentation style",
      "Monitor AI token usage to manage costs",
      "Update templates as your practice evolves",
      "Test integrations before full deployment"
    ]
  },
  scheduler: {
    title: "Scheduler Settings",
    overview: "Configure calendar behavior, notification preferences, appointment type colors, availability groups, and appointment pauses. Customize how your scheduler displays and manages appointments.",
    flow: [
      "Configure calendar behavior toggles",
      "Set notification preferences for appointments",
      "Assign colors to different appointment types",
      "Create and manage availability groups",
      "Set up appointment pauses (breaks, lunch, etc.)",
      "Test scheduler display and functionality",
      "Review color scheme for clarity"
    ],
    context: "Scheduler settings control how appointments are displayed, organized, and managed in your calendar. Color coding, availability groups, and pause settings help you visualize your schedule effectively and manage your time efficiently. Proper configuration improves scheduling accuracy and reduces conflicts.",
    easeOfUse: [
      "Toggle-based configuration",
      "Color picker for appointment types",
      "Visual availability group management",
      "Drag-and-drop pause configuration",
      "Real-time scheduler preview"
    ],
    keyFeatures: [
      "Calendar behavior controls",
      "Notification preferences",
      "Appointment type color coding",
      "Availability groups",
      "Appointment pauses",
      "Visual schedule customization"
    ],
    bestPractices: [
      "Use consistent colors for similar appointment types",
      "Set up availability groups for different service types",
      "Configure pauses to prevent overbooking",
      "Enable helpful notifications without overwhelming",
      "Review scheduler settings regularly",
      "Test calendar behavior after changes"
    ]
  },
  "web-page": {
    title: "Web Page Settings",
    overview: "Enable and configure a custom web page for your practice. Create a professional online presence that matches your brand.",
    flow: [
      "Enable the custom web page feature",
      "Configure web page content and design",
      "Add practice information and services",
      "Customize appearance to match your brand",
      "Preview and publish your web page",
      "Share your web page URL with clients"
    ],
    context: "A custom web page provides a professional online presence for your practice. It serves as a landing page where potential clients can learn about your services, view your availability, and book appointments. A well-designed web page improves your online visibility and client acquisition.",
    easeOfUse: [
      "Simple enable/disable toggle",
      "Visual page builder",
      "Template selection",
      "Live preview functionality"
    ],
    keyFeatures: [
      "Custom web page creation",
      "Brand customization",
      "Service display",
      "Booking integration",
      "Mobile-responsive design"
    ],
    bestPractices: [
      "Keep web page content current",
      "Use high-quality images",
      "Include clear call-to-action buttons",
      "Ensure mobile responsiveness",
      "Update services and information regularly",
      "Test booking functionality from web page"
    ]
  },
  recalls: {
    title: "Recalls Settings",
    overview: "Manage client recall reminders and scheduling. Create recall campaigns and configure automatic reminders for follow-up appointments.",
    flow: [
      "Click 'Create recall' to set up a new recall campaign",
      "Configure recall parameters (timeframe, conditions)",
      "Enable practitioner-specific recalls if needed",
      "Set up automatic reminder notifications",
      "Monitor recall effectiveness and client responses",
      "Adjust recall settings based on results"
    ],
    context: "Recalls help ensure clients return for follow-up appointments, improving continuity of care and practice revenue. Automated recall systems reduce manual work while increasing appointment adherence. Proper configuration ensures timely follow-ups without overwhelming clients.",
    easeOfUse: [
      "Simple recall creation",
      "Practitioner-specific options",
      "Automatic reminder system",
      "Recall tracking and monitoring"
    ],
    keyFeatures: [
      "Recall campaign creation",
      "Practitioner-specific recalls",
      "Automatic reminders",
      "Recall tracking",
      "Client notification system"
    ],
    bestPractices: [
      "Set appropriate recall timeframes",
      "Enable practitioner-specific recalls for specialized care",
      "Personalize recall messages",
      "Monitor recall response rates",
      "Adjust recall frequency based on client needs",
      "Follow up on unresponsive recalls"
    ]
  },
  forms: {
    title: "Forms Settings",
    overview: "Configure client forms, notification settings, client linking, signature requirements, and automatic reminders. Manage how clients complete and submit forms.",
    flow: [
      "Configure form notification settings",
      "Set up client linking options",
      "Enable signature requirements for forms",
      "Configure automatic form reminders",
      "Create and customize form templates",
      "Test form submission process",
      "Review form completion rates"
    ],
    context: "Forms settings control how clients interact with intake forms, consent forms, and other documentation. Proper configuration ensures forms are completed on time, properly signed, and linked to the correct client records. This improves documentation quality and compliance.",
    easeOfUse: [
      "Toggle-based configuration",
      "Form template management",
      "Automatic reminder system",
      "Client linking automation"
    ],
    keyFeatures: [
      "Form notification settings",
      "Client linking options",
      "Signature requirements",
      "Automatic reminders",
      "Form template library"
    ],
    bestPractices: [
      "Require signatures for important forms",
      "Set up automatic reminders for incomplete forms",
      "Link forms to client records automatically",
      "Review form completion rates regularly",
      "Update form templates as needed",
      "Test form flow from client perspective"
    ]
  },
  invoices: {
    title: "Invoices Settings",
    overview: "Configure invoice generation, payment terms, taxes, references, payment methods, and automation. Manage how invoices are created, sent, and paid.",
    flow: [
      "Set up payment terms and tax rates",
      "Configure invoice references and numbering",
      "Select accepted payment methods",
      "Customize invoice footer text",
      "Enable automation for reminders, sending, and charging",
      "Configure receipt generation",
      "Test invoice creation and delivery"
    ],
    context: "Invoice settings control how you bill clients and collect payments. Proper configuration ensures professional invoices, accurate tax calculations, timely payment collection, and automated processes that save time. These settings directly impact your revenue and cash flow.",
    easeOfUse: [
      "Clear payment term configuration",
      "Tax rate management",
      "Automation toggle switches",
      "Footer text editor",
      "Payment method selection"
    ],
    keyFeatures: [
      "Payment terms configuration",
      "Tax rate management",
      "Invoice references",
      "Payment method selection",
      "Automated reminders",
      "Automated sending",
      "Automated charging",
      "Receipt generation"
    ],
    bestPractices: [
      "Set clear payment terms",
      "Configure tax rates accurately",
      "Enable automated reminders for overdue invoices",
      "Use professional invoice footer text",
      "Test payment processing regularly",
      "Review automation settings monthly"
    ]
  },
  payments: {
    title: "Payments Settings",
    overview: "Manage payment processing through Stripe integration, configure payout settings, and monitor payment transactions. Ensure secure and efficient payment collection.",
    flow: [
      "Review Colib's card payment system information",
      "Verify Stripe integration status",
      "Configure payout preferences",
      "Set up payment notifications",
      "Monitor payout history and status",
      "Review payment processing fees",
      "Test payment processing"
    ],
    context: "Payments settings control how you accept and receive payments from clients. Stripe integration provides secure payment processing, while payout settings determine when and how funds are transferred to your account. Proper configuration ensures reliable payment collection and timely fund transfers.",
    easeOfUse: [
      "Clear Stripe integration information",
      "Sortable payout table",
      "Search functionality",
      "Status indicators",
      "Payment history tracking"
    ],
    keyFeatures: [
      "Stripe payment integration",
      "Card payment processing",
      "Payout management",
      "Payment history",
      "Transaction search",
      "Status tracking"
    ],
    bestPractices: [
      "Keep Stripe account information current",
      "Monitor payout schedules regularly",
      "Review payment processing fees",
      "Set up payment notifications",
      "Test payment processing periodically",
      "Keep payment records for accounting"
    ]
  },
  telehealth: {
    title: "Telehealth Settings",
    overview: "Configure online appointment settings including recording options, waiting room features, and background customization. Manage virtual appointment experiences.",
    flow: [
      "Enable or disable online appointment recording",
      "Configure waiting room settings",
      "Set up default background images",
      "Test telehealth connection and quality",
      "Review recording storage and access",
      "Customize virtual appointment experience"
    ],
    context: "Telehealth settings control how virtual appointments are conducted. Recording options allow for session documentation, waiting rooms provide privacy, and background customization maintains professionalism. Proper configuration ensures smooth virtual appointment experiences for both practitioners and clients.",
    easeOfUse: [
      "Simple toggle switches",
      "Background image management",
      "Waiting room configuration",
      "Recording access controls"
    ],
    keyFeatures: [
      "Online appointment recording",
      "Waiting room feature",
      "Default background images",
      "Virtual appointment management",
      "Recording storage"
    ],
    bestPractices: [
      "Obtain consent before recording sessions",
      "Use professional background images",
      "Enable waiting room for privacy",
      "Test connection quality before appointments",
      "Review recording storage regularly",
      "Ensure compliance with telehealth regulations"
    ]
  },
  rooms: {
    title: "Rooms Settings",
    overview: "Manage physical and virtual rooms where appointments can be scheduled. Organize your practice spaces and control appointment type availability by room.",
    flow: [
      "View existing rooms in the rooms table",
      "Click 'Add new room' to create a new room",
      "Enter room name, code, and priority order",
      "Add room description",
      "Configure appointment type availability",
      "Save and verify room appears in the list",
      "Edit or remove rooms as needed"
    ],
    context: "Rooms settings allow you to manage the physical and virtual spaces where appointments occur. Proper room management prevents double-booking, helps clients find the right location, and ensures efficient use of practice space. Virtual rooms are essential for telehealth appointments.",
    easeOfUse: [
      "Simple room creation modal",
      "Visual room table",
      "Search and filter capabilities",
      "Priority ordering",
      "Appointment type linking"
    ],
    keyFeatures: [
      "Room management",
      "Room codes and names",
      "Priority ordering",
      "Appointment type availability",
      "Virtual and physical room support"
    ],
    bestPractices: [
      "Use clear, descriptive room names",
      "Set priority order for popular rooms",
      "Link appropriate appointment types to each room",
      "Keep room information current",
      "Remove unused rooms",
      "Test room availability settings"
    ]
  },
  security: {
    title: "Security Settings (Admin)",
    overview: "Configure IP restrictions and monitor client data visualizations. Control access to your Colib account and track data access for security compliance.",
    flow: [
      "Add IP addresses to the allowed list using 'Add IP' modal",
      "Configure IP restrictions for account access",
      "Monitor client data visualization records",
      "Filter and review access logs",
      "Remove IP addresses as needed",
      "Review security settings regularly"
    ],
    context: "Security settings protect your Colib account by restricting access to specific IP addresses. This prevents unauthorized access and ensures only approved locations can access your account. Monitoring data visualizations helps maintain compliance and track who accesses client information.",
    easeOfUse: [
      "Simple IP addition modal",
      "Current IP detection",
      "Visual IP list",
      "Filterable access logs",
      "Search functionality"
    ],
    keyFeatures: [
      "IP address restrictions",
      "Access control",
      "Data visualization tracking",
      "Access log filtering",
      "Security monitoring"
    ],
    bestPractices: [
      "Add only trusted IP addresses",
      "Review access logs regularly",
      "Remove unused IP addresses",
      "Use current IP detection when possible",
      "Monitor for suspicious access patterns",
      "Keep security settings updated"
    ]
  },
  inventory: {
    title: "Inventory Settings",
    overview: "Manage products and inventory items that can be sold or used in your practice. Track product details, pricing, taxes, and availability.",
    flow: [
      "View existing products in the inventory table",
      "Click 'Add new product' to create a product",
      "Upload product image",
      "Enter product name, price, and tax information",
      "Set product availability (enable/disable)",
      "Add product description and available quantity",
      "Save and verify product appears in the list",
      "Edit or remove products as needed"
    ],
    context: "Inventory settings allow you to manage products that can be sold to clients or used in your practice. Proper inventory management helps track product availability, pricing, and sales. This is essential for practices that sell products alongside services.",
    easeOfUse: [
      "Product creation modal",
      "Image upload support",
      "Visual product table",
      "Search and filter capabilities",
      "Enable/disable toggles"
    ],
    keyFeatures: [
      "Product management",
      "Image upload",
      "Pricing and tax configuration",
      "Quantity tracking",
      "Product availability controls",
      "Inventory monitoring"
    ],
    bestPractices: [
      "Use high-quality product images",
      "Keep pricing and tax information accurate",
      "Update quantities regularly",
      "Disable unavailable products promptly",
      "Organize products by category",
      "Review inventory regularly"
    ]
  },
  "online-sales": {
    title: "Online Sales Settings",
    overview: "Configure online sales features for products and services. Enable e-commerce functionality and manage online sales settings.",
    flow: [
      "Enable online sales functionality",
      "Configure product catalog for online sales",
      "Set up payment processing for online sales",
      "Configure shipping and delivery options",
      "Set up sales tax and pricing rules",
      "Test online sales flow",
      "Monitor online sales performance"
    ],
    context: "Online sales settings enable your practice to sell products and services directly through your website or booking page. This expands revenue opportunities and provides convenience for clients. Proper configuration ensures smooth transactions and accurate order processing.",
    easeOfUse: [
      "Simple enable/disable controls",
      "Product catalog management",
      "Payment integration",
      "Sales tracking"
    ],
    keyFeatures: [
      "Online sales enablement",
      "Product catalog integration",
      "Payment processing",
      "Shipping configuration",
      "Sales tax management",
      "Order tracking"
    ],
    bestPractices: [
      "Test online sales flow thoroughly",
      "Keep product catalog updated",
      "Configure accurate shipping costs",
      "Set up proper tax rates",
      "Monitor sales performance regularly",
      "Ensure secure payment processing"
    ]
  },
  profile: {
    title: "Profile Settings (Personal)",
    overview: "Manage your personal profile information including profile picture, contact details, language preferences, time zone, and biography. Control how you appear in the system and to clients.",
    flow: [
      "Upload or update your profile picture",
      "Update personal details (name, prefix, suffix, qualification, licence)",
      "Enter or modify contact information (email, phone)",
      "Configure newsletter preferences",
      "Select your preferred language",
      "Set your time zone",
      "Write or update your biography",
      "Save changes and verify updates"
    ],
    context: "Your personal profile is how you appear to clients and colleagues in Colib. Keeping this information current ensures accurate communication, proper scheduling, and professional presentation. The biography helps clients understand your background and expertise.",
    easeOfUse: [
      "Drag-and-drop profile picture upload",
      "Rich text biography editor",
      "Language and timezone dropdowns",
      "Clear form organization",
      "Real-time preview"
    ],
    keyFeatures: [
      "Profile picture management",
      "Personal information fields",
      "Contact details",
      "Language selection",
      "Timezone configuration",
      "Rich text biography",
      "Newsletter preferences"
    ],
    bestPractices: [
      "Use a professional profile picture",
      "Keep contact information current",
      "Set timezone correctly to avoid scheduling issues",
      "Write a clear, professional biography",
      "Update qualifications and licences regularly",
      "Review profile information periodically"
    ]
  },
  password: {
    title: "Password Settings (Personal)",
    overview: "Change your account password to maintain account security. Use a strong, unique password to protect your Colib account.",
    flow: [
      "Enter your current password",
      "Enter your new password",
      "Confirm new password meets security requirements",
      "Click Save to update password",
      "Verify password change was successful"
    ],
    context: "Password settings allow you to change your account password regularly, which is an important security practice. Using a strong, unique password helps protect your account and client data from unauthorized access.",
    easeOfUse: [
      "Simple password change form",
      "Clear input fields",
      "Password strength indicators"
    ],
    keyFeatures: [
      "Current password verification",
      "New password entry",
      "Password change functionality"
    ],
    bestPractices: [
      "Use a strong, unique password",
      "Change password regularly",
      "Don't reuse passwords from other accounts",
      "Use a password manager",
      "Enable 2FA for additional security"
    ]
  },
  availability: {
    title: "Availability Settings (Personal)",
    overview: "Configure your personal availability preferences including clustering, busy appearance, daily appointment limits, and practice hours usage. Control how your schedule appears to clients.",
    flow: [
      "Enable cluster online booking if desired",
      "Configure 'make me look busy' settings",
      "Set daily maximum number of authorized appointments",
      "Choose whether to use practice opening hours",
      "Save preferences and test booking availability"
    ],
    context: "Availability settings control how your schedule appears to clients and how appointments are offered. These settings help manage booking demand, prevent overbooking, and create the right impression of your availability. Proper configuration improves booking efficiency and client satisfaction.",
    easeOfUse: [
      "Simple toggle switches",
      "Dropdown for busy appearance",
      "Number input for appointment limits",
      "Clear descriptions for each setting"
    ],
    keyFeatures: [
      "Cluster online booking",
      "Busy appearance controls",
      "Daily appointment limits",
      "Practice hours integration"
    ],
    bestPractices: [
      "Use clustering for flexible schedules",
      "Set realistic daily appointment limits",
      "Use 'make me look busy' when starting out",
      "Align with practice hours when appropriate",
      "Review availability settings regularly",
      "Test booking flow after changes"
    ]
  },
  "calendar-sync": {
    title: "Calendar Sync Settings (Personal)",
    overview: "Synchronize your Colib scheduler with your Google Calendar. Configure synchronization preferences and connect your accounts for seamless calendar management.",
    flow: [
      "Configure synchronization preferences (one-way sync, full-day events)",
      "Click 'Sign in with Google' to connect your account",
      "Authorize Colib to access your Google Calendar",
      "Verify synchronization is working",
      "Monitor sync status and resolve any conflicts",
      "Review sync preferences periodically"
    ],
    context: "Calendar synchronization ensures your Colib appointments appear in your Google Calendar and vice versa. This prevents double-booking, allows you to manage appointments from multiple platforms, and ensures your schedule is always up to date. Proper configuration is essential for efficient schedule management.",
    easeOfUse: [
      "One-click Google sign-in",
      "Simple preference toggles",
      "Automatic synchronization",
      "Conflict resolution guidance"
    ],
    keyFeatures: [
      "Google Calendar integration",
      "One-way or two-way sync options",
      "Full-day event support",
      "Automatic synchronization",
      "Conflict management"
    ],
    bestPractices: [
      "Connect Google Calendar early in setup",
      "Choose sync direction based on your needs",
      "Enable full-day events if needed",
      "Monitor sync status regularly",
      "Resolve conflicts promptly",
      "Test synchronization after changes"
    ]
  },
  "personal-security": {
    title: "Security Settings (Personal)",
    overview: "Enable multi-factor authentication (2FA) for your personal account. Add an extra layer of security to protect your Colib account.",
    flow: [
      "Review multi-factor authentication information",
      "Enable 2FA using the toggle switch",
      "Follow setup instructions if provided",
      "Verify 2FA is working correctly",
      "Keep backup codes in a safe place"
    ],
    context: "Personal security settings allow you to enable two-factor authentication, which significantly improves account security. When enabled, you'll receive a code via email to verify your identity when logging in. This protects your account even if your password is compromised.",
    easeOfUse: [
      "Simple toggle switch",
      "Clear setup instructions",
      "Email-based verification"
    ],
    keyFeatures: [
      "Two-factor authentication (2FA)",
      "Email-based verification",
      "Account security enhancement"
    ],
    bestPractices: [
      "Enable 2FA for better security",
      "Keep backup codes secure",
      "Use a secure email account",
      "Review security settings regularly",
      "Don't share verification codes"
    ]
  },
  signature: {
    title: "Signature Settings (Personal)",
    overview: "Configure automatic signature addition to notes. Enable this feature to automatically add your handwritten signature to notes after they are signed.",
    flow: [
      "Review signature settings",
      "Enable 'Add personal signature to notes' if desired",
      "Upload signature image if required",
      "Test signature addition to notes",
      "Verify signature appears correctly"
    ],
    context: "Signature settings allow you to automatically add your handwritten signature to notes after they are signed. This provides a professional touch and ensures notes are properly authenticated. This feature is useful for maintaining consistent documentation standards.",
    easeOfUse: [
      "Simple toggle switch",
      "Automatic signature addition",
      "Clear feature description"
    ],
    keyFeatures: [
      "Automatic signature addition",
      "Note authentication",
      "Professional documentation"
    ],
    bestPractices: [
      "Enable signature feature for professional notes",
      "Ensure signature image is clear",
      "Test signature appearance",
      "Review signed notes regularly"
    ]
  }
};

export default function ColibDocumentation({ section }: { section: Section }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const doc = documentation[section];

  if (!doc) return null;

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

