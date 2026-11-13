"use client";

import { motion } from "framer-motion";

export default function Collaboration() {
  return (
    <section className="relative w-full bg-white z-10 py-16 px-4 sm:px-6 lg:px-12 lg:mb-10">
      <p className="relative flex items-center gap-3 tracking-[0.1em] lg:w-80 w-70 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full  lg:text-black/50 text-sm">
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
        From interest to collaboration
      </p>
      <h2 className="mt-5 lg:text-5xl font-semibold text-3xl">
        A clear start. A practical next step.
      </h2>
      <p className="text-gray-600 mt-5 ">
        Get to know each other, agree on the details and build from there.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-3">
        <div className="lg:w-60 w-full mt-17">
          {/* Mobile: Animated */}

          {/* Desktop: Fixed height */}
          <div className=" absolute lg:left-20 left-12  h-[172px] border-l border-black w-0" />
          <span className="relative bottom-3 text-[16px] bg-black text-blue-400 p-3 rounded-full ml-3 z-10">
            01
          </span>
          <span className="relative top-3 left-3 font-semibold ">
            Introduce yourself
          </span>
          <p className="relative mt-3 left-16 text-black lg:w-full w-60">
            Share your business, location and the kind of students you work
            with.
          </p>
        </div>
        <div className="lg:w-60 w-full mt-17">
          {/* Desktop: Fixed height */}
          <div className="absolute lg:left-99 left-12 h-[172px] border-l border-black w-0" />{" "}
          <span className="relative bottom-3 text-[16px] bg-black text-blue-400 p-3 rounded-full ml-3 z-10">
            02
          </span>
          <span className="relative top-3 left-3 font-semibold ">
            Find the right fit
          </span>
          <p className="relative mt-3 left-16 text-black lg:w-full w-60">
            Our team discusses your goals and the most suitable partnership
            route.
          </p>
        </div>
        <div className="lg:w-60 w-full mt-17">
          <div className=" absolute lg:left-179 left-12  h-[172px] border-l border-black w-0" />

          <span className="relative bottom-3 text-[16px] bg-black text-blue-400 p-3 rounded-full ml-3 z-10">
            03
          </span>
          <span className="relative top-3 left-3 font-semibold ">
            Agree on the details
          </span>
          <p className="relative mt-3 left-16 text-black lg:w-full w-60">
            Clarify responsibilities, commercial terms and the process before
            starting.
          </p>
        </div>
        <div className="lg:w-60 w-full mt-17">
          <div className=" absolute lg:left-258 left-12  h-[172px] border-l border-black w-0" />
          <span className="relative bottom-3 text-[16px] bg-black text-blue-400 p-3 rounded-full ml-3 z-10">
            04
          </span>
          <span className="relative top-3 left-3 font-semibold ">
            Start working together
          </span>
          <p className="relative mt-3 left-16 text-black lg:w-full w-60">
            Introduce suitable enquiries and coordinate the next steps with
            Orbis Nexa.
          </p>
        </div>
      </div>
    </section>
  );
}
