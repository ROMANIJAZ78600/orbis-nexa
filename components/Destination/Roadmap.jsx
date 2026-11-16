"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Profile Review",
    description: "Academics, study gap, English level and previous experience.",
    badgeBg: "bg-black", // Lime green
  },
  {
    number: "02",
    title: "Budget Mapping",
    description:
      "A realistic view of tuition, living and application planning.",
    badgeBg: "bg-black", // Warm amber/yellow
  },
  {
    number: "03",
    title: "Country Shortlist",
    description:
      "Options compared against your priorities, not generic popularity.",
    badgeBg: "bg-black", // Lime green
  },
  {
    number: "04",
    title: "Application Plan",
    description:
      "A clear next-step roadmap from documents to final preparation.",
    badgeBg: "bg-black", // Warm amber/yellow
  },
];

export default function Roadmap() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Heading, Description & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start">
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
              Your ORBIS Roadmap
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#07152b] leading-[1.08] tracking-tight">
            From too <br />
            many choices <br />
            to{" "}
            <span className="font-serif italic font-normal text-[#0265aa]">
              one clear <br />
              direction.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-sm">
            We do not start with a random country list. We start with you, then
            build a practical shortlist around your real profile.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-3 bg-[#0265aa] hover:bg-blue-400 text-white text-xs sm:text-sm font-bold px-6 py-4 rounded-full shadow-md transition-all cursor-pointer"
          >
            <span>Build My Shortlist</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Column: 4 Roadmap Cards with Vertical Connector Line */}
        <div className="lg:col-span-7 relative">
          {/* Subtle Vertical Connecting Line behind badges */}
          {/* <div
            aria-hidden="true"
            className="hidden sm:block absolute left-11 top-10 bottom-10 w-[1px] bg-slate-200 z-0"
          /> */}

          <div className="flex flex-col gap-4 relative z-10">
            {ROADMAP_STEPS.map((step) => (
              <div
                key={step.number}
                className="group bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 sm:px-6 sm:py-5 flex items-center gap-5 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Number Circle */}
                <div
                  className={`w-11 h-11 rounded-full ${step.badgeBg} flex items-center justify-center shrink-0 text-blue-400 font-extrabold text-xs shadow-2xs group-hover:scale-105 transition-transform`}
                >
                  {step.number}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base sm:text-[17px] font-extrabold text-[#07152b]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {step.description}
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
