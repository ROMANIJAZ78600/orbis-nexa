"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { CgArrowLongRight } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { FaHandshake, FaUsers } from "react-icons/fa6";

const inputClass =
  "lg:w-70 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

const selectClass =
  "lg:w-70 w-full  appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 outline-none transition-all duration-200 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative w-full">
      <div className="relative mt-[100px] md:mt-[120px] lg:min-h-[700px] min-h-[1020px] w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f]">
        <div className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 lg:px-0">
          {/* LEFT CONTENT - ORIGINAL DESIGN */}
          <div className="min-w-0">
            <p className="text-white lg:p-15 p-7">
              Home / <span className="text-blue-950">Ielts Preparation</span>
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
                Ielts Academic - General
              </p>

              <h1 className="lg:text-6xl lg:max-w-[560px] text-3xl sm:text-4xl font-semibold text-white">
                Train with purpose. Score with confidence.
              </h1>

              <p className="lg:max-w-[560px] text-gray-300 leading-7 text-sm sm:text-base">
                Move beyond random practice. Start with a diagnostic, build a
                personal band roadmap and prepare every skill with focused
                feedback, timed drills and realistic mock tests.
              </p>

              <div className="flex lg:flex-row flex-col gap-3">
                <button
                  onClick={() => router.push("/contact")}
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0265AA] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA]"
                >
                  Get Free Consultation
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="group inline-flex items-center gap-3 rounded-xl border-2 border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0265AA]"
                >
                  Explore Preparation
                </button>
              </div>

              {/* RESPONSE TIME */}
              <ol className="flex lg:flex-row flex-col gap-3 mt-5">
                <li className="flex  items-center gap-2">
                  <Check size={15} className="text-green-400" />
                  <p className="text-white/70 text-xs">Online & On-Campus</p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={15} className="text-green-400" />
                  <p className="text-white/70 text-xs">Personal Study Plan</p>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={15} className="text-green-400" />
                  <p className="text-white/70 text-xs">Four-Skill Feedback</p>
                </li>
              </ol>
            </div>
          </div>

          <div className="min-w-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] border-3 border-dashed border-blue-400/50 rounded-full absolute lg:top-11 lg:right-11 top-170 right-15"
            />
            <motion.div
              initial={{ x: 90 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] border-1  border-blue-400 rounded-full absolute lg:top-24 lg:right-45 top-175 right-44"
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="bg-blue-400/90 border-1 border-black/60 lg:w-110 w-full rounded-[20px] lg:h-50 h-45 rotate-5 relative lg:top-49 lg:right-19"
            >
              <div className="flex justify-between p-3 border-b border-white w-[90%] mx-auto">
                <p className=" text-xs lg:font-bold mt-3 text-white">
                  ORBIS IELTS ROADMAP
                </p>
                <p className=" text-xs lg:font-bold mt-3 text-white">
                  ORBIS PLAN
                </p>
              </div>
              <div className="flex justify-between p-3  border-white w-[90%] mx-auto">
                <p className="flex flex-col text-xs lg:font-bold mt-3 text-white">
                  <span className="text-gray-300">Current Level</span>
                  <span className="lg:text-2xl text-lg">5.8</span>
                </p>
                <CgArrowLongRight className="text-lg lg:text-2xl relative top-7" />
                <p className="flex flex-col text-xs lg:font-bold mt-3 text-white">
                  <span className="text-gray-300">Target Band</span>
                  <span className="lg:text-2xl text-lg">
                    8 <span className="text-green-400/90">+</span>
                  </span>{" "}
                </p>
              </div>

              <div className="flex gap-3 border-t border-white w-[90%] mx-auto">
                <p className="text-xs mx-auto mt-3 lg:mt-5 text-white border-r w-full">
                  Listening
                </p>
                <p className="text-xs mx-auto mt-3 lg:mt-5 text-white border-r w-full">
                  Reading
                </p>
                <p className="text-xs mx-auto mt-3 lg:mt-5 text-white border-r w-full">
                  Writinig
                </p>
                <p className="text-xs mx-auto mt-3 lg:mt-5 text-white ">
                  Speaking
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="flex flex-col gap-2 text-xs border-1 border-black/50 bg-blue-400/50 w-30 p-2 rounded-[20px] justify-center items-center relative lg:bottom-30 lg:left-50 bottom-65 left-48"
            >
              <span className="lg:text-2xl text-xl font-bold">40+</span>
              <span className="text-white">Mock & Skills</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="flex flex-col gap-2 text-xs border-1 border-black/50 bg-blue-400/50 w-35 p-2 rounded-[20px] justify-center items-center relative lg:top-35 lg:right-25 -top-18"
            >
              <span className="lg:text-2xl text-xl font-bold">1:1</span>
              <span className="text-white">Progress feedback</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="absolute hidden lg:grid grid-cols-4 items-center 
  -bottom-16 left-1/2 -translate-x-1/2
  w-[85%] max-w-5xl h-32
  rounded-2xl bg-white/95 backdrop-blur-xl
  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
  border border-gray-100 z-[9999] overflow-hidden"
      >
        {[
          {
            title: "Complete Preparation",
            number: "4",
            label: "IELTS Skills",
            icon: "📚",
          },
          {
            title: "Expert Guidance",
            number: "10+",
            label: "Years Experience",
            icon: "🎓",
          },
          {
            title: "Student Success",
            number: "95%",
            label: "Success Rate",
            icon: "🏆",
          },
          {
            title: "Flexible Learning",
            number: "24/7",
            label: "Learning Support",
            icon: "🌍",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 px-6 h-full
      transition-all duration-300 hover:bg-gray-50 group"
          >
            <div
              className="w-12 h-12 shrink-0 rounded-xl bg-blue-50
        flex items-center justify-center text-2xl
        group-hover:scale-110 group-hover:bg-blue-100
        transition-all duration-300"
            >
              {item.icon}
            </div>

            <div className="flex flex-col gap-1">
              <p
                className="text-[11px] uppercase tracking-wider
          font-semibold text-gray-400"
              >
                {item.title}
              </p>

              <span
                className="text-3xl font-bold text-gray-900
          tracking-tight"
              >
                {item.number}
              </span>

              <span className="text-xs text-gray-500 font-medium">
                {item.label}
              </span>
            </div>

            {index !== 3 && (
              <div className="absolute right-0 top-7 h-16 w-px bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
