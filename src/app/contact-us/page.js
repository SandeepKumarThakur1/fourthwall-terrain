"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden">
      {/* Background */}
      <Image
        src="/images/contactBg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen lg:h-full flex-col max-w-[90%] mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between py-4 lg:py-5 hidden md:flex">
          <Link
            href="/"
            className="text-[11px] sm:text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white"
          >
            Fourthwall Terrain
          </Link>

          <Link
            href="/contact"
            className="text-[11px] sm:text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white"
          >
            Contact Us
          </Link>
        </header>

        {/* Main */}
        <main className="flex flex-1 items-center justify-center py-8 lg:py-2">
          <div className="w-full max-w-4xl">
            <h1 className="mb-6 text-center font-subheading text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] leading-none tracking-[-0.04em] text-white">
              Ask your query
            </h1>

            <form className="space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="h-12 lg:h-14 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
                />

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="h-12 lg:h-14 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Enter email ID"
                className="h-12 lg:h-14 w-full rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Add your query"
                className="w-full lg:h-[140px] rounded-md border border-white/20 bg-white/15 p-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition resize-none focus:border-white"
              />

              {/* Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="min-w-[180px] cursor-pointer bg-white px-8 py-3 text-base font-semibold uppercase tracking-[3px] text-[#50652B] transition-all duration-300 hover:bg-[#50652B] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/30 py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-white md:flex-row md:text-sm">
            <p>© 2026 Fourthwall Terrains. All rights reserved.</p>

            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <a
                href="mailto:support@fourthwallterrains.com"
                className="hover:underline"
              >
                support@fourthwallterrains.com
              </a>

              <a
                href="tel:+911171640348"
                className="hover:underline"
              >
                +91-1171640348
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}