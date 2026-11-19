"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Default FAQs (agar koi prop pass na ho)
const defaultFaqs = [
  {
    question: "How can I apply for studying abroad?",
    answer:
      "You can start by selecting your preferred destination and course. Our consultants will guide you through university selection, documentation, applications and visa preparation.",
  },
  {
    question: "Which countries do you offer study opportunities in?",
    answer:
      "We provide study abroad guidance for destinations including the USA, UK, Canada, Australia, Germany, Japan and other countries.",
  },
  {
    question: "Do you provide scholarship guidance?",
    answer:
      "Yes! We help students explore available scholarships and funding opportunities based on their academic profiles and eligibility.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The timeline depends on the university, destination and intake. Our team helps you plan your application timeline.",
  },
];

export default function Faqs({
  badge = "Frequently Asked Questions",
  titleLines = ["Questions Before You"],
  highlightWord = "Start?",
  description = "Find clear answers about studying abroad from Pakistan, university applications, scholarships, English tests and student visas.",
  ctaTitle = "Still need Guidance?",
  ctaDescription = "Discuss your study plans with an Orbis Nexa counsellor.",
  ctaButtonText = "Book Free Consultation",
  ctaLink = "/contact",
  faqs = defaultFaqs,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-35">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content (Dynamic via Props) */}
        <div className="flex flex-col gap-5 justify-start lg:w-5/12">
          <p className="relative flex items-center gap-3 tracking-[0.1em] w-fit max-w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-2 rounded-full text-black/50 text-xs sm:text-sm">
            <motion.span
              animate={{
                scale: [1, 2.4],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute w-3 h-3 rounded-full bg-blue-400"
            />
            <span className="relative z-10 w-2.5 h-2.5 shrink-0 rounded-full bg-blue-600 shadow-sm" />
            {badge}
          </p>

          <h4 className="font-bold text-4xl sm:text-5xl lg:text-5xl leading-tight tracking-wide">
            {titleLines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
            <span className="text-[#0265aa]">{highlightWord}</span>
          </h4>

          <p className="text-gray-600 max-w-md tracking-tight leading-relaxed">
            {description}
          </p>

          {/* Bottom CTA Card */}
          <div className="mt-4">
            <div className="relative overflow-hidden bg-gradient-to-bl from-[#0265aa] to-blue-400 w-full max-w-sm rounded-[20px]">
              <div className="absolute top-[-35px] right-[-35px] z-0 w-30 h-30 bg-blue-600 rounded-full" />
              <div className="absolute top-[-40px] right-[-40px] z-0 w-27 h-27 bg-[#0265aa] rounded-full" />
              <div className="relative flex flex-col gap-2.5 p-6">
                <h6 className="text-white text-lg font-bold">{ctaTitle}</h6>
                <p className="text-gray-200 text-sm">{ctaDescription}</p>
                <Link
                  href={ctaLink}
                  className="mt-1 bg-[#0265aa] px-5 py-3 w-fit text-sm font-semibold text-white flex items-center gap-2 rounded-full shadow-md hover:scale-95 active:scale-90 hover:shadow-blue-600 transition-all duration-300"
                >
                  {ctaButtonText} <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side FAQs Accordion */}
        <div className="flex w-full lg:w-7/12 flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#0265AA] bg-blue-50 shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0265AA] text-white">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-blue-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-gray-600 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
