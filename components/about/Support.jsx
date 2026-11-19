"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin, Plane, Search } from "lucide-react";
import {
  FaFileLines,
  FaGraduationCap,
  FaPassport,
  FaTrophy,
} from "react-icons/fa6";

export default function Support() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] py-16 px-4 sm:px-6 lg:px-12">
      <p className="relative  flex items-center gap-3 tracking-[0.1em] w-59 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full text-black/50 text-sm">
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
        End-to-End Support
      </p>
      <h2 className="lg:text-6xl text-3xl lg:w-220 lg:leading-16 mt-3 font-semibold">
        Everything you need to move from{" "}
        <span className="text-blue-400">confusion to confidence.</span>
      </h2>
      <p className="text-gray-300  mt-2 lg:text-lg mt-5">
        One connected support journey—from understanding your profile to
        preparing for life at your chosen destination.
      </p>

      <div className="p-7 flex flex-wrap gap-5">
        {/* first */}
        <div className="lg:w-[60%] lg:h-90 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center justify-between lg:p-15 p-7 lg:gap-0 gap-17">
            <p className="text-gray-600">01</p>
            <Search
              color="#ffffff"
              className="lg:w-15 lg:h-15 w-10 h-10 bg-white/40 p-2 border-1 border-white/50 rounded-[15px]"
            />
          </div>
          <div className="relative lg:bottom-20 flex flex-col gap-2 lg:p-15 p-7">
            <h4 className="font-semibold lg:text-3xl text-lg">
              Profile Asessment & Counseling
            </h4>
            <p className="lg:text-lg text-sm text-gray-300">
              We review your education, study gap, English score, goals and
              budget before recommending a direction.
            </p>
            <span className="bg-[#0265aa] lg:w-50 font-semibold text-white w-full p-3 text-center rounded-full hover:scale-95 shadow-md shadow-blue-400/90 cursor-pointer">
              Your Plans Start Here
            </span>
          </div>
        </div>
        <div className="lg:w-[36%] lg:h-90 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center justify-between lg:p-15 p-7 lg:gap-0 gap-17">
            <p className="text-gray-600">02</p>
            <FaGraduationCap
              color="#ffffff"
              className="lg:w-15 lg:h-15 w-10 h-10 bg-white/40 p-2 border-1 border-white/50 rounded-[15px]"
            />
          </div>
          <div className="relative lg:bottom-20 flex flex-col gap-2 lg:p-15 p-7">
            <h4 className="font-semibold lg:text-2xl text-lg">
              Courses & University Matching
            </h4>
            <p className="lg:text-lg text-sm text-gray-300 ">
              Shortlisting built around academic fit, career value,
              affordability and entry requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="relative p-7 bottom-10 flex flex-wrap gap-5">
        <div className="lg:w-[32%] lg:h-80 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center justify-between lg:p-15 p-7 lg:gap-0 gap-17">
            <p className="text-gray-600">03</p>
            <FaFileLines
              color="#ffffff"
              className="lg:w-15 lg:h-15 w-10 h-10 bg-white/40 p-2 border-1 border-white/50 rounded-[15px]"
            />
          </div>
          <div className="relative lg:bottom-20 flex flex-col gap-2 lg:p-15 p-7">
            <h4 className="font-semibold lg:text-2xl text-lg">
              Application Management
            </h4>
            <p className="lg:text-lg text-sm text-gray-300">
              Organised document review, application submission and offer-stage
              follow-up.
            </p>
          </div>
        </div>
        <div className="lg:w-[32%] lg:h-80 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center justify-between lg:p-15 p-7 lg:gap-0 gap-17">
            <p className="text-gray-600">04</p>
            <FaTrophy
              color="#ffffff"
              className="lg:w-15 lg:h-15 w-10 h-10 bg-white/40 p-2 border-1 border-white/50 rounded-[15px]"
            />
          </div>
          <div className="relative lg:bottom-20 flex flex-col gap-2 lg:p-15 p-7">
            <h4 className="font-semibold lg:text-2xl text-lg">
              ScholarShip Guidance
            </h4>
            <p className="lg:text-lg text-sm text-gray-300">
              Support in identifying suitable funding opportunities and
              preparing eligible applications.
            </p>
          </div>
        </div>
        <div className="lg:w-[32%] lg:h-80 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center justify-between lg:p-15 p-7 lg:gap-0 gap-17">
            <p className="text-gray-600">06</p>
            <FaPassport
              color="#ffffff"
              className="lg:w-15 lg:h-15 w-10 h-10 bg-white/40 p-2 border-1 border-white/50 rounded-[15px]"
            />
          </div>
          <div className="relative lg:bottom-20 flex flex-col gap-2 lg:p-15 p-7">
            <h4 className="font-semibold lg:text-2xl text-lg">
              Visa Preparation
            </h4>
            <p className="lg:text-lg text-sm text-gray-300">
              Guidance for documents, financial evidence, credibility interviews
              and submission readiness.
            </p>
          </div>
        </div>
        <div className="lg:w-[100%] lg:h-80 w-full bg-blue-200/20 border-2 border-blue-400/50 rounded-[15px] cursor-pointer">
          <div className="relative lg:bottom-3 flex items-center lg:p-15 p-7">
            <p className="text-gray-600">06</p>
          </div>
          <div className="relative bottom-3 flex lg:flex-row flex-col lg:gap-20 lg:p-15 p-7">
            <div className="flex flex-col">
              <h4 className="font-semibold lg:text-2xl text-lg">
                Pre-Departure & Arrival Support
              </h4>
              <p className="lg:text-lg text-sm text-gray-300 lg:w-150">
                Practical preparation for travel, accommodation, enrolment and
                settling into your new study environment.
              </p>
            </div>

            <div className="flex items-center w-full lg:mt-0 mt-20 px-2">
              {/* Pakistan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center 
    shrink-0 lg:w-20 lg:h-20 w-14 h-14 rounded-full 
    border border-[#0265AA]/40 bg-white shadow-lg"
              >
                <MapPin className="text-[#0265AA] lg:w-6 lg:h-6 w-5 h-5" />
                <span className="text-[10px] lg:text-xs font-bold text-gray-700 uppercase">
                  PK
                </span>
              </motion.div>

              {/* Animated Flight Route */}
              <div className="relative flex-1 hidden lg:block h-28 mx-2 lg:min-w-0 w-full lg:bottom-0 bottom-25">
                <svg
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full overflow-visible"
                >
                  {/* Background Route */}
                  <path
                    d="M 5 85 C 85 85, 160 10, 295 15"
                    fill="none"
                    stroke="#0265AA"
                    strokeWidth="2"
                    strokeDasharray="5 7"
                    opacity="0.2"
                  />

                  {/* Animated Route */}
                  <motion.path
                    d="M 5 85 C 85 85, 160 10, 295 15"
                    fill="none"
                    stroke="#0265AA"
                    strokeWidth="2.5"
                    strokeDasharray="5 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  />

                  {/* Plane follows the same route */}
                  <motion.g
                    style={{
                      offsetPath: "path('M 5 85 C 85 85, 160 10, 295 15')",
                    }}
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                  >
                    <foreignObject x="-12" y="-12" width="28" height="28">
                      <div className="text-[#0265AA] ">
                        <Plane strokeWidth={2.5} className="lg:rotate-45" />
                      </div>
                    </foreignObject>
                  </motion.g>
                </svg>
              </div>

              <span className="lg:hidden block w-full">------------------</span>

              {/* World */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center
    shrink-0 lg:w-20 lg:h-20 w-14 h-14 rounded-full
    border border-[#0265AA]/40 bg-white shadow-lg lg:ml-0 ml-auto"
              >
                <Globe2 className="text-[#0265AA] lg:w-6 lg:h-6 w-5 h-5" />
                <span className="text-[10px] lg:text-xs font-bold text-gray-700 uppercase">
                  WORLD
                </span>
              </motion.div>
            </div>
          </div>
          <Plane className="lg:hidden block absolute bottom-30 left-39" />
        </div>
      </div>
    </section>
  );
}
