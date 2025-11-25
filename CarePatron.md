# CarePatron Settings Documentation

## Overview
CarePatron is a modern, cloud-based healthcare practice management platform designed for individual practitioners and small to medium healthcare teams. The settings system features 30+ configuration areas organized into 8 main categories with a strong focus on workflows, automation, and user-friendly interfaces.

---

## Platform Characteristics

### Design & User Experience
- **Color Scheme**: Sophisticated teal/emerald theme (#0D9488, #10B981) with purple accents
- **Layout**: Tab-based navigation within each settings category
- **Navigation Pattern**: Card-based main hub with deep-dive tabbed sections
- **Visual Style**: Modern, clean design with generous white space
- **Icons**: Emoji-based icons for visual identification and friendly feel

### Technical Architecture
- Built with React and Next.js
- Tab-based state management within settings pages
- Modal workflows for complex operations
- Responsive grid layouts (lg:grid-cols-2)
- Progress bars for usage metrics
- Toggle switches for boolean settings

---

## Settings Organization

## CATEGORY 1: MY PROFILE SETTINGS

### 1.1 Details Tab
**Purpose**: Personal account information and preferences

**Personal Details**:
- Avatar/Profile picture management
  - Upload custom profile image
  - Supported formats: JPG, JPEG, PNG, BMP
- First name, last name
- Prefix and suffix (Dr., Ph.D., etc.)
- Qualification and licence number
- Email address (account login)
- Phone number

**Password Management**:
- Change password capability
- Secure password requirements
- Password strength indicator

**Language and Timezone**:
- **Language Selection**: English (US), and other locales
- **Timezone Configuration**:
  - Example: Africa/Cairo, America/New_York
  - Affects scheduling and reminders

**Theme**:
- **Color Mode**: Light/Dark selection
- **Theme Customization**: Color picker with preview
  - Example: Caribbean green (#00BFA5)
  - Custom color hex input
  - Real-time preview

**Multi-Factor Authentication (MFA)**:
- Enable MFA toggle for enhanced account security
- Email-based or app-based authentication
- Backup codes management

---

### 1.2 Services and Availability Tab
**Purpose**: Practitioner service configuration and schedule management

**Assigned Services**:
- View services assigned to practitioner
- Adjust custom rates per service
- Service examples:
  - Family Therapy (60 mins, $150.00)
  - Diagnostic Evaluation (90 mins, $200.00)
  - Therapeutic exercises (30 mins, $75.00)
- Override default pricing
- Service color coding

**Date Specific Hours**:
- Add dates when availability changes from scheduled hours
- Offer specific services on particular dates
- Toggle between **Upcoming** and **Past** date overrides
- One-time schedule modifications
- Holiday hours management
- Coverage for other practitioners

**Availability**:
- Create schedules based on availability
- Set desired service offerings at specific times
- Manage online booking availability
- Multiple schedule support (weekly recurring)
- Block out personal time
- Break time configuration

---

### 1.3 Connected Apps Tab
**Purpose**: Third-party application integrations

**Available Integrations**:

**Gmail**
- Email accounts integration
- Group lists synchronization
- Automated email management

**Google Calendar**
- Calendar accounts synchronization
- Two-way sync (CarePatron ↔ Google)
- Multiple calendar support

**Microsoft Outlook**
- Outlook/Office365/Exchange integration
- Email and calendar sync
- Contact synchronization

**Microsoft Calendar**
- Outlook/Office365/Exchange calendar
- Appointment sync
- Availability management

**Zoom**
- Video conferencing integration
- Automatic meeting links
- Recording management

**Integration Features**:
- One-click connection
- Authorization management
- Sync status display
- Disconnect capability
- Sync frequency settings

---

### 1.4 Notifications Tab
**Purpose**: Control notification delivery preferences

**Notification Categories**:

**Scheduling Notifications**:
- Channel: In-app
- Appointment bookings
- Appointment changes
- Cancellations

**Practitioner Scheduling**:
- Channel: Email
- Schedule reminders
- Shift notifications
- Coverage requests

**Billing and Payment Updates**:
- Channel: In-app
- Payment received
- Invoice status
- Payment failures

**Client and Documentation Changes**:
- Channel: In-app
- Client record updates
- Document completion
- Form submissions

**Channel Options**:
- **In-app notifications**: Real-time alerts in platform
- **Email notifications**: Sent to registered email
- Independent toggle control per category

---

## CATEGORY 2: WORKSPACE SETTINGS

### 2.1 Details Tab
**Purpose**: Business information and branding

**Business Information**:
- Name of business/practice
- Phone number (main contact)
- National Provider Identifier (NPI)
- Website URL
- Country selection
- Business description

**Locations**:
- **Physical Locations**:
  - Address, unit number
  - City, state/province
  - Postal/zip code
  - Point of Sale (POS) codes

- **Virtual Locations**:
  - Example: "Carepatron Virtual location"
  - Video conferencing designation
  - Online service delivery

- **Location Management**:
  - Add new locations capability
  - Edit existing locations
  - Location-specific services
  - Default location setting

**Workspace Branding**:
- **Brand Name**: Display name for client communications
- **Logo Upload**:
  - Professional logo for invoices and booking pages
  - Recommended formats and sizes
  - Preview display
- **Theme Customization**:
  - Color picker interface
  - Hex color input
  - Appears on invoices and booking pages
  - Brand consistency across platform

---

### 2.2 Subscriptions Tab
**Purpose**: Plan management and usage tracking

**Active Users Tracking**:
- Display number of active team members
- Example: "1 team member"
- Add team member capability

**Current Plan Display**:
- Plan name (e.g., Free Plan, Professional, Enterprise)
- Plan status (Limited, Active, Trial)
- Plan features list
- Billing period (monthly/annual)

**Usage Metrics with Progress Bars**:

**Storage**:
- Current usage display (e.g., 12% used)
- Total allocation shown
- Visual progress bar
- Upgrade prompt when approaching limit

**AI Tokens**:
- Token usage display (e.g., 4017 of 1,000,000 used - 0.4%)
- Monthly refresh information
- Feature availability by plan
- Token purchase options

**Tasks**:
- Task count (e.g., 2 of 1000 used - 0.2%)
- Task automation limits
- Workflow execution tracking

**Upgrade Button**:
- Link to plan upgrade page
- Feature comparison
- Pricing information

---

### 2.3 Custom Fields Tab
**Purpose**: Customize client profile data collection

**Field Sections**:

**Name Section**:
- First name
- Middle name
- Last name
- Preferred name

**Contact Details Section**:
- Phone number (with validation)
- Email address
- Physical address
- Emergency contact

**About Client Section**:
- Date of birth
- Gender (with custom options)
- Sex assigned at birth
- Preferred language
- Date first seen
- Relationship status
- Employment status
- Ethnicity
- Client notes (free text)

**Provider Details Section**:
- Identification number (health card, insurance)
- Status (Active, Inactive, Discharged)
- Assigned team (primary practitioner)
- Tags (for categorization)
- Referred by (referral source tracking)

**Customization Features**:
- Add new custom fields
- Organize fields by section
- Edit field properties (name, type, required)
- Reorder fields
- Set field visibility
- Conditional field display

**Field Types Available**:
- Text input
- Number input
- Email input
- Date picker
- Dropdown selection
- Multi-select
- Checkbox
- Radio buttons
- Text area (long form)

---

### 2.4 Reminders Tab
**Purpose**: Automated reminder configuration

**Appointment Reminders**:
- Configuration for client appointment reminders
- Timing options (24h, 48h, 1 week before)
- Reduces no-shows and cancellations
- Email and SMS channels
- Customizable message templates

**Invoice Reminders**:
- Automated reminders for invoice due dates
- Only applies to invoices sent through CarePatron
- Configurable reminder schedule
- Payment link inclusion

**Redirect Notice**:
Points to new **Workflow Management** tab with upgraded features including:
- More granular reminder control
- Template customization
- Multi-step reminder sequences
- Advanced automation rules

---

### 2.5 Communications Tab
**Purpose**: Client messaging and communication preferences

**Client Messaging Preferences**:
- **Contact Type Options**:
  - Example: "Reply-only (48hr window)"
  - Two-way messaging
  - One-way notifications only
- Description of messaging capabilities
- Client contact window configuration
- Business hours messaging
- After-hours handling

**Communication Channels**:
- Email communication settings
- SMS/text messaging
- In-app messaging
- Portal messaging

**Templates**:
- Message templates
- Automated responses
- Out-of-office messages
- Standard replies

---

## CATEGORY 3: BILLING SETTINGS

### 3.1 Billing Details Tab
**Purpose**: Payment processing and tax configuration

**Payment Settings**:
- **Stripe Integration**:
  - Primary payment processor
  - Credit/debit card acceptance
  - Processing fee information
  - Supported payment methods display

- **Payout Schedule**:
  - Daily processing
  - 4-day hold period
  - Bank account configuration
  - Payout history

- **Set Up Payments** button:
  - Stripe account connection
  - Bank account verification
  - Identity verification

**Billing Settings**:
- **Tax Number Type**: EIN, SSN, Business Number
- **Tax Number Field**: Required for tax reporting
- **Currency Selection**: USD, CAD, EUR, GBP, AUD, etc.
- Multi-currency support (if applicable)

**Tax Rates**:
- **Tax Rate Management**:
  - Create multiple tax rates
  - Tax name configuration (HST, GST, PST, VAT)
  - Rate percentage (e.g., 13%, 5%, 8%)
  - Default tax selection
  - Jurisdiction tracking
- **Add New Tax Rate** capability
- Tax exemption handling
- Compound tax support (tax on tax)

**Billing Address**:
- Street address
- City, State/Province
- Zip/Postal code
- Country
- Edit capability
- Appears on invoices and receipts

---

### 3.2 Invoices Tab
**Purpose**: Invoice template and automation configuration

**Invoice Templates**:
- **Template Options**: Simple, Contemporary, Modern
- **Template Previews**: Visual preview of each design
- **Customization**:
  - Logo upload (appears on invoices)
  - Theme color selection (matches branding)
  - Invoice title customization
  - Custom fields addition

**Invoice Configuration**:
- **Overdue Term**: Number of days before invoice considered overdue
- **Payment Terms**: Net 15, Net 30, Due on Receipt
- **Late Fee Settings**: Automatic or manual
- **Invoice Numbering**: Prefix and starting number
- **Invoice Footer**: Custom text for all invoices

**Invoice Reminders**:
- Automated reminder configuration
- Reminder schedule (3 days, 7 days, 14 days overdue)
- Escalation sequence
- Applicable only to invoices sent through CarePatron
- Customizable reminder messages

---

### 3.3 Automation Tab
**Purpose**: Automated billing workflows

**Autogenerate Billing Documents**:
- **Automated Generation**: Last day of month
- **Manual Creation**: Anytime option
- **Document Types**:
  - Invoices
  - Statements
  - Superbills
  - Receipts

**Superbill Receipt Automation**:
- Toggle for automatic superbill receipt sending
- Sent upon payment completion
- Client portal delivery
- Email delivery option

**Additional Automation**:
- Auto-invoice on appointment completion
- Auto-charge stored payment methods
- Auto-send receipts
- Auto-apply credits
- Batch invoice generation

---

## CATEGORY 4: INSURANCE SETTINGS

### 4.1 Payers Tab
**Purpose**: Insurance payer management

**Insurance Payers**:
- **Search Functionality**: Search for payers from database
- **Add Available Payers**: Pre-loaded insurance company list
- **Manual Payer Entry**: Add custom payers not in database
- **View All Added Payers**: List of configured payers
- **Manage Payer Enrollment**: Enrollment status tracking

**Payer Information**:
- Payer name
- Payer ID
- Claims address
- Electronic payer ID
- Accepted billing codes
- Fee schedule

**Billing Profiles**:
- **Default Billing Profile**: Standard billing information
- **Additional Profiles**: Create multiple profiles for:
  - Different team members
  - Specific payers
  - Custom invoice templates
- **Profile Overrides**:
  - Team member-specific billing info
  - Payer-specific settings
  - Location-specific billing

**Create and Manage Billing Profiles**:
- Profile name
- NPI override
- Tax ID override
- Address override
- Rendering provider information

---

### 4.2 Eligibility Tab
**Purpose**: Insurance eligibility verification

**Feature Description**:
- Insurance eligibility verification system
- Verify clients' insurance coverage
- Real-time eligibility checks
- Coverage details display
- Co-pay and deductible information

**Upgrade Required**:
- Feature requires paid plan upgrade
- Visual indication of missing feature
- **Upgrade Button**: Access to feature unlock
- Pricing information

**Eligibility Check Process**:
1. Enter patient insurance information
2. Submit eligibility request
3. Receive real-time verification
4. View coverage details
5. Document in patient record

---

## CATEGORY 5: SCHEDULING SETTINGS

### 5.1 Locations Tab
**Purpose**: Service delivery location management

**Location Types**:

**Virtual Locations**:
- Location type badge display
- Purpose: "Video conferencing"
- Point of Sale (POS) designation
- Telehealth compliance
- No physical address required

**Physical Locations**:
- Complete address information
- Accessibility details
- Parking information
- Operating hours
- Appointment type restrictions

**New Location Creation**:
- Add location button
- Location details form
- Location type selection
- Service availability per location
- Staff assignment to locations

---

### 5.2 Services Tab
**Purpose**: Service catalog management

**Service Management**:
- **Searchable Service List**: Quick find functionality

**Service Information**:
- **Service Name**: Display name
- **Procedure/Service Code**:
  - Examples: 90791 (Diagnostic), 90847 (Family therapy)
  - CPT codes
  - Custom codes
- **Duration**:
  - Examples: 50 mins, 15 mins, 60 mins
  - Flexible time blocks
- **Price**:
  - Examples: $100.00, $0.00 (free consultation)
  - Multiple price points
  - Insurance vs. private pay rates
- **Color Coding**: Visual organization on calendar

**Service Management Actions**:
- **Edit Services**: Modify existing services
- **Add Services**: Create new services
- **Archive Services**: Remove from active list
- **Duplicate Services**: Copy and modify

**Example Services**:
- Diagnostic Evaluation (90791, 90 mins, $200.00)
- Family Therapy (90847, 60 mins, $150.00)
- Group Therapy (90853, 60 mins, $50.00)
- Therapeutic Exercises (97110, 30 mins, $75.00)
- Initial Consultation (Free, 15 mins, $0.00)

---

### 5.3 Online Booking Tab
**Purpose**: Client self-booking configuration

**Booking & Cancellation Policies**:
- **Cancellation Policy**: Free-text policy statement
- **Cancellation Period**: Time without penalty
- **Minimum Cancellation Time**:
  - Example: 24 hours before appointment
  - Options: 12h, 24h, 48h, 72h
- **Late Cancellation Fee**: Optional fee configuration
- **No-Show Fee**: Charge for missed appointments

**Payment Settings**:
- **Stripe Integration**: Requirement for online payments
- **Process Payments at Booking**: Yes/No toggle
- **Require Credit Card Details**: Yes/No toggle
- **Deposit Requirements**: Percentage or fixed amount
- **Full Payment Options**: Require full payment upfront

**Booking Policies**:
- **Minimum Booking Time**: How far in advance (e.g., 2 hours)
- **Maximum Booking Time**: Booking window (e.g., up to 12 months)
- **Same-Day Booking**: Allow/disallow
- **Buffer Time**: Before/after appointments

**Customize Appearance**:
- **Show/Hide Collections**: Service category display
- **Show/Hide Service Descriptions**: Detail level control
- **Booking Page Colors**: Match branding
- **Custom Text**: Welcome messages, instructions

**Booking Requests**:
- **Auto-Accept All Bookings**: Immediate confirmation
- **Manual Booking Acceptance**: Review before confirming
- **Booking Request Notifications**: Alert preferences
- **Request Expiration**: Auto-cancel if not confirmed

---

## CATEGORY 6: WORKFLOWS SETTINGS

### 6.1 Templates Tab
**Purpose**: Pre-built automation workflow templates

**Scheduling Workflow Templates** (7 pre-built):

1. **Cancelled Appointment** (Email)
   - Status: Active/Inactive
   - Triggered when appointment cancelled
   - Confirmation email to patient
   - Reschedule link inclusion

2. **New Appointment** (Email)
   - Confirmation email for new bookings
   - Appointment details
   - Add to calendar link
   - Location/telehealth link

3. **Appointment Request Declined** (Email)
   - Sent when request cannot be accommodated
   - Alternative time suggestions
   - Contact information for follow-up

4. **Appointment Request Received** (Email)
   - Acknowledgment of booking request
   - Expected response time
   - Status tracking link

5. **Reschedule Appointment** (Email)
   - Notification of time change
   - New appointment details
   - Confirm/decline options

6. **Appointment Reminder** (Email)
   - Sent 24-48 hours before
   - Appointment details
   - Preparation instructions
   - Confirm attendance link

7. **Appointment Reminder** (SMS)
   - Short reminder text
   - Sent 2-4 hours before
   - Confirm/cancel via text
   - Character limit optimized

**Template Features**:
- **Status Indicator**: Active/Inactive
- **Description**: Workflow purpose explanation
- **Associated Workflows Count**: Number of active workflows using template
- **Icon Representation**: Calendar, refresh, email icons
- **Category Grouping**: Organized by scheduling
- **Expandable Sections**: Click to view details
- **Activation/Customization**: Easy enable and personalize

---

### 6.2 Basic Reminders Tab
**Purpose**: Simple reminder configuration

**Appointment Reminders**:
- **New Reminder Creation**: Add custom reminders
- **Timing Configuration**: Hours/days before appointment
- **Channel Selection**: Email, SMS, or both
- **Message Templates**: Customizable content
- **Automated Sending**: No manual intervention
- **Purpose**: Reduces no-shows and cancellations

**Invoice Reminders**:
- **New Reminder Creation**: Add invoice reminders
- **Due Date Triggers**: Before, on, or after due date
- **Reminder Sequence**: Multiple reminders (1st, 2nd, 3rd notice)
- **Applicable to CarePatron Invoices**: Only for platform invoices
- **Payment Link Inclusion**: Easy payment access
- **Escalation**: Gentle to firm tone progression

---

## CATEGORY 7: TRASH SETTINGS

### 7.1 Trash Management
**Purpose**: Deleted item recovery and permanent deletion

**Empty State Display**:
- Shows when no deleted items exist
- Visual indication with icon
- Clear messaging: "Your trash is empty"
- Recovery instructions ready for when items deleted

**Features**:

**Deletion Management**:
- **Automatic Trash Movement**: Deleted items automatically move here
- **Chronological Ordering**: Newest deletions first
- **Retention Period**: Items kept for set period (e.g., 30 days)
- **Automatic Permanent Deletion**: After retention period

**Search and Filter**:
- Search deleted items by name
- Filter by type (Clients, Appointments, Documents, etc.)
- Date range filtering
- Sort options

**Recovery Operations**:
- **Individual Restore**: Recover single items
- **Bulk Restore**: Restore multiple items
- **Preview Before Restore**: View item details
- **Restore Location**: Returns to original location

**Permanent Deletion**:
- **Empty Trash** button: Clear all permanently
- **Individual Permanent Delete**: Remove specific items
- **Confirmation Required**: Prevent accidental deletion
- **No Recovery After**: Warning about irreversibility

**Item Types in Trash**:
- Client records
- Appointments
- Documents
- Forms
- Notes
- Invoices
- Templates

---

## CATEGORY 8: DOCUMENTATION

### 8.1 Documentation Hub
**Purpose**: Help resources and feature guides

**Documentation Structure**:
Each settings section includes comprehensive documentation:

**Components**:
- **Title and Overview**: Clear section identification
- **Step-by-Step Flow**: Numbered steps for configuration
- **Context and Purpose**: Why this setting matters
- **Ease of Use Features**: Bulleted highlights
- **Key Features List**: Checkmark list of capabilities
- **Best Practices**: Recommended approaches (when applicable)
- **Screenshots**: Visual guides (in actual documentation)
- **Video Tutorials**: Embedded video walkthroughs

**SettingsSection Component**:
- Container with title
- Description text
- Children content sections
- Collapsible/expandable

**SettingRow Component**:
- Individual setting display
- Label and hint text
- Control elements (toggle, input, dropdown)
- Inline help text

**Tag Component**:
- Status badges (e.g., "Live", "Protected", "Beta")
- Visual status indicators
- Color-coded tags

**Navigation**:
- Search functionality
- Category filtering
- Recently viewed
- Bookmarking
- Print-friendly format

---

## Key Strengths of CarePatron Settings

### 1. **User-Friendly Design**
- Tab-based organization within categories
- Progress bars for usage metrics
- Clear visual hierarchy
- Emoji icons for friendly feel
- Generous white space

### 2. **Automation Focus**
- 7 pre-built workflow templates
- AI token usage for automations
- Task automation tracking
- Automated reminders (appointment and invoice)
- Workflow template library

### 3. **Modern Integration**
- Google Calendar/Gmail sync
- Microsoft Outlook/Calendar
- Zoom video integration
- Stripe payment processing
- Third-party app ecosystem

### 4. **Flexible Customization**
- Custom client fields (unlimited)
- Custom invoice templates (3 designs)
- Theme customization with color picker
- Logo and branding throughout
- Custom workflows

### 5. **Strong Billing Features**
- Stripe integration
- Multiple tax rate support
- Invoice automation
- Superbill generation
- Insurance eligibility checking (paid feature)
- Multiple billing profiles

### 6. **Security & Privacy**
- Multi-factor authentication
- Trash recovery system
- Audit logging
- HIPAA compliance focus
- Secure payment processing (PCI compliant)

### 7. **Scalability**
- Usage metrics with clear limits
- Upgrade paths from free to paid plans
- Team member management
- Multi-location support
- Growing feature set (BETA features)

---

## Best Practices for CarePatron Configuration

### Initial Setup Sequence
1. **My Profile > Details**: Complete personal information and upload photo
2. **Workspace > Details**: Business info, locations, and branding
3. **Scheduling > Services**: Create service catalog with codes and pricing
4. **Scheduling > Online Booking**: Configure client self-booking
5. **Billing > Details**: Set up Stripe and tax rates
6. **Workflows > Templates**: Activate appointment reminders
7. **My Profile > Connected Apps**: Integrate calendar and email

### Security Configuration
1. Enable Multi-Factor Authentication (MFA) immediately
2. Set appropriate automatic sign-out period (e.g., 2 hours)
3. Configure secure password requirements
4. Review and monitor connected apps regularly
5. Implement trash retention policy

### Client Experience Optimization
1. **Branding Consistency**:
   - Upload professional logo
   - Choose brand colors (primary + accent)
   - Customize invoice templates

2. **Online Booking**:
   - Enable auto-accept for convenience
   - Set minimum booking time (e.g., 2 hours)
   - Configure cancellation policy clearly
   - Require credit card to reduce no-shows

3. **Communication**:
   - Activate all 7 workflow templates
   - Set appointment reminders (Email 48h + SMS 2h)
   - Configure invoice reminders (3-day, 7-day, 14-day)
   - Enable client portal messaging

### Billing Efficiency
1. **Payment Setup**:
   - Connect Stripe account fully
   - Enable payment at time of booking
   - Configure appropriate tax rates
   - Create billing profiles for insurance

2. **Automation**:
   - Enable auto-generate invoices (end of month)
   - Turn on superbill automation
   - Configure invoice reminders
   - Set payment terms clearly

3. **Templates**:
   - Choose invoice template matching brand
   - Add logo and customize colors
   - Configure invoice footer with policies

### Workflow Automation
1. Activate all 7 pre-built workflow templates
2. Customize email content to match practice voice
3. Test workflows with test patients
4. Monitor workflow execution and adjust timing
5. Add custom workflows as needs evolve

---

## Integration Ecosystem

CarePatron integrates with:
- **Email**: Gmail, Microsoft Outlook
- **Calendar**: Google Calendar, Microsoft Calendar
- **Video**: Zoom conferencing
- **Payments**: Stripe (credit/debit cards)
- **Accounting**: QuickBooks, Xero (future)
- **Insurance**: Eligibility verification services (paid feature)
- **Telehealth**: Native video built-in

---

## Upgrade Paths

### Free Plan
- 1 team member
- Basic features
- Limited storage
- Limited AI tokens
- Limited tasks
- Basic support

### Professional Plan
- Multiple team members
- Advanced features
- Increased storage
- More AI tokens
- Unlimited tasks
- Priority support
- Insurance eligibility verification

### Enterprise Plan
- Unlimited team members
- All features
- Maximum storage
- Unlimited AI tokens
- Unlimited tasks
- Dedicated support
- Custom integrations
- White-label options

---

## Conclusion

CarePatron offers a streamlined, modern settings system with 30+ configuration areas organized into 8 intuitive categories. The platform excels in automation (7 pre-built workflow templates), ease of use (tab-based navigation, progress metrics), and modern integrations (Google, Microsoft, Zoom, Stripe). The strong focus on workflows and automation makes it ideal for busy practitioners who want to reduce administrative overhead. The clear upgrade path from free to paid plans, combined with transparent usage metrics, makes it particularly appealing for solo practitioners and small teams looking to grow their practice efficiently. The standout features include workflow automation templates, usage-based pricing transparency, comprehensive online booking configuration, and seamless third-party integrations.
