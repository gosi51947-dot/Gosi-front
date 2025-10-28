# PDF Certificate Generator

This application provides a comprehensive PDF certificate generator for GOSI (General Organization for Social Insurance) certificates with QR code functionality.

## Features

- **Dynamic Form Interface**: Complete form with all certificate data fields
- **Real-time Preview**: Live preview of both certificate pages
- **QR Code Generation**: Automatic QR code generation with GOSI verification URL
- **PDF Generation**: High-quality PDF generation using html2canvas and jsPDF
- **Backend Integration**: Automatic upload to backend API
- **Form Validation**: Comprehensive validation for required fields
- **Arabic Support**: Full RTL support and Arabic text handling

## Usage

### 1. Access the Form

Navigate to `/formation` to access the certificate generator form.

### 2. Fill Certificate Data

Complete all the form fields including:

- **Header Information**: Date, corresponding date, certificate number
- **Personal Information**: Name, national ID, birth date, nationality
- **Certificate Details**: Title, system name, company details
- **Table Headers**: Subscription types and contribution bases
- **Content**: Footer text and page 2 content

### 3. Generate QR Code

Click "Generate New QR Code" to create a QR code with the format:

```
https://www.gosi.gov.sa/ar/QuickVerify/ECertificate?Type=4&StakeholderValue={nationalId}&CertificateNumber={certificateNumber}
```

### 4. Preview Certificate

Review the live preview of both certificate pages with your data.

### 5. Generate and Upload PDF

Click "Download & Upload PDF" to:

- Generate high-quality PDF from the certificate pages
- Upload to backend API (`http://localhost:1234/clients`)
- Download PDF locally

## API Integration

The system uploads to the backend with the following form data:

- `pdfFile`: The generated PDF blob
- `name`: Certificate holder name
- `certificateNumber`: Certificate number

## Form Validation

The system validates:

- **Required Fields**: Name, National ID, Certificate Number
- **National ID Format**: Must be exactly 10 digits
- **Certificate Number**: Minimum 5 characters

## Technical Details

### Dependencies Used

- `html2canvas`: For capturing certificate pages as images
- `jspdf`: For PDF generation
- `qrcode`: For QR code generation
- `axios`: For API communication

### File Structure

```
src/
├── app/formation/formation.tsx          # Main form component
├── components/Certificate/
│   ├── CertificatePage1.tsx            # First page component
│   └── CertificatePage2.tsx            # Second page component
├── types/
│   ├── certificate.ts                  # Certificate data types
│   └── qrcode.d.ts                     # QR code type definitions
```

### Certificate Design

The certificate components recreate the exact GOSI design with:

- Official GOSI branding and colors
- Proper Arabic text layout (RTL)
- Professional table styling
- QR code integration
- Official footer information

## Customization

All certificate content is fully customizable through the form interface, including:

- All text content
- Table headers and data
- Company information
- Dates and numbers
- Footer text

The design maintains the official GOSI appearance while allowing complete content flexibility.
