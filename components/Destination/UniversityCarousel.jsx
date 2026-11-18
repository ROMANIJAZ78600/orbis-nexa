"use client";

import React, { useRef } from "react";
import { database, getCountryData } from "@/services/data/Countrydata"; // Adjust path as needed
import { motion } from "framer-motion";
export default function UniversityCarousel({ countryCode }) {
  // Fallback to 'gb' if code is missing or not found
  const country = getCountryData(countryCode);

  const scrollRef = useRef(null);

  // Scroll handler functions for arrow buttons
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const universities = country.universities || [
    { name: "University of Oxford", location: country.capital },
  ];

  return (
    <section className="py-16 bg-[#fcfdfd] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col items-center text-center">
        {/* Top Header */}
        <div className="flex items-center gap-2 mb-2">
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
            {country.universitiesHeading ||
              `LEADING ${country.code.toUpperCase()} UNIVERSITIES`}
          </p>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-3">
          Explore globally recognized <br />
          <span className="italic font-serif font-normal text-gray-800">
            institutions.
          </span>
        </h2>

        <p className="text-gray-500 text-sm lg:text-base max-w-xl">
          Discover a selection of renowned {country.name} universities. Your
          best-fit choice should be based on course content, entry requirements,
          budget and career direction.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all text-gray-800"
          aria-label="Scroll Left"
        >
          ←
        </button>

        {/* Scrolling Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {universities.map((uni, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/80 flex flex-col items-center text-center snap-start hover:border-gray-200 transition-all"
            >
              {/* Simulated University Crest / Icon Box */}
              <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                <span className="font-black text-2xl text-[#0265aa]">
                  {uni.name.charAt(0)}
                </span>
              </div>

              {/* University Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">
                {uni.name}
              </h3>

              {/* Location */}
              <p className="text-xs text-gray-400 font-medium">
                {uni.location || country.capital}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all text-gray-800"
          aria-label="Scroll Right"
        >
          →
        </button>
      </div>

      {/* Footer Disclaimer */}
      {/* Footer Disclaimer */}
      <div className="text-center mt-8 text-[11px] text-gray-400 tracking-wider uppercase">
        {/* Visible ONLY on large screens (desktop) */}
        <span className="hidden lg:inline">
          University logos are shown for identification and exploration only;
          inclusion does not imply a formal partnership. •
        </span>

        {/* Visible on all screens or specifically styled for mobile */}
        <span className="block lg:inline lg:ml-1">Swipe or use arrows</span>
      </div>
    </section>
  );
}
