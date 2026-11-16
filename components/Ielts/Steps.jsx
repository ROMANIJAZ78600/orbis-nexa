"use client";

import { motion } from "framer-motion";

const stepsData = [
  {
    number: "01",
    title: "Diagnose",
    desc: "Pinpoint exact band-lowering habits",
  },
  { number: "02", title: "Build", desc: "Master core structures & templates" },
  { number: "03", title: "Drill", desc: "Targeted practice on weak areas" },
  { number: "04", title: "Simulate", desc: "Real exam pressure & time limits" },
  { number: "05", title: "Refine", desc: "Final polish for your target score" },
];

export default function Steps() {
  return (
    <section className="relative w-full bg-[#F3F7F4] py-16 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="w-full lg:w-5/12">
          <p className="relative inline-flex items-center gap-3 tracking-[0.12em] bg-blue-500/10 border border-blue-400/40 px-4 py-2 rounded-full text-blue-700 font-bold text-xs uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-blue-500"
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            THE ORBIS BUILDER
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.12]">
            Not more homework. <br />
            <span className="italic text-[#0265aa] font-serif font-normal">
              Better decisions.
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-md">
            Strong IELTS preparation is a feedback system. Every practice task
            should reveal what to fix, what to repeat and what to stop doing.
          </p>

          <div className="flex flex-col gap-1 p-5 border-l-4 mt-7 border-orange-400 bg-blue-950 rounded-r-2xl shadow-md max-w-md">
            <span className="uppercase text-[11px] tracking-wider text-orange-300 font-bold">
              Your target
            </span>
            <span className="text-sm text-white/95 leading-6">
              Turn weak patterns into repeatable exam skills.
            </span>
          </div>
        </div>

        {/* Right Column: Stepped Pills */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4 relative">
          {stepsData.map((step, index) => {
            // Desktop par clean staircase indentation (0%, 8%, 16%, 24%, 32%)
            const desktopOffsets = [
              "lg:ml-0",
              "lg:ml-12",
              "lg:ml-24",
              "lg:ml-36",
              "lg:ml-48",
            ];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className={`group flex items-center justify-between gap-4 w-full lg:w-[360px] bg-white hover:bg-blue-950 p-3 pr-6 rounded-full border border-slate-200/90 hover:border-blue-900 shadow-sm hover:shadow-xl transition-colors duration-300 cursor-default ${desktopOffsets[index]}`}
              >
                <div className="flex items-center gap-4">
                  {/* Number Circle */}
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 group-hover:bg-[#0265aa] text-blue-400 group-hover:text-white font-bold text-sm shrink-0 transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 group-hover:text-blue-200 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Arrow */}
                <span className="text-slate-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all text-lg font-semibold">
                  →
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
