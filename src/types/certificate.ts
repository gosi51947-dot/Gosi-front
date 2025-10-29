export interface CertificateData {
  // Page 1 - Header Information
  headerDate: string;
  correspondingDate: string;
  certificateNumber: string;
  
  // Page 1 - Personal Information
  name: string;
  nationalId: string;
  birthDate: string;
  nationality: string;
  
  // Page 1 - Certificate Details
  certificateTitle: string;
  
  // Page 1 - Table Headers (Arabic)
  tableHeaders: {
    retirementSystem: string;
    employerSubscription: string;
    establishments: string;
    contributionBases: string;
  };
  
  // Page 1 - Table Data
  tableData: {
    months: string;
    beneficiaryMonths: string;
    employerMonths: string;
    establishmentsMonths: string;
  };
  
  // Page 1 - Company Information
  companyName: string;
  establishmentNumber: string;
  systemType: string;
  subscriptionWage: string;
  totalWage: string;
  joiningDate: string;
  exclusionDate: string;
  wageStartDate: string;
  currentStatus: string;
  
  // Page 1 - Footer Text
  footerText: string;
  
  // Page 2 - Content
  page2Title: string;
  page2Content: string;
  
  // QR Code Data
  qrCodeUrl: string;
  
  // Additional fields for complete customization
  logoPath: string;
  primaryColor: string;
  secondaryColor: string;
}

export const defaultCertificateData: CertificateData = {
  // Default values based on the original certificate
  headerDate: "1447/04/09",
  correspondingDate: "02/10/2025",
  certificateNumber: "102799562",
  
  name: "سارة قاسم السيد الجمري",
  nationalId: "1104407315",
  birthDate: "1998/03/21",
  nationality: "السعودية",
  
  certificateTitle: "شهادة المدد والأجور",
 
  
  tableHeaders: {
    retirementSystem: "نظامي التقاعد",
    employerSubscription: "نظام التأمينات", 
    establishments: "إجمالي أشهر المصروفة",
    contributionBases: "إجمالي أشهر الاشتراك"
  },
  
  tableData: {
    months: "6 شهر",
    beneficiaryMonths: "6 شهر", 
    employerMonths: "6 شهر",
    establishmentsMonths: "6 شهر"
  },
  
  companyName: "شركة جواهر الاتجاهات",
  establishmentNumber: "12545451",
  systemType: "نظام التأمينات",
  subscriptionWage: "214545",
  totalWage: "52154135",
  joiningDate: "2025/04/01",
  exclusionDate: "",
  wageStartDate: "2025/04/01",
  currentStatus: "نشط",
  
  footerText: "",
  page2Title: "ﻭﻻ ﺗﺨﻞ ﻫﺬﻩ ﺍﻟﺸﻬﺎﺩﺓ ﺑﺤﻖ ﺍﻟﻤﺆﺳﺴﺔ ﻓﻲ ﺇ ﺟﺮﺍﺀ ﺃﻱ ﺗﻌﺪﻳﻼﺕ ﻋﻠﻰ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﻮﺍﺭﺩﺓ ﻓﻴﻬﺎ ﻭﻓﻘﺎ ﻟﻤﺎ ﻳﺘﺒﻴﻦ ﻟﻬﺎ ﻣﻦ ﻭﻗﺎﺋﻊ.",
  page2Content: "(ﻫﺬﻩ ﺍﻟﺸﻬﺎﺩﺓ ﺳﺎﺭﻳﺔ ﺍﻟﻤﻔﻌﻮﻝ ﻟﻤﺪﺓ 30 ﻳﻮﻡ ﻣﻦ ﺗﺎﺭﻳﺦ ﺇﺻﺪﺍﺭﻫﺎ)",
  
  qrCodeUrl: "",
  logoPath: "/pdfimags/GosoLogo.svg",
  primaryColor: "#00004E",
  secondaryColor: "#00BF00"
};
