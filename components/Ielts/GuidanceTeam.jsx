"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Diagnostic Planning",
  "Writing Feedback",
  "Speaking Practice",
  "Mock Analysis",
];

export default function GuidanceTeam() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] py-16 lg:py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
        {/* Left Column: Visual Arch & Ripple */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Ripple Animation */}
            <motion.span
              animate={{
                scale: [1, 1.32],
                opacity: [0.45, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border border-blue-300/60 bg-blue-400/10 pointer-events-none"
            />

            {/* Main Circle Border */}
            <div className="absolute inset-0 rounded-full border border-blue-400/50 pointer-events-none" />

            {/* Arch Card (Centered cleanly with Flexbox) */}
            <div className="relative z-10 w-44 h-52 sm:w-52 sm:h-64 lg:w-60 lg:h-72 bg-gradient-to-b from-blue-400/30 to-slate-950/60 backdrop-blur-md border border-white/15 rounded-t-full rounded-b-2xl flex flex-col items-center justify-center shadow-2xl">
              <h3 className="text-white/30 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center px-2">
                ORBIS NEXA
              </h3>
              <span className="text-xs sm:text-sm text-white font-semibold tracking-[4px] mt-1">
                IELTS
              </span>

              {/* Floating Badge (Safe positioning so it never overflows on mobile) */}
              <motion.div
                initial={{ rotate: -6, y: 10, opacity: 0 }}
                whileInView={{ rotate: -6, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-3 sm:-right-6 bg-slate-950/90 border border-blue-400/30 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-xl flex flex-col"
              >
                <span className="text-sm sm:text-lg text-white font-extrabold leading-none">
                  4-SKILL
                </span>
                <span className="text-[9px] sm:text-[10px] text-blue-300 font-medium tracking-wider mt-1">
                  EXPERT GUIDANCE
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 flex flex-col items-start">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 tracking-[0.12em] bg-white/10 border border-blue-300/30 px-4 py-2 rounded-full text-blue-100 font-bold text-xs uppercase">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
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
                className="absolute inline-flex h-full w-full rounded-full bg-blue-300"
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400" />
            </span>
            <span>Meet Your Guidance Team</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-5 leading-[1.15]">
            Preparation led by <br />
            <span className="text-blue-300 italic font-serif font-normal">
              strategy, not scripts.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-blue-100/85 max-w-xl">
            Our IELTS guidance focuses on genuine language growth,
            examiner-aligned criteria and practical routines students can repeat
            independently. You receive clear direction, honest progress feedback
            and focused preparation for your chosen test route.
          </p>

          {/* 4 Feature Pills (Responsive Grid without overflow) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-7 w-full">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs sm:text-sm font-medium text-white bg-white/5 hover:bg-white/15 border border-white/20 px-4 py-2.5 rounded-full text-center transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group inline-flex items-center gap-2.5 mt-9 bg-white hover:bg-blue-50 text-slate-950 px-6 py-3.5 font-bold text-sm rounded-full shadow-lg hover:shadow-white/25 transition-all cursor-pointer">
            <span>Meet IELTS Team</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
