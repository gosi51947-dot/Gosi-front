import { CertificateData } from '@/types/certificate'
import Image from 'next/image'
import React from 'react'
import GosoLogoNew from "../../../../public/pdfimags/gosoLogoNew.svg"

export default function HeaderLogo({data,numberPage}: {data: CertificateData,numberPage: string}) {
  return (
    <div className="flex justify-between items-start ">
    {/* Right side - Arabic header */}
    <div className="text-right  flex-1 mt-7">
      <div className="  mb-4 space-y-1">
        <div>ﺍﻟﺼــــﻔــﺤــﺔ: {numberPage} من 2 </div>
        <div>ﺍﻟﺘﺎﺭﻳـــــــــﺦ: {data.headerDate}</div>
        <div>ﺍﻟﻤﻮﺍﻓـــــــﻖ: {data.correspondingDate}</div>
        <div>رمز الشهادة: {data.certificateNumber}</div>
      </div>
    </div>

    {/* Left side - Logo and English text */}
    <div className="flex flex-col items-end ">
      <div className="mb-3">
        <Image
          src={GosoLogoNew}
          alt="GOSI Logo"
          width={90}
          height={65}
          className="object-contain w-[170px]"
        />
      </div>
    
    </div>
  </div>
  )
}
