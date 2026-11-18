"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

// STATIC HERO DATA

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1758873272412-7166447a94ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    subtitle: "Study Abroad From Pakistan",
    title: "Best Study Abroad Consultants in Pakistan.",
    description:
      "Explore the right country, course and university with clear support from application planning to student visa.",
    button1: "Start Your Journey",
    button2: "Explore Destinations",
    link1: "/contact",
    link2: "/destinations",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=85",
    subtitle: "UNIVERSTIES AROUND THE WORLD",
    title: "Find Your Perfect University Match.",
    description:
      "Discover international study options matched to your academic profile, budget and long-term career plans.",
    button1: "Find Your Course",
    link1: "/contact",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=85",
    subtitle: "Expert Counseling",
    title: "Plan Clearly, Apply Confidently, and Succeed Globally.",
    description:
      "From university shortlisting and strong applications to scholarships and visa preparation, we guide every step.",
    button1: "Free Assessment",
    link1: "/contact",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1581093196277-9f608bb3d4b6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    subtitle: "Start Your Global Journey",
    title: "Your Global Journey Starts Here.",
    description:
      "Speak with our counsellors, understand your best-fit options and build a practical study plan from Pakistan.",
    button1: "Talk to an Expert",
    button2: "Call Now",
    link1: "/contact",
    link2: "tel:+923070474920",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("Courses");
  const sectionRef = useRef(null);
  // AUTO SLIDE - PAUSE WHEN HERO IS NOT VISIBLE
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let interval = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Prevent multiple intervals
          if (!interval) {
            interval = setInterval(() => {
              setCurrent((prev) => (prev + 1) % slides.length);
            }, 5000);
          }
        } else {
          clearInterval(interval);
          interval = null;
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // AUTO SLIDE
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[current];

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* BACKGROUND CAROUSEL */}

      <div className="relative mt-[100px] h-[640px] md:mt-[120px] md:h-[820px] w-full overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide?.image})`,
              backgroundColor: "#123047",
            }}
          />
        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              {/* SUBTITLE */}
              <p className="relative flex items-center gap-3 tracking-[0.1em] w-fit max-w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-2 rounded-full text-blue-400/90 text-xs sm:text-sm">
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
                {slide.subtitle}
              </p>

              {/* HEADING */}
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="mb-9 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                {slide.description}
              </p>

              {/* CTA */}
              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4">
                {/* PRIMARY BUTTON */}
                <Link
                  href={slide.link1}
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0265AA] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA]"
                >
                  {slide.button1}

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>

                {/* SECONDARY BUTTON */}
                {slide.button2 && slide.link2 && (
                  <Link
                    href={slide.link2}
                    className="group inline-flex items-center gap-3 rounded-xl border-2 border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0265AA]"
                  >
                    {slide.button2}
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="absolute lg:bottom-10 bottom-5 right-6 z-20 flex items-center gap-3 md:right-16">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* PAGINATION DOTS */}
        <div className="absolute lg:bottom-14 bottom-7 left-6 z-20 flex items-center gap-2 md:left-16">
          {slides.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-[#7ed9fd]"
                  : "w-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. OVERLAPPING SEARCH CARD */}
      <div className="relative z-30 mx-auto lg:-mt-20 -mt-4 w-full max-w-5xl px-3 sm:px-6">
        <div className="rounded-3xl bg-white shadow-2xl p-6 md:p-8">
          {/* TABS */}
          <div className="flex items-center gap-8 border-b border-gray-200 pb-4">
            {["Courses", "Scholarships", "Universities"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-base font-bold transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "text-[#123047]"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-17px] left-0 h-[3px] w-full bg-[#0265AA]" />
                )}
              </button>
            ))}
          </div>

          {/* INPUT DROPDOWNS */}
          <div className="mt-8 ">
            {/* Input 1 */}
            {activeTab === "Courses" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="relative">
                  <select className="w-full appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Search by course subject</option>
                    <option value="cs">Computer Science & IT</option>
                    <option value="business">Business & Management</option>
                    <option value="engineering">Engineering</option>
                    <option value="health">Medicine & Health Sciences</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Select study level</option>
                    <option value="undergraduate">
                      Undergraduate (Bachelor's)
                    </option>
                    <option value="postgraduate">
                      Postgraduate (Master's)
                    </option>
                    <option value="doctorate">Doctorate (PhD)</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] hover:border-[#0265AA] focus:outline-none">
                    <option value="">Select a study destination</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            )}

            {activeTab === "Scholarships" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="relative">
                  <select className="w-full appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Select Study level</option>
                    <option value="undergraduate">
                      Undergraduate (Bachelor's)
                    </option>
                    <option value="postgraduate">
                      Postgraduate (Master's)
                    </option>
                    <option value="doctorate">Doctorate (PhD)</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Select a study destination</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">ScholarShip Type</option>
                    <option value="uk">Fully Funded</option>
                    <option value="australia">Partially Funded</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            )}

            {activeTab === "Universities" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="relative">
                  <select className="w-full appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Select a study destination</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <select className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] focus:outline-none hover:border-[#0265AA]">
                    <option value="">Select University Type</option>
                    <option value="uk">Public University</option>
                    <option value="australia">Private University</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>

                <div className="relative">
                  <input
                    list="universities-list"
                    type="search"
                    name="university"
                    placeholder="Search or select university..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 text-sm text-gray-700 shadow-sm focus:border-[#0265AA] hover:border-[#0265AA] focus:outline-none"
                  />
                  <datalist id="universities-list">
                    <option value="Oxford University" />
                    <option value="Cambridge University" />
                    <option value="Harvard University" />
                    <option value="University of Manchester" />
                  </datalist>
                </div>
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d1d3a] px-10 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0265AA]"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
