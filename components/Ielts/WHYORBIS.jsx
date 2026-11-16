"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Start at your real level",
    description:
      "Your plan begins with current strengths and weaknesses—not a one-size-fits-all timetable.",
  },
  {
    number: "02",
    title: "Know the reason behind feedback",
    description:
      "Corrections are connected to assessment criteria so improvement becomes repeatable.",
  },
  {
    number: "03",
    title: "Prepare around your deadline",
    description:
      "Weekly priorities are mapped against your test date and target band.",
  },
  {
    number: "04",
    title: "Connect IELTS to admission",
    description:
      "Our wider study-abroad team helps align your score target with university requirements.",
  },
];

export default function WHYORBIS() {
  return (
    <section className="w-full bg-white px-5 py-20 sm:px-10 lg:px-0">
      <div className="mx-auto max-w-[1062px]">
        {/* Section Heading */}
        <div className="mb-9">
          <div className="mb-1 flex items-center gap-2">
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
              Why Orbis Nexa?
            </p>
          </div>

          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#081735] sm:text-[54px]">
            Preparation that stays
            <span className="block font-serif font-normal italic tracking-[-2px] text-[#0265aa]">
              personal.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative min-h-[252px] overflow-hidden rounded-[20px] border border-[#dce0e6] bg-white px-5 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_12px_30px_rgba(15,40,30,0.06)]"
            >
              {/* Green corner decoration */}
              <div className="absolute -bottom-[1px] -right-[1px] h-[49px] w-[49px] rounded-tl-[50px] bg-blue-400/50 transition-all duration-300 group-hover:h-[62px] group-hover:w-[62px]" />

              <div className="relative z-10">
                <span className="mb-1 block text-[9px] font-bold text-[#a5adc0]">
                  {step.number}
                </span>

                <h3 className="max-w-[190px] text-[16px] font-semibold leading-[1.55] tracking-[-0.3px] text-[#081735]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[210px] text-[10px] leading-[1.8] text-[#52617d]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
