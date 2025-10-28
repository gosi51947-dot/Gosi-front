import Image from "next/image";
import React from "react";
import IconGosoCode from "./iconGosoCode";
export default function FooterQrCode({
  qrCodeDataUrl,
}: {
  qrCodeDataUrl: string;
}) {
  return (
    <section className="flex flex-col ml-4 gap-2">
      {/* pupblic word */}
      <p className="text-center  text-secColor font-semibold"> Public ﻋﺎﻡ</p>
      {/* first column  qr code column */}
      <div className="flex   gap-8 items-end">
        {/* paragraph */}
        <p className="opacity-60">
          ﺗﺤﻘﻖ ﻣﻦ ﺻﺤﺔ ﻭﺻﻼﺣﻴﺔ ﺍﻟﺸﻬﺎﺩﺓ ﻋﺒﺮ ﺯﻳﺎﺭﺓ ﺍﻟﺮﺍﺑﻂ ﺃﺩﻧﺎﻩ ﻓﻲ ﺍﻟﻤﻮﻗﻊ ﺍﻻﻟﻜﺘﺮﻭﻧﻲ
          ﻟﻠﻤﺆﺳﺴﺔ ﺍﻟﻌﺎﻣﺔ ﻟﻠﺘﺄﻣﻴﻨﺎﺕ ﺍﻻﺟﺘﻤﺎﻋﻴﺔ ﺍﻭ ﻋﻦ ﻃﺮﻳﻖ ﺍﺳﺘﺨﺪﺍﻡ ﺍﻟﺮﻣﺰ ﺍﻟﻤﻌﺮﻑ
          ﺍﻟﺘﺎﻟﻲ
        </p>
        {/* qr code */}
        <Image src={qrCodeDataUrl} alt="qr code" width={100} height={100} />
      </div>
      {/* secound colun */}
      <p className="opacity-40 text-[12px] ">
        تعد هذه الشهادة من الوثائق الالكترونية الرسمية ويُحظر إدخال أي تعديلات
        عليها سواء بالإضافة أو الحذف أو التغيير في بياناتها أو غير ذلك من أنواع
        التعديل، وتعد الشهادة لاغية إذا شابها شيء من ذلك. كما تُعرض صاحبها
        للمساءلة النظامية أمام الجهات المختصة بالإضافة إلى ما يفرضه نظام
        التأمينات الاجتماعية من عقوبات، ولا يجوز تداول الشهادة إلا في الأغراض
        التي أصدرت لأجلها وفقاً لأحكام نظام التأمينات الاجتماعية، والمؤسسة
        العامة للتأمينات الاجتماعية غير مسؤولة عن أي عملية تزوير أو تعديل تم على
        البيانات الواردة فيها.
      </p>
      {/* column of inforamtion */}
      <div className="flex gap-10 items-center mt-4">
        {/* shape of icon footer */}
        <IconGosoCode/>
         {/* inforamtion */}
        <article className="flex flex-col leading-5">
          <p className="text-[0.7rem]">800 124 3344</p>
          <p className="text-secColor ">gosi.gov.sa</p>
        </article>
        <article className="leading-4">
          <p>المملكة العربية السعودية,الرياض 12622 - 8308 حي الوزارات3795</p>
          <p className="text-[0.7rem]">Kingdom of Saudi Arabia, Riyadh 12622-8308 Al Wizarat 3795</p>
        </article>
      </div>
    </section>
  );
}
