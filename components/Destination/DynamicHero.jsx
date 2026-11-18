"use client";

import { getCountryData } from "@/services/data/Countrydata";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import VisaRequirements from "./VisaRequirements";
export default function DynamicHero({ countryCode }) {
  const country = getCountryData(countryCode);

  // Optional: Allow interactive clicking on study areas if desired
  const [areas, setAreas] = useState(
    country.studyAreas || [
      { title: "Business & Management", active: false },
      { title: "Computing & Data", active: true },
      { title: "Engineering", active: false },
      { title: "Health & Life Sciences", active: false },
      { title: "Law & Social Sciences", active: true },
      { title: "Creative Arts & Media", active: false },
    ],
  );

  // Default pathways if not explicitly defined in the country object
  const pathways = country.studyPathways || [
    {
      level: "Foundation or pathway",
      desc: "Build subject knowledge, academic skills or language readiness before progressing.",
    },
    {
      level: "Undergraduate study",
      desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
    },
    {
      level: "Postgraduate study",
      desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
    },
    {
      level: "Doctoral research",
      desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
    },
  ];
  if (!country) {
    return (
      <div className="p-8 text-center mt-150px">
        <h1 className="text-2xl font-bold">Country Not Found</h1>
        <p>We couldn't find any data for code: {countryCode}</p>
      </div>
    );
  }
  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative mt-[100px] md:mt-[120px] lg:h-[600px] h-[700px]  w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f]">
          <div className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 lg:px-0">
            <div className="lg:w-[38%]">
              <p className="text-white lg:p-15 p-5 ">
                Home / <span>Destinations</span> /{" "}
                <span>{countryCode?.toUpperCase()}</span>
              </p>

              <div className="relative lg:bottom-20 bottom-10 flex flex-col gap-5 lg:p-10 p-5 lg:ml-5 mt-5">
                <h1 className="lg:text-6xl lg:max-w-[560px] text-4xl sm:text-4xl font-semibold text-white">
                  {country?.h1}
                </h1>
                <p className="text-slate-50 lg:text-2xl tracking-wide">
                  {country.p}
                </p>
                <p className="lg:max-w-[560px] text-gray-300 leading-7 text-sm sm:text-base">
                  {country.description}
                </p>
                <div className="flex lg:flex-row flex-col gap-3">
                  <button className="group inline-flex lg:text-[12px] items-center gap-3 rounded-xl bg-[#0265AA] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#7ed9fd] hover:text-[#0265AA] active:bg-[#7ed9fd] active:text-[#0265AA]">
                    {country.btn1}
                    <ArrowRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </button>
                  <button className="group inline-flex items-center gap-3 rounded-xl border-2 border-white px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0265AA] active:bg-white active:text-[#0265aa]">
                    {country.btn2}
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex flex-col gap-2 justify-center items-center absolute lg:right-50 lg:top-50 top-140 right-20 ">
              <div className="bg-white p-2 lg:w-20 w-20 rounded-2xl">
                <img
                  src={`https://flagcdn.com/w40/${countryCode}.png`}
                  alt=""
                  className="lg:w-50 lg:h-10 w-30"
                />
              </div>
              <div className="text-center">
                <span className=" lg:text-2xl text-xl font-extrabold text-white">
                  {countryCode?.toUpperCase()}
                </span>
                <p className="text-slate-500">YOUR NEXT DESTINATION</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHy this Country */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Header Section */}
        <div className="mb-12">
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
              {country.whyHeading || `WHY ${country.code.toUpperCase()}`}
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Why study in{" "}
            <span className="italic font-serif font-normal text-gray-800">
              {country.name}?
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl text-base lg:text-lg">
            {country.p}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {country.benefits.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/80 flex flex-col justify-between overflow-hidden group hover:border-gray-200 transition-all duration-300"
            >
              {/* Top decorative indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-400 opacity-80"></div>

              <div>
                {/* Number Badge with glow/shadow */}
                <div className="inline-block mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center font-bold text-gray-900 text-lg shadow-md shadow-blue-200/50">
                    {item.step}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom-right decorative soft gradient circle matching your design */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-tl from-blue-200/40 to-blue-200/40 rounded-full blur-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
      {/* Table */}
      <VisaRequirements countryCode={countryCode} />

      {/* Study Areas */}
      <section className="bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            {/* Subheading */}
            <div className="flex items-center gap-3">
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
                Popular Study Areas
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Find a field that <br />
              <span className="italic font-serif font-normal text-blue-300">
                moves your future forward.
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md">
              Course availability and entry criteria vary by institution. SAG
              can help you compare options that fit your previous studies and
              career direction in {country.name}.
            </p>

            {/* Call to Action Link */}
            <div className="pt-2">
              <a
                href="#eligibility"
                className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm hover:underline tracking-wide group"
              >
                Get a personalised course shortlist
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Grid of Study Area Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                onClick={() => {
                  // Optional toggle action on click
                  const updated = [...areas];
                  updated[index].active = !updated[index].active;
                  setAreas(updated);
                }}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex items-center justify-between shadow-lg ${
                  area.active
                    ? "bg-blue-300 text-gray-950 border-blue-500 font-bold shadow-[#0265aa]/10"
                    : "bg-[#0b132b]/80 text-white border-white/10 hover:border-white/30 font-medium"
                }`}
              >
                <span className="text-base lg:text-lg tracking-tight">
                  {area.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pathway */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-[#f8fafc]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
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
              {country.studyPathwaysHeading || "STUDY PATHWAYS"}
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Choose the right <br />
            <span className="italic font-serif font-normal text-gray-800">
              academic level.
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/80 flex flex-col justify-between hover:border-gray-200 transition-all duration-300"
            >
              {/* Top decorative accent line (alternates green/amber like your screenshot) */}
              <div
                className={`absolute top-0 left-8 w-12 h-1 rounded-full ${index % 2 === 0 ? "bg-blue-400" : "bg-blue-200"}`}
              ></div>

              <div className="pt-2">
                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.level}
                </h3>

                {/* Card Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
