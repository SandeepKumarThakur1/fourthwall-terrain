"use client";

import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/contact-us";

  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">
        {!hideLayout && <Header />}

        {children}

        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}