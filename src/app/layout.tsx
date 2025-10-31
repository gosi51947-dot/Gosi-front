import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";

// const balooBhaijaan = Baloo_Bhaijaan_2({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

export const metadata = {
  title: "المؤسسة العامة للتأمينات الاجتماعية",
  description:
    "مؤسسة حكومية تعنى بتوفير الحماية التأمينية للعاملين في القطاعين العام والخاص وتقديم المنافع لهم ولأفراد أسرهم.",
  icons: {
    icon: "/gosoicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>المؤسسة العامة للتأمينات الاجتماعية</title>
        <meta name="description" content="مؤسسة حكومية تعنى بتوفير الحماية التأمينية للعاملين في القطاعين العام والخاص وتقديم المنافع لهم ولأفراد أسرهم." />
      </head>
      <body >
        <Navbar />
        <div className="min-h-screen mt-[70px] lg:mt-[200px]">{children}</div>
        <Footer />

        
      </body>
    </html>
  );
}
