"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Binoculars, Goal, Shield, Sparkles } from "lucide-react";

export default function WhatDrivesUs() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <p className="relative lg:mx-auto flex items-center gap-3 tracking-[0.1em] w-45 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full text-blue-500 lg:text-black/50 text-sm">
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
        What Drives Us
      </p>
      <h2 className="lg:text-6xl text-3xl lg:text-center mt-2 font-semibold">
        Purpose behind every <br /> student journey.
      </h2>
      <p className="text-gray-600 lg:text-center mt-2 lg:text-lg">
        Clear advice, responsible guidance and opportunities selected around the
        student—not a sales target.
      </p>

      {/* cards */}
      <div className="flex lg:flex-row flex-col gap-5 items-center justify-center mt-10">
        {/* First */}
        <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
          <div className="flex gap-10 items-center justify-between mt-5 ml-5">
            <p className="text-gray-600 font-bold group-hover:text-gray-300">
              01
            </p>
            <span className="border-1 border-black/50 p-4 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
              <Goal size={35} />
            </span>
          </div>

          <div className="flex flex-col gap-2 p-6">
            <h6 className="text-[22px] font-bold group-hover:text-gray-300">
              Our Mission
            </h6>
            <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
              To make international education easier to understand and access
              through honest, profile-led counselling and dependable support.
            </p>
          </div>
        </div>
        <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
          <div className="flex gap-10 items-center justify-between mt-5 ml-5">
            <p className="text-gray-600 font-bold group-hover:text-gray-300">
              02
            </p>
            <span className="border-1 border-black/50 p-4 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
              <Binoculars size={35} />
            </span>
          </div>

          <div className="flex flex-col gap-2 p-6">
            <h6 className="text-[22px] font-bold group-hover:text-gray-300">
              Our Vision
            </h6>
            <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
              To become Pakistan’s most student-centred global education
              partner, known for clarity, integrity and meaningful outcomes.
            </p>
          </div>
        </div>
        <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
          <div className="flex gap-10 items-center justify-between mt-5 ml-5">
            <p className="text-gray-600 font-bold group-hover:text-gray-300">
              03
            </p>
            <span className="border-1 border-black/50 p-4 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
              <Shield size={35} />
            </span>
          </div>

          <div className="flex flex-col gap-2 p-6">
            <h6 className="text-[22px] font-bold group-hover:text-gray-300">
              Our Promise
            </h6>
            <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
              Recommendations shaped by your academics, ambitions and
              budget—with transparent communication at every important step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
