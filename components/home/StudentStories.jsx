"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const storiesData = [
  {
    id: 1,
    studentName: "Shahid Mansha",
    studentImage:
      "https://png.pngtree.com/png-clipart/20231129/original/pngtree-casual-man-posing-on-white-background-american-photo-png-image_13736971.png",
    universityName: "LSBU London South Bank",
    universityLogo: "https://logo.clearbit.com/lsbu.ac.uk",
    country: "UK",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    status: "VISA APPROVED",
  },
  {
    id: 2,
    studentName: "M. Mansoor",
    studentImage:
      "https://png.pngtree.com/png-clipart/20231129/original/pngtree-casual-man-posing-on-white-background-american-photo-png-image_13736971.png",
    universityName: "University of Northampton",
    universityLogo: "https://logo.clearbit.com/northampton.ac.uk",
    country: "UK",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    status: "VISA APPROVED",
  },
  {
    id: 3,
    studentName: "Jahangir Shafique",
    studentImage:
      "https://png.pngtree.com/png-clipart/20231129/original/pngtree-casual-man-posing-on-white-background-american-photo-png-image_13736971.png",
    universityName: "University of East London",
    universityLogo: "https://logo.clearbit.com/uel.ac.uk",
    country: "UK",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    status: "VISA APPROVED",
  },
  {
    id: 4,
    studentName: "Israr Ahmed",
    studentImage:
      "https://png.pngtree.com/png-clipart/20231129/original/pngtree-casual-man-posing-on-white-background-american-photo-png-image_13736971.png",
    universityName: "University of Salford Manchester",
    universityLogo: "https://logo.clearbit.com/salford.ac.uk",
    country: "UK",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    status: "VISA APPROVED",
  },
  {
    id: 5,
    studentName: "Ali Raza",
    studentImage:
      "https://png.pngtree.com/png-clipart/20231129/original/pngtree-casual-man-posing-on-white-background-american-photo-png-image_13736971.png",
    universityName: "Deakin University",
    universityLogo: "https://logo.clearbit.com/deakin.edu.au",
    country: "Australia",
    flagUrl: "https://flagcdn.com/w40/au.png",
    status: "VISA APPROVED",
  },
  {
    id: 6,
    studentName: "Fatima Noor",
    studentImage:
      "https://static.vecteezy.com/system/resources/previews/078/883/833/non_2x/casual-modern-lifestyle-young-asian-man-with-coffee-isolated-cutout-on-transparent-background-free-png.png",
    universityName: "University of Windsor",
    universityLogo: "https://logo.clearbit.com/uwindsor.ca",
    country: "Canada",
    flagUrl: "https://flagcdn.com/w40/ca.png",
    status: "VISA APPROVED",
  },
];

export default function StudentStories() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % storiesData.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1));
  };

  const visibleStories = Array.from({ length: itemsPerPage }, (_, i) => {
    return storiesData[(startIndex + i) % storiesData.length];
  });
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#0b1c38]">
          OUR STUDENT <span className="text-[#0265AA]">SUCCESS STORIES</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
          Watch real students share how our guidance helped them achieve their
          study abroad goals.
        </p>
        <p className="mt-4 text-sm font-semibold tracking-wide text-gray-800">
          Success stories from across the world
        </p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative mx-auto max-w-7xl">
        {/* PREV BUTTON */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous stories"
          className="absolute -left-3 sm:-left-5 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0265AA] shadow-lg border border-gray-100 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft size={22} className="stroke-[2.5]" />
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next stories"
          className="absolute -right-3 sm:-right-5 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0265AA] shadow-lg border border-gray-100 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight size={22} className="stroke-[2.5]" />
        </button>

        {/* CARDS WRAPPER: Mobile par single card + peek effect, Desktop (lg) par 4-grid */}
        <div className="flex gap-5 overflow-hidden py-2 lg:grid lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleStories.map((story) => (
              <motion.div
                key={`${story.id}-${startIndex}`}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-[85%] flex-shrink-0 lg:w-full group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-[#f8fafc] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* TOP BANNER TEXT */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0]">
                  {/* "VISA APPROVED" WATERMARK HEADER */}
                  <div className="absolute top-2 left-0 right-0 z-10 text-center select-none pointer-events-none">
                    <span className="text-2xl font-black tracking-wider text-blue-500/80 drop-shadow-sm uppercase">
                      VISA APPROVED
                    </span>
                  </div>

                  {/* NAVY CURVED WAVE OVERLAY */}
                  <div className="absolute inset-y-0 left-0 w-full opacity-90 z-0">
                    <svg
                      viewBox="0 0 300 400"
                      className="h-full w-full object-cover"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M -50,160 Q 60,110 120,200 T 260,250 T 360,190 L 360,400 L -50,400 Z"
                        fill="#0b2447"
                      />
                    </svg>
                  </div>

                  {/* STUDENT IMAGE */}
                  <div className="relative h-full w-full z-10 flex items-end justify-center">
                    <Image
                      src={story.studentImage}
                      alt={story.studentName}
                      width={280}
                      height={320}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* STUDENT NAME & BADGE */}
                  <div className="absolute right-3 top-24 z-20 flex flex-col items-end">
                    <div className="rounded-lg bg-black/60 px-2 py-1 text-right backdrop-blur-sm">
                      <p className="text-xs font-bold text-white">
                        {story.studentName}
                      </p>
                      <p className="text-[10px] text-gray-300">
                        Student&apos;s Visa
                      </p>
                    </div>
                    <span className="mt-1 inline-block rounded bg-[#0265AA] px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-white">
                      APPROVED
                    </span>
                  </div>

                  {/* UNIVERSITY LOGO BADGE */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[88%] rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur flex items-center justify-center">
                    <div className="relative h-8 w-full flex items-center justify-center">
                      <img
                        src={story.universityLogo}
                        alt={story.universityName}
                        className="max-h-8 w-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden",
                          );
                        }}
                      />
                      <span className="hidden text-[11px] font-extrabold uppercase text-[#0b1c38] text-center tracking-tight leading-tight line-clamp-1">
                        {story.universityName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM CARD FOOTER */}
                <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3">
                  {/* COUNTRY FLAG + NAME */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={story.flagUrl}
                      alt={story.country}
                      width={22}
                      height={15}
                      className="rounded-sm shadow-xs object-cover"
                    />
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      {story.country}
                    </span>
                  </div>

                  {/* VISA APPROVED STATUS CHIP */}
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0265AA] text-white">
                      <ArrowUpRight size={13} className="stroke-[3]" />
                    </span>
                    <span className="text-[11px] font-extrabold text-[#0b1c38] tracking-tight">
                      {story.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
