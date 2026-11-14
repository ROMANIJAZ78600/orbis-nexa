"use client";
import { ArrowUpRight, Check, Command, Sparkles, Star } from "lucide-react";
import { FaBook, FaEarListen, FaMicrophone, FaPencil } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdVoiceChat, MdVoiceOverOff } from "react-icons/md";
export default function FourSkills() {
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
          FOUR SKILLS · ONE STRATEGY
        </p>
        <h2 className="lg:text-5xl text-3xl font-bold mt-4">
          Master every module <br />
          <span className="text-[#0265AA] italic">Connect the score.</span>
        </h2>
        <p className="lg:text-[20px] text-lg text-gray-600 mt-4">
          Each skill gets its own training plan, but your final roadmap keeps
          all four moving towards the same target.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-15">
        <div className="flex flex-wrap lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 justify-center items-center mx-auto">
          {/* card1 */}
          <div className="group w-70 h-100 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                01
              </p>
              <span className="p-5 group-hover:text-white">≈30 MIN</span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <span>
                <FaEarListen
                  size={25}
                  className="text-black group-hover:text-white"
                />
              </span>
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Listening
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Train prediction, signposting, spelling, concentration and
                answer transfer through timed audio practice.
              </p>

              <div className="bg-white w-full h-2 rounded-full relative top-5" />
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-green-400 w-[80%] z-10 relative top-1 h-2 rounded-full"
              />
              <p className="text-xs mt-5">4 parts · 40 questions</p>
            </div>
          </div>

          {/* card2 */}
          <div className="group w-70 h-100 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                02
              </p>
              <span className="p-5 group-hover:text-white">60 MIN</span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <span>
                <FaBook
                  size={25}
                  className="text-black group-hover:text-white"
                />
              </span>
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Reading
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Build skimming, scanning, evidence matching and time control
                across common question types.
              </p>

              <div className="bg-white w-full h-2 rounded-full relative top-5" />
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-green-400 w-[75%] z-10 relative top-1 h-2 rounded-full"
              />
              <p className="text-xs mt-5">3 sections · 40 questions</p>
            </div>
          </div>

          {/* card 3 */}

          <div className="group w-70 h-100 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                03
              </p>
              <span className="p-5 group-hover:text-white">60 MIN</span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <span>
                <FaPencil
                  size={25}
                  className="text-black group-hover:text-white"
                />
              </span>
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Writing
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Develop task response, coherence, vocabulary and grammar with
                structured correction and rewriting.
              </p>

              <div className="bg-white w-full h-2 rounded-full relative top-5" />
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "65%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-green-400 w-[65%] z-10 relative top-1 h-2 rounded-full"
              />
              <p className="text-xs mt-5">2 tasks · detailed feedback</p>
            </div>
          </div>

          {/* card 4 */}

          <div className="group w-70 h-100 bg-blue-100 rounded-[20px] cursor-pointer border-1 border-blue-200 hover:scale-105 duration-300 shadow-md shadow-blue-200 hover:bg-gradient-to-br hover:from-blue-800 hover:via-blue-400 hover:to-blue-600 transition-all duration-300">
            <div className="flex gap-10 items-center justify-between mt-5 ml-5">
              <p className="text-gray-600 font-bold group-hover:text-gray-300">
                04
              </p>
              <span className="p-5 group-hover:text-white">11-14 MIN</span>
            </div>

            <div className="flex flex-col gap-2 p-6">
              <span>
                <FaMicrophone
                  size={25}
                  className="text-black group-hover:text-white"
                />
              </span>
              <h6 className="text-[22px] font-bold group-hover:text-gray-300">
                Speaking
              </h6>
              <p className="text-[16px] text-gray-600 group-hover:text-gray-300">
                Improve fluency, idea development, pronunciation and confidence
                through examiner-style practice.
              </p>

              <div className="bg-white w-full h-2 rounded-full relative top-5" />
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-green-400 w-[90%] z-10 relative top-1 h-2 rounded-full"
              />
              <p className="text-xs mt-5">3 parts · live mock practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
