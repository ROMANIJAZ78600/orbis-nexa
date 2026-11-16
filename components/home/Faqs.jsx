"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigRight, ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
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
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-7 ">
        {/* Left Side Content */}
        <div className="flex flex-col gap-5  justify-start lg:ml-30">
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
            Frequently Asked Questions
          </p>
          <h4 className="font-bold text-6xl">
            Questions <br /> Before <br /> You{" "}
            <span className="text-[#0265aa]"> Start?</span>
          </h4>
          <p className="text-gray-600 lg:w-99 tracking-tight">
            Find clear answers about studying abroad from Pakistan, university
            applications, scholarships, English tests and student visas.
          </p>

          <div className="mt-5">
            <div className="relative overflow-hidden bg-gradient-to-bl from-[#0265aa] to-blue-400 lg:w-95 lg:h-45 w-80 h-45 rounded-[20px]">
              <div className="absolute top-[-35px]  right-[-35px] z-0 w-30 h-30 bg-blue-600 rounded-full" />
              <div className="absolute top-[-40px]  right-[-40px] z-0 w-27 h-27 bg-[#0265aa] rounded-full" />
              <div className=" relative flex flex-col gap-1.5 p-5">
                <h6 className=" text-white text-lg font-bold">
                  Still need Guidance?
                </h6>
                <p className="text-gray-300">
                  Discuss your study plans with a Orbis Nexa counsellor.
                </p>
                <Link
                  href="/"
                  className="bg-[#0265aa] p-3 lg:w-[65%] w-[77%] text-gray-200 flex gap-0.5 rounded-full shadow-md hover:scale-95 active:scale-80 hover:shadow-blue-600 active:shadow-blue-600 duration-300"
                >
                  Book Free Consultation <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Faqs */}

        <div className="flex w-full flex-col gap-3">
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
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center cursor-pointer justify-center rounded-full bg-[#0265AA] text-white">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* Answer */}
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
