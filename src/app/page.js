import CollectionShowcase from "@/components/Collectionshowcase";
import OurProcess from "@/components/OurProcess";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[220vh] w-full items-center overflow-hidden bg-slate">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./images/bannerHero.png')",
          }}
        />

        {/* Content */}
        <div className="absolute top-[15%] left-[4%]">
          <h1 className="text-headline-1 text-white">
            Bringing life
            <br />
            <span className="pl-[40px]">into your space</span>
          </h1>
        </div>
        <div className="absolute bottom-[28%] left-[50%] translate-x-[-50%] text-center ">
          <Link href="/" className="inline-block btn-cta">
            Discover Terrains
          </Link>
        </div>

        {/* Jagged terrain edge transition into next section */}
        <Image
          src="/images/terrainEdge.svg"
          alt="Jagged terrain edge"
          width={1440}
          height={120}
          className="terrain-edge w-full"
        />
      </section>

      <section className="text-center sectionBg mt-[-5%] z-1">
        <div>
          <h3 className="text-[90px] text-[#634020] tracking-[-5%] mb-0 pb-0 lh-[100%] font-subheading">Crafted in stone</h3>
          <h3 className="text-[80px] text-[#697A07] tracking-[-5%] mb-0 pb-0 lh-[100%] font-subheading">from the lands of South India</h3>
          <p className="py-10 text-[16px] lh-[150%] tracking-[-4%] max-w-[650px] mx-auto text-center">Born from the rugged terrains of Andra Pradesh, each piece carries the raw beauty of the land it comes from. The textures, curves, and imperfections are inspired by natural rock formations shaped over time by wind, water, and erosion.<br />
            The process is not about hiding the material’s natural character, but elevating it, preserving its raw authenticity while refining it into something timeless, minimal, and luxurious. </p>
        </div>

        <div className="mt-[-15%] text-center">
          <Image
            src="/images/map.png"
            alt="map"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </section>

      {/* <OurProcess/> */}
      <CollectionShowcase />
    </>
);
      }
