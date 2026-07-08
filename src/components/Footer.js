// 'use client';
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//     return (

//         <>
//             <footer className="relative isolate overflow-hidden bg-[#062400] pt-[120px]">

//                 {/* Background Images */}
//                 <div className="absolute inset-0 -z-10 pointer-events-none">
//                     <Image
//                         src="/images/ellipse1.png"
//                         alt=""
//                         width={700}
//                         height={600}
//                         className="absolute top-0 left-0"
//                     />

//                     <Image
//                         src="/images/ellipse2.png"
//                         alt=""
//                         width={700}
//                         height={900}
//                         className="absolute top-0 right-0"
//                     />
//                 </div>

//                 {/* Main Content */}
//                 <div className="relative z-10 mx-auto max-w-[90%]">

//                     {/* Link Columns */}
//                     <div className="grid grid-cols-2 gap-10 pb-10 sm:grid-cols-4">

//                         <div>
//                             <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
//                                 Fourthwall Terrains
//                             </h3>

//                             <ul className="text-[16px] leading-[140%] tracking-[-1%]">
//                                 <li className="pb-[20px]">
//                                     <Link href="/" className="text-white hover:text-white/80">
//                                         Home
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link href="/about" className="text-white hover:text-white/80">
//                                         About Us
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
//                                 Collection
//                             </h3>

//                             <ul className="text-[16px] leading-[140%] tracking-[-1%]">
//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/river-residue"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         River Residue
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/canyon-crust"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         Canyon Crust
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/roselle-editions"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         Roselle Editions
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/sand-dunes"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         Sand Dunes
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/fossil-frost"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         Fossil Frost
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link
//                                         href="/collections/gifting"
//                                         className="text-white hover:text-white/80"
//                                     >
//                                         The Gifting Collection
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
//                                 Support
//                             </h3>

//                             <ul className="text-[16px] leading-[140%] tracking-[-1%]">
//                                 <li className="pb-[20px]">
//                                     <Link href="/support" className="text-white hover:text-white/80">
//                                         Customer Support
//                                     </Link>
//                                 </li>

//                                 <li className="pb-[20px]">
//                                     <Link href="/contact" className="text-white hover:text-white/80">
//                                         Ask a Question
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
//                                 Office Details
//                             </h3>

//                             <p className="flex items-start gap-2 text-[16px] leading-[140%] tracking-[-1%] text-white">
//                                 27th Main, HSR Road, Bengaluru, India, 560017

//                                 <a
//                                     href="https://maps.google.com/?q=HSR+Layout+Bengaluru"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="hover:text-white/80"
//                                 >
//                                     ↗
//                                 </a>
//                             </p>
//                         </div>
//                     </div>

//                     {/* Contact Row */}
//                     <div className="flex flex-col items-start justify-between gap-4 pb-5 sm:flex-row sm:items-center">

//                         <Link
//                             href="/"
//                             className="bg-[#FFF9ED] px-20 py-5"
//                         />

//                         <div className="flex flex-wrap gap-6 text-[13px] leading-[140%] tracking-[-1%]">
//                             <a
//                                 href="mailto:support@fourthwallterrains.com"
//                                 className="text-white hover:text-white/80"
//                             >
//                                 support@fourthwallterrains.com
//                             </a>

//                             <a
//                                 href="tel:+911176465348"
//                                 className="text-white hover:text-white/80"
//                             >
//                                 +91-1176465348
//                             </a>
//                         </div>
//                     </div>

//                     {/* Copyright */}
//                     <div className="border-t border-[#fff9ed4f] pt-6 text-[13px] leading-[140%] tracking-[-1%] text-white">
//                         © {new Date().getFullYear()} Fourthwall Terrains. All rights reserved.
//                     </div>
//                 </div>

//                 {/* Watermark */}
//                 <div
//                     aria-hidden="true"
//                     className="relative z-10 mx-auto max-w-[90%] pt-[27px]"
//                 >
//                     <Image
//                         src="/images/ghostWatermark.svg"
//                         alt="Ghost Watermark"
//                         width={1400}
//                         height={120}
//                         className="w-full h-auto"
//                     />
//                 </div>

//             </footer>
//         </>
//     );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";

const sections = [
    {
        title: "Fourthwall Terrains",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
        ],
    },
    {
        title: "Collection",
        links: [
            { label: "River Residue", href: "/collections/river-residue" },
            { label: "Canyon Crust", href: "/collections/canyon-crust" },
            { label: "Roselle Editions", href: "/collections/roselle-editions" },
            { label: "Sand Dunes", href: "/collections/sand-dunes" },
            { label: "Fossil Frost", href: "/collections/fossil-frost" },
            { label: "The Gifting Collection", href: "/collections/gifting" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Customer Support", href: "/support" },
            { label: "Ask a Question", href: "/contact" },
        ],
    },
    {
        title: "Office Details",
        content: (
            <p className="flex items-start gap-2 text-[15px] leading-7 text-white/80">
                27th Main, HSR Road,
                <br />
                Bengaluru, India, 560017
            </p>
        ),
    },
];

export default function Footer() {
    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <footer className="relative isolate overflow-hidden bg-[#062400] pt-20 md:pt-28">

            {/* Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/images/ellipse1.png"
                    alt=""
                    width={700}
                    height={600}
                    className="absolute left-0 top-0 animate-pulse opacity-70"
                />

                <Image
                    src="/images/ellipse2.png"
                    alt=""
                    width={700}
                    height={900}
                    className="absolute right-0 top-0 animate-pulse opacity-70"
                />
            </div>

            {/* ================= DESKTOP ================= */}

            <div className="hidden md:block">

                <div className="mx-auto max-w-[90%]">

                    <div className="grid grid-cols-4 gap-10 pb-14">

                        {sections.map((section) => (
                            <div key={section.title}>

                                <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#FFF9ED80]">
                                    {section.title}
                                </h3>

                                {section.links ? (
                                    <ul className="space-y-5">

                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-white hover:text-white/80 group relative inline-flex transition-all duration-300"
                                                >
                                                    {link.label}

                                                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/80 transition-transform duration-500 group-hover:scale-x-100"></span>

                                                </Link>
                                            </li>
                                        ))}

                                    </ul>
                                ) : (
                                    section.content
                                )}

                            </div>
                        ))}

                    </div>
                    {/* Contact Row */}

                    <div className="flex items-center justify-between py-8">

                        <Link
                            href="/"
                            className="flex h-14 w-44 items-center justify-center bg-[#FFF9ED] text-[#062400] font-semibold uppercase tracking-[0.15em] transition-transform duration-300 hover:scale-105"
                        >
                            Logo
                        </Link>

                        <div className="flex gap-8 text-sm">

                            <a
                                href="mailto:support@fourthwallterrains.com"
                                className="text-[14px] transition-colors duration-300 text-[#FFF9ED] hover:text-[#FFF9ED]"
                            >
                                support@fourthwallterrains.com
                            </a>

                            <a
                                href="tel:+911176465348"
                                className="text-[14px] transition-colors duration-300 text-[#FFF9ED] hover:text-[#FFF9ED]"
                            >
                                +91-1176465348
                            </a>

                        </div>

                    </div>

                    <div className="border-t border-white/10 pt-6 text-sm text-white/70">
                        © {new Date().getFullYear()} Fourthwall Terrains. All rights
                        reserved.
                    </div>

                </div>

            </div>

            {/* ================= MOBILE ================= */}

            <div className="mx-auto block max-w-[90%] md:hidden">

                {/* Logo */}

                <div className="flex justify-center pb-10">

                    <Link
                        href="/"
                        className="flex h-14 w-44 items-center justify-center rounded-sm bg-[#FFF9ED] text-[#062400] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105"
                    >
                        Logo
                    </Link>

                </div>

                {/* Accordion */}

                <div className="border-y border-white/10">

                    {sections.map((section, index) => (

                        <div
                            key={section.title}
                            className="border-b last:border-none border-white/10"
                        >

                            <button
                                onClick={() => toggle(index)}
                                className="flex w-full items-center justify-between py-5"
                            >

                                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#FFF9ED]">
                                    {section.title}
                                </h3>

                                <Plus
                                    size={18}
                                    className={`transition-all duration-500 ${active === index ? "rotate-45" : ""
                                        }`}
                                />

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${active === index
                                    ? "max-h-[450px] opacity-100 pb-5"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                {section.links ? (

                                    <ul className="space-y-4">

                                        {section.links.map((link) => (

                                            <li key={link.label}>

                                                <Link
                                                    href={link.href}
                                                    className="block text-[15px] text-white/75 transition-all duration-300 hover:translate-x-2 hover:text-white"
                                                >
                                                    {link.label}
                                                </Link>

                                            </li>

                                        ))}

                                    </ul>

                                ) : (
                                    section.content
                                )}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Contact */}

                <div className="space-y-5 py-10 text-center">

                    <a
                        href="mailto:support@fourthwallterrains.com"
                        className="block text-[14px] text-[#FFF9ED] transition-all duration-300 hover:text-[#FFF9ED]"
                    >
                        support@fourthwallterrains.com
                    </a>

                    <a
                        href="tel:+911176465348"
                        className="block text-[14px] text-[#FFF9ED] transition-all duration-300 hover:text-[#FFF9ED]"
                    >
                        +91-1176465348
                    </a>

                </div>

                {/* Copyright */}

                <div className="border-t border-white/10 pt-6 pb-8 text-center text-xs leading-6 text-white/60">

                    © {new Date().getFullYear()} Fourthwall Terrains.
                    <br />
                    All rights reserved.

                </div>

            </div>

            {/* ================= WATERMARK ================= */}

            <div
                aria-hidden="true"
                className="relative z-10 mx-auto mt-8 max-w-[90%]"
            >

                <Image
                    src="/images/ghostWatermark.svg"
                    alt="Ghost Watermark"
                    width={1400}
                    height={120}
                    className="w-full h-auto opacity-80 transition-all duration-700 hover:opacity-100 hover:-translate-y-2"
                />

            </div>

        </footer>
    );
}