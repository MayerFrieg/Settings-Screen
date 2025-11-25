# Colib Settings Documentation

## Overview
Colib is a Canadian healthcare practice management platform designed for healthcare practitioners with a focus on simplicity, bilingual support (English/French), and comprehensive clinical practice management. The settings system features 25+ configuration areas organized into 2 main sections: Personal (6 settings) and Admin (19 settings).

---

## Platform Characteristics

### Design & User Experience
- **Color Scheme**: Fresh lime green/teal theme with clean white backgrounds
- **Layout**: Fixed left sidebar with expandable Personal and Admin sections
- **Navigation Pattern**: Two-tier structure (Personal vs. Admin settings)
- **Visual Style**: Modern, clean cards with rounded corners and subtle borders
- **Icons**: Emoji-based icons for visual clarity and friendly feel

### Technical Architecture
- Built with React and Next.js
- Client-side state management
- Modal-based forms for creating entries
- Rich text editors with full formatting toolbars
- Toggle switches (teal active, gray inactive)
- Collapsible sections for organization

---

## Settings Organization

## SECTION 1: PERSONAL SETTINGS (Individual Practitioner)

### 1.1 Profile
**Purpose**: Manage personal practitioner information and biography

**Profile Picture**:
- Upload custom profile image
- Supported formats: JPG, JPEG, PNG, BMP
- Displayed on booking pages and communications
- Professional appearance for client-facing materials

**Personal Details**:
- **First Name**: Given name
- **Last Name**: Family name
- **Prefix**: Dr., Mr., Ms., Mrs., etc.
- **Suffix**: Ph.D., M.D., R.N., etc.
- **Qualification**: Professional designation (e.g., Registered Psychologist)
- **Licence Number**: Professional registration number

**Contact Details**:
- **Email**: Primary contact and login
- **Phone Number**: Professional contact number
- **Newsletter Subscription**: Toggle for Colib updates and tips

**Preferences**:
- **Language Selection**:
  - English
  - French (Français)
  - Spanish (Español)
- **Timezone Selection**:
  - Eastern (ET)
  - Central (CT)
  - Mountain (MT)
  - Pacific (PT)
  - Affects scheduling and reminders

**Biography**:
- **Rich Text Editor** with full formatting options:
  - Bold, italic, underline
  - Font size adjustment
  - Text color selection
  - Text alignment (left, center, right, justify)
  - Bulleted and numbered lists
  - Insert links and images
  - Undo/redo functionality
  - Code view for HTML editing
- Professional biography for client-facing pages
- Appears on booking page and practice website
- Unlimited length

---

### 1.2 Password
**Purpose**: Account security management

**Change Password**:
- **Current Password**: Verification field
- **New Password**: Update field
- Password strength indicator
- Secure password requirements:
  - Minimum 8 characters
  - Mix of letters and numbers recommended
  - Special characters for enhanced security

---

### 1.3 Availability
**Purpose**: Control appointment scheduling and display

**Cluster Online Booking**:
- Toggle to cluster appointments around existing bookings
- Reduces gaps in schedule
- Optimizes practitioner time
- Shows available slots near confirmed appointments

**Make Me Look Busy**:
- **6 Control Options**:
  - No restriction
  - Show up to 1 appointment per day
  - Show up to 2 appointments per day
  - Show up to 3 appointments per day
  - Show up to 4 appointments per day
  - Show up to 5 appointments per day
- Controls available appointment slots displayed to clients
- Prevents overload appearance
- Encourages advance booking

**Daily Maximum Appointments**:
- Set hard limit on authorized appointments per day
- Protects from overbooking
- Ensures quality client care
- Override capability for exceptions

**Use Practice Hours**:
- Toggle to follow practice-wide opening hours
- Alternative: Define personal schedule separate from practice
- Useful for part-time practitioners
- Flexible scheduling per practitioner

---

### 1.4 Calendar Sync
**Purpose**: Integration with Google Calendar

**One-Way Synchronization**:
- Option to sync only Colib appointments to Google Calendar
- Prevents Google Calendar events from blocking Colib schedule
- Maintains Colib as primary scheduling tool
- Useful for information-only sync

**Full-Day Events**:
- Include all-day Google Calendar events in sync
- Blocks out entire day for vacations, conferences
- Prevents bookings on days off
- Honors Google Calendar commitments

**Google Calendar Integration**:
- **Sign In with Google**: OAuth authentication
- Establish synchronization between Colib scheduler and Google Calendar
- Two-way sync available (optional)
- Multiple calendar support
- Sync frequency settings
- Disconnect capability

**Benefits**:
- Reduce double-booking
- Single source of truth
- Mobile calendar access
- Family calendar visibility (for personal time)

---

### 1.5 Security (Personal)
**Purpose**: Enhanced personal account security

**Two-Factor Authentication (2FA)**:
- Enable email-based 2FA
- Security code verification on login
- Extra layer of account protection
- Protects client data
- Required for HIPAA/PIPEDA compliance (recommended)

**How It Works**:
1. Enable 2FA in settings
2. Login with username/password
3. Receive code via email
4. Enter code to complete login
5. Optional "trust this device" for 30 days

---

### 1.6 Signature
**Purpose**: Digital signature management for clinical notes

**Personal Signature in Notes**:
- Toggle to automatically add signature
- Handwritten signature appears at bottom of signed notes
- Digital signature upload
- Legal documentation requirement
- Professional appearance
- Audit trail for signed documents

**Signature Upload**:
- Image file formats accepted
- Transparent background recommended
- Signature appears on:
  - Signed clinical notes
  - Treatment plans
  - Assessment reports
  - Consent forms

---

## SECTION 2: ADMIN SETTINGS (Practice-Wide Configuration)

### 2.1 General
**Purpose**: Core business information and branding

**Logo**:
- Upload business logo
- Supported formats: JPG, JPEG, PNG, BMP
- Appears on:
  - Booking pages
  - Invoices
  - Emails
  - Website

**Contact Information**:
- **Business Name**: Official practice name
- **Description**: Practice description (appears on booking page)
- **Email**: Primary business contact
- **Phone Number**: Main office line

**Branding**:
- **Hide Colib Branding**: Toggle to remove Colib logo/references
- Replace with custom business information
- White-label appearance
- Professional brand consistency

**Theme Color**:
- **12 Color Options**:
  1. Teal (default Colib color)
  2. Black
  3. Dark Green
  4. Blue
  5. Light Green
  6. Orange-Red
  7. Dark Brown
  8. Gray
  9. Red
  10. Yellow
  11. Dark Blue
  12. Purple
- Applies throughout platform
- Booking page color scheme
- Email accent colors
- Button colors

**Referral & Promo Code**:
- **Unique Promo Code**: Example: PYRJG3
- **Sharing Link**: Referral URL for sharing
- **Referral Program**: $50 CAD credits per successful referral
- Track referrals
- Apply credits automatically

**Business Address**:
- **Street Address**: Physical location
- **City**: Municipality
- **Postal/Zip Code**: Mailing code
- **Country**: Nation
- **Province**: State/territory
- Appears on invoices and receipts
- Google Maps integration (optional)

**Social Media & Website**:
- **Facebook**: Profile/page URL
- **Instagram**: Handle or profile URL
- **LinkedIn**: Company or personal profile
- **Website**: Practice website URL
- Links appear on booking page
- Social proof and credibility

**Opening Hours**:
- **7-Day Weekly Schedule**:
  - Toggle for open/closed per day
  - Start time selection
  - End time selection
  - Break configuration (start/end)
  - 30-minute time interval increments
- Applies to all booking pages
- Controls online booking availability
- Staff schedule override capability

---

### 2.2 Appointments
**Purpose**: Service category and appointment type management

**Service Categories**:
- Create and manage appointment type categories
- Organize related appointment types together
- Examples: Therapy, Assessments, Follow-ups, Consultations

**Appointment Types**:
- Add types within categories
- **Default Includes**:
  - Control visit
  - First visit
- Custom appointment type creation
- Pricing per type
- Duration per type
- Color coding per type

**Category Actions**:
- **Copy Category**: Duplicate with all appointment types
- **Edit Category**: Modify name and settings
- **Delete Category**: Remove entire category
- **Add Appointment Type**: Within category
- **Copy Appointment Type**: Duplicate within same or different category
- **Delete Appointment Type**: Remove specific type

**Category Order**:
- Categories appear in same order throughout booking process
- Drag-and-drop reordering
- Prioritize popular services
- Logical grouping

**Appointment Type Properties**:
- Name
- Duration
- Price
- Color
- Description
- Online booking availability
- Buffer time before/after

---

### 2.3 Booking Page
**Purpose**: Configure client self-booking experience

**Booking Type** (Choose One):

**1. Online Booking by Client**:
- Direct appointment booking
- Automatic confirmation
- Real-time availability display
- Immediate calendar updates
- No practitioner approval required

**2. Appointment Request Form**:
- Clients request appointments
- Practitioner must create appointment from Forms section
- Manual approval process
- More control over bookings
- Suitable for complex scheduling

**Booking Request Form**:
- **Select Form**: Default or custom forms
- Form appears when client requests appointment
- Collect additional information
- Screen new clients
- Gather preferences and requirements

**Auto Client Linking**:
- Every booking/request automatically links to client record
- Creates client profile if new
- Matches existing clients by email
- Maintains comprehensive client history
- Reduces duplicate records

---

### 2.4 Waitlist
**Purpose**: Manage appointment waiting list

**Enable Waitlist**:
- Toggle to activate waitlist feature
- Manage clients wanting appointments when schedule full
- Collect waitlist requests
- Notify clients when spots open
- Priority notification system

**Waitlist Management**:
- View all waitlist requests
- Filter by appointment type
- Sort by date added
- Contact clients directly
- Remove from list when booked

**Automated Notifications**:
- Alert clients when matching appointment available
- Email/SMS notification
- Booking link included
- Time-limited offer (optional)

**Documentation Link**:
- References for more information on waitlist functionality
- Best practices
- Setup guide

---

### 2.5 Team
**Purpose**: Staff and practitioner management

**Team Members Table**:
- **Display Name**: Full name
- **Email**: Contact and login email
- **Role**: Practitioner, Admin, Receptionist
- **Invitation Status**:
  - Pending (invited, not accepted)
  - Accepted (active team member)
  - Declined (rejected invitation)
- Edit capability per member
- Resend invitation option

**Create Team Member Modal**:
- **Email**: Required, used for invitation
- **First Name**: Given name
- **Last Name**: Family name
- **Qualification**: Professional designation
- **Licence Number**: Registration number
- **Role Selection**: Assign appropriate role
- Send invitation email automatically

**Role Permissions**:
- **Admin**: Full access to all settings and data
- **Practitioner**: Own schedule, own clients, limited settings
- **Receptionist**: Scheduling, client management, no billing/settings

**Invitation Process**:
1. Admin creates team member
2. Invitation email sent
3. Team member receives link
4. Team member creates password
5. Team member accepts/declines
6. Status updated in table

---

### 2.6 Communications
**Purpose**: Email signature and notification configuration

**Tone of Voice**:
- **3 Options**:
  1. **Formal**: Professional, traditional language
  2. **Casual**: Friendly, approachable tone
  3. **Friendly**: Warm, personable communication
- Applies to all automated emails
- Consistent brand voice
- Appropriate for client demographic

**Email Signatures (Bilingual)**:

**English Version**:
- **Rich Text Editor** with full formatting:
  - Bold, italic, underline
  - Font size adjustment
  - Text color selection
  - Text alignment
  - Bulleted and numbered lists
  - Insert links and images
  - Undo/redo
  - Code view for HTML editing
- Appears at bottom of all English emails
- Professional contact information
- Call-to-action links

**French Version**:
- Identical rich text editor capabilities
- Appears at bottom of all French emails
- Bilingual compliance (Canadian requirement)
- Cultural appropriateness

**Event Notification Recipients**:
Configure who receives notifications for each event type:

**Event Types**:
- Appointment booked
- Appointment rescheduled
- Appointment confirmed (by client)
- Appointment cancelled
- Waitlist request received

**Recipient Options for Each Event**:
- **Practitioner**: Assigned practitioner only
- **Clinic**: Admin email address
- **Both**: Practitioner and clinic

**Email Reply-To Settings**:
Select reply-to recipient for different email types:

**Email Types**:
- **Appointment Reminders/Confirmation**:
  - Reply to practitioner
  - Reply to clinic
- **Appointment Cancellations**:
  - Reply to practitioner
  - Reply to clinic
- **Invoices and Receipts**:
  - Reply to practitioner
  - Reply to clinic

**Benefits**:
- Appropriate email routing
- Reduces missed messages
- Professional communication flow
- Clear client expectations

---

### 2.7 Clients
**Purpose**: Client data management and custom fields

**Phone Number Control**:
- **Toggle US/Canadian Phone Validation**
- SMS requires valid phone number format
- Prevents invalid numbers
- Ensures successful message delivery

**Score/Goals Feature**:
- **Toggle**: Add "Scores and Goals" tracking in client files
- Outcome measurement
- Progress tracking
- Goal setting and monitoring
- Treatment effectiveness evaluation

**Additional Fields**:
- **Custom Fields Table**:
  - Label (field name)
  - Type (field type)
  - Delete action per field

**Field Types Available**:
- **Text**: Short text input
- **Number**: Numeric values only
- **Email**: Email address validation
- **Date**: Date picker
- **Textarea**: Long text input
- **Select**: Dropdown selection
- **Checkbox**: Yes/no boolean

**Add Field Modal**:
- **Label**: Field name display
- **Type**: Select field type
- Save to create new field
- Appears on all client profiles
- Required vs. optional designation

**Use Cases**:
- Emergency contact
- Preferred communication method
- Referral source
- Insurance provider
- Dietary restrictions
- Accessibility needs

---

### 2.8 Notes
**Purpose**: Clinical note templates and AI generation

**Use Templates**:
- **Toggle**: Apply note templates
- **Template Options**:
  - SOAP (Subjective, Objective, Assessment, Plan)
  - DAP (Description, Assessment, Plan)
  - BIRP (Behavior, Intervention, Response, Plan)
  - Custom templates
- Standardized note format
- Compliance with documentation standards

**Template Selection**:
- Choose from predefined templates when enabled
- Create custom templates
- Import from template library
- Share templates with team

**AI Note Generation**:
- **Toggle**: Automatic note creation from Colib video sessions
- **Requirements**: 10+ minute session
- **Status**: Draft saved, not signed, requires human review
- **Compliance**: PIPEDA/PHIPA/HIPAA compliant, servers in Canada
- **Quality**: Professional SOAP format
- **Review Required**: Practitioner must review and approve

**AI Packages**:
- Purchase notes in packages for cost savings
- Per-note billing option
- Usage tracking
- Monthly limits or pay-as-you-go

**Template Management**:
- Create custom note templates
- Import from library
- Share with team
- Version control
- Template categories (therapy, assessment, medical)

**Benefits**:
- Time savings (15-30 min per note)
- Consistent documentation
- Compliance assurance
- Reduced documentation burden

---

### 2.9 Scheduler
**Purpose**: Calendar display and notification settings

**Calendar Display Options**:

**Enable 24-Hour View**:
- Toggle to show full day (default 6am-10pm)
- Useful for practices with late hours
- Night shift support

**Use 24-Hour Time Format**:
- Toggle for 24-hour clock (14:00 vs 2:00 PM)
- International standard
- Reduces AM/PM confusion

**Sunday-to-Saturday Weekly Calendar**:
- Week starts on Sunday (vs. Monday)
- North American standard
- Customizable week start day

**Notification Settings**:

**Default Notification Options**:
- Pre-selected when creating appointments
- Saves time during scheduling
- Consistency across appointments

**Send During Business Hours Only**:
- **Time Window**: 7am-7pm practitioner timezone
- Prevents late-night notifications
- Respects client boundaries
- Queues messages sent outside window

**Add Confirmation Link to Reminders**:
- Toggle to include confirmation link
- Client can confirm attendance
- Reduces no-shows
- Reminder tracking

**Allow Client Cancellations**:
- Toggle to permit client-initiated cancellations
- Cancellation link in reminders
- Automatic calendar updates
- Cancellation policy enforcement

**Daily Email Summary**:
- **Send at 6pm**: Daily schedule summary
- Next day appointments
- Preparation reminders
- Task list

**Notify on Client Confirmation**:
- Alert when client confirms appointment
- Real-time notification
- Reduces uncertainty

**Color Coding**:
- **Use Colors by Appointment Type**: Toggle
- Visual calendar organization
- Quick appointment type identification
- Customizable color palette

**Preferred Notification Method**:
- **Email & SMS**: Both channels
- **Email Only**: Email notifications only
- **SMS Only**: Text notifications only
- Per client override available

**Color Selection**:
- **"Busy" Color**: For blocked time
- **"Other" Color**: For misc. appointments
- Color picker interface
- Hex color input

**Availability Groups**:
- **Toggle**: Enable different schedules for appointment types
- Examples: In-person vs. online
- Location-specific availability
- Practitioner-specific schedules

**Appointment Pauses**:
- Configure absences/work pauses
- Pausable by appointment type
- Vacation mode
- Sabbatical configuration
- Automatic booking prevention

---

### 2.10 Web Page
**Purpose**: Custom practice web page creation

**Enable Web Page**:
- **Toggle**: Create custom web page introducing practice
- Booking page with practice information
- Professional online presence
- No external website needed

**Requirements**:
- Complete General settings first
- Logo uploaded
- Business information filled
- Opening hours configured

**Web Page Features**:
- Practice name and description
- Team member profiles
- Service listings
- Online booking widget
- Contact information
- Social media links
- Operating hours
- Location map (if configured)

**Customization**:
- Theme color applies
- Logo display
- Custom text sections
- Image galleries
- Testimonials
- FAQ section

---

### 2.11 Recalls
**Purpose**: Automated follow-up reminders for clients

**Create Recalls**:
- Automatic emails/SMS to clients
- Triggered for missed appointment types
- Sent after defined time period
- Encourages rebooking

**Recall Configuration**:
- **Appointment Type**: Which services trigger recalls
- **Time Period**: Days after missed appointment
- **Message Template**: Customizable content
- **Channel**: Email, SMS, or both

**Recall List**:
- Display created recalls
- Edit capability per recall
- Active/inactive status
- Trigger count tracking

**Practitioner-Specific Recalls**:
- **Toggle**: Send recalls from specific practitioner
- Personalized communication
- Linked to practitioner's booking page
- Builds therapeutic relationship

**Non-Retroactive**:
- Recalls apply only to new dates
- Doesn't trigger for past missed appointments
- Prevents overwhelming clients

**Use Cases**:
- Annual physicals
- Dental cleanings
- Medication reviews
- Therapy check-ins
- Preventive care

---

### 2.12 Forms
**Purpose**: Intake forms and surveys configuration

**Notifications**:

**Email per Form Completed**:
- Receive notification when client submits form
- Real-time alerts
- Form content summary

**Email on Risk Detection**:
- Alert when form indicates risk (e.g., suicide ideation)
- Immediate notification
- Patient safety protocol

**Default User Receiving Notifications**:
- **Practitioner**: Assigned practitioner
- **Admin**: Clinic administrator
- **Clinic**: General clinic email

**Clients**:

**Link Forms to Client Records**:
- **Auto-Create**: Create new client if not exists
- **Match Existing**: Link to existing client by email
- Comprehensive client history

**Share Completed Forms with Clients on Portal**:
- Toggle to allow client access
- Transparency
- Client engagement
- Review capability

**Signature**:

**Countersignature Options**:
- **No Signature Required**: No practitioner signature
- **Required**: Must countersign before finalization
- **Optional**: Practitioner choice
- Compliance with documentation standards

**Practitioner Countersign**:
- Available on results page
- Digital signature
- Timestamp recorded
- Audit trail

**Automatic Reminders**:
- Send reminder if form not completed
- Configurable delay (e.g., after 3 days)
- Multiple reminder sequence
- Completion rate improvement

---

### 2.13 Invoices
**Purpose**: Invoice configuration and automation

**General Settings**:

**Payment Terms**:
- Number of days to pay (e.g., Net 30)
- Due date calculation
- Payment deadline display

**Tax Selection**:
- Choose applicable taxes
- Multiple tax rates
- Tax-exempt clients

**Random Invoice References**:
- Toggle for random invoice numbers
- Security enhancement
- Prevents sequential guessing

**Require Payment Method Info**:
- When marking invoice "Paid"
- Payment method dropdown required
- Accurate payment tracking

**Default Email Message**:
- Template for invoice emails
- Customizable content
- Professional tone

**Per-Practitioner Customization**:
- Toggle to allow practitioner-specific settings
- Individual invoice templates
- Custom payment terms per practitioner

**Invoice Footer Text**:
- Optional footer text for all invoices
- Payment instructions
- Late fee policies
- Contact information

**Automation**:

**Auto-Reminder for Unpaid Invoices**:
- Automated reminder emails
- Configurable schedule (3 days, 7 days, 14 days)
- Escalating tone (gentle to firm)

**Auto-Send Invoice on Appointment Completion**:
- Toggle to send immediately after appointment
- No manual invoicing
- Faster payment collection

**Auto-Charge Client on Appointment Completion**:
- Automatic charge to stored payment method
- Requires card on file
- Client consent required
- Failed payment handling

**Auto-Send Receipt on Payment**:
- Immediate receipt delivery
- Professional appearance
- Email and portal delivery

**Auto-Charge for No-Shows & Late Cancellations**:
- Enforce cancellation policy
- Automatic fee application
- Client notification
- Dispute management

**Fee Modifications**:
- **Add Discounts**: Percentage or fixed amount
- **Sliding Scales**: Income-based fee adjustment
- Scholarship programs
- Pro bono work tracking

---

### 2.14 Payments
**Purpose**: Payment processing and payout management

**Card Payment System (Stripe)**:
- **Payment URL**: Included with each invoice
- **Easy Payment**: Click link to pay online
- **Fees**:
  - Stripe fees (2.9% + $0.30 per transaction)
  - Additional $0.25 CAD per payment
  - Total processing cost displayed

**Stripe Dashboard**:
- Link to Stripe account
- Setup missing information
- View transaction details
- Manage disputes
- Generate reports

**Payouts Section**:
- **Table Columns**:
  - Date: Payout date
  - Status: Pending, Paid, Failed
  - Invoices: Number of invoices in payout
  - Amount: Total payout amount
  - Fees: Stripe and Colib fees
- **Search**: Find specific payouts
- **Pagination**: 10, 20, 50, 100 rows per page

**Processing Timeline**:
- **4-7 Calendar Days**: From payment to bank account
- Automatic bank deposit
- Email notification on payout

**Payment Methods Accepted**:
- All major credit cards (Visa, Mastercard, Amex)
- Debit cards
- Apple Pay
- Google Pay

---

### 2.15 Telehealth
**Purpose**: Video session configuration

**Record Online Appointments**:
- **Toggle**: Audio recording of video sessions
- Included in appointment documents
- Stored securely
- PIPEDA/HIPAA compliant
- Client consent required

**Waiting Room**:
- **Toggle**: Enable for clients
- Clients join waiting room before meeting
- Practitioner controls entry
- Reduces interruptions
- Professional appearance

**Background Images**:
- **Use Default**: Colib background images
- **Upload Custom**: Custom background images
- Professional appearance
- Brand consistency
- Multiple image options

**Technical Requirements**:
- Browser compatibility (Chrome, Firefox, Safari)
- Camera and microphone access
- Stable internet connection (minimum 5 Mbps)
- Screen sharing capability

---

### 2.16 Rooms
**Purpose**: Physical room management for multi-room practices

**Room Management Table**:
- **Name**: Room identifier (e.g., "Room 1", "Blue Room")
- **Code**: Short code for quick reference
- **Priority Order**: Display order (1, 2, 3...)
- **Description**: Room details and features

**Add Room Modal**:
- **Name**: Required, room name
- **Code**: Optional, quick reference
- **Priority Order**: Numeric, sorting
- **Description**: Optional, room details

**Room Features**:
- Track room usage
- Room-specific availability
- Equipment tracking
- Capacity limits

**Room Availability**:
- Configure availability for appointment types
- Some services require specific rooms
- Room booking conflicts prevention
- Double-booking prevention

**Use Cases**:
- Multi-practitioner clinics
- Specialty equipment rooms
- Group therapy rooms
- Assessment rooms

---

### 2.17 Security (Admin)
**Purpose**: Practice-wide security settings

**IP Restriction**:

**Add Authorized IP Addresses**:
- **IP Address**: Numeric IP (e.g., 192.168.1.1)
- **Description**: Location or purpose (e.g., "Main Office", "Dr. Smith Home")
- Restriction applies to specified practitioners
- Enhanced security for sensitive data
- Prevents unauthorized access

**Delete IP Addresses**:
- Remove outdated IPs
- Revoke access when staff leaves
- Security incident response

**Client Data Access Audit**:

**Audit Log Filtering**:
- **Date Range**: From/to datetime picker
- Filter by specific date range
- Track recent activity

**Audit Table**:
- **Date**: Access timestamp
- **User**: Staff member who accessed
- **Type**: Action type (View, Edit, Delete, Export)
- **Description**: Detailed action description
- **IP**: IP address of access
- **Browser**: User agent information

**Retention**:
- Records stored for one year
- Compliance requirement
- Legal protection
- Incident investigation

**Features**:
- Pagination for large logs
- Search functionality
- Export audit logs
- Real-time logging

---

### 2.18 Inventory
**Purpose**: Product and supply management

**Product Management Table**:
- **Image**: Product photo
- **Name**: Product name
- **Price**: Selling price
- **Available Quantity**: Stock level
- **Status**: Enabled/Disabled toggle

**Add Product Modal**:
- **Name**: Required, product name
- **Price**: Required, selling price
- **Description**: Optional, product details
- **Image**: Optional, product photo
- **Enabled Status**: Toggle for active/inactive

**Delete Products**:
- Remove from inventory list
- Discontinue products
- Clear old inventory

**Features**:
- Low stock alerts
- Reorder point tracking
- Supplier management
- Purchase order creation
- Sales tracking
- Inventory reports

**Use Cases**:
- Supplements
- Medical supplies
- Orthotic devices
- Exercise equipment
- Educational materials

---

### 2.19 Online Sales
**Purpose**: E-commerce functionality (future feature)

**Current Status**:
- **Payment Setup Required**: Message indicating need to complete Payments tab first
- Feature under development
- Placeholder for future e-commerce

**Planned Features**:
- Online product sales
- Shopping cart
- Payment integration
- Inventory synchronization
- Order management
- Shipping integration

---

## Key Strengths of Colib Settings

### 1. **Bilingual Excellence**
- Full English/French support
- Separate email signatures per language
- Canadian compliance (PIPEDA, PHIPA)
- Cultural appropriateness
- Bilingual communications

### 2. **Clean, Simple Design**
- Emoji icons for visual clarity
- Two-tier organization (Personal vs. Admin)
- White cards with rounded corners
- Toggle switches (teal/gray)
- Rich text editors throughout

### 3. **Canadian Focus**
- Servers in Canada
- PIPEDA/PHIPA compliance
- Bilingual requirement support
- Canadian payment processing
- Provincial billing codes

### 4. **Comprehensive Customization**
- 12 theme color options
- Custom fields unlimited
- Rich text editors everywhere
- Custom appointment types
- Personal availability control

### 5. **AI Innovation**
- AI note generation from video sessions
- SOAP format notes
- 10+ minute session requirement
- Human review required
- Canadian server compliance

### 6. **Strong Communication**
- Tone of voice selection (formal/casual/friendly)
- Bilingual email signatures
- Event notification routing (practitioner/clinic/both)
- Reply-to configuration
- Automated recalls

### 7. **Telehealth Built-In**
- Video conferencing native
- Waiting room feature
- Session recording option
- Custom backgrounds
- HIPAA/PIPEDA compliant

### 8. **Security & Compliance**
- 2FA email-based
- IP restriction
- Client data access audit (1-year retention)
- Secure payment processing
- PIPEDA/PHIPA/HIPAA compliance

---

## Best Practices for Colib Configuration

### Initial Setup Priority
1. **Admin > General**: Complete business info, upload logo, choose theme color
2. **Admin > Opening Hours**: Configure practice hours (7-day schedule)
3. **Admin > Appointments**: Create service categories and appointment types
4. **Admin > Booking Page**: Choose booking type (direct or request form)
5. **Admin > Team**: Add team members with appropriate roles
6. **Personal > Profile**: Complete personal info and biography
7. **Personal > Availability**: Configure personal schedule and preferences

### Security Best Practices
1. Enable 2FA (Personal > Security) immediately
2. Configure IP restrictions (Admin > Security) for sensitive environments
3. Review client data access audit regularly
4. Strong password requirements
5. Limit team member access by role

### Bilingual Configuration
1. Complete both English and French email signatures
2. Test all client-facing communications in both languages
3. Configure language preferences per client
4. Ensure practice description translated
5. Staff bilingual capability

### Client Experience Optimization
1. **Booking Page**:
   - Choose appropriate booking type
   - Enable auto client linking
   - Configure waitlist if needed
   - Professional practice description

2. **Communication**:
   - Select appropriate tone of voice
   - Configure event notifications properly
   - Set reply-to addresses correctly
   - Enable recalls for appointment types

3. **Scheduler**:
   - Enable confirmation links
   - Allow client cancellations (with policy)
   - Use color coding
   - Daily email summary at 6pm
   - Send during business hours only (7am-7pm)

### Billing & Payment Setup
1. **Admin > Payments**: Connect Stripe account fully
2. **Admin > Invoices**: Configure automation:
   - Auto-send on appointment completion
   - Auto-charge if card on file
   - Auto-send receipt on payment
   - Auto-reminder for unpaid invoices
3. **Admin > Invoices**: Set clear payment terms (e.g., Net 30)
4. **Admin > Invoices**: Create invoice footer with policies

### Clinical Documentation
1. **Admin > Notes**: Enable use templates
2. Choose appropriate template (SOAP, DAP, BIRP)
3. Configure AI note generation (if desired)
4. **Personal > Signature**: Upload digital signature
5. Enable automatic signature on signed notes

### Team Management
1. Assign appropriate roles (Admin/Practitioner/Receptionist)
2. Configure practitioner-specific settings
3. Enable per-practitioner invoice customization
4. Set up supervision relationships (if applicable)
5. Track invitation status and follow up

---

## Integration Ecosystem

Colib integrates with:
- **Calendar**: Google Calendar (two-way sync)
- **Payments**: Stripe (credit/debit cards, Apple Pay, Google Pay)
- **Telehealth**: Native video built-in
- **Email**: Direct SMTP integration
- **SMS**: Native text messaging
- **Accounting**: Export to QuickBooks, Excel (future direct integration)

---

## Referral Program

**Earn $50 CAD per referral**:
- Unique promo code (e.g., PYRJG3)
- Sharing link provided
- Credits applied automatically
- Track referrals in dashboard
- Use credits for subscription

---

## Conclusion

Colib provides a streamlined, Canadian-focused settings system with 25+ configuration areas organized into Personal (6) and Admin (19) sections. The platform excels in bilingual support (English/French email signatures, communications), Canadian compliance (PIPEDA/PHIPA, servers in Canada), AI innovation (note generation from video sessions), and simplicity (clean design, emoji icons, two-tier structure). The strong focus on telehealth (built-in video, waiting room, recording), comprehensive customization (12 theme colors, unlimited custom fields, rich text editors), and intelligent automation (recalls, invoice automation, AI notes) makes it ideal for Canadian healthcare practitioners, particularly those serving bilingual populations or requiring strict privacy compliance. The referral program ($50 CAD credits) and clear pricing make it appealing for solo practitioners and small clinics looking for an affordable, compliant, feature-rich solution.
