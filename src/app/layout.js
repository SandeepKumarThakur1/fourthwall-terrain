"use client";

import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

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
        {/* Header */}
        {pathname === "/contact-us" ? (
          <>
            {/* Mobile & Tablet */}
            <div className="block lg:hidden">
              <Header />
            </div>

            {/* Desktop */}
            {/* Hidden */}
          </>
        ) : (
          <Header />
        )}

        {children}

        {/* Footer */}
        {pathname === "/contact-us" ? (
          <>
            {/* Mobile & Tablet */}
            <div className="block lg:hidden">
              <Footer />
            </div>

            {/* Desktop */}
            {/* Hidden */}
          </>
        ) : (
          <Footer />
        )}
      </body>
    </html>
  );
}