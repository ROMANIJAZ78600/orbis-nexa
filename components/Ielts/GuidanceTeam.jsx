"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CgArrowLongRight } from "react-icons/cg";

export default function GuidanceTeam() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] py-16 px-4 sm:px-6 lg:px-12 lg:mt-20">
      <div className="flex lg:flex-row flex-col lg:gap-70">
        {/* left */}
        <div className="min-w-0">
          <div
            className="relative mx-auto 
  w-70 h-70 lg:w-100 lg:h-100"
          >
            {/* Ripple Animation */}
            <motion.span
              animate={{
                scale: [1, 1.4],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full 
    border border-blue-400 bg-blue-400/10"
            />

            {/* Main Border */}
            <div
              className="absolute inset-0 rounded-full 
    border border-blue-400/80"
            />

            <div className="bg-gradient-to-br bg-blue-500/80 to-black/40 lg:w-60 lg:h-75 w-50 h-50 relative lg:top-10 top-8 left-10 lg:left-20 rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[20px] rounded-br-[20px] flex flex-col items-center justify-center">
              <h6 className="text-black/40 font-extrabold lg:text-3xl">
                ORBIS NEXA
              </h6>
              <span className="text-sm text-white tracking-[4px]">IELTS</span>
              <span className="absolute lg:top-67 top-45 left-42 lg:left-52 bg-black/40 lg:h-20 h-15 lg:w-30 w-25 p-5 rounded-[5px] -rotate-6 flex flex-col">
                <span className="lg:text-xl text-white font-bold">4-SKILL</span>
                <span className="lg:text-[8px] text-white text-[6px]">
                  EXPERT GUIDANCE
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:mt-0 mt-15">
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
            Meet Your Guidance Team{" "}
          </p>
          <h2 className="lg:text-5xl text-3xl font-bold text-white mt-3">
            Preparation led by <br />{" "}
            <span className="text-blue-400/50 italic font-light">
              strategy, not scripts.
            </span>
          </h2>
          <p className="leading-6 text-gray-300 w-[80%]">
            Our IELTS guidance focuses on genuine language growth,
            examiner-aligned criteria and practical routines students can repeat
            independently. You receive clear direction, honest progress feedback
            and focused preparation for your chosen test route.
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 items-center mt-5 mr-20">
            <p className="text-[7px] lg:w-40 w-30 text-center  lg:text-xs border-1 border-black/50 p-2 rounded-full text-white">
              Diagnostic Planning{" "}
            </p>
            <p className="text-[7px] lg:w-45 w-30 text-center lg:text-xs border-1 border-black/50 p-2 rounded-full text-white">
              Writing Feedback
            </p>
            <p className="text-[7px] lg:w-40 w-30 text-center lg:text-xs border-1 border-black/50 p-2 rounded-full text-white">
              Speaking Practice
            </p>
            <p className="text-[7px] lg:w-40 w-30 text-center lg:text-xs border-1 border-black/50 p-2 rounded-full text-white">
              Mock Analysis
            </p>
          </div>
          <button className="group flex mt-10 gap-3 bg-white text-black px-4 py-3 font-bold cursor-pointer rounded-full  shadow-white/50 hover:shadow-lg duration-200">
            Meet IELTS Team{" "}
            <ArrowUpRight className="relative group-hover:bottom-2 duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
