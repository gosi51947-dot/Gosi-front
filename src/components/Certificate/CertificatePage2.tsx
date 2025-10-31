import React, { forwardRef } from "react";
import { CertificateData } from "@/types/certificate";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import FooterQrCode from "./FooterQrCode/FooterQrCode";

interface CertificatePage2Props {
  data: CertificateData;
  qrCodeDataUrl: string;
}

const CertificatePage2 = forwardRef<HTMLDivElement, CertificatePage2Props>(
  ({ data, qrCodeDataUrl }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[794px] relative h-[1123px] font-tahoma  bg-white py-8 px-12  text-right "
      >
        {/* Header Section */}
        {/* Header Section */}
        <HeaderLogo data={data} numberPage="2" />

        {/* Main Content */}
        <div className="ml-14 mt-3">
          <p className="font-[900] whitespace-nowrap">
          ﻭﻻ ﺗﺨﻞ ﻫﺬﻩ ﺍﻟﺸﻬﺎﺩﺓ ﺑﺤﻖ ﺍﻟﻤﺆﺳﺴﺔ ﻓﻲ ﺇ ﺟﺮﺍﺀ ﺃﻱ ﺗﻌﺪﻳﻼﺕ ﻋﻠﻰ ﺍﻟﺒﻴﺎﻧﺎﺕ ﺍﻟﻮﺍﺭﺩﺓ ﻓﻴﻬﺎ ﻭﻓﻘﺎ <br/>ﻟﻤﺎ ﻳﺘﺒﻴﻦ ﻟﻬﺎ ﻣﻦ ﻭﻗﺎﺋﻊ.
          </p>
          <p className="  mt-4 ">{data.page2Content}</p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6  ">
          <FooterQrCode qrCodeDataUrl={qrCodeDataUrl} cerTwo={true} />
        </div>
      </div>
    );
  }
);

CertificatePage2.displayName = "CertificatePage2";

export default CertificatePage2;
