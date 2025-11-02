"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoCheckmark } from "react-icons/io5";
import OpinionImage from "../../../../../public/imgs/opinion.jpg";
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
        <p className="bg-[#F3F4F5] h-[71px] sm:h-[275px] md:h-[90px] flex items-end">
          <span className="text-secColor font-bold hidden sm:block pb-6 p-4 text-sm lg:py-10 lg:pr-8">
            الرئيسية
          </span>
        </p>

        {/* ✅ Main card */}
        <div className="mt-20">
          <div className="px-10 ">
            <div className="flex flex-col text-sm bg-[#F3F4F5] sm:flex-row md:mx-20 rounded-md overflow-hidden">
              <div className="bg-[#00BF00] flex items-center p-2 md:p-3 justify-center">
                <span className="rounded-full bg-secColor border border-white p-1">
                  <IoCheckmark className="font-bold text-xl text-white" />
                </span>
              </div>

              <div className=" p-4 pt-1 sm:pt-4 grow">
                <p className="pb-2 border-b text-[16.5px] text-[#334157] border-b-[#e0e0e08a]">تم التحقق من الشهادة وهي صالحة وسارية المفعول</p>
                <button
                  onClick={handleDownload}
                  disabled={loading}
                  className="bg-secColor mt-2 text-[15px] mr-1 transition-all duration-300 hover:bg-secColor/50 px-4 py-3 rounded-[16px] disabled:opacity-50"
                >
                  تنزيل نسخة من الشهادة
                </button>
              </div>
            </div>

            <div className="mt-10 w-full flex justify-center">
              <button className="text-sm hover:bg-secColor transition-[background-color] duration-500 bg-secColor/60 text-gray-50 rounded-md  py-[10px]">
                <a href="https://www.gosi.gov.sa/ar" className="px-[12px] ">العودة للصفحة الرئيسية</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* باقي كود الـ feedback كما هو */}
      {/* opinion popup */}
      <div className="fixed top-[50%] cursor-pointer  left-[0px]">
        <Image src={OpinionImage} className="rounded-r-lg h-[87px]" alt="opinion" width={38} height={38.3} />
      </div>
      
      {/* ... */}
      <section className="fixed bottom-4 left-4">

      <div className=" group flex cursor-pointer relative overflow-hidden w-[60px] h-[60px] bg-secColor p-2 rounded-full items-center gap-2 ">
        <div className="flex items-center justify-center rounded-full">
          <Image
            src={AminImage}
            alt="amin"
            width={45}
            
            className="!w-[65px] mt-1 absolute left-0 "
          />
        
        </div>

       
      </div>
      <span className="text-white group-hover:hidden bg-mColor whitespace-nowrap px-4 z-50 absolute -top-[15px] left-10 text-sm rounded-tl-[15px] rounded-br-[15px] p-1">
          اسأل امين
        </span>
      </section>
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
