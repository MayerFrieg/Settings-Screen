# SimplePractice Settings Documentation

## Overview
SimplePractice is a comprehensive practice management platform designed for mental health professionals, therapists, and private practices. The settings system is organized into three main categories: Operations, Billing, and Client Care, with 28+ distinct settings areas.

---

## Platform Characteristics

### Design & User Experience
- **Color Scheme**: Professional blue theme (#3B82F6) with clean white backgrounds
- **Layout**: Fixed left sidebar navigation with collapsible sections
- **Navigation Pattern**: Hierarchical menu structure with expandable categories
- **Visual Style**: Card-based layouts with clear section headers
- **Icons**: Extensive use of SVG icons for visual clarity

### Technical Architecture
- Built with React and Next.js
- Client-side rendering with state management
- Modal-based forms for creating/editing entries
- Responsive grid layouts
- Link-based navigation between settings pages

---

## Settings Organization

## 1. OPERATIONS CATEGORY

### 1.1 Profile and Security
**Purpose**: Manage personal account information and security settings

**Key Features**:
- **Personal Information**
  - Date of birth management
  - Profile photo upload (JPG/PNG, max 10MB)
  - Email and phone verification status

- **Security Features**
  - Two-step verification setup
  - Password management with last changed tracking
  - Security status dashboard

- **Account Access**
  - Login history
  - Active sessions management

**Best Practices**:
- Enable two-step verification for enhanced security
- Update profile photo for professional appearance
- Keep contact information current for important notifications

---

### 1.2 Practice Details
**Purpose**: Configure practice identity and locations

**Key Features**:
- **Practice Identity**
  - Practice name management
  - Practice email (with verification info)
  - Practice phone number
  - Practice logo upload (JPG/PNG, 200px × 300px minimum)

- **Location Management**
  - Multi-location office setup
  - Telehealth location configuration
  - Color coding for different locations
  - Place of service codes

- **Business Configuration**
  - Time zone selection (affects exports, logs, reports)
  - Separate billing addresses for business and clients

**Technical Details**:
- Time zone affects all system timestamps and reports
- Logo appears on client portal and documents
- Telehealth locations have special visual indicators

---

### 1.3 Team Members
**Purpose**: Manage team structure and access control

**Key Features**:
- **Team Management**
  - Invite team members via email
  - Role assignment: Clinician, Practice Manager, Admin
  - Role-based access control for entire practice

- **Security Tracking**
  - Two-step verification status per member
  - Last sign-in monitoring
  - Active/inactive status

- **Organization**
  - List ordering: by date added or alphabetically (first/last name)
  - Search functionality
  - Filter by role

**Role Definitions**:
- **Clinician**: Access to own schedule and clients
- **Practice Manager**: Broader access to practice operations
- **Admin**: Full system access and configuration capabilities

---

### 1.4 Clinical Info
**Purpose**: Manage clinical credentials and licenses

**Key Features**:
- **Professional Credentials**
  - NPI number management
  - Specialty and taxonomy code selection
  - Professional licenses with expiration tracking

- **Clinical Configuration**
  - ePrescribe configuration
  - License renewal reminders
  - Credential verification status

---

### 1.5 Plan Info
**Purpose**: View subscription and billing information

**Key Features**:
- Current plan details and tier
- Usage tracking and limits
- Add-on management
- Billing history and receipts
- Payment method management

---

### 1.6 Data Export
**Purpose**: Export practice data for backup or migration

**Key Features**:
- **Export Options**
  - Multiple export formats (CSV, PDF, etc.)
  - Date range filtering
  - Category-based selection

- **Automation**
  - Automated export scheduling
  - Secure download with expiration links

- **Data Categories**
  - Client records
  - Appointments
  - Billing data
  - Documentation

---

### 1.7 Demo Client
**Purpose**: Training and feature exploration without affecting real data

**Key Features**:
- Enable/disable toggle
- Pre-populated demo data
- Full feature access for testing
- Demo data reset capability
- Safe environment for training new staff

---

### 1.8 Business Files
**Purpose**: Store HIPAA-compliant business documents

**Key Features**:
- **File Management**
  - Drag-and-drop file upload
  - Folder organization
  - File tagging and search

- **Security**
  - Team member sharing permissions
  - Document preview
  - Version history
  - HIPAA-compliant storage

---

## 2. BILLING CATEGORY

### 2.1 Services
**Purpose**: Define and manage service offerings with pricing

**Key Features**:
- **Service Configuration**
  - Service code and description
  - Duration settings (in minutes)
  - Rate configuration (pricing)
  - Default service designation

- **Billing Integration**
  - CPT code association (90834, 90791, 90837, etc.)
  - Bill in units option
  - Insurance billing code mapping

- **Online Booking**
  - Available for appointment requests toggle
  - Allow for new clients
  - Require clients to call for availability
  - Block off time before/after appointment (customizable minutes)

**Service Examples**:
- Individual therapy sessions (45 min, 50 min, 60 min)
- Initial intake/diagnostic evaluation (90 min)
- Couples therapy (60 min)
- Group therapy sessions

---

### 2.2 Products
**Purpose**: Manage sellable items beyond services

**Key Features**:
- Product catalog creation
- Pricing configuration
- Inventory tracking (optional)
- Product categories
- Image and description management
- Online sale availability

---

### 2.3 Client Billing Documents
**Purpose**: Automate invoices, statements, and superbills

**Key Features**:
- **Document Types**
  - Invoices
  - Statements
  - Superbills

- **Automation**
  - Automatic generation after appointments
  - Scheduled statement delivery
  - Customizable templates

- **Configuration**
  - Default payment terms
  - Late fee settings
  - Document branding

---

### 2.4 Insurance Billing
**Purpose**: Manage insurance claims and superbill settings

**Key Features**:
- **Claim Configuration**
  - Automatic status checks (90-day cycles)
  - Tax ID or SSN input
  - Organization NPI field
  - Display options: Claims only, Superbills only, Both

- **Advanced Options**
  - Enable modifiers toggle
  - Multiple diagnosis codes inclusion
  - Service facility location (Box 32) on claims

- **Billing Provider Info**
  - NPI management
  - Taxonomy codes
  - Provider addresses

- **Billing Profiles**
  - Payer-specific overrides
  - Custom billing information per insurance company

**Technical Details**:
- Integrates with clearinghouse for claim submission
- Automatic eligibility verification
- ERA (Electronic Remittance Advice) processing

---

### 2.5 Payers
**Purpose**: Manage insurance payer information and enrollments

**Key Features**:
- Payer database search
- Manual payer addition
- Payer-specific settings
- Enrollment management
- Payer ID tracking
- Contract rate configuration

---

### 2.6 Online Payments
**Purpose**: Set up and manage payment processing

**Key Features**:
- **Payment Processor Setup**
  - Email verification step
  - Security code verification (call or text)
  - Multi-step verification for security

- **Accepted Payment Types**
  - All major credit cards
  - All major debit cards
  - FSA/HSA cards

- **Fee Structure**
  - Processing fees: 3.15% + 30¢ per transaction
  - No refund fees
  - Transparent fee display

- **Security**
  - PCI compliance
  - Secure payment gateway
  - Encrypted transmission

---

### 2.7 AutoPay
**Purpose**: Automate payment application to invoices

**Key Features**:
- **Automation Settings**
  - Enable/disable toggle
  - Automatic charge processing (12:00-2:00 AM daily)
  - Credit application before card charging

- **Client Enrollment**
  - Automatic invoice payment enrollment
  - Client consent management
  - Payment method on file requirement

**Process Flow**:
1. Check for credits on account
2. Apply available credits to invoice
3. Charge remaining balance to card on file
4. Send payment confirmation

---

## 3. CLIENT CARE CATEGORY

### 3.1 Calendar
**Purpose**: Configure scheduling and calendar synchronization

**Key Features**:
- **Cancellation Policy**
  - Options: 24h, 48h, 72h, 1 week
  - Automatic enforcement
  - Client notification

- **Display Settings**
  - Name format: Initial (J.A.), First name, Full name
  - Time zone display
  - Color coding options

- **Alerts Configuration**
  - Prompts for client notification on scheduling changes
  - Enable/disable toggle

- **Calendar Sync Integrations**
  - **Google Calendar**: View and edit SimplePractice events
  - **Microsoft 365**: View and edit SimplePractice events
  - **Apple Calendar**: View-only via iCal feed with URL management

- **Advanced Features** (PLUS tier)
  - Advanced calendar sync
  - Multi-calendar support

**HIPAA Compliance Note**:
Calendar sync reminder emphasizes HIPAA considerations for synced events

---

### 3.2 Client Portal Permissions
**Purpose**: Control client portal access and features

**Key Features**:
- **Portal Configuration**
  - Enable/disable portal
  - Custom domain display and edit
  - Language choice (Spanish/English)

- **Online Appointment Requests**
  - Enable/disable toggle
  - Start time increments: half-hour, quarter-hour, hour
  - Request timing: 24h/48h/72h before, 1-4 weeks in advance

- **Request Types**
  - New client requests: Yes/No
  - Types allowed: Individual, Couple, Contacts
  - Credit card requirement: Yes/No

- **Client Features**
  - File upload permission
  - Document access
  - Payment history viewing

- **Customization**
  - Client portal greeting (editable message)
  - Prescreener setup integration

**Default Greeting Template**:
"Welcome to our client portal! Here you can schedule appointments, complete forms, and securely message your therapist."

---

### 3.3 Contact Form
**Purpose**: Manage website contact inquiries

**Key Features**:
- **Form Configuration**
  - Enable/disable practice contact form
  - Contact form URL with copy button
  - Therapy Finder integration toggle

- **Inquiry Routing**
  - Send to clinician receiving inquiry
  - Send to one email address

- **Inquiry Types**
  - New individual clients
  - Couples
  - Contacts/family members

- **Follow-up**
  - Confirmation email: Yes/No toggle
  - Automatic inquiry tracking

- **Integrations**
  - Prescreener integration
  - Therapy Finder profile connection

---

### 3.4 Prescreener
**Purpose**: Screen prospective clients before booking

**Key Features**:
- **Question Creation**
  - Custom question builder
  - Multiple question types
  - Question logic and branching

- **Evaluation**
  - Scoring system
  - Automated evaluation
  - Accept/decline automation

- **Response Management**
  - View responses
  - Client communication
  - Integration with contact form

---

### 3.5 Widgets
**Purpose**: Embed SimplePractice functionality on external websites

**Key Features**:
- **Widget Types**
  - Appointment request widget
  - Contact form widget

- **Customization**
  - Appearance customization
  - Color scheme matching
  - Size configuration

- **Analytics**
  - Widget usage tracking
  - Conversion metrics

- **Implementation**
  - Copy embed code
  - Simple paste into website
  - Responsive design

---

### 3.6 Template Library
**Purpose**: Manage document templates

**Template Categories**:
- **Intake Documents**
  - Client information forms
  - Consent forms
  - HIPAA authorization
  - Financial agreements

- **Progress Notes**
  - SOAP notes
  - DAP notes
  - Session summaries

- **Treatment Plans**
  - Initial treatment plans
  - Treatment plan updates
  - Discharge summaries

- **Custom Templates**
  - Create from scratch
  - Import templates
  - Share with team

**Features**:
- Template editor with formatting
- Variable insertion (client name, date, etc.)
- Template library access
- Version control

---

### 3.7 Shareable Documents
**Purpose**: Manage default documents shared with clients

**Key Features**:
- **Default Intake Documents**
  - Automatically assigned to new clients
  - Customizable document sets

- **Consent Forms**
  - Treatment consent
  - HIPAA consent
  - Telehealth consent

- **Scored Measures**
  - PHQ-9 (depression)
  - GAD-7 (anxiety)
  - Custom measures

- **Delivery Configuration**
  - Email delivery
  - Portal access
  - Completion reminders

---

### 3.8 Email Notifications
**Purpose**: Configure automated email templates

**Email Template Categories**:

**Client Emails (17 templates)**:
- Welcome email
- Appointment confirmation (standard)
- Appointment confirmation with documents
- Appointment confirmation for video session
- Appointment declined (new client)
- Appointment declined (existing client)
- Client portal activation
- Document request
- Recurring measure request
- Billing document notifications
- Invoices past due
- Appointment request notifications
- Ad hoc document reminders
- Contact form inquiry confirmations
- Out of office confirmations

**Contact/Couple Emails (6 templates)**:
- Contact/couple welcome
- Contact/couple confirmation
- Contact/couple declined messages

**Template Features**:
- Template customization interface
- Tabbed organization (Client vs. Contact/Couple)
- Edit functionality for each template
- Variable insertion: {client_name}, {appointment_date}, {practice_name}
- Preview before sending
- Subject line customization

---

### 3.9 Text (SMS) Reminders
**Purpose**: Configure automated SMS reminders

**Reminder Types**:
- **Appointment Reminders**
  - Configurable timing: 10 minutes to 48 hours before
  - Single appointment reminders

- **Telehealth Reminders**
  - Fixed 10 minutes before appointment
  - Includes video link

- **Document Reminders**
  - 24h to 72h options
  - Document name inclusion

- **Cancellation Messages**
  - Single appointment cancellations
  - Series cancellations

**Features**:
- Character limit: 500 characters per message
- Message preview with mobile mockup
- Template variables:
  - {client_first_name_formatted}
  - {appointment_date}
  - {appointment_time}
  - {clinician_full_name}
  - {appointment_telehealth_link}
  - {client_document_request_names}
  - {practice_client_portal_url}
- Add information and confirm/cancel links
- Opt-out management

**Example Template**:
"Hi {client_first_name_formatted}, this is a reminder about your appointment with {clinician_full_name} on {appointment_date} at {appointment_time}. Reply C to confirm or X to cancel."

---

### 3.10 Voice (Voicemail) Reminders
**Purpose**: Configure automated voicemail reminders

**Reminder Types**:
- Client appointment reminders
- Contact/couple appointment reminders
- Single appointment cancellation messages
- Series cancellation messages

**Features**:
- Timing configuration: 10 minutes to 48 hours before
- Message templates with variables
- Tab-based organization (Client vs. Contact)
- Edit/view modes
- Professional tone emphasis
- Text-to-speech preview

**Professional Tone Guidelines**:
- Clear pronunciation
- Moderate speaking pace
- Essential information only
- Professional greeting and closing

---

### 3.11 Secure Messaging
**Purpose**: Enable HIPAA-compliant messaging between providers and clients

**Key Features**:
- **Feature Control**
  - Enable/disable toggle
  - Automatic opt-in for new clients option

- **Client Management**
  - Per-client messaging permission
  - Client search and filtering
  - Portal access requirement

- **Security**
  - HIPAA-compliant encryption
  - Secure message delivery
  - Message history tracking

- **Integration**
  - Links to individual client communication settings
  - Empty state for clients without portal access

**Note**: Individual client messaging settings available in each client's communication tab.

---

### 3.12 Notification Preferences
**Purpose**: Control notification delivery settings for practitioners

**Notification Categories**:

**Client Billing**:
- Outstanding balances
- Uninvoiced amounts

**Client Management**:
- Possible couples to link
- Duplicate clients detected
- Client birthdays

**Documentation**:
- Request completion
- Expiring treatment estimates
- Missing required documents
- Document reviews needed

**Insurance**:
- Expiring authorizations
- Insurance payments received
- Unallocated funds

**Messaging**:
- Contact form inquiries
- Email unsubscribes
- Text message unsubscribes

**Scheduling**:
- Existing client appointment requests
- Prospective client appointment requests

**Tasks**:
- Overdue tasks

**Emails**:
- Daily agenda (morning email)
- Evening summary
- Secure messages

**Features**:
- Expandable categories with toggle switches
- Individual notification enable/disable
- Descriptive context for each notification type
- Note about essential notifications (cannot be disabled)

---

## Key Strengths of SimplePractice Settings

### 1. **Comprehensive Coverage**
- 28+ settings areas covering all practice operations
- Deep integration between settings (services, billing, scheduling)
- Support for solo practitioners to large group practices

### 2. **User-Friendly Design**
- Clear hierarchical organization
- Intuitive navigation with expandable sections
- Contextual help and descriptions throughout
- Visual indicators and icons

### 3. **Billing & Insurance Focus**
- Robust insurance billing features
- Automatic claim status checks
- Billing profile customization per payer
- CPT code integration

### 4. **Client Communication**
- Multiple channels: Email, SMS, Voice, Secure Messaging
- Extensive template customization
- Automated reminders and notifications
- HIPAA-compliant messaging

### 5. **Security & Compliance**
- Two-step verification
- HIPAA-compliant file storage
- Secure payment processing
- Audit trails and tracking

### 6. **Flexibility**
- Multi-location support
- Team member role-based access
- Customizable templates
- Telehealth integration

---

## Best Practices for SimplePractice Configuration

### Initial Setup
1. Complete Practice Details first (name, logo, locations)
2. Configure Services with proper CPT codes
3. Set up Team Members with appropriate roles
4. Enable Online Payments for client convenience
5. Configure Calendar sync for schedule management

### Security Configuration
1. Enable two-step verification for all users
2. Regularly review team member access
3. Monitor last sign-in times
4. Keep security credentials current

### Client Experience Optimization
1. Customize email templates with practice branding
2. Enable client portal with clear greeting
3. Configure appointment reminders (SMS + Email)
4. Set up online booking with appropriate restrictions
5. Create prescreener for new client inquiries

### Billing Efficiency
1. Set up AutoPay for reliable payment collection
2. Configure billing documents for automatic generation
3. Create billing profiles for each insurance payer
4. Enable online payments with transparent fee display

### Communication Excellence
1. Configure all three channels: Email, SMS, Voice
2. Customize message templates professionally
3. Enable secure messaging for sensitive communications
4. Set up notification preferences to avoid overwhelm

---

## Integration Points

SimplePractice settings integrate with:
- **Google Calendar** (bi-directional sync)
- **Microsoft 365** (bi-directional sync)
- **Apple Calendar** (one-way via iCal)
- **Payment processors** (Stripe integration)
- **Insurance clearinghouses** (claim submission)
- **Therapy Finder** (online directory)

---

## Conclusion

SimplePractice provides a comprehensive, well-organized settings system tailored for mental health professionals. The three-category organization (Operations, Billing, Client Care) makes navigation intuitive, while the depth of features supports practices of all sizes. The strong focus on insurance billing, client communication automation, and security compliance makes it particularly well-suited for private practices that accept insurance and prioritize professional client interactions.
