"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    label: "MESSAGE US",
    title: "Share your goal",
    description:
      "Tell us your target band, deadline and intended study destination.",
  },
  {
    number: "2",
    label: "ASSESS",
    title: "Check your baseline",
    description:
      "Complete a short diagnostic or discuss recent official results.",
  },
  {
    number: "3",
    label: "MAP",
    title: "Receive your roadmap",
    description: "We recommend the right duration, mode and weekly priorities.",
  },
  {
    number: "4",
    label: "BEGIN",
    title: "Start preparation",
    description:
      "Join your sessions and begin the first focused practice cycle.",
    active: true,
  },
];

export default function FourSteps() {
  return (
    <section className="w-full bg-[#03102f] px-5 py-20 text-white sm:px-10 lg:py-[85px]">
      <div className="mx-auto max-w-[1062px]">
        {/* Heading */}
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

          <h2 className="text-[40px] font-semibold leading-[1.08] tracking-[-1.8px] sm:text-[54px]">
            Four simple steps.
            <span className="block font-serif font-normal italic tracking-[-1.5px] text-[#91f65e]">
              One clear start.
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group flex min-h-[229px] flex-col rounded-[20px] border px-5 py-7 transition-all duration-300 hover:-translate-y-1
                ${
                  step.active
                    ? "border-[#9cf36c] bg-[#9cf36c] text-[#07162c] hover:bg-[#a8fa7a]"
                    : "border-[#293750] bg-[#111e3c] text-white hover:border-[#52617c] hover:bg-[#152442]"
                }`}
            >
              {/* Number */}
              <span
                className={`mb-auto text-[11px] font-semibold ${
                  step.active ? "text-[#557e42]" : "text-[#8290a8]"
                }`}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="mt-8">
                <span
                  className={`mb-2 block text-[8px] font-extrabold tracking-[0.7px] ${
                    step.active ? "text-[#173b20]" : "text-[#ffbd20]"
                  }`}
                >
                  {step.label}
                </span>

                <h3 className="text-[16px] font-semibold leading-tight tracking-[-0.3px]">
                  {step.title}
                </h3>

                <p
                  className={`mt-3 max-w-[210px] text-[9px] leading-[1.8] ${
                    step.active ? "text-[#29452d]" : "text-[#b1bdcf]"
                  }`}
                >
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
