"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Team Member 01",
    role: "Student Counsellor",
    initials: "01",
    description:
      "Helping students choose the right destination and academic pathway.",
  },
  {
    name: "Team Member 02",
    role: "Admissions Specialist",
    initials: "02",
    description:
      "Supporting students throughout university applications and admissions.",
  },
  {
    name: "Team Member 03",
    role: "Visa Consultant",
    initials: "03",
    description: "Guiding students through visa documentation and preparation.",
  },
  {
    name: "Team Member 04",
    role: "Student Support Advisor",
    initials: "04",
    description:
      "Making every step of the international education journey easier.",
  },
  {
    name: "Team Member 05",
    role: "Student Support Advisor",
    initials: "05",
    description:
      "Making every step of the international education journey easier.",
  },
  {
    name: "Team Member 06",
    role: "Student Support Advisor",
    initials: "06",
    description:
      "Making every step of the international education journey easier.",
  },
  {
    name: "Team Member 07",
    role: "Student Support Advisor",
    initials: "07",
    description:
      "Making every step of the international education journey easier.",
  },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  const activeMember = teamMembers[activeIndex];
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
        People Behind Your Plan
      </p>
      <div className="flex lg:flex-row flex-col gap-3 mt-2 items-center justify-between">
        <h2 className="lg:text-6xl text-4xl font-semibold lg:w-150">
          One expert team. Every important step.
        </h2>
        <p className="text-gray-600 lg:w-120 text-lg">
          Specialists work together across counselling, admissions, visa
          preparation and student support—so your journey stays clear and
          connected.
        </p>
      </div>

      {/* Team Carousel */}
      <div className="relative mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers
              .slice(
                activeIndex * cardsPerSlide,
                activeIndex * cardsPerSlide + cardsPerSlide,
              )
              .map((member, index) => (
                <motion.div
                  key={member.initials}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.5,
                  }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-blue-100 via-sky-50 to-blue-200 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      className="w-40 h-40 rounded-full bg-white/70 border border-white flex items-center justify-center shadow-lg"
                    >
                      <span className="text-5xl font-bold text-[#0265AA]">
                        {member.initials}
                      </span>
                    </motion.div>

                    <span className="absolute bottom-5 left-5 text-5xl font-extrabold text-black/10">
                      ORBIS
                    </span>
                  </div>

                  {/* Member Details */}
                  <div className="p-6">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#0265AA]">
                      {member.role}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {member.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">
                        ORBIS NEXA TEAM
                      </span>

                      <button
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className="w-10 h-10 rounded-full bg-blue-50 text-[#0265AA] flex items-center justify-center hover:bg-[#0265AA] hover:text-white transition"
                      >
                        <FaLinkedin size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-9 flex items-center justify-between">
          {/* Pagination */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-9 bg-[#0265AA]"
                    : "w-2 bg-gray-300 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous team members"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#0265AA] hover:text-white hover:border-[#0265AA] transition-all"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next team members"
              className="w-12 h-12 rounded-full bg-[#0265AA] text-white flex items-center justify-center hover:bg-blue-800 transition-all"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
