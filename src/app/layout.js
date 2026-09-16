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

  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact-us";
  const isCataloguePage = pathname === "/catalogue";

  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        {isContactPage ? (
          // Contact page: Header only on mobile/tablet
          <div className="block lg:hidden">
            <Header isHomePage={isHomePage} />
          </div>
        ) : (
          // All other pages including Catalogue
          <Header isHomePage={isHomePage} />
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        {!isCataloguePage &&
          (isContactPage ? (
            // Contact page: Footer only on mobile/tablet
            <div className="block lg:hidden">
              <Footer />
            </div>
          ) : (
            // All other pages
            <Footer />
          ))}
      </body>
    </html>
  );
}