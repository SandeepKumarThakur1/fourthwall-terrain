"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Gifting", href: "/gifting" },
        { name: "Catalogue", href: "/catalogue" },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <header
            className={`fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md
  transition-transform duration-500
  ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="mx-auto flex max-w-[90%] items-center justify-between py-5">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-[#412F23] transition-all duration-500 hover:opacity-70"
                >
                    Fourthwall Terrain
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 md:flex">
                    {links.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="group relative overflow-hidden text-sm font-semibold uppercase tracking-[0.12em] text-[#412F23] transition-all duration-300"
                            style={{
                                animationDelay: `${index * 120}ms`,
                            }}
                        >
                            {item.name}

                            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-[#412F23] transition-transform duration-500 group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </nav>

                {/* Contact */}
                <Link
                    href="/contact-us"
                    className="group relative hidden text-sm font-semibold uppercase tracking-[0.12em] text-[#412F23] md:block"
                >
                    Contact Us

                    <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-[#412F23] transition-transform duration-500 group-hover:scale-x-100"></span>
                </Link>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="transition-transform duration-300 hover:scale-110 md:hidden"
                >
                    <Menu className="text-[#412F23]" size={24} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`min-h-screen fixed inset-0 z-[100] bg-[#FFF9ED] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                ${open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0 pointer-events-none"
                    }`}
            >
                {/* Close */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="transition-transform duration-300 hover:rotate-90"
                    >
                        <X size={28} className="text-[#412F23]" />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-8 px-8 pt-10">
                    {[...links, { name: "Contact Us", href: "/contact-us" }].map(
                        (item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`text-3xl font-semibold uppercase text-[#412F23]
                                transition-all duration-700
                                ${open
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-10 opacity-0"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 80}ms`,
                                }}
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </header>
    );
}