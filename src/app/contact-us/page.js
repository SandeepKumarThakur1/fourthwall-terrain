"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/contactBg.png" // Replace with your image
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col max-w-[90%] mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between py-6 ">
          <Link
            href="/"
            className="text-[12px] md:text-[14px] font-semibold uppercase tracking-[8%] md:tracking-[12%] text-white"
          >
            Fourthwall Terrain
          </Link>

          <Link
            href="/contact"
            className="hidden md:block text-[12px] md:text-[14px] font-semibold uppercase tracking-[8%] text-white"
          >
            Contact Us
          </Link>
        </header>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-4xl">
            <h1 className="mb-10 text-center text-[60px] font-subheading text-white leading-[100%] tracking-[-5%]">
              Ask your query
            </h1>

            <form className="space-y-5">
              {/* Row */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="h-16 rounded border border-white/20 bg-white/15 px-5 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
                />

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="h-16 rounded border border-white/20 bg-white/15 px-5 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
                />
              </div>

              <input
                type="email"
                placeholder="Enter email ID"
                className="h-16 w-full rounded border border-white/20 bg-white/15 px-5 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
              />

              <textarea
                rows={7}
                placeholder="Add your query"
                className="w-full rounded border border-white/20 bg-white/15 p-5 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
              />

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="min-w-[220px] bg-white px-12 py-5 text-lg font-semibold uppercase tracking-[4px] text-[#50652B] transition hover:bg-[#50652B] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/30 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white md:flex-row">
            <p>© 2026 Fourthwall Terrains. All rights reserved.</p>

            <div className="flex flex-col gap-2 md:flex-row md:gap-12">
              <a
                href="mailto:support@fourthwallterrains.com"
                className="hover:underline"
              >
                support@fourthwallterrains.com
              </a>

              <a href="tel:+911171640348" className="hover:underline">
                +91-1171640348
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}