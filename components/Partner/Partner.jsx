"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { FaHandshake, FaUsers } from "react-icons/fa6";

const inputClass =
  "lg:w-70 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

const selectClass =
  "lg:w-70 w-full  appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 outline-none transition-all duration-200 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative mt-[100px] md:mt-[120px] min-h-[700px] w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-blue-500 to-[#0265aa]">
        <div className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 lg:px-0">
          {/* LEFT CONTENT - ORIGINAL DESIGN */}
          <div className="min-w-0">
            <p className="text-white lg:p-15 p-7">
              Home / <span className="text-blue-950">Become a Partner</span>
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
                Orbis Partners Network
              </p>

              <h1 className="lg:text-6xl lg:max-w-[560px] text-3xl sm:text-4xl font-semibold text-white">
                Become a Partner. Build futures together.{" "}
              </h1>

              <p className="lg:max-w-[560px] text-gray-300 leading-7 text-sm sm:text-base">
                Partner with Study Apex Global to help more students explore the
                right international study opportunities. Bring your local
                knowledge. Let’s build the next step together.
              </p>

              <div className="flex lg:flex-row flex-col gap-3">
                <button className="group inline-flex items-center gap-3 rounded-xl bg-[#0265AA] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA]">
                  Become a Partner
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
                <button className="group inline-flex items-center gap-3 rounded-xl border-2 border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0265AA]">
                  Explore Partnerships
                </button>
              </div>

              {/* RESPONSE TIME */}
              <p className="flex gap-2 items-center text-gray-300">
                {" "}
                <FaUserFriends size={25} color="blue" /> For education agents,
                counsellors and institutions.
              </p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative lg:p-15 mb-25 lg:mb-0"
          >
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=85"
              alt="Partners"
              className="lg:w-[650px] rounded-[25px] rotate-1 lg:mt-15 object-cover"
            />

            <div className="absolute z-20 bottom-15 left-10 lg:bottom-65 lg:left-20 rotate-1">
              <p className="uppercase text-white tracking-[0.2em] text-sm">
                One Shared Goal
              </p>
              <p className="font-bold text-white text-2xl lg:text-4xl">
                Better Journeys.
              </p>
              <p className="font-bold text-white text-2xl lg:text-4xl">
                Brighter futures.
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute lg:right-25 lg:top-125 lg:p-7 p-5 flex gap-5 items-center rotate-1 rounded-[15px] bg-[#0265aa] lg:w-[585px] lg:h-25 w-[310px] h-20 top-[850px] right-6"
          >
            <FaHandshake size={35} color="#ffffff" />
            <div>
              <p className="font-bold lg:text-3xl text-white">
                Your network. Our guidance.
              </p>
              <span className="text-gray-300">
                A partnership built around student progress.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
