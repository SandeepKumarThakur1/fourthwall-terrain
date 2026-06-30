"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [active, setActive] = useState(0);

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

  return (
<section className="bg-[#F6F0E5] py-[60px] md:py-[100px] px-4 md:px-0">
  <div className="mx-auto max-w-[90%]">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

      {/* Left */}
      <div className="flex flex-col justify-start text-center lg:text-left">

        <h2 className="text-[#634020] tracking-[-5%] mb-0 leading-[100%] font-subheading
          text-[34px] sm:text-[55px] md:text-[80px]">
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

        {faqs.map((item, index) => {
          const open = active === index;

          return (
            <div
              key={index}
              className="border-b border-[#E2D9CB]"
            >

              <button
                onClick={() => setActive(open ? -1 : index)}
                className="flex w-full items-start justify-between gap-4 md:gap-6 pt-5 md:pt-7 pb-3 md:pb-4 text-left"
              >

                <span className="text-[#634020] font-[500] leading-[150%] tracking-[-4%]
                  text-[15px] md:text-[18px]">
                  {item.question}
                </span>

                {open ? (
                  <ChevronUp
                    size={18}
                    className="mt-1 shrink-0 text-[#634020]"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="mt-1 shrink-0 text-[#634020]"
                  />
                )}

              </button>

              <div
                className={`grid transition-all duration-500 ${
                  open ? "grid-rows-[1fr] pb-4 md:pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">

                  <p className="text-[#697A07] font-[500] leading-[150%] tracking-[-4%]
                    text-[14px] md:text-[18px]">
                    {item.answer}
                  </p>

                </div>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  </div>
</section>
  );
}