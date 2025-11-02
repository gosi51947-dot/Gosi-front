import React, { useState } from "react";
import gosiLogo from "../../../../public/imgs/loader2.png";
import GosoMailColor from "../../../../public/imgs/GosoLogo.svg";
import LogoGosoTwo from "../../../../public/imgs/loader2.png";

import Image from "next/image";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsUniversalAccessCircle } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { HiOutlineBars4 } from "react-icons/hi2";

// TypeScript interfaces
interface DropdownItem {
  id: string;
  title: string;
  children?: { title: string; href?: string; isSelected?: boolean }[];
  isLanguageSelector?: boolean;
}

// Dropdown data
const dropdownData: DropdownItem[] = [
  {
    id: "language",
    title: "Language",
    isLanguageSelector: true,
    children: [
      { title: "عربي", isSelected: true },
      { title: "English", isSelected: false },
    ],
  },
  {
    id: "about",
    title: "عن المؤسسة",
    children: [
      { title: "نبذة عامة", href: "https://www.gosi.gov.sa/AboutGOSI/Overview" },
      { title: "تاريخ المؤسسة", href: "https://www.gosi.gov.sa/AboutGOSI/GosiHistory" },
      { title: "مجلس الإدارة", href: "https://www.gosi.gov.sa/AboutGOSI/BoardOfDirectors" },
      { title: "الهيكل التنظيمي", href: "https://www.gosi.gov.sa/AboutGOSI/OrganizationalChart" },
      { title: "الإدارة التنفيذية", href: "https://www.gosi.gov.sa/AboutGOSI/ExecutiveManagement" },
      { title: "المشاركة الإلكترونية", href: "https://www.gosi.gov.sa/CommunityParticipation" },
      { title: "التوظيف", href: "https://career.gosi.gov.sa/ar/sites/CX_4001" },
      { title: "اتصل بنا", href: "https://www.gosi.gov.sa/ContactUs" },
      { title: "البرامج والمبادرات", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/initiatives.aspx" },
      { title: "الأخبار والأحداث", href: "https://www.gosi.gov.sa/MediaCenter" },
      { title: "السياسات والاستراتيجيات", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/Policiesandstrategies.aspx" },
      { title: "الميزانية والمصروفات", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/budget.aspx" },
      { title: "المشتريات وبوابة الموردين", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/purchases.aspx" },
      { title: "شركاء المؤسسة", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/partners.aspx" },
      { title: "التنمية المستدامة", href: "https://www.gosi.gov.sa/AboutGOSI/Pages/SustainableDevelopment.aspx" },
      { title: "رحلة العميل", href: "https://www.gosi.gov.sa/AboutGOSI/UserJourney" },
    ],
  },
  {
    id: "systems",
    title: "الأنظمة واللوائح",
    children: [
      { title: "نظام التأمينات الاجتماعية 1421 هـ", href: "https://www.gosi.gov.sa/SystemsAndRegulations/SocialInsurance" },
      { title: "نظام التأمينات الاجتماعية 1445 هـ", href: "https://www.gosi.gov.sa/SystemsAndRegulations/newSystem" },
      { title: "نظام التقاعد المدني", href: "https://www.gosi.gov.sa/SystemsAndRegulations/Civil" },
      { title: "نظام التقاعد العسكري", href: "https://www.gosi.gov.sa/SystemsAndRegulations/Military" },
      { title: "نظام تبادل المنافع", href: "https://www.gosi.gov.sa/SystemsAndRegulations/BenefitExchange" },
      { title: "نظام التأمين ضد التعطل عن العمل", href: "https://www.gosi.gov.sa/SystemsAndRegulations/Saned" },
      { title: "النظام الموحد لمد الحماية التأمينية", href: "https://www.gosi.gov.sa/SystemsAndRegulations/InsuranceProtection" },
      { title: "المستندات المطلوبة", href: "https://www.gosi.gov.sa/SystemsAndRegulations/RequiredDocuments" },
      { title: "المصطلحات", href: "https://www.gosi.gov.sa/SystemsAndRegulations/Terminologies" },
      { title: "كتيبات الأنظمة", href: "https://www.gosi.gov.sa/SystemsAndRegulations/Books" },
    ],
  },
  {
    id: "services",
    title: "الخدمات",
    children: [
      { title: "خدمات الأفراد", href: "https://www.gosi.gov.sa/IndividualsServices" },
      { title: "خدمات الأعمال", href: "https://www.gosi.gov.sa/BusinessServices" },
      { title: "التحقق السريع", href: "https://www.gosi.gov.sa/Services/QuickVerification" },
    ],
  },
  {
    id: "media",
    title: "المركز الإعلامي",
    children: [
      { title: "الأخبار", href: "https://www.gosi.gov.sa/MediaCenter/News" },
      { title: "الفعاليات والأنشطة", href: "https://www.gosi.gov.sa/MediaCenter/Events" },
      { title: "المبادرات والشراكات", href: "https://www.gosi.gov.sa/MediaCenter/InitiativesAndPartnerships" },
      { title: "نشرات إعلامية", href: "https://www.gosi.gov.sa/MediaCenter/MediaReleases" },
      { title: "حملتنا الإعلامية", href: "https://www.gosi.gov.sa/MediaCenter/Campaigns" },
      { title: "الهوية البصرية", href: "https://www.gosi.gov.sa/MediaCenter/GosiIdentity" },
      { title: "المؤتمرات والمعارض", href: "https://www.gosi.gov.sa/ar/MediaCenter/Conferences" },
    ],
  },
  {
    id: "statistics",
    title: "إحصاءات وبيانات",
    children: [
      { title: "البيانات المفتوحة", href: "https://www.gosi.gov.sa/StatisticsAndData/OpenedData/policy" },
      { title: "التقرير الإحصائي السنوي", href: "https://www.gosi.gov.sa/StatisticsAndData/AnnualReport" },
      { title: "النشرات الإحصائية", href: "https://www.gosi.gov.sa/StatisticsAndData/StatisticLetters" },
    ],
  },
  {
    id: "appreciation",
    title: "تقدير",
    children: [
      { title: "نبذة عامة", href: "https://www.gosi.gov.sa/Taqdeer/AboutUs" },
      { title: "المسابقات", href: "https://www.gosi.gov.sa/Taqdeer/Paths" },
    ],
  },
];

// Reusable DropdownItem Component
interface DropdownItemProps {
  item: DropdownItem;
  isOpen: boolean;
  onToggle: () => void;
}
// DropdownItemComponent
const DropdownItemComponent: React.FC<DropdownItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex px-2 items-center justify-between py-3 text-right cursor-default  transition-colors"
      >
        <span className="text-lg">{item.title}</span>
        <IoChevronDownOutline className="text-xl" />
      </button>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div className="bg-gray-100 space-y-2">
          {item.children && item.children.length > 0 ? (
            item.isLanguageSelector ? (
              // Language selector with checkmark
              item.children.map((child, index) => (
                <button
                  key={index}
                  className={`flex items-center w-full px-4 py-2 hover:bg-gray-200  ${
                    child.isSelected ? "bg-green-100" : ""
                  }`}
                >
                  {child.isSelected && (
                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center ml-2">
                      <IoCheckmark className="text-white text-sm" />
                    </span>
                  )}
                  <span className={child.isSelected ? "" : "mr-7"}>
                    {child.title}
                  </span>
                </button>
              ))
            ) : (
              // Regular menu items
              item.children.map((child, index) => (
                <a
                  key={index}
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-200 transition-colors"
                >
                  {child.title}
                </a>
              ))
            )
          ) : (
            <div className="text-gray-600">محتوى فرعي قادم...</div>
          )}
        </div>
      </div>
    </div>
  );
};

// MainNavbar component
export default function MainNavbar({
  setSearchPopup,
  setBusinessLoginPopup,
  setIndividualLoginPopup,
  isScrolled,
}: {
  setSearchPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setBusinessLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIndividualLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
}) {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId],
    }));
  };
  return (
    <>
      {/* small devices navbar */}
      <section className=" lg:hidden absolute top-0 left-0 right-0 mt-[59px] flex items-center px-4 py-2 justify-between  bg-mColor">
        {/* lgoo */}
        <Image src={gosiLogo} alt="gosi logo" width={80} />

        {/* menu */}
        <div className="flex items-center gap-4">
          {/* login button */}
          <button className="bg-secColor text-sm  px-2 py-1 rounded-sm">
            تسجيل الدخول
          </button>
          {/* menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-4xl"
          >
            <HiOutlineBars4 />
          </button>
        </div>
      </section>

      {/* large devices navbar section */}
      <section
        className={`hidden lg:block border-b border-gray-200  ${
          isScrolled ? "bg-mColor  mx-[-1rem] " : "bg-white"
        }`}
      >
        <div className="  container">
          <div className={`flex   pt-2 justify-between ${isScrolled ? "items-start" : "items-center"}`}>
            {/* Right side - ( logo + Menu Items) */}
            <div className={`${isScrolled ? "!items-start" : "items-center"} flex gap-4`}>
              <a
                href="https://www.gosi.gov.sa/ar"
                className={`self-end mb-1`}
              >
                <Image
                  src={isScrolled ? LogoGosoTwo : GosoMailColor}
                  alt="GOSI Logo"
                  width={80}
                />
              </a>
              <nav className="flex items-center  gap-[2px]">
                <a
                  href="https://www.gosi.gov.sa/ar"
                  className={`hover:text-secColor transition-colors ${
                    isScrolled ? "text-white" : ""
                  }`}
                >
                  الرئيسية
                </a>
                {dropdownData
                  .filter((item) => item.id !== "language")
                  .map((item) => (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => toggleDropdown(item.id)}
                      onMouseLeave={() => toggleDropdown(item.id)}
                    >
                      <button
                        className={`flex items-center gap-1 px-1  font-bold hover:text-secColor rounded-md transition-all ${
                          isScrolled ? "text-white " : "text-mColor py-8"
                        }`}
                      >
                        <span className="text-sm font-medium whitespace-nowrap">
                          {item.title}
                        </span>
                        <IoChevronDownOutline className="text-sm" />
                      </button>

                      {/* Dropdown Panel */}
                      {openDropdowns[item.id] &&
                        item.children &&
                        item.children.length > 0 && (
                          <div className="absolute top-[80%] right-0 mt-2 z-50">
                            {/* Triangle pointer */}
                            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

                            {/* Dropdown content */}
                            <div className="bg-white shadow-xl border border-gray-200 rounded-lg py-3 px-4 relative w-max max-w-4xl">
                              <div
                                className="grid gap-x-8 gap-y-1"
                                style={{
                                  gridTemplateColumns: `repeat(${
                                    item.id === "systems" &&
                                    item.children.length >= 5
                                      ? Math.ceil(item.children.length / 5)
                                      : Math.ceil(item.children.length / 4)
                                  }, minmax(180px, 1fr))`,
                                  gridTemplateRows: `repeat(${
                                    item.id === "systems" &&
                                    item.children.length >= 5
                                      ? 5
                                      : 4
                                  }, auto)`,
                                  gridAutoFlow: "column",
                                }}
                              >
                                {item.children.map((child, index) => (
                                  <a
                                    key={index}
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2.5 text-sm text-gray-800 hover:text-secColor hover:bg-gray-50 rounded transition-colors text-right whitespace-nowrap"
                                  >
                                    {child.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
              </nav>
            </div>

            {/* Left side - Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIndividualLoginPopup(true)}
                className="bg-secColor hover:bg-green-300  px-5 py-2 text-sm rounded-md hover:opacity-90 transition-all  whitespace-nowrap"
              >
                دخول الأفراد
              </button>
              <button
                onClick={() => setBusinessLoginPopup(true)}
                className="bg-blue-600 hover:bg-green-300 duration-300  text-white px-5 py-2 text-sm rounded-md hover:opacity-90 transition-all whitespace-nowrap"
              >
                دخول الأعمال
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* hight Navbar section fixed in small devices and take all height and width of screen  */}
      <div
        className={`fixed lg:hidden inset-0 scroll-auto overflow-y-scroll  text-sm bg-grayColor    xl ${
          isOpen ? "left-0 md:left-[60%]" : "left-[100%]"
        } transition-all duration-100`}
      >
        {/* main */}
        <div className="text-white space-y-6  pr-4 pl-2  bg-mColor">
          {/* first column */}
          <p className="flex items-center ">
            <span className="grow text-center"> التأمينات الاجتماعية</span>
            {/* colse button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-5xl lg-2xl"
            >
              <IoCloseOutline />
            </button>
          </p>
          {/* second column */}
          <div className="flex gap-6 justify-center ">
            {/* home icon */}
            <a
              href="https://www.gosi.gov.sa/"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <IoHomeOutline className="text-3xl" />
              <span>الرئيسية</span>
            </a>
            <a
              href="https://www.gosi.gov.sa/Login"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <LuCircleUser className="text-3xl" />
              <span>تسجيل الدخول</span>
            </a>
          </div>
          {/* third column */}
          <div className="flex gap-6 justify-around">
            {/* search icon */}
            <button
              onClick={() => setSearchPopup(true)}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <IoSearchOutline className="text-3xl" />
              <span>بحت</span>
            </button>
            {/* call us icon */}
            <a
              href="https://www.gosi.gov.sa/ar/ContactUs"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <TfiHeadphoneAlt className="text-2xl" />
              <span>اتصل بنا</span>
            </a>
            <button className="flex flex-col items-center gap-2 cursor-pointer">
              <BsUniversalAccessCircle className="text-2xl" />
              <span>امكانية الوصول</span>
            </button>
          </div>
          {/* four column - Language Selector */}
          <div>
            <button
              onClick={() => toggleDropdown("language")}
              className="w-full flex px-2 items-center justify-between py-3 text-right cursor-pointer transition-colors"
            >
              <span className="capitalize">Language</span>
              <IoChevronDownOutline className="text-xl" />
            </button>
            <div
              className={`${
                openDropdowns.language ? "block" : "hidden"
              } mx-[-1rem]`}
            >
              <div className="bg-gray-100 ">
                <button className="flex items-center justify-between  w-full px-4 py-3  bg-secColor bg-opacity-30">
                  <span className="text-black">عربي</span>
                  <span className="w-4 h-4 rounded-full bg-secColor  flex items-center justify-center ml-2">
                    <IoCheckmark className=" text-xs" />
                  </span>
                </button>
                <button className="flex items-center py-3 w-full px-4  hover:bg-gray-200 transition-colors">
                  <span className=" text-black">English</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Items */}
        <div className="text-gray-800   py-2">
          {dropdownData
            .filter((item) => item.id !== "language")
            .map((item) => (
              <DropdownItemComponent
                key={item.id}
                item={item}
                isOpen={openDropdowns[item.id] || false}
                onToggle={() => toggleDropdown(item.id)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
