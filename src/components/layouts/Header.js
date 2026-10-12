// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const NAV_LINKS = [
//     // { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Gifting", href: "/gifting" },
//     { name: "Catalogue", href: "/catalogue" },
// ];

// const MOBILE_LINKS = [
//     ...NAV_LINKS,
//     { name: "Contact Us", href: "/contact-us" },
// ];

// export default function Header({ isHomePage = true }) {
//     const [open, setOpen] = useState(false);
//     const [showHeader, setShowHeader] = useState(true);
//     const [scrolledPastHero, setScrolledPastHero] = useState(false);

//     // Home: brown | Other pages: white
//     const navColor = isHomePage ? "text-[#412F23]" : "text-white";
//     const underlineColor = isHomePage
//         ? "bg-[#412F23]"
//         : "bg-white";

//     useEffect(() => {
//         let lastScrollY = window.scrollY;

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             setScrolledPastHero(
//                 currentScrollY >= window.innerHeight
//             );

//             if (currentScrollY < 50) {
//                 setShowHeader(true);
//             } else {
//                 setShowHeader(currentScrollY <= lastScrollY);
//             }

//             lastScrollY = currentScrollY;
//         };

//         handleScroll();

//         window.addEventListener("scroll", handleScroll, {
//             passive: true,
//         });

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const headerBackground = scrolledPastHero
//         ? "bg-white/10 backdrop-blur-md"
//         : "bg-transparent backdrop-blur-0";

//     const headerVisibility = showHeader
//         ? "translate-y-0"
//         : "-translate-y-full";

//     return (
//         <header
//             className={`
//                 fixed inset-x-0 top-0 z-50 w-full
//                 transition-all duration-500
//                 ${headerBackground}
//                 ${headerVisibility}
//             `}
//         >
//             <div
//                 className="
//                     mx-auto flex max-w-[90%]
//                     items-center justify-between
//                     py-3 md:py-5
//                 "
//             >
//                 {/* Logo */}
//                 <Link
//                     href="/"
//                     aria-label="Home"
//                 >
//                     <Image
//                         src={
//                             isHomePage
//                                 ? "/images/brand/logo-dark.svg"
//                                 : "/images/brand/logo-white.svg"
//                         }
//                         alt="Brand"
//                         width={100}
//                         height={100}
//                         priority
//                     />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav
//                     className="hidden items-center gap-20 md:flex"
//                     aria-label="Main navigation"
//                 >
//                     {NAV_LINKS.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`
//                                 group relative overflow-hidden
//                                 text-sm font-semibold uppercase
//                                 tracking-[0.12em]
//                                 ${navColor}
//                                 transition-colors duration-300
//                             `}
//                         >
//                             {item.name}

//                             <span
//                                 className={`
//                                     absolute bottom-0 left-0
//                                     h-px w-full
//                                     origin-left scale-x-0
//                                     ${underlineColor}
//                                     transition-transform duration-500
//                                     group-hover:scale-x-100
//                                 `}
//                             />
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Contact */}
//                 <Link
//                     href="/contact-us"
//                     className={`
//                         group relative hidden
//                         text-sm font-semibold uppercase
//                         tracking-[0.12em]
//                         ${navColor}
//                         md:block
//                     `}
//                 >
//                     Contact Us

//                     <span
//                         className={`
//                             absolute bottom-0 left-0
//                             h-px w-full
//                             origin-left scale-x-0
//                             ${underlineColor}
//                             transition-transform duration-500
//                             group-hover:scale-x-100
//                         `}
//                     />
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                     type="button"
//                     onClick={() => setOpen(true)}
//                     aria-label="Open menu"
//                     aria-expanded={open}
//                     className="
//                         transition-transform duration-300
//                         hover:scale-110 md:hidden
//                     "
//                 >
//                     <Menu
//                         size={24}
//                         className={navColor}
//                     />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`
//                     fixed inset-0 z-[100] min-h-screen
//                     bg-[#FFF9ED]
//                     transition-all duration-700
//                     ease-[cubic-bezier(.22,1,.36,1)]
//                     ${open
//                         ? "translate-x-0 opacity-100"
//                         : "pointer-events-none translate-x-full opacity-0"
//                     }
//                 `}
//                 aria-hidden={!open}
//             >
//                 {/* Close Button */}
//                 <div className="flex justify-end p-6">
//                     <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         aria-label="Close menu"
//                         className="
//                             transition-transform duration-300
//                             hover:rotate-90
//                         "
//                     >
//                         <X
//                             size={28}
//                             className="text-[#412F23]"
//                         />
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <nav
//                     className="flex flex-col gap-8 px-8 pt-10"
//                     aria-label="Mobile navigation"
//                 >
//                     {MOBILE_LINKS.map((item, index) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setOpen(false)}
//                             className={`
//                                 text-3xl font-semibold uppercase
//                                 text-[#412F23]
//                                 transition-all duration-700
//                                 ${open
//                                     ? "translate-x-0 opacity-100"
//                                     : "translate-x-10 opacity-0"
//                                 }
//                             `}
//                             style={{
//                                 transitionDelay: `${index * 80}ms`,
//                             }}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </div>
//         </header>
//     );
// }




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const NAV_LINKS = [
//     // { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Gifting", href: "/gifting" },
//     { name: "Catalogue", href: "/catalogue" },
// ];

// const MOBILE_LINKS = [
//     ...NAV_LINKS,
//     { name: "Contact Us", href: "/contact-us" },
// ];

// export default function Header({ isHomePage = true }) {
//     const [open, setOpen] = useState(false);
//     const [showHeader, setShowHeader] = useState(true);
//     const [scrolledPastHero, setScrolledPastHero] = useState(false);
//     const [isDarkBackground, setIsDarkBackground] = useState(false);

//     // Navigation color based on the background behind the header
//     const navColor = isDarkBackground
//         ? "text-white"
//         : "text-[#412F23]";

//     const underlineColor = isDarkBackground
//         ? "bg-white"
//         : "bg-[#412F23]";

//     useEffect(() => {
//         let lastScrollY = window.scrollY;
//         let ticking = false;

//         const checkBackgroundColor = () => {
//             const header = document.querySelector("header");

//             if (!header) return;

//             // Check the page background behind the header
//             const headerRect = header.getBoundingClientRect();

//             const checkX = Math.min(
//                 window.innerWidth - 1,
//                 Math.max(0, headerRect.left + headerRect.width * 0.5)
//             );

//             const checkY = Math.min(
//                 window.innerHeight - 1,
//                 Math.max(0, headerRect.top + headerRect.height * 0.5)
//             );

//             const elements = document.elementsFromPoint(
//                 checkX,
//                 checkY
//             );

//             let backgroundColor = null;

//             for (const element of elements) {
//                 // Ignore the header and its children
//                 if (header.contains(element)) continue;

//                 let currentElement = element;

//                 while (
//                     currentElement &&
//                     currentElement !== document.body
//                 ) {
//                     const color = window.getComputedStyle(
//                         currentElement
//                     ).backgroundColor;

//                     if (
//                         color &&
//                         color !== "rgba(0, 0, 0, 0)" &&
//                         color !== "transparent"
//                     ) {
//                         const rgb = color.match(/[\d.]+/g);

//                         if (rgb && rgb.length >= 3) {
//                             const alpha =
//                                 rgb.length >= 4
//                                     ? Number(rgb[3])
//                                     : 1;

//                             // Ignore nearly transparent backgrounds
//                             if (alpha > 0.1) {
//                                 backgroundColor = color;
//                                 break;
//                             }
//                         }
//                     }

//                     currentElement =
//                         currentElement.parentElement;
//                 }

//                 if (backgroundColor) break;
//             }

//             // If no background is found, use the default page background
//             if (!backgroundColor) {
//                 backgroundColor = window.getComputedStyle(
//                     document.body
//                 ).backgroundColor;
//             }

//             const rgb = backgroundColor.match(/[\d.]+/g);

//             if (rgb && rgb.length >= 3) {
//                 const [r, g, b] = rgb.map(Number);

//                 // Calculate perceived brightness
//                 const brightness =
//                     (r * 299 + g * 587 + b * 114) / 1000;

//                 setIsDarkBackground(brightness < 150);
//             }
//         };

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             setScrolledPastHero(
//                 currentScrollY >= window.innerHeight
//             );

//             // Preserve the existing header hide/show behavior
//             if (currentScrollY < 50) {
//                 setShowHeader(true);
//             } else {
//                 setShowHeader(currentScrollY <= lastScrollY);
//             }

//             lastScrollY = currentScrollY;

//             // Check the background once per animation frame
//             if (!ticking) {
//                 ticking = true;

//                 window.requestAnimationFrame(() => {
//                     checkBackgroundColor();
//                     ticking = false;
//                 });
//             }
//         };

//         checkBackgroundColor();

//         window.addEventListener("scroll", handleScroll, {
//             passive: true,
//         });

//         window.addEventListener(
//             "resize",
//             checkBackgroundColor
//         );

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//             window.removeEventListener(
//                 "resize",
//                 checkBackgroundColor
//             );
//         };
//     }, []);

//     const headerBackground = scrolledPastHero
//         ? "bg-white/10 backdrop-blur-md"
//         : "bg-transparent backdrop-blur-0";

//     const headerVisibility = showHeader
//         ? "translate-y-0"
//         : "-translate-y-full";

//     return (
//         <header
//             className={`
//                 fixed inset-x-0 top-0 z-50 w-full
//                 transition-all duration-500
//                 ${headerBackground}
//                 ${headerVisibility}
//             `}
//         >
//             <div
//                 className="
//                     mx-auto flex max-w-[90%]
//                     items-center justify-between
//                     py-3 md:py-5
//                 "
//             >
//                 {/* Logo */}
//                 <Link href="/" aria-label="Home">
//                     <Image
//                         src={
//                             isDarkBackground
//                                 ? "/images/brand/logo-white.svg"
//                                 : "/images/brand/logo-dark.svg"
//                         }
//                         alt="Brand"
//                         width={100}
//                         height={100}
//                         priority
//                         className="transition-opacity duration-300"
//                     />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav
//                     className="hidden items-center gap-20 md:flex"
//                     aria-label="Main navigation"
//                 >
//                     {NAV_LINKS.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`
//                                 group relative overflow-hidden
//                                 text-sm font-semibold uppercase
//                                 tracking-[0.12em]
//                                 ${navColor}
//                                 transition-colors duration-300
//                             `}
//                         >
//                             {item.name}

//                             <span
//                                 className={`
//                                     absolute bottom-0 left-0
//                                     h-px w-full
//                                     origin-left scale-x-0
//                                     ${underlineColor}
//                                     transition-transform duration-500
//                                     group-hover:scale-x-100
//                                 `}
//                             />
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Contact */}
//                 <Link
//                     href="/contact-us"
//                     className={`
//                         group relative hidden
//                         text-sm font-semibold uppercase
//                         tracking-[0.12em]
//                         ${navColor}
//                         md:block
//                     `}
//                 >
//                     Contact Us

//                     <span
//                         className={`
//                             absolute bottom-0 left-0
//                             h-px w-full
//                             origin-left scale-x-0
//                             ${underlineColor}
//                             transition-transform duration-500
//                             group-hover:scale-x-100
//                         `}
//                     />
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                     type="button"
//                     onClick={() => setOpen(true)}
//                     aria-label="Open menu"
//                     aria-expanded={open}
//                     className="
//                         transition-transform duration-300
//                         hover:scale-110 md:hidden
//                     "
//                 >
//                     <Menu
//                         size={24}
//                         className={`${navColor} transition-colors duration-300`}
//                     />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`
//                     fixed inset-0 z-[100] min-h-screen
//                     bg-[#FFF9ED]
//                     transition-all duration-700
//                     ease-[cubic-bezier(.22,1,.36,1)]
//                     ${open
//                         ? "translate-x-0 opacity-100"
//                         : "pointer-events-none translate-x-full opacity-0"
//                     }
//                 `}
//                 aria-hidden={!open}
//             >
//                 {/* Close Button */}
//                 <div className="flex justify-end p-6">
//                     <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         aria-label="Close menu"
//                         className="
//                             transition-transform duration-300
//                             hover:rotate-90
//                         "
//                     >
//                         <X
//                             size={28}
//                             className="text-[#412F23]"
//                         />
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <nav
//                     className="flex flex-col gap-8 px-8 pt-10"
//                     aria-label="Mobile navigation"
//                 >
//                     {MOBILE_LINKS.map((item, index) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setOpen(false)}
//                             className={`
//                                 text-3xl font-semibold uppercase
//                                 text-[#412F23]
//                                 transition-all duration-700
//                                 ${open
//                                     ? "translate-x-0 opacity-100"
//                                     : "translate-x-10 opacity-0"
//                                 }
//                             `}
//                             style={{
//                                 transitionDelay: `${index * 80}ms`,
//                             }}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </div>
//         </header>
//     );
// }






// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const NAV_LINKS = [
//     // { name: "Home", href: "/" },
//     { name: "About Us", href: "/about-us" },
//     { name: "Gifting", href: "/gifting" },
//     { name: "Catalogue", href: "/catalogue" },
// ];

// const MOBILE_LINKS = [
//     ...NAV_LINKS,
//     { name: "Contact Us", href: "/contact-us" },
// ];

// export default function Header({ isHomePage = true }) {
//     const headerRef = useRef(null);

//     const [open, setOpen] = useState(false);
//     const [showHeader, setShowHeader] = useState(true);
//     const [scrolledPastHero, setScrolledPastHero] = useState(false);
//     const [isDarkBackground, setIsDarkBackground] = useState(false);

//     // Navigation colors based on background theme
//     const navColor = isDarkBackground
//         ? "text-white"
//         : "text-[#412F23]";

//     const underlineColor = isDarkBackground
//         ? "bg-white"
//         : "bg-[#412F23]";

//     useEffect(() => {
//         let lastScrollY = window.scrollY;
//         let ticking = false;

//         const checkBackgroundColor = () => {
//             const header = headerRef.current;

//             if (!header) return;

//             const headerRect = header.getBoundingClientRect();

//             // Sample points underneath the header
//             const sampleY = Math.max(
//                 1,
//                 Math.min(
//                     window.innerHeight - 1,
//                     headerRect.top >= 0
//                         ? headerRect.top + Math.min(headerRect.height / 2, 40)
//                         : 20
//                 )
//             );

//             const points = [
//                 {
//                     x: window.innerWidth * 0.25,
//                     y: sampleY,
//                 },
//                 {
//                     x: window.innerWidth * 0.5,
//                     y: sampleY,
//                 },
//                 {
//                     x: window.innerWidth * 0.75,
//                     y: sampleY,
//                 },
//             ];

//             const elementsAtPoints = points.map(({ x, y }) =>
//                 document.elementsFromPoint(
//                     Math.min(window.innerWidth - 1, Math.max(0, x)),
//                     y
//                 )
//             );

//             // --------------------------------------------------
//             // 1. Check explicit section themes first.
//             // This works with background images and gradients.
//             // --------------------------------------------------

//             for (const elements of elementsAtPoints) {
//                 for (const element of elements) {
//                     if (header.contains(element)) continue;

//                     const themeElement = element.closest(
//                         "[data-header-theme]"
//                     );

//                     if (!themeElement || header.contains(themeElement)) {
//                         continue;
//                     }

//                     const theme = themeElement.getAttribute(
//                         "data-header-theme"
//                     );

//                     if (theme === "dark") {
//                         setIsDarkBackground(true);
//                         return;
//                     }

//                     if (theme === "light") {
//                         setIsDarkBackground(false);
//                         return;
//                     }
//                 }
//             }

//             // --------------------------------------------------
//             // 2. Fallback: detect solid background colors.
//             // Images should use data-header-theme above.
//             // --------------------------------------------------

//             for (const elements of elementsAtPoints) {
//                 for (const element of elements) {
//                     if (header.contains(element)) continue;

//                     let currentElement = element;

//                     while (
//                         currentElement &&
//                         currentElement !== document.documentElement
//                     ) {
//                         // Stop before checking the global body background
//                         // when no section theme or solid color is found.
//                         const color = window.getComputedStyle(
//                             currentElement
//                         ).backgroundColor;

//                         const match = color.match(/[\d.]+/g);

//                         if (
//                             match &&
//                             match.length >= 3 &&
//                             color !== "transparent" &&
//                             color !== "rgba(0, 0, 0, 0)"
//                         ) {
//                             const [r, g, b] = match.map(Number);
//                             const alpha =
//                                 match.length >= 4
//                                     ? Number(match[3])
//                                     : 1;

//                             if (alpha >= 0.9) {
//                                 const brightness =
//                                     (r * 299 + g * 587 + b * 114) /
//                                     1000;

//                                 setIsDarkBackground(
//                                     brightness < 150
//                                 );

//                                 return;
//                             }
//                         }

//                         currentElement =
//                             currentElement.parentElement;
//                     }
//                 }
//             }

//             // If no theme or solid background is found,
//             // preserve the current text and logo colors.
//         };

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // Preserve existing hero scroll behavior
//             setScrolledPastHero(
//                 currentScrollY >= window.innerHeight
//             );

//             // Show header while scrolling up.
//             // Hide header while scrolling down.
//             if (currentScrollY < 50) {
//                 setShowHeader(true);
//             } else {
//                 setShowHeader(currentScrollY <= lastScrollY);
//             }

//             lastScrollY = currentScrollY;

//             // Detect background once per animation frame
//             if (!ticking) {
//                 ticking = true;

//                 window.requestAnimationFrame(() => {
//                     checkBackgroundColor();
//                     ticking = false;
//                 });
//             }
//         };

//         // Initial background detection
//         checkBackgroundColor();

//         window.addEventListener("scroll", handleScroll, {
//             passive: true,
//         });

//         window.addEventListener(
//             "resize",
//             checkBackgroundColor
//         );

//         return () => {
//             window.removeEventListener("scroll", handleScroll);

//             window.removeEventListener(
//                 "resize",
//                 checkBackgroundColor
//             );
//         };
//     }, []);

//     // Existing header background behavior
//     const headerBackground = scrolledPastHero
//         ? "bg-white/10 backdrop-blur-md"
//         : "bg-transparent backdrop-blur-0";

//     // Existing header visibility behavior
//     const headerVisibility = showHeader
//         ? "translate-y-0"
//         : "-translate-y-full";

//     return (
//         <header
//             ref={headerRef}
//             className={`
//                 fixed inset-x-0 top-0 z-50 w-full
//                 transition-all duration-500
//                 ${headerBackground}
//                 ${headerVisibility}
//             `}
//         >
//             <div
//                 className="
//                     mx-auto flex max-w-[90%]
//                     items-center justify-between
//                     py-3 md:py-5
//                 "
//             >
//                 {/* Logo */}
//                 <Link href="/" aria-label="Home">
//                     <Image
//                         src={
//                             isDarkBackground
//                                 ? "/images/brand/logo-white.svg"
//                                 : "/images/brand/logo-dark.svg"
//                         }
//                         alt="Brand"
//                         width={100}
//                         height={100}
//                         priority
//                         className="
//                             transition-opacity duration-300
//                         "
//                     />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav
//                     className="
//                         hidden items-center gap-20 md:flex
//                     "
//                     aria-label="Main navigation"
//                 >
//                     {NAV_LINKS.map((item) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`
//                                 group relative overflow-hidden
//                                 text-sm font-semibold uppercase
//                                 tracking-[0.12em]
//                                 ${navColor}
//                                 transition-colors duration-300
//                             `}
//                         >
//                             {item.name}

//                             {/* Hover Underline */}
//                             <span
//                                 className={`
//                                     absolute bottom-0 left-0
//                                     h-px w-full
//                                     origin-left scale-x-0
//                                     ${underlineColor}
//                                     transition-transform duration-500
//                                     group-hover:scale-x-100
//                                 `}
//                             />
//                         </Link>
//                     ))}
//                 </nav>

//                 {/* Contact Us */}
//                 <Link
//                     href="/contact-us"
//                     className={`
//                         group relative hidden
//                         text-sm font-semibold uppercase
//                         tracking-[0.12em]
//                         ${navColor}
//                         transition-colors duration-300
//                         md:block
//                     `}
//                 >
//                     Contact Us

//                     {/* Hover Underline */}
//                     <span
//                         className={`
//                             absolute bottom-0 left-0
//                             h-px w-full
//                             origin-left scale-x-0
//                             ${underlineColor}
//                             transition-transform duration-500
//                             group-hover:scale-x-100
//                         `}
//                     />
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                     type="button"
//                     onClick={() => setOpen(true)}
//                     aria-label="Open menu"
//                     aria-expanded={open}
//                     className="
//                         transition-transform duration-300
//                         hover:scale-110 md:hidden
//                     "
//                 >
//                     <Menu
//                         size={24}
//                         className={`
//                             ${navColor}
//                             transition-colors duration-300
//                         `}
//                     />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`
//                     fixed inset-0 z-[100] min-h-screen
//                     bg-[#FFF9ED]
//                     transition-all duration-700
//                     ease-[cubic-bezier(.22,1,.36,1)]
//                     ${
//                         open
//                             ? "translate-x-0 opacity-100"
//                             : "pointer-events-none translate-x-full opacity-0"
//                     }
//                 `}
//                 aria-hidden={!open}
//             >
//                 {/* Close Button */}
//                 <div className="flex justify-end p-6">
//                     <button
//                         type="button"
//                         onClick={() => setOpen(false)}
//                         aria-label="Close menu"
//                         className="
//                             transition-transform duration-300
//                             hover:rotate-90
//                         "
//                     >
//                         <X
//                             size={28}
//                             className="text-[#412F23]"
//                         />
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <nav
//                     className="
//                         flex flex-col gap-8 px-8 pt-10
//                     "
//                     aria-label="Mobile navigation"
//                 >
//                     {MOBILE_LINKS.map((item, index) => (
//                         <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setOpen(false)}
//                             className={`
//                                 text-3xl font-semibold uppercase
//                                 text-[#412F23]
//                                 transition-all duration-700
//                                 ${
//                                     open
//                                         ? "translate-x-0 opacity-100"
//                                         : "translate-x-10 opacity-0"
//                                 }
//                             `}
//                             style={{
//                                 transitionDelay: `${index * 80}ms`,
//                             }}
//                         >
//                             {item.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </div>
//         </header>
//     );
// }





"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { name: "About Us", href: "/about-us" },
    { name: "Gifting", href: "/gifting" },
    { name: "Catalogue", href: "/catalogue" },
];

const MOBILE_LINKS = [
    ...NAV_LINKS,
    { name: "Contact Us", href: "/contact-us" },
];

export default function Header({ isHomePage = true }) {
    const headerRef = useRef(null);
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    // Detect Catalogue page
    const isCataloguePage = pathname === "/catalogue";

    // Keep navigation white on Catalogue page
    const effectiveDarkBackground =
        isCataloguePage || isDarkBackground;

    const navColor = effectiveDarkBackground
        ? "text-white"
        : "text-[#412F23]";

    const underlineColor = effectiveDarkBackground
        ? "bg-white"
        : "bg-[#412F23]";

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;
        let animationFrameId;

        const checkBackgroundColor = () => {
            const header = headerRef.current;

            if (!header) return;

            // Catalogue page always uses the white theme
            if (window.location.pathname === "/catalogue") {
                setIsDarkBackground(true);
                return;
            }

            const headerRect = header.getBoundingClientRect();

            const sampleY = Math.max(
                1,
                Math.min(
                    window.innerHeight - 1,
                    headerRect.top >= 0
                        ? headerRect.top +
                              Math.min(headerRect.height / 2, 40)
                        : 20
                )
            );

            const points = [
                {
                    x: window.innerWidth * 0.25,
                    y: sampleY,
                },
                {
                    x: window.innerWidth * 0.5,
                    y: sampleY,
                },
                {
                    x: window.innerWidth * 0.75,
                    y: sampleY,
                },
            ];

            const elementsAtPoints = points.map(({ x, y }) =>
                document.elementsFromPoint(
                    Math.min(window.innerWidth - 1, Math.max(0, x)),
                    y
                )
            );

            // Check explicit section themes
            for (const elements of elementsAtPoints) {
                for (const element of elements) {
                    if (header.contains(element)) continue;

                    const themeElement = element.closest(
                        "[data-header-theme]"
                    );

                    if (!themeElement || header.contains(themeElement)) {
                        continue;
                    }

                    const theme =
                        themeElement.getAttribute("data-header-theme");

                    if (theme === "dark") {
                        setIsDarkBackground(true);
                        return;
                    }

                    if (theme === "light") {
                        setIsDarkBackground(false);
                        return;
                    }
                }
            }

            // Fallback: detect solid background colors
            for (const elements of elementsAtPoints) {
                for (const element of elements) {
                    if (header.contains(element)) continue;

                    let currentElement = element;

                    while (
                        currentElement &&
                        currentElement !== document.documentElement
                    ) {
                        const color = window.getComputedStyle(
                            currentElement
                        ).backgroundColor;

                        const match = color.match(/[\d.]+/g);

                        if (
                            match &&
                            match.length >= 3 &&
                            color !== "transparent" &&
                            color !== "rgba(0, 0, 0, 0)"
                        ) {
                            const [r, g, b] = match.map(Number);

                            const alpha =
                                match.length >= 4
                                    ? Number(match[3])
                                    : 1;

                            if (alpha >= 0.9) {
                                const brightness =
                                    (r * 299 + g * 587 + b * 114) /
                                    1000;

                                setIsDarkBackground(brightness < 150);
                                return;
                            }
                        }

                        currentElement =
                            currentElement.parentElement;
                    }
                }
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Existing hero scroll behavior
            setScrolledPastHero(
                currentScrollY >= window.innerHeight
            );

            // Show header when scrolling up
            // Hide header when scrolling down
            if (currentScrollY < 50) {
                setShowHeader(true);
            } else {
                setShowHeader(currentScrollY <= lastScrollY);
            }

            lastScrollY = currentScrollY;

            // Check background once per animation frame
            if (!ticking) {
                ticking = true;

                animationFrameId = window.requestAnimationFrame(() => {
                    checkBackgroundColor();
                    ticking = false;
                });
            }
        };

        checkBackgroundColor();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", checkBackgroundColor);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkBackgroundColor);

            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Existing header background behavior
    const headerBackground = scrolledPastHero
        ? "bg-white/10 backdrop-blur-md"
        : "bg-transparent backdrop-blur-0";

    // Existing header visibility behavior
    const headerVisibility = showHeader
        ? "translate-y-0"
        : "-translate-y-full";

    return (
        <header
            ref={headerRef}
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
                <Link href="/" aria-label="Home">
                    <Image
                        src={
                            effectiveDarkBackground
                                ? "/images/brand/logo-white.svg"
                                : "/images/brand/logo-dark.svg"
                        }
                        alt="Brand"
                        width={100}
                        height={100}
                        priority
                        className="transition-opacity duration-300"
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

                {/* Contact Us */}
                <Link
                    href="/contact-us"
                    className={`
                        group relative hidden
                        text-sm font-semibold uppercase
                        tracking-[0.12em]
                        ${navColor}
                        transition-colors duration-300
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
                        className={`
                            ${navColor}
                            transition-colors duration-300
                        `}
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
                    ${
                        open
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
                                ${
                                    open
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