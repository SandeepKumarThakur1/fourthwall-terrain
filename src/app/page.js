"use client";

import HeroSection from "@/components/home/Hero";
import CraftedInStone from "@/components/home/CraftedInStone";
import CollectionShowcase from "@/components/home/Collectionshowcase";
import GiftingSection from "@/components/home/GiftingSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
// import OurProcess from "@/components/home/Ourprocess";
import testimonials from "@/data/testimonial";
import OurProcess from "@/components/ourProcess/OurProcess";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CraftedInStone />
      <OurProcess />
      <CollectionShowcase />
      <GiftingSection />
      <TestimonialSection testimonials={testimonials} />
      <FAQSection />
    </>
  );
}