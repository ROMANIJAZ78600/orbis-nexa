"use client";
import { motion } from "framer-motion";

const text = "ORBIS NEXA";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const tagscard = [
  {
    number: "5,000+",
    desc: "Students Successfully Placed",
  },
  {
    number: "10+",
    desc: "Years of Experience",
  },
  {
    number: "17",
    desc: "Countries we discovered",
  },
  {
    number: "QEAC",
    desc: "Certified Counsellor",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative mt-[100px] lg:h-[440px] md:mt-[120px] h-[380px] bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f]  w-full overflow-hidden ">
        <p className="text-white lg:p-15 p-10">
          Home / <span className="text-blue-950">About Us</span>
        </p>
        <div className="relative flex  justify-center">
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute lg:top-59 lg:right-5 lg:text-6xl text-2xl top-59 right-2 font-extrabold text-white/20"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </div>
        <div className="relative flex flex-col gap-3 lg:pl-14 pl-8 lg:bottom-10 bottom-5">
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
            Trusted Since 2020
          </p>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 5, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="lg:text-6xl lg:w-200 text-3xl w-80 font-bold text-white"
          >
            Pakistan’s Most Trusted Study Abroad Consultancy
          </motion.h1>
          <p className="text-slate-300 lg:w-200">
            Orbis Nexa helps students explore international education
            opportunities with personalised guidance on universities, admissions
            and student visas.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:h-75 h-full  bg-gray-100 lg:pl-3 pl-5 lg:pt-10 pt-5">
        {/* First */}
        {tagscard.map((tag, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer isolate flex flex-col gap-3 items-center justify-center bg-white w-80 h-50 rounded-[10px] hover:-translate-y-1 transition-all duration-300 lg:mr-6 "
          >
            <div className="absolute top-0 w-1 h-1 lg:block hidden rounded-full bg-[#0265aa] z-[-1] group-hover:w-full duration-300" />
            <div className="absolute bottom-[-15px] right-[-15px] w-20 h-20 group-hover:w-30 group-hover:h-30 duration-300 rounded-full bg-blue-100 group-hover:scale-105 z-[-1]" />
            <span className="font-bold text-4xl">{tag.number}</span>
            <p className="text-gray-600">{tag.desc}</p>
          </div>
        ))}
      </div>
      <div className="h-2 rounded w-[100%] bg-gradient-to-l from-blue-800 via-blue-400/50 to-blue-800" />
    </section>
  );
}
