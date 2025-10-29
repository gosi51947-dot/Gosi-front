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
        className="w-[794px]  h-[1260px] font-tahoma text-mColor   bg-white  py-6 px-12  text-right relative"
      >
        {/* Header Section */}
        <div className="mb-10">
          <HeaderLogo data={data} numberPage="1" />
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-[900]  mb-8 text-mColor  ">
            {data.certificateTitle}
          </h1>
        </div>
        {/* page infromation */}
        {/* Personal Information Table */}
        <div className="mb-6 ">
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
        {/* <div className="mb-6  font-[600]">
          <div className="">
            <div className="flex justify-between bg-secColor  whitespace-nowrap">
              <div className="text-center pb-3 px-2 text-white   border-l border-gray-400">
                نظامي التقاعد
              </div>
              <div className="text-center pb-3 px-2 text-white   border-l border-gray-400">
                نظام التأمينات
              </div>
              <div className="text-center pb-3 px-2 text-white   border-l border-gray-400">
                إجمالي أشهر المصروفة
              </div>
              <div className="text-center pb-3 px-2 text-white  ">
                إجمالي أشهر الاشتراك
              </div>
            </div>

            <div className="flex  border-t border-gray-400">
              <div className="text-center grow pb-3 px-2  bg-[#EEEFEF]">
                {data.tableData.beneficiaryMonths}
              </div>
              <div className="text-center pb-3 grow px-2  bg-[#EEEFEF]">
                {data.tableData.employerMonths}
              </div>
              <div className="text-center pb-3 grow px-2  bg-[#EEEFEF]">
                {data.tableData.establishmentsMonths}
              </div>
              <div className="text-center pb-3 grow px-2 bg-[#EEEFEF]">
                {data.tableData.months}
              </div>
            </div>
          </div>
        </div> */}
        {/* update subscription table */}
        <div className="flex  mb-6 text-nowrap">
          {/* firs column */}
          <section className="grow">
            <div className="text-center font-semibold bg-secColor pb-3 px-2 text-white   border-l border-gray-400">
              نظامي التقاعد
            </div>
            <div className="text-center grow pb-3 px-2  bg-[#EEEFEF]">
              {data.tableData.beneficiaryMonths}
            </div>
          </section>
          {/* secound column */}
          <section>
            <div className="text-center  bg-secColor pb-3 px-2 text-white font-semibold   border-l border-gray-400">
              نظام التأمينات
            </div>
            <div className="text-center grow pb-3 px-2  bg-[#EEEFEF]">
              {data.tableData.employerMonths}
            </div>
          </section>
          {/* third column */}
          <section className="grow">
            <div className="text-center bg-secColor font-semibold pb-3 px-2 text-white   border-l border-gray-400">
              إجمالي أشهر المصروفة
            </div>
            <div className="text-center  grow pb-3 px-2  bg-[#EEEFEF]">
              {data.tableData.establishmentsMonths}
            </div>
          </section>
          {/* fourth column */}
          <section className="grow">
            <div className="text-center bg-secColor font-semibold pb-3 px-2 text-white   border-l border-gray-400">
              إجمالي أشهر الاشتراك
            </div>
            <div className="text-center grow pb-3 px-2  bg-[#EEEFEF]">
              {data.tableData.months}
            </div>
          </section>
        </div>

        {/* Company Information */}
        <div className="mb-6 text-lg whitespace-nowrap">
          <table className="w-full ">
            <thead className="w-full">
              <tr className="flex w-full">
                <td className="text-center  flex    ">
                  <span className=" bg-gray-100 pb-3  flex items-center justify-center h-full w-6">
                    {" "}
                    1
                  </span>
                  <p className="text-white text-center  bg-secColor pb-3 px-[7px] font-semibold flex items-center whitespace-nowrap">
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
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-1">
                  رقم المنشأة
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.establishmentNumber}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-1">
                  النظام
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.systemType}
                </td>
              </tr>
              {/* secound */}
              <tr className="grid grid-cols-4 ">
                <td className="bg-secColor text-[15px]  text-center text-white font-semibold pb-3 p-1">
                  ﺍﻷﺟﺮ ﺍﻟﺨﺎﺿﻊ ﻟﻼﺷﺘﺮﺍﻙ
                </td>
                <td className="bg-[#EEEFEF] flex justify-center items-center  p-2">
                  <span className="pb-4">{data.subscriptionWage}</span>
                  {data.subscriptionWage && (
                    <span>
                      {" "}
                      <Image
                        src={iconDollar.src}
                        alt="dollar"
                        width={25}
                        height={25}
                      />{" "}
                    </span>
                  )}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-1">
                  ﺇﺟﻤﺎﻟﻲ ﺍﻷﺟﺮ
                </td>
                <td className="bg-[#EEEFEF] text-center flex items-center justify-center  p-2">
                  <span className="pb-4"> {data.totalWage}</span>
                  {data.totalWage && (
                    <span>
                      {" "}
                      <Image
                        src={iconDollar.src}
                        alt="dollar"
                        width={25}
                        height={25}
                      />{" "}
                    </span>
                  )}
                </td>
              </tr>
              {/* third */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-1">
                  ﺗﺎﺭﻳﺦ ﺍﻻﻟﺘﺤﺎﻕ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.joiningDate}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-1">
                  ﺗﺎﺭﻳﺦ ﺍﻻﺳﺘﺒﻌﺎﺩ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.exclusionDate}
                </td>
              </tr>
              {/* fourth */}
              <tr className="grid grid-cols-4">
                <td className="bg-secColor text-center text-white font-semibold pb-3 p-1">
                  ﺗﺎﺭﻳﺦ ﺑﺪﺍﻳﺔ ﺍﻷﺟﺮ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.wageStartDate}
                </td>
                <td className="bg-secColor text-center font-semibold text-white pb-3 p-1">
                  ﺍﻟﺤﺎﻟﺔ
                </td>
                <td className="bg-[#EEEFEF] text-center pb-3 p-1">
                  {data.currentStatus}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Text */}
        <div className="mb-6  mt-40">
          <p className="  ">
            ﺗﺸﻬﺪ ﺍﻟﻤﺆﺳﺴﺔ ﺍﻟﻌﺎﻣﺔ ﻟﻠﺘﺄﻣﻴﻨﺎﺕ ﺍﻻﺟﺘﻤﺎﻋﻴﺔ ﺑﺄﻥ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﻤﻮﺿﺤﺔ ﺃﻋﻼﻩ
            ﺣﺴﺐ ﻣﺎ ﻫﻮ ﻣﺴﺠﻞ ﻓﻲ<br></br> ﻧﻈﺎﻣﻬﺎ ﻭﺑﻨﺎﺀ ﻋﻠﻰ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﺤﺎﻟﻴﺔ ﻭﻭﻓﻘﺎ
            ﻟﻠﻮﺿﻊ ﺍﻟﺤﺎﻟﻲ ﻣﺎﻟﻢ ﻳﻄﺮﺃ ﺃﻱ ﺗﻐﻴﻴﺮ ﻋﻠﻰ ﺣﺎﻟﺔ ﺑﻴﺎﻧﺎﺕ ﺻﺎﺣﺐ ﺍﻟﻮﺛﻴﻘﺔ ﻭﻗﺪ
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
