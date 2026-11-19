"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaBuilding, FaUserFriends } from "react-icons/fa";
import { FaComment, FaGraduationCap } from "react-icons/fa6";

const carddata = [
  {
    week: "4",
    number: "Focused Start",
    head: "Band Foundation",
    p: "For students who need a short, focused preparation cycle before their test.",
    li1: "Four-skill diagnostic",
    li2: "Core technique sessions",
    li3: "Sectional practice",
    li4: "Progress review",
    fee: "Ask For Current Fee",
    btn: "Check Suitability",
  },
  {
    week: "6",
    number: "COMPLETE PREP",
    head: "Target Band Builder",
    p: "A balanced programme for technique, guided practice, correction and mock performance.",
    li1: "Personal band roadmap",
    li2: "Writing feedback cycles",
    li3: "Speaking mock sessions",
    li4: "Timed full mock tests",
    fee: "Ask For Current Fee",
    btn: "Reserve Assesment",
  },
  {
    week: "8",
    number: "DEEP PRACTICE",
    head: "Education Providers",
    p: "For students who need stronger language development alongside complete test preparation.",
    li1: "Foundation rebuilding",
    li2: "Extended skill practice",
    li3: "Weekly progress analytics",
    li4: "Final readiness review",
    fee: "Ask For Current Fee",
    btn: "Discuss my plan",
  },
];

export default function Preparation() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <p className="relative flex items-center gap-3 tracking-[0.1em] w-65 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full text-blue-500 lg:text-black/50 text-sm">
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
        Choose Your Preparation
      </p>

      <div className="flex lg:flex-row flex-col gap-3 mt-2 items-center justify-between">
        <h2 className="lg:text-4xl text-2xl font-semibold lg:w-140">
          Choose your preparation{" "}
          <span className="text-[#0265aa] italic font-light">intensity.</span>
        </h2>
        <p className="text-gray-600 lg:w-120 text-sm">
          Final recommendation depends on your diagnostic result, target band
          and available preparation time.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center gap-3 mt-8 cursor-pointer">
        <p className="absolute lg:left-180 left-50 lg:bottom-137 bottom-250 text-sm tracking-wide bg-blue-400/80 p-2 rounded-4xl text-white">
          Recommended
        </p>
        {/* first */}
        {carddata.map((card, index) => {
          return (
            <div
              key={index}
              className={` lg:w-[30%] w-full border-1 border-blue-400/40 ${card.number === "COMPLETE PREP" ? "bg-blue-400/10" : "bg-white/70"} shadow-md lg:p-10 p-7 rounded-[15px] hover:-translate-y-1 duration-200`}
            >
              <div className="flex justify-between items-center border-b pb-2 border-black/20 gap-5">
                <p className="lg:text-xs text-xs text-gray-300">
                  {card.number}
                </p>
                <p className="lg:text-3xl text-xl font-bold">
                  {card.week} <span className="text-sm font-light">weeks</span>
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-10">
                <h6 className="lg:text-xl text-lg font-semibold">
                  {card.head}
                </h6>
                <p className="text-gray-600 text-xs">{card.p}</p>
              </div>

              <ol className="flex flex-col gap-2 mt-5">
                <li className="flex gap-3 text-sm items-center">
                  <Check size={15} color="green" />
                  <p>{card.li1}</p>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Check size={15} color="green" />
                  <p>{card.li2}</p>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Check size={15} color="green" />
                  <p>{card.li3}</p>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Check size={15} color="green" />
                  <p>{card.li4}</p>
                </li>
              </ol>

              <div className="mt-5 border-t flex flex-col gap-3 border-black/20 pt-5">
                <span className="text-xs text-blue-400">FEE</span>
                <span className="font-bold text-lg">{card.fee}</span>
                <a href="#Assesment">
                  <button className="flex gap-3 text-xs">
                    {card.btn} <ArrowRight size={15} />
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center mt-3">
        Programme length is indicative. Your recommended plan may change after
        the diagnostic assessment.
      </p>
    </section>
  );
}
