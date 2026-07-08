"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const answerRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    answerRefs.current.forEach((answer, index) => {
      if (!answer) return;

      gsap.killTweensOf(answer);

      gsap.to(answer, {
        height: active === index ? "auto" : 0,
        opacity: active === index ? 1 : 0,
        duration: 0.45,
        ease: "power2.out",
      });

      if (iconRefs.current[index]) {
        gsap.killTweensOf(iconRefs.current[index]);

        gsap.to(iconRefs.current[index], {
          rotate: active === index ? 180 : 0,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    });
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F6F0E5] px-4 py-16 md:px-0 md:py-24"
    >
      <div className="mx-auto max-w-[90%]">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div className="lg:sticky lg:top-28 lg:self-start text-center lg:text-left">

            <h2 className="font-subheading text-[40px] leading-[100%] tracking-[-0.05em] text-[#634020] sm:text-[60px] md:text-[80px]">
              Queries answered
              <br />
              for our clients
            </h2>

            <Link
              href="/collections/all"
              className="btn-cta mx-auto mt-8 inline-block lg:mx-0"
            >
              Ask a Question
            </Link>

          </div>

          {/* Right */}

          <div>

            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="border-b border-[#E2D9CB]"
              >

                <button
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                  className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                >

                  <span
                    className={`text-[16px] leading-[150%] transition-all duration-300 md:text-[18px]
                    ${active === index
                        ? "text-[#697A07]"
                        : "text-[#634020] group-hover:text-[#697A07]"
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
                      className="transition-transform duration-300"
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

                  <p className="pb-6 text-[15px] leading-7 text-[#697A07] md:text-[17px]">
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