"use client";

import React from "react";
import {
  GraduationCap,
  CircleDollarSign,
  Home,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const FIT_CARDS = [
  {
    number: "01",
    title: "Academic Ambition",
    description:
      "Match your subject, level and academic profile with institutions that make sense for you.",
    icon: GraduationCap,
    variant: "dark",
  },
  {
    number: "02",
    title: "Budget Clarity",
    description:
      "Consider tuition, living costs and available financial routes before choosing a destination.",
    icon: CircleDollarSign,
    variant: "lime",
  },
  {
    number: "03",
    title: "Student Lifestyle",
    description:
      "Think about climate, culture, city pace, community and the study environment you prefer.",
    icon: Home,
    variant: "dark",
  },
  {
    number: "04",
    title: "Future Direction",
    description:
      "Build your study plan around the skills, exposure and career direction you want to develop.",
    icon: ArrowUpRight,
    variant: "amber",
  },
];

export default function FindBestFit() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] py-20 lg:py-28 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Centered Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
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
              FIND YOUR BEST FIT
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
            Start with what matters
            <span className="block font-serif italic font-normal text-[#0265aa] sm:text-[#0265aa] mt-1">
              most to you.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-lg">
            Your ideal destination is not just a country. It is the right
            combination of academics, affordability, lifestyle and long-term
            goals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FIT_CARDS.map((card) => {
            const IconComponent = card.icon;

            // Card variants matching the screenshot
            const cardStyles = {
              dark: "bg-[#001f3f]/90 border border-white/10 text-white hover:border-white/25",
              lime: "bg-blue-500/80 text-[#ffffff] shadow-xl hover:bg-[#001f3f] ",
              amber:
                "bg-blue-500/80 text-[#ffffff] shadow-xl hover:bg-[#001f3f] ",
            };

            const numberStyles = {
              dark: "text-slate-400",
              lime: "text-[#07152b]/70 hover:text-white",
              amber: "text-[#07152b]/70 hover:text-white",
            };

            const iconBoxStyles = {
              dark: "bg-[#0265aa] text-blue-300",
              lime: "bg-blue-200 text-[#07152b]",
              amber: "bg-blue-200 text-[#07152b]",
            };

            const descStyles = {
              dark: "text-slate-300/80",
              lime: "text-slate-300",
              amber: "text-slate-300",
            };

            return (
              <div
                key={card.number}
                className={`group rounded-[24px] p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-1.5 ${
                  cardStyles[card.variant]
                }`}
              >
                {/* Top Card Number */}
                <span
                  className={`text-[11px] font-bold tracking-wider ${
                    numberStyles[card.variant]
                  }`}
                >
                  {card.number}
                </span>

                {/* Bottom Content Block */}
                <div className="mt-12">
                  {/* Rounded Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${
                      iconBoxStyles[card.variant]
                    }`}
                  >
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-extrabold tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      descStyles[card.variant]
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
