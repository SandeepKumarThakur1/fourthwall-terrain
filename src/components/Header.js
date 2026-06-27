import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-[90%] items-center justify-between py-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-[14px] font-semibold uppercase tracking-[12%] text-[#412F23]"
                >
                    Fourthwall Terrain
                </Link>

                {/* Nav links - centered */}
                <nav className="hidden gap-10 text-[14px] font-semibold uppercase tracking-[12%] text-[#412F23] md:flex">
                    <Link href="/" className="transition hover:opacity-70">
                        Home
                    </Link>
                    <Link href="/about" className="transition hover:opacity-70">
                        About Us
                    </Link>
                    <Link href="/gifting" className="transition hover:opacity-70">
                        Gifting
                    </Link>
                    <Link href="/catalogue" className="transition hover:opacity-70">
                        Catalogue
                    </Link>
                </nav>

                {/* Contact link */}
                <Link
                    href="/contact"
                    className="text-[14px] font-semibold uppercase tracking-[12%] text-[#412F23] transition hover:opacity-70"
                >
                    Contact Us
                </Link>
            </div>
        </header>
    );
}