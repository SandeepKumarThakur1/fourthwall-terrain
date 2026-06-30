import CollectionShowcase from "@/components/Collectionshowcase";
import FAQSection from "@/components/FAQSection";
import ProcessTimeline from "@/components/ProcessTimeline/ProcessTimeline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Architect",
      review: "The stone quality is exceptional.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Sarah Smith",
      role: "Interior Designer",
      review: "Beautiful craftsmanship and support.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Michael Lee",
      role: "Builder",
      review: "Premium quality with luxurious finish.",
      video: "/videos/user1.mp4",
    },
    {
      name: "John Doe",
      role: "Architect",
      review: "The stone quality is exceptional.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Sarah Smith",
      role: "Interior Designer",
      review: "Beautiful craftsmanship and support.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Michael Lee",
      role: "Builder",
      review: "Premium quality with luxurious finish.",
      video: "/videos/user1.mp4",
    },
    {
      name: "John Doe",
      role: "Architect",
      review: "The stone quality is exceptional.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Sarah Smith",
      role: "Interior Designer",
      review: "Beautiful craftsmanship and support.",
      video: "/videos/user1.mp4",
    },
    {
      name: "Michael Lee",
      role: "Builder",
      review: "Premium quality with luxurious finish.",
      video: "/videos/user1.mp4",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[100vh] md:min-h-[220vh] w-full items-center overflow-hidden bg-slate">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./images/bannerHero.png')",
          }}
        />

        <div className="absolute top-[12%] md:top-[15%] left-[5%] md:left-[4%]">
          <h1 className="text-headline-1 text-white leading-[100%]
      text-[40px] sm:text-[70px] md:text-[120px] lg:text-[150px]">
            Bringing life
            <br />
            <span className="pl-[10px] md:pl-[40px]">
              into your space
            </span>
          </h1>
        </div>

        <div className="absolute bottom-[18%] md:bottom-[28%] left-[50%] translate-x-[-50%] text-center">
          <Link href="/" className="inline-block btn-cta text-sm md:text-base px-4 md:px-0">
            Discover Terrains
          </Link>
        </div>

        <Image
          src="/images/terrainEdge.svg"
          alt="Jagged terrain edge"
          width={1440}
          height={120}
          className="terrain-edge w-full h-auto"
        />
      </section>

      <section className="text-center sectionBg mt-[-3%] md:mt-[-5%] z-1 px-4 md:px-0">
        <div>

          <h3 className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
      text-[34px] sm:text-[60px] md:text-[90px]">
            Crafted in stone
          </h3>

          <h3 className="text-[#697A07] tracking-[-5%] mb-0 leading-[100%] font-subheading
      text-[30px] sm:text-[55px] md:text-[80px]">
            from the lands of South India
          </h3>

          <p className="py-6 md:py-10 text-[14px] md:text-[16px] leading-[150%] tracking-[-4%] max-w-[650px] mx-auto text-center">
            Born from the rugged terrains of Andra Pradesh, each piece carries the raw beauty of the land it comes from. The textures, curves, and imperfections are inspired by natural rock formations shaped over time by wind, water, and erosion.<br />
            The process is not about hiding the material’s natural character, but elevating it, preserving its raw authenticity while refining it into something timeless, minimal, and luxurious.
          </p>

        </div>

        <div className="mt-[-8%] md:mt-[-15%] text-center">
          <Image
            src="/images/map.png"
            alt="map"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      <CollectionShowcase />

      <section className="giftingWrapper relative py-[60px] md:py-[124px] px-4">
        <div className="text-center flex flex-col justify-between">

          <h3 className="text-headline-1 leading-[110%]
      text-[40px] sm:text-[80px] md:text-[130px]">
            The art of gifting
            <br />
            from nature
          </h3>

          <Image
            src="/images/giftImage.png"
            alt="giftImage"
            width={900}
            height={1000}
            className="mx-auto mt-[-40px] md:mt-[-130px] w-full max-w-[500px] md:max-w-[900px] h-auto"
          />

          <div className="text-center mt-6 md:mt-0">
            <Link href="/" className="inline-block btn-cta">
              Explore Collection
            </Link>
          </div>

        </div>
      </section>

      <section className="testimonialWrapper relative min-h-[100vh] md:min-h-[160vh] overflow-hidden">

        <Image
          src="/images/testimonialBg.png"
          alt="testimonial Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">

          {/* TEXT */}
          <div className="text-center">
            <h3 className="text-white font-subheading tracking-[-2%]
        text-[18px] sm:text-[26px] md:text-[34px]">
              Exclusive • Timeless • Authentic
            </h3>

            <h2 className="mt-2 md:mt-3 text-white font-subheading tracking-[-2%]
        text-[24px] sm:text-[38px] md:text-[54px]">
              1.2L+ living spaces elevated
            </h2>
          </div>

          {/* MARQUEE */}
          <div className="relative mt-10 md:mt-16 w-full overflow-hidden">

            <div className="flex w-max gap-4 md:gap-8 animate-marquee">

              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={index}
                  className="relative shrink-0 overflow-hidden rounded-[10px]
            w-[220px] sm:w-[280px] md:w-[340px]
            h-[360px] sm:h-[450px] md:h-[540px]"
                >

                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 z-20 flex items-center gap-3">

                    <div className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] overflow-hidden rounded-full bg-amber-100">
                      <Image
                        src="/images/userImage.png"
                        alt="User"
                        width={45}
                        height={45}
                      />
                    </div>

                    <div>
                      <h4 className="text-white font-[600] leading-[150%]
                  text-[14px] md:text-[18px]">
                        {item.name}
                      </h4>

                      <p className="text-white/60 leading-[150%]
                  text-[12px] md:text-[18px]">
                        {item.role}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <FAQSection />

      {/* <ProcessTimeline /> */}
    </>
  );
}
