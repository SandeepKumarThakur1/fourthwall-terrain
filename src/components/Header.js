"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-sm">

            {/* TOP BAR */}
            <div className="mx-auto flex max-w-[90%] items-center justify-between py-4 md:py-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-[12px] md:text-[14px] font-semibold uppercase tracking-[8%] md:tracking-[12%] text-[#412F23] md:text-[#412F23]"
                >
                    Fourthwall Terrain
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 lg:gap-10 text-[12px] lg:text-[14px] font-semibold uppercase tracking-[8%] text-[#412F23]">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/gifting">Gifting</Link>
                    <Link href="">Catalogue</Link>
                </nav>

                {/* Contact */}
                <Link
                    href="/contact-us"
                    className="hidden md:block text-[12px] md:text-[14px] font-semibold uppercase tracking-[8%] text-[#412F23]"
                >
                    Contact Us
                </Link>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-[#412F23]"
                    onClick={() => setOpen(true)}
                >
                    <Menu size={22} />
                </button>

            </div>

            {/* MOBILE FULL SCREEN MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-white h-screen z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                {/* Close */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-[#412F23]"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col items-start gap-8 px-8 pt-10 text-[18px] font-semibold uppercase text-[#1a1a1a]">

                    <Link onClick={() => setOpen(false)} href="/">Home</Link>
                    <Link onClick={() => setOpen(false)} href="/about">About Us</Link>
                    <Link onClick={() => setOpen(false)} href="/gifting">Gifting</Link>
                    <Link onClick={() => setOpen(false)} href="">Catalogue</Link>
                    <Link onClick={() => setOpen(false)} href="/contact-us">Contact Us</Link>

                </div>

            </div>

        </header>
    );
}