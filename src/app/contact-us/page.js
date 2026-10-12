// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function ContactPage() {
//   return (
//     <section className="relative min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/images/contactBg.png"
//         alt="Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen lg:h-full flex-col max-w-[90%] mx-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between py-4 lg:py-5 hidden md:flex">
//           <Link
//             href="/"
//             className="text-[1vw] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white"
//           >
//             Fourthwall Terrain
//           </Link>

//           <Link
//             href="/contact"
//             className="text-[1vw] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white"
//           >
//             Contact Us
//           </Link>
//         </header>

//         {/* Main */}
//         <main className="flex flex-1 items-center justify-center py-8 lg:py-2">
//           <div className="w-full max-w-4xl">
//             <h1 className="mb-6 text-center font-subheading text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] leading-none tracking-[-0.04em] text-white">
//               Ask your query
//             </h1>

//             <form className="space-y-4">
//               {/* Name + Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   className="h-12 lg:h-14 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Enter phone number"
//                   className="h-12 lg:h-14 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
//                 />
//               </div>

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Enter email ID"
//                 className="h-12 lg:h-14 w-full rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition focus:border-white"
//               />

//               {/* Message */}
//               <textarea
//                 rows={5}
//                 placeholder="Add your query"
//                 className="w-full lg:h-[140px] rounded-md border border-white/20 bg-white/15 p-4 text-white placeholder:text-white/70 backdrop-blur-md outline-none transition resize-none focus:border-white"
//               />

//               {/* Button */}
//               <div className="flex justify-center pt-2">
//                 <button
//                   type="submit"
//                   className="min-w-[180px] cursor-pointer bg-white px-8 py-3 text-base font-semibold uppercase tracking-[3px] text-[#50652B] transition-all duration-300 hover:bg-[#50652B] hover:text-white"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="border-t border-white/30 py-4">
//           <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-white md:flex-row md:text-sm">
//             <p>© 2026 Fourthwall Terrains. All rights reserved.</p>

//             <div className="flex flex-col gap-2 md:flex-row md:gap-8">
//               <a
//                 href="mailto:support@fourthwallterrains.com"
//                 className="hover:underline"
//               >
//                 support@fourthwallterrains.com
//               </a>

//               <a
//                 href="tel:+911171640348"
//                 className="hover:underline"
//               >
//                 +91-1171640348
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/contactBg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/45"
        aria-hidden="true"
      />

      {/* Page Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-[90%] flex-col">
        {/* Header */}
        <header className="hidden items-center justify-between py-4 lg:py-5 md:flex">
          {/* White Logo */}
          <Link
            href="/"
            aria-label="Fourthwall Terrain Home"
            className="relative block h-8 w-36 sm:h-10 sm:w-44"
          >
            <Image
              src="/images/brand/logo-white.svg"
              alt="Fourthwall Terrain"
              fill
              priority
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>

          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-70 sm:text-sm sm:tracking-[0.2em]"
          >
            Contact Us
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center py-10 sm:py-12">
          <div className="w-full max-w-4xl">
            <h1 className="mb-6 text-center font-subheading text-[34px] leading-none tracking-[-0.04em] text-white sm:mb-8 sm:text-[42px] md:text-[50px] lg:text-[58px]">
              Ask your query
            </h1>

            <form className="space-y-4">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  autoComplete="name"
                  aria-label="Full name"
                  className="h-12 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 outline-none backdrop-blur-md transition-colors focus:border-white lg:h-14"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  aria-label="Phone number"
                  className="h-12 rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 outline-none backdrop-blur-md transition-colors focus:border-white lg:h-14"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Enter email ID"
                autoComplete="email"
                aria-label="Email address"
                className="h-12 w-full rounded-md border border-white/20 bg-white/15 px-4 text-white placeholder:text-white/70 outline-none backdrop-blur-md transition-colors focus:border-white lg:h-14"
              />

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="Add your query"
                aria-label="Your query"
                className="min-h-28 w-full resize-y rounded-md border border-white/20 bg-white/15 p-4 text-white placeholder:text-white/70 outline-none backdrop-blur-md transition-colors focus:border-white lg:h-[140px] lg:resize-none"
              />

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="min-w-[180px] cursor-pointer bg-white px-8 py-3 text-base font-semibold uppercase tracking-[3px] text-[#50652B] transition-colors duration-300 hover:bg-[#50652B] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Footer */}
        <footer className="hidden border-t border-white/30 py-4 md:block">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-white sm:text-sm md:flex-row md:text-left">
            <p>© 2026 Fourthwall Terrains. All rights reserved.</p>

            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 lg:gap-8">
              <a
                href="mailto:support@fourthwallterrains.com"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                support@fourthwallterrains.com
              </a>

              <a
                href="tel:+911171640348"
                className="transition-opacity duration-300 hover:opacity-70"
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