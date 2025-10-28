"use client";

import React, { useState, useRef } from "react";
import { CertificateData, defaultCertificateData } from "@/types/certificate";
import CertificatePage1 from "@/components/Certificate/CertificatePage1";
import CertificatePage2 from "@/components/Certificate/CertificatePage2";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Create empty initial data but keep page 2 data from defaults
const emptyInitialData: CertificateData = {
  ...defaultCertificateData,
  // Empty page 1 and header fields
  headerDate: "",
  correspondingDate: "",
  certificateNumber: "",
  name: "",
  nationalId: "",
  birthDate: "",
  nationality: "",
  certificateTitle: "",
  tableData: {
    months: "",
    beneficiaryMonths: "",
    employerMonths: "",
    establishmentsMonths: "",
  },
  companyName: "",
  establishmentNumber: "",
  subscriptionWage: "",
  totalWage: "",
  joiningDate: "",
  exclusionDate: "",
  wageStartDate: "",
  currentStatus: "",
  qrCodeUrl: "",
};

export default function Formation() {
  const [certificateData, setCertificateData] =
    useState<CertificateData>(emptyInitialData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false);

  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  // Handle input changes
  const handleInputChange = (field: keyof CertificateData, value: string) => {
    setCertificateData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Reset QR code generated state if certificate number or national ID changes
    if (field === "certificateNumber" || field === "nationalId") {
      setIsQrCodeGenerated(false);
    }
  };

  // Handle nested object changes (like tableHeaders, tableData)
  const handleNestedInputChange = (
    parentField: keyof CertificateData,
    childField: string,
    value: string
  ) => {
    setCertificateData((prev) => ({
      ...prev,
      [parentField]: {
        ...(prev[parentField] as Record<string, string>),
        [childField]: value,
      },
    }));
  };

  // Generate new QR code
  const newQrCode = async () => {
    try {
      const qrUrl = `https://www.gosi.gov.sa/ar/QuickVerify/ECertificate?Type=4&StakeholderValue=${certificateData.nationalId}&CertificateNumber=${certificateData.certificateNumber}`;
      const qrDataUrl = await QRCode.toDataURL(qrUrl, {
        width: 100,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });
      setQrCodeDataUrl(qrDataUrl);
      setIsQrCodeGenerated(true);
      setCertificateData((prev) => ({
        ...prev,
        qrCodeUrl: qrUrl,
      }));
    } catch (error) {
      console.error("Error generating QR code:", error);
      setIsQrCodeGenerated(false);
    }
  };

  // Generate PDF
  const generatePDF = async () => {
    if (!page1Ref.current || !page2Ref.current) return null;

    setIsGenerating(true);
    try {
      // Wait a bit for QR code to render
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Capture page 1 with optimized settings
      const canvas1 = await html2canvas(page1Ref.current, {
        scale: 2, // Reduced from 2 to 1.5
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      // Capture page 2 with optimized settings
      const canvas2 = await html2canvas(page2Ref.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (canvas1.height * pdfWidth) / canvas1.width;
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Add page 1 with compression
      const imgData1 = canvas1.toDataURL("image/jpeg"); // Use JPEG with 80% quality
      pdf.addImage(imgData1, "JPEG", 0, 0, pdfWidth, pdfHeight);

      // Add page 2 with compression
      pdf.addPage();
      const imgData2 = canvas2.toDataURL("image/jpeg"); // Use JPEG with 80% quality
      pdf.addImage(imgData2, "JPEG", 0, 0, pdfWidth, pdfHeight);

      return pdf;
    } catch (error) {
      console.error("Error generating PDF:", error);
      return null;
    } finally {
      setIsGenerating(false);
    }
  };

  // Download and upload PDF
  const downloadPdf = async () => {
    setIsUploading(true);
    try {
      const pdf = await generatePDF();
      if (!pdf) {
        toast.error("تعذر انشاء الملف");
        return;
      }

      // Convert PDF to blob and check size
      const pdfBlob = pdf.output("blob");
      const fileSizeInMB = pdfBlob.size / (1024 * 1024);

      // Check if file size exceeds 10MB
      if (fileSizeInMB > 10) {
        toast.error(
          `حجم الملف كبير جداً (${fileSizeInMB.toFixed(
            1
          )} MB). الحد الأقصى 10 ميجابايت`
        );
        return;
      }

      toast.success(`تم انشاء الملف بنجاح (${fileSizeInMB.toFixed(1)} MB)`);

      // Create FormData for upload
      const formData = new FormData();
      formData.append(
        "pdfFile",
        pdfBlob,
        `${certificateData.certificateNumber}.pdf`
      );
      formData.append("name", certificateData.name);
      formData.append("certificateNumber", certificateData.certificateNumber);

      // Upload to backend
      const response = await axios.post(
        "https://www.gosi.gov.sa/api/clients",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("تم تحميل الملف بنجاح");
      if (response.data.status === "success") {
        toast.success("Certificate uploaded successfully!");

        // Also download locally
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `certificate${certificateData.certificateNumber}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch ( error) {
      console.error("Error uploading PDF:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="pdf   min-h-screen mt-40 bg-gray-100 p-4">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col  xl:flex-row  gap-4">
          {/* Form Section */}
          <div className="bg-white p-6 w-[80%] mx-auto rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">
              املاء الخانات اللازمة للشهادة
            </h2>

            {/* Header Information */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-secColor ">
                البيانات الرئيسة في الصفحتين
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    التاريخ
                  </label>
                  <input
                    type="text"
                    value={certificateData.headerDate}
                    onChange={(e) =>
                      handleInputChange("headerDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.headerDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    الموافق
                  </label>
                  <input
                    type="text"
                    value={certificateData.correspondingDate}
                    onChange={(e) =>
                      handleInputChange("correspondingDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.correspondingDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    رمز الشهادة
                  </label>
                  <input
                    type="text"
                    value={certificateData.certificateNumber}
                    onChange={(e) =>
                      handleInputChange("certificateNumber", e.target.value)
                    }
                    placeholder={defaultCertificateData.certificateNumber}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-secColor ">
              بيانات الصفحة الأولى
            </h2>

            {/* Personal Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-mColor">
                معلومات شخصية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={certificateData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={defaultCertificateData.name}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    رقم الهوية الوطنية
                  </label>
                  <input
                    type="text"
                    value={certificateData.nationalId}
                    onChange={(e) =>
                      handleInputChange("nationalId", e.target.value)
                    }
                    placeholder={defaultCertificateData.nationalId}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    تاريخ الميلاد
                  </label>
                  <input
                    type="text"
                    value={certificateData.birthDate}
                    onChange={(e) =>
                      handleInputChange("birthDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.birthDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    الجنسية
                  </label>
                  <input
                    type="text"
                    value={certificateData.nationality}
                    onChange={(e) =>
                      handleInputChange("nationality", e.target.value)
                    }
                    placeholder={defaultCertificateData.nationality}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            {/* title of certificate */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-mColor">
                عنوان الشهادة
              </h3>
              <input
                type="text"
                value={certificateData.certificateTitle}
                onChange={(e) =>
                  handleInputChange("certificateTitle", e.target.value)
                }
                placeholder={defaultCertificateData.certificateTitle}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Table  */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-mColor">الجدول</h3>

              {/* Monthly data for subscription table */}
              <h6 className="text-mColor mr-2 font-semibold text-lg">
                بيانات الأشهر
              </h6>
              <div className="grid grid-cols-1 mr-4 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    نظامي التقاعد
                  </label>
                  <input
                    type="text"
                    value={certificateData.tableData.beneficiaryMonths}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "tableData",
                        "beneficiaryMonths",
                        e.target.value
                      )
                    }
                    placeholder={
                      defaultCertificateData.tableData.beneficiaryMonths
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    نظام التأمينات
                  </label>
                  <input
                    type="text"
                    value={certificateData.tableData.employerMonths}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "tableData",
                        "employerMonths",
                        e.target.value
                      )
                    }
                    placeholder={
                      defaultCertificateData.tableData.employerMonths
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    إجمالي أشهر المصروفة
                  </label>
                  <input
                    type="text"
                    value={certificateData.tableData.establishmentsMonths}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "tableData",
                        "establishmentsMonths",
                        e.target.value
                      )
                    }
                    placeholder={
                      defaultCertificateData.tableData.establishmentsMonths
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    إجمالي أشهر الاشتراك
                  </label>
                  <input
                    type="text"
                    value={certificateData.tableData.months}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "tableData",
                        "months",
                        e.target.value
                      )
                    }
                    placeholder={defaultCertificateData.tableData.months}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company information */}
              <h6 className="text-mColor mr-2 font-semibold text-lg">
                بيانات الشركة
              </h6>
              <div className="grid grid-cols-1 mr-4 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    value={certificateData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    placeholder={defaultCertificateData.companyName}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    رقم المنشأة
                  </label>
                  <input
                    type="text"
                    value={certificateData.establishmentNumber}
                    onChange={(e) =>
                      handleInputChange("establishmentNumber", e.target.value)
                    }
                    placeholder={defaultCertificateData.establishmentNumber}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    الأجر الخاضع للاشتراك
                  </label>
                  <input
                    type="text"
                    value={certificateData.subscriptionWage}
                    onChange={(e) =>
                      handleInputChange("subscriptionWage", e.target.value)
                    }
                    placeholder={defaultCertificateData.subscriptionWage}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    إجمالي الأجر
                  </label>
                  <input
                    type="text"
                    value={certificateData.totalWage}
                    onChange={(e) =>
                      handleInputChange("totalWage", e.target.value)
                    }
                    placeholder={defaultCertificateData.totalWage}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    تاريخ الالتحاق
                  </label>
                  <input
                    type="text"
                    value={certificateData.joiningDate}
                    onChange={(e) =>
                      handleInputChange("joiningDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.joiningDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    تاريخ الاستبعاد (اختياري)
                  </label>
                  <input
                    type="text"
                    value={certificateData.exclusionDate}
                    onChange={(e) =>
                      handleInputChange("exclusionDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.exclusionDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    تاريخ بداية الأجر
                  </label>
                  <input
                    type="text"
                    value={certificateData.wageStartDate}
                    onChange={(e) =>
                      handleInputChange("wageStartDate", e.target.value)
                    }
                    placeholder={defaultCertificateData.wageStartDate}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    الحالة الحالية
                  </label>
                  <input
                    type="text"
                    value={certificateData.currentStatus}
                    onChange={(e) =>
                      handleInputChange("currentStatus", e.target.value)
                    }
                    placeholder={defaultCertificateData.currentStatus}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            {/* Certificate Details */}
            <div className="mb-6"></div>

            {/* Page 2 Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-secColor ">
                بيانتات الصفحة الثانية
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-mColor mb-2">
                    العنوان الرئيسي
                  </label>
                  <input
                    type="text"
                    value={certificateData.page2Title}
                    onChange={(e) =>
                      handleInputChange("page2Title", e.target.value)
                    }
                    placeholder={defaultCertificateData.page2Title}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mColor mb-2">
                    محتوي الصفحة الثانية
                  </label>
                  <textarea
                    value={certificateData.page2Content}
                    onChange={(e) =>
                      handleInputChange("page2Content", e.target.value)
                    }
                    placeholder={defaultCertificateData.page2Content}
                    rows={2}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={newQrCode}
                disabled={
                  isGenerating || !certificateData.certificateNumber.trim()
                }
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                انشاء رمز QR جديد
              </button>
              <button
                onClick={downloadPdf}
                disabled={isGenerating || isUploading || !isQrCodeGenerated}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {isUploading ? "جاري التحميل..." : "تحميل ورفع PDF"}
              </button>
            </div>
          </div>
          {/* Preview Section */}
          <div className=" w-[80%]  mx-auto items-center flex flex-col gap-4">
            <CertificatePage1
              data={certificateData}
              qrCodeDataUrl={qrCodeDataUrl}
              ref={page1Ref}
            />
            <CertificatePage2
              data={certificateData}
              qrCodeDataUrl={qrCodeDataUrl}
              ref={page2Ref}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
