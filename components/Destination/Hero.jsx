"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { FaHandshake, FaUsers } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full h-full">
      <div className="relative mt-[100px] md:mt-[120px] min-h-[700px]  w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f]">
        <div className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 lg:px-0">
          {/* LEFT CONTENT - ORIGINAL DESIGN */}
          <div className="min-w-0">
            <p className="text-white lg:p-15 p-7">
              Home / <span className="text-blue-950">Destinations</span>
            </p>

            <div className="relative lg:bottom-20 bottom-10 flex flex-col gap-5 lg:p-10 p-5 lg:ml-5">
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
                Our Destinations
              </p>
              <h1 className="lg:text-6xl lg:max-w-[560px] text-3xl sm:text-4xl font-semibold text-white">
                One Profile. <br />{" "}
                <span className="italic font-light text-blue-400">
                  A world of possibilities.
                </span>
              </h1>
              <p className="lg:max-w-[560px] text-gray-300 leading-7 text-sm sm:text-base">
                Explore international study destinations through a clearer lens.
                ORBIS helps you match your academics, budget and goals with the
                country that fits your journey.
              </p>
              <div className="flex lg:flex-row flex-col gap-3">
                <button className="group inline-flex items-center gap-3 rounded-xl bg-[#0265AA] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA] active:bg-[#7ed9fd] active:text-[#0265AA]">
                  Explore Destinations
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
                <button className="group inline-flex items-center gap-3 rounded-xl border-2 border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0265AA] active:bg-white active:text-[#0265aa]">
                  Get Expert Guidance
                </button>
              </div>
              {/* RESPONSE TIME */}{" "}
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
                Profile-led counselling. Clear options. Honest guidance.
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:mb-0 mb-10">
            <div className="relative w-65 h-65 lg:w-100 lg:h-100 mx-auto lg:top-25 lg:right-30 flex items-center justify-center">
              <div className="absolute w-70 h-70 lg:w-110 lg:h-110 bg-transparent border-1 border-dashed border-blue-300 rounded-full" />
              {/* Circle 1: Outer Border */}
              <div className="absolute w-65 h-65 lg:w-100 lg:h-100 bg-transparent border border-blue-300 rounded-full" />

              {/* Circle 2: Gradient Fill */}
              <div className="absolute w-60 h-60 lg:w-95 lg:h-95 bg-gradient-to-tr from-blue-100/10 to-blue-200/20 border border-blue-300 rounded-full" />

              {/* Circle 3: Rotate Y */}
              <div className="absolute w-59 h-59 lg:w-94 lg:h-94 rotate-y-60 bg-transparent border border-blue-300 rounded-full" />

              {/* Circle 4: Rotate X */}
              <div className="absolute w-59 h-59 lg:w-94 lg:h-94 rotate-x-60 bg-transparent border border-blue-300 rounded-full" />
            </div>
            <p className="flex flex-col gap-5 absolute lg:top-60 lg:right-50 top-190 right-27 font-extrabold text-slate-300/30 lg:text-6xl text-5xl">
              ORBIS{" "}
              <span className="text-xs text-slate-300 font-light tracking-wide relative bottom-3 mx-auto">
                GLOBAL STUDY MAP
              </span>
            </p>
            <div className="absolute lg:top-20 top-155 lg:right-100 p-2 flex gap-2 items-center bg-white/20 border-1 border-white/50 rounded-xl">
              <img
                src={"https://flagcdn.com/w40/gb.png"}
                alt=""
                className="lg:w-10 h-5 w-5"
              />
              <span className="flex flex-col font-bold text-white text-sm">
                United Kingdom{" "}
                <span className=" lg:text-xs text-[9px] text-slate-300 font-light tracking-wide">
                  Popular Choice
                </span>
              </span>
            </div>
            <div className="absolute lg:top-35 top-160 lg:right-10 right-5 p-2 flex gap-2 items-center bg-white/20 border-1 border-white/50 rounded-xl">
              <img
                src={"https://flagcdn.com/w40/au.png"}
                alt=""
                className="lg:w-10 h-5 w-5"
              />
              <span className="flex flex-col font-bold text-white text-sm">
                Australia{" "}
                <span className=" lg:text-xs text-[9px] text-slate-300 font-light tracking-wide">
                  Popular Choice
                </span>
              </span>
            </div>
            <div className="absolute lg:top-90 top-220 lg:right-115 p-2 flex gap-2 items-center bg-white/20 border-1 border-white/50 rounded-xl">
              <img
                src={"https://flagcdn.com/w40/ge.png"}
                alt=""
                className="lg:w-10 h-5 w-5"
              />
              <span className="flex flex-col font-bold text-white text-sm">
                Germany{" "}
                <span className="lg:text-sm text-[9px] text-slate-300 font-light tracking-wide">
                  Popular Choice
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center absolute lg:top-100 top-210 lg:right-20 right-3 bg-blue-500/90 rounded-full p-3 lg:w-27 lg:h-27 w-20 h-20 -rotate-8">
              <div className="flex gap-1 text-white">
                {" "}
                <span className="font-bold lg:text-4xl text-xl">15</span>{" "}
                <span className="lg:text-[9px] text-[7px] font-bold text-slate-300">
                  Destinations <br /> to Explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-[80%] w-[89%] lg:h-30 h-45 rounded-[15px] mx-auto z-[10] relative lg:bottom-15 bottom-6 shadow-md shadow-black/40">
        <div className="p-10 flex flex-wrap gap-6 lg:w-full lg:justify-center">
          <div className="flex flex-col items-center lg:border-r lg:pr-15 lg:border-black/40 ">
            <span className="lg:text-2xl font-bold text-sm ">15</span>
            <span className="text-slate-300 text-[10px] lg:text-sm uppercase">
              Global Destinations
            </span>
          </div>
          <div className="flex flex-col items-center justify-center lg:border-r lg:pr-15  lg:border-black/40 ">
            <span className="lg:text-2xl font-bold text-sm">Profile</span>
            <span className="text-slate-300 text-[9px] lg:text-sm uppercase">
              Lead Recommendation
            </span>
          </div>
          <div className="flex flex-col items-center lg:border-r lg:pr-15  lg:border-black/40 ">
            <span className="lg:text-2xl font-bold text-sm">Clear</span>
            <span className="text-slate-300 text-[10px] lg:text-sm">
              APPLICATION ROADMAP
            </span>
          </div>
          <div className="flex flex-col items-center lg:pr-15">
            <span className="lg:text-2xl font-bold text-sm">End-to-End</span>
            <span className="text-slate-300 text-[10px] lg:text-sm">
              Student Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
