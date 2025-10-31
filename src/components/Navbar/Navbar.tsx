"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsUniversalAccessCircle } from "react-icons/bs";
import { LiaLanguageSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import aminImage from "../../../public/imgs/Ameen.2d0e32b9af484859.png";
import Image from "next/image";
import Poper from "../Popter/Poper";
import gosiLogo from "../../../public/imgs/GosoLogo.svg";
import MainNavbar from "./MainNavbar/MainNavbar";

export default function Navbar() {
  const [searchPopup, setSearchPopup] = useState(false);
  const [businessLoginPopup, setBusinessLoginPopup] = useState(false);
  const [individualLoginPopup, setIndividualLoginPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="absolute top-0  text-sm   left-0 right-0 z-50 whitespace-nowrap">
      {/* first part of navbar */}
      <div
        className={`px-4 bg-blueColor  flex gap-2 items-center justify-around md:justify-center  mx-auto  ${
          isScrolled ? "opacity-0 h-0 overflow-hidden p-0" : "opacity-100 p-[7.5px]"
        }`}
      >
        <p className="text-grayColor font-semibold">
          لتجربة أفضل .. حمل تطبيق gosi الجديد
        </p>
        <button className="bg-mColor whitespace-nowrap font-semibold  text-grayColor px-4 py-2 rounded-[0.5rem]">
          <a href="https://www.gosi.gov.sa/ar/MobileApp">حمله الان</a>
        </button>
      </div>
      {/* search and some points  */}
      <div
        className={`bg-[#333371]  ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="hidden lg:flex  py-2  container items-center justify-between lg:justify-end gap-40">
          {/* first icons */}
          <div className="flex gap-2 lg:hidden">
            <button
              onClick={() => setIndividualLoginPopup(true)}
              className="bg-secColor  cursor-pointer hover:bg-green-400    text-xs whitespace-nowrap  text-black px-4 py-2 rounded-[0.5rem]"
            >
              دخول اللأفراد
            </button>
            <button
              onClick={() => setBusinessLoginPopup(true)}
              className="bg-blueColor  text-xs whitespace-nowrap hover:bg-green-300 cursor-pointer  text-grayColor px-4 py-2 rounded-[0.5rem]"
            >
              دخول الاعمال
            </button>
          </div>
          {/* the seound part  */}
          <div className="flex gap-8 text-white">
            {/* search  */}
            <button
              onClick={() => setSearchPopup(true)}
              className="flex items-center gap-2 t hover:text-secColor cursor-pointer"
            >
              <CiSearch />
              بحث
            </button>
            {/* امكانية الوصول */}
            <button className="flex items-center gap-2 text-white hover:text-secColor cursor-pointer">
              <BsUniversalAccessCircle />
              امكانية الوصول
            </button>
            {/* language */}
            <button className="flex items-center gap-2 text-white hover:text-secColor cursor-pointer">
              <LiaLanguageSolid />
              <span className="text-sm capitalize">language</span>
            </button>
            {/* call us */}
            <a
              href="https://www.gosi.gov.sa/ar/ContactUs"
              className="flex items-center gap-2 text-white hover:text-secColor cursor-pointer"
            >
              <TfiHeadphoneAlt />
              <span className="text-sm capitalize">اتصل بنا</span>
            </a>
            {/* call amin  */}
            <a
              href="https://www.gosi.gov.sa/ar/MobileApp"
              className="overflow-hidden  bg-mColor hover:bg-[#BFEFBF] whitespace-nowrap flex items-center gap-2  text-grayColor py-1  px-2 rounded-full"
            >
              {/* amin image */}
              <div className="bg-white rounded-full w-[35px] h-[35px] flex items-center justify-center">
                <Image src={aminImage} alt="amin" width={30} height={30} />
              </div>
              <span>تحتاج مساعدة؟اسأل أمين</span>
            </a>
          </div>
        </div>
      </div>

      {/* Popups */}
      <Poper isOpen={searchPopup} onClose={() => setSearchPopup(false)}>
        <div className="text-center flex flex-col items-center gap-2">
          <p className="text-xl text-right  text-gray-800">بحت</p>
          <div className="mb-4 w-full ">
            <input
              type="text"
              placeholder="ابحث..."
              className=" px-4 py-3 w-full border border-gray-300 rounded-[2px]  focus:border-transparent outline-none text-right"
            />
          </div>
          <button className=" bg-secColor hover:bg-green-300  py-2 px-10 rounded-lg font-medium transition-colors">
            بحث
          </button>
        </div>
      </Poper>

      <Poper
        isOpen={businessLoginPopup}
        onClose={() => setBusinessLoginPopup(false)}
        title="الدخول لأصحاب الأعمال"
      >
        <div className="text-center">
          <div className="mb-4">
            <a
              href="https://www.gosi.gov.sa/ar/TaminatyBusinessLogin"
              className="flex cursor-pointer items-center bg-gray-50 rounded-lg px-2 py-4 gap-4 "
            >
              <div className="bg-green-100  p-3 rounded-full">
                <Image
                  src={gosiLogo}
                  alt="business login"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-gray-700">منصة الخدمات المقدمة لأصحاب العمل</p>
            </a>
          </div>
        </div>
      </Poper>

      <Poper
        isOpen={individualLoginPopup}
        onClose={() => setIndividualLoginPopup(false)}
        title="الدخول للأفراد"
      >
        <div className="text-center">
          <div className="mb-4">
            <a
              href="https://taminaty.gosi.gov.sa/"
              className="flex cursor-pointer items-center bg-gray-50 rounded-lg px-2 py-4 gap-4 "
            >
              <div className="bg-green-100  p-3 rounded-full">
                <Image
                  src={gosiLogo}
                  alt="business login"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-gray-700 whitespace-normal text-right">
                منصة الخدمات المقدمة لمستخدمي نظام التأمينات الإجتماعية.
              </p>
            </a>
          </div>
        </div>
      </Poper>

      {/* main navbar */}
      <MainNavbar
        setSearchPopup={setSearchPopup}
        setBusinessLoginPopup={setBusinessLoginPopup}
        setIndividualLoginPopup={setIndividualLoginPopup}
        isScrolled={isScrolled}
      />
    </nav>
  );
}
