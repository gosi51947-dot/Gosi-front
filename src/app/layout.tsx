import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";

// const balooBhaijaan = Baloo_Bhaijaan_2({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        <Navbar />
        <div className="min-h-screen mt-[125px] lg:mt-[206px]">{children}</div>
        <Footer />

        
      </body>
    </html>
  );
}
