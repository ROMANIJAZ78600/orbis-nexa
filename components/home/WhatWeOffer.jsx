"use client";
import { ArrowUpRight, Check, Command, Sparkles, Star } from "lucide-react";
import { FaPencil } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function WhatWeOffer() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      {/* header */}
      <div className="mx-auto max-w-4xl text-center mb-12">
        <p className="relative flex items-center mx-auto gap-3 tracking-[0.1em] w-fit max-w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-2 rounded-full text-black/50 text-xs sm:text-sm">
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
          What We Offer
        </p>
        <h2 className="lg:text-5xl text-3xl font-bold mt-4">
          Everything You Need to{" "}
          <span className="text-[#0265AA]">Study Abroad</span>
        </h2>
        <p className="lg:text-[20px] text-lg text-gray-600 mt-4">
          From expert counselling to settling into your new destination, we
          provide complete support for your international education journey.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-15">
        <div className="flex flex-wrap lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 justify-center items-center mx-auto">
          {/* card1 */}
          <div className="group active w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 active:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br active:bg-gradient-to-br active:from-blue-800 hover:from-blue-800 hover:via-blue-400 active:via-blue-400 hover:to-blue-600 active:to-blue-600 transition-all duration-300 active:duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300 active:text-gray-300 ">
                01
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 active:border-white/50 group-hover:text-white active:group-hover:text-white">
                <Sparkles />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300 active:text-gray-300 transition-colors duration-200 select-none tap-highlight-transparent">
                Career <br /> Counseling
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Understand your options and choose the right country, course,
                and career direction.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white active:group-hover:text-white">
                Learn More
              </span>
              <ArrowUpRight className="group-hover:text-white active:group-hover:text-white" />
            </button>
          </div>

          {/* card 2 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                02
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <Command />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                University & <br /> Course Selection
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Find the universities and programmes that best match your goals,
                profile, and budget.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>

          {/* card 3 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                03
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <Check />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Application <br /> Assistance
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Get complete support with applications, documentation, and
                university submissions.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>

          {/* card 4 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                04
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <FaPencil />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                SOP & LOR <br /> Guidance
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Get complete support with applications, documentation, and
                university submissions.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>
          {/* card 5 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                05
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <Sparkles />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Career <br /> Counseling
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Understand your options and choose the right country, course,
                and career direction.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>

          {/* card 6 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                06
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <Command />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                University & <br /> Course Selection
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Find the universities and programmes that best match your goals,
                profile, and budget.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>

          {/* card 7 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                07
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <Check />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Application <br /> Assistance
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Get complete support with applications, documentation, and
                university submissions.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>

          {/* card 8 */}
          <div className="group w-80 h-80 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                08
              </p>
              <span className="border-1 border-black/50 p-2 rounded-full mr-5 group-hover:border-white/50 group-hover:text-white">
                <FaPencil />
              </span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                SOP & LOR <br /> Guidance
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Get complete support with applications, documentation, and
                university submissions.
              </p>
            </div>

            <button className="flex gap-40 p-5 items-center justify-between">
              <span className="ml-2 group-hover:text-white">Learn More</span>
              <ArrowUpRight className="group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
