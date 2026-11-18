"use client";

import { motion } from "framer-motion";

const courses = [
  {
    icon: "G",
    tag: "WORK & MIGRATION",
    title: "General Training",
    description:
      "Practical language preparation with General Training Reading and Writing tasks.",
    link: "Find my route",
  },
  {
    icon: "U",
    tag: "UK VISA ROUTES",
    title: "IELTS for UKVI",
    description:
      "Focused preparation for the IELTS format required by relevant UK visa and immigration routes.",
    link: "Check suitability",
  },
  {
    icon: "1",
    tag: "FOCUSED IMPROVEMENT",
    title: "One Skill Retake",
    description:
      "Target one eligible IELTS skill after a computer-based full test, subject to official rules.",
    link: "Plan improvement",
  },
];

export default function ChooseYourRoute() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12 lg:mt-20">
      <p className="relative flex items-center gap-3 tracking-[0.1em] w-55 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full text-blue-500 lg:text-black/50 text-sm">
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
        <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm" />{" "}
        Choose Your Route
      </p>
      <h1 className="lg:text-6xl text-3xl lg:w-150 font-bold mt-2">
        Prepare for the test your{" "}
        <span className="text-gray-600 italic">dream needs.</span>
      </h1>
      <p className="lg:w-150 mt-2">
        Your IELTS version should match your university, professional or
        immigration goal. We help you choose before your preparation begins.
      </p>

      <div className="lg:w-[90%] mx-auto lg:h-100 h-180 bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] mt-10 rounded-[20px]">
        <p className="text-xs p-2 bg-blue-400/80 w-27 lg:w-30 rounded-tl-[20px] rounded-br-[20px] font-bold">
          MOST POPULAR
        </p>

        <div className="flex lg:flex-row flex-col justify-between gap-3">
          <div className="flex gap-3 items-center p-10 lg:mt-15">
            <span className="bg-black text-blue-400 h-10 flex items-center  lg:px-5 p-3 rounded-[20px] font-bold lg:text-xl">
              A
            </span>
            <div className="flex flex-col gap-5">
              <span className="tracking-wide font-bold text-blue-400/80 text-sm">
                Study Abroad
              </span>
              <span className="text-white text-3xl font-bold">
                IELTS Academic
              </span>
              <p className="text-gray-300">
                Academic Reading and Writing preparation for university
                admission and professional registration.
              </p>
              <div className="flex lg:flex-row flex-col gap-5 items-center mt-5 mr-20">
                <p className="text-[7px] lg:w-40 w-30  lg:text-xs bg-white/20 border-1 border-white/50  p-2 rounded-full text-white">
                  Data & diagram writing
                </p>
                <p className="text-[7px] lg:w-45 w-30  lg:text-xs bg-white/20 border-1 border-white/50  p-2 rounded-full text-white">
                  Academic reading strategies
                </p>
                <p className="text-[7px] lg:w-40 w-30  lg:text-xs bg-white/20 border-1 border-white/50  p-2 rounded-full text-white">
                  Speaking confidence
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/40 rotate-1 h-45 w-45 lg:mr-20 lg:mt-20 rounded-[20px] relative lg:left-0 left-20 flex flex-col justify-center">
            <span className="text-center text-sm">Common Target</span>
            <span className="text-center text-3xl font-bold text-white">
              6.0-7.8+
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {courses.map((item, index) => (
          <div
            key={index}
            className="rounded-[22px] border border-gray-200 p-5
      bg-white hover:shadow-lg hover:-translate-y-1
      transition-all duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-black text-blue-400
        flex items-center justify-center text-xl font-bold mb-3"
            >
              {item.icon}
            </div>

            <p className="text-[9px] font-bold tracking-[2px] text-blue-500 mb-2">
              {item.tag}
            </p>

            <h3 className="text-xl font-semibold text-[#101A3A] mb-3">
              {item.title}
            </h3>

            <p className="text-xs leading-6 text-gray-500 mb-6">
              {item.description}
            </p>

            <a
              href="#"
              className="text-[11px] font-bold text-[#102A35]
        hover:text-orange-500 transition-colors"
            >
              {item.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
