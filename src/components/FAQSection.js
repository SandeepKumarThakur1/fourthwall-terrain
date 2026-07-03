"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const answerRefs = useRef([]);
  const iconRefs = useRef([]);

  const faqs = [
    {
      question: "Are the plants included with the stone pots?",
      answer:
        "Yes, selected collections come with curated plant pairings designed to complement the form, texture, and scale of each stone piece.",
    },
    {
      question: "Are these stones natural or handcrafted?",
      answer:
        "Every stone piece is handcrafted using carefully selected natural materials.",
    },
    {
      question:
        "Will these collections complement different types of interior styles such as minimal, modern, luxury, or earthy spaces?",
      answer:
        "Yes, our collections are designed to complement a wide range of interior styles.",
    },
    {
      question:
        "What kind of care and maintenance is required to keep both the plants and stone pots in good condition over time?",
      answer:
        "Minimal maintenance is required. Regular watering and occasional cleaning are recommended.",
    },
    {
      question:
        "How are these stone pieces crafted, and will every product have a unique texture and finish?",
      answer:
        "Each piece is handcrafted, making every product unique.",
    },
  ];

  useEffect(() => {
    answerRefs.current.forEach((el, index) => {
      if (!el) return;

      const isOpen = index === active;

      gsap.to(el, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.6,
        ease: "power3.inOut",
      });

      gsap.to(iconRefs.current[index], {
        rotate: isOpen ? 180 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  }, [active]);

  return (
    <section className="bg-[#F6F0E5] py-[60px] md:py-[100px] px-4 md:px-0">
      <div className="mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Left */}
          <div className="flex flex-col justify-start text-center lg:text-left">
            <h2
              className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
              text-[34px] sm:text-[55px] md:text-[80px]"
            >
              Queries answered
              <br />
              for our clients
            </h2>

            <Link
              href="/collections/all"
              className="mt-6 md:mt-8 inline-block w-fit btn-cta mx-auto lg:mx-0"
            >
              Ask a Question
            </Link>
          </div>

          {/* Right */}
          <div>
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#E2D9CB]"
              >
                <button
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                  className="flex w-full items-start justify-between gap-4 pt-6 pb-4 text-left"
                >
                  <span
                    className={`text-[15px] md:text-[18px] font-medium leading-[150%] transition-colors duration-300 ${active === index
                      ? "text-[#697A07]"
                      : "text-[#634020]"
                      }`}
                  >
                    {item.question}
                  </span>

                  <div
                    ref={(el) => (iconRefs.current[index] = el)}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className="text-[#634020]"
                    />
                  </div>
                </button>

                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  style={{
                    height: index === 0 ? "auto" : 0,
                    overflow: "hidden",
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  <p className="pb-6 text-[14px] md:text-[18px] text-[#697A07] leading-[150%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}