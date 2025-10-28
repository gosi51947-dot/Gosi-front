"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoCheckmark } from "react-icons/io5";

import Image from "next/image";
import AminImage from "../../../../../public/imgs/Ameen.2d0e32b9af484859.png";

function CertificateContent() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const certificateNumber = searchParams.get("CertificateNumber");

  // ✅ Fetch certificate data
  // const fetchCertificate = async () => {
  //   if (!certificateNumber) return;
  //   try {
  //     setLoading(true);
  //     const res = await fetch(
  //       `http://localhost:1234/clients/verify/${certificateNumber}`
  //     );
  //     const data = await res.json();
  //     if (data?.status === "success" && data?.data?.client?.pdfUrl) {
  //       setPdfUrl(data.data.client.pdfUrl);
  //     } else {
  //       alert("حدث خطأ أثناء تحميل الشهادة أو الشهادة غير صالحة.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("فشل الاتصال بالسيرفر.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ✅ Handle download click
  const handleDownload = async () => {
    try {
      setLoading(true);

      let finalPdfUrl = pdfUrl;

      // ✅ لو لسه مفيش pdfUrl، هنعمل Fetch الأول
      if (!finalPdfUrl && certificateNumber) {
        const res = await fetch(
          `https://gosi-backend.vercel.app/clients/verify/${certificateNumber}`
        );
        const data = await res.json();

        if (data?.status === "success" && data?.data?.client?.pdfUrl) {
          finalPdfUrl = data.data.client.pdfUrl;
          setPdfUrl(finalPdfUrl); // حفظه في الحالة عشان ما نعملش Fetch تاني
        } else {
          alert("حدث خطأ أثناء تحميل الشهادة أو الشهادة غير صالحة.");
          return;
        }
      }

      // ✅ دلوقتي نبدأ التحميل مباشرة
      const response = await fetch(finalPdfUrl || "");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate_${certificateNumber}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("حدث خطأ أثناء تحميل الملف.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="">
        <p className="bg-[#F3F4F5] h-[71px] md:h-[275px] lg:h-[90px] flex items-end">
          <span className="text-secColor hidden md:block pb-6 p-4 text-sm lg:py-10 lg:pr-8">
            الرئيسية
          </span>
        </p>

        {/* ✅ Main card */}
        <div className="mt-20">
          <div className="container">
            <div className="flex flex-col text-sm bg-[#F3F4F5] md:flex-row md:mx-20 rounded-md overflow-hidden">
              <div className="bg-[#00BF00] flex items-center p-2 justify-center">
                <span className="rounded-full bg-secColor border border-white p-1">
                  <IoCheckmark className="font-bold text-xl text-white" />
                </span>
              </div>

              <div className="space-y-2 p-4">
                <p>تم التحقق من الشهادة وهي صالحة وسارية المفعول</p>
                <button
                  onClick={handleDownload}
                  disabled={loading}
                  className="bg-secColor mr-1 transition-all duration-300 hover:bg-secColor/50 px-4 py-2 rounded-[16px] disabled:opacity-50"
                >
                  تنزيل نسخة من الشهادة
                </button>
              </div>
            </div>

            <div className="mt-10 w-full flex justify-center">
              <button className="text-sm hover:bg-secColor transition-[background-color] duration-500 bg-secColor/60 text-gray-50 rounded-md px-[6px] py-2">
                <a href="https://www.gosi.gov.sa/ar">العودة للصفحة الرئيسية</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* باقي كود الـ feedback كما هو */}
      {/* ... */}
      <div className="fixed group flex cursor-pointer bg-secColor p-2 rounded-full items-center gap-2 bottom-4 left-4">
        <div className="flex items-center justify-center rounded-full">
          <Image
            src={AminImage}
            alt="amin"
            width={60}
            height={60}
            className="!w-[50px]"
          />
          <p className="w-0 overflow-hidden group-hover:w-auto transition-all duration-1000">
            {" "}
            اسأل امين
          </p>
        </div>

        <span className="text-white group-hover:hidden bg-mColor whitespace-nowrap px-4 z-50 absolute -top-[15px] left-10 text-sm rounded-tl-[15px] rounded-br-[15px] p-1">
          اسأل امين
        </span>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center p-10"></p>}>
      <CertificateContent />
    </Suspense>
  );
}
