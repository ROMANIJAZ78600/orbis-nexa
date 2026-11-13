"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import { FaComment, FaFileLines, FaMeteor } from "react-icons/fa6";

const griddata = [
  {
    icon: FaMeteor,
    head: "Student profile guidance",
    p: "A thoughtful conversation about each student’s background, goals and suitable study directions.",
  },
  {
    icon: FaFileLines,
    head: "Application preparation",
    p: "Guidance on organising student information and planning the steps towards an application.",
  },
  {
    icon: FaComment,
    head: "Clear Communication",
    p: "Discuss responsibilities, student updates and practical next steps with the SAG team.",
  },
  {
    icon: Globe2,
    head: "A shared education focus",
    p: "Build a working relationship around relevant study options and better-informed student decisions.",
  },
];

export default function WorkWithOrbis() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0265aa] via-blue-500 to-[#0265aa] py-16 px-4 sm:px-6 lg:px-12">
      <div className="flex lg:flex-row flex-col gap-10 justify-between">
        <div className="min-w-0 ">
          <p className="relative flex items-center gap-3 tracking-[0.1em] lg:w-65 w-55 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full  lg:text-black/50 text-sm">
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
            Work With Orbis Nexa
          </p>
          <h2 className="lg:text-6xl text-2xl lg:w-90 mt-3 text-white">
            More than an introduction. A shared way forward.
          </h2>
          <p className="lg:w-90 mt-3 text-gray-300">
            Good partnerships need clear roles, useful guidance and honest
            conversations. Let’s bring those into the way we support students.
          </p>
          <button className="mt-3 group inline-flex items-center cursor-pointer gap-3 rounded-xl bg-[#0265AA] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA]">
            Let's Talk PartnerShip{" "}
            <ArrowRight size={20} className="group-hover:ml-3 duration-200" />
          </button>
        </div>
        <div className="min-w-0 lg:mt-10 lg:mr-10">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
            {griddata.map((d, index) => {
              const Icon = d.icon;
              return (
                <div
                  key={index}
                  className="bg-blue-400/50 lg:w-70 w-full h-45 border-1 border-black/40 rounded-[15px] hover:border-1 hover:border-[#0265aa] hover:bg-blue-400/90"
                >
                  <div className="flex flex-col gap-3 p-5">
                    <Icon size={20} color="#fff" />
                    <span className="font-semibold text-white tracking-[1px]">
                      {d.head}
                    </span>
                    <p className="text-sm text-gray-300">{d.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
