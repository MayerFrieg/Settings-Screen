# Jane App Settings Documentation

## Overview
Jane App is a comprehensive healthcare practice management system designed for multi-disciplinary health clinics including physiotherapy, massage therapy, chiropractic, mental health, and other allied health professionals. The settings system features 65+ configuration areas organized into 4 main sections: Preferences, Settings, Offerings, and Billing.

---

## Platform Characteristics

### Design & User Experience
- **Color Scheme**: Vibrant teal/turquoise theme (#14B8A6) with orange accents (#F97316)
- **Layout**: Clean sidebar navigation with search functionality
- **Navigation Pattern**: Flat menu structure with category grouping
- **Visual Style**: Card-based layouts with modern, healthcare-focused design
- **Icons**: Consistent icon usage throughout for visual identification

### Technical Architecture
- Built with React and Next.js
- Centralized state management with single-page application feel
- Modal-based workflows for creating/editing
- Tabbed interfaces for complex settings
- Responsive grid layouts with Tailwind CSS

---

## Settings Organization

## SECTION 1: PREFERENCES (Account & Subscription Management)

### 1.1 Dashboard
**Purpose**: Display key performance metrics and booking analytics

**Key Metrics**:
- **KPI Cards**
  - Arrived appointments count
  - Booked online percentage
  - New patients count
  - Comparison with previous period

- **Analytical Tables**
  - Bookings comparison (Arrived, Cancelled, No Show)
  - Online vs. Staff Booked analysis
  - New vs. Returning Patients breakdown

- **Filtering Options**
  - Staff member filter
  - Date range selection
  - Period comparison

**Features**:
- Percentage change tracking
- Visual trend indicators
- Exportable reports
- Real-time updates

---

### 1.2 Account Recommendations
**Purpose**: Provide account optimization suggestions

**Features**:
- Badge showing pending recommendations count
- Action items for account improvement
- Best practices guidance
- Feature utilization tips

---

### 1.3 Jane Payments
**Purpose**: Integration with Jane's native payment processing

**Key Features**:
- Integrated payment processing
- Online payment acceptance
- Card-on-file management
- Transaction reporting
- Fee structure transparency

---

### 1.4 Address Book
**Purpose**: Manage contacts for providers and external referral sources

**Features**:
- Contact management interface
- Create new entries
- Provider/staff contact storage
- Referral source tracking
- Import/export contacts

---

### 1.5 Jane Subscription
**Purpose**: Manage subscription tier and features

**Features**:
- Current plan display
- Feature availability by tier
- Upgrade options
- Billing information
- Usage limits tracking

---

## SECTION 2: SETTINGS (Core Clinic Configuration)

### 2.1 Clinic Information
**Purpose**: Configure essential clinic details

**Expandable Sections**:

**Clinic Name & Legal Name**
- Business name display
- Legal entity name for billing

**Website URL Management**
- Practice website link
- Online presence integration

**Language, Currency & Number Formats**
- Multiple locale options:
  - English (North America, UK)
  - French (Canada)
  - Spanish (Mexico)
- Currency selection (CAD, USD, EUR, etc.)
- Number format preferences

**Customized Language**
- **Patient Terminology**: Patient/Client/Customer
- **Treatment Terminology**: Treatment/Service/Session
- **Custom Pronouns**: Support for diverse gender identities

**Time Zone Configuration**
- Example: Toronto - America/Toronto (GMT -05:00)
- Affects scheduling and reminders

**Advanced Settings**
- Additional clinic configuration options (collapsible)

---

### 2.2 Locations
**Purpose**: Multi-location clinic management

**Key Features**:
- **Create Location** button for adding new sites
- **Filter Options**:
  - Active locations
  - Inactive locations
  - All locations

- **Location Properties**:
  - Primary location designation (badge)
  - Address display (unit, city, country)
  - Status indicator
  - Edit capability per location

- **Ordering**:
  - Reorder locations for display priority
  - Affects online booking presentation

**Location Types**:
- Physical clinic locations
- Virtual/telehealth locations
- Mobile service areas

---

### 2.3 Security
**Purpose**: Account protection and access control

**Key Settings**:

**2-Step Verification Enforcement**
- Options: Optional / Required
- Current status display (e.g., "optional at GraceHealth")
- Enhanced account security

**Automatic Sign Out**
- Configurable inactivity period
- Default: 1 week
- Edit capability for custom timeout

**Additional Security**:
- Password policies
- Session management
- Access logs

---

### 2.4 Branding
**Purpose**: Visual brand customization for client-facing materials

**Theme Section**:
- **Primary Color**
  - Color picker interface
  - Hex input (#RRGGBB)
  - Required field
  - Must ensure white text legibility

- **Accent Color**
  - Complementary color selection
  - Required field
  - Must work with primary color

**Logo & Graphics**:
- **Logo Upload**
  - Formats: JPG, PNG, GIF
  - Recommended: Horizontal orientation, 500px width

- **Email Header**
  - Dimensions: 600px wide × 70-150px tall
  - Appears in client emails

- **Online Booking Background**
  - Dimensions: 1200px × 1200px
  - Maximum file size: 5MB
  - Creates professional booking page

**Online Booking Buttons & URLs**:
- Location/Staff member dropdown selector
- Embed code generation and display
- Direct URL provision
- Button example preview
- Plain URL link option
- Easy copy-to-clipboard functionality

---

### 2.5 Language
**Purpose**: Extensive customization of user-facing language

**General Language Settings** (Required Fields):
- Locale selection
- Patient terminology
- Treatment terminology
- Address style: Casual vs. Formal

**Customize Language in Jane** (20+ customizable fields):
- Clientele reference term
- Account reference term
- Prefixes/Honorifics list (Dr., Mrs., Ms., Miss, Mr., Mx.)
- Health number terminology
- Services/treatments terminology
- Online booking welcome header
- Additional booking information prompt
- "Our Team" link text
- "Book by Practitioner" heading and description
- Cancellation policy text
- Email templates:
  - Welcome message
  - Reminder formatting
  - Booking confirmation
  - Cancellation notice
- Referral source options
- Invoice details format
- Call-to-cancel message

**Benefits**:
- Full multilingual support
- Cultural adaptation
- Brand voice consistency
- Professional terminology alignment

---

### 2.6 Emails
**Purpose**: Email template preview and customization system

**19 Available Email Types**:
1. Welcome Email
2. Confirm Email Address
3. Forgot Password (standard)
4. Forgot Password (multiple matches)
5. Lookup Email (standard)
6. Lookup Email (multiple matches)
7. Intake Form
8. Thanks for Booking (standard)
9. Thanks for Booking (multiple appointments)
10. Appointment Change Notification
11. Appointment Cancellation Notification
12. Upcoming Appointment Reminders
13. Appointment Reminder variations
14. SMS Failure handling
15. Follow-up communications
16. Payment receipts
17. Document completion requests
18. Survey invitations
19. Promotional communications (opt-in)

**Features**:
- Dropdown selector for email templates
- Email preview display with From/To/Subject fields
- Link to Language settings for deeper customization
- Variable insertion for personalization
- Mobile and desktop preview
- HTML and plain text versions

---

### 2.7 Mass Welcome Email
**Purpose**: Bulk email communication to patient base

**Features**:
- Send welcome emails to entire patient list
- Customizable message content
- Segmentation options (active patients, new patients, etc.)
- Schedule send time
- Preview before sending
- Track open and click rates

**Use Cases**:
- Practice announcements
- New service introductions
- Holiday hours notifications
- Important policy updates

---

### 2.8 Online Booking
**Purpose**: Comprehensive patient self-booking configuration

**Online Booking Policy**:
- **Options**: Allow / Default / Disabled
- Set defaults for all patient profiles
- Patient profile status reporting

**Content Filtering**:
- **Locations**: Checkboxes for available locations
- **Disciplines**: Required checkbox selection
- **Staff Members**: Individual practitioner availability
- **Treatments**: Scrollable list with checkboxes

**Pre-payment & Deposits**:
- Jane Payments integration
- No-show prevention measures
- Card-on-file options
- Deposit requirements
- Virtual visit fees
- Membership fee collection

**Booking, Cancelling, & Relationships**:
- **Allow same-day booking**: Toggle
- **Booking window restriction**: 1-24 hours dropdown
- **"Contact to Book" display**: Show option for complex appointments
- **Late cancellation period**: 12-72 hours, 1 week options
- **Allow cancellations**: Toggle
- **Upcoming appointments limit**: No Limit, 1-10
- **Related profile management**: Family member linking
- **Additional info prompt**: Custom field after booking

**Display Preferences**:
- **Book by Treatment**: Toggle
- **Book by Staff Member**: Toggle
- **Browse by Month**: Toggle
- **Display Phone Number**: Toggle
- **Display Email Address**: Toggle
- **Patient's Preferred Time Zone**: Toggle
- **Meta description**: SEO optimization (text input)
- **Practitioner order**: Alphabetical / By Availability / Custom Order

**Marketing Emails Opt-In**:
- Customizable opt-in message
- Bulk set opted-in/opted-out
- Patient profile status tracking
- CASL/GDPR compliance

**Patient Sign-In Settings**:
- Social login options: Google, Facebook, Twitter
- Email/password authentication
- Account recovery options

---

### 2.9 Reminders & Notifications
**Purpose**: Automated patient communication system

**Email Reminders**:
- **Default Timing**: 48 hours before appointment
- **Status**: Enabled/Disabled
- **Subscription**: Subscribe by Default
- **View Preview** & **Edit** buttons
- Customizable message template

**SMS Reminders**:
- **Default Timing**: 2 hours before appointment
- **Status**: Enabled/Disabled
- **Subscription**: Subscribe after patient consent
- **View Preview** & **Edit** buttons
- Character limit considerations

**Notifications**:
- **Master Email Notifications**: Toggle for all notifications
- **Booking notifications**: When appointments booked
- **Cancellation notifications**: When appointments cancelled
- **Change notifications**: When appointment times change
- **Patient profile opt-in/opt-out**: Individual management
- **Bulk actions**: Enable/disable for all patients

**Features**:
- Cascade disable (master toggle affects sub-options)
- Patient communication preferences respected
- Multi-channel support (email + SMS)
- Opt-out management
- Delivery status tracking

---

### 2.10 Messaging (BETA)
**Purpose**: Direct messaging between staff and patients

**Key Features**:
- **Enable Messaging** toggle switch
- Simple and secure communication
- Direct connection in Jane platform
- HIPAA/PIPEDA compliant
- Message history tracking
- File attachment support
- Read receipts
- BETA badge indicates active development

**Feature Description**:
"Let your team connect with patients directly in Jane, in a way that's simple and secure"

---

### 2.11 Staff Permissions
**Purpose**: Role-based access control system

**Role Descriptions**:
1. **Practitioner (Limited)**
   - Own schedule access only
   - View own patients only
   - No billing access

2. **Practitioner/Front Desk**
   - View/edit patient records
   - Schedule appointments
   - Billing access
   - Single location focus

3. **Practitioner/Front Desk (All Locations)**
   - Same as Practitioner/Front Desk
   - Multi-location staff scheduling
   - Cross-location visibility

4. **Front Desk**
   - Schedule appointments
   - View patient information
   - Transaction reports
   - No clinical notes access

5. **Administrator/All Billing**
   - Full patient access
   - Full staff access
   - Complete billing access
   - Reports and analytics

6. **Full Access**
   - Complete system access
   - All configuration settings
   - Account owner capabilities

**Account Ownership Card**:
- **Requires owner consent for**:
  - Subscription changes
  - Data exports/transfers
  - Roles & permissions changes
  - Account closure
- Owner responsible for subscription fees

**Staff List Table**:
- Columns: Name, Username, Last Sign-In
- Owner designation
- Role assignment dropdown
- **Checkboxes**:
  - Active status
  - Access Billing
  - Access Charts
  - Manage Shifts
- Bulk permission updates

---

### 2.12 Dashboard Permissions
**Purpose**: Control dashboard widget and report visibility

**Features**:
- Permission controls per role
- Widget visibility settings
- Report access management
- Custom dashboard layouts per role

---

### 2.13 Supervision
**Purpose**: Manage supervisory relationships and oversight

**Features**:
- Create supervisory relationships
- Staff oversight configuration
- Licensing compliance tracking
- Supervisor assignment
- Supervisee management
- Report access for supervisors

**Use Cases**:
- Student supervision
- New staff onboarding
- Clinical oversight
- Regulatory compliance

---

### 2.14 Wait Lists
**Purpose**: Patient wait list management system

**Features**:
- Wait list creation per service/practitioner
- Cancellation notification automation
- Priority booking functionality
- Patient communication
- Wait list reporting
- Automatic patient matching

---

### 2.15 Patient Form Fields
**Purpose**: Custom form field configuration

**Features**:
- Add custom fields to patient profiles
- Field type selection (text, dropdown, checkbox, date)
- Required vs. optional fields
- Field ordering
- Conditional field display
- Data validation rules

---

### 2.16 Test Patient
**Purpose**: Development and training environment

**Features**:
- Create test patient for training
- Full system testing without real data
- Booking flow testing
- Staff training support
- Demo environment
- No impact on real patient data

---

### 2.17 Online Appointments for Groups
**Purpose**: Group session and class booking management

**Features**:
- Group appointment creation
- Class/group session management
- Multiple attendee booking
- Capacity limits
- Group pricing
- Waitlist for full groups

**Use Cases**:
- Fitness classes
- Group therapy
- Workshop bookings
- Educational seminars

---

### 2.18 AI Scribe (NEW)
**Purpose**: Automated clinical note generation using AI

**About Section**:
- AI-powered note taking during sessions
- Creates SOAP note or custom template entries
- HIPAA and PIPEDA compliant
- No additional apps required
- Voice-to-text during appointments

**Manage Feature Access**:
- **Free Tier**: 5 free notes per month per staff member
- **Unlimited Tier**: $15/month per staff member
- Monthly refill for free tier
- Staff member subscription management table

**Recording Deletion Policy**:
- **Keep indefinitely**: Retain all recordings
- **Delete immediately**: Remove after note generation
- **Delete after set time**: Custom retention period
- Auto-deletion outside retention window
- Compliance with privacy regulations

**Features**:
- Real-time transcription
- SOAP note formatting
- Custom template support
- Audio recording management
- Note editing and approval workflow

---

### 2.19 Schedule Settings
**Purpose**: Staff scheduling and availability configuration

**Features**:
- Shift configuration
- Availability blocks
- Recurring schedules
- Break time management
- Overtime rules
- Staff scheduling preferences
- Schedule templates

---

### 2.20 Forms & Surveys
**Purpose**: Patient data collection and outcome measurement

**Intake Forms Section**:
- Health history forms
- Patient profile forms
- Staff-specific forms
- Multi-step form builder (Step 1 of 3 interface)
- Form templates
- Conditional logic
- **View Forms** button

**Clinical Surveys Section**:
- Automatic data collection
- Outcome measures with scoring
- **Example Surveys**:
  - COVID-19 screening
  - PHQ-9 (depression)
  - GAD-7 (anxiety)
  - Daily symptom surveys
  - Custom outcome measures
- Visual survey preview
- **View Surveys** & **New Survey** buttons
- Automated scoring
- Trend tracking over time

---

### 2.21 Integrations
**Purpose**: Third-party system connections

**Available Integrations**:
- Electronic Medical Records (EMR)
- Accounting software (QuickBooks, Xero)
- Email marketing platforms
- Telehealth platforms
- Insurance verification services
- Lab systems
- API integration management
- Webhook configuration

---

### 2.22 Workshop
**Purpose**: Training and educational resources

**Features**:
- Staff training management
- Product tutorials and guides
- Video training library
- Best practices documentation
- Feature walkthroughs
- Certification tracking

---

### 2.23 Documentation
**Purpose**: System documentation and help resources

**Features**:
- User guides
- Help articles
- Feature documentation
- Video tutorials
- FAQ sections
- Search functionality
- Release notes

---

## SECTION 3: OFFERINGS (Services & Products)

### 3.1 Disciplines
**Purpose**: Service category grouping system for multi-disciplinary clinics

**Key Features**:
- **Create New Discipline** button
- **Show Archived** toggle
- **Discipline Listing**:
  - Discipline name (linked/clickable)
  - Professional title
  - Staff member count
  - Online booking enabled/disabled status
  - Reorder icon for drag-and-drop
  - Edit button per discipline

**Versatile Use Cases**:
Introductory text explains flexible usage for various clinic types:
- Multi-disciplinary clinics (Physio, Massage, Chiro)
- Medical aesthetics (Botox, Fillers, Laser, Facials)
- Mental health (Individual, Couples, Family, Group)
- Wellness centers (Yoga, Acupuncture, Nutrition)

**Examples**:
- Physiotherapy
- Massage Therapy
- Chiropractic
- Mental Health Counseling
- Registered Dietitian
- Athletic Therapy

---

### 3.2 Treatments, Classes & Group Appointments
**Purpose**: Comprehensive service/treatment management

**Key Features**:
- **Create New Treatment** button
- **Reassign Treatments** functionality
- Treatment listing by discipline
- Online booking availability per treatment
- Duration configuration
- Practitioner assignment
- Pricing configuration
- Treatment codes (billing codes)
- Color coding for calendar
- Treatment categories

**Treatment Properties**:
- Treatment name
- Duration (15 min to 3+ hours)
- Price per session
- HST/GST application
- Online booking availability
- Maximum group size (for classes)
- Booking restrictions
- Practitioner qualifications required

---

### 3.3 Products
**Purpose**: Physical and digital product sales management

**Key Features**:
- **Create New Product** button
- Product listing with details
- Pricing configuration
- Online sale availability
- Inventory management
- Product categories
- SKU tracking
- Supplier management
- Reorder alerts

**Product Types**:
- Supplements
- Medical supplies
- Orthotics
- Exercise equipment
- Educational materials
- Gift certificates
- Retail items

**Manage Suppliers** button for vendor tracking

---

## SECTION 4: BILLING (Financial Management)

### 4.1 Billing Settings (NEW)
**Purpose**: Comprehensive financial configuration

**General Billing**:
- **Tips Enabled**: Toggle with description for service tips
- **Accounting Method**: Required (Cash/Accrual selection)
- **Pricing by Location**: Toggle for multi-location pricing
- **Show Last Used Payment Method**: Toggle for payment convenience

**Gift Cards**:
- **Gift Cards Enabled**: Toggle
- **Gift Card Load Limit**: $0-$5000
- **Gift Card Online Sale Limit**: Maximum $2000

**Financial Documents**:
- **Starting Invoice Number**: Required (numeric)
- **Invoice Number Prefix**: Text field for customization
- **Sign Receipts**: Toggle for signature requirement
- **Fine Print Text**: Area for invoices/statements/receipts
- **Display Prices Inclusive of Tax**: Toggle
- **Display Taxes as Group**: Text field for tax grouping
- **Hide Patient Info from Financial Emails**: Toggle for privacy

---

### 4.2 Reconciliation Date
**Purpose**: Financial period management

**Features**:
- Balance reconciliation point setting
- Monthly/periodic closing
- Lock previous periods
- Financial reporting cutoff
- Accounting period management

---

### 4.3 Adjustments
**Purpose**: Invoice adjustment management

**Key Features**:
- **Create New Adjustment** button
- **Edit Existing Adjustment** capability
- Adjustment type categorization
- Amount adjustment tracking
- Reason documentation
- Date tracking
- Audit trail

**Adjustment Types**:
- Discounts
- Credits
- Corrections
- Write-offs
- Professional courtesy
- Insurance adjustments

---

### 4.4 Billing Codes
**Purpose**: Medical and service coding system

**Key Features**:
- **Create New Billing Code** button
- Code management interface
- Discipline association
- Treatment linking
- Reporting configuration
- Insurance claim integration
- Fee schedule linkage

**Common Code Systems**:
- CPT codes
- ICD-10 codes
- Provincial billing codes
- Private insurance codes

---

### 4.5 Fees
**Purpose**: Service fee management system

**Key Features**:
- **Create New Fee** button
- Fee listing with details
- Fee type configuration
- Amount settings
- Discipline/treatment association
- Online booking display
- Multiple fee schedules

**Fee Types**:
- Standard fees
- WSIB rates
- MVA rates
- Insurance rates
- Private pay rates
- Sliding scale fees

---

### 4.6 Payment Methods
**Purpose**: Accepted payment option management

**Key Features**:
- **Create New Payment Method** button
- **Payment Method Listing**:
  - Display name (Cash, Interac eTransfer, etc.)
  - Internal name
  - Edit capability per method
- Customizable payment options
- Payment method categories

**Default Payment Methods**:
- Cash
- Debit
- Credit Card
- Interac eTransfer
- Cheque
- Direct Billing

---

### 4.7 Income Categories
**Purpose**: Revenue categorization and reporting

**Key Features**:
- **Create New Income Category** button
- **Edit Income Category** capability
- Category listing
- Accounting classification
- Report organization
- Tax treatment per category
- Chart of accounts integration

**Category Examples**:
- Treatment revenue
- Product sales
- Consultation fees
- Cancellation fees
- Gift card sales

---

### 4.8 Taxes
**Purpose**: Tax rate configuration and management

**Key Features**:
- **Create New Tax** button
- **Edit Tax Rate** capability
- Tax type categorization
- Rate percentage configuration
- Jurisdiction tracking
- Invoice application rules
- Multi-tax support (compound taxes)

**Tax Types**:
- HST (Harmonized Sales Tax)
- GST (Goods and Services Tax)
- PST (Provincial Sales Tax)
- QST (Quebec Sales Tax)
- No Tax

---

### 4.9 Merge History
**Purpose**: Audit trail for patient profile merges

**Features**:
- Historical merge records
- Merge date and time
- Merged profiles display
- User who performed merge
- Merge reason documentation
- Potential merge reversal (if applicable)

---

### 4.10 Schedule an Import
**Purpose**: Bulk data import scheduling

**Features**:
- Schedule data imports
- CSV template download
- Import validation
- Error reporting
- Duplicate detection
- Import history

**Import Types**:
- Patient data
- Appointments
- Treatment history
- Financial records

---

## Key Strengths of Jane App Settings

### 1. **Comprehensive Multi-Disciplinary Support**
- 65+ settings areas
- Flexible discipline and treatment framework
- Supports diverse healthcare practices
- Scalable from solo to large clinics

### 2. **Modern, Intuitive Design**
- Clean teal color scheme
- Card-based layouts
- Responsive interface
- Consistent iconography
- Easy navigation

### 3. **Advanced Customization**
- 20+ language customization fields
- Complete branding control
- Flexible terminology (Patient/Client/Customer)
- Custom form fields
- Template customization

### 4. **Robust Online Booking**
- Extensive configuration options
- Social login integration
- Pre-payment and deposits
- Group appointment support
- Flexible cancellation policies

### 5. **Intelligent Automation**
- AI Scribe for note taking
- Automated reminders (Email + SMS)
- Waitlist management
- Workflow automation
- Survey automation

### 6. **Financial Flexibility**
- Multiple payment methods
- Gift card support
- Tips functionality
- Sliding scale fees
- Multi-location pricing

### 7. **Staff Management**
- 6 detailed role types
- Granular permissions
- Supervision tracking
- Access logs
- Multi-location support

---

## Best Practices for Jane App Configuration

### Initial Setup Priority
1. **Clinic Information** - Complete all core details first
2. **Locations** - Set up all physical and virtual locations
3. **Branding** - Upload logo and set colors for brand consistency
4. **Disciplines** - Create service categories
5. **Treatments** - Add all services with proper pricing
6. **Staff Permissions** - Assign appropriate roles
7. **Online Booking** - Configure client self-booking

### Security Best Practices
1. Enable 2-step verification (Required)
2. Set appropriate automatic sign-out period
3. Review staff permissions regularly
4. Monitor access logs
5. Implement supervision for students/new staff

### Client Experience Optimization
1. Customize all language fields for your terminology
2. Enable online booking with appropriate filters
3. Configure automated reminders (48h email + 2h SMS)
4. Set up intake forms for new patients
5. Enable secure messaging for client communication
6. Create clear cancellation policy

### Financial Setup
1. Configure all accepted payment methods
2. Set up appropriate tax rates for jurisdiction
3. Create income categories for reporting
4. Configure billing codes for insurance
5. Set up fee schedules (standard, insurance, WSIB, MVA)
6. Enable Jane Payments for online collection

### Automation Excellence
1. Enable AI Scribe (if applicable)
2. Configure automated appointment reminders
3. Set up outcome measure surveys
4. Enable waitlist automation
5. Configure automated invoice generation
6. Set up welcome emails for new patients

---

## Integration Capabilities

Jane App integrates with:
- **Accounting**: QuickBooks, Xero, FreshBooks
- **EMR/EHR**: Various electronic medical records systems
- **Telehealth**: Built-in video conferencing
- **Payment Processing**: Jane Payments (Stripe-based)
- **Email Marketing**: Mailchimp, Constant Contact
- **Insurance Verification**: Third-party verification services
- **Calendar Sync**: Google Calendar, Outlook
- **Social Login**: Google, Facebook, Twitter

---

## Conclusion

Jane App provides an exceptionally comprehensive and flexible settings system designed specifically for multi-disciplinary healthcare clinics. With 65+ configuration areas organized into four logical sections, the platform supports practices from solo practitioners to large multi-location clinics. The standout features include extensive language customization, robust online booking, AI-powered note-taking, flexible discipline/treatment framework, and modern design. The system excels at supporting diverse healthcare modalities including physiotherapy, massage, chiropractic, mental health, and allied health services, making it ideal for clinics that need flexibility and depth in their practice management solution.
