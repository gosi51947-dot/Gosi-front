"use client";
import React, { useState, useEffect } from "react";
import gosoLogo from "../../../public/imgs/GosoLogo.svg";
import appStore from "../../../public/imgs/appStore.svg";
import googlePlay from "../../../public/imgs/googlePlay.svg";
import DegitalGovernment from "../../../public/imgs/DegitalGovernment.png";
import Image from "next/image";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronRight, FaLinkedin } from "react-icons/fa";
import { PiHandWaving } from "react-icons/pi";
import { BiArrowToTop } from "react-icons/bi";

// Footer columns data structure
const footerColumns = [
  {
    title: "عن المؤسسة",
    links: [
      { text: "عن المؤسسة", href: "https://www.gosi.gov.sa/ar/AboutGOSI" },
      { text: "الأخبار و الفعاليات", href: "https://www.gosi.gov.sa/ar/MediaCenter" },
      { text: "إتفاقية الاستخدام", href: "https://www.gosi.gov.sa/ar/Pages/TermsofUse" },
      { text: "الخصوصية وسرية البيانات", href: "https://www.gosi.gov.sa/ar/Pages/PrivacyPolicy" },
      { text: "سياسة حرية المعلومات", href: "https://www.gosi.gov.sa/ar/Pages/Info-Rights.aspx" },
      { text: "سياسة أمن المنصة", href: "https://www.gosi.gov.sa/ar/Pages/PlatformSecurityPolicy" },
      { text: "إتفاقية مستوى الخدمة", href: "https://www.gosi.gov.sa/ar/Pages/SLA.aspx" },
      { text: "الشروط والأحكام", href: "https://www.gosi.gov.sa/ar/Pages/TermsandConditions" },
      { text: "النشرة البريدية", href: "https://www.gosi.gov.sa/ar/AboutGOSI/Subscription" },
      { text: "سياسة التعامل مع الشكاوى ورضا العملاء", href: "https://www.gosi.gov.sa/ar/Pages/CHACSPolicy" },
    ],
  },
  {
    title: "الدعم والمساندة",
    links: [
      { text: "اتصل بنا", href: "https://www.gosi.gov.sa/ar/ContactUs" },
      { text: "الأسئلة الشائعة", href: "https://www.gosi.gov.sa/ContactUs/Faq/BySubject" },
      { text: "المشاركة الإلكترونية", href: "https://www.gosi.gov.sa/ar/CommunityParticipation" },
      { text: "بلاغ عن فساد", href: "https://www.gosi.gov.sa/ar/Pages/ReportCorruption" },
      { text: "خريطة الموقع", href: "https://www.gosi.gov.sa/ar/SiteMap" },
      { text: "التوظيف", href: "https://career.gosi.gov.sa/ar/sites/CX_4001" },
    ],
  },
  {
    title: "روابط مهمة",
    links: [
      { text: "وزارة المالية", href: "https://www.gosi.gov.sa/ar/SiteMap" },
      { text: "وزارة الموارد البشرية والتنمية الاجتماعية", href: "https://www.hrsd.gov.sa/" },
      { text: "المنصة الوطنية", href: "https://my.gov.sa/ar" },
      { text: "الجمعية الدولية للضمان الاجتماعي (ISSA)", href: "https://www.issa.int/" },
      { text: "منصة المشاركة الإلكترونية", href: "https://eparticipation.my.gov.sa/" },
      { text: "الإستراتيجية الوطنية للبيانات و الذكاء الاصطناعي", href: "https://ai.sa/index-ar.html" },
      { text: "منصة البيانات المفتوحة", href: "https://open.data.gov.sa/" },
    ],
    footer: {
      label: "تاريخ آخر تحديث للبيانات",
      date: "10-27-2025",
    },
  },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 100vh
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="">
      {/* main footer */}
      <section className="p-8 pb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* first column */}
        <div className="flex flex-col gap-6">
          {/* image of logo */}
          <Image src={gosoLogo} alt="goso logo" width={100} height={100} />
          <p className="text-xl">الرقم المجاني </p>
          {/* tel */}
          <a
            href="tel:199044"
            className="text-2xl text-secColor hover:text-mColor cursor-pointer"
          >
            199044
          </a>

          <p className="text-xl">قنوات التواصل الاجتماعي </p>
          <div className="connections flex flex-row gap-2">
            <a href="https://www.facebook.com/SaudiGOSI">
              <IoLogoFacebook className="text-2xl text-mColor hover:text-secColor cursor-pointer te" />
            </a>
            <a href="https://www.twitter.com/saudigosi">
              <BsTwitterX className="text-2xl text-mColor hover:text-secColor cursor-pointer te" />
            </a>
            <a href="https://www.linkedin.com/company/general-organization-for-social-insurance">
              <FaLinkedin className="text-2xl text-mColor hover:text-secColor cursor-pointer te" />
            </a>
            <a href="https://www.linkedin.com/company/general-organization-for-social-insurance">
              <IoLogoYoutube className="text-2xl text-mColor hover:text-secColor cursor-pointer te" />
            </a>
          </div>
          <p className="text-lg">أدوات سهولة الوصول</p>
          <a
            href="https://deaf.dga.gov.sa/"
            className="border-2 flex items-center gap-4  border-secColor self-start px-1 py-2 rounded-md"
          >
            <span className="hover:text-secColor cursor-pointer">
              الدعم الفني بلغة الأشارة
            </span>
            <PiHandWaving className="text-2xl text-secColor" />
          </a>
          <p className="text-lg">تطبيقات الجوال</p>

          <div className="flex flex-row gap-2">
            {/* app  */}
            <a
              href="https://www.gosi.gov.sa/ar/MobileApp"
              className="cursor-default"
            >
              <Image src={appStore} alt="app store" width={120} height={120} />
            </a>
            <a
              href="https://www.gosi.gov.sa/ar/MobileApp"
              className="cursor-default"
            >
              <Image
                src={googlePlay}
                alt="google play"
                width={120}
                height={120}
              />
            </a>
          </div>
          <a href="https://raqmi.dga.gov.sa/platforms/DigitalStamp/ShowCertificate/261">
            <Image
              src={DegitalGovernment}
              alt="digital government"
              width={240}
            />
          </a>
        </div>
        {/*  columns map  */}
        {footerColumns.map((column, index) => (
          <div key={index} className="space-y-6">
            {/* title of column */}
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-secColor font-bold" />
              <p className="text-lg text-mColor font-[500]">{column.title}</p>
            </div>
            {/* links */}
            <div className="flex flex-col gap-4 text-sm">
              {column.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href}>
                  <span className="hover:text-secColor hover:duration-[2s] after:transition-all duration-300 transition-all relative after:absolute after:top-[140%] after:left-[50%] after:translate-x-[-50%] group after:w-0 after:hover:w-full after:h-[2px] after:bg-secColor after:rounded-full">
                    {link.text}
                  </span>
                </a>
              ))}
            </div>
            {/* footer date section */}
            {column.footer && (
              <div className="mt-6 space-y-2">
                <p className="text-lg">{column.footer.label}</p>
                <p className=" text-secColor font-semibold">
                  {column.footer.date}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
      {/* bottom footer */}
      <p className="text-grayColor text-center lg:text-right text-sm bg-mColor p-3 ">
        جميع الحقوق محفوظة للمؤسسة العامة للتأمينات الإجتماعية © 2025{" "}
      </p>

      {/* go to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed hover:bg-secColor bottom-16 md:bottom-12 right-4 bg-grayColor border border-secColor p-3 rounded-full transition-all duration-300 ease-in-out hover:scale-110 shadow-lg"
          aria-label="Scroll to top"
        >
          <BiArrowToTop className="text-xl font-thin" />
        </button>
      )}
    </footer>
  );
}
