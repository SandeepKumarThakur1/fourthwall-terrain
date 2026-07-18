"use client";

import HeroSection from "@/components/Hero";
import CraftedInStone from "@/components/CraftedInStone";
import CollectionShowcase from "@/components/Collectionshowcase";
import GiftingSection from "@/components/GiftingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import OurProcess from "@/components/Ourprocess";
import testimonials from "@/data/testimonial";

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