"use client";

import { motion } from "framer-motion";

export default function Steps() {
  return (
    <section className="relative w-full bg-[#F3F7F4] py-16 px-4 sm:px-6 lg:px-12 lg:mt-20">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="min-w-0">
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
            THE ORBIS BUILDER
          </p>

          <h1 className="mt-3 lg:text-5xl text-3xl font-bold">
            Not more homework. <br />{" "}
            <span className="italic text-[#0265aa] font-light">
              Better decisions.
            </span>
          </h1>
          <p className="mt-3 text-gray-600 lg:w-120">
            Strong IELTS preparation is a feedback system. Every practice task
            should reveal what to fix, what to repeat and what to stop doing.
          </p>

          <div className="flex flex-col gap-1 p-5 border-l-4 mt-3 border-orange-400 h-20 bg-blue-900 rounded-tr-[20px] rounded-br-[20px]">
            <span className="uppercase text-xs text-white font-bold">
              Your target
            </span>
            <span className="text-[13px] lg:text-sm text-white leading-6">
              Turn weak patterns into repeatable exam skills.
            </span>
          </div>
        </div>

        <div className="min-w-0 lg:mr-5 lg:mb-7">
          <div className="lg:w-50 h-20 bg-white shadow-md p-3 lg:mt-0 mt-5 border-1 border-black/30 rounded-full relative lg:right-110 shadow-md">
            <span className="bg-black text-blue-400 p-3 rounded-full relative top-3">
              01
            </span>
            <span className="lg:text-2xl ml-3 text-xl relative top-3">
              Diagnose
            </span>
          </div>
          <div className="lg:w-50 h-20 bg-white shadow-md p-3 lg:mt-0 mt-5 border-1 border-black/30 rounded-full relative lg:right-80 lg:top-3 shadow-md">
            <span className="bg-black text-blue-400 p-3 rounded-full relative top-3">
              02
            </span>
            <span className="lg:text-2xl ml-3 text-xl relative top-3">
              Build
            </span>
          </div>
          <div className="lg:w-50 h-20 bg-white shadow-md p-3 lg:mt-0 mt-5 border-1 border-black/30 rounded-full relative lg:right-50 lg:top-6 shadow-md">
            <span className="bg-black text-blue-400 p-3 rounded-full relative top-3">
              03
            </span>
            <span className="lg:text-2xl ml-3 text-xl relative top-3">
              Drill
            </span>
          </div>
          <div className="lg:w-50 h-20 bg-white shadow-md p-3 lg:mt-0 mt-5 border-1 border-black/30 rounded-full relative lg:right-20 lg:top-10 shadow-md">
            <span className="bg-black text-blue-400 p-3 rounded-full relative top-3">
              04
            </span>
            <span className="lg:text-2xl ml-3 text-xl relative top-3">
              Simulate
            </span>
          </div>
          <div className="lg:w-50 h-20 bg-white shadow-md p-3 lg:mt-0 mt-5 border-1 border-black/30 rounded-full relative lg:right-[-20px] lg:top-15 shadow-md">
            <span className="bg-black text-blue-400 p-3 rounded-full relative top-3">
              05
            </span>
            <span className="lg:text-2xl ml-3 text-xl relative top-3">
              Refine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
