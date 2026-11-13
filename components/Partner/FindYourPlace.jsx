"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaBuilding, FaUserFriends } from "react-icons/fa";
import { FaComment, FaGraduationCap } from "react-icons/fa6";

const carddata = [
  {
    icon: FaUserFriends,
    number: "01",
    head: "Refferal Partners",
    p: "Know students who are considering studying abroad? Connect them with SAG for a more informed next step.",
    li1: "Independent counsellors & educators",
    li2: "Community networks & student mentors",
    li3: "A clear introduction and handover",
  },
  {
    icon: FaBuilding,
    number: "02",
    head: "Education Agencies",
    p: "Combine your local relationships with SAG guidance to support student enquiries and application planning.",
    li1: "Study abroad agencies & consultants",
    li2: "Small teams and growing businesses",
    li3: "A coordinated approach to student cases",
  },
  {
    icon: FaGraduationCap,
    number: "03",
    head: "Education Providers",
    p: "Give your students a route to explore international education with support beyond the classroom.",
    li1: "chools, colleges & universities",
    li2: "IELTS & language training centres",
    li3: "Student guidance and collaboration",
  },
];

export default function FindYourPlace() {
  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
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
        Find Your Place
      </p>

      <div className="flex lg:flex-row flex-col gap-3 mt-2 items-center justify-between">
        <h2 className="lg:text-6xl text-4xl font-semibold lg:w-150">
          Different strengths. One shared direction.{" "}
        </h2>
        <p className="text-gray-600 lg:w-120 text-lg">
          Choose the route that reflects your work. We’ll discuss how a
          partnership could fit your students and your goals.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-3 mt-5">
        {/* first */}
        {carddata.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className={` lg:w-[32%] w-full border-1 border-blue-400/40 ${card.number === "02" ? "bg-blue-400/10" : "bg-white/70"} shadow-md lg:p-10 p-7 rounded-[15px] hover:-translate-y-1 duration-200`}
            >
              <div className="flex justify-between">
                <Icon size={35} color="gray" />
                <p className="lg:text-lg text-sm text-gray-300">
                  {card.number}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-10">
                <h6 className="lg:text-3xl text-2xl font-semibold">
                  {card.head}
                </h6>
                <p className="text-gray-600">{card.p}</p>
              </div>

              <ol className="flex flex-col gap-3 mt-10">
                <li className="flex gap-3 text-sm items-center">
                  <Check size={20} color="green" />
                  <p>{card.li1}</p>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Check size={20} color="green" />
                  <p>{card.li2}</p>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Check size={20} color="green" />
                  <p>{card.li3}</p>
                </li>
              </ol>

              <button className="group mt-10 flex gap-3 items-center cursor-pointer text-sm font-semibold">
                Explore this partnership{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:ml-2 duration-200"
                />
              </button>
            </div>
          );
        })}
      </div>

      <p className="text-sm flex items-center gap-3 mt-10">
        <FaComment size={20} color="#0265aa" /> Not sure where you fit? Tell us
        about your work and we’ll talk it through.
      </p>
    </section>
  );
}
