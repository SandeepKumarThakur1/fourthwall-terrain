import HeroSection from "@/components/Hero";
import CraftedInStone from "@/components/CraftedInStone";
import CollectionShowcase from "@/components/Collectionshowcase";
import GiftingSection from "@/components/GiftingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import OurProcess from "@/components/Ourprocess";

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
