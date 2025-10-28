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
        className="w-[794px] relative h-[1240px] bg-white p-8 font-sans text-right "
        style={{
          fontFamily: "Arial, sans-serif",
          direction: "rtl",
          fontSize: "14px",
          lineHeight: "1.4",
        }}
      >
        {/* Header Section */}
        {/* Header Section */}
        <HeaderLogo data={data} numberPage="2" />

        {/* Main Content */}
        <div className="ml-14 mt-3">
          <p className="text-[22px] font-[900] leading-5">{data.page2Title}</p>
          <p className=" text-xl mt-6 ">{data.page2Content}</p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-1 right-8">
          <FooterQrCode qrCodeDataUrl={qrCodeDataUrl} />
        </div>
      </div>
    );
  }
);

CertificatePage2.displayName = "CertificatePage2";

export default CertificatePage2;
