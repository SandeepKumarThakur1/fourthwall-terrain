import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#062400] pt-[120px]">
            <div className="mx-auto max-w-[90%] z-10">
                {/* Top border accent */}
                <div className="w-full" />

                {/* Link columns */}
                <div className="grid grid-cols-2 gap-10 pb-10 sm:grid-cols-4 ">
                    <div>
                        <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
                            Fourthwall Terrains
                        </h3>
                        <ul className="text-[16px] leading-[140%] tracking-[-1%]">
                            <li className="pb-[20px]">
                                <Link href="/" className="hover:text-white/80/80">
                                    Home
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/about" className="hover:text-white/80/80">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
                            Collection
                        </h3>
                        <ul className="text-[16px] leading-[140%] tracking-[-1%]">
                            <li className="pb-[20px]">
                                <Link href="/collections/river-residue" className="hover:text-white/80">
                                    River Residue
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/collections/canyon-crust" className="hover:text-white/80">
                                    Canyon Crust
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/collections/roselle-editions" className="hover:text-white/80">
                                    Roselle Editions
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/collections/sand-dunes" className="hover:text-white/80">
                                    Sand Dunes
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/collections/fossil-frost" className="hover:text-white/80">
                                    Fossil Frost
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/collections/gifting" className="hover:text-white/80">
                                    The Gifting Collection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
                            Support
                        </h3>
                        <ul className="text-[16px] leading-[140%] tracking-[-1%]">
                            <li className="pb-[20px]">
                                <Link href="/support" className="hover:text-white/80">
                                    Customer support
                                </Link>
                            </li>
                            <li className="pb-[20px]">
                                <Link href="/contact" className="hover:text-white/80">
                                    Ask a question
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="pb-[20px] text-[14px] font-semibold uppercase tracking-[12%] text-[#FFF9ED80]">
                            Office Details
                        </h3>
                        <p className="flex items-start gap-2 text-sm text-[16px] leading-[140%] tracking-[-1%]">
                            27th main, HSR Road, Bengaluru, India, 560017
                            <a
                                href="https://maps.google.com/?q=HSR+Layout+Bengaluru"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open in Google Maps"
                                className="text-[16px] leading-[140%] tracking-[-1%] hover:text-white/80"
                            >
                                ↗
                            </a>
                        </p>
                    </div>
                </div>

                {/* Logo + contact row */}
                <div className="flex flex-col items-start justify-between gap-4 pb-5 sm:flex-row sm:items-center">
                    <Link
                        href="/"
                        className="py-5 px-20 text-sm text-[16px] leading-[140%] tracking-[-1%] bg-[#FFF9ED]"
                    >
                    </Link>

                    <div className="flex flex-wrap gap-6 text-sm text-[13px] leading-[140%] tracking-[-1%]">
                        <a href="mailto:support@fourthwallterrains.com" className="hover:text-white/80">
                            support@fourthwallterrains.com
                        </a>
                        <a href="tel:+911176465348" className="hover:text-white/80">
                            +91-1176465348
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#fff9ed4f] pt-6 text-sm text-[13px] leading-[140%] tracking-[-1%]">
                    © {new Date().getFullYear()} Fourthwall Terrains. All rights reserved.
                </div>
            </div>

            {/* Ghost watermark text */}
            <div
                aria-hidden="true"
                className="z-1 text-headline-1 pointer-events-none pt-[27px] w-full select-none text-center font-bold text-[200px] max-w-[90%] mx-auto"
            >
                <Image
                    src="/images/ghostWatermark.svg"
                    alt="Ghost watermark"
                    width={1400}
                    height={120}
                />
            </div>

            <div className="leftop absolute top-0 left-0 z[-1]">
                <Image
                    src="/images/ellipse1.png"
                    alt="ellipse1"
                    width={700}
                    height={600}
                />
            </div>

            <div className="righttop absolute top-0 right-0">
                <Image
                    src="/images/ellipse2.png"
                    alt="ellipse2"
                    width={700}
                    height={900}
                />
            </div>
        </footer>
    );
}