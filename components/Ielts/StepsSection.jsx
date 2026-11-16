"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    tag: "MESSAGE US",
    title: "Share your goal",
    description:
      "Tell us your target band, deadline and intended study destination.",
  },
  {
    number: "2",
    tag: "ASSESS",
    title: "Check your baseline",
    description:
      "Complete a short diagnostic or discuss recent official results.",
  },
  {
    number: "3",
    tag: "MAP",
    title: "Receive your roadmap",
    description: "We recommend the right duration, mode and weekly priorities.",
  },
  {
    number: "4",
    tag: "BEGIN",
    title: "Start preparation",
    description:
      "Join your sessions and begin the first focused practice cycle.",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] text-white py-20 lg:py-24 px-5 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
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
              FROM MESSAGE TO MOCK
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Four simple steps.
            <br />
            <span className="text-blue-400 italic font-serif font-normal">
              One clear start.
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group min-h-[255px] rounded-[21px] border p-6
                flex flex-col justify-between
                transition-all duration-300 hover:-translate-y-2
                ${
                  index === 3
                    ? "bg-blue-500/80 border-blue-800 text-[#06152f]"
                    : "bg-blue-400/30 border-white/10 text-white hover:border-[#0265aa]/50"
                }`}
            >
              {/* Number */}
              <span
                className={`text-xs font-bold ${
                  index === 3 ? "text-[#527d35]" : "text-slate-400"
                }`}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="mt-12">
                <p
                  className={`text-[9px] font-bold tracking-[2px] mb-3 ${
                    index === 3 ? "text-[#214a16]" : "text-blue-400"
                  }`}
                >
                  {step.tag}
                </p>

                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>

                <p
                  className={`text-[11px] leading-[1.8] ${
                    index === 3 ? "text-[#36552a]" : "text-slate-400"
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
