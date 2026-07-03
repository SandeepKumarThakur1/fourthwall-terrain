import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/catalogue-hero.jpg"
        alt="Catalogue Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071B08] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
          <Link
            href="/"
            className="transition hover:text-[#D5B06A]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#D5B06A]">
            Catalogue
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
          Discover Our
          <br />
          Collection
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Explore our handcrafted premium stone collection designed
          for timeless interiors and luxurious architectural spaces.
        </p>
      </div>
    </section>
  );
}