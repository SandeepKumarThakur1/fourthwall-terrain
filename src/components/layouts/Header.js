"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
    // { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Gifting", href: "/gifting" },
    { name: "Catalogue", href: "/catalogue" },
];

const MOBILE_LINKS = [
    ...NAV_LINKS,
    { name: "Contact Us", href: "/contact-us" },
];

export default function Header({ isHomePage = true }) {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    // Home: brown | Other pages: white
    const navColor = isHomePage ? "text-[#412F23]" : "text-white";
    const underlineColor = isHomePage
        ? "bg-[#412F23]"
        : "bg-white";

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrolledPastHero(
                currentScrollY >= window.innerHeight
            );

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else {
                setShowHeader(currentScrollY <= lastScrollY);
            }

            lastScrollY = currentScrollY;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerBackground = scrolledPastHero
        ? "bg-white/10 backdrop-blur-md"
        : "bg-transparent backdrop-blur-0";

    const headerVisibility = showHeader
        ? "translate-y-0"
        : "-translate-y-full";

    return (
        <header
            className={`
                fixed inset-x-0 top-0 z-50 w-full
                transition-all duration-500
                ${headerBackground}
                ${headerVisibility}
            `}
        >
            <div
                className="
                    mx-auto flex max-w-[90%]
                    items-center justify-between
                    py-3 md:py-5
                "
            >
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Home"
                >
                    <Image
                        src={
                            isHomePage
                                ? "/images/brand/logo-dark.png"
                                : "/images/brand/logo-white.png"
                        }
                        alt="Brand"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav
                    className="hidden items-center gap-20 md:flex"
                    aria-label="Main navigation"
                >
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                group relative overflow-hidden
                                text-sm font-semibold uppercase
                                tracking-[0.12em]
                                ${navColor}
                                transition-colors duration-300
                            `}
                        >
                            {item.name}

                            <span
                                className={`
                                    absolute bottom-0 left-0
                                    h-px w-full
                                    origin-left scale-x-0
                                    ${underlineColor}
                                    transition-transform duration-500
                                    group-hover:scale-x-100
                                `}
                            />
                        </Link>
                    ))}
                </nav>

                {/* Contact */}
                <Link
                    href="/contact-us"
                    className={`
                        group relative hidden
                        text-sm font-semibold uppercase
                        tracking-[0.12em]
                        ${navColor}
                        md:block
                    `}
                >
                    Contact Us

                    <span
                        className={`
                            absolute bottom-0 left-0
                            h-px w-full
                            origin-left scale-x-0
                            ${underlineColor}
                            transition-transform duration-500
                            group-hover:scale-x-100
                        `}
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={open}
                    className="
                        transition-transform duration-300
                        hover:scale-110 md:hidden
                    "
                >
                    <Menu
                        size={24}
                        className={navColor}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    fixed inset-0 z-[100] min-h-screen
                    bg-[#FFF9ED]
                    transition-all duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    ${open
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-full opacity-0"
                    }
                `}
                aria-hidden={!open}
            >
                {/* Close Button */}
                <div className="flex justify-end p-6">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="
                            transition-transform duration-300
                            hover:rotate-90
                        "
                    >
                        <X
                            size={28}
                            className="text-[#412F23]"
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className="flex flex-col gap-8 px-8 pt-10"
                    aria-label="Mobile navigation"
                >
                    {MOBILE_LINKS.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`
                                text-3xl font-semibold uppercase
                                text-[#412F23]
                                transition-all duration-700
                                ${open
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-10 opacity-0"
                                }
                            `}
                            style={{
                                transitionDelay: `${index * 80}ms`,
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}