import Image from "next/image";
import React from "react";
import IconGosoCode from "./iconGosoCode";
export default function FooterQrCode({
  qrCodeDataUrl,
  cerTwo,
}: {
  qrCodeDataUrl: string;
  cerTwo?: boolean;
}) {
  return (
    <section className="flex flex-col ml-4 gap-3 text-[12px]">
      {/* pupblic word */}
      <p className="text-center  text-secColor "> Public ﻋﺎﻡ</p>
      {/* first column  qr code column */}
      <div className="flex   gap-2 justify-between items-end">
        {/* paragraph */}
        <p className="opacity-50 text-[13px] whitespace-nowrap  text-black   font-[500]   ">
          ﺗﺤﻘﻖ ﻣﻦ ﺻﺤﺔ ﻭﺻﻼﺣﻴﺔ ﺍﻟﺸﻬﺎﺩﺓ ﻋﺒﺮ ﺯﻳﺎﺭﺓ ﺍﻟﺮﺍﺑﻂ ﺃﺩﻧﺎﻩ ﻓﻲ ﺍﻟﻤﻮﻗﻊ ﺍﻻﻟﻜﺘﺮﻭﻧﻲ
          ﻟﻠﻤﺆﺳﺴﺔ ﺍﻟﻌﺎﻣﺔ <br />
          ﻟﻠﺘﺄﻣﻴﻨﺎﺕ ﺍﻻﺟﺘﻤﺎﻋﻴﺔ ﺍﻭ ﻋﻦ ﻃﺮﻳﻖ ﺍﺳﺘﺨﺪﺍﻡ ﺍﻟﺮﻣﺰ ﺍﻟﻤﻌﺮﻑ ﺍﻟﺘﺎﻟﻲ
        </p>
        {/* qr code */}
        <Image
          src={qrCodeDataUrl}
          alt="qr code"
          className={`${cerTwo ? "ml-4" : "ml-10"}`}
          width={100}
          height={100}
        />
      </div>
      {/* secound colun */}
      <p
        id="mohamed"
        className="opacity-40  text-[8.8px] mr-1   text-[rgb(54 56 59)] whitespace-nowrap"
      >
        <span>
          تعد هذه الشهادة من الوثائق الالكترونية الحـكومية الرسمية ويحظر قطعياً
          تقليدها أو إدخال أي تعديلات عليها سواء بالإضـافة أو الحذف أو التغيير
          في بياناتها أو غير ذلك من أنواع التعديل,
        </span>
        <br />
        <span className="text-[8.5px]">
          وتعد الشهادة لاغية إذا شابها شي من ذلك. كما تعرض صاحبها للملاحقة
          النظامية أمام الجهات المختصة بالإضافة إلى ما يفرضه نظام التأمينات
          الاجتماعية من عقوبات، ولا يجوز تداول الشهادة
        </span>
        <br />
        <span className="text-[8.3px]">
          إلا في الأغراض التي أصدرت لأجلها وفقاً لأحكام نظام التأمينات
          الاجتماعية والمؤسسة العامة للتأمينات الاجتماعية غير مسؤولة عن أي عملية
          تزوير أو تعديل تتم على البيانات الواردة فيها.
        </span>
      </p>
      {/* column of inforamtion */}
      <div className="flex gap-10 items-center  -mt-4">
        {/* shape of icon footer */}
        <IconGosoCode />
        {/* inforamtion */}
        <article className="flex flex-col leading-4">
          <p className="text-[0.7rem] text-[#121a44] " dir="ltr">
            800 124 3344
          </p>
          <p className="text-secColor text-[14px] ">gosi.gov.sa</p>
        </article>
        <article className="leading-4 text-[#121a44]">
          <p>
            المملكة العربية السعودية,الرياض 12622 - 8308 حي{" "}
            <span className="">الوزارات</span> 3795
          </p>
          <p className="text-[12px]">
            Kingdom of Saudi Arabia, Riyadh 12622-8308 Al Wizarat 3795
          </p>
        </article>
      </div>
    </section>
  );
}
