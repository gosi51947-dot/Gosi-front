import React, { forwardRef } from "react";
import { CertificateData } from "@/types/certificate";
import FooterQrCode from "./FooterQrCode/FooterQrCode";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import iconDollar from "../../../public/pdfimags/ioconDollar.svg";
import Image from "next/image";
interface CertificatePage1Props {
  data: CertificateData;
  qrCodeDataUrl: string;
}

const CertificatePage1 = forwardRef<HTMLDivElement, CertificatePage1Props>(
  ({ data, qrCodeDataUrl }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[794px] min-h-[1240px]   text-[12px] bg-white p-8 py-2  font-sans text-right relative"
        style={{
          fontFamily: "Arial, sans-serif",
          direction: "rtl",
          fontSize: "14px",
          lineHeight: "1.4",
        }}
      >
        {/* Header Section */}
        <div className="mb-10">
          <HeaderLogo data={data} numberPage="1" />
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-[900]  mb-2 text-mColor  ">
            {data.certificateTitle}
          </h1>
        </div>
        {/* page infromation */}
        {/* Personal Information Table */}
        <div className="mb-6 text-lg">
          <table className="w-full ">
            <tbody className="flex flex-col gap-1">
              <tr className="grid grid-cols-6">
                <td className=" px-3 py-1  col-span-2 ">ﺍﻻﺳﻢ</td>
                <td className=" px-3 pb-3  bg-[#EEEFEF] col-span-2">
                  {data.name}
                </td>
                <td className=" px-3 py-1  col-span-1">تاريخ الميلاد</td>
                <td className=" px-3 pb-3  bg-[#EEEFEF] col-span-1  flex items-center ">
                  {data.birthDate}
                </td>
              </tr>
              <tr className="grid grid-cols-6">
                <td className=" px-3 py-1  col-span-2">
                  رقم الهوية الوطنية / الإقامة
                </td>
                <td className=" px-3 pb-3 bg-[#EEEFEF] col-span-2">
                  {data.nationalId}
                </td>
                <td className=" px-3 py-1  col-span-1">الجنسية</td>
                <td className=" px-3 pb-3 bg-[#EEEFEF] col-span-1">
                  {data.nationality}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subscription Table */}
        <div className="mb-6 text-lg">
          <div className="">
            <div className="grid grid-cols-4 whitespace-nowrap">
              <div
                className="text-center pb-3 px-2 text-white   border-l border-gray-400"
                style={{ backgroundColor: "#00BF00" }}
              >
                نظامي التقاعد
              </div>
              <div
                className="text-center pb-3 px-2 text-white   border-l border-gray-400"
                style={{ backgroundColor: "#00BF00" }}
              >
                نظام التأمينات
              </div>
              <div
                className="text-center pb-3 px-2 text-white   border-l border-gray-400"
                style={{ backgroundColor: "#00BF00" }}
              >
                إجمالي أشهر المصروفة
              </div>
              <div
                className="text-center pb-3 px-2 text-white  "
                style={{ backgroundColor: "#00BF00" }}
              >
                إجمالي أشهر الاشتراك
              </div>
            </div>

            <div className="grid grid-cols-4 border-t border-gray-400">
              <div className="text-center pb-3 px-2  bg-[#EEEFEF]">
                {data.tableData.beneficiaryMonths}
              </div>
              <div className="text-center pb-3 px-2  bg-[#EEEFEF]">
                {data.tableData.employerMonths}
              </div>
              <div className="text-center pb-3 px-2  bg-[#EEEFEF]">
                {data.tableData.establishmentsMonths}
              </div>
              <div className="text-center pb-3 px-2 bg-[#EEEFEF]">
                {data.tableData.months}
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="mb-6 text-lg">
          <table className="w-full ">
            <thead className="w-full">
              <tr className="flex w-full">
                <td className="text-center  flex    ">
                  <span className=" bg-gray-100 pb-3  flex items-center justify-center h-full w-8">
                    {" "}
                    1
                  </span>
                  <p className="text-white text-center  bg-secColor pb-3 px-[24.5px] font-semibold flex items-center whitespace-nowrap">
                    {" "}
                    الجهة / المنشأة
                  </p>
                </td>
                <td className="text-center grow   mb-[0.5px] pb-3   bg-gray-100  flex items-center justify-center  ">
                  {data.companyName}
                </td>
              </tr>
            </thead>
            <tbody className="w-full space-y-[1px]">
              {/* first */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-2">
                  رقم المنشأة
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  {data.establishmentNumber}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-2">
                  النظام
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  نظام التأمينات
                </td>
              </tr>
              {/* secound */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-2">
                  ﺍﻷﺟﺮ ﺍﻟﺨﺎﺿﻊ ﻟﻼﺷﺘﺮﺍﻙ
                </td>
                <td className="bg-[#EEEFEF] text-center flex items-center justify-center  p-2">
                  <span className="pb-4">{data.subscriptionWage}</span>
                  { data.subscriptionWage && <span> <Image src={iconDollar.src} alt="dollar" width={25} height={25} /> </span>}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-2">
                  ﺇﺟﻤﺎﻟﻲ ﺍﻷﺟﺮ
                </td>
                <td className="bg-[#EEEFEF] text-center flex items-center justify-center  p-2">
                   <span className="pb-4">  {data.totalWage}</span>
                  { data.totalWage && <span> <Image src={iconDollar.src} alt="dollar" width={25} height={25} /> </span>}
                  
                </td>
              </tr>
              {/* third */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-2">
                  ﺗﺎﺭﻳﺦ ﺍﻻﻟﺘﺤﺎﻕ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  {data.joiningDate}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-2">
                  ﺗﺎﺭﻳﺦ ﺍﻻﺳﺘﺒﻌﺎﺩ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  {data.exclusionDate}
                </td>
              </tr>
              {/* fourth */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-2">
                  ﺗﺎﺭﻳﺦ ﺑﺪﺍﻳﺔ ﺍﻷﺟﺮ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  {data.wageStartDate}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-2">
                  ﺍﻟﺤﺎﻟﺔ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-2">
                  {data.currentStatus}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* mark */}
        <p className="mr-auto mt-[115.2px]   w-4 h-[3px] bg-black"> </p>
        {/* Footer Text */}
        <div className="mb-6  font-[00] ml-8 ">
          <p className="  text-[20px]  ">
            ﺗﺸﻬﺪ ﺍﻟﻤﺆﺳﺴﺔ ﺍﻟﻌﺎﻣﺔ ﻟﻠﺘﺄﻣﻴﻨﺎﺕ ﺍﻻﺟﺘﻤﺎﻋﻴﺔ ﺑﺄﻥ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﻤﻮﺿﺤﺔ ﺃﻋﻼﻩ
            ﺣﺴﺐ ﻣﺎ ﻫﻮ ﻣﺴﺠﻞ ﻓﻲ ﻧﻈﺎﻣﻬﺎ ﻭﺑﻨﺎﺀ ﻋﻠﻰ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﺤﺎﻟﻴﺔ ﻭﻭﻓﻘﺎ ﻟﻠﻮﺿﻊ
            ﺍﻟﺤﺎﻟﻲ ﻣﺎﻟﻢ ﻳﻄﺮﺃ ﺃﻱ ﺗﻐﻴﻴﺮ ﻋﻠﻰ ﺣﺎﻟﺔ ﺑﻴﺎﻧﺎﺕ <br></br>ﺻﺎﺣﺐ ﺍﻟﻮﺛﻴﻘﺔ ﻭﻗﺪ
            ﺃﺻﺪﺭﺕ ﺑﻨﺎﺀ ﻋﻠﻰ ﻃﺎﻟﺐ ﺍﻟﻮﺛﻴﻘﺔ.
          </p>
        </div>

        {/* Footer with QR Code */}
        <FooterQrCode qrCodeDataUrl={qrCodeDataUrl} />
      </div>
    );
  }
);

CertificatePage1.displayName = "CertificatePage1";

export default CertificatePage1;
